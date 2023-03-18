import React from 'react';
import "./Acceuil.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import {vente, gestionDePaie, finance, comptabilité, gestionDeStock, achat} from "../../redux/moduleSlice";




const Acceuil = () => {
    const dispatch = useDispatch();
    const module = useSelector(state => state.modules);
    
    return (
        <>
        <div className='bckgr'>
        <div className='acl'>
            <Row className='align-items-center justify-content-center'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                       <Link to={`/platform/${"vente"}`} onClick={()=> dispatch(vente())}>
                       <button className='bt' >
                            <img src='/vente.png' className='img2'>
                                </img>
                                </button>
                                </Link>
                                
                        <p className='p_acceuil'>Vente</p>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <Link to={`/platform/achat`} onClick={()=> dispatch(achat())}>
                        <button className='bt'  >
                            <img src='/achat.png' className='img2'>
                                </img>
                                </button>
                                </Link>

                        <p className='p_acceuil'>Achat</p>
                        </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <Link to={`/platform/gestion de stock`} onClick={()=> dispatch(gestionDeStock())}>
                        <button className='bt'  >
                            <img src='/gestion de stock.png' className='img2'>
                                </img>
                                </button>
                                </Link>
                        <p className='p_acceuil'>Gestion de stock</p>
                        </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <Link to={`/platform/comptabilité`}>
                            <button className='bt' onClick={()=> dispatch(comptabilité())}>
                                <img src='/comptabilite.png' className='img2'>
                                    </img>
                                    </button>
                                    </Link>
                        <p className='p_acceuil'>Comptabilité</p>
                        </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <Link to={`/platform/finance`}>
                        <button className='bt' onClick={()=> dispatch(finance())}>
                            <img src='/finance.png' className='img2'>
                                </img>
                                </button>
                                </Link>
                        <p className='p_acceuil'>Finance</p>
                        </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <Link to={`/platform/gestion de paie`}>
                        <button className='bt' onClick={()=> dispatch(gestionDePaie())}>
                            <img src='/Gestion de paie.png' className='img2'>
                                </img>
                                </button>
                                </Link>
                        <p className='p_acceuil'>Gestion de paie</p>
                        </Col>
            
                
                
                
            </Row> 
        </div>
        </div>
           
            
        </>
    );
}

export default Acceuil;

import React from 'react';
import { Row,Col,Container,Button,Form } from "react-bootstrap";
import { useState } from 'react';
import "./Contacts.css"
import FormClients from './FormClients';
import { useDispatch, useSelector } from "react-redux";
import {toAddCompanyName, toAddTags, toAddMobile, toAddEmail, toAddPhone, toAddWebsiteLink, toAddVat, toAddGst, toAddCompanyAdresse, toAddCompanyStreet, toAddCompanyCity, toAddCompanyZip, toAddCompanyState, toAddCompanyCountry, toAddClientData, toAddLogo  } from '../../../redux/clientSlice';
import ClientCard from './ClientCard';
import { Link } from 'react-router-dom';


const Contacts = () => {
    const dispatch = useDispatch();
    const [show, setshow] = useState("Create");
    const clientSelector = useSelector(state=> state.client.client);
    const clientDataSelector = useSelector(state=>state.client.clientData);
    console.log(clientDataSelector);
    
    


    const cancel = () => {
        setshow("Create") ;
        dispatch(toAddLogo(""));
        dispatch(toAddCompanyName(""));
        dispatch(toAddCompanyAdresse(""));
        dispatch(toAddCompanyStreet(""));
        dispatch(toAddCompanyCity(""));
        dispatch(toAddCompanyState(""));
        dispatch(toAddCompanyZip(""));
        dispatch(toAddCompanyCountry(""));
        dispatch(toAddGst(""));
        dispatch(toAddVat(""));
        dispatch(toAddWebsiteLink(""));
        dispatch(toAddPhone(""));
        dispatch(toAddMobile(""));
        dispatch(toAddEmail(""));
        dispatch(toAddTags(""));

    }

    const addClient = ()=>{
        setshow("Create");
        dispatch(toAddClientData(clientSelector));  
        dispatch(toAddLogo(""));
        dispatch(toAddCompanyName(""));
        dispatch(toAddCompanyAdresse(""));
        dispatch(toAddCompanyStreet(""));
        dispatch(toAddCompanyCity(""));
        dispatch(toAddCompanyState(""));
        dispatch(toAddCompanyZip(""));
        dispatch(toAddCompanyCountry(""));
        dispatch(toAddGst(""));
        dispatch(toAddVat(""));
        dispatch(toAddWebsiteLink(""));
        dispatch(toAddPhone(""));
        dispatch(toAddMobile(""));
        dispatch(toAddEmail(""));
        dispatch(toAddTags("")); 
    }
    
  



    return (
        <div>
            <Container fluid>
            <Row className=''>
                <Col className=' d-flex ' >
                <div className='createContact p-4'>
                <h3 className='m-1'>Contacts</h3>
                { show==="Create"
                ? <Button className='m-2' onClick={()=>setshow("Save")}>{show}</Button>
                :<Button className='m-2' onClick={addClient }>{show}</Button>}
                {show==="Save"&&<Button onClick={cancel}>Cancel</Button>}
                
                </div>
                <div className='searchContact p-5'>
                    <div className='mb-2'>
                        <Form.Control size="sm" type="text" placeholder="Search" />
                    </div>
                    <div className='d-flex'>
                        <div className='search-settings'>
                            <a href='#'className='m-2'><img src='/favorite.png'></img></a>
                            <a href='#' className='m-2'><img src='/filter.png'></img></a>
                            <a href='#' className='m-2'><img src='/groupby.png'></img></a>
                            

                        </div>
                        <div className='dispalay-settings'>

                        </div>
                    </div>
                     
                </div>
                </Col>
                <Col>
                </Col>
            </Row>
            </Container>
            <Container fluid>
            <Row className='ClientShow'>
                
                    {show==="Save" && <FormClients/>}
                    {show==="Create" && clientDataSelector.map(client => <Col lg={3} key={client.Id} ><Link to={`/client/${client.Id}`} key={client.Id}   style={{ color: 'inherit', textDecoration: 'inherit'}}><ClientCard  client={client}/></Link></Col>)}
                    </Row>
            </Container>
            
        </div>
    );
}

export default Contacts;

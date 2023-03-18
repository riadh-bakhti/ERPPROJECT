import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css" ;
import Stars  from "../Stars/Stars";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from 'react';
import { Row,Col,Container,Button } from "react-bootstrap";






const Home = () => {
    const slides = [
        {
            title: "Suivez votre trésorerie et votre prévisionnel pour anticiper les charges à venir.",
            par:"Contrôlez l’état de votre trésorerie et estimez votre besoin en fonds de roulement pour gérer sereinement votre développement.",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/master/products/dpnmgciq.png?h=572&iar=0&w=1027&extension=webp&hash=C5C6FD0342B73E49F6E46148C99E63B6",
        },
        {
            title: "Prenez des décisions rapides et éclairées grâce à des données et tableaux de bord centralisant l’ensemble de vos données.",
            par:"Grâce aux outils avancés de réapprovisionnement, de contremarque et de fabrication, gérez votre stock à flux tendu, optimisez ainsi votre trésorerie et vos coûts de stockage.",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/master/products/vjwo5sdk.png?h=591&iar=0&w=1029&extension=webp&hash=1005EDA083AED9599F149CAA8350B66B",
        },
        {
            title: "Vos rapprochements bancaires automatisés et sans ressaisie",
            par:"Gagnez du temps grâce au rapprochement bancaire automatique, contrôlez rapidement le pointage et, si nécessaire, procédez facilement aux corrections souhaitées.",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/master/products/nb3lklsx.png?h=685&iar=0&w=999&extension=webp&hash=E0A329714A87BC0E64E03E61E3CD9FCD",
        },
        {
            title: "Automatisez l’ensemble de vos flux bancaires",
            par:"Générer automatiquement les ordres de paiements sécurisés par une double signature électronique",
            src:"https://www.sage.com/fr-ma/-/media/images/sagedotcom/morocco/product%20images/sage-100-cloud-screen-4.png?h=480&iar=0&w=730&extension=webp&hash=FB90D381A05D3E71CBCE1C09EB285C49",
        },
    ];

    function handleclick (b) {
        let greenselector = document.querySelector(".blackselector");
        greenselector.style.transform =`translateY(${b}px)`;      
    };
    const [slideIndex, setslideIndex] = useState(0);
    
     return (
         <>
         <Navbar/>
         <section className='pt-5'>
         <Container >
            <Row className='align-items-center '>
            <Col xxl={6}>
                <h1 className='mb-3 '>
                    Des employés extraordinaires méritent un logiciel extraordinaire        
                </h1>
                <p >
                    La seule plateforme dont vous aurez besoin pour gérer votre entreprise :
                    des applications intégrées, simples et appréciées par des millions d'utilisateurs satisfaits.
                 </p>
                </Col>
                <Col xxl={6} >
                <img src='/Statistics.svg' alt='pc' className='img1'></img>
                </Col>
            </Row>
         </Container>
         </section>
         <section className='pt-5'>
            <Container >
                <Row>
                    <Col className='card1 d-flex flex-column text-center py-3  '>
                        <img src="/icon-1.png" alt="dsg" className='image d-block mx-auto mb-3 ' />
                            <h3 className='mb-2'>Trello : qu'est-ce que c'est ?</h3>
                            <p className='mb-3'>Trello est l'outil visuel qui permet à votre équipe de gérer n'importe quel type de projet ou de flux de travail, ou encore de suivre les tâches.</p>
                            <Button  variant="dark">visite guidée de trello</Button>
                    </Col>
                    <Col className='card1 d-flex flex-column text-center py-3 '>
                        <img src="/icon-2.png" alt="sdf" className='image d-block mx-auto mb-3' />
                        <h3 className='mb-2'>Consultez les tarifs Trello</h3>
                        <p className='mb-3'>Que votre équipe soit composée de 2 ou de 2 000 membres, vous pouvez personnaliser Trello pour votre organisation. Trouvez l'option qui vous correspond.</p>
                        <Button variant="dark">consulter les tarifs</Button>
                    </Col>
                    <Col className='card1 d-flex flex-column text-center py-3 '>
                        <img src="/icon-3.png" alt="sdgfsdg" className='image d-block mx-auto mb-3' />
                        <h3 className='mb-2'>Découvrez Trello Enterprise</h3>
                        <p className='mb-3'>L'outil de productivité plébiscité par les équipes, complété par les fonctionnalités et la sécurité requises pour évoluer.</p>
                        <br/>
                        <Button variant="dark">en savoir plus</Button>
                    </Col>

                </Row>
                 
 
            </Container>
            </section>
            
            <section className='pt-5'>
            <Container fluid >
                <Row>
            <Col className='mt-5'>
            <img src='/Our-solution.png' alt='aaazz' style={{height: "550px" ,width:"650px"}}></img>
            </Col>
            <Col className='d-flex flex-column justify-content-center mt-5 '>
            <h3 className='w-75 mb-3'>Fini les intégrations pénibles</h3>
            <p className='w-75'>
                Si vous avez des solutions logicielles individuelles qui fonctionnent, mais qui ne sont pas intégrées, il est probable que vous encodiez plus d'une fois la même information et qu'il vous manque un aperçu global de la situation.
               Entre les applications Odoo et les dizaines de milliers d'applications développées par la communauté, il y aura toujours une réponse aux besoins de votre entreprise grâce à notre solution unique, rentable et modulaire : il n'est plus question de faire coopérer différentes technologies.
               Les applications Odoo sont parfaitement intégrées les unes aux autres, vous permettant d'automatiser entièrement vos processus, de réaliser des économies et de bénéficier d'avantages.
            </p>
            </Col>
             </Row>
         </Container>
         </section>
         <section className='pt-5' style={{backgroundColor: "#e6e6e6"}}>
            <Container fluid >
                <Row>
                    <Col className=' text-center'>
                        <h2>Optimisez le pilotage de votre activité</h2>
                        <p>Rationalisez et automatisez vos processus métiers avec Sage 100</p>
                    </Col>
                </Row>
                <Row >
         
                    <Col >
                     <p className='ms-3'>Sage 100 apporte des applications intégrées que vous pouvez adapter facilement à chaque service de votre entreprise.</p>
                     <nav className='nav_links_2'>
                         <div className="blackselector ms-3"></div>
                         <ol className='list1'>
                             <li onClick={()=> {setslideIndex(0);handleclick(0)}}>Simplifiez les finances de votre entreprise</li>
                             <li onClick={()=> {setslideIndex(1);handleclick(80)}}>Automatisez votre chaîne d'approvisionnement</li>
                             <li onClick={()=> {setslideIndex(2);handleclick(155)}}>Automatisez vos procédures financières</li>
                             <li onClick={()=> {setslideIndex(3);handleclick(235)}}>Optimisez et sécurisez vos paiements</li>
                         </ol>
                     </nav>
                    </Col> 
                    <Col xxl={9} className='d-flex align-items-center mx-5 mb-4' style={{backgroundColor: "white"}} >
                             <div className="w-75 px-5 ">
                             {slideIndex >= 0 && <h2 className='title'>{slides[slideIndex].title}</h2>}
                             {slideIndex >= 0 && <p className='discription'>{slides[slideIndex].par}</p>}
                             </div>
                             <div className='w-75'> 
                             {slideIndex >= 0 && <img src={slides[slideIndex].src} className="SlideImg" alt='img' ></img>}   
                             </div>
                    </Col>
                            
                </Row>
            </Container>
         </section>
         <section className="section5">
            <Container >
                <Row className='py-5'>
                    <Col className='text-center'>
                     <h3>Over 3,000 reviews & ratings</h3>
                     <p>Highly rated by thousands of customers all over the world</p>
                    </Col>
                </Row>
                <Row className='py-5 mb-5' >
                    <Col xxl={2} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src="https://www-cms.pipedriveassets.com/Company-logos/Capterra-1.svg" alt="img1" className='w-75 ' />
                        <Stars Valuee="4"/> 
                    </Col>
                    <Col xxl={2} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src="https://www-cms.pipedriveassets.com/Company-logos/G2.png" alt="img2" className='w-75 ' />
                        <Stars Valuee="5"/>   
                    </Col>
                    <Col xxl={2} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src="https://www-cms.pipedriveassets.com/Company-logos/Gartner-logo.svg" alt="img3" className='w-75 ' />
                        <Stars Valuee="4" />  
                    </Col>
                    <Col xxl={2} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src="https://www-cms.pipedriveassets.com/Company-logos/getapp-logo.svg" alt="img4" className='w-75 ' />
                        <Stars Valuee="5"/>
                    </Col>
                    <Col xxl={2} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src="https://www-cms.pipedriveassets.com/Company-logos/SoftwareAdvice.png" alt="img5" className='w-75' />
                        <Stars Valuee="4"/> 
                    </Col>
                    <Col xxl={2} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src="https://www-cms.pipedriveassets.com/Company-logos/SourceForge_logo_transparent.svg.png" alt="img6" className='w-75 py-3 ' />
                        <Stars Valuee="4"/> 
                    </Col>
                </Row>
        </Container>
             
         </section>
         <Footer/>
         
         </>
        
     );
     
 }
 
 export default Home;
                     
   
    

    

    

    
    
    

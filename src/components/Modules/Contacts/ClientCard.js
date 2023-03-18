import React from 'react';
import "./ClientCard.css" ;
import { Row,Col,Container,Button,Form } from "react-bootstrap";



const ClientCard = ({client}) => {

    return (
        <>
             <Col lg={4} className='client-card '>
              <div className='client-img'>
                {/* <img src={client.Logo}></img> */}
                </div>
              <div className='client-details'>
                <h3>{client.CompanyName}</h3>
                <p className='client-WebsiteLink'>{client.WebsiteLink}</p>
                <p className='client-Phone'>{client.Phone}</p>
              </div>
             </Col>
    </>
    );
}

export default ClientCard;

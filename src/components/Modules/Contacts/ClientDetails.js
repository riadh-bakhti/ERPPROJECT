import React from 'react';
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
const ClientDetails = () => {
  const {idclient} = useParams();
  const [Client, setClient] = useState({});
  const clientDataSelector = useSelector(state=>state.client.clientData);
  const findClient = () => {
    setClient(clientDataSelector.find((el)=> el.Id === Number(idclient)));
  };
  useEffect(() => {
    findClient();
  }, []);
  console.log(Client);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // send email using recipient, subject, and body
    setRecipient('');
    setSubject('');
    setBody('');
  };
  
    return (
        <>
    <Container fluid>
    <Row className='mt-3 pt-3'>
    <Col lg={7} className='p-2'>
    <Row>
        <Col lg={5}>
        {/* {Client.Logo && <img src={Client.Logo}></img>} */}
        </Col>
        </Row>
      <Row className='mt-5'>
        <Col lg={5}>
        {Client.CompanyName&&<p><strong>{Client.CompanyName}</strong></p>}
        </Col>
      </Row>
    <Row className='my-5'>
      <Col lg={5}>
        <Row className='mb-2'>
          <Col lg={{span: 4}}>
            <Form.Label htmlFor="Company Adresse">Company Adresse:</Form.Label>
            </Col>
          <Col >
            {Client.CompanyAdresse && <p><strong>{Client.CompanyAdresse}</strong></p>}
            </Col>
            </Row>
        <Row className='mb-2'>
          <Col lg={{ span: 8, offset: 4 }}>
            {Client.CompanyStreet && <p><strong>{Client.CompanyStreet}</strong> </p>}
            </Col>
            </Row>
        <Row className='mb-2'>
          <Col lg={{ span: 8, offset: 4 }}>
          <Row className='mb-2'>
            <Col>
              {Client.CompanyCity&&<p><strong>{Client.CompanyCity}</strong> </p>}
              </Col>
            <Col>
              {Client.CompanyState&&<p><strong>{Client.CompanyState}</strong></p> }
              </Col>
            <Col>
              {Client.CompanyZip&&<p><strong>{Client.CompanyZip}</strong></p> }
              </Col>
              </Row>
            </Col>
          <Col lg={{ span: 8, offset: 4 }}>
          {Client.CompanyCountry&&<p><strong>{Client.CompanyCountry}</strong> </p>}
            </Col>
          </Row>
        <Row className='mb-2'>
          <Col lg={{span: 4}}><Form.Label htmlFor="GST treatment">GST treatment:</Form.Label></Col>
          <Col>{Client.Gst&&<p><strong>{Client.Gst}</strong></p>} </Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{span: 4}}><Form.Label htmlFor="VAT">VAT:</Form.Label></Col>
          <Col>{Client.Vat&&<p><strong> {Client.Vat}</strong></p>} </Col>
        </Row> 
      </Col>
      <Col lg={6}>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Phone">Phone:</Form.Label></Col>
          <Col lg={{span: 8}}>{Client.Phone&&<p><strong>{Client.Phone}</strong></p>} </Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Mobile">Mobile:</Form.Label></Col>
          <Col lg={{span: 8}}>{Client.Mobile&&<p><strong>{Client.Mobile}</strong> </p> }</Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Email">Email:</Form.Label></Col>
          <Col lg={{span: 8}}>{Client.Email&&<p><strong>{Client.Email}</strong></p>} </Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Website Link">Website Link:</Form.Label></Col>
          <Col lg={{span: 8}}>{Client.WebsiteLink&&<p> <strong>{Client.WebsiteLink}</strong></p>} </Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2 }}><Form.Label htmlFor="Tags">Tags:</Form.Label></Col>
          <Col lg={{span: 8}}>{Client.Tags&&<p><strong>{Client.Tags}</strong></p>} </Col>
        </Row>
      </Col>
      </Row>
      </Col>
      <Col lg={5}>
      <Form className='p-1' onSubmit={handleSubmit}>
    {Client.Email&&<h6>to: {Client.Email}</h6>}

      <Form.Group className='my-3' controlId="subject">
        <Form.Label>Subject:</Form.Label>
        <Form.Control
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className='my-3' controlId="body">
        <Form.Label>Body:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>

      </Col>
      </Row>
      </Container>

            
        </>
    );
}

export default ClientDetails;

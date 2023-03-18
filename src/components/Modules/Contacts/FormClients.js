import Form from 'react-bootstrap/Form';
import { Row,Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { toAddLogo,toAddCompanyAdresse, toAddCompanyName,toAddCompanyCity,toAddCompanyState,toAddCompanyCountry, toAddCompanyStreet, toAddCompanyZip, toAddEmail,toAddGst , toAddMobile, toAddTags, toAddVat, toAddWebsiteLink, toAddPhone} from '../../../redux/clientSlice';

const FormClients = () => {
  const dispatch = useDispatch();

  return (
    <>
    <Container fluid className='backgroundd'>
    <Row className='mt-5 pt-5'>
        <Col lg={5}>
        <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Upload Logo:</Form.Label>
        <Form.Control type="file" size="sm" onChange={(e)=>dispatch(toAddLogo(e.target.value))} required />
        </Form.Group>
        </Col>
        </Row>
      <Row className='mt-5'>
        <Col lg={5}>
        <Form.Control size="lg" type="text" placeholder="Name" id="CompanyName" onChange={(e)=>dispatch(toAddCompanyName(e.target.value))} required />
        </Col>
      </Row>
    <Row className='my-5'>
      <Col lg={5}>
        <Row className='mb-2'>
          <Col lg={{span: 4}}>
            <Form.Label htmlFor="Company Adresse">Company Adresse:</Form.Label>
            </Col>
          <Col >
            <Form.Control size="sm" type="text" placeholder="Street"  id="Company Adresse"  onChange={(e)=>dispatch(toAddCompanyAdresse(e.target.value))} required />
            </Col>
            </Row>
        <Row className='mb-2'>
          <Col lg={{ span: 8, offset: 4 }}>
            <Form.Control size="sm" type="text" placeholder="Street2.." id="Company Street"  onChange={(e)=>dispatch(toAddCompanyStreet(e.target.value))} required />
            </Col>
            </Row>
        <Row className='mb-2'>
          <Col lg={{ span: 8, offset: 4 }}>
          <Row className='mb-2'>
            <Col>
              <Form.Control size="sm" type="text" placeholder="City" id="Company City"  onChange={(e)=>dispatch(toAddCompanyCity(e.target.value))} required />
              </Col>
            <Col>
              <Form.Control size="sm" type="text" placeholder="State" id="Company State"  onChange={(e)=>dispatch(toAddCompanyState(e.target.value))} required />
              </Col>
            <Col>
              <Form.Control size="sm" type="text" placeholder="ZIP" id="Company ZIP"  onChange={(e)=>dispatch(toAddCompanyZip(e.target.value))} required />
              </Col>
              </Row>
            </Col>
          <Col lg={{ span: 8, offset: 4 }}>
            <Form.Control size="sm" type="text" placeholder="Country"  onChange={(e)=>dispatch(toAddCompanyCountry(e.target.value))} required />
            </Col>
          </Row>
        <Row className='mb-2'>
          <Col lg={{span: 4}}><Form.Label htmlFor="GST treatment">GST treatment:</Form.Label></Col>
          <Col><Form.Control size="sm" type="text" id='GST treatment'  onChange={(e)=>dispatch(toAddGst(e.target.value))} required/></Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{span: 4}}><Form.Label htmlFor="VAT">VAT:</Form.Label></Col>
          <Col><Form.Control size="sm" type="text" placeholder="e.g BE3546843468" id='VAT'  onChange={(e)=>dispatch(toAddVat(e.target.value))} required /></Col>
        </Row> 
      </Col>
      <Col lg={6}>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Phone">Phone:</Form.Label></Col>
          <Col lg={{span: 8}}><Form.Control size="sm" type="text" id="Phone"  onChange={(e)=>dispatch(toAddPhone(e.target.value))} required /></Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Mobile">Mobile:</Form.Label></Col>
          <Col lg={{span: 8}}><Form.Control size="sm" type="text" id="Mobile"  onChange={(e)=>dispatch(toAddMobile(e.target.value))} required/></Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Email">Email:</Form.Label></Col>
          <Col lg={{span: 8}}><Form.Control size="sm" type="text"id="Email"  onChange={(e)=>dispatch(toAddEmail(e.target.value))} required /></Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2}}><Form.Label htmlFor="Website Link">Website Link:</Form.Label></Col>
          <Col lg={{span: 8}}><Form.Control size="sm" type="text" placeholder="e.g https //www.google.com" id="Website Link"  onChange={(e)=>dispatch(toAddWebsiteLink(e.target.value))} required/></Col>
        </Row>
        <Row className='mb-2'>
          <Col lg={{offset: 2 }}><Form.Label htmlFor="Tags">Tags:</Form.Label></Col>
          <Col lg={{span: 8}}><Form.Control size="sm" type="text" placeholder="tags..." id="Tags"  onChange={(e)=>dispatch(toAddTags(e.target.value))} required/></Col>
        </Row>
      </Col>
      </Row>
      </Container>

    </>
  );
}

export default FormClients;
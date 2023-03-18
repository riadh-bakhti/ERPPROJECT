import React from 'react';
import "./Login.css" ;
import { Row,Col,Container,Button, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
             <Container>
        {/* Outer Row */}
        <Row className=" justify-content-center">
          <Col className="col-xl-10 col-lg-12 col-md-9">
            <Card className=" o-hidden border-0 shadow-lg my-5">
              <Card.Body className="p-0">
                {/* Nested Row within Card Body */}
                <Row>
                  <Col className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <Col className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <Form>
                        <Form.Group className='mb-2'>
                        <Form.Label htmlFor="exampleInputEmail1">Email</Form.Label>
                        <Form.Control
                          type="email"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                          type="password"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                             
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Link to='/Acceuil'>
                        <Button variant="btn-google" type="submit" >
                         Login
                        </Button>
                        </Link>
                        <hr />
                        <a href="index.html" className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw" /> Login with Google
                        </a>
                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                        </a>
                      </Form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="#">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">Create an Account!</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
        
    );
}

export default Login;

import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ContactUsDetail = () => {
  return (
    <>
      <Header />
      <Container className='py-3 bg-color-dark' >
        <Row className='d-flex justify-content-center'>
          <Col md={6} className='pe-sm-5'>
            <Row className='mx-sm-5 my-5'>
              <h1 className='text-white fs-48px'>Detail Contact</h1>
              <p className='text-white'>Feel free to contact us and we will get<br /> back to you as soon as we can</p>
              <Form className='d-flex flex-column gap-3 mt-4 justify-content-center'>
                <div className='p-3'>
                  <Form.Control name='username' className='form-contact shadow-none text-white' type="text" placeholder="Name" />
                </div>
                <div className='p-3'>
                  <Form.Control name='email' className='form-contact shadow-none text-white' type="email" placeholder="Email" />
                </div>
                <div className='p-3'>
                  <Form.Control name='phone' className='form-contact shadow-none text-white' type="text" placeholder="Phone Number" />
                </div>
                <div className='p-3'>
                  <Form.Control name='message' className='form-contact shadow-none text-white' type="text" placeholder="Message" />
                </div>
                <div className="d-grid gap-3 mt-4">
                  <Button type='submit' className='rounded-0 border-0 p-3 my-2 fw-bold' variant="secondary" size="lg">
                    edit
                  </Button>
                </div>
              </Form>
            </Row>
          </Col>
          <Col className='ps-5 pt-5 mt-sm-5 ms-5'>
            <h5 className='color-7F8487'>Opening Hours</h5>
            <p className='text-white'>Monday - Friday</p>
            <p className='text-white'>9am - 5pm</p>
            <p className='text-white'>Weekend</p>
            <p className='text-white'>Closed</p>
            <br />
            <h5 className='color-7F8487'>Address</h5>
            <p className='text-white'>Jl. Sutomo 50</p>
            <p className='text-white'>Sumatera Barat</p>
            <p className='text-white'>Indonesia</p>
            <br />
            <h5 className='color-7F8487'>Support</h5>
            <p className='text-white'>hello@gmail.com</p>
            <p className='text-white'>+62 8234 3456</p>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  )
}

export default ContactUsDetail;

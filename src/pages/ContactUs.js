import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/styles.css';

const TrackingUpdate = () => {
  return (
    <>
      <Header />
      <Container className='pt-5'>
        <Row className='d-flex justify-content-center'>
          <Col md={6} className='pe-sm-5'>
            <Row className='mx-sm-5 my-5'>
              <p>Say hi to the team</p>
              <h1>Contact Us</h1>
              <p>Feel free to contact us and we will get<br /> back to you as soon as we can</p>
              <Form noValidate className='d-flex flex-column gap-3 mt-4 justify-content-center'>
                <div className='bg-white p-3'>
                  <Form.Control name='email' className='form-contact shadow-none' type="text" placeholder="Name" />
                </div>
                <div className='p-3'>
                  <Form.Control name='address' className='form-contact shadow-none' type="text" placeholder="Email" />
                </div>
                <div className='p-3'>
                  <Form.Control name='address' className='form-contact shadow-none' type="text" placeholder="Phone Number" />
                </div>
                <div className="d-grid gap-3 mt-4">
                  <Button type='submit' className='rounded-0 border-0 p-3 my-2' variant="secondary" size="lg">
                    send
                  </Button>
                </div>
              </Form>
            </Row>
          </Col>
          <Col className='ps-5 pt-5 mt-sm-5'>
            <h5>Opening Hours</h5>
            <p>Monday - Friday</p>
            <p>9am - 5pm</p>
            <p>Weekend</p>
            <p>Closed</p>
            <br />
            <h5>Address</h5>
            <p>Jl. Sutomo 50</p>
            <p>Sumatera Barat</p>
            <p>Indonesia</p>
            <br />
            <h5>Support</h5>
            <p>hello@gmail.com</p>
            <p>+62 8234 3456</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default TrackingUpdate;

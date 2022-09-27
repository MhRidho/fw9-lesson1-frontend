import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const onPost = async (e) => {
    e.preventDefault();
    const param = new URLSearchParams();
    param.append('username', e.target.username.value)
    param.append('email', e.target.email.value)
    param.append('phone', e.target.phone.value)
    await axios.post('http://localhost:3334/contact', param.toString(), { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
    navigate('/data');
  }

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
              <Form onSubmit={onPost} className='d-flex flex-column gap-3 mt-4 justify-content-center'>
                <div className='bg-white p-3'>
                  <Form.Control name='username' className='form-contact shadow-none' type="text" placeholder="Name" />
                </div>
                <div className='p-3'>
                  <Form.Control name='email' className='form-contact shadow-none' type="email" placeholder="Email" />
                </div>
                <div className='p-3'>
                  <Form.Control name='phone' className='form-contact shadow-none' type="text" placeholder="Phone Number" />
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

export default ContactUs;

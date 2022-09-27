import { Col, Row, Container, Dropdown } from 'react-bootstrap'
import { FiSearch, FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../assets/styles.css';

export default function Header() {
  return (
    <Container className='bg-color-dark px-5 py-2'>
      <Row className='justify-content-between mb-5 mt-md-3 gap-5 gap-md-0'>
        <Col md={4}>
          <Link to={'/'} className='decor-none'>
            <span className='fw-bold text-white'>BRAND</span>
          </Link>
        </Col>
        <Col md={4} className='d-flex flex-row justify-content-between align-items-center'>
        </Col>
        <Col md={4} className="me-auto d-flex flex-row justify-content-end align-items-end gap-5">
          <Link to={'/data'} className='decor-none text-white'>
            <span>Data List</span>
          </Link>
          <Link to={'/'} className='decor-none text-white'>
            <span>Contact Us</span>
          </Link>
          <Link to={'/'} className='text-white'>
            <FiSearch size={23} strokeWidth={3} />
          </Link>
          <Link to={'/'}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0' bsPrefix='p-0'>
                <span className='font-weight-mokuzai-700'><FiMenu size={30} strokeWidth={3} /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark" className='rounded-0 p-3' drop='start' id='dropdown-button-drop-start'>
                <Dropdown.Item><Link to={'/login'} className='decor-none'>Login</Link></Dropdown.Item>
                <Dropdown.Item><Link to={'/register'} className='decor-none'>Register</Link></Dropdown.Item>
                <Dropdown.Item><Link to={'/logout'} className='decor-none'>Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </Col>
      </Row>
    </Container >
  )
}

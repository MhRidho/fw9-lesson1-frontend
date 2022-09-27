import { Col, Row, Container, Dropdown } from 'react-bootstrap'
import { FiSearch, FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ComHeader() {
  return (
    <Container>
      <Row className='justify-content-between mb-5 mt-md-3 gap-5 gap-md-0'>
        <Col md={4}>
          <Link href='/'>
            <span>Brand</span>
          </Link>
        </Col>
        <Col md={4} className='d-flex flex-row justify-content-between align-items-center'>
        </Col>
        <Col md={4} className="me-auto d-flex flex-row justify-content-end align-items-end gap-5">
          <Link to={'/data'}>
            <span>Data List</span>
          </Link>
          <Link to={'/'}>
            <span>Contact Us</span>
          </Link>
          <Link to={'/'}>
            <FiSearch size={23} stroke-width={3} />
          </Link>
          <Link to={'/'}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0' bsPrefix='p-0'>
                <span className='font-weight-mokuzai-700'><FiMenu size={30} stroke-width={3} /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark" className='rounded-0' align='end'>
                <Dropdown.Item><Link href={'#'}>Chat</Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}>Order Tracking</Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}>Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Menu variant="dark" className='rounded-0' align='end'>
                <Dropdown.Item><Link href={'/login'}>Login</Link></Dropdown.Item>
                <Dropdown.Item><Link href={'/register'}>Register</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </Col>
      </Row>
    </Container >
  )
}

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bgc-primary'>
      <Container className='pt-5 text-white'>
        <Row className='mb-5'>
          <Col md={7} className='d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between'>

          </Col>
          <Col md={5} className=''>
            <div className='d-flex flex-column gap-3 mb-4 mb-md-0'>
              <span className='font-size-mokuzai-46 font-weight-mokuzai-700'>MOKUZAI</span>
              <p className='c-ligth'>Donec nunc nunc, gravida vitae diam vel,<br /> varius interdum erat. Quisque a nunc vel<br /> diam auctor commodo.</p>
              <div className='d-flex flex-row gap-4'>
                <Link href='#'>
                  <span>dribble</span>
                </Link>
                <Link href='#'>
                  <span>instagram</span>
                </Link>
                <Link href='#'>
                  <span>linkedin</span>
                </Link>
                <Link href='#'>
                  <span>twitter</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className='p-2 d-flex justify-content-center c-ligth'>
          <span>© 2019 RAZ Store All rights reserved</span>
        </div>
      </Container>
    </div>
  )
}

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bgc-primary'>
      <Container className='text-white'>
        <Row className='mb-5'>
          <Col md={7} className='d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between'>

          </Col>
          <Col md={5} className='mt-3'>
            <div className='d-flex flex-column gap-3 mb-4 mb-md-0'>
              <div className='d-flex flex-row gap-4'>
                <Link to={'/'} className='decor-none color-7F8487 fw-bold'>
                  <span>dribble</span>
                </Link>
                <Link to={'/'} className='decor-none color-7F8487 fw-bold'>
                  <span>instagram</span>
                </Link>
                <Link to={'/'} className='decor-none color-7F8487 fw-bold'>
                  <span>linkedin</span>
                </Link>
                <Link to={'/'} className='decor-none color-7F8487 fw-bold'>
                  <span>twitter</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios';
import { FiDelete, FiEdit } from 'react-icons/fi';

const DataList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3334/contact').then(({ data }) => {
      setData(data.results)
    })
  }, [])
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1 className='mb-4'>Data List</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>
                    <div className='d-flex justify-content-center'>
                      <Button className='me-2'><FiEdit size={30} strokeWidth={3} /></Button>
                      <Button variant='danger'><FiDelete size={30} strokeWidth={3} /></Button>
                    </div>
                  </td>
                </tr>
                {data.map(element => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.username}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>
                    <td>
                      <Button><FiEdit size={30} strokeWidth={3} /></Button>
                      <Button><FiDelete size={30} strokeWidth={3} /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default DataList

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios';

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
            <h1>Data List</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {data.map(element => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.username}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>
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

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios';

const DataList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://quranenc.com/api/v1/translation/sura/indonesian_sabiq/1').then(({ data }) => {
      setData(data.result)
    })
  }, [])
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1 className='mb-4'>Al-Fatihah</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Arabic Text</th>
                  <th>translation</th>
                </tr>
              </thead>
              <tbody>
                {data.map(element => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.arabic_text}</td>
                    <td>{element.translation}</td>
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

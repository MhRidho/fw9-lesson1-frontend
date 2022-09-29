import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Button, Col, Container, Row, Table, Form, ButtonGroup, InputGroup, Modal } from 'react-bootstrap';
import axios from 'axios';
import { FiDelete, FiEdit, FiFolder, FiSearch } from 'react-icons/fi';
import DetailModal from '../components/DetailModal';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';
import { useNavigate } from 'react-router-dom';

const DataList = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState('')
  const [modalShowDetail, setModalShowDetail] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShowDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [order, setOrder] = useState('ASC');
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const onDetail = () => {
    navigate('/contact-detail');
  }

  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('ASC');
    }
  };

  const getData = (limit = 5, page = 1) => {
    limit = parseInt(limit);
    page = parseInt(page);
    const query = new URLSearchParams({ limit, page }).toString();
    axios.get('http://localhost:3334/contact?' + query).then(({ data }) => {
      setData(data.results);
      setPageInfo(data.pageInfo);
    })
  }

  const toogleModal = () => {
    setShowModal(!showModal);
  }

  const confirmDelete = (id) => {
    toogleModal();
    setSelectedId(id);
  }

  const deleteData = async () => {
    const deleted = await axios.delete('http://localhost:3334/contact/' + selectedId);
    toogleModal();
    getData();
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1 className='mb-4'>Data List</h1>
            <Row>
              <Col md={3}>
                <InputGroup className="mb-4" size={20}>
                  <Form.Control type='text' className='shadow-none rounded-0' placeholder='Search Username' onChange={e => { setSearchTerm(e.target.value) }} />
                  <Button variant="outline-secondary" className='rounded-0'>
                    <div className='d-flex align-items-center fw-bold'>
                      <FiSearch />
                    </div>
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <Table striped bordered hover>
              <thead>
                <tr className='pointer'>
                  <th>No</th>
                  <th onClick={() => sorting('username')}>Username</th>
                  <th onClick={() => sorting('email')}>Email</th>
                  <th onClick={() => sorting('phone')}>Phone Number</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length < 1 ?
                  (
                    <tr>
                      <td style={{ height: 200 }} colSpan={5}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                          <b>No Data</b>
                        </div>
                      </td>
                    </tr>
                  )
                  :
                  // eslint-disable-next-line array-callback-return
                  data.filter((element) => {
                    // eslint-disable-next-line eqeqeq
                    if (searchTerm == '') {
                      return element
                    } else if (element.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return element
                    }
                  }).map(element => (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.username}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td>
                        <div className='d-flex gap-1 justify-content-center'>
                          <Button title='detail' variant='light' className='me-2' onClick={onDetail}><FiFolder size={20} strokeWidth={3} /></Button>
                          <Button title='edit' className='me-2' variant='light' onClick={() => setModalShow(true)}><FiEdit size={20} strokeWidth={3} /></Button>
                          <Button title='delete' variant='light' onClick={() => confirmDelete(element.id)}><FiDelete size={20} strokeWidth={3} /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                <DetailModal
                  show={modalShowDetail}
                  onHide={() => setModalShowDetail(false)}
                />
                <EditModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <DeleteModal
                  show={modalShow2}
                  onHide={() => setModalShowDelete(false)}
                />
              </tbody>
            </Table>
            <div className='d-flex justify-content-end'>
              <ButtonGroup aria-label="Basic example">
                <div className='d-flex gap-3'>
                  <Button variant="secondary" onClick={() => getData(pageInfo.limit, pageInfo.prevPage)} disabled={pageInfo.currentPage < 2}>Prev</Button>
                  <div className='d-flex align-items-center'><b>{pageInfo.currentPage}</b></div>
                  <Button variant="secondary" onClick={() => getData(pageInfo.limit, pageInfo.nextPage)} disabled={pageInfo.totalPage === pageInfo.currentPage}>Next</Button>
                </div>
              </ButtonGroup>
            </div>
            <br />
            <Row>
              <div className='d-flex justify-content-end'>
                <Col md={1}>
                  <Form.Select onChange={(e) => getData(e.target.value)} className='mt-3 shadow-none rounded-0'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={pageInfo.totalData}>All Data {pageInfo.totalData}</option>
                  </Form.Select>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal
        show={showModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Are You Sure to delete data</span>
          <Form className='d-flex flex-column gap-3 mt-4 justify-content-center'>
            <div className="d-grid gap-3 mt-4">
              <Button onClick={deleteData} className='border-0 p-2 my-2 fw-bold' variant="danger" size="lg">
                Yes
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toogleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DataList

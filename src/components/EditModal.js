import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editContact } from '../redux/action/contact';

const FormEdit = (props) => {
  return (
    <Form className='d-flex flex-column gap-3 mt-4 justify-content-center'>
      <div className='p-3'>
        <Form.Control name='username' className='form-contact shadow-none' type="text" placeholder="Name" />
      </div>
      <div className='p-3'>
        <Form.Control name='email' className='form-contact shadow-none' type="email" placeholder="Email" />
      </div>
      <div className='p-3'>
        <Form.Control name='phone' className='form-contact shadow-none' type="text" placeholder="Phone Number" />
      </div>
      <div className="d-grid gap-3 mt-4">
        <Button type='submit' className='rounded-0 border-0 p-3 my-2 fw-bold' variant="secondary" size="lg">
          send
        </Button>
      </div>
    </Form>
  )
}

const EditModal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactId = useSelector(state => state.contact.contactId)
  const success = useSelector(state => state.contact.successMsg);


  const onEdit = (value) => {
    const username = value.username;
    const email = value.email;
    const phone = value.phone;
    const message = value.message;

    if (email === '') {
      window.alert('Input Email')
    } else {
      dispatch(editContact({ username, email, phone, message }))
      navigate('/data');
    }
  }

  useEffect(() => {
    if (success) {
      navigate('/data');
    }
  }, [navigate, success]);


  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik onSubmit={onEdit} initialValues={{ username: '', email: '', picture: '' }} >
            {(props) => <FormEdit {...props} />}
          </Formik>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;

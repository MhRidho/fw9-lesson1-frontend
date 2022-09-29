import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const EditModal = (props) => {
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
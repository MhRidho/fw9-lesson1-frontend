import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap';

const DeleteModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
            <Button type='submit' className='border-0 p-2 my-2 fw-bold' variant="danger" size="lg">
              Yes
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;

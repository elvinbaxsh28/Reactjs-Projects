import React from 'react'
import { Modal,Button} from 'react-bootstrap';

const Delete = ({modal, close, deleteUser}) => {

  
    const DeleteUser = (index) =>{
        deleteUser(index)
    }


    return (
        <Modal
        size="md"
        show={modal}
        onHide={close}
        aria-labelledby="example-modal-sizes-title-md"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-md">
            Delete User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Silmek istediyine eminsen?</h3>
            <div className="d-flex justify-content-around my-3">
                <Button variant="danger" onClick={DeleteUser}>Delete</Button>
                <Button variant="success" onClick={close}>Close</Button>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default Delete;

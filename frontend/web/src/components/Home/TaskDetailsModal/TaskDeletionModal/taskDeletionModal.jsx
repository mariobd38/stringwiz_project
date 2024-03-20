import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import './taskDeletionModal.css';

const TaskDeletionModal = (props) => {
    const { show,handleClose,handleConfirmDeleteTagButtonClick } = props;
    // const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="md" show={show} onHide={handleClose} className='task-deletion-modal-parent'>
                <Modal.Body className='task-deletion-modal-body text-center my-3'>
                    <div>
                    Are you sure you want to delete this tag?
                    </div>
                    <div>
                    This tag will be deleted everywhere in your space.
                    </div>
                </Modal.Body>

                <Modal.Footer className='task-deletion-modal-footer'>
                    <div className="m-auto d-flex">
                        <Button variant="secondary" onClick={handleClose} className='task-deletion-modal-footer-button-option cancel'>
                            Cancel
                        </Button>
                        <Button style={{borderColor: "#a90805"}} onClick={handleConfirmDeleteTagButtonClick} 
                            className='task-deletion-modal-footer-button-option delete'>
                            Delete
                        </Button>
                    </div>
                   
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TaskDeletionModal;
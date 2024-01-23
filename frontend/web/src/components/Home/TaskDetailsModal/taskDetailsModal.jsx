import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './taskDetailsModal.css';

const TaskDetailsModal = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTaskDetailsModalClose = () => {
        const modalBackdrop = document.querySelector('.modal-dialog');
        if (modalBackdrop) {
            modalBackdrop.remove();
        }

        props.onHide();
        navigate(-1);
    }

    useEffect(() => {
        if (location.pathname === '/home/modal' && !props.show) {
            const newUrl = '/home';
            window.history.replaceState(null, null, newUrl);
        }
    }, [location.pathname, props.show]);

    return (
        <>
        <Modal
            show={props.show}
            onHide={handleTaskDetailsModalClose}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='resizable-modal-container'
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {props.currentTaskName}
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            
        </Modal>
        </>
    );
};

export default TaskDetailsModal;
import React from 'react';

import { Modal } from 'antd';
import { Text, Image, Button } from '@mantine/core';

import remove_tag from '../../../../assets/illustrations/home/remove_tag.png';

import './tagDeletionModal.css';

const TagDeletionModal = (props) => {
    const { show,handleClose,handleConfirmDeleteTagButtonClick,tagName } = props;
    // const handleClose = () => setShow(false);

    return (
        <>
            {/* <Modal size="md" show={show} onHide={handleClose} className='task-deletion-modal-parent'>
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
            </Modal> */}
            <Modal centered open={show} onHide={handleClose} onCancel={handleClose} className='tag-deletion-modal'>

                <Image
                    src={remove_tag}
                    className='m-auto'
                    // height={170}
                    // pt='1.5rem'
                    pb='1.5rem'
                    w={240}
                    alt='remove tag'
                />
                
                <Text ff='Inter' ta='center' fz='18'>Are you sure you want to delete this tag?</Text>
                <Text ff='Inter' ta='center' fz='14' pt='10' pb='20' w='80%' m='auto'>&quot;{tagName}&quot; will be deleted everywhere in this space</Text>

                <div className='d-flex justify-content-center gap-5 pt-4'>
                    <Button w={80} ff='Inter' bg='#353738' c='#fafafa' bd='1px solid #fafafa' onClick={handleClose}>Cancel</Button>
                    <Button w={80} ff='Inter' bg='#ef4444' c='#fafafa' bd='1px solid #ef4444' onClick={handleConfirmDeleteTagButtonClick} >Delete</Button>
                </div>
            </Modal>
        </>
    );
};

export default TagDeletionModal;
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCLose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleCLose}>
                I Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleCLose} actionBar={actionBar}>
            <p>Here is an agrement for you to accept</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open modal
            </Button>
            
            {showModal && modal}
        </div>
    );
}

export default ModalPage;

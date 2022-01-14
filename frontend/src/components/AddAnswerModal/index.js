import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateAnswer from '../CreateAnswer';
import './AddAnswerModal.css';

function AddAnswerModal() {
  const [showModal, setShowModal] = useState(false);


    return (
      <>
        <button className='answer-button' onClick={() => setShowModal(true)}>Answer!</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateAnswer setShowModal={setShowModal} />
          </Modal>
        )}
      </>
    );
}

export default AddAnswerModal;

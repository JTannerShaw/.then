import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import CreateAnswer from '../CreateAnswer';
import './AddAnswerModal.css';

function AddAnswerModal() {
  const sessionUser = useSelector(state => state.session.user);
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
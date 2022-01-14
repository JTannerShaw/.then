import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import EditAnswer from '../EditAnswer';
import './EditAnswerModal.css';

function AddAnswerModal() {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);


    return (
      <>
        <button className='edit-button' onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateAnswer setShowModal={setShowModal} />
          </Modal>
        )}
      </>
    );
}

export default AddAnswerModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAnswer from '../EditAnswer';

function EditAnswerModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditAnswer />
        </Modal>
      )}
    </>
  );
}

export default EditAnswerModal;

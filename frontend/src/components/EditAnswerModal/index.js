import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAnswer from '../EditAnswer';

function EditAnswerModal({ answerId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditAnswer setShowModal={setShowModal} answerId={answerId} />
        </Modal>
      )}
    </>
  );
}

export default EditAnswerModal;

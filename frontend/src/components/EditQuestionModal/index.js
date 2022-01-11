import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateQuestion from '../UpdateQuestion';

function UpdateQuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateQuestion />
        </Modal>
      )}
    </>
  );
}

export default UpdateQuestionModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateQuestion from '../CreateQuestion';

function QuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>New Question</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateQuestion />
        </Modal>
      )}
    </>
  );
}

export default QuestionModal;

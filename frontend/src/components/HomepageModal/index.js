import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import CreateQuestion from '../CreateQuestion';
import './HomePageModal.css';

function HomePageModal() {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='home-page-modal' onClick={() => setShowModal(true)}>{`${sessionUser.username}, what do you want to ask?`}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateQuestion setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default HomePageModal;

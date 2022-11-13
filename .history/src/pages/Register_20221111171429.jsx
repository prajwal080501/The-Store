import React from 'react'
import Modal from '../components/Modal/Modal'

const Register = ({modalOpen, handleModal, setModalOpen}) => {
  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal}>
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 text-base font-semibold">The Pj Store Copyright &copy;</p>
      </div>
    </Modal>
  )
}

export default Register
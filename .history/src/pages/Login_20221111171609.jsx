import React from 'react'
import Modal from '../components/Modal/LoginModal'

const Login = ({modalOpen, handleModal, setModalOpen}) => {
  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal}>Login</Modal>
  )
}

export default Login
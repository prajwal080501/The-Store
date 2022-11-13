import React from 'react'
import Modal from '../components/Modal/Modal'

const Login = ({modalOpen, handleModal, setModalOpen}) => {
  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleOpen}>Login</Modal>
  )
}

export default Login
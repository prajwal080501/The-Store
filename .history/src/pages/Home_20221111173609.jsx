import React, { useState } from 'react'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
import Login from './Login'
import Register from './Register'



const Home = ({modalOpen, setModalOpen, handleModal, modalOpen2, handleModal2, setModalOpen2}) => {

    return (
        <div>
            <Navbar />
            <Mobilemenu />
            <Login modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />
            <Register modalOpen2={modalOpen2} setModalOpen2={setModalOpen2} handleModal2={handleModal2} />
        </div>
    )
}

export default Home
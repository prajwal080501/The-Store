import React, { useState } from 'react'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'



const Home = () => {

    return (
        <div>
            <Navbar />
            <Mobilemenu />
            <Login modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />
            <Register modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />
        </div>
    )
}

export default Home
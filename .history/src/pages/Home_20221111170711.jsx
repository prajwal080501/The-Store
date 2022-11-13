import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'



const Home = ({modalOpen, handleOpen, setModalOpen}) => {

    return (
            <div>
                <Navbar />
                <Mobilemenu />
            </div>
    )
}

export default Home
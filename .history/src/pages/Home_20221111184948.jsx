import React, { useState } from 'react'
import Announcement from '../components/Announcement/Announcement'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
import Login from './Login'
import Register from './Register'



const Home = ({modalOpen, setModalOpen, handleModal, modalOpen2, handleModal2, setModalOpen2}) => {

    return (
        <div>
            <Announcement/>
        </div>
    )
}

export default Home
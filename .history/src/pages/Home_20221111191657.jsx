import React, { useState } from 'react'
import Announcement from '../components/Announcement/Announcement'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Login from './Login'
import Register from './Register'
import 'tw-elements';


const Home = ({modalOpen, setModalOpen, handleModal, modalOpen2, handleModal2, setModalOpen2}) => {

    return (
        <div>
            <Slider/>
        </div>
    )
}

export default Home
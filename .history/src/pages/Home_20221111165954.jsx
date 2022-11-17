import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



const Home = () => {

    return (
        <div>
            <Navbar />
            <Mobilemenu />

        </div>
    )
}

export default Home
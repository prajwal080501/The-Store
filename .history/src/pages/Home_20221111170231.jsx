import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'



const Home = () => {

    return (
        <Router>
            <div>
                <Navbar />
                <Mobilemenu />

            </div>
        </Router>
    )
}

export default Home
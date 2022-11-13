import React from 'react'
import Modal from '../components/Modal/Modal'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Mobilemenu/>
            <Modal/>
        </div>
    )
}

export default Home
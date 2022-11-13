import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
const [modalOpen, setModalOpen] = useState(false);


const handleModal = () => {
    setModalOpen(!modalOpen);
}
const Home = () => {
    return (
        <div>
            <Navbar />
            <Mobilemenu/>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />
        </div>
    )
}

export default Home
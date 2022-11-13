import React from 'react'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
import { AiOutlineMenuUnfold } from './../../node_modules/react-icons/ai/index.esm';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Mobilemenu/>
        </div>
    )
}

export default Home
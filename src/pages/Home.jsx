import React, { useState } from 'react'
import Announcement from '../components/Announcement/Announcement'
import Categories from '../components/Categories/Categories'
import Mobilemenu from '../components/Navbar/Mobilemenu'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Products from '../components/Products/Products'
import Slider from '../components/Slider/Slider'
import Login from './Login'
import Register from './Register'



const Home = ({modalOpen, setModalOpen, handleModal, modalOpen2, handleModal2, setModalOpen2}) => {

    return (
        <div className='w-full h-full'>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
    )
}

export default Home
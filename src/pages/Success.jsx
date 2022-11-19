import React from 'react'
import { useLocation } from 'react-router-dom';

const Success = () => {

    const location = useLocation();
    console.log(location.state)
    return (
        <div className='text-lg text-red-500'>
            <p>Success</p>
        </div>
    )
}

export default Success
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setToken}) => {

    const navigate = useNavigate();
    const logout = ()=>{
            localStorage.removeItem('token');
            setToken('');
            navigate('login');
    }


  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img src={assets.company_logo} alt=""  className='w-[max(10%,80px)] '/>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar

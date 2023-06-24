import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
    const location = useLocation();
    const navigate= useNavigate();
    const pathMatchRoute=(route)=>{
        if(route===location.pathname){
            return true;
        }
    }
    const designHeaderComponents="cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ";
    const borderBottom="text-black border-b-red-500"
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto '>
        <div>
        <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' className='h-5 cursor-pointer' onClick={()=>navigate("/")}/>
    </div>
    <div>
        <ul className='flex space-x-10'>
            <li onClick={()=>navigate("/")} className={` ${designHeaderComponents} ${pathMatchRoute("/") && borderBottom}`}>Home</li>
            <li onClick={()=>navigate("/offers")} className={` ${designHeaderComponents} ${pathMatchRoute("/offers") && borderBottom}`}>Offers</li>
            <li onClick={()=>navigate("/sign-in")} className={` ${designHeaderComponents} ${pathMatchRoute("/sign-in") && borderBottom}`}>Sign In</li>
        </ul>
    </div> 
    </header>
    </div>
    
   
  )
}

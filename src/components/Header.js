import {React,useState,useEffect,useRef} from 'react'
import logo from "./logo.png"
function Header()
{


  return(
    <div className="font-['Poppins']">
    <div className="bg-purple-100 py-3 flex justify-center items-center gap-4">

<img className="w-8" src={logo}/>
    <h1 className="text-xl text-center font-semibold  text-purple-600 ">AI Tools</h1>
    </div>
    </div>
  )
}
export default Header

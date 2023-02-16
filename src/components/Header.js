import {React} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from "./logo.png"
function Header()
{
const navigate=useNavigate()

  return(
    <div className="font-['Poppins']">
    <div className="bg-purple-100 py-3 flex justify-center items-center lg:gap-4 gap-2">

<img className="w-8" src={logo}/>
    <h1 onClick={()=>{navigate('/')}} className="text-xl text-center font-semibold  text-purple-600 ">AI Tools</h1>
    </div>
    </div>
  )
}
export default Header

import {React,useState,useEffect,useRef} from 'react'
import Header from './Header'
import {useNavigate} from 'react-router-dom'
import aiImage from './aiImage.png'
function Home()
{
const navigate=useNavigate()

  return(
    <div className="font-['Poppins']">
  <Header/>
  <div className="lg:flex lg:justify-center lg:gap-4 lg:my-12">
  <div className="text-center rounded-tl-xl rounded-br-xl border-purple-200 shadow border-2 lg:w-1/4 w-3/4 mx-auto lg:mx-0 my-6 py-4">
  <h1 className="font-semibold">Image Generation</h1>

  <p className="py-6">
To Generate a image using only text Description
  </p>
  <button onClick={()=>navigate('/image')}  className="bg-purple-600 text-white px-6 py-2">
Go
  </button>
  </div>
  <div className="text-center rounded-tl-xl rounded-br-xl border-purple-200 shadow border-2 lg:w-1/4 w-3/4 lg:mx-0 mx-auto my-6 py-4">
  <h1 className="font-semibold">Code Suggestion</h1>

  <p className="py-6">
Gives a code Suggestion snippets when you code in any language
  </p>
  <button onClick={()=>{navigate('/code')}}  className="bg-purple-600 text-white px-6 py-2">
Go
  </button>
  </div>
  </div>
    </div>
  )
}
export default Home

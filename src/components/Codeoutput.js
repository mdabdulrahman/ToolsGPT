import {React,useState,useEffect,useRef} from 'react'
import loader_snail from "./loader_snail.gif"

import {  OpenAIApi,Configuration } from "openai";
function Codeoutput() {

  const configuration=new Configuration(
  {
    organization: "org-K9Dut3kuRDwhvfRQPI09Q1gd",
    apiKey: process.env.REACT_APP_API_KEY,
  }
 ) 

 const openai=new OpenAIApi(configuration)
const [response,setresponse]=useState("")
const [search,setsearch]=useState("project expo 2023")
const searchTxt = useRef()
useEffect(() => {
  setresponse(loader_snail)
  openai.createImage({
   
    prompt: search,
  n: 2,
  size: "1024x1024",
   
  }).then(r=>{
    
    console.log(r)
    setresponse(r.data.data[0].url)
    
  })
  
}, [search])


  






    return (
    <div>
      <div className=" font-['Poppins']  my-6  mx-auto w-3/4  text-center">
<h1 className='font-semibold text-lg text-center '>
 Image Generation
</h1>
<input type="text" ref={searchTxt} className='mx-auto mt-8 text-center focus:border-none outline-none focus:outline-2 focus:outline-blue-300  p-3 border-2 rounded ' placeholder='Enter your program name'></input>
<br></br>
<button className='bg-green-500 my-12 text-white p-3 rounded-tl rounded-br-md    transition-all shadow-md ' onClick={()=>setsearch(searchTxt.current.value)}>Generate</button>

{/* image area */}

<div>
  <img src={response} className="w-full" alt="gptimage_creation"></img>

</div>
{response!=loader_snail?<a  className='bg-blue-500 my-12 text-white p-3 rounded-bl rounded-tr-md    transition-all shadow-md ' href={response} >View Full Image</a>:<h1>Loading...</h1>}
</div>

    </div>
  )

}
export default Codeoutput

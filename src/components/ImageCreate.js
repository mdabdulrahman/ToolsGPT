import {React,useState,useEffect,useRef} from 'react'
import loader_snail from "./loader_snail.gif"
import Header from './Header'
import {  OpenAIApi,Configuration } from "openai";
function ImageCreate() {

  const configuration=new Configuration(
  {
    organization: "org-K9Dut3kuRDwhvfRQPI09Q1gd",
    apiKey: process.env.REACT_APP_API_KEY,
  }
 )

 const openai=new OpenAIApi(configuration)
const [response,setresponse]=useState("")
const [search,setsearch]=useState("")
const searchTxt = useRef()
useEffect(() => {
  setresponse(loader_snail)
  openai.createImage({

    prompt: search,
  n: 1,
  size: "1024x1024",

  }).then(r=>{

    console.log(r)
    setresponse(r.data.data[0].url)

  })

}, [search])

    return (
    <div className="font-['Poppins']">
    <Header/>
      <div className="   my-6  mx-auto w-3/4  text-center lg:flex lg:justify-between lg:my-auto lg:items-center">
      <div className=" lg:my-48 lg:mx-20 ">
<h1 className='font-semibold text-lg text-center lg:text-2xl'>
 Image Generation
</h1>
<input type="text" ref={searchTxt} className=' mt-8 lg:w-96 mx-auto text-center focus:border-none outline-none focus:outline-2 focus:outline-blue-300  p-3 border-2 rounded w-full' placeholder='Enter Description'></input>
<br></br>
<button className='bg-green-500 my-12 text-white p-3 rounded-tl rounded-br-md    transition-all shadow-md ' onClick={()=>setsearch(searchTxt.current.value)}>Generate</button>

</div>
{/* image area */}

<div className="lg:my-12">
  {search!=""?<img src={response} className="w-full rounded-md mx-auto lg:w-4/6 " alt="gptimage_creation"></img>:<h1>Give any query to generate Image</h1>}

</div>
<div className="my-12">
{response!=loader_snail?<a  className='bg-blue-500  text-white p-3 rounded-bl rounded-tr-md  lg:hidden  transition-all shadow-md ' href={response} >View Full Image</a>:search!=""?<h1
className="lg:hidden"
>Loading...</h1>:""}
</div>
</div>
<div className={`${response==loader_snail?"absolute bottom-0 ":" "}`+"lg:absolute lg:bottom-0  lg:flex lg:justify-around text-sm  bg-gray-100 p-1  w-full"}><p className="text-center">Image are generated using <b className="text-blue-400">GPT-3 API</b> by<b> Open AI</b></p>
<br></br>
<p className="text-center">Created and hosted By : Mohamed Abdul Rahman</p>
</div>
    </div>
  )

}
export default ImageCreate

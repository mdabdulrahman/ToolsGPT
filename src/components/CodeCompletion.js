import {React,useState,useEffect,useRef} from 'react'
import {  OpenAIApi,Configuration } from "openai";
import Header from './Header'
function CodeCompletion()
{
  const configuration=new Configuration(
  {
    organization: "org-K9Dut3kuRDwhvfRQPI09Q1gd",
    apiKey: process.env.REACT_APP_API_KEY,
  }
  )
const [search,setsearch]=useState("")
const [recommend,setrecommend]=useState(" ")
const searchtxt=useRef()
const openai=new OpenAIApi(configuration)
useEffect(
  ()=>{
    if(search!==""&search!==search+recommend)
    {
    openai.createCompletion({
    model: "code-davinci-002",
    prompt: search,
    max_tokens: 5,
    temperature: 0,
  }).then(r=>
{
  setrecommend(r.data.choices[0].text)
  console.log(r.data.choices[0].text)
}
).catch((e)=>console.log(e))
}
  },[search]
)




  return(
    <div >
    <Header/>
    <div className="font-['Poppins'] lg:mt-6 mt-4">
    <h1 className="  text-center  text-xl font-semibold"><span className="text-blue-400">Code</span> <span className="text-red-400">Suggestion</span></h1>
    <div className="font-mono my-6 text-center">
    <h1 className="bg-green-100 w-3/4 mx-auto" onClick={()=>
    {
      searchtxt.current.value=search+recommend
    }
  }>Suggestion : {recommend}</h1>
    <textarea
onKeyDown={(e)=>{
  if(e.key==="ArrowRight"&&e.ctrlKey===true)
  {
    searchtxt.current.value=search+recommend
  }
  console.log(e)
  console.log(e.key)
}}
     className="focus:outline-none my-2 bg-zinc-100  border-l-2 border-l-black mx-auto p-1 w-5/6 lg:w-3/4 " rows="20" onChange={()=>{
setsearch(searchtxt.current.value);

}} type="text" ref={searchtxt} placeholder="Enter the code"/>

</div>
    </div>
    </div>
  )
}
export default CodeCompletion

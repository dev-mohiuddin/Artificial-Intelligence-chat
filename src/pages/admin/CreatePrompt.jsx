

import { useState } from "react"
import { toastMessage } from "../../toast/toastMessage";
import { promptCreate } from "../../api/prompt"; 

function CreatePrompt() {

  const [input, setInput] = useState({
    name: "",
    prompt : "",
  });

  const inputHandel = (e)=>{
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const createPrompt = async(e)=>{
    e.preventDefault()
    const data = await promptCreate(input)
    toastMessage(data)
    setInput({
      name : "",
      prompt : "",
    })
   }

  return (
    <div className='w-full'>
      <div><h1 className="text-lg font-semibold text-center">Create Prompt</h1></div>
      <div className="mt-4">
        <form onSubmit={createPrompt} className='flex flex-col gap-4' >
          <div className='flex flex-col gap-2'>
            <label className='text-base text-gray-700' htmlFor="">Prompt Name</label>
            <input onChange={inputHandel} value={input.name} className='w-full h-10 bg-transparent rounded-md border border-gray-400 outline-0 px-4' name="name" type="text" />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-base text-gray-700' htmlFor="">Prompt Description</label>
            <textarea onChange={inputHandel} value={input.prompt} className='w-full bg-transparent rounded-md border border-gray-400 outline-0 p-4' name="prompt" id="" cols="30" rows="5"></textarea>
          </div>
          <input className='h-10 bg-blue-500 rounded-md cursor-pointer text-lg font-medium text-slate-100 hover:bg-blue-700 duration-300' type="submit" value="Create Prompt" />
        </form>
      </div>
    </div>
  )
}

export default CreatePrompt
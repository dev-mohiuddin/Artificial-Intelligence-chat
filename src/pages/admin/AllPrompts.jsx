

import { useState, useEffect } from "react"
import { useNavigate} from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'

import { allPrompts, promptDelete } from "../../api/prompt"
import { toastMessage } from "../../toast/toastMessage";

function AllPrompts() {

  const [prompts, setPrompts] = useState([]);
  const [modal, setModal] = useState({
    status : false,
    promptName: "",
    id : ""
  });

  useEffect(() => {
    async function promptData() {
      try {
        const data = await allPrompts();
        const promptsData = data?.data;
        setPrompts(promptsData)
      } catch (error) {
        
      }
    }
    promptData()
  }, [])

  const openModal = (singlePrompt)=>{

    setModal({
      status : true,
      promptName : singlePrompt.name,
      id : singlePrompt._id
    })
  }

  return (
    <div className="w-full" >
      {modal.status && <Modal modal={modal} setModal={setModal} />}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {
          prompts ? prompts?.map((singlePrompt, val) => (
            <div key={val} className="relative flex flex-col group justify-center items-center gap-5 p-4 rounded-md bg-slate-50 shadow hover:scale-105 duration-300">
              <span onClick={()=> openModal(singlePrompt) } className="absolute cursor-pointer text-red-400 hidden group-hover:flex duration-300 right-2 top-2"><AiOutlineDelete /></span>
              <h1 className="text-2xl font-bold text-gray-700">{singlePrompt.name}</h1>
            </div>
          )):
          <div>No Prompt Found </div>
        }
      </div>
    </div>
  )
}

export default AllPrompts


function Modal ({modal, setModal}){

  const navigate = useNavigate()

  const deletePrompt = async(id)=>{
    try {
      const data = await promptDelete(id)
      setModal({status : false})
      toastMessage(data)
      navigate("/admin/")
    } catch (error) {
      console.log(error)
    }

  }

  return(
    <div className="absolute h-full w-full bg-black/10 top-0 right-0 z-10 flex justify-center items-center">
      <div className="relative flex flex-col gap-5 justify-center items-center p-4 bg-white rounded-md shadow">
        <h1 className="text-lg font-medium text-gray-700">Do you want to delete ({modal.promptName}) Prompt?</h1>
        <div className="flex items-center justify-center gap-5">
          <span onClick={()=>deletePrompt(modal.id)} className="text-base font-medium text-slate-100 bg-red-500 px-5 py-2 cursor-pointer rounded-md">Yes</span>
          <span onClick={()=>setModal({status : false})} className="text-base font-medium text-slate-100 bg-green-500 px-5 py-2 cursor-pointer rounded-md">No</span>
        </div>
      </div>
    </div>
  )
}
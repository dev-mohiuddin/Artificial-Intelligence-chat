

import DataTable from "react-data-table-component"
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

  const openModal = (row)=>{

    setModal({
      status : true,
      promptName : row.name,
      id : row._id
    })
  }

  const columns = [
    {
      name : "Id",
      selector: (row)=>(
        1
      ) ,
    },
    {
      name : "Name",
      selector : (row)=>row.name,
    },
    {
      name : "Action",
      cell : (row)=>(
        <span onClick={()=> openModal(row) } 
        className='text-red-500'><AiOutlineDelete size={20} /> </span>
      )
    }
  ]

  return (
    <div className="w-full" >
      {modal.status && <Modal modal={modal} setModal={setModal} />}
      <div>
        <h1 className="text-lg font-semibold text-center">All prompt list</h1>
      </div>
      <div>
        <DataTable
        columns={columns}
        data={prompts}
       />
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
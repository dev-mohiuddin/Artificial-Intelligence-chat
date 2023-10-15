

import { AiOutlineDelete } from 'react-icons/ai'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from "react"
import { allUsers } from "../../api/user"

function AllUser() {


  const [userData, setUserData] = useState([])
  const [search , setSearch] = useState('')
  const [filter, setFilter] = useState([])

  useEffect(()=>{
    const getUser = async()=>{
      try {
        const {user} = await allUsers();
        setUserData(user)
        setFilter(user)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  },[])

  useEffect(()=>{
    const result = userData.filter((item)=>{
      return item.username.toLowerCase().match(search.toLocaleLowerCase());
    })
    setFilter(result)
  },[search])


  const columns = [
    {
      name : "Name",
      selector: (row)=>(
        row.name
      ) ,
    },
    {
      name : "Username",
      selector : (row)=>row.username,
    },
    {
      name : "Role",
      selector : (row)=>row.role,
    },
    {
      name : "Email",
      selector : (row)=>row.email,
    },
    {
      name : "Action",
      cell : (row)=>(
        <span className='text-red-500'><AiOutlineDelete size={20} /> </span>
      )
    }
  ]

  return (
    <div className="w-full">
      <div>
        <DataTable
          columns={columns}
          data={filter}
          pagination
          selectableRows
          fixedHeader
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent = {
            <input type='text'
            className='outline-0 h-7 w-64 border px-2 rounded'
            placeholder='Search...'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
          }
        />
      </div>
    </div>
  )
}

export default AllUser
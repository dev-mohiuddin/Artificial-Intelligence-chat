
import {GiOctoman} from 'react-icons/gi'

function Create() {


  const createCha = (e)=>{
    e.preventDefault()
  }

  return (
    <div className='w-full py-2 md:py-4 h-full overflow-y-auto scroll'>
      <div className='container flex flex-col md:gap-8 gap-5'>
        <div className='space-y-2 md:space-y-4'>
          <div className='flex items-center gap-2'>
            <span className='hcol text-xl'><GiOctoman /></span>
            <span className='hcol text-xl'>Create a Character</span>
          </div>
          <div>
            <h1 className='hcol'>For more information about Character creation, see</h1>
          </div>
        </div>
        <form className='flex flex-col gap-5' onSubmit={createCha}>
          <div className='space-y-2'>
            <h1 className='hcol text-base'>Name</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">The name can include first and last names.</label>
              <input className='px-3 pcol bg-transparent h-10 focus:outline-none border border-gray-400 dark:border-gray-600 rounded-md ' type="text" name="" id="" required />
            </div>
          </div>
          <div className='space-y-2'>
            <h1 className='hcol text-base'>Greeting</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">What would they say to introduce themselves? For example, "Elon Musk" could say: "Hello I am Elon Musk. I was born in March 1971, and I'm a genius businessman, innovative leader, and a very attractive person.".</label>
              <textarea className='px-3 py-1 pcol bg-transparent h-32 focus:outline-none border border-gray-400 dark:border-gray-600 rounded-md ' type="text" name="" id="" required />
            </div>
          </div>
          <div className='space-y-2'>
            <h1 className='hcol text-base'>Visibility</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">Who is allowed to talk to them?</label>
              <select name="" className='h-10 focus:outline-0 bg-transparent border border-gray-400 dark:border-gray-600 rounded-md pcol px-3'>
                <option className='dark:bg-slate-900'>Public: Anyone can chat</option>
                <option className='dark:bg-slate-900'>Unlisted: Anyone with the link can chat</option>
                <option className='dark:bg-slate-900'>Private: Only you can chat</option>
              </select>
            </div>
          </div>
          <div className='space-y-2'>
            <h1 className='hcol text-base'>Categories</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">Who is allowed to talk to them?</label>
              <select name="" className='h-10 focus:outline-0 bg-transparent border border-gray-400 dark:border-gray-600 rounded-md pcol px-3'>
                <option className='dark:bg-slate-900'>Programmer</option>
                <option className='dark:bg-slate-900'>Desinger</option>
                <option className='dark:bg-slate-900'>Famous Pepole</option>
              </select>
            </div>
          </div>
          <div className='space-y-2'>
            <h1 className='hcol text-base'>Avatar</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">You can either create an image from text or upload an image..</label>
              <input type="file" name="" className='bg-transparent h-10 focus:outline-none border border-gray-400 dark:border-gray-600 rounded-md pcol' required />
            </div>
          </div>
          <div className='space-y-2'>
            <input type="submit" name="" className=' bg-blue-500 text-white font-medium px-4 cursor-pointer h-10 hover:bg-blue-900 duration-200 rounded-md ' value="Create and Chat!" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create
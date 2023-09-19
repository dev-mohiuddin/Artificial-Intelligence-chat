import {RxCross2} from 'react-icons/rx'

function MobileMenu({setMobileMenu}) {
  return (
    <div className=' md:hidden absolute top-0 left-0 h-screen flex justify-end w-full bg-black/50'>
        <div className='relative w-4/5 h-full bg-slate-100 dark:bg-slate-900 right-0'>
            <span onClick={()=>setMobileMenu(false)} className='absolute top-3 right-3 cursor-pointer hcol'><RxCross2 size={25} /></span>
        </div>
    </div>
  )
}

export default MobileMenu
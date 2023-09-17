import teacher from '../../assets/images/characterimg/teacher.png'


function ChatContainer({aiChat}) {
  return (
    <div className='h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] mb-14 md:mb-16 py-3 overflow-y-scroll scroll-hide'>
      <div className="w-full px-2 md:px-3 flex flex-col gap-1">
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>


        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={aiChat.image} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{aiChat.description}</p>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">Hi I am English teacher. my name is moroiom. i am a bangladeshi </p>
          </div>
          <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={teacher} alt="" />
          </div>
        </div>







        =
        
      </div>
    </div>
  )
}

export default ChatContainer
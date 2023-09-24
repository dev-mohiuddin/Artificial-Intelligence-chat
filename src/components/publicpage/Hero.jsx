import { useState, useEffect } from "react"

import Login from "./Login"
import SignUp from "./SignUp"

function Hero() {

    const [loginModal, setLoginModal] = useState(true)
    const [signUpModal, setSignUpModal] = useState(false)



    return (
        <div className='w-full heroBg '>
            <div className='container bg-black/80 md:h-screen flex justify-center items-center '>
                <div className='container flex flex-col-reverse gap-5 md:flex-row md:justify-between md:items-center  py-4'>
                    <div className='flex flex-col gap-4  '>
                        <h1 className='text-2xl md:text-4xl font-bold text-blue-500'>AI-Powered Conversational <br /> Experience Platform</h1>
                        <h3 className='text-xl md:text-2xl font-medium text-white'>Automate 98% of your service support & <br /> drive 3x more lead conversion via chat</h3>
                        <div className='inline-block'>
                            <button className='px-5 py-2 rounded-md outline-0 bg-blue-500 hover:bg-blue-700 text-lg text-white font-medium'>Let's Go</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full md:w-1/2 mt-16'>
                        {loginModal && <Login setLoginModal={setLoginModal} setSignUpModal={setSignUpModal} />}
                        {signUpModal && <SignUp setLoginModal={setLoginModal} setSignUpModal={setSignUpModal}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
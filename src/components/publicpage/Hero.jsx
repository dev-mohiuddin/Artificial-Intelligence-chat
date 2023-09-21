
import hero from '../../assets/images/characterimg/hero.png'

function Hero() {
  return (
    <div className='w-full bg-slate-100 dark:bg-slate-900'>
        <div className='container max-w-screen-xl h-screen flex justify-center items-center'>
            <div className='pt-18 flex justify-between items-center'>
                <div className='flex flex-col gap-4 w-1/2'>
                    <h1 className='text-4xl font-bold text-blue-400'>AI-Powered Conversational <br /> Experience Platform</h1>
                    <h3 className='text-2xl font-medium hcol'>Automate 98% of your service support & <br /> drive 3x more lead conversion via chat</h3>
                    <div className='inline-block'>
                        <button className='px-5 py-2 rounded-md outline-0 bg-blue-500 hover:bg-blue-700 text-lg text-white font-medium'>Let's Go</button>
                    </div>
                </div>
                <div className='flex items-center justify-center w-1/2  overflow-hidden'>
                    <img className='h-full w-full object-cover' src={hero} alt="hero" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero


import Started from '../components/plan/Started'
import Premium from '../components/plan/Premium'
import Professional from '../components/plan/Professional'

function Plan() {
    return (
        <div className='flex flex-col md:pt-3 gap-4 w-full h-full overflow-y-auto scroll'>
            <div className="container">
                <h1 className='hcol text-lg font-bold uppercase text-center'>Our Plan</h1>
                <div className='max-w-5xl mx-auto justify-center items-center py-5 mt-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20'>
                        <Started />
                        <Premium />
                        <Professional />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan
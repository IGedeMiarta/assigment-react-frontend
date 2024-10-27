import React from 'react'
import { BsFillGridFill } from 'react-icons/bs';

const PageTitle = () => {
    return (
        <div className='flex align-middle items-center gap-3 py-4'>
            <div className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center">
                <BsFillGridFill className="text-xl" />
            </div>
            <h1 className="text-3xl font-bold">Menus</h1>
            
        </div>

    )
}

export default PageTitle
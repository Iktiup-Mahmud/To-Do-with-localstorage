import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Cards = ({ singleData }) => {

    const handelDone = (data) => {
        console.log(data)
    }

    return (
        <div className="max-w-xs p-0 bg-gray-500 border border-black rounded-lg shadow dark:bg-gray-800 py-3 dark:border-gray-700">

            <div className='flex justify-center items-center mb-2'>
                <h5 className="text-2xl font-bold flex items-center tracking-tight text-gray-900 dark:text-white uppercase">{singleData.name}</h5>
                {

                    singleData.isDone && <CheckCircleIcon className='w-5 h-5 ml-2 text-blue-500'/>

                }
                
            </div>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{singleData.time}</p>

            <div>

                <button onClick={() => handelDone(singleData.name)} type="button" className="focus:outline-none text-black bg-[#10B981] hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Done</button>


                <button type="button" className="focus:outline-none text-black bg-red-500 hover:text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </div>

        </div>

    );
};

export default Cards;
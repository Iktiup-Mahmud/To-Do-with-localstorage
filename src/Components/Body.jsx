import React from 'react';
import Cards from './Cards';

const Body = () => {

    const allTasksLS = () => {
        let tasksFromLS = {}

        const getAllTasksFromLS = localStorage.getItem('allTasks')

        if (getAllTasksFromLS) {
            tasksFromLS = JSON.parse(getAllTasksFromLS)
        }

        return tasksFromLS
    }

    let allDatasFromLS = allTasksLS()

    // console.log(typeof (allDatasFromLS))
    console.log((allDatasFromLS))

    // console.log(...allDatasFromLS, "a")

    const handelSubmit = (e) => {
        e.preventDefault()

        const task = e.target.task.value
        const time = new Date().toString().slice(4, -35)
        const isCheck = false

        const aTask = { name: task, time: time, isDone: isCheck }

        const allTasksForSet = [...allDatasFromLS, aTask]

        // if(aTask) {
        // const lastArrayofTasks = 
        localStorage.setItem('allTasks', JSON.stringify(allTasksForSet))

        e.target.reset()

        return ''
        // }
        // console.log(aTask)
    }

    return (
        <div className='pt-5'>
            <h1 className='uppercase text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600'>To-Do App by Iktiup</h1>
            <form className="mt-6" onSubmit={handelSubmit}>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Task</label>

                <input type="text" required name='task' id="large-input" placeholder='Task Info' className="block mt-5 w-80 mx-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                <button type="submit" className="focus:outline-none mt-5 text-white bg-[#097853] hover:bg-[#10B981] focus:ring-2 focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 hover:text-black">Add Task</button>
            </form>

            <hr className="w-2/3 h-1 mx-auto my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>

            {/* cards section */}

            {/* <section>

            </section> */}
            {/* <Cards /> */}

        </div>
    );
};

export default Body;
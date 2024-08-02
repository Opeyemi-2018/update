import React from 'react'

const App = () => {
  return (
    <div className='max-w-[1150px] mx-auto p-4 mt-10'>
      <header className='flex sm:flex-row flex-col gap-2 sm:items-center justify-between items-start my-14'>
        <h1 className='sm:text-4xl text-2xl sm:font-extrabold font-semibold'>Updates</h1>
        <ul className='flex items-center gap-3'>
          <li className='bg-[#1a2b3b] text-white py-[4px] px-[8px] text-[14px] rounded-md'>All</li>
          <li className='text-[#687887] bg-[#edf0f2] py-[4px] px-[8px] text-[14px] rounded-md'>Changelog</li>
          <li className='text-[#687887] bg-[#edf0f2] py-[4px] px-[8px] text-[14px] rounded-md'>Customer Stories</li>
          <li className='text-[#687887] bg-[#edf0f2] py-[4px] px-[8px] text-[14px] rounded-md'>Articles</li>
        </ul>
      </header>

     <div className='mt-6'>
        <div className='flex sm:flex-row flex-col sm:gap-14 gap-4 sm:items-center items-start justify-between my-8  '>
            <div className='sm:block flex justify-between sm:w-20 w-full'>
              <p className='text-nowrap'>July 26, 2024</p>
              <p className='bg-[#edf0f2] py-[2px] px-[6px] text-[14px] text-[#687887] rounded-md'>Changelog</p>
            </div>
            <div className=''>
              <h1 className='text-[#1a2b3b] sm:text-2xl text-1xl font-bold'>Week of 2024-07-26</h1>
              <p className='text-[#1a2b3b] text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem laboriosam, praesentium quos sint quam?</p>
            </div>
        </div>
          
        <div className='flex sm:flex-row flex-col sm:gap-14 gap-4 sm:items-center items-start justify-between my-8  '>
            <div className='sm:block flex justify-between sm:w-20 w-full'>
              <p className='text-nowrap'>July 26, 2024</p>
              <p className='bg-[#edf0f2] py-[2px] px-[6px] text-[14px] text-[#687887] rounded-md'>Changelog</p>
            </div>
            <div className=''>
              <h1 className='text-[#1a2b3b] sm:text-2xl text-1xl font-bold'>Week of 2024-07-26</h1>
              <p className='text-[#1a2b3b] text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem laboriosam, praesentium quos sint quam?</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default App
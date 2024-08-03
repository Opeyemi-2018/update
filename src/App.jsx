import { GoDot } from "react-icons/go";

const App = () => {
  return (
    <div className='max-w-[1150px] mx-auto p-4 mt-10'>
      <header className='flex sm:flex-row flex-col gap-2 sm:items-center justify-between items-start my-14'>
        <h1 className='sm:text-4xl text-2xl sm:font-extrabold font-semibold'>Updates</h1>
        <ul className='flex items-center gap-3'>
          <li className='bg-[#1a2b3b] list-none text-white py-[4px] px-[8px] text-[14px] rounded-md'>All</li>
          <li className='text-[#687887] list-none bg-[#edf0f2] py-[4px] px-[8px] text-[14px] rounded-md'>Changelog</li>
          <li className='text-[#687887] list-none bg-[#edf0f2] py-[4px] px-[8px] text-[14px] rounded-md'>Customer Stories</li>
          <li className='text-[#687887] list-none bg-[#edf0f2] py-[4px] px-[8px] text-[14px] rounded-md'>Articles</li>
        </ul>
      </header>

     <div className='mt-6'>
      
          <div class="ml-6 grid grid-cols-1 pb-20 md:ml-0 md:grid-cols-4">
            <div class="relative col-span-1 mb-4 flex flex-row items-center justify-between md:mb-0 md:flex-col md:items-start md:justify-start">
              <div class="text-sm text-gray-600 md:mb-1">July 26, 2024</div>
              <span class="bg-gray-100 w-fit flex-initial rounded-md px-1.5 py-0.5 text-sm text-gray-600">Changelog</span>
              <div class="absolute left-[-31px] right-auto top-1.5 h-4 w-4 rounded-full border-[2px] border-gray-200 bg-white md:left-auto md:right-[-9px]"></div>
            </div>
            <div class="col-span-3 md:ml-12"><div class="flex flex-col space-y-2">
                <div class="text-2xl font-bold">Week of 2024-07-26</div>
                <div class="flex flex-col gap-y-3">
                  <div class="text-base">
                    <ul>
                      <li class="relative ml-6 before:absolute before:-left-6 before:top-2 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-gray-300">You can now view the 
                        <span class="rounded-sm bg-gray-100 px-1 py-[1px] font-mono text-[14px]">merchant_state</span> 
                        <span class="rounded-sm bg-gray-100 px-1 py-[1px] font-mono text-[14px]">merchant_postal_code</span>
                          on various <a class="border-gray border-b border-dashed transition-colors duration-200 hover:border-solid hover:bg-green-100" href="/documentation/api#card-payment-object.elements.card_authorization">card authorization</a> sub-resources.
                          </li>
                          </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          <div class="ml-6 grid grid-cols-1 pb-20 md:ml-0 md:grid-cols-4">
            <div class="relative col-span-1 mb-4 flex flex-row items-center justify-between md:mb-0 md:flex-col md:items-start md:justify-start">
              <div class="text-sm text-gray-600 md:mb-1">July 26, 2024</div>
              <span class="bg-gray-100 w-fit flex-initial rounded-md px-1.5 py-0.5 text-sm text-gray-600">Changelog</span>
              <div class="absolute left-[-31px] right-auto top-1.5 h-4 w-4 rounded-full border-[2px] border-gray-200 bg-white md:left-auto md:right-[-9px]"></div>
            </div>
            <div class="col-span-3 md:ml-12"><div class="flex flex-col space-y-2">
                <div class="text-2xl font-bold">Week of 2024-07-26</div>
                <div class="flex flex-col gap-y-3">
                  <div class="text-base">
                    <ul>
                      <li class="relative ml-6 before:absolute before:-left-6 before:top-2 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-gray-300">You can now view the 
                        <span class="rounded-sm bg-gray-100 px-1 py-[1px] font-mono text-[14px]">merchant_state</span> 
                        <span class="rounded-sm bg-gray-100 px-1 py-[1px] font-mono text-[14px]">merchant_postal_code</span>
                          on various <a class="border-gray border-b border-dashed transition-colors duration-200 hover:border-solid hover:bg-green-100" href="/documentation/api#card-payment-object.elements.card_authorization">card authorization</a> sub-resources.
                          </li>
                          </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
     </div>
    </div>
  )
}

export default App
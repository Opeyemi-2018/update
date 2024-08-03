// import { GoDot } from "react-icons/go";

const App = () => {
  let notes = [
    {
      date: "august 26, 2024", photonIQ: "photonIQ", Prerender: "Prerender v1.2.1", whatsnew: "Whats New",
      whatsNewContents: [ "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur." ],
      Improvement: "Improvement",
      improvementContents: [ "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur."],
      bugFix: "Bug Fixes",
      bugFixContents: [ "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur."],
    },
    {
      date: "august 26, 2024", photonIQ: "photonIQ", Prerender: "Prerender v1.2.1", whatsnew: "Whats New",
      whatsNewContents: [ "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur." ],
      Improvement: "Improvement",
      improvementContents: [ "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur."],
      bugFix: "Bug Fixes",
      bugFixContents: [ "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur."],
    },
    
  ];

  return (
    <div className="max-w-[1150px] mx-auto px-6 md:px-10 mt-10">
      <header className="flex sm:flex-row flex-col gap-2 sm:items-center justify-between items-start my-14">
        <h1 className="sm:text-4xl text-2xl sm:font-extrabold font-semibold">
          Released Note
        </h1>
        <ul className="flex items-center gap-3">
          <li className="bg-[#1a2b3b] list-none text-white py-[4px] px-[8px] text-[14px] rounded-md">
            PhotonIQ
          </li>
          <li className="text-[#687887] list-none bg-[#edf0f2] py-[4px] px-[8px] text-[14px] rounded-md">
            GDN
          </li>
        </ul>
      </header>
      <div className="mt-6">
        <div class="pb-20 md:pb-24 w-full max-w-screen-xl xl:mx-auto ">
          <div class="relative min-h-[600px] w-full">
            <div class="absolute bottom-0 left-0 top-2 w-[2px] bg-gray-100 md:left-[25%] after:absolute after:inset-x-0 after:bottom-0 after:h-48 after:bg-gradient-to-b after:from-gray-100 after:to-white"></div>
            
                {notes.map((note) => {
                  let { date, photonIQ, Prerender, whatsnew, whatsNewContents, Improvement, improvementContents, bugFix, bugFixContents } = note;
                  return (
                    <div class="ml-6 grid grid-cols-1 pb-20 md:ml-0 md:grid-cols-4 ">
                      <div class="relative col-span-1 mb-4 flex flex-row  items-center justify-between md:mb-0 md:flex-col md:items-start md:justify-start">
                        <div class=" text-gray-600 md:mb-1 whitespace-nowrap">{date}</div>
                        <span class="bg-gray-100 w-fit flex-initial rounded-md px-1.5 py-0.5 text-sm text-gray-600">
                          {photonIQ}
                        </span>
                        <div class="absolute left-[-31px] top-1.5 h-4 w-4 rounded-full border-[2px] border-gray-200 bg-white md:left-auto md:right-[-9px]"></div>
                      </div>

                      
                      <div class="col-span-3 sm:ml-20 ml-0">
                        <h1 className="text-2xl font-semibold">{Prerender}</h1>
                        <div class="flex flex-col space-y-2 my-4">
                          <div class="font-bold">{whatsnew}</div>
                          <div class="flex flex-col gap-y-3">
                            <div class="text-base">
                              {whatsNewContents.map((whatsNewContent) => {
                                return (
                                  <ul className="ml-9">
                                    <li class="relative text-[16px]  ml-6 before:absolute before:-left-6 before:top-2 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-gray-300">
                                      {whatsNewContent}
                                    </li>
                                  </ul>
                                );
                              })}
                            </div>
                          </div>
                          
                          <div class="font-bold">{Improvement}</div>
                          <div class="flex flex-col gap-y-3">
                            <div class="text-base">
                              {improvementContents.map((improvementContent) => {
                                return (
                                  <ul className="ml-9">
                                    <li class="relative text-[16px] ml-6 before:absolute before:-left-6 before:top-2 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-gray-300">
                                      {improvementContent}
                                    </li>
                                  </ul>
                                );
                              })}
                            </div>
                          </div>

                          <div class="font-bold">{bugFix}</div>
                          <div class="flex flex-col gap-y-3">
                            <div class="text-base">
                              {bugFixContents.map((bugFixContent) => {
                                return (
                                  <ul className="ml-9">
                                    <li class="relative text-[16px] ml-6 before:absolute before:-left-6 before:top-2 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-gray-300">
                                      {bugFixContent}
                                    </li>
                                  </ul>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

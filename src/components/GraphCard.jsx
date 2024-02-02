import {up, graph, vector} from '../assets';

const GraphCard = () =>{
    return(
        <div className="flex flex-col gap-4 m-4 md:grid md:grid-cols-2">
            <div className="border border-gray-300 dark:border-[#2f2b3a] rounded-lg flex flex-row justify-between p-2">
                <div className="flex flex-col gap-1">
                    <div className="p-2 font-xl font-semibold dark:text-white">Total Employees</div>
                    <div className="p-2 pb-4 font-semibold text-5xl dark:text-white">216</div>
                    <div className="pl-2 text-xs text-[#686868] font-sans dark:text-white ">120 Men</div>
                    <div className="text-xs text-[#686868] pl-2 pb-2 font-sans  ">96 Women</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-[#FF5151] text-xs  justify-between gap-0">+2%</div>
                    <img src={up} className='w-5 h-5'/>
                    <div className='relative mb-5'>
                    <img src={vector} className='w-30 h-30 pr-3 pb-5 class="absolute top-0 left-0 '/>
                    <img src={graph} className='absolute top-0 left-0 w-30 h-30 pb-5'/>
                    </div>
                    <div className='p-1 bg-[#FFEFE7] text-xs text-center font-sans pr-3 rounded-md'>+2% Past month</div>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg flex flex-row justify-between dark:border-[#2f2b3a] p-2">
                <div className="flex flex-col gap-1">
                    <div className="p-2 font-xl font-semibold dark:text-white">Talent Request</div>
                    <div className="p-2 pb-4 font-semibold text-5xl dark:text-white">16</div>
                    <div className="pl-2 text-xs text-[#686868] font-sans ">6 Men</div>
                    <div className="text-xs text-[#686868] pl-2 pb-2 font-sans ">10 Women</div>
                </div>
                <div className="flex flex-col gap-0 items-center">
                    <div className="text-[#FF5151] text-xs items-center align-center ">+5%</div>
                    <img src={up} className='w-5 h-5'/>
                    <div className='relative mb-5'>
                    <img src={vector} className='w-30 h-30 pr-3 pb-5 class="absolute top-0 left-0 '/>
                    <img src={graph} className='absolute top-0 left-0 w-30 h-30 pb-5'/>
                    </div>
                    <div className='p-1 bg-[#FFEFE7] text-xs text-center font-sans pr-3 rounded-md'>+5% Past month</div>
                </div>
            </div>
        </div>
    )
}

export default GraphCard
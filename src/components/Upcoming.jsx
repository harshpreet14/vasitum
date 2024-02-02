import { thindropdown, pin, unpin, dots } from "../assets";

const Upcoming = () =>{
    return(
        <div className="flex flex-col md:min-h-80 md:max-h-96 lg:max-h-48">
            <div className=" flex flex-col border border-gray-300 dark:border-[#2f2b3a] rounded-t-lg p-4 pb-0 m-4 mb-0">
            <div className="flex flex-row justify-between align-center mb-4">
            <p className="font-semibold text-md text-[#161E54] dark:text-[#a688fa]">Upcoming Schedule</p>
            <div className="border border-gray-200 dark:border-[#2f2b3a] flex flex-row p-1 justify-between rounded-md gap-1">
                <p className="text-xs text-gray-400 font-sans">Today, 01 Feb 2024</p>
                <img src={thindropdown} className="w-4 h-4"/>
            </div>
            </div>
            <span className=" text-[#686868] text-sm mb-2">Priority</span>
            <div className=" overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-transparent max-h-64 md:max-h-64 lg:max-h-80 lg:max-m-10">
            <Item title="Review candidate applications" time="5 Minutes ago"/>
            <span className=" text-[#686868] text-sm mb-2 mt-5">Other</span>
            <Item title="Interview with candidates" time="Today -10.30 AM"/>
            <Item title="Short meeting with product designer from IT Department" time="Today -  09:15 AM"/>
            <Item title="Review candidate applications" time="5 Minutes ago"/>
            <Item title="Interview with candidates" time="Today -10.30 AM"/>
            </div>
            
        </div>
        <div className="border border-t-0 dark:border-[#2f2b3a] border-gray-300 p-2 m-4 mt-0 rounded-b-lg text-[#FF5151] text-center">
            See All Events
        </div>
        </div>
        
    )
}

const Item = ({title, time}) =>{
    return(
        <div className="bg-[#FAFAFA] border border-gray-200 rounded-md p-3 mb-2 hover:bg-[#ececec] dark:bg-[#2f2b3a] dark:border-[#2f2b3a] ">
            <p className="text-md text-[#303030] dark:text-white mb-1">{title}</p>
            <div className="flex flex-row justify-between items-center">
                <span className="text-xs font-sans text-[#686868] dark:text-white">{time}</span>
                    <img src = {dots} className="w-8 h-8 hover:bg-gray-200 hover:rounded-full p-1"/> 
            </div>
        </div>
    )
}




export default Upcoming
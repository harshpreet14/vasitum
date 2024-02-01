
import { thindropdown, pin, unpin, dots } from "../assets";

const Announcement = () =>{
    return(
        <div className="flex flex-col">
            <div className=" flex flex-col border border-gray-300 rounded-t-lg p-4 pb-0 m-4 mb-0">
            <div className="flex flex-row justify-between align-center mb-4">
            <p className="font-semibold text-md text-[#161E54]">Announcement</p>
            <div className="border border-gray-200 flex flex-row p-1 justify-between rounded-md gap-1">
                <p className="text-xs text-gray-400 font-sans">Today, 01 Feb 2024</p>
                <img src={thindropdown} className="w-4 h-4"/>
            </div>
            </div>
            <Item title="Outing schedule for every department" time="5 Minutes ago"/>
            <Item title="Meeting HR department" time="Yesterday, 12:30 PM"/>
            <Item title="IT Department need two more talents for UX/UI Designer position" time="Yesterday, 09:15 AM"/>
        </div>
        <div className="border border-t-0 border-gray-300 p-2 m-4 mt-0 rounded-b-lg text-[#FF5151] text-center">
            See All Announcements
        </div>
        </div>
        
    )
}

const Item = ({title, time}) =>{
    return(
        <div className="bg-[#FAFAFA] border border-gray-200 rounded-md p-3 mb-2">
            <p className="text-md text-[#303030] mb-1">{title}</p>
            <div className="flex flex-row justify-between items-center">
                <span className="text-xs font-sans text-[#686868]">{time}</span>
                <div className="flex flex-row gap-2">
                    <img src = {title ==="Outing schedule for every department"? pin: unpin} className="w-7 h-7"/>
                    <img src = {dots}/> 
                </div>
            </div>
        </div>
    )
}


export default Announcement;
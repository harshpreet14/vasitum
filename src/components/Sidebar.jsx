import {dashboard, recruitment, calendar, employee, department, support, settings, tablogo} from '../assets';

export default function Sidebar({isOpen, closeSidebar}) {

    const mainMenu = [
        { name: "Dashboard", icon: dashboard },
        { name: "Recruitment", icon: recruitment },
        { name: "Schedule", icon: calendar }, 
        { name: "Employee", icon: employee },
        { name: "Department", icon: department }
    ];
    
    const otherMenu = [
        { name: "Support", icon: support},
        { name: "Settings", icon: settings },
    ];

    return( 
    <div className="hidden md:w-20 lg:w-64 border-r border-gray-200 bg-[#FAFAFA] dark:bg-[#46424f] dark:border-[#1a1625] p-5 px-6 md:block ">
            <div className="flex items-center">
                <img src={tablogo} alt="Vasitum" className="w-12 h-12 cursor-default"/>
                <span className="hidden lg:block text-2xl px-3 font-bold text-[#0A337A] dark:text-white">Vasitum</span>
            </div>
            <div className="mb-10">
                <p className="lg:block text-start text-[#818181] text-xs mt-10 mb-5 whitespace-nowrap overflow-hidden cursor-default">MAIN MENU</p>
                <ul>
                    {mainMenu.map((val, index) => (
                        <li key={index} className="mb-7 flex items-center cursor-pointer">
                            <img src={val.icon} alt={val.name} className="w-6 h-6"/>
                            <span className={`hidden md:hidden lg:block ml-3 hover:text-[#FF5151] dark:text-white dark:hover:text-[#FF5151] ${val.name === "Dashboard" ? "text-[#FF5151]" : ""}`}>{val.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-10">
                <p className="lg:block text-start text-[#818181] text-xs mt-10 mb-5 whitespace-nowrap overflow-hidden cursor-default">OTHER</p>
                <ul>
                    {otherMenu.map((val, index) => (
                        <li key={index} className="mb-7 flex items-center cursor-pointer">
                            <img src={val.icon} alt={val.name} className="w-6 h-6"/>
                            <span className="hidden md:hidden lg:block ml-2 hover:text-[#FF5151] dark:text-white dark:hover:text-[#FF5151]">{val.name}</span>
                        </li>
                    ))}
                </ul>
            </div>   
        </div>
    );
}








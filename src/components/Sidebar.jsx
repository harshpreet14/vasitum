import {dashboard, recruitment, calendar, employee, department, support, settings, tablogo} from '../assets';


export default function Sidebar() {

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

    return (
        <div className="h-screen border-r border-gray-200 w-242 px-6 p-5 ">
            <div className="flex flex-row items-center justify-center">
            <img src={tablogo} alt="Vasitum" className="w-12 h-12">
            </img>
            <div className="md:text-3xl px-3 font-bold text-[#0A337A]  ">Vasitum</div>
            </div>

            <div className="mb-10">
                <p className="text-start text-[#818181] text-xs mt-10 mb-5">MAIN MENU</p>
                <ul>
                    {
                        mainMenu.map((val, index) =>{
                            return <li key={index} className={val.name ==="Dashboard" ? "mb-7 flex flex-row gap-7 text-[#FF5151]" : "mb-7 flex flex-row gap-7 text-[#686868] hover:text-[#FF5151] hover:cursor-pointer"}>
                                <div><img src={val.icon} className="w-6 h-6"/></div>
                                <div>{val.name}</div>
                                </li>
                        }
                    )}
                </ul>
            </div>
            <div className="mb-10">
                <p className="text-start text-[#818181] text-xs mt-10 mb-5">OTHER</p>
                <ul>
                    {
                        otherMenu.map((val, index) =>{
                            return <li key={index} className="mb-7 flex flex-row gap-7 text-[#686868] hover:text-[#FF5151] hover:cursor-pointer">
                                <div><img src={val.icon} className="w-6 h-6"/></div>
                                <div>{val.name}</div>
                                </li>
                        }
                    )}
                </ul>
            </div>   
        </div>
    )
}











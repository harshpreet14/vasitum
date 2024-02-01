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
        // lg:block will show sidebar on large screens and above
        // md:hidden hides the sidebar on medium screens
        // hidden hides the sidebar by default on small screens and below
        <div className="hidden md:hidden lg:block border-r border-gray-200 bg-[#FAFAFA] w-64 px-6 p-5">
            <div className="flex items-center">
                <img src={tablogo} alt="Vasitum" className="w-12 h-12"/>
                {/* lg:block will show the text on large screens and above */}
                {/* hidden hides the text on medium screens and below */}
                <span className="hidden lg:block text-2xl px-3 font-bold text-[#0A337A]">Vasitum</span>
            </div>

            {/* The menus will be shown on large screens and above */}
            {/* On medium screens, only icons will be shown */}
            <div className="mb-10">
                <p className="hidden md:hidden lg:block text-start text-[#818181] text-xs mt-10 mb-5">MAIN MENU</p>
                <ul>
                    {
                        mainMenu.map((val, index) => {
                            return <li key={index} className="mb-7 flex items-center">
                                <img src={val.icon} alt={val.name} className="w-6 h-6"/>
                                {/* Hide text labels on medium screens and below */}
                                <span className="hidden md:hidden lg:block ml-2">{val.name}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="mb-10">
                <p className="hidden md:hidden lg:block text-start text-[#818181] text-xs mt-10 mb-5 ">OTHER</p>
                <ul>
                    {
                        otherMenu.map((val, index) => {
                            return <li key={index} className="mb-7 flex items-center">
                                <img src={val.icon} alt={val.name} className="w-6 h-6"/>
                                <span className="hidden md:hidden lg:block ml-2">{val.name}</span>
                            </li>
                        })
                    }
                </ul>
            </div>   
        </div>
    )
}

/*import {dashboard, recruitment, calendar, employee, department, support, settings, tablogo} from '../assets';


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
        <div className="h-screen border-r border-gray-200 w-242 px-6 p-5">
            <div className="flex flex-row items-center justify-center">
            <img src={tablogo} alt="Vasitum" className="w-12 h-12">
            </img>
            <div className="md:text-3xl px-3 font-bold text-[#0A337A]">Vasitum</div>
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

*/









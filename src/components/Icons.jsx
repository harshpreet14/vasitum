import {dashboard, recruitment, calendar, employee, department, support, settings, tablogo} from '../assets';
import { useState } from 'react';

const Icons = () =>{
    const [open, setOpen] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(false)

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
        <div className={`${open ? 'w-60' : 'w-fit'} hidden sm:block relative h-full duration-300 border-gray-200 bg-[#FAFAFA] p-5 dark:bg-slate-800`}>
            
        </div>
    )
}

export default Icons;
import React from 'react'
import { burgermenu, notifications, messages, search, profile, dropdown} from '../assets'

const SearchBar =()=>
{
    return (
        <div className='px-4 py-[9px] bg-[#f4f0f0] space-x-2 flex grow items-center rounded-md'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5730_2526)">
                <path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080"/>
                </g>
                <defs>
                <clipPath id="clip0_5730_2526">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <input className='grow outline-none bg-transparent leading-[22px] placeholder:text-[#808080]' placeholder='Search features, tutorials, etc.'/>

        </div>
    )
}


const Header = () =>{
    return(
        <nav className='bg-white border-b flex w-full p-4 sticky flex-row justify-between items-center'>
        <div className='flex flex-row gap-3 items-center'>
            <img src={burgermenu}></img>
            <img src={search}></img>
        </div>
        <div className='flex flex-row items-center gap-3'>
            <img src={notifications} className='w-5 h-5'></img>
            <img src={messages} className='w-5 h-5'></img>
            <img src={profile} className='w-8 h-8 rounded-full'></img>
            <span className='hidden lg:block text-[#161E54] text-md font-semibold'>Admirra John</span>
            <img src={dropdown} className='w-5 h-5'></img>
        </div>
        </nav>
    )
}
   

export default Header;
/*const Header = () => {
  return (
    <nav className='bg-white flex w-full items-center px-8 py-3 space-x-4 sticky top-0 z-10'>
        <aside className='flex items-center space-x-2.5 grow'>
        
        </aside>
        <SearchBar />
        <section className='flex space-x-3 grow justify-end'>
            <aside className=' p-2.5 bg-background-light rounded-full hover:cursor-pointer'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D"/>
                </svg>
            </aside>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer'>
                <g clip-path="url(#clip0_5730_2537)">
                <circle cx="20" cy="20" r="20" fill="#E6E6E6"/>
                <path d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z" fill="#4D4D4D"/>
                </g>
                <defs>
                <clipPath id="clip0_5730_2537">
                <rect width="40" height="40" fill="white"/>
                </clipPath>
                </defs>
            </svg>

        </section>
    </nav>
  )
}
*/

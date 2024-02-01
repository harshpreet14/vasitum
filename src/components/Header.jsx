import {useState} from 'react'
import { burgermenu, notifications, messages, search, profile, dropdown} from '../assets'


const SearchBar =()=>

{
    return (
        <div className='px-4 py-[9px] bg-[#FAFAFA] space-x-2 flex grow items-center rounded-sm '>
            <input className='grow outline-none bg-transparent leading text-md :text-[#B3B3B3]' placeholder='Search'/>
            <img src ={search}/>
        </div>
    )
}


const Header = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    // Function to handle the search submit for the toggleable search bar on small screens
    const handleSearchSubmitMobile = (e) => {
        e.preventDefault();
        setShowSearchInput(false);
    };


    return (
        <>
            {showSearchInput && (
                <form onSubmit={handleSearchSubmitMobile} className="fixed inset-x-0 top-0 p-2 z-20 flex items-center px-4 py-[9px] bg-[#FAFAFA] rounded-sm">
                    <input
                        name="search"
                        type="search"
                        className="w-full p-2 grow outline-gray-100 bg-transparent text-md text-[#525252] placeholder-gray-600"
                        placeholder="Search"
                        autoFocus
                        onBlur={() => setShowSearchInput(false)}
                    />
                </form>
            )}

            <nav className={`bg-white border-b flex w-full p-4 sticky top-0 z-10 flex-row justify-between items-center ${showSearchInput ? 'hidden' : 'flex'}`}>
                <div className='flex flex-row gap-3 items-center'>
                    <img src={burgermenu} className='w-6 h-6 lg:hidden ' alt="Menu" />
                    <img src={search} className="w-6 h-6 md:hidden " alt="Search" onClick={() => setShowSearchInput(true)} />
                    <div className="hidden md:block lg:block">
                        <SearchBar/>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <img src={notifications} className='w-6 h-6' alt="Notifications" />
                    <img src={messages} className='w-6 h-6' alt="Messages" />
                    <img src={profile} className='w-8 h-8 rounded-full' alt="Profile" />
                    <span className='hidden lg:block text-[#161E54] text-md font-semibold'>Admirra John</span>
                    <img src={dropdown} className='w-5 h-5' alt="Dropdown" />
                </div>
            </nav>
        </>
    );
};


   

export default Header;

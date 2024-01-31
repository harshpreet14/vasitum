import Recent from "./Recent.jsx";
import Upcoming from './Upcoming.jsx';


const Right = () =>{
    return(
        <div className="flex flex-row justify-center md:flex-col ">
            <Recent/>
            <Upcoming/>
        </div>
    )
}

export default Right;
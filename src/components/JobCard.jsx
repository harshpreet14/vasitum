const JobCard = () =>{
    return(
        <div className="flex flex-col gap-4 m-4 md:grid md:grid-cols-3 justify-center">
        <div className="bg-[#FFEFE7] flex flex-col gap-1 items-start p-2 rounded-lg dark:bg-[#fcb795]">
            <div className="p-2 font-xl font-semibold">Available Position</div>
            <div className="p-2 font-semibold text-4xl">24</div>
            <div className="p-2 text-xs font-sans text-[#FF5151]">4 Urgently needed</div>
        </div>
        <div className="bg-[#E8F0FB] dark:bg-[#5e43f3]  flex flex-col gap-1 items-start p-2 rounded-lg ">
            <div className="p-2 font-xl font-semibold">Jobs Open</div>
            <div className="p-2 font-semibold text-4xl">10</div>
            <div className="p-2 text-xs font-sans text-[#3786F1]">4 Active hiring</div>
        </div>
        <div className="bg-[#FDEBF9] dark:bg-[#ff70db] flex flex-col gap-1 items-start p-2 rounded-lg">
            <div className="p-2 font-xl font-semibold">New Employees</div>
            <div className="p-2 font-semibold text-4xl">24</div>
            <div className="p-2 text-xs font-sans text-[#EE61CF]">4 Department</div>
        </div>
        </div>
    )
}

export default JobCard;
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Contact(props) {
    
    const [username] = useState(props.username)
    const navigate = useNavigate()

    const handleClick = (e)=>{
        
        if(e.target.className.includes('gotoChat')){
            navigate(`/chat/${username}`)
        }else{
            navigate(`/profile/${username}`)
        }
    }
    return (
        <div className=" hover:bg-slate-900 w-full  px-[.6em] max-[375px]:px-[1em] p-[.9em]  flex items-center gap-[1em] max-[375px]:gap-[.5em] cursor-pointer" onClick={handleClick}>
            <span className=" block max-[375px]:w-[45px] w-[50px] max-[375px]:h-[45px] h-[50px] border-2 border-red-200 rounded-full">
        
            </span>
            <div  className="gotoChat h-full   flex-grow flex flex-col items-start justify-center relative" >
            <p className="  gotoChat   font-bold capitalize text-slate-200 ">{username}</p>
            <p className="gotoChat  text-[.9em] text-slate-300">last message goes here</p>
            <span className={`absolute w-[10px] h-[10px] rounded-full ${props.online?'bg-green-300':'bg-red-300'} right-[0]  bottom-[0]`}></span>
            <p></p>
            </div>
            

        </div>
      );
}

export default Contact;
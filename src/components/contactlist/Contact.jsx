import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Contact(props) {
    
    const [username] = useState(props.username)
    const navigate = useNavigate()

    const handleClick = (e)=>{
        
        if(e.target.className.includes('gotoChat')){
            navigate(`/chat/${username}`)
        }else{
            navigate('/profile')
        }
    }
    return (
        <div className="w-full h-[85px] px-[.6em] py-[1em] border-y-[1px] border-slate-500 flex items-start gap-[1em] cursor-pointer" onClick={handleClick}>
            <span className=" block w-[50px] h-[50px] border-2 border-red-200 rounded-full"></span>
            <div  className="gotoChat h-full flex-grow flex items-center justify-center" >
            <p className="gotoChat w-full  font-bold capitalize text-slate-300 ">{username}</p>
            </div>
            

        </div>
      );
}

export default Contact;
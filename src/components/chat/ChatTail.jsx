import { useState } from "react";
import {BsSendFill} from 'react-icons/bs'
import socket from "../../services/socket";

function ChatTail({sender,reciever}) {
    const [msg,setMsg] = useState('')
    

   
    const handleClick = ()=>{    
                    socket.emit('message',{reciever,message:msg,sender})
                     setMsg('')
        
    }

    return ( 
        <div className="w-full  flex items-center p-[1em] gap-[1em]">
            
            <input className="flex-grow p-[1em] rounded-[3em]" type="text" placeholder="message" value={msg} onChange={e=>setMsg(e.target.value)}/>
            <button className="p-[.8rem] flex justify-center items-center rounded-full bg-blue-500" onClick={handleClick}><BsSendFill className="text-[1.8em] text-white"></BsSendFill></button>
        </div>
     )
    
}

export default ChatTail;
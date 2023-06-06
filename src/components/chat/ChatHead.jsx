import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {MdArrowBack} from 'react-icons/md'

function ChatHead(props) {
    const navigate = useNavigate();
    const [username] = useState(props.username)
    return (
        <div className="w-full bg-blue-300 flex items-center justify-between p-[1em]">
            <span className="w-[50px] h-[50px] rounded-full bg-black"></span>
            <h4 className=" text-[1.2em] capitalize">{username}</h4>
            <button className=" capitalize p-[.2em]" onClick={()=>{navigate('/contacts')}}><MdArrowBack className="text-[2em] scale-[-1]"></MdArrowBack></button>
        </div>
      );
}

export default ChatHead;
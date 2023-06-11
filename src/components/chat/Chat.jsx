import { useEffect, useState } from "react";
import socket from "../../services/socket";

function Chat({username}) {
    const [messageQue,setMessageQue] = useState([])
    
    useEffect(()=>{
        socket.on('message',data=>{
            
            if(data.reciever === username || data.sender === username){

                setMessageQue((prevMessage)=>[data,...prevMessage])
            }
        })


        return ()=>{
            socket.off('message')
        }
    },[socket])
    return ( 
        <div className="mb-[2em] w-full h-full bg-gray-900 px-[1em] flex flex-col-reverse gap-[1em] overflow-y-auto">
            {messageQue.map((item,index)=>{
                
                let len = Math.floor(((item.message.length*8) + 32))
                len = len > 250? '250px': len+'px'
            if(item.reciever === username){

                    return  <p style={{width:len}} className= {`mr-auto bg-slate-500 text-white p-[1em] rounded-[1.4em]`} key={item.sender+index}>{item.message}</p>
                }
                return <p style={{width:len}} className="ml-auto bg-blue-500 text-white p-[1em] rounded-[1.4em]" key={item.reciever+index}>{item.message}</p>
            })}
        </div>
     );
}

export default Chat;
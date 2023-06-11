import { useParams } from "react-router-dom";
import ChatHead from "./ChatHead";
import Chat from "./Chat";
import ChatTail from "./ChatTail";

function ChatInterface({user}) {
    const {username} = useParams()
    
    return ( 
        <div className="w-full bg-gray-900 h-full flex flex-col">
            <ChatHead username={username}></ChatHead>
            <Chat username={user}></Chat>
            <ChatTail reciever={username} sender={user} ></ChatTail>
        </div>
     );
}

export default ChatInterface;
import { useParams } from "react-router-dom";
import ChatHead from "./ChatHead";
import Chat from "./Chat";
import ChatTail from "./ChatTail";
function ChatInterface() {
    const {username} = useParams()

    return ( 
        <div className="w-full bg-gray-800 h-full flex flex-col">
            <ChatHead username={username}></ChatHead>
            <Chat></Chat>
            <ChatTail></ChatTail>
        </div>
     );
}

export default ChatInterface;
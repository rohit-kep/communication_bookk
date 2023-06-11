import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function ProfilePage({userData}){
        const navigate = useNavigate();
        const {username} = useParams()
        console.log(username,userData)
        const handleClick = ()=>{
            navigate('/chat')
        }

        return (
            <div className='containe h-full bg-darkThemeBakground-100 flex flex-col items-center gap-[1em] pb-[1em]'>
                <span className='  w-full flex justify-center items-center p-[1em] bg-yellow-200'>
                    <div className=' mt-[100px] border-[5px] border-slate-500 w-[200px] h-[200px] rounded-full '></div>
                    </span>
                <h1 className='text-[4em] capitalize text-slate-300'>{username}</h1>
                <p className='bg-blue-100 p-[.2em] rounded-lg text-center'>enter anything that descibes you.</p>
                <button onClick={handleClick}  className={`bg-blue-400 p-[.4em] w-[100px] rounded-[1em] ${username == userData.username?'hidden':'bg-red-300'}`}>chat</button>
            </div>
        );
    
}

export default ProfilePage;

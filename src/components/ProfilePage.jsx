import { useNavigate } from "react-router-dom";

function ProfilePage(){
        const navigate = useNavigate();

        const handleClick = ()=>{
            navigate('/chat')
        }

        return (
            <div className='container bg-red-100 flex flex-col items-center gap-[1em] pb-[1em]'>
                <span className='  w-full flex justify-center items-center p-[1em] bg-red-200'>
                    <div className=' mt-[100px] bg-red-400 w-[200px] h-[200px] rounded-full '></div>
                    </span>
                <h1 className='text-[2em]'>username</h1>
                <p className='bg-blue-100 p-[.2em] rounded-lg text-center'>here goes thetahgline</p>
                <button onClick={handleClick}  className='bg-blue-400 p-[.4em] w-[100px] rounded-[1em]'>chat</button>
            </div>
        );
    
}

export default ProfilePage;

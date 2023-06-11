import OnlineToggle from './OnlineToggle';
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function SearchBar({user}) {
    const navigate = useNavigate()

    return ( 
         <div className='border-b-[.1em] border-slate-500  w-full sticky bg-inherit flex max-[375px]:flex-col items-center py-[1em] px-[.5em] gap-[1em] bg-blue-300 '>
            <div className='max-[375px]:container flex  justify-between items-center min-[400px]:gap-[1em]'>
            <span className='block w-[50px]  h-[50px] border-[2px] border-blue-200 rounded-full' onClick={()=>{navigate(`/profile/${user.username}`)}} ></span>
            <OnlineToggle userData={user} ></OnlineToggle>
            </div>
            
            <input className='text-white w-full p-[.8em] bg-slate-950 rounded-[1.6em] outline-none pl-[2em]' type="text" placeholder='currently under development :/' />
            <BsSearch className=' absolute m-[1em] right-[.2em] top-[.3em] max-[375px]:top-[3.2em] text-[1.4em] text-gray-400 hover:text-white'/>
        
        </div>
    );
}



export default SearchBar;
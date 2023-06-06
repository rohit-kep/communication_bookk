import OnlineToggle from './OnlineToggle';
import {BsSearch} from 'react-icons/bs'

function SearchBar() {
    return ( 
         <div className='  w-full sticky bg-inherit flex items-center py-[1em] px-[.5em] gap-[1em] bg-blue-300 '>
            
            <OnlineToggle></OnlineToggle>
            
            <input className='text-white w-full p-[.8em] bg-black rounded-[1.6em] outline-none pl-[2em]' type="text" placeholder='Search users' />
            <BsSearch className=' absolute m-[1em] right-[.5em] top-[.3em] text-[1.4em] text-gray-400 hover:text-white'/>
        
        </div>
    );
}



export default SearchBar;
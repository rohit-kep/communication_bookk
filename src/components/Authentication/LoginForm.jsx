import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../../services/socket';



 export default function LoginForm(){
   const [username,setUsername] = useState('')    
   const [passwd,setPasswd] = useState('')
   const [error1, setError1] = useState('')
   const [error2,setError2] = useState('')
   const navigate = useNavigate();

   const handleLogin = async()=>{
         const userData = {
            username,
            passwd,
            online:true
         }
      

         try{
            const response = await fetch('http://localhost:3000/api/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(userData)
            })
   
            if(response.ok){                
                  const result = await response.json()
                  
                  if(result.response === 1){
                     setError1('')
                     setError2('')
                     socket.connect();    
                     socket.emit('userdata',userData)    
                     navigate('/contacts');
                     
                  }
                  if(result.response > 1){
                     
                     setError1('')
                     setError2('password is not correct')
                  }
                  if(result.response === 0){
                     setError1('username is not found')
                     setError2('password is not correct')
                  }
            }
            
        }catch(err){
            console.log(err)
        }
      



      
   }

    return (
      <div className="w-[100%] h-full bg-[url('/src/assests/pexels-henry-&-co-1939485.jpg')] bg-cover flex justify-center">
      <div className=' w-[375px] h-auto mt-[100px] flex flex-col items-center  gap-[1.5rem]'>
      <h1 className=' text-gray-900 w-full text-left text-[1.5rem]'>Login</h1>
       <p className='  w-full text-left text-[.9rem] text-slate-500 pb-[1em]'>Plz enter your details to access ur account.</p>   
            <span className='w-full'>
             <input className=' w-full bg-slate-200 p-[.7em] rounded-md outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='username'
              placeholder='Username' value={username} onChange={e=> setUsername(e.target.value)}/>    
             <p className='text-red-500 text-[.8em]'>{error1}</p>
            </span>

            <span className='w-full'>
            <input className=' w-full  bg-slate-200 p-[.7em] rounded-md outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='passwd'
             placeholder='Password' value={passwd} onChange={e=> setPasswd(e.target.value)}/>    
            <p className='text-red-500 text-[.8em]'>{error2}</p>
            </span>
      
      <button className='w-full p-[1em] bg-blue-500 rounded-md text-white active:bg-blue-400 mb-[1em]' onClick={handleLogin}>Login</button>
      </div>
    </div>
    )
  
}


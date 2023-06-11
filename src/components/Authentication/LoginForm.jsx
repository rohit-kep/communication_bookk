import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../../services/socket';



 export default function LoginForm({setUserData}){
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
         setUserData(userData)

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
                     
                     socket.emit('setId',userData)    
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
      <div className="w-[100%] h-full bg-darkThemeBakground-100 bg-cover flex justify-center max-[375px]:p-[1em] max-[375px]:text-center">
      <div className=' w-[375px] h-auto mt-[100px] flex flex-col items-center  gap-[1.5rem]'>
      <h1 className=' text-white w-full text-left font-bold text-[1.5rem] max-[375px]:text-center'>Login</h1>
       <p className='  w-full text-left text-[.9rem] text-slate-300 pb-[1em] max-[375px]:text-center'>Plz enter your details to access ur account.</p>   
            <span className='w-full'>
             <input className=' w-full bg-slate-200 p-[.7em] rounded-[1.5em] outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='username'
              placeholder='Username' value={username} onChange={e=> setUsername(e.target.value)}/>    
             <p className='text-red-500 text-[.8em]'>{error1}</p>
            </span>

            <span className='w-full'>
            <input className=' w-full  bg-slate-200 p-[.7em] rounded-[1.5em] outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='passwd'
             placeholder='Password' value={passwd} onChange={e=> setPasswd(e.target.value)}/>    
            <p className='text-red-500 text-[.8em]'>{error2}</p>
            </span>
      
      <button className='w-full p-[1em] bg-blue-500 rounded-[1.5em] text-white active:bg-blue-400 mb-[1em]' onClick={handleLogin}>Login</button>
      </div>
    </div>
    )
  
}


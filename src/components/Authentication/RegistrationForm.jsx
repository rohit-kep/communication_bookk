import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import socket from '../../services/socket';


function RegistrationForm(){
        const [username,setUsername] = useState('')
        const [passwd,setPasswd] = useState('')
        const [dialog,setDialog] = useState("let's get started with making an account first.")
        const [error,setError] = useState()
        const navigate = useNavigate();

        const handleSubmit = async (e)=>{
            e.preventDefault()
            
            const userData = {
                username,
                passwd,
                online:true
            }
            

            if(username === '' || username === undefined || passwd === '' || passwd === undefined){
                
                setDialog('Plz fill the form first before submitting.')
                return
            }
 
            //socket code
            socket.connect()

            
            

            try{
                console.log(userData)
                const response = await fetch('http://localhost:3000/api/register',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(userData)
                })

                if(response.ok){                
                    navigate('/contacts');
                }
                else{
                    const data = await response.json()
                    setError(data.error)
                    
                }
            }catch(err){
                console.log(err)
            }
            
        }
    


        return (
            <div className="w-[100%] h-full bg-[url('/src/assests/pexels-henry-&-co-1939485.jpg')] bg-cover flex justify-center">
                    <div className=' w-[375px] h-auto mt-[100px] flex flex-col items-center  gap-[1.5rem]'>
                    <h1 className=' text-gray-900 w-full text-left text-[1.5rem]'>Welcome to Chatbook</h1>
                     <p  className=' w-full text-left text-[.9rem] text-slate-500 pb-[1em]'>{dialog}</p>   
                        <span className='w-full'>
                        <input className=' w-full bg-slate-200 p-[.7em] rounded-md outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='username' placeholder='ur name plz' value={username} onChange={(e)=>{setError(''); setDialog("let's get started with making an account first.");  setUsername(e.target.value)}}/>    
                         <p className='text-red-500 text-[.8em]'>{error}</p>
                        </span>

                        <input className=' w-full  bg-slate-200 p-[.7em] rounded-md outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='passwd' placeholder='now ur password sir' value={passwd} onChange={(e)=>{setPasswd(e.target.value)}}/>    
                    <div className=' w-full'>
                    <button onClick={handleSubmit} className='w-full p-[1em] bg-blue-500 rounded-md text-white active:bg-blue-400 mb-[1em]'>Create User</button>
                    <Link className='text-[.9em] text-blue-500 hover:text-blue-400' to={'/login'}>Already have an account?</Link>                    
                    </div>

                    </div>
            </div>
        );

}

export default RegistrationForm;

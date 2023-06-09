import { useState } from 'react';
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import socket from '../../services/socket';


function RegistrationForm({setUserData}){
        const [username,setUsername] = useState('')
        const [passwd,setPasswd] = useState('')
        const [dialog,setDialog] = useState("let's get started with making an account first.")
        const [error,setError] = useState()
        const navigate = useNavigate();

        const handleSubmit = async (e)=>{
            const maxTries = 3
            let tries = 0
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
 
            setUserData(userData)
            
            
           await postData()
            
             
        async  function postData(){
                 
            try{
              
                const response = await fetch('http://localhost:3000/api/register',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(userData)
                })

                if(response.ok){ 
                    localStorage.setItem('authenticationDetails',JSON.stringify(userData))
                    navigate('/contacts');
                }
                else{
                    const data = await response.json()
                    setError(data.error)
                    
                }
            }catch(err){
                if(tries <= maxTries){
                    tries++
                    postData()
                }
                console.error(err)
                return
            }
            
        }

            
        }
   

        return (
            <div className="w-[100%] h-full bg-darkThemeBakground-100 bg-cover flex justify-center max-[375px]:p-[1em] max-[375px]:text-center">
                    <div className=' w-[375px] h-auto mt-[100px] flex flex-col items-center  gap-[1.5rem] max-[375px]:gap-[1.7rem]'>
                    <h1 className=' text-white w-full text-left text-[1.5rem] max-[375px]:text-center'>Welcome to Chatbook</h1>
                     <p  className=' w-full text-left text-[.9rem] text-slate-300 pb-[1em] max-[375px]:text-center'>{dialog}</p>   
                        <span className='w-full'>
                        <input className=' w-full bg-slate-200 p-[.7em] rounded-[1.5em] outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='username' placeholder='ur name plz' value={username} onChange={(e)=>{setError(''); setDialog("let's get started with making an account first.");  setUsername(e.target.value)}}/>    
                         <p className='text-red-500 text-[.8em]'>{error}</p>
                        </span>

                        <input className=' w-full  bg-slate-200 p-[.7em] rounded-[1.5em] outline-none focus:bg-blue-400 focus:placeholder:text-white focus:text-white' type="text" id='passwd' placeholder='now ur password sir' value={passwd} onChange={(e)=>{setPasswd(e.target.value)}}/>    
                    <div className=' w-full'>
                    <button onClick={handleSubmit} className='w-full p-[1em] bg-blue-500 rounded-[1.5em] text-white active:bg-blue-400 mb-[1em] '>Create User</button>
                    <Link className='text-[.9em] text-blue-500 hover:text-blue-400' to={'/login'}>Already have an account?</Link>                    
                    </div>

                    </div>
            </div>
        );

}

export default RegistrationForm;

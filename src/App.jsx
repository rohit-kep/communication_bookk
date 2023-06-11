import { useEffect, useRef, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom';
import ChatInterface from './components/chat/ChatInterface';
import ContactList from './components/contactlist/ContactList';
import ProfilePage from './components/ProfilePage';
import LoginForm from './components/Authentication/LoginForm';
import RegistrationForm from './components/Authentication/RegistrationForm';
import socket from './services/socket';


function App(){
    const [userData,setUserData] = useState({})
  
    useEffect(()=>{
      

       if(Object.entries(userData).length !== 0){
          localStorage.setItem('userData',JSON.stringify(userData))
          socket.emit('setId',userData)
        }


       if(Object.entries(userData).length === 0 && JSON.parse(localStorage.getItem('userData'))){
        let data = JSON.parse(localStorage.getItem('authenticaitonDetails'))
        if(!data){
          setUserData(JSON.parse(localStorage.getItem('userData')))
        }else{

          setUserData(data)
        }
       }

       
         socket.connect()        
       
       
      socket.on('connect',()=>{
        console.log('connection is secured',socket.id)
        
      })
      socket.on('disconnect',()=>{
        console.log('connnection is discontinued')
      })
      return ()=>{
          socket.disconnect()
          socket.off('connect')
          socket.off('disconnect')
      
      }
    },[userData])
  
    return (
      <div className='container h-[100vh] mx-auto'>
          <Router>
            <Routes>
              <Route  exact path='/' element={<RegistrationForm setUserData={setUserData}/>}></Route>
              <Route path='/contacts' element={<ContactList user={userData}/>}></Route>
              <Route path='/profile/:username' element={<ProfilePage userData = {userData}/>}></Route>
              <Route  path='/login' element={<LoginForm setUserData={setUserData}/>}></Route>
              <Route path='/chat/:username' element={<ChatInterface user={userData.username}/>}></Route>
            </Routes>
          </Router>
      </div>
    );
 
}

export default App;

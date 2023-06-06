import { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatInterface from './components/chat/ChatInterface';
import ContactList from './components/contactlist/ContactList';
import ProfilePage from './components/ProfilePage';
import LoginForm from './components/Authentication/LoginForm';
import RegistrationForm from './components/Authentication/RegistrationForm';
import socket from './services/socket';


function App(){
    
    
  
    useEffect(()=>{
      
      
      socket.on('connect',()=>{
        console.log('connection is secured')

        socket.emit('message','itworekds')
      })
      socket.on('disconnect',()=>{
        console.log('connnection is discontinued')
      })
      return ()=>{
        socket.disconnect()
        socket.off('connect')
        socket.off('disconnect')
      
      }
    },[])
  
    return (
      <div className='container h-[100vh] mx-auto p-[1em] border-x-2 border-black  '>
          <Router>
            <Routes>
              <Route  exact path='/' element={<RegistrationForm/>}></Route>
              <Route path='/contacts' element={<ContactList/>}></Route>
              <Route path='/profile' element={<ProfilePage/>}></Route>
              <Route  path='/login' element={<LoginForm/>}></Route>
              <Route path='/chat/:username' element={<ChatInterface/>}></Route>
            </Routes>
          </Router>
      </div>
    );
 
}

export default App;

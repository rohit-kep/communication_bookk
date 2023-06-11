import SearchBar from "./SearchBar";
import Contact from "./Contact";
import { useEffect } from "react";
import { useState } from "react";

function ContactList() {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      let retryCount = 0;
      const maxRetries = 3;
      
      const fetchContacts = async () => {
        try {
          const res = await fetch('http://localhost:3000/api/contacts');
          const data = await res.json();
          setContacts(data);
        }
         catch (error) {
          console.error('Error fetching contacts:', error);
          if (retryCount < maxRetries) {
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            retryCount++;
            await fetchContacts();
          } else {
            console.error('Max retries exceeded. Unable to fetch contacts.');
          }
        }
      };
      
      await fetchContacts();
    };
    
    return (
      <div className="w-full h-full bg-gray-800 flex flex-col">
        <SearchBar />
        <div className="w-full h-full overflow-auto flex flex-col gap-[.3em]">
          {contacts.map((item, index) => (
             <Contact key={index + item.username} username = {item.username}></Contact>
            ))}
        </div>
       
      </div>
    );
  }
  
export default ContactList;
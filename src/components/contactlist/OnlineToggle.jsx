import  { useEffect, useState } from 'react';

const OnlineToggle = ({userData}) => {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(()=>{
      
      fetch('http://localhost:3000/api/contacts/online',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(userData)
            })

  },[isChecked])

  const handleToggle = () => {
    
    setIsChecked(!isChecked);
    
    
  };

  return (
    <label className=" w-[100px]  flex flex-col justify-center items-start max-[375px]:items-end gap-[.4em] cursor-pointer">
      
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className={`w-10 h-5 ${isChecked? 'bg-green-300':'bg-gray-600'}  rounded-full shadow-inner`}></div>
        <div
          className={`${
            isChecked ? 'bg-blue-500' : 'bg-gray-300'
          } ${
            isChecked ? ' translate-x-5' : 'translate-x-0'
          }
           absolute left-0  top-0 h-5 w-5 rounded-full transition-transform duration-[.5s]`}
        ></div>
      </div>
      
    </label>
  );
};

export default OnlineToggle;

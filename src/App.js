import { useState,useEffect } from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
 
  const contacts = [
    {
      id: 0,
      name: "Vikas",
      description: "sescription 1",
      phone: "9149125239",
    },
    {
      id: 1,
      name: "Akhilesh",
      description: "Brother",
      phone: "8574729274",
    },
    {
      id: 2,
      name: "papa",
      description: "father",
      phone: "9149125239",
    },
  ];
  const [contactList, setContactList] = useState(contacts);
 
  let index = 4;
  const AddFormHandler = (data) => {
    setContactList((prevContactList)=>{
      
      return [...prevContactList,{...data,id:Math.random()}]
    });
  };

  const handleDelete=(id)=>{
    setContactList((prevList)=>{
      console.log("pre",id,prevList);

      const updatedContacts = prevList.filter((e)=>e.id!=id)
      return updatedContacts})
  }

  const formUpdateHandler = (data)=>{
    console.log("dddd",[data.index]);
    let {index,...newData} = data;
    newData = {...newData,id:data.index}
  
    contacts[newData.id]=newData
    console.log("new data",newData);
    setContactList(contacts)
  }
  return (
    <div className="main">
      <Container contacts={contactList} DeleteProp={handleDelete} setContactListProp={setContactList} updateHandler = {formUpdateHandler} formSubmit={AddFormHandler} />
    </div>
  );
}

export default App;

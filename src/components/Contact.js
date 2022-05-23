import { useState } from "react";
import AddItem from "./AddItem";
import "./Contact.css";
const Contact = ({deleteHandler, updateHandler,item,index,contacts }) => {
  const [editForm,showEditForm] = useState(false)
  const editBtnHandler = ()=>{
    showEditForm(true)
    // console.log(index);
  }
  const onClose = () => {
    showEditForm(false);
  };

  const UpdateFormHandler = (data) => {
    data={...data,index}
    updateHandler(data)

  };
  const deleteBtn = ()=>{
    deleteHandler(item.id)
  }

  return (
    <>
    {editForm && <AddItem class="center" item={item} formSubmit={UpdateFormHandler} edit={true} onCloseClick={onClose}/>}
    <div className="main-box">
      <div className="name-box">
        <h1>{item.name}</h1>
        <small>{item.phone}</small>
      </div>
      
      <div className="icons">
        {/* <h2 onClick={editBtnHandler}>
          <i className="bi bi-pencil-fill"></i>
        </h2> */}
        <div><h2>{item.description}</h2></div>
        <h2 onClick={deleteBtn}>
          <i className="bi bi-trash"></i>
        </h2>
      </div>
    </div></>
  );
};

export default Contact;

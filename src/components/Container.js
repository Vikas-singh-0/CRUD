import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import Contact from "./Contact";

import "./Container.css";

const Container = (props) => {
 

  const [add_item, setAdd_Item] = useState(false);
  const addContactHandler = () => {
    setAdd_Item(true);
  };
  const onClose = () => {
    setAdd_Item(false);
  };
  const BackDrop = () => {
    return <div onClick={onClose} className="backDrop"></div>;
  };

  // const formSubmitHandler = (data)=>{
  //   console.log("in container",data);
  // }

 

  return (
    <>
      <div className="container">
        <h1>CRUD React App</h1>
      </div>
      <div>
        <button id="add-item-btn" onClick={addContactHandler}>
          Add Item
        </button>
      </div>
      {props.contacts.length?<div className="items">
        {props.contacts.map((item, index) => {
          return <Contact key={item.id} deleteHandler={props.DeleteProp} updateHandler={props.updateHandler} item={item} index={index}/>;
        })}
      </div>:<p>no items</p>}
      {add_item && (
        <AddItem formSubmit={props.formSubmit} contacts={props.contacts} onCloseClick={onClose} />
      )}
      {add_item && <BackDrop />}
      {/* <pre style={{color:"white"}}>{JSON.stringify(props.contacts,null,4)}</pre> */}
    </>
  );
};

export default Container;

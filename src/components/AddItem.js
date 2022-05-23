import { useState } from "react";
import "./AddItem.css";
export default function AddItem(props) {
  const {item} = props;
  let iName=''
  let iPhone=''
  let iDetails=''

  if(item){
    iName=item.name
    iPhone=item.phone
    iDetails=item.description
  }

  const [name, setName] = useState(iName);
  const [phone, setphone] = useState(iPhone);
  const [details, setDetails] = useState(iDetails);

  const classes = `add-item-box ${props.class}`;

  const addNameHandler = (e) => {
    setName(e.target.value);
  };
  const addPhoneHandler = (e) => {
    setphone(e.target.value);
  };
  const addDescriptionHandler = (e) => {
    setDetails(e.target.value);
    // console.log(name, phone, details);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      name,
      phone,
      details,

    };
    props.formSubmit(data);
    props.onCloseClick();
  };

  return (
    <form className={classes}>
      <h3>Pleaes add the contact details</h3>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="eg. John Doe"
        onChange={addNameHandler}
        value={name}
        id="name"
      />
      <label htmlFor="phone">PhoneNumber</label>
      <input
        type="number"
        placeholder="eg. 0000000000"
        value={phone}
        onChange={addPhoneHandler}
        id="phone"
      />
      <label htmlFor="description">description</label>
      <input
        type="text"
        placeholder="eg. Lorem Epsum"
        onChange={addDescriptionHandler}
        value={details}
        id="description"
      />
      <div className="action-btns">
        {props.edit ? (
          <button type="submit" id="success" onClick={formSubmitHandler}>
            Update <i className="bi bi-file-plus-fill"></i>
          </button>
        ) : (
          <button type="submit" id="success" onClick={formSubmitHandler}>
            Add <i className="bi bi-file-plus-fill"></i>
          </button>
        )}
        <button id="danger" onClick={props.onCloseClick}>
          Close <i className="bi bi-calendar2-x-fill"></i>
        </button>
      </div>
    </form>
  );
}

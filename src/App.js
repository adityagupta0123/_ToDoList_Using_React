import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

function App() {

  const [inputList, setInputList] =  useState("");
  const[Items , setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () =>{  
    setItems((oldItems) =>{
      return [...oldItems, inputList];
      });
      setInputList('');
  };

  const deleteItem = (id) =>{
    console.log("deleted");

    setItems((oldItems) =>{
      
      return oldItems.filter((arrElement, index) => {
        return index !== id ;
      });

    });
      
  };


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <h1> ToDo List</h1>
          <br></br>
          <input
           type="text"
           placeholder="Add a Items" 
           onChange={itemEvent}
           value = {inputList}  >
          </input>
          <button onClick={listOfItems}> + </button>

          <ol>

            {/* {Items.map((enter_value) => {
              return <l1>{enter_value}</l1>
            })} */}

            {/* or */}

            {Items.map((enter_value, index) => {
              return(
                <ToDoLists
                  text= {enter_value} 
                  key = {index}
                  id = {index}
                  onSelect = {deleteItem}
                />
              ); 
            })}

          </ol>
        </div>

      </div>
    </>
  );
}

export default App;

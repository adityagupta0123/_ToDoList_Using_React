import React from 'react';

const ToDoLists = (props) => {

        return (
            <>
                <div className='todo_atyle'>
                   <l1>
                     <i 
                        className="fab fa-galactic-senate fi" 
                        aria-hidden="true" 
                        onClick={ () => {
                            props.onSelect(props.id);
                        }}>

                    </i>
                     {props.text}
                   </l1>
                </div>
            </>

        ) ;
   
};

export default ToDoLists;
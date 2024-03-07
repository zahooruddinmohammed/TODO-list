import React,{useState} from "react";

function TODOlist(){
const[tasks,settasks]= useState([""]);
const[newtasks,setnewtasks]= useState("");

function handlechange(event){
    setnewtasks(event.target.value);

}
function addtask(){
    if(newtasks.trim() !== ""){ 
        settasks(t =>[...t , newtasks]);
        setnewtasks("");  /*TO EMPTY THE BOX AFTER ENTERING*/

    }
    else{
        window.alert("task cant be empty")
    }
}

function deltask(index){
    const updatedtasks = tasks.filter(( _, i)   => i !== index);
    settasks(updatedtasks);
}
function moveup(index){
    if(index > 0){
        const updatestasks = [...tasks];
        [updatestasks[index] ,updatestasks[index -1]]=[updatestasks[index-1] ,updatestasks[index]];
        settasks(updatestasks);

    }
}
function movedown(index){
    if(index < tasks.length-1){
        const updatestasks = [...tasks];
        [updatestasks[index+1] ,updatestasks[index ]]=[updatestasks[index] ,updatestasks[index+1]];
        settasks(updatestasks);

    }
}



return(<> 
        <div className="to-do-list">
        <h1>TO-DO-LIST</h1>
        <div>
            <input 
                type="text" 
                placeholder="enter the task"
                value= {newtasks} 
                onChange={handlechange}  
                />
            <button className="add-button" onClick={addtask}>Add</button>
        </div>
            <ol>
                {tasks.map((tasks,index) => 
                    <li key={index}> 
                        <span className="text">{tasks}</span>
                        <button className="delete-button" onClick={() => deltask(index)}>Delete</button>
                        <button className="moveup-button" onClick={() =>moveup(index)}>Up</button>

                        <button className="movedown-button" onClick={() =>movedown(index)}>Down</button>

                    </li>)}
            </ol>
        </div>
</>);
}
export default TODOlist
import React from "react";
const AddNote = ({ saveNote}) => {


  const CharacterLimit = 200;
  const [length, setLenthy] = React.useState("");

  const handleSave = () => {
    if (length.trim().length > 0) {
      saveNote(length);
      // setLenthy("");
    }
  };
  const clearAll = () => {
    if (length.trim().length > 0) {
      setLenthy("");
    }
    
  };
  return (
 <div>
     <div className="single-note">
     
     <textarea
       maxLength={CharacterLimit}
       name="w3review"
       rows="6"
       cols="50 "
       value={length}
       onChange={(e) => {
         e.preventDefault();
         setLenthy(e.target.value);
       }}
       placeholder="type to add a note"></textarea>
     <div className="save-section">
       {/**date */} <p>{CharacterLimit - length.length}:remaining</p>
       <button  className="save-btn" onClick={handleSave}>
         Save
       </button>
     </div>
     <div><p style={{
       cursor:"pointer"
     }} onClick={()=> clearAll()}>clear all</p></div>
   

     
   </div>
 
 </div>
  
  );
};

export default AddNote;

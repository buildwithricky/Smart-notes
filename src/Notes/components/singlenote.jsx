import React from "react";
const SingleNote = ({ text, id, date, delItem ,settings}) => {
  
  return (
 
    <div className="single-note list" style={{
      backgroundColor:settings.background}}>
      <p>{text}</p>
      <div className="save-section">
        {/**date */} <p>date added:{date}</p>
        <button onClick={() => delItem(id)} className="save-btn">
          delete
        </button>
      </div>
    </div>
  );
};

export default SingleNote;

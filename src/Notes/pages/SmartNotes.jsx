/* eslint-disable no-lone-blocks */
import React from "react";
import SingleNote from "../components/singlenote";

const NoteList = ({ note, delItem ,settings}) => {
  return (
    <section className="notes-container" style={{
      color:settings.textColor
      
    }}>
      
      { note.length<1 ? <div>please add a smart note</div> :
          note.map((item) => {
        const { text, id, date } = item;
        return (
        <div key ={id}>
         
          <SingleNote
            text={text}
            id={id}
            date={date}
            delItem={delItem}
            key={id}
            settings={settings}
            
          />
        </div>
          
        );
      })}
    
    </section>
  );
};

export default NoteList;

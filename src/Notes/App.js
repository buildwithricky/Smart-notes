import React from "react";

import SingleNote from "./components/singlenote.jsx";
import AddNote from "./components/addnote.jsx";
import NoteList from "./pages/SmartNotes.jsx";

import { useEffect, useState } from "react";
import "./styles/index.css";
import Header from "./components/Header.jsx";
import { FiPlus } from "react-icons/fi";
import Modal from "./components/Modal.jsx";

const App = () => {
  let date = new Date();
  const [searchText, setSearchText] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userSettings, setUserSettings] = useState({
    textColor: "#fff",
    background: "#1c263b",
  });

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem("user-settings"));
    if (userSettings) {
      setUserSettings(settings);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-settings", JSON.stringify(userSettings));
    console.log(userSettings);
  }, [userSettings]);
  const visibleAdd = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    } else if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleSave = (saved) => {
    let savedNote = {
      id: Math.random(),
      text: saved,
      date: date.toLocaleDateString(),
    };

    const newNote = [...noteList, savedNote];
    setNoteList(newNote);
    setIsModalOpen(false);
  };
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNoteList(savedNotes); // saved notes in local storage
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(noteList));
  }, [noteList]);

  const handleDelete = (id) => {
    const newList = noteList.filter((note) => note.id !== id);
    setNoteList(newList);
  };

  return (
    <div className="cover" style={{ backgroundColor: "#0e121b" }}>
      <section className="main-container">
        <Header setSettings={setUserSettings} settings={userSettings} />
        <div className="search-bar">
          <input
            type="text"
            className="notes-search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search a note"
          />
        </div>
        <div className="plus-add" title="add a note">
          <FiPlus
            onClick={() => visibleAdd()}
            size={"29px"}
            className="plus-icon"></FiPlus>
        </div>
        <div>
          <NoteList
            note={noteList.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            delItem={handleDelete}
            setSettings={setUserSettings}
            settings={userSettings}
          />
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            modalData={<AddNote saveNote={handleSave} />}
          />
        </div>
      </section>
    </div>
  );
};

export default App;

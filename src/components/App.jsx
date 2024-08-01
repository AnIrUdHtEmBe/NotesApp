import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import CreateArea from "./CreateArea";
import { useState } from "react";

export default function App() {
    const[notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }
    console.log(notes);
    function deleteNote(id) {
        setNotes(prevNotes => (
             prevNotes.filter((noteItem, index)=> {
                return index !== id
            })
        ))
    }

    return(
        <div> 
            <Header/>
                <CreateArea onAdd={addNote} />
                {notes.map((noteItem, index) => (
                     <Notes
                        key = {index}
                        id = {index}
                        title = {noteItem.title}
                        content = {noteItem.content}
                        onDelete = {deleteNote}
                     />
                   
                ))} 
            
            <Footer/>
        </div> 
      
    )
  }

//   function usingTraditionalFunctionMap(noteItem) {
//     return (
//         <Notes
//             key = {noteItem.key}
//             title = {noteItem.title}
//             content = {noteItem.content}
//         />
//     )
//   }
// Use {note.map(usingTraditionalFunctionMap)} to call this above!
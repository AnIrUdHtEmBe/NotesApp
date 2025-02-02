import React, {useState} from "react"

export default function CreateArea(props) {
    const[note, setNote] = useState({
        title : "",
        content : ""
    }
    );
    function handleChange(event) {
        const{name , value } = event.target;
        setNote(prevNote => {
            return {...prevNote, 
                [name] : value
            };
        }
        );   
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title : "",
            content : ""
        }
        )
        event.preventDefault();
    }
    
    return (
        <div>
            <form >
                <input
                    name="title"
                    onChange = {handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea 
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="New Note" 
                    rows= "3"
                />
                <button 
                    type="submit"
                    onClick={submitNote}
                >
                    Add
                </button>
            </form>
        </div>
    )
}
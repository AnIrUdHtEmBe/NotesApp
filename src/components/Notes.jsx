import DeleteIcon from '@mui/icons-material/Delete';


export default function Notes(props){
function handleClick() {
    props.onDelete(props.id);
}

    return(
        <div className="parentNote">
            <div className="note">
            
                <h1 className="noteh">{props.title}</h1>
                <p className="notep">
                    {props.content}
                </p>
                <button onClick={handleClick}> 
                    <DeleteIcon/>
                </button>
        
            </div>  
        </div>
        
    );
}
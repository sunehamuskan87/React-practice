import React from 'react'
import { useSelector } from 'react-redux';
import {Eye, Pencil, Trash} from 'lucide-react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {deleteNote} from '../redux/noteSlice'
import { Link } from 'react-router'

const Notes = () => {
  const notesList = useSelector((state) => state.notebook.notes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" placeholder='Search'/>
      <h2>Notes</h2>
      {notesList.length > 0? (
        <div>
      {notesList.map((note,index)=>(
        <div key={`${note.id}-${index}`}>
          <h3>{note.title}</h3>

          <button onClick={()=>{
            navigate(`./${note.id}`)}}><Eye /></button>
            <Link to={`/?noteId=${note?.id}`}>
              <button><Pencil /></button>
            </Link>
          
          <button onClick={()=> dispatch(deleteNote(note))}><Trash /></button>
        </div>
      ))}
      </div>
      ) : (
        <p>No Notes Found</p>
      )}
      
    </div>
  )
}

export default Notes
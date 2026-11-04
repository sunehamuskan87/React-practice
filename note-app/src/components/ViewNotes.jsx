import React from 'react'
import { useParams } from 'react-router'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import {Copy} from 'lucide-react'


const NoteDetails = () => {
  const {id} = useParams();
  const notes = useSelector((state) => state.notebook.notes);
  const navigate = useNavigate();
  console.log(notes)
  const singleNote = notes.find((note) => note.id === id);
  

  function handleCopy(){
    navigator.clipboard.writeText(singleNote.content)
  }
  
  return (
    <>
      <div>Notes Details</div>
      <h2>{singleNote.title}</h2>
      <p>{singleNote.content}</p>
      <p>{singleNote.createdAt}</p>
      <button onClick={handleCopy}><Copy /></button>
      <button onClick={()=> navigate('/notes')}>Back</button>
    </>
    
  )
}

export default NoteDetails
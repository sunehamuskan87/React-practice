import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addNote} from '../redux/noteSlice'
import { useSearchParams } from 'react-router'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {editNote} from '../redux/noteSlice'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('noteId')
  const notes = useSelector((state) => state.notebook.notes);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');

  useEffect(()=>{
    const fetchNote = notes.find((note) => note.id === id)
    if(fetchNote){
      setTitle(fetchNote.title) 
      setContent(fetchNote.content)
    }
    else {
    setTitle('');
    setContent('');
  }
  },[notes, id])

  function createNote() {
    const note = {
      id: id || Date.now().toString(36),
      title, 
      content,
      createdAt: new Date().toISOString()
    }
    if(id){
      dispatch(editNote(note))
    }
    else{
      dispatch(addNote(note))
    }
    setTitle('');
    setContent('');
    setSearchParams({});
  }

  return (
    <div>
      <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      <textarea name="content" value={content} placeholder='Enter Content here...' onChange={(e)=>{
        setContent(e.target.value)
      }}></textarea>
      <button onClick={createNote}>{id ? "Update" : "Add Note"}</button>
    </div>
    
  )
}

export default Home
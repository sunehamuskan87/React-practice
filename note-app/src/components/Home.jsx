import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/noteSlice'
import { useSearchParams } from 'react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { editNote } from '../redux/noteSlice'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('noteId')
  const notes = useSelector((state) => state.notebook.notes);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNote = notes.find((note) => note.id === id)
    if (fetchNote) {
      setTitle(fetchNote.title)
      setContent(fetchNote.content)
    }
    else {
      setTitle('');
      setContent('');
    }
  }, [notes, id])

  function createNote() {
    const note = {
      id: id || Date.now().toString(36),
      title,
      content,
      createdAt: new Date().toISOString()
    }
    if (id) {
      dispatch(editNote(note))
    }
    else {
      dispatch(addNote(note))
    }
    setTitle('');
    setContent('');
    setSearchParams({});
  }

  return (
    <div className=''>

      <form action="" className='bg-olive-50 w-[50%] h-[50%] mx-auto my-20 p-6 border border-neutral-300 shadow-sm rounded-lg'>

        <label htmlFor="title" className='block text-gray-400 text-sm mb-1'>TITLE</label>
        <input id="title" type="text" placeholder='Give your note a title...' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} className='border border-neutral-300 block w-[100%] p-2 rounded-lg shadow-sm text-gray-500 outline-none focus:border-orange-500 focus:border-2'/>
        
        <textarea name="content" value={content} rows="8" cols="50" placeholder='Start writing...' onChange={(e) => {
          setContent(e.target.value)
        }} className='border border-neutral-300 block w-[100%] p-2 rounded-lg shadow-sm text-gray-500 mt-4 outline-none focus:border-orange-500 focus:border-2'></textarea>

        <div className='flex justify-end'>
          <button onClick={createNote} className='bg-orange-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer'>{id ? "Update" : "Add Note"}</button>
        </div>
        
      </form>
    </div>

  )
}

export default Home
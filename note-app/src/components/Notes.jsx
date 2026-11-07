import React from 'react'
import { useSelector } from 'react-redux';
import {Eye, Pencil, Trash, Search} from 'lucide-react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {deleteNote} from '../redux/noteSlice'
import { Link } from 'react-router'

const Notes = () => {
  const notesList = useSelector((state) => state.notebook.notes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='p-10'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-1'>
          <h2 className='font-serif font-semibold text-3xl'>My Notes</h2>
          <p className='text-gray-500'>0 notes</p>
        </div>
        <div className='relative'>
          <Search className='absolute left-3 top-5 -translate-y-1/2 size-4 text-gray-400'/>
          <input type="text" placeholder='Search your notes...' className='border border-gray-300 mr-4 pl-8 pr-12 py-2 rounded-lg shadow-sm text-gray-500 outline-none focus:border-orange-500 focus:border-2'/>
        </div>
      </div>

      {notesList.length > 0? (
      <div className='grid grid-cols-3 gap-8 mt-4 px-8'>
      {notesList.map((note,index)=>(
        <div key={`${note.id}-${index}`} className='border p-3 border border-neutral-300 shadow-sm rounded-lg bg-olive-50'>
          <h3 className='text-xl font-bold mb-2'>{note.title}</h3>
          <p className='text-gray-500 line-clamp-3'>{note.content}</p>
          <p className='text-gray-400 mt-2 text-sm'>Created at: {note.createdAt}</p>

          <div className='mt-4 border-t  border-gray-200 flex justify-around'>
            <button onClick={()=>{
            navigate(`./${note.id}`)}} className='border-none mt-1 p-2 rounded-lg hover:text-orange-500 cursor-pointer text-sm'><Eye className='inline size-4'/> View</button>

            <Link to={`/?noteId=${note?.id}`}>
              <button className='border-none mt-1 p-2 rounded-lg hover:text-orange-500 cursor-pointer text-sm'><Pencil className='inline size-4'/> Edit</button>
            </Link>

            <button onClick={()=> dispatch(deleteNote(note))} className='border-none mt-1 p-2 rounded-lg hover:text-orange-500 cursor-pointer text-sm'><Trash className='inline size-4'/> Delete</button>
          </div>  
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
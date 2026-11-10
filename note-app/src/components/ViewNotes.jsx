import React from 'react'
import { Link, useParams } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import {Copy, MoveLeft, Pencil, Trash, Calendar} from 'lucide-react'
import { deleteNote } from '../redux/noteSlice'


const NoteDetails = () => {
  const {id} = useParams();
  const notes = useSelector((state) => state.notebook.notes);
  const navigate = useNavigate();
  console.log(notes)
  const singleNote = notes.find((note) => note.id === id);
  const dispatch = useDispatch();

  function handleCopy(){
    navigator.clipboard.writeText(singleNote.content)
  }
  
  return (
    <div className='max-w-[65%] mx-auto my-8 max-lg:max-w-[80%]'>
      <div className='relative text-orange-500 text-sm'>
        <button onClick={()=> navigate('/notes')} className='pl-6'><MoveLeft className='absolute left-0 size-5' /> Back to notes</button>
      </div>
      
      <div className='bg-olive-50 mt-4 py-4 px-8 border border-neutral-300 shadow-md border-none rounded-lg max-lg:px-4'>
        <div className='flex justify-end gap-2 max-md:mb-4'>
          <button onClick={handleCopy} className='border border-gray-400 text-gray-500 cursor-pointer text-sm mt-1 px-4 py-2 rounded-lg hover:text-white hover:bg-orange-500 hover:border-none hover:font-semibold max-md:px-2 max-md:p-1 max-md:m-0'><Copy className='inline size-4'/> Copy</button>

          <Link to={`/?noteId=${singleNote?.id}`}>
            <button className='border border-gray-400 text-gray-500 cursor-pointer text-sm mt-1 px-4 py-2 rounded-lg hover:text-white hover:bg-orange-500 hover:border-none hover:font-semibold max-md:px-2 max-md:p-1 max-md:m-0'><Pencil className='inline size-4'/> Edit</button>
          </Link>

          <button onClick={()=> dispatch(deleteNote(singleNote))} className='border border-gray-400 text-gray-500 cursor-pointer text-sm mt-1 px-4 py-2 rounded-lg hover:text-white hover:bg-orange-500 hover:border-none hover:font-semibold max-md:px-2 max-md:p-1 max-md:m-0'><Trash className='inline size-4'/> Delete</button>
        </div>
          
        <h2 className='font-serif font-medium text-2xl mb-2 max-sm:text-xl'>{singleNote.title}</h2>
        <div className='relative'>
          <p className='mb-2 border-b-1 border-gray-300 pb-3 text-sm pl-6 text-gray-500'><Calendar className='absolute left-0 size-5'/>{singleNote.createdAt}</p>
        </div>
      
        <p className='mt-3 text-gray-500'>{singleNote.content}</p>
      </div>
      
      
    </div>
    
  )
}

export default NoteDetails
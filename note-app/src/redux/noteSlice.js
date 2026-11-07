import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const noteSlice = createSlice({
    name : 'notebook',
    initialState: {
        notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload);
            localStorage.setItem("notes", JSON.stringify(state.notes))
            toast.success("Note Added successfully", {position: 'top-center', autoClose: 3000, theme: 'light'})
        },
        editNote: (state, action) => {
            const note = action.payload;
            const index = state.notes.findIndex((item) => item.id === note.id)
            state.notes[index] = note
            localStorage.setItem("notes", JSON.stringify(state.notes))
            toast.success("Note updated successfully", {position: 'top-center', autoClose: 3000, theme: 'light'})
        },
        deleteNote: (state, action) => {
            const note = action.payload;
            state.notes = state.notes.filter((item) => item.id !== note.id)
            localStorage.setItem("notes", JSON.stringify(state.notes))
            toast.success("Note deleted successfully", {position: 'top-center', autoClose: 3000, theme: 'light'})
        }
        
    }
})

export const {addNote, editNote, deleteNote} = noteSlice.actions;

export default noteSlice.reducer;
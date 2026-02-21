import { useReducer } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { notesReducer } from '../../reducers/notesReducer';
import NotesCard from '../../components/NotesCard';

const Home = () => {

    const initialState = {
        title : '',
        text : '',
        notes : [],
        pinnedNotes : [],
        unpinnedNotes : []
    }

    const [{title, text, notes}, notesDispatch] = useReducer(notesReducer, initialState);

    const handleTitleOnChange = (e) => {
        notesDispatch({
            type : "TITLE",
            payload : e.target.value
        })
    }

    const handleTextOnChange = (e) => {
        notesDispatch({
            type : "TEXT",
            payload : e.target.value
        })
    }

    const handleAddButtonOnClick = () => {
        notesDispatch({
            type : "ADD_NOTE"
        })
        notesDispatch({
            type : "CLEAR_INPUT"
        })
    }

    const isBtnActive = title.length <= 0 ? 'text-gray-400' : '';

    console.log(notes)

    return (
        <>
            <Navbar />
            <main className='flex gap-3'>
                <Sidebar />
                <div className='mt-3'>
                    <div className='flex flex-col w-60 border-gray-400 relative border gap-2 rounded'>
                        <input type="text" placeholder='Enter Title'  value={title} onChange={handleTitleOnChange} className='text-sm border-b border-gray-400 p-2 outline-0'/>
                        <textarea name="" rows={3} placeholder='Enter Notes' value={text} onChange={handleTextOnChange} className='text-sm outline-0 p-2'></textarea>
                        <button className={`absolute bottom-0 right-0 cursor-pointer ${isBtnActive}`} onClick={handleAddButtonOnClick} disabled={title.length <= 0}>
                            <span className='material-symbols-outlined'>add</span>
                        </button>
                    </div>

                    <div className=''>
                        <h2 className='my-2 text-xl font-medium'>Other Notes</h2>
                        <div className='flex gap-2'>
                            {
                                notes?.length ? notes.map( (note) => {
                                    return(
                                        <NotesCard note={note}/>
                                    )
                                }) : ''
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;
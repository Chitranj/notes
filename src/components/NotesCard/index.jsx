const NotesCard = ({note}) => {
    return (
        <div className='w-50 border border-gray-400 p-2 gap-2 rounded' 
            key={note.id} >
            <div className='flex border-b border-gray-400'>
                <div className='text-sm font-medium'>
                    {note.title}
                </div>
                <div className='text-sm font-medium ml-auto text-gray-400'><span className="material-symbols-outlined">keep</span></div>
            </div>
            <div className='text-xs p-1'>
                {note.text}
                <div className='flex text-xs'>
                    <span className="material-symbols-outlined ml-auto cursor-pointer text-xs">archive</span>
                    <span className="material-symbols-outlined cursor-pointer text-xs">delete</span>
                </div>
            </div>
        </div>
    )
}

export default NotesCard

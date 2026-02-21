import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside className='flex flex-col gap-3 border-gray-100 border-r-2 w-37.5 h-screen'>
                <Link to="/"><span class="material-symbols-outlined">
home
</span>Home</Link>
                <Link to="/archive">Archive</Link>
                <Link to="/important">Important</Link>
                <Link to="/bin">Bin</Link>
            </aside>
        </>
    )
}

export default Sidebar
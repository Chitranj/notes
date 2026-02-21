import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const getStyles = ({isActive}) => {
        const commonCss = `align-center gap-1 rounded-r-full text-sm  items-center flex px-2 py-1  `;
        return isActive 
            ? `bg-orange-600 border-orange-700 border text-gray-100 ${commonCss}`
            : `hover:bg-orange-600 hover:text-gray-100 ${commonCss}`;
    }

    return (
        <>
            <aside className='flex flex-col gap-3 border-gray-100 border-r-2 w-37.5 h-screen p-3'>
                <NavLink to="/" className={getStyles}>
                    <span className="material-symbols-outlined">home</span>Home
                </NavLink>
                <NavLink to="/archive" className={getStyles}>
                    <span className="material-symbols-outlined">archive</span>Archive
                </NavLink>
                <NavLink to="/important" className={getStyles}>
                    <span className="material-symbols-outlined">label_important</span>Important
                </NavLink>
                <NavLink to="/bin" className={getStyles}>
                    <span className="material-symbols-outlined">delete</span>Bin
                </NavLink>
            </aside>
        </>
    )
}

export default Sidebar
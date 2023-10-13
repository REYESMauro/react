import { NavLink } from "react-router-dom";

const Navbar = () => {

const activeStyle = ' underline underline-offset-4'

return (
    <nav className=" bg-black flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg gap-3">
            <NavLink to='/'
                className={({ isActive }) => isActive ? activeStyle : undefined}>
                catalogo
            </NavLink>
            </li>
            <li>
                <NavLink to='/'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    inicio
                </NavLink>
            </li>
            <li>
                <NavLink to='/contacto'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    contacto
                </NavLink>
            </li>
            <li>
                <NavLink to='/*'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    Not Fond      
                </NavLink>
            </li>
        </ul>
    </nav>
)
}

export default Navbar
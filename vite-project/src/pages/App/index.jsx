import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import Navbar from '../../Componentes/Navbar'
//import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/home', element: <Home/> },
        { path: '/contacto', element: <Contact/> },
        { path: '/*', element: <NotFound/> },
    ])
    return routes
}

const App = () => {
    return (
        <BrowserRouter> 
            <Navbar /> <br />
            <AppRoutes />
        </BrowserRouter>
    )
}
export default App
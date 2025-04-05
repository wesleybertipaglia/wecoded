import { Routes, Route } from 'react-router'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={"Home page"} />
            <Route path='*' element={"Page Not Found"} />
        </Routes>
    )
}

export default AppRoutes
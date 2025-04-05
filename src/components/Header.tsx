import Container from './Container'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="sticky-top bg-white">
            <Container classList={"py-3 border-bottom"}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-4">
                        <Link to="/" className="nav-item">WECODED 2025</Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
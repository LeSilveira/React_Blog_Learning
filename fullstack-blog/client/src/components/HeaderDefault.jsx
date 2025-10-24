import { Link } from 'react-router-dom';

function HeaderDefault() {
    return (
        <header className='headerDefault'>
            <Link to="/posts" style={{margin: '10px'}}>Posts</Link>
            <Link to="/" style={{margin: '10px'}}>Home</Link>
            <Link to="/vite" style={{margin: '10px'}}>Vite</Link>
        </header>
    )
}

export default HeaderDefault;
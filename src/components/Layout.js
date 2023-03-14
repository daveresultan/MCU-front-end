import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/newCharacter'>Add New Character</Link>
                    </li>
                    <li>
                        <Link to='/removeCharacter'>Remove a Character</Link>
                    </li>
                    <li>
                        <Link to='/getOneCharacter'>Get One Character</Link>
                    </li>
                    <li>
                        <Link to='/updateCharacter'>Update a Character</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;
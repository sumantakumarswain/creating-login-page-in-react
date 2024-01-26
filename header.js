import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <div id="header">
                <Link to="/" className='link'>HOME</Link>
                <Link  to="/about" className='link'>ABOUT</Link>
                <Link to="/contact" className='link'>CONTACT</Link>
                <button id="login-btn" onClick={ props.renderBtn }>{props.loginText}</button>
            </div>
        </>
    )
}

export default Header
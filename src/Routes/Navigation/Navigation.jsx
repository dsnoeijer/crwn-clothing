import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';


const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>
                        <Logo className="logo" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/signin'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;
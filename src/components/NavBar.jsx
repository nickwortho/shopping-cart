import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <header>
            <nav className={styles.navBar}>
                <div>
                    <button>
                        <Link to='/'>Home</Link>
                    </button>
                    <button>
                        <Link to='/shop'>Shop</Link>
                    </button>
                </div>
                <div>
                    <h1>Millard's Mallards</h1>
                </div>
                <div>
                    <button>
                        <img src={null} alt='#' />
                    </button>
                    <button>
                        <Link to='/cart'>Cart</Link>
                    </button>
                </div>

            </nav >
        </header>
    );
}

export default NavBar;
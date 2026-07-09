import { Link } from 'react-router';
import styles from '../styles/NavBar.module.css';
import Logo from '../assets/logos/cart-outline.svg?react'

const NavBar = ({ cartQty = 0 }) => {
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
                    <div className={styles.cartQty}>
                        {cartQty < 10
                            ? cartQty
                            : '9+'}
                    </div>
                    <Logo className={styles.logo} />
                    <button>
                        <Link to='/cart'>Cart</Link>
                    </button>
                </div>
            </nav >
        </header>
    );
}

export default NavBar;
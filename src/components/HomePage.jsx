import { useOutletContext } from 'react-router';
import NavBar from './NavBar';

const HomePage = () => {
    const [products, addToCart, cartProducts, editCartQty] = useOutletContext();
    return (
        <>
            <main>
                <h2>Millard's Mallards</h2>

            </main>
        </>
    );
}

export default HomePage;
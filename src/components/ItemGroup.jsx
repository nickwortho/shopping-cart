import styles from '../styles/ItemGroup.module.css';
import Card from './Card';
import ShopCard from './ShopCard';

const ItemGroup = ({ children, style = styles.itemGroup, name = 'blank category' }) => {
    return (
        <>
            <hr />
            <h3>{name}</h3>
            <div className={style}>
                {children}
            </div>
        </>
    );
}

export default ItemGroup;
import styles from '../styles/ItemGroup.module.css';
import Card from './Card';

const ItemGroup = ({ name = 'blank category' }) => {
    return (
        <>
            <hr />
            <h3>{name}</h3>
            <div className={styles.itemGroup}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default ItemGroup;
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <p>Logos sourced from&nbsp;
                    <a href='https://github.com/google/material-design-icons'>Material Design icons by Google</a>
                </p>
                <p>Copyright &copy; Nick Worthington 2026</p>
                <p>Products sourced from&nbsp;
                    <a href='https://fakestoreapi.com/'>FakeStore API</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div></div>
                <p>Copyright &copy; Nick Worthington 2026</p>
                <p>Products supplied by&nbsp;
                    <a href='https://fakestoreapi.com/'>FakeStore API</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;
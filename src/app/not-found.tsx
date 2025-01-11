import styles from './styles/not-found.module.css';
export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.NotFoundCard}>
                <h1 className={styles.head404}>404</h1>
                <p className={styles.para}>Such Page was never created!</p>
                <button className={styles.others}>Wanna play Game?</button>
            </div>
        </div>
    );
};

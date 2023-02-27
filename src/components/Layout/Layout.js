import Header from '../Header/Header';
import styles from "./Layout.module.scss"; // Component styles

export default function Layout({ children }) {
    return (
        <div className={`${styles.Layout}`}>
            <Header />
            <main className={``}>
              {children}
            </main>
        </div>
    )
}

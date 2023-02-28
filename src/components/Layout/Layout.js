import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import styles from "./Layout.module.scss"; // Component styles



export default function Layout({ children }) {
    return (
        <div className={`${styles.Layout}`}>
            <Header />
            <main className={`${styles.MainSection}`}>
              <Sidebar />
              {children}
            </main>
        </div>
    )
}

import styles from './Header.module.css'

import igniteLogo from '../assets/ignitelogo.svg';

console.log(igniteLogo);

export function Header() {
    return (
        <header className={styles.Header}>
            <img src={igniteLogo} alt='Logotipo do Ignite' />
        </header>
    )
}

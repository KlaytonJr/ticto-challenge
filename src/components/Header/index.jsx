import styles from '../../styles/Header.module.scss'
import Button from '../Button'

import Logo from '@/assets/svg/logo.svg'

export default function Header({ openModal }) {
  return (
    <>
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <img src={Logo.src} alt='Ticto logo' />
                <Button
                    onClick={openModal}
                    label="NOVA TRANSAÇÃO"
                    style={{ background: '#401a9b', color: '#B9B9B9', width: "245px", height: "53px", border: "none" }}
                />
            </div>
        </div>
    </>
  )
}

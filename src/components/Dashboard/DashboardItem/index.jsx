import styles from '../../../styles/DashboardItem.module.scss'
import { Roboto, Poppins } from 'next/font/google'
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi"

const roboto = Roboto({ subsets: ['latin'], weight: "500" })
const poppins = Poppins({ subsets: ['latin'], weight: "500" })

export default function DashboardItem({ title, value, icon, bg, color }) {
  return (
    <>
        <div className={styles.item} style={{ backgroundColor: bg }}>
            <div className={`${styles.itemHeader} ${roboto.className}`}>
                <h3 style={{ color: color }}>{title}</h3>
                {icon === "up" && <FiArrowUpRight color='#DB3766' />}
                {icon === "down" && <FiArrowDownLeft color='#06D6A2' />}
            </div>
            <h1 className={poppins.className}  style={{ color: color }}>{value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h1>
        </div>
    </>
  )
}

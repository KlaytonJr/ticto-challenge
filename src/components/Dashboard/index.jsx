import styles from '../../styles/Dashboard.module.scss'
import DashboardItem from './DashboardItem'

export default function Dashboard({ inValue, outValue, totalValue }) {
  return (
    <>
        <div className={styles.dashboard}>
            <DashboardItem title="Entradas" icon="down" value={inValue} />
            <DashboardItem title="Saídas" icon="up" value={outValue} />
            <DashboardItem title="Saldo Total" value={totalValue} bg="#06d6a2" color="#FFF" />
        </div>
    </>
  )
}

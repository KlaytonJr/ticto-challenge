import styles from '../../styles/Table.module.scss'
import { Roboto } from 'next/font/google'
import TableItem from './TableItem'

const roboto = Roboto({ subsets: ['latin'], weight: "400" })

export default function Table({ data }) {
    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerTable}>
                        <th className={`${roboto.className}`}>Descrição</th>
                        <th className={`${roboto.className}`}>Valor</th>
                        <th className={`${roboto.className}`}>Categoria</th>
                        <th className={`${roboto.className}`}>Data</th>
                        <th className={`${roboto.className} ${styles.icon}`}></th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => {
                        return (<TableItem key={item.id} data={item} />)
                    })}
                </tbody>
            </table>
        </>
    )
}

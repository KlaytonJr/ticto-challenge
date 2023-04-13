import { FiTrash } from 'react-icons/fi';
import styles from '../../../styles/TableItem.module.scss'
import { Roboto } from 'next/font/google'
import firebase from '@/services/firebaseConnection'
import { useEffect, useState } from 'react';

const roboto = Roboto({ subsets: ['latin'], weight: "400" })

export default function TableItem({ data }) {
    const [date, setDate] = useState("");

    function currencyColor() {
        return data.type === "in" ? "#06D6A2" : "#E23161";
    }

    function deleteItem() {
        firebase.database().ref('registers').child(data.id).remove()
    }

    function formatDate() {
        let formatedDate = new Date(data.date);
        
        const dia = formatedDate.getDate().toString().padStart(2, '0');
        const mes = (formatedDate.getMonth() + 1).toString().padStart(2, '0');
        const ano = formatedDate.getFullYear().toString();
        const hora = formatedDate.getHours().toString().padStart(2, '0');
        const minutos = formatedDate.getMinutes().toString().padStart(2, '0');
        
        setDate(`${dia}/${mes}/${ano} às ${hora}h${minutos}`);
    }

    useEffect(() => formatDate());

    return (
        <tr className={styles.item}>
            <td className={`${roboto.className}`}>{data.description}</td>
            <td className={`${roboto.className}`} style={{ color: currencyColor(), fontWeight: "bold" }}>{parseFloat(data.value).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
            <td className={`${roboto.className}`}>{data.category}</td>
            <td className={`${roboto.className}`}>{date}</td>
            <td className={styles.icon}><FiTrash color='#E23161' onClick={deleteItem} /></td>
        </tr>
    )
}

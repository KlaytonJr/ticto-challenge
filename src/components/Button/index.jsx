import styles from '../../styles/Button.module.scss'
import { Roboto } from 'next/font/google'
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi"

const roboto = Roboto({ subsets: ['latin'], weight: "500" })

export default function Button({ label, onClick, icon, style, active }) {
  
    function verify () {
        const activeStyle = (active ? 
            { border: `2px solid #06D59F` } : 
            { border: "1px solid #D9D9D9" })

        const styles = Object.assign(activeStyle, style);
        
        return styles;
    }

    function selectIcon () {
        if (icon === "arrow-down") return (<FiArrowDownCircle color='#E23161' />);
        if (icon === "arrow-up") return (<FiArrowUpCircle color='#06D59F' />);
        return null;
    }
  
  return (
    <>
        <button 
            className={`${styles.button} ${roboto.className}`} 
            onClick={onClick}
            style={verify()}
        >{ selectIcon() }{ `${label}` }</button>
    </>
  )
}

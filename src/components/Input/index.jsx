import styles from '../../styles/Input.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Input({ value, onChange, label, type, placeholder, bgColor, color, style }) {
  return (
    <div style={Object.assign({ width: "100%" }, style)}>
        <input 
            value={value}
            placeholder={placeholder}
            type={type || "text"}
            className={styles.inputPrimary} 
            onChange={event => onChange(event.target.value)}
        />
    </div>
  )
}

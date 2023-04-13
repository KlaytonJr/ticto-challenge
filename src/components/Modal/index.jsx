import styles from '../../styles/Modal.module.scss'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: "700" })

import Input from '../Input'
import Button from '../Button'

import firebase from 'firebase'

export default function Modal({ closeModal }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");

    async function submit() {
        if(name === '' || price === '' || type === '' || category === '' ) return;

        const register = firebase.database().ref('registers');
        const key = register.push().key;

        register.child(key).set({
            description: name,
            value: price.replace(",", "."),
            type: type,
            category: category,
            date: new Date().toISOString()
        })

        setName("");
        setPrice("");
        setType("");
        setCategory("");

        closeModal();
    }

    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.modal}>
                <FiX color='#4E5555' onClick={closeModal} />
                <h3 className={roboto.className}>Cadastrar Transação</h3>
                <Input 
                    placeholder="Nome"
                    value={name}
                    onChange={setName} 
                />
                <Input 
                    placeholder="Preço"
                    value={price}
                    onChange={setPrice} 
                />
                <div className={styles.buttonsContainer}>
                    <Button
                        icon="arrow-up"
                        label="Entrada"
                        style={{ marginRight: '7.5px' }}
                        onClick={() => {
                            console.log("set in");
                            setType("in")
                            console.log(type);
                        }}
                        active={type === "in"}
                    />
                    <Button
                        icon="arrow-down"
                        label="Saída"
                        style={{ marginLeft: '7.5px' }}
                        onClick={() => setType("out")}
                        active={type === "out"}
                    />
                </div>
                <Input 
                    placeholder="Categoria"
                    value={category}
                    onChange={setCategory} 
                />
                <Button
                    label="CADASTRAR"
                    style={{ marginTop: '13px', background: '#401a9b', color: '#FFF' }}
                    onClick={submit}
                />
            </div>
        </>
    )
}

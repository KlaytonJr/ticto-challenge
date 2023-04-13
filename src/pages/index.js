import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

import Modal from '@/components/Modal'
import Header from '@/components/Header'

export default function Home() {
    const [modalStatus, setModalStatus] = useState(false);

    return (
        <>
            <Head>
                <title>Ticto Challenge</title>
                <meta name="description" content="Desafio desenvolvedor front end pleno Ticto" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header openModal={() => setModalStatus(true)} />
            
            <main className={styles.main}>
                {(modalStatus && <Modal closeModal={() => setModalStatus(false)} />)}
            </main>
        </>
    )
}
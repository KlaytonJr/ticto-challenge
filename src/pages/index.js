import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

import Modal from '@/components/Modal'

export default function Home() {
    const [modalStatus, setModalStatus] = useState(true);

    return (
        <>
            <Head>
                <title>Ticto Challenge</title>
                <meta name="description" content="Desafio desenvolvedor front end pleno Ticto" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                {(modalStatus && <Modal closeModal={() => setModalStatus(false)} />)}
            </main>
        </>
    )
}
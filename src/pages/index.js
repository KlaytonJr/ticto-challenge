import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import firebase from '@/services/firebaseConnection'

import Modal from '@/components/Modal'
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'
import Table from '@/components/Table'

export default function Home() {
    const [data, setData] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);

    const [values, setValues] = useState({
        inValue: 0,
        outValue: 0,
        totalValue: 0
    });

    useEffect(() => {
        function getData() {
            if(!data) return;

            firebase.database().ref('registers').once('value', (snapshot) => {
                setData([]);

                snapshot?.forEach((childItem) => {
                    let data = {
                        id: childItem.key,
                        description: childItem.val().description,
                        value: childItem.val().value,
                        category: childItem.val().category,
                        date: childItem.val().date,
                        type: childItem.val().type
                    }
                    setData(oldTasks => [...oldTasks, data]);
                })
            })
                .then(() => {
                    let inValue = 0;
                    let outValue = 0;
                    let totalValue = 0;

                    data.forEach((item) => {
                        if(item.type === "in") inValue += +item.value;
                        if(item.type === "out") outValue += +item.value;
                        totalValue = inValue - outValue;
                    })

                    setValues({
                        inValue: inValue,
                        outValue: outValue,
                        totalValue: totalValue
                    })
                })
        }

        getData();
    }, [data]);

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
                <Dashboard
                    inValue={values.inValue}
                    outValue={values.outValue}
                    totalValue={values.totalValue}
                />

                <Table data={data} />

                {(modalStatus && <Modal closeModal={() => setModalStatus(false)} />)}
            </main>
        </>
    )
}
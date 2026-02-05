import React, { useState, useEffect } from 'react'
import styles from './_styles.module.scss';

const ApiComp = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const getUsers = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
            setError("");
        } catch (error:any) {
            console.log('error: ', error.message);
            setError(error.message);
            setUsers([]);
        } finally {
            setIsLoading(false);
        }

    }
    useEffect(() => {
        getUsers();
        return () => { }

    }, [])

    return (
        <div className={styles.userContainer}>
            <h2>User Details</h2>
            {error && <p> Something went wrong!!</p>}
            {isLoading && <p>Loading...</p>}
            <ul className={styles.listContainer}>
                {
                    users.length > 0 && users.map((user, index) => {
                        const { name, email, username, address: { city }, phone } = user;
                        return (
                            <li key={name+index} className={styles.list}>
                                <div>
                                    <p className={styles.name}>{name}</p>
                                    <p className={styles.username}>(@{username})</p>
                                    <p>{email} </p>
                                    <div className={styles.details}>
                                        <p>{phone}</p>
                                        <p>{city}</p>
                                    </div>
                                </div>

                            </li>)
                    })
                }
            </ul>


        </div>
    )
}

export default ApiComp
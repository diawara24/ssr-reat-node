import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const List = () => {
    const [taches, setTaches] = useState([]);

    useEffect(() => {
        async function getTaches() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                console.log(response);
                setTaches(response.data);
            } catch (error) {
                console.log('Error : ', error);
            }
        }

        getTaches();
    }, [])


    return (
        <>
            {
                <Table responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            taches.map((tache, index) => (
                                <tr key={index}>
                                    <td >{tache.id}</td>
                                    <td >{tache.title}</td>
                                    <td >{tache.completed}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
            }
        </>
    )
}

export default List
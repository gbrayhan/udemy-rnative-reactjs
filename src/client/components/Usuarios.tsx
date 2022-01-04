import React, {useEffect, useRef, useState} from 'react';
import {reqResInApi} from "../api/reqResIn";
import {DataUser, ListUsers} from "../interfaces/reqRespIn";

const Users = () => {
    const [users, setUsers] = useState<DataUser[]>([]);
    const [pagination, setPagination] = useState({isLast: true, isFirst: true, lastPage: 1});
    const pageRef = useRef(1)

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = () => {
        reqResInApi.get<ListUsers>("/users", {
            params: {
                page: pageRef.current,
            }
        }).then(response => {
            setUsers(response.data.data)
            setPagination({
                ...pagination,
                isLast: response.data.total_pages === response.data.page,
                isFirst: response.data.page === 1
            })


        }).catch(error => {
            console.log(error)
        })
    }


    const renderItem = (user: DataUser) => {
        return (
            <tr key={user.id.toString()}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
            </tr>
        )
    }
    return (
        <div>
            <h1>List of users</h1>
            <table>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => renderItem(user))
                }
                </tbody>

            </table>
            {
                !pagination.isFirst &&
                <button onClick={() => {
                    pageRef.current--;
                    loadUsers()
                }}>
                    Prev Page
                </button>
            }

            {

                !pagination.isLast &&
                <button onClick={() => {
                    pageRef.current++;
                    loadUsers()
                }}>
                    Next Page
                </button>
            }


        </div>
    );
};

export default Users;

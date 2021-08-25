import React, { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    let number = users.length;

    const handlerDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
    };

    const renderPhrase = (number) => {
        const phrase = ['человек тусанет', 'человека тусанут', 'человек тусанут']

        return phrase[(number % 10 === 1 && number % 100 !== 11) ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2]
    };

    const usersCount = () => {
        return number === 0 ? "Никто с тобой не тусанет" : `${number} ${renderPhrase(number)} с тобой сегодня`;
    };

    const getUsersCountClasses = () => {
        let classes = "badge bg-";
        classes += number === 0 ? "danger" : "primary"; 

        return classes;
    }
    
    return (
        <>
            <h3><span className={getUsersCountClasses()}>{usersCount()}</span></h3>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.profession.name}</td>
                            <td>{user.qualities.map((quality) => (
                                    <span
                                        key={quality._id}
                                        className={"badge m-1 bg-" + quality.color}>{quality.name}
                                    </span>
                                ))}
                            </td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}</td>
                            <td>
                                <button
                                    onClick={() => handlerDelete(user._id)}
                                    type="button"
                                    className="btn btn-danger">
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
 
export default Users;

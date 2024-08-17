import Link from 'next/link'
import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage  = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
  
  
    return (
        <>
        <Link href="/" className='text-xs'>Home</Link>
        <h1 className='text-2xl'>Users</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)}

            </tbody>
        </table>
    </>

  )
}

export default UsersPage
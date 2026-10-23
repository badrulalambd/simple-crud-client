import UsersCard from '@/components/UsersCard';
import React from 'react';

const UsersPage = async () => {

    const res = await fetch(`http://localhost:5000/users`);
    const usersData = await res.json();

    return (
        <div className='container max-w-7xl mx-auto p-20'>
            <h2 className='text-lg md:text-3xl font-bold mb-5'>Number of users: {usersData.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    usersData.map(user => <UsersCard
                        key={user._id}
                        user={user}
                    />)
                }
            </div>
        </div>
    );
};

export default UsersPage;
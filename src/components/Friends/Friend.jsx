import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendT from '../FriendT/FriendT';

const Friend = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h3>These are my friends : {friends.length}</h3>
            <div>
                {
                    friends.map(friend => <FriendT
                     key={friend.id}
                     friend={friend}
                    ></FriendT>)
                }
            </div>
        </div>
    );
};

export default Friend;
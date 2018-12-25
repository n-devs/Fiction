import React from 'react'
import Dexie from 'dexie'

const dbClient = new Dexie("user");

dbClient.version(1).stores({
    user: "id,displayName,email,phoneNumber,photoURL,providerId,uid",
});

export function dbUser (user) {
    // console.log(user);
    
        dbClient.user.put({
            id: 'log_on',
            displayName: `${user.displayName}`,
            email: `${user.email}`,
            phoneNumber: `${user.phoneNumber}`,
            photoURL: `${user.photoURL}`,
            providerId: `${user.providerId}`,
            uid: `${user.uid}`
        })
    }

dbClient.open();
export default dbClient
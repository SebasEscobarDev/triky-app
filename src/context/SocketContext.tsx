import React, { createContext, useState, useEffect } from 'react';
import socket from '../socket';

export const SocketContext = createContext();

export const SocketProvider = ({children}:any) => {

  const [usersOn, setUsersOn] = useState([]);
  useEffect(()=>{
		socket.on('newUserResponse', (data:any) => setUsersOn(data));

		return () => {
      socket.off('newUserResponse');
    };
	}, []);

  return (
    <SocketContext.Provider value={{
      usersOn,
      setUsersOn,
    }}>
      {children}
    </SocketContext.Provider>
  );
};

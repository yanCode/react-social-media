import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [currentUser]);

  const login = () => {
    debugger
    setCurrentUser({id: 1, name: 'JTs Cos', profilePic: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'})
  }
  return <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>

}
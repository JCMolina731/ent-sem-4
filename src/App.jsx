/* eslint-disable no-unused-vars */
import {  useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import UserCard from './assets/components/UserCard';
import FormUser from './assets/components/FormUser';

function App(){
  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const url = "https://users-crud.academlo.tech/";
  const [users, getUsers, createtUser, deleteUser, updateUser] = useCrud(url);
  useEffect(()=> {
    getUsers('/users/');
  }, []);

  const handleOpen = () =>{
    setIsOpen(true);
  }

  return(
    <div>
      <div className='app_container'>
      <h1 className='app_title'>Usuarios</h1>
      <button onClick={handleOpen} className='app_button'><ion-icon name="add-outline"></ion-icon> Crear Nuevo Usuario</button>
      </div>
      <div className='app_cards'>
      <FormUser
        createUser={createtUser}
        editUser= {editUser}
        updateUser={updateUser}
        setEditUser= {setEditUser}
        isOpen={isOpen}
        setIsOpen = {setIsOpen}
      />


        {
            users?.map(user => (            
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setEditUser={setEditUser}
              setIsOpen = {setIsOpen}
            />
            
            ))
        }
        
        </div>
    </div>
  )
}


export default App

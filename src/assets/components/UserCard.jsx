/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setEditUser, setIsOpen}) => {
  //console.log(user)
  const handleEdit = () =>{
    setEditUser(user);
    setIsOpen(true);
  }
  const handleDelete = () =>{
    deleteUser('/users',user.id);
    alert('Usuario Eliminado');
  }
  return (
    <article className='card' >

          <h3 className='card_title'>{user.first_name} {user.last_name}</h3>
          <ul>
          <li><span className='card_span'>CORREO</span><span>{user.email}</span></li>
          <li><span className='card_span'>CUMPLEAÑOS</span><span><ion-icon name="gift-outline"></ion-icon>{user.birthday}</span></li>
        </ul>
        <div className='botones'>
        <button  onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
        <button  onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
        </div>

    </article>
  )
}

export default UserCard
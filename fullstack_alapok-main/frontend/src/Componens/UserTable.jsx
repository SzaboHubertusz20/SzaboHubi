import React from 'react';
import UserRow from './UserRow';
import '../Css/UserTable.css';

function UserTable({ users, onDelete, onUpdate }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Név</th>
          <th>Email</th>
          <th>Regisztráció</th>
          <th>Műveletek</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <UserRow key={user.id} user={user} onDelete={onDelete} onUpdate={onUpdate} />
          ))
        ) : (
          <tr>
            <td colSpan="5" className="no-users">Nincsenek felhasználók az adatbázisban.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;

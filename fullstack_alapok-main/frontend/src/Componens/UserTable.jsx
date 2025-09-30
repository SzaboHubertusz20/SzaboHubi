import React from 'react';
import UserRow from './UserRow';

const headerStyle = { border: '1px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0' };
const noUsersCellStyle = { border: '1px solid #ccc', padding: '10px', textAlign: 'center' };

function UserTable({ users, onDelete, onUpdate }) {
  return (
    <table style={{width: '100%', borderCollapse: 'collapse'}}>
      <thead>
        <tr>
          <th style={headerStyle}>#ID</th>
          <th style={headerStyle}>Név</th>
          <th style={headerStyle}>Email</th>
          <th style={headerStyle}>Regisztráció</th>
          <th style={headerStyle}>Műveletek</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <UserRow key={user.id} user={user} onDelete={onDelete} onUpdate={onUpdate} />
          ))
        ) : (
          <tr>
            <td colSpan="5" style={noUsersCellStyle}>Nincsenek felhasználók az adatbázisban.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;

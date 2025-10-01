import React, { useState } from 'react';
import '../Css/UserRow.css';

function UserRow({ user, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleSave = () => {
    if (!editedName || !editedEmail) {
      alert("A név és email kötelező!");
      return;
    }
    onUpdate(user.id, { name: editedName, email: editedEmail });
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{user.id}</td>

      {isEditing ? (
        <>
          <td><input value={editedName} onChange={(e) => setEditedName(e.target.value)} /></td>
          <td><input value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} /></td>
        </>
      ) : (
        <>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </>
      )}

      <td>{new Date(user.created_at).toLocaleDateString()}</td>

      <td>
        {isEditing ? (
          <>
            <button className="save" onClick={handleSave}>Mentés</button>
            <button className="cancel" onClick={() => setIsEditing(false)}>Mégse</button>
          </>
        ) : (
          <>
            <button className="edit" onClick={() => setIsEditing(true)}>Szerkesztés</button>
            <button className="delete" onClick={() => onDelete(user.id)}>Törlés</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default UserRow;

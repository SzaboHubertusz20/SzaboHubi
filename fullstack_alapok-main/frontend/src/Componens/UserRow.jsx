import React, { useState } from 'react';

const styles = {
  cell: { border: '1px solid #ccc', padding: '10px', textAlign: 'left' },
  saveBtn: { padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' },
  cancelBtn: { padding: '5px', backgroundColor: '#9E9E9E', color: 'white', border: 'none', cursor: 'pointer' },
  editBtn: { padding: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' },
  deleteBtn: { padding: '5px', backgroundColor: '#F44336', color: 'white', border: 'none', cursor: 'pointer' },
};

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
      <td style={styles.cell}>{user.id}</td>

      {isEditing ? (
        <>
          <td style={styles.cell}>
            <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          </td>
          <td style={styles.cell}>
            <input value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
          </td>
        </>
      ) : (
        <>
          <td style={styles.cell}>{user.name}</td>
          <td style={styles.cell}>{user.email}</td>
        </>
      )}

      <td style={styles.cell}>{new Date(user.created_at).toLocaleDateString()}</td>

      <td style={styles.cell}>
        {isEditing ? (
          <>
            <button onClick={handleSave} style={styles.saveBtn}>Mentés</button>
            <button onClick={() => setIsEditing(false)} style={styles.cancelBtn}>Mégse</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} style={styles.editBtn}>Szerkesztés</button>
            <button onClick={() => onDelete(user.id)} style={styles.deleteBtn}>Törlés</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default UserRow;

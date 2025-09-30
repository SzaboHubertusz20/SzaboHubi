import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './Componens/api';
import UserForm from './Componens/UserForm';
import UserTable from './Componens/UserTable';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Adatok betöltése
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError("Nem sikerült betölteni az adatokat.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  // CRUD műveletek
  const handleAdd = async (newUser) => {
    try {
      await createUser(newUser);
      fetchData();
    } catch {
      setError("Hiba a felhasználó létrehozásakor.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Biztosan törlöd?")) return;
    try {
      await deleteUser(id);
      fetchData();
    } catch {
      setError("Hiba a törléskor.");
    }
  };

  const handleUpdate = async (id, updatedUser) => {
    try {
      await updateUser(id, updatedUser);
      fetchData();
    } catch {
      setError("Hiba a módosításkor.");
    }
  };

  if (loading) return <p>Adatok betöltése...</p>;
  if (error) return <p style={{color: 'red'}}>{error}</p>;

  return (
    <div className="App">
      <h1>Felhasználókezelő (Full-Stack CRUD)</h1>
      <UserForm onAdd={handleAdd} />
      <hr />
      <h2>Felhasználók Listája</h2>
      <UserTable users={users} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;

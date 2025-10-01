import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Felhasználók Listája</Link></li>
            <li><Link to="/add-user">Felhasználó Hozzáadása</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Felhasználók Listája</h2>
                <UserTable users={users} onDelete={handleDelete} onUpdate={handleUpdate} />
              </>
            }
          />
          <Route
            path="/add-user"
            element={<UserForm onAdd={handleAdd} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

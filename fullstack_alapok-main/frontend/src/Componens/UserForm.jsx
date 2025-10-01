import React, { useState } from 'react';
import '../Css/UserForm.css';

function UserForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("A név és email kötelező!");
      return;
    }
    onAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Új felhasználó hozzáadása</h2>
      <input
        type="text"
        placeholder="Név"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Hozzáadás</button>
    </form>
  );
}

export default UserForm;
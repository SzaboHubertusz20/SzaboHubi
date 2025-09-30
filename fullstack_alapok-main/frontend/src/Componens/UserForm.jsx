import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} style={{marginBottom: '30px', border: '1px solid #ccc', padding: '15px'}}>
      <h2>Új felhasználó hozzáadása</h2>
      <input
        type="text"
        placeholder="Név"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{marginRight: '10px', padding: '5px'}}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{marginRight: '10px', padding: '5px'}}
      />
      <button type="submit" style={{padding: '5px 10px'}}>Hozzáadás</button>
    </form>
  );
}

export default UserForm;

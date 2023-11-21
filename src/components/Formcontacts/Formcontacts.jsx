import { useState } from 'react';

export function FormContacts({ handleAddContact }) {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = ev => {
    const { name, value } = ev.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    handleAddContact(formData);
    setFormData({ name: '', number: '' });
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
      onSubmit={handleSubmit}
    >
      <label
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '20px',
        }}
        htmlFor="name"
      >
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
          value={formData.name}
        />
      </label>
      <label
        style={{
          display: 'flex',
          gap: '20px',
        }}
        htmlFor="number"
      >
        Number:
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          required
          value={formData.number}
        />
      </label>
      <button
        style={{
          display: 'inline-block',
          width: '90px',
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}

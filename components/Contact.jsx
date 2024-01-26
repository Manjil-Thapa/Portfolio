'use client';

const { useState } = require('react');
const { default: Footer } = require('./Footer');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function formSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          value={formData.name}
          type='text'
          onChange={handleInputChange}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          value={formData.email}
          type='text'
          onChange={handleInputChange}
          required
        />

        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          type='text'
          onChange={handleInputChange}
          required
        ></textarea>
      </form>
      <Footer />
    </>
  );
};

export default Contact;

import { useState } from 'react';

export default function ContactForm() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = formInput;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormInput({
      ...formInput,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          id='subject'
          name='subject'
          value={subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          rows='5'
          name='message'
          value={message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button>Send</button>
    </form>
  );
}

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
    <div className='w-full max-w-xs'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div>
          <label
            htmlFor='name'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email
          </label>
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
    </div>
  );
}

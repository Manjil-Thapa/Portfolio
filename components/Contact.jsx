'use client';

import Link from 'next/link';
import { Button } from './ui/button';

const { useState } = require('react');
const { default: Footer } = require('./Footer');

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   function handleInputChange(event) {
//     const { name, value } = event.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   function formSubmit(event) {
//     event.preventDefault();
//     console.log(formData);
//   }
//   return (
//     <>
//       <form onSubmit={formSubmit}>
//         <label htmlFor='name'>Name</label>
//         <input
//           id='name'
//           name='name'
//           value={formData.name}
//           type='text'
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor='email'>Email</label>
//         <input
//           id='email'
//           name='email'
//           value={formData.email}
//           type='text'
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor='message'>Message</label>
//         <textarea
//           id='message'
//           name='message'
//           value={formData.message}
//           type='text'
//           onChange={handleInputChange}
//           required
//         ></textarea>
//       </form>
//       <Footer />
//     </>
//   );
// };

const Contact = () => {
  return (
    <section
      className='flex flex-col justify-center items-center h-screen p-20'
      id='contact'
    >
      <h2 className='mt-10'>What&apos;s next?</h2>
      <h3 className='text-3xl font-extrabold my-4'>Get In Touch</h3>
      <p className='px-[35rem] text-center mb-4 text-lg'>
        I&apos;m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try my
        best to get back to you.
      </p>
      <Button variant='secondary'>
        <Link href='mailto: manjil.thapa.mgr@gmail.com'>Get In Contact</Link>
      </Button>
    </section>
  );
};

export default Contact;

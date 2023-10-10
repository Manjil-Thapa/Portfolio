export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type='text' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name=''
          value={emailInput}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          id='subject'
          name=''
          value={subjectInput}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          rows='5'
          name='messageInput'
          value={messageInput}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button>Send</button>
    </form>
  );
}

function ContactList({ contacts }) {
  return (
    <div>
      <h3>Submitted Contacts</h3>

      {contacts.length === 0 && <p>No contacts yet.</p>}

      {contacts.map((c) => (
        <div key={c._id} className="contact-card">
          <p><strong>{c.name}</strong></p>
          <p>{c.email}</p>
          <p>{c.phone}</p>
          {c.message && <p>{c.message}</p>}
        </div>
      ))}
    </div>
  );
}

export default ContactList;
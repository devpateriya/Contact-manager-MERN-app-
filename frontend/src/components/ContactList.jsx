function ContactList({ contacts, onDelete }) {
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

          <button
            style={{
              background: "#dc2626",
              marginTop: "8px"
            }}
            onClick={() => onDelete(c._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
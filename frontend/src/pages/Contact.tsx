export default function Contact() {
  return (
    <div className="container" style={{ padding: 24 }}>
      <h1>Contact</h1>
      <p style={{ color: 'var(--muted)' }}>Email us at support@example.com</p>
      <form style={{ display: 'grid', gap: 8, maxWidth: 480 }} onSubmit={e => e.preventDefault()}>
        <input placeholder="Your name" />
        <input placeholder="Your email" />
        <textarea placeholder="Message" rows={5}></textarea>
        <button className="btn">Send</button>
      </form>
    </div>
  )
}



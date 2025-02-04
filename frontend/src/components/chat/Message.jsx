
export default function Message({ message }) {
  return (
    <div className="message-body">
      <p className="message-owner">{message.owner}</p>
      <p className="message-text">{message.message}</p>
    </div>
  );
}

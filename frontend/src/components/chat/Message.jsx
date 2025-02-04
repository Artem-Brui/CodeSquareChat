export default function Message({ message }) {
  const wasCreated = getTimeToShow(message.creatingDate);

  function getTimeToShow(time) {
    const today = new Date().toISOString().split("T")[0].split("-").reverse().join(".");
    const timePart = time.split("T")[1].slice(0, 5);
    const datePart = time.split("T")[0].split("-").reverse().join(".");
    
    return today === datePart ? timePart : datePart;
  }

  return (
    <div className="message-body">
      <div className="message-data">
        <p className="message-owner">{message.owner}</p>
        <p className="message-created">{wasCreated}</p>
      </div>
      <p className="message-text">{message.message}</p>
    </div>
  );
}

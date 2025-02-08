export default function Message({ message }) {
  const wasCreated = getTimeToShow(message.creatingDate);

  function getTimeToShow(time) {
    const getDatePart = (day) => day.split(', ')[0]
    const getTimePart = (day) => day.split(', ')[1].split(':').slice(0, 2).join(':');

    const today = getDatePart(new Date().toLocaleString('ru-RU'))

    const datePart = getDatePart(time);
    const timePart = getTimePart(time);

    return getDatePart(time) === getDatePart(today) ? timePart : datePart;

  }

  const { owner, message: text } = message;

  return (
    <div className="message-body">
      <div className="message-data">
        <p className="message-owner">{owner.userDisplayName}</p>
        <p className="message-created">{wasCreated}</p>
      </div>
      <p className="message-text">{text}</p>
    </div>
  );
}

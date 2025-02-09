import reactStringReplace from 'react-string-replace';
import useTheme from '../../customHooks/useTheme';

export default function Message({ message, searchedData }) {
  const { owner, message: text } = message;
  const { colorMode } = useTheme();

  const wasCreated = getTimeToShow(message.creatingDate);

  function getTimeToShow(time) {
    const getDatePart = (day) => day.split(', ')[0]
    const getTimePart = (day) => day.split(', ')[1].split(':').slice(0, 2).join(':');

    const today = getDatePart(new Date().toLocaleString('ru-RU'))

    const datePart = getDatePart(time);
    const timePart = getTimePart(time);

    return getDatePart(time) === getDatePart(today) ? timePart : datePart;

  }

  const highLighter = (text, search) => {
    return reactStringReplace(text, search, (match, i) => {
      return (
        <span key={i} className={`highlight-${colorMode}`}>{match}</span>
      )
    });
  }
  
  return (
    <div className="message-body">
      <div className="message-data">
        <p className="message-owner">{highLighter(owner.userDisplayName, searchedData)}</p>
        <p className="message-created">{wasCreated}</p>
      </div>
      <p className="message-text">{highLighter(text, searchedData)}</p>
    </div>
  );
}

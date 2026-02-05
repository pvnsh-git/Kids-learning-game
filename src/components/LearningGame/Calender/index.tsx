import { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './styles.module.scss';
import 'react-calendar/dist/Calendar.css';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calender() {
  const [value, onChange] = useState<Value>(new Date());

  const calenderTile = ({ date, view }: { date: Date; view: string }) => {
    const today = new Date();
    const isSelectedDate = value instanceof Date ? date.toDateString() === value.toDateString() : false;
    const isToday = date.toDateString() === today.toDateString();
    const isSpecificDate = [1, 5, 7, 9].includes(date.getDate());
    const isCurrentMonth = date.getMonth() === today.getMonth(); 
    const isAvailableDate = [27, 29, 31].includes(date.getDate()); // Check if the date is 1, 5, 7, or 9

    return isSelectedDate
      ? styles.selected // Apply your custom CSS class for the selected date here
      : isToday
      ? styles.today // Apply your custom CSS class for today's date here
      : isCurrentMonth && isSpecificDate
      ? styles.strikeThrough // Apply the .strikeThrough class for specific dates
      : isCurrentMonth && isAvailableDate
      ? styles.availableDate
      : "" // Return an empty string for normal tiles with no additional class
  };

  return (
    <div className={styles.calenderWrap}>
        <h4>Reschedule Installation</h4>
        <p>select date to see all available slots.</p>
      <Calendar 
      onChange={onChange} 
      value={value} 
      formatShortWeekday={(locale, date) => {
        const weekday = ["S","M","T","W","T","F","S"];
        console.log("month", weekday[date.getDay()]); return weekday[date.getDay()]
    }}
      className={styles.calenderClass}
      tileClassName={calenderTile}
      />
    </div>
  );
}

export default Calender;
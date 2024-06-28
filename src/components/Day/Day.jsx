import "@/components/Day/Day.scss";

export default function Day() {
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

  const handleClick = (hour) => {
    alert(`thank you for confirming ${hour}:00 as the meeting time!`);
  };

  return (
    <div className="day">
      <div className="day__container">
        <div className="day__title">Schedule Pickup</div>
        <div className="day__hours">
          {hours.map((hour) => (
            <button
              key={hour}
              className="day__hour-button"
              onClick={() => handleClick(hour)}
            >
              {hour}:00
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

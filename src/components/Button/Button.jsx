import "./Button.scss";

export default function Button({ children, icon, onClick, link }) {
  let buttonClass = "button";
  if (icon) {
    buttonClass = "button--icon";
  } else if (children === "Search") {
    buttonClass = "button--text";
  } else if (children === "Post Ad") {
    buttonClass = "button";
  }

  return (
    <a className="remove" href={link}>
      <button className={buttonClass} onClick={onClick}>
        {icon && (
          <div>
            <img src={icon} alt="icon" />
          </div>
        )}
        {children}
      </button>
    </a>
  );
}

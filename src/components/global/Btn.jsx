function Btn({ text, sm, outline }) {
  return (
    <a
      className={`btn${sm ? " btn-sm" : ""} ${outline ? " btn-outline" : ""}`}
      href="#"
    >
      {text}
    </a>
  );
}

export default Btn;

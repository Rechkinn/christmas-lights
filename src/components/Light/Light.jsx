import "./Light.scss";

export default function Light({
  isRed = false,
  isGreen = false,
  isBlue = false,
  isPurple = false,
  ...props
}) {
  let stylesClasses = "light__colored-glass";
  if (isRed) {
    stylesClasses += " " + stylesClasses + "_red";
  } else if (isGreen) {
    stylesClasses += " " + stylesClasses + "_green";
  } else if (isBlue) {
    stylesClasses += " " + stylesClasses + "_blue";
  } else if (isPurple) {
    stylesClasses += " " + stylesClasses + "_purple";
  }

  return (
    <div className="light">
      <div className={stylesClasses}></div>
    </div>
  );
}

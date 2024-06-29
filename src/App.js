import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("handleClick");
  };

  const handleMouseOver = () => {
    console.log("handleMouseOver");
  };

  const handleMouseOut = (event) => {
    console.log("handleMouseOut", event);
  };

  const handleButtonMouseOver = (eventType) => {
    console.log("handleButtonMouseOver", eventType);
  };

  const handleButtonMouseOut = (value) => {
    console.log("handleButtonMouseOut", value);
  };

  return (
    <div className="container">
      <img
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        src="https://picsum.photos/640/360"
        height="400px"
        alt="camera"
      />
      <button
        onClick={handleClick}
        onMouseOver={(event) => handleButtonMouseOver(event.type)}
        onMouseOut={() => handleButtonMouseOut("mouse out")}
      >
        clique
      </button>
    </div>
  );
}

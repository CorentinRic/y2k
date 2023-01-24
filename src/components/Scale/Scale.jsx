import { WiAlien } from "react-icons/wi";

function Scale({ scaleValue }) {
  const range = [1, 2, 3, 4, 5];
  const scaleType = <WiAlien />;

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span className="aliens" key={rangeElem.toString()}>
            {scaleType}
          </span>
        ) : null
      )}
    </div>
  );
}

export default Scale;

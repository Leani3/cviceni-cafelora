import './index.css';

export const Layer = (props) => {
  const { color, label } = props;
  return (
    <div className="layer">
      <div className="layer__color" style={{ backgroundColor: color }}></div>
      <div className="layer__label">{label}</div>
    </div>
  );
};

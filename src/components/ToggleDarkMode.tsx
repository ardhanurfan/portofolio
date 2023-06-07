import "../style/toggleDarkMode.css";

const ToggleDarkMode = () => (
  <>
    <div className="switch">
      <input type="checkbox" name="toggle" />
      <label htmlFor="toggle">
        <i className="bulb">
          <span className="bulb-center"></span>
          <span className="filament-1"></span>
          <span className="filament-2"></span>
          <span className="reflections">
            <span></span>
          </span>
          <span className="sparks">
            <i className="spark1"></i>
            <i className="spark2"></i>
            <i className="spark3"></i>
            <i className="spark4"></i>
          </span>
        </i>
      </label>
    </div>
  </>
);

export default ToggleDarkMode;

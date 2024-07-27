import "./Counter.css";

function Counter() {
  return (
    <>
      <div className="counter__container">
        <div className="counter-block">
          <div className="counter-num">
            <h1>12</h1>
          </div>
          <div className="counter-title">
            <p>Year Of Experiance</p>
          </div>
        </div>

        <div className="counter-block">
          <div className="counter-num">
            <h1>84</h1>
          </div>
          <div className="counter-title">
            <p>Success Project</p>
          </div>
        </div>

        <div className="counter-block">
          <div className="counter-num">
            <h1>15</h1>
          </div>
          <div className="counter-title">
            <p>Active Project</p>
          </div>
        </div>

        <div className="counter-block">
          <div className="counter-num">
            <h1>95</h1>
          </div>
          <div className="counter-title">
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;

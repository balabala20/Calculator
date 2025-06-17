var conform = true;
var dot = true;
function Main({ props }) {
  function setElement(element) {
    if (conform === true) {
      setCurrentElement(currentElement + element);
    }
  }

  function Equals(symbol) { //when click on "=" this function will exicuted.
    if (operator === "+" && oldElement !== "" && currentElement !== "") {
      setOldElement(Number(oldElement) + Number(currentElement));
      setCurrentElement("");
      setOperator(symbol);
    } else if (operator === "-" && oldElement !== "" && currentElement !== "") {
      setOldElement(Number(oldElement) - Number(currentElement));
      setCurrentElement("");
      setOperator(symbol);
    } else if (operator === "*" && oldElement !== "" && currentElement !== "") {
      setOldElement(Number(oldElement) * Number(currentElement));
      setCurrentElement("");
      setOperator(symbol);
    } else if (operator === "/" && oldElement !== "" && currentElement !== "") {
      setOldElement(Number(oldElement) / Number(currentElement));
      setCurrentElement("");
      setOperator(symbol);
    }
    conform = false;
  }

  function setSymbol(symbol) {  //when click on any operator +,-,*,/ this function is exicuted.
    if (currentElement !== "" && oldElement === "") {
      setOperator(symbol);
      setOldElement(currentElement);
      setCurrentElement("");
    } else if (currentElement === "" && oldElement !== "") {
      setOperator(symbol);
      conform = true;
    } else {
      Equals(symbol);
      conform = true;
    }
    dot = true;
  }

  function fractions() {   //when click on "1/x" this function is exicuted.
    if (currentElement !== "" && oldElement === "" && operator === "") {
      setOldElement(1 / Number(currentElement));
      setCurrentElement("");
      setOperator("");
    } else if (currentElement === "" && operator === "" && oldElement !== "") {
      setOldElement(1 / Number(oldElement));
      setCurrentElement("");
      setOperator("");
    }
    if (currentElement === "" && oldElement === "" && operator === "") {
      conform = true;
    } else {
      conform = false;
    }
  }

  function Delete() {    // when click on "Del" this function is exicuted.
    if (currentElement !== "") {
      setCurrentElement("");
    } else if (currentElement === "" && operator !== "") {
      setOperator("");
    } else {
      setOldElement("");
    }
    conform = true;
    dot = true;
  }

  function Clear() {    //when click on "Clr" this function is exicuted.
    setCurrentElement("");
    setOldElement("");
    setOperator("");
    conform = true;
    dot = true;
  }

  const {
    oldElement,
    setOldElement,
    currentElement,
    setCurrentElement,
    operator,
    setOperator,
  } = props;

  return (
    <div>
      <div className="outerLayer">
        <div className="screen">
          <h3 className="result">
            {oldElement} {operator} {currentElement}
          </h3>
        </div>
        <div className="buttons">
          <button className="button" onClick={fractions}>
            1/x
          </button>
          <button className="button" onClick={Delete}>
            Del
          </button>
          <button className="button" onClick={Clear}>
            Clr
          </button>
          <button
            className="button"
            onClick={() => {
              setSymbol("+");
            }}
          >
            +
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(1);
            }}
          >
            1
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(2);
            }}
          >
            2
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(3);
            }}
          >
            3
          </button>
          <button
            className="button"
            onClick={() => {
              setSymbol("-");
            }}
          >
            -
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(4);
            }}
          >
            4
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(5);
            }}
          >
            5
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(6);
            }}
          >
            6
          </button>
          <button
            className="button"
            onClick={() => {
              setSymbol("*");
            }}
          >
            *
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(7);
            }}
          >
            7
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(8);
            }}
          >
            8
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(9);
            }}
          >
            9
          </button>
          <button
            className="button"
            onClick={() => {
              setSymbol("/");
            }}
          >
            /
          </button>
          <button
            className="button"
            onClick={() => {
              setElement("00");
            }}
          >
            00
          </button>
          <button
            className="button"
            onClick={() => {
              setElement(0);
            }}
          >
            0
          </button>
          <button
            className="button"
            onClick={() => {
              if (conform === true && dot === true) {
                setElement(".");
                dot = false;
              }
            }}
          >
            .
          </button>
          <button
            className="button"
            onClick={() => {
              if (
                operator !== "" &&
                oldElement !== "" &&
                currentElement !== ""
              ) {
                Equals("");
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;

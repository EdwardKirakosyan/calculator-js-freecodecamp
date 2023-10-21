import React from "react"

export default function App() {
  const [display, setDisplay] = React.useState({ up: [], down: [0] })

  function clearBtn() {
    setDisplay({ up: [], down: [0] })
  }

  function tipeNumber(e) {
    const targetValue = e.target.textContent
    setDisplay((prev) => {
      if (
        prev.down[0] === 0 ||
        prev.down[0] === "+" ||
        prev.down[0] === "-" ||
        prev.down[0] === "/" ||
        prev.down[0] === "*"
      ) {
        return {
          ...prev,
          up: [...prev.up, targetValue],
          down: [targetValue],
        }
      } else {
        return {
          ...prev,
          up: [...prev.up, targetValue],
          down: [...prev.down, targetValue],
        }
      }
    })
  }

  function add() {
    if (display.down !== 0) {
      setDisplay((prev) => ({ ...prev, up: [...prev.up, "+"], down: ["+"] }))
    }
  }

  function subtract() {
    if (display.down !== 0) {
      setDisplay((prev) => ({ ...prev, up: [...prev.up, "-"], down: ["-"] }))
    }
  }

  function multiply() {
    if (display.down !== 0) {
      setDisplay((prev) => ({ ...prev, up: [...prev.up, "*"], down: ["*"] }))
    }
  }

  function divide() {
    if (display.down !== 0) {
      setDisplay((prev) => ({ ...prev, up: [...prev.up, "/"], down: ["/"] }))
    }
  }

  function result() {
    const res = eval(display.up.join(""))
    setDisplay((prev) => ({ ...prev, up: [...prev.up, "=", res], down: res }))
  }

  return (
    <div id="main-div">
      <div id="main-display">
        <p>{display.up}</p>
        <h2 id="display">{display.down}</h2>
      </div>
      <div id="inner">
        <div id="numbers">
          <div onClick={tipeNumber} id="seven">
            7
          </div>
          <div onClick={tipeNumber} id="eight">
            8
          </div>
          <div onClick={tipeNumber} id="nine">
            9
          </div>
          <div onClick={tipeNumber} id="four">
            4
          </div>
          <div onClick={tipeNumber} id="five">
            5
          </div>
          <div onClick={tipeNumber} id="six">
            6
          </div>
          <div onClick={tipeNumber} id="one">
            1
          </div>
          <div onClick={tipeNumber} id="two">
            2
          </div>
          <div onClick={tipeNumber} id="three">
            3
          </div>
          <div id="zero">0</div>
          <div id="decimal">.</div>
        </div>
        <div id="operators">
          <div onClick={clearBtn} id="clear">
            AC
          </div>
          <div onClick={add} id="add">
            +
          </div>
          <div onClick={subtract} id="subtract">
            -
          </div>
          <div onClick={multiply} id="multiply">
            *
          </div>
          <div onClick={divide} id="divide">
            /
          </div>
          <div onClick={result} id="equals">
            =
          </div>
        </div>
      </div>
    </div>
  )
}

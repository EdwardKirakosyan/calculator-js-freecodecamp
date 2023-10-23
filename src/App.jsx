import React from "react"
import { nanoid } from "nanoid"

const numbers = [
  { name: "seven", num: 7, id: nanoid() },
  { name: "eight", num: 8, id: nanoid() },
  { name: "nine", num: 9, id: nanoid() },
  { name: "four", num: 4, id: nanoid() },
  { name: "five", num: 5, id: nanoid() },
  { name: "six", num: 6, id: nanoid() },
  { name: "one", num: 1, id: nanoid() },
  { name: "two", num: 2, id: nanoid() },
  { name: "three", num: 3, id: nanoid() },
  { name: "zero", num: 0, id: nanoid() },
]

const operators = [
  { name: "clear", sign: "AC", id: nanoid() },
  { name: "add", sign: "+", id: nanoid() },
  { name: "subtract", sign: "-", id: nanoid() },
  { name: "multiply", sign: "*", id: nanoid() },
  { name: "divide", sign: "/", id: nanoid() },
]

export default function App() {
  const [upperDisplay, setUpperDisplay] = React.useState([])
  const [downDisplay, setDownDisplay] = React.useState([0])

  function handleDecimal() {
    if (downDisplay.includes(".")) {
      null
    } else {
      setDownDisplay((prev) => [...prev, "."])
      setUpperDisplay((prev) => {
        if (prev.length < 1) {
          return ["0."]
        } else {
          return [...prev, "."]
        }
      })
    }
  }

  const handleEquals = () => {
    if (upperDisplay.length >= 1) {
      setUpperDisplay((prev) => {
        const substringArray = prev.join("").split("=")
        const rez =
          substringArray.length > 1
            ? eval(substringArray.slice(substringArray.length - 1).join(""))
            : eval(prev.join(""))
        setDownDisplay([rez])
        return [...prev, "=", rez]
      })
    }
  }

  const handleNumber = (number) => {
    setDownDisplay((prev) =>
      (prev[0] === 0 && prev[1] !== ".") ||
      prev[0] === "+" ||
      prev[0] === "-" ||
      prev[0] === "*" ||
      prev[0] === "/"
        ? [number]
        : [...prev, number]
    )
    setUpperDisplay((prev) => (prev[0] === 0 ? [number] : [...prev, number]))
  }

  const handleOperator = (operator) => {
    if (operator === "AC") {
      setDownDisplay([0])
      setUpperDisplay([])
    }

    if (operator === "+") {
      if (upperDisplay.length >= 1) {
        setUpperDisplay((prev) => [...prev, "+"])
        setDownDisplay([operator])
      }
    }

    if (operator === "-") {
      if (upperDisplay.length >= 1) {
        setUpperDisplay((prev) => [...prev, "-"])
        setDownDisplay([operator])
      }
    }

    if (operator === "*") {
      if (upperDisplay.length >= 1) {
        setUpperDisplay((prev) => [...prev, "*"])
        setDownDisplay([operator])
      }
    }

    if (operator === "/") {
      if (upperDisplay.length >= 1) {
        setUpperDisplay((prev) => [...prev, "/"])
        setDownDisplay([operator])
      }
    }
  }

  return (
    <div id="main-div">
      <div id="main-display">
        <p>{upperDisplay}</p>
        <h2 id="display">{downDisplay}</h2>
      </div>
      <div id="inner">
        <div id="numbers">
          {numbers.map((item) => (
            <div
              onClick={() => handleNumber(item.num)}
              key={item.id}
              id={item.name}
            >
              {item.num}
            </div>
          ))}
          <div onClick={handleDecimal} id="decimal">
            .
          </div>
        </div>
        <div id="operators">
          {operators.map((item) => (
            <div
              onClick={() => handleOperator(item.sign)}
              key={item.id}
              id={item.name}
            >
              {item.sign}
            </div>
          ))}
          <div id="equals" onClick={handleEquals}>
            =
          </div>
        </div>
      </div>
    </div>
  )
}

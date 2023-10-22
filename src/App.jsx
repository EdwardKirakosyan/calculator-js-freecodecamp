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
  { name: "decimal", num: ".", id: nanoid() },
]

const operators = [
  { name: "clear", sign: "AC", id: nanoid() },
  { name: "add", sign: "+", id: nanoid() },
  { name: "subtract", sign: "-", id: nanoid() },
  { name: "multiply", sign: "*", id: nanoid() },
  { name: "divide", sign: "/", id: nanoid() },
  { name: "equals", sign: "=", id: nanoid() },
]

export default function App() {
  const [upperDisplay, setUpperDisplay] = React.useState([])
  const [downDisplay, setDownDisplay] = React.useState([0])

  const handleNumber = (number) => {
    setDownDisplay((prev) => (prev[0] === 0 ? [number] : [...prev, number]))
    setUpperDisplay((prev) => (prev[0] === 0 ? [number] : [...prev, number]))
  }

  const handleOperator = (operator) => {}

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
        </div>
      </div>
    </div>
  )
}

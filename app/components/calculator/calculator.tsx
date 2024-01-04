import React, { useEffect, useState } from "react"
import Image from "next/image"
import { evaluate } from "mathjs"
import styles from "./calculator.module.css"

// https://equalexperts.github.io/ee-tech-interviews-uk/calculator-problem.html

// working with strings as they can be passed into mathjs evaluate()
// and also concatenated for the number input behaviour
const Calculator = () => {
  type calculatorStateType = {
    input: string
    total: string
    operator: string
  }

  const defaultState: calculatorStateType = {
    input: "",
    total: "0",
    operator: "",
  }

  const [calculatorState, setCalculatorState] =
    useState<calculatorStateType>(defaultState)

  const handleNumberPress: Function = (buttonValue: string) => {
    if (buttonValue === "." && calculatorState.input.match(/\./)) return

    setCalculatorState({
      ...calculatorState,
      input: (calculatorState.input + buttonValue).replace(/^\./, "0."),
    })
  }

  const handleOperatorPress: Function = (buttonValue: string) => {
    setCalculatorState({
      total:
        calculatorState.operator && calculatorState.input // handle running total
          ? evaluate(
              `${calculatorState.total} ${calculatorState.operator} ${calculatorState.input}`
            )
          : calculatorState.input || calculatorState.total,
      operator: !buttonValue.match(/\=/) // 'equals' operator doesn't go into state
        ? buttonValue
        : calculatorState.operator,
      input: "",
    })
  }

  const handlePress = (buttonValue: string) => {
    if (buttonValue === "C") {
      setCalculatorState(defaultState)
    } else if (buttonValue.match(/[0-9]|\./)) {
      handleNumberPress(buttonValue)
    } else {
      handleOperatorPress(buttonValue)
    }
  }

  const buttons = [
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ]

  /* debug
  useEffect(() => {
    console.log(calculatorState)
  }, [calculatorState])*/

  return (
    <div className={styles.calculator}>
      <Image
        priority
        src="/logo.svg"
        alt="Equal Experts logo"
        width="150"
        height="40"
      />
      <input
        type="text"
        readOnly
        value={calculatorState.input || calculatorState.total || "0"}
        aria-live="polite"
      />
      <div className={styles.grid}>
        {buttons.map((button, i) => (
          <button
            key={i}
            onClick={() => handlePress(button)}
            disabled={button.match(/\+\/-|\%/) ? true : false} // disable these for now
            className={
              button.match(/C|\+\/-|\%/)
                ? styles.darkGrey
                : button.match(/\=|\+|\-|\*|\/|\+\/-|\%/)
                ? styles.orange
                : undefined
            }
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calculator

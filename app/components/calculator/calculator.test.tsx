import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Calculator from "./calculator"

// number & clear related tests:
describe("render, input & clear related tests:", () => {
  it("it renders the calculator in default state", () => {
    const container = render(<Calculator />)
    expect(container).toMatchSnapshot()
  })

  it("it displays a number", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "6" }))

    expect(screen.getByRole("textbox")).toHaveValue("6")
  })

  it("it displays a concatenated number", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "6" }))
    await user.click(screen.getByRole("button", { name: "3" }))

    expect(screen.getByRole("textbox")).toHaveValue("63")
  })

  it("it prepends a leading decimal point with zero", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "." }))
    expect(screen.getByRole("textbox")).toHaveValue("0.")
  })

  it("it does not allow a repeated decimal point", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "." }))
    await user.click(screen.getByRole("button", { name: "." }))

    expect(screen.getByRole("textbox")).toHaveValue("0.")
  })

  it("it clears the display", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "8" }))
    expect(screen.getByRole("textbox")).toHaveValue("8")

    await user.click(screen.getByRole("button", { name: "C" }))
    expect(screen.getByRole("textbox")).toHaveValue("0")
  })
})

describe("operator related tests:", () => {
  it("it adds two numbers together", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "6" }))
    await user.click(screen.getByRole("button", { name: "+" }))
    await user.click(screen.getByRole("button", { name: "3" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("9")
  })

  it("it subtracts a number from another number", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "6" }))
    await user.click(screen.getByRole("button", { name: "-" }))
    await user.click(screen.getByRole("button", { name: "3" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("3")
  })

  it("it divides a number by another number", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "8" }))
    await user.click(screen.getByRole("button", { name: "/" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("4")
  })

  it("it multiplies a number by another number", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "8" }))
    await user.click(screen.getByRole("button", { name: "*" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("16")
  })

  it("it adds a number to a previous calculation", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "8" }))
    await user.click(screen.getByRole("button", { name: "/" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "+" }))
    await user.click(screen.getByRole("button", { name: "1" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("5")
  })

  it("it subtracts a number from a previous calculation", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "8" }))
    await user.click(screen.getByRole("button", { name: "/" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "-" }))
    await user.click(screen.getByRole("button", { name: "1" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("3")
  })

  it("it divides a number from a previous calculation", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "8" }))
    await user.click(screen.getByRole("button", { name: "+" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "/" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("5")
  })

  it("it multiplies a number from a previous calculation", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "8" }))
    await user.click(screen.getByRole("button", { name: "/" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "*" }))
    await user.click(screen.getByRole("button", { name: "3" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("textbox")).toHaveValue("12")
  })

  it("it divides zero when no number is input", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "/" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "=" }))
    expect(screen.getByRole("textbox")).toHaveValue("0")
  })

  it("it multiplies zero when no number is input", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "*" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "=" }))
    expect(screen.getByRole("textbox")).toHaveValue("0")
  })

  it("it adds to zero when no number is input", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "+" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "=" }))
    expect(screen.getByRole("textbox")).toHaveValue("2")
  })

  it("it subtracts from zero when no number is input", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "-" }))
    await user.click(screen.getByRole("button", { name: "2" }))
    await user.click(screen.getByRole("button", { name: "=" }))
    expect(screen.getByRole("textbox")).toHaveValue("-2")
  })
})

describe("unhappy path/edge case tests:", () => {
  // (could perhaps add more here... coverage looks good though)
  it("it displays zero when operators are pressed without a number input", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "/" }))
    expect(screen.getByRole("textbox")).toHaveValue("0")

    await user.click(screen.getByRole("button", { name: "*" }))
    expect(screen.getByRole("textbox")).toHaveValue("0")
  })

  it("it displays zero when operators are pressed repeatedly without a number input", async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole("button", { name: "+" }))
    await user.click(screen.getByRole("button", { name: "-" }))
    await user.click(screen.getByRole("button", { name: "/" }))
    await user.click(screen.getByRole("button", { name: "*" }))
    await user.click(screen.getByRole("button", { name: "*" }))
    await user.click(screen.getByRole("button", { name: "*" }))
    expect(screen.getByRole("textbox")).toHaveValue("0")
  })
})

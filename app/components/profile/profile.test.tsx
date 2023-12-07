import React from "react"
import { render, screen } from "@testing-library/react"

import Profile from "./profile"

test("renders 'Log in' text when user is not set", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  ) as jest.Mock

  render(<Profile />)
  expect(await screen.findByText("Log in"))
})

test("renders 'Logged in as:' text and username when user is set", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ name: "bar foo" }]),
    })
  ) as jest.Mock

  render(<Profile />)
  expect(await screen.findByText("Logged in as:"))
})

test("renders username when user is set", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ name: "foo bar" }]),
    })
  ) as jest.Mock

  render(<Profile />)
  expect(await screen.findByText("foo bar"))
})

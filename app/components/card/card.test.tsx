import React from "react"
import { render, screen } from "@testing-library/react"

import Card from "./card"

const mockCard = (
  <Card
    linkUrl="/foo-bar"
    title="foo"
    subTitle="bar"
    price={1000}
    imageUrl="https://placekitten.com/g/200/300"
    imageAltText="foo bar"
  />
)

const mockCardNoImage = (
  <Card
    linkUrl="/foo-bar"
    title="foo"
    subTitle="bar"
    price={1000}
    imageAltText="foo bar"
  />
)

it("renders the card as expected", () => {
  const container = render(mockCard)
  expect(container).toMatchSnapshot()
})

it("renders an anchor tag as supplied", () => {
  render(mockCard)
  expect(screen.getByRole("link")).toHaveAttribute("href", "/foo-bar")
})

it("renders the card title with the correct text", () => {
  render(mockCard)
  expect(screen.getByRole("heading", { name: "foo" })).toBeInTheDocument()
})

it("renders the card sub-title with the correct text", () => {
  render(mockCard)
  expect(screen.getByRole("heading", { name: "bar" })).toBeInTheDocument()
})

it("renders the card price with the correct value", () => {
  render(mockCard)
  expect(screen.getByText("1000")).toBeInTheDocument()
})

it("renders an image when present", () => {
  render(mockCard)
  expect(screen.getByRole("img")).toBeInTheDocument()
})

it("does not render image when not present", () => {
  render(mockCardNoImage)
  expect(screen.queryByRole("img")).toBeNull()
})

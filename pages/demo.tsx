import Head from "next/head"
import Image from "next/image"

import styles from "@/pages/demo.module.css"

import Card from "../app/components/card/card"
import Profile from "../app/components/profile/profile"

export default function Home() {
  return (
    <div style={{ padding: "1rem", maxWidth: "375px" }}>
      <Profile />
      <Card
        linkUrl="/foo-bar"
        title="foo"
        subTitle="bar"
        price={1000}
        imageUrl="https://placekitten.com/g/300/300"
        imageAltText="foo bar"
      />
    </div>
  )
}

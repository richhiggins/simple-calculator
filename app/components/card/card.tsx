import React from "react"
import Link from "next/link"
import { cardProps } from "./card.types"
import styles from "./card.module.css"

const Card = (cardProps: cardProps) => (
  <Link href={cardProps.linkUrl} className={styles.card}>
    {cardProps.imageUrl && (
      <img src={cardProps.imageUrl} alt={cardProps.imageAltText} />
    )}
    <h3>{cardProps.title}</h3>
    <h4>{cardProps.subTitle}</h4>
    <div>{cardProps.price}</div>
  </Link>
)

export default Card

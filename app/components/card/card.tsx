import React from "react";
import Link from "next/link";
import SliderWithIcon from "../sliderWithIcon/sliderWithIcon";
import { cardProps } from "./card.types";
import styles from "./card.module.css";

const Card = (cardProps: cardProps) => (
  <div className={`${styles.card} ${styles[cardProps.theme]}`}>
    <h2 className={styles.cardHeading}>{cardProps.title}</h2>
    <form>
      <fieldset>
        <div>
          <SliderWithIcon
            label="Light"
            name={`${cardProps.title}Light`}
            value={10} // get from localstorage/state
          />
        </div>
        <div>
          <SliderWithIcon
            label="Humidity"
            name={`${cardProps.title}Humidity`}
            value={10} // get from localstorage/state
          />
        </div>
      </fieldset>
    </form>
  </div>
);

export default Card;

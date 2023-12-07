import Head from "next/head"
import Calculator from "app/components/calculator/calculator"

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>Simple Calculator</title>
      </Head>
      <Calculator />
    </>
  )
}

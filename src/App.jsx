import "./App.css"
import { CardContainer } from "./component/CardContainer"
import { Input } from "./component/Input"
import { DropBox } from "./component/DropBox"
import { Button } from "./component/Button"
import React, { useState, useEffect } from "react"
import { codesFetch, currencyConvertion } from "./API-Connection/api-connection"
import { Result } from "./component/ResultConvert"

function App() {
	const [currencyCodes, setCurrencyCodes] = useState([])
	const [total, setTotal] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isDisable, setIsDisable] = useState(true)
	const [fromcurrency, setFromCurrency] = useState("")
	const [tocurrency, setToCurrency] = useState("")
	const [amount, setAmount] = useState(0)

	useEffect(() => {
		codesFetch(setCurrencyCodes)
	}, [])

	//handle functions

	const handleAmountChange = (Event) => {
		setAmount(Event.target.value)
	}
	const handleFromCurrency = (Event) => {
		setFromCurrency(Event.target.value)
	}
	const handleToCurrency = (Event) => {
		setToCurrency(Event.target.value)
	}
	const handleGetConvertion = () => {
		currencyConvertion(
			setIsLoading,
			setTimeout,
			setTotal,
			setIsDisable,
			fromcurrency,
			tocurrency,
			amount,
		)
	}

	return (
		<CardContainer>
			<h1>Currency Converter</h1>
			<div>
				<Input
					handleAmountChange={handleAmountChange}
					label="Amount to convert:"
					id="amount"
					value={amount}
				/>
			</div>
			<DropBox
				currencyCodes={currencyCodes}
				isLoading={isLoading}
				label="From"
				handleGetCurrency={handleFromCurrency}
			/>
			<DropBox
				currencyCodes={currencyCodes}
				isLoading={isLoading}
				label="To"
				handleGetCurrency={handleToCurrency}
			/>
			<Button
				onCLick={handleGetConvertion}
				isLoading={isLoading}
				isDisable={isDisable}
			/>

			{!isDisable && <Result total={total} />}
		</CardContainer>
	)
}

export default App

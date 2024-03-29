import "./styles.css"
export function Input({ handleAmountChange, label, id, amount }) {
	return (
		<div className="inputContainer">
			<label htmlFor={id}>{label}</label>
			<input
				className="input"
				type="number"
				onChange={handleAmountChange}
				id={id}
				value={amount}
				placeholder="0.00"
				min={1}
			/>
		</div>
	)
}

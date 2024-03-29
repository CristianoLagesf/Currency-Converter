export function DropBox({ currencyCodes, label, handleGetCurrency }) {
	return (
		<div className="selectContainer">
			<label htmlFor="selectLabel">{label}:</label>
			<select className="select" id="select" onChange={handleGetCurrency}>
				{currencyCodes.map((code, index) => {
					return (
						<option key={index} value={code[0]}>
							{code[0]} | {code[1]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

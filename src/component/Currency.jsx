export function Currency({ currency, value, amount }) {
	let converted = amount * value
	return (
		<p>
			{currency}: {converted}
		</p>
	)
}

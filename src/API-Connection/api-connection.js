const url = "https://v6.exchangerate-api.com/v6"
const key = "ceae67e54896595475bc5bcb"
const resquestType = ["codes", "pair", "enriched"]

export function codesFetch(setCurrencyCodes) {
	const urlmounted = `${url}/${key}/${resquestType[0]}`
	fetch(urlmounted)
		.then((response) => response.json())
		.then((responseData) => {
			setCurrencyCodes(responseData.supported_codes)
		})
}

export async function currencyConvertion(
	setIsLoading,
	setTimeout,
	setTotal,
	setIsDisable,
	fromcurrency,
	tocurrency,
	amount,
) {
	const urlmounted = `${url}/${key}/${resquestType[1]}/${fromcurrency}/${tocurrency}/${amount}`
	if (fromcurrency !== tocurrency)
		try {
			const response = await fetch(urlmounted)
			const responseData = await response.json()
			setIsLoading(true)
			setTimeout(() => {
				setTotal(responseData)
				setIsLoading(false)
				setIsDisable(false)
			}, 2000)
		} catch (error) {
			console.log(error)
		}
}

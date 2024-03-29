import "./styles.css"
export function ErrorMessage({ errorText }) {
	return (
		<div className="ContainerErrorMensage">
			<label className="errorMensage">{errorText}</label>
		</div>
	)
}

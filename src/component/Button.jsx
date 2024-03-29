import "./styles.css"
export function Button({ onCLick, isLoading, isDisable }) {
	return (
		<button
			className="button"
			onClick={onCLick}
			type="submit"
			// disabled={isDisable}
		>
			{isLoading ? "Loading..." : "Submit"}
		</button>
	)
}

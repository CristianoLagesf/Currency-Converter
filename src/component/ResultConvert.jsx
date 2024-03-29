import "./styles.css"
export function Result({ total }) {
	const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	const time = new Date(total.time_last_update_utc)
	const timeStamp = {
		week: week[time.getDay()],
		day: time.getUTCDate(),
		month: (time.getUTCMonth() < 10 ? "0" : "") + time.getUTCMonth(),
		year: time.getUTCFullYear(),
		hour: time.getUTCHours(),
		mm: (time.getUTCMinutes() < 10 ? "0" : "") + time.getUTCMinutes(),
		sec: time.getSeconds(),
	}
	const dateReturn = `${timeStamp.week}, 
${timeStamp.day}/
${timeStamp.month}/
${timeStamp.year} 
${timeStamp.hour}:${timeStamp.mm}`

	return (
		<div className="ContainerResult">
			<ul className="ListResult">
				<li className="itemResult">
					<span className="titleResult">Result: </span>
					<span className="textResult">{total.conversion_result}</span>
				</li>
				<li className="itemResult">
					<span className="titleResult">Rate: </span>
					<span className="textResult">{total.conversion_rate}</span>
				</li>
				<li className="itemResult">
					<span className="titleResult">Date: </span>
					<span className="textResult">{dateReturn}</span>
					{console.log()}
				</li>
			</ul>
		</div>
	)
}

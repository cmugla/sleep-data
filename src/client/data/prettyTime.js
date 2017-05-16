const prettyTime = uglyTime => {
	const timeStr = uglyTime
	const date = new Date(timeStr)
	const hours = date.getHours()
	const mins = date.getMinutes()
	return `${hours > 12 ? hours - 12 : hours}:${mins < 10 ? `0${mins}` : mins} ${hours > 12 ? 'pm': 'am'}`
}

export default prettyTime
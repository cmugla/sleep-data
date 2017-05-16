const months = [
	"January",
	"February",
	"March",
	"April",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
]

const prettyDate = (uglyDate) => {
	const timeStr = uglyDate;
	const date = new Date(timeStr);
	const day = date.getDate();
	const year = date.getFullYear();
	const monthIndex = date.getMonth();
	return `${months[monthIndex]} ${day}, ${year}`;
}

export default prettyDate
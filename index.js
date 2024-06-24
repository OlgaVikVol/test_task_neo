function submitData(e) {
	/* Для работы с формой и вывода результата */
	e.preventDefault();
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
	const res = calculate(formProps.sum, formProps.day, formProps.percent, formProps.isCapital);
	document.querySelector('.result').innerHTML = `Ваш доход: ${res} руб`;
}

function calculate(sum, day, percent, isCapital) {
	if (isCapital === 'yes') {
		return (sum * (1 + percent / 100 / 365) ** day - sum).toFixed(2);
	} else {
		return sum * percent * day / 365 /100;
	}
}

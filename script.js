const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle');
xhr.setRequestHeader('x-rapidapi-key', '0391afa6f9mshd7e6070d40cbbc4p16c71fjsn15d0cf1e5a40');
xhr.setRequestHeader('x-rapidapi-host', 'weather-by-api-ninjas.p.rapidapi.com');

xhr.send(data);
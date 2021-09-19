//++WebDev с нуля. Канал Алекса Лущенко   Роутинг на Node.JS #10
//?  https://youtu.be/6IMq2QqBm8Q
//научиться реагировать на запросыи отетысервера
//* Маршрутизация (англ. Routing) — процесс определения маршрута данных в сетях связи.
//--создавать роутинг Для реализации подключим модули url, http
const http = require('http');
const url = require('url');
//---Для понимания адреса, который приходит в запросе, нам нужно сделать парсинг req.url.(код не надо есть ниже)
// http.createServer(function (req, res) {
// 	let urlParts = url.parse(req.url);                                //получаем url адрес
// 	console.log('==========================');
// 	// console.log(urlParts.pathname);
// 	console.log('==========================');
// }).listen(3000);
// console.log("Server running at http://localhost:3000/");

//--Теперь зная urlParts.pathname мы можем выполнять любые действия на сервере(код не надо есть ниже)
// switch (urlParts.pathname) {
// 	case "/":
// 		homepage(req, res);
// 		break;
// 	case "/about":
// 		about(req, res);
// 		break;
// 	default:
// 		page404(req, res);
// 		break;
// }
//---Где homepage, about, page404 - это функции, которые будут реагировать на данные адреса
function homepage(req, res) {
	res.end("homepage");
}
function about(req, res) {
	res.end("about");
}
function page404(req, res) {
	res.end("404");
}
function about2(req, res) {
	res.end("about post");
}
//---Добавим в роутен на нативной node.js возможность реагировать на тип запроса - GET, POST, а на другие запросы отвечать 404. Весь код приложения выглядит так:

http.createServer(function (req, res) {
	let urlParts = url.parse(req.url);
	// console.log(urlParts);
	console.log('==========================');
	// console.log(urlParts.pathname);
	console.log('==========================');
	if (req.method == 'GET') {                               //(req.method == 'GET') - что запросил пользователь
		switch (urlParts.pathname) {
			case "/":                                           // "/" корневая страница
				homepage(req, res);
				break;
			case "/about":
				about(req, res);
				break;
			default:
				page404(req, res);
				break;
		}
	}
	else if (req.method == 'POST') {
		switch (urlParts.pathname) {
			case "/about":
				about2(req, res);
				break;
			default:
				page404(req, res);
				break;
		}
	}
	else {
		page404(req, res);
	}

}).listen(3000);
console.log("Server running at http://localhost:3000/");


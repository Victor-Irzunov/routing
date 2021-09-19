//* Маршрутизация (англ. Routing) — процесс определения маршрута данных в сетях связи.
//--создавать роутинг Для реализации подключим модули url, http
const http = require('http')
const url = require('url')
//---Для понимания адреса, который приходит в запросе, нам нужно сделать парсинг req.url.(код не надо есть ниже)
// http.createServer(function (req, res) {
// 	let urlParts = url.parse(req.url)
	// console.log(urlParts.pathname)
// }).listen(3000)
// console.log("Server running at http://localhost:3000/")
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
	res.end("homepage")
}
function about(req, res) {
	res.end("about")
}
function page404(req, res) {
	res.end("404")
}
function about2(req, res) {
	res.end("about post")
}
//---Добавим в роутен на нативной node.js возможность реагировать на тип запроса - GET, POST, а на другие запросы отвечать 404. Весь код приложения выглядит так:
http.createServer(function (req, res) {
	let urlParts = url.parse(req.url)
	// console.log(urlParts)
	// console.log(urlParts.pathname)
	if (req.method == 'GET') {
		switch (urlParts.pathname) {
			case "/":
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

}).listen(3000)
console.log("Server running at http://localhost:3000/")

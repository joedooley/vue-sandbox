function getPerson() {
	let name = 'Joe'
	let age = 25

	return {
		name,
		age,
		greet() {
			return `Hello, ${this.name}`
		}
	}
}

alert(getPerson().greet())



//Object Destructuring
function greet({ name, age }) {
	console.log(`Hello, ${name}. You are ${age}...`)
}

greet({
	name: 'Joey',
	age: 24
})


//Classes before ES6
function User(username, email) {
	this.username = username
	this.email = email
}

User.prototype.changeEmail = function (newEmail) {
	this.email = newEmail
}

var user = new User('Joe Dooley', 'hello@developingdesigns.com')


console.log(user)




//ES6 Classes
class User2 {
	constructor(username, email) {
		this.username = username
		this.email = email
	}

	static register(...args) {
		console.log(...args)

		return new User2(...args)
	}

	get userEmail() {
		return this.email
	}

	changeEmail(newEmail) {
		this.email = newEmail
	}
}

const user2 = User2.register('Joe Dooley', 'hello@developingdesigns.com')

console.dir(user2)

user2.changeEmail('j@developingdesigns.com')

console.log(user2)

console.dir(user2.userEmail)





// Classes are first class citizens
function log(strategy) {
	strategy.handle()
}

class ConsoleLogger {
	handle() {
		console.dir('Using the strategy to log.')
	}
}

log(new ConsoleLogger())



// ES6 Modules

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


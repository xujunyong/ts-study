class Student {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter (person: Person) {
    return "Hello, " + person.firstName + person.lastName
}

// const user = { firstName: '吴', lastName: '止境' }

const user = new Student('吴', '呆呆', '止境')

document.body.innerHTML = greeter(user);
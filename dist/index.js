"use strict";
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + person.lastName;
}
var user = new Student('吴', '呆呆', '止境');
document.body.innerHTML = greeter(user);
//# sourceMappingURL=index.js.map
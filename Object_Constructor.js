// Constructor
function User(firstName, lastName, IDUser){
    this.firstName = firstName;
    this.lastName = lastName;
    this.IDUser = IDUser;
    // New Function
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var authorize = new User("Jukus", "Yuri", 101);
authorize.title = "Authorization"
authorize.age = "18"
var user = new User("Ellis", "Mike", 403);
user.title = "User"
user.age = "18"
var user2 = new User("Phan", "Hòa", 507);
console.log(authorize, user, user2.getName());

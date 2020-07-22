class User 
{
    constructor(name, age,email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.coins = 0;
    this.courses = [];
}

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    constructor(name, age, email)
    {
        super(name, age, email);
    }

    addCoins(user)
    {
        let coin = parseInt(prompt("Enter the coins to be added."));

        if(coin > 0)
        {
            user.coins += coin;
        }

        console.log(user);
        return user;
    }

    removeCoins(user)
    {
        let coin = parseInt(prompt("Enter the coins to be removed."));

        if(user.coins > 0)
        {
            user.coins -= coin;
            if(user.coins < 0)
            {
                user.coins = 0;
            }
        }

        console.log(user);
        return user;
    }
}

class Admin extends Moderator
{
    constructor(name, age, email)
    {
        super(name, age, email);
    }

    addCourses(user, course)
    {
        user.courses.push(course);
        console.log(user);
        return user;
    }

    removeCourse(user, course)
    {
        user.courses = user.courses.filter(element => element != course);
        console.log(user);
        return user;
    }
}


let user1 = new User("Tharun",20,'tarunskuruvadi@gmail.com');
// user1.login();
// user1.logout();

let mod1 = new Moderator('abhinav',19,'abhi@gmail.com');
// mod1.login();
// user1 = mod1.addCoins(user1);
// user1 = mod1.removeCoins(user1);
// mod1.logout();

let admin1 = new Admin('Jash',26,'jash@gmail.com');
// admin1.login();
// user1 = admin1.addCourses(user1,"PYTHON");
// user1 = admin1.addCourses(user1,"JAVASCRIPT");
// user1 = admin1.removeCourse(user1,"PYHTON");
// admin1.logout();

user1.login();
mod1.login();
user1 = mod1.addCoins(user1);
user1 = mod1.removeCoins(user1);
mod1.logout();
admin1.login();
user1 = admin1.addCourses(user1,"PYTHON");
user1 = admin1.addCourses(user1,"JAVASCRIPT");
user1 = admin1.removeCourse(user1,"PYTHON");
admin1.logout();
user1.logout();
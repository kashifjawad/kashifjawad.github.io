//**************************************************************************** */
// Question Number 1
//**************************************************************************** */

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};
//1- wrapper  arrow function

// askPassword(() => user.loginOk(), () => user.loginFail());

//2-  wrapper function
// askPassword(  function() { user.loginOk()}, function(){ user.loginFail()});

//3- apply
// askPassword(user.loginOk.bind(user),user.loginFail.bind(user));

 //4- call
// askPassword(()=>user.loginOk.call(user),()=>user.loginFail.call(user));

 //5- apply
askPassword(()=>user.loginOk.apply(user),()=>user.loginFail.apply(user));



//**************************************************************************** */
// Question Number 2
//**************************************************************************** */

let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
    
        showList: function() {
            this.students.forEach(function(student) {
                console.log(this.title + ": " + student);
            }.bind(this));
        }
    };
    
     group.showList();
function User(name) {
     // this = {}
     // {}.__proto__ = User.prototype
      this.name = name
       this.myOwnF = function() {}// ❌ dont' do it
     // return {}
}
User.prototype.hello = function () {
     console.log(this.name)
}
User.oldest = (users) => {
     return users[0]
}

class Moderator {
     hello() {}
     static oldest(){}
     myOwnF = function () {} //
     name = 'dimych'
}

const u1 = new User('Dimych')
const u2 = new User('Dimych')
//u1.myOwnF()
u1.hello()
const starper = User.oldest([u1,u2])
const m1 = new Moderator()
const m2 = new Moderator()

//u1.toString()
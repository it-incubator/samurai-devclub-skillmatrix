class ApiService {
     baseUrl = '/api/v1'
     getUsers() {
          console.log('get users from ' + this.baseUrl)
     }
}

const s1 = new ApiService()
const s2 = new ApiService()
s2.baseUrl = '/api/v2'

s1.getUsers()
s2.getUsers()

const user = new Object()
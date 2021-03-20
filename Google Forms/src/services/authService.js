

export default {
  
    isAuthenticated() {
      const token = localStorage.getItem('firstLogin')
        if (token) {
          return true
        } else {
          return false
        }
    },

    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },

    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    },


    getCurrentUser() {
      const user = JSON.parse(localStorage.getItem(`user`))
      // console.log(user)
       return user;
     },
  }
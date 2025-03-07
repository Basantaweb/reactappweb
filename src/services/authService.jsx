const auth = {
    isAuthenticated: false,
    login(email, password, callback) {
      if (email === "admin@example.com" && password === "admin123") {
        auth.isAuthenticated = true;
        callback(true);
      } else {
        callback(false);
      }
    },
    logout(callback) {
      auth.isAuthenticated = false;
      callback();
    },
    isLoggedIn() {
      return auth.isAuthenticated;
    }
  };
  
  export default auth;
  
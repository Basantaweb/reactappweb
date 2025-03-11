const auth = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",

  login(email, password, callback) {
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true"); // ✅ Save to localStorage
      auth.isAuthenticated = true;
      callback(true);
    } else {
      callback(false);
    }
  },

  logout(callback) {
    localStorage.removeItem("isAuthenticated"); // ✅ Remove from localStorage
    auth.isAuthenticated = false;
    callback();
  },

  isLoggedIn() {
    return localStorage.getItem("isAuthenticated") === "true"; // ✅ Check localStorage
  }
};

export default auth;

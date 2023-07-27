// Represents a User class with user information and transaction history
class User {
    // Constructor to initialize the User object
    constructor(userPic, name, email, password, balance, transactionHistory) {
      this.userPic = userPic; // User's profile picture
      this.name = name; // User's name
      this.email = email; // User's email
      this.password = password; // User's password
      this.balance = balance; // User's account balance
      this.transactionHistory = transactionHistory; // Array to store user's transaction history
    }
  }
  
  export default User;
  
  
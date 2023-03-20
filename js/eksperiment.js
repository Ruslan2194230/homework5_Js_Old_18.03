
const Account = function Account({login, email}) {
    this.login = login;
    this.email = email;
    };
  
  Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  
  console.log(Account.prototype.getInfo); // function
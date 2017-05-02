namespace app.Controllers {

  export class RegisterController {
    public newUser;
    public checkPassword;

    static $inject = ['userService', '$state'];

    constructor(private userService, private $state) {
    }

    public createUser() {
      let newUser = {fullName:'', username: '', email: '', password: ''};
      newUser.fullName = this.newUser.fullName;
      newUser.username = this.newUser.username;
      newUser.email = this.newUser.email;
      newUser.password = this.newUser.password;
      this.saveUser(newUser);
    }

    public saveUser(newUser) {
      this.userService.createUser(newUser).then(() => {
        this.$state.go('home');
      }).catch((err) => {
        console.error(err)
      });
    }
  }

}

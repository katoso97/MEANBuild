namespace app.Controllers {

  export class UserController {
    public user;
    public userId;
    public newPassword;
    public newPasswordCheck;

    static $inject = ['userService', 'loginService', '$scope', '$window', '$state', '$stateParams'];

    constructor(private userService, private loginService, private $scope, private $window, private $state, private $stateParams) {
      this.userId = this.$stateParams['id'];
      this.user = this.userService.getUser(this.userId);
    }

    public updateUser() {
      this.userService.saveUser(this.user._id, this.user).then(() => {
        this.$state.go('dashboard', {id: this.user._id});
      }).catch((err) => {
        console.error(err);
      });
    }
    public cancel(){
      this.$state.go('dashboard', {id: this.user._id});
    }

    public deleteAccount() {
      this.userService.deleteUser(this.userId);
      this.loginService.status = false;
      this.$state.go('home');
    }
  }

}

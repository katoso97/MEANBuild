namespace app.Controllers {

  export class DashboardController {
    public user;
    public userId;

    static $inject = ['userService', '$scope', '$window', '$state', '$stateParams'];

    constructor(private userService, private $scope, private $window, private $state, private $stateParams) {
      this.userId = this.$stateParams['id'];
      this.user = this.userService.getUser(this.userId);
    }

    public displayDashboard() {
      this.$state.go('dashboard', {id: this.user._id});
    }

    public displayCreationPage() {
      this.$state.go('createProject', {id: this.user._id});
    }

    public editProfile() {
      this.$state.go('editProfile', {id: this.user._id});
    }
  }

  angular.module('app').controller('dashboardController', DashboardController);

}

namespace app.Controllers{
  export class LoginController{

    static $inject = ['userService', '$scope', '$window'];

    constructor(private userService, private $scope, private $window) {

    }

  }
}

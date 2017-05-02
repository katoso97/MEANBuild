namespace app.Services {

  export class LoginService {
    public status = false;

    static $inject = ['$window'];

    constructor(private $window) {
    }
  }

  angular.module('app').service('loginService', LoginService);

}

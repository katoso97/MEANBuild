namespace app.Services {

  export class UserService {
    private USER_RESOURCE = this.$resource('/api/users/:id', null, {
      'update': { method: 'PUT' }
    });
    public LOGIN_RESOURCE = this.$resource('/api/users/login');

    static $inject = ['$resource', '$window'];

    constructor(private $resource, public $window) {}
    public login(user) {
    return this.LOGIN_RESOURCE.save(user).$promise;
    }
    public getAllUsers() {
      return this.USER_RESOURCE.query();
    }
    public getUser(id) {
      return this.USER_RESOURCE.get({id: id});
    }
    public createUser(user){
      return this.USER_RESOURCE.save(user).$promise;
    }
    public saveUser(id, user) {
      return this.USER_RESOURCE.update({id: user._id}, user).$promise;
    }
    public logout() {
      return this.$window.localStorage.clear();
    }
    public deleteUser(id) {
      return this.USER_RESOURCE.remove({id: id}).$promise;
    }
  }

  angular.module('app').service('userService', UserService);

}

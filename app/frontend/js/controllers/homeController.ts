namespace app.Controllers {

  export class HomeController {
    public features;
    public technologies;
    public users;
    public user;
    public userId;
    // public config = require('./config');

    static $inject = ['$scope', '$window', '$location', '$rootScope', '$auth', '$state', '$stateParams', 'userService'];

    constructor(public $scope, public $window, public $location, public $rootScope, public $auth, public $state, public $stateParams, public userService) {
      // this.users = this.userService.getAllUsers();
      // this.user = { username: '', password: '' }
      this.features = [
        {title: 'Full-stack automation', icon: '../../assets/gfx-c/features/1493099240_Defragmentation.png', link: '/documentation'},
        {title: 'No boilerplate code', icon: '../../assets/gfx-c/features/1493099241_HourGlass.png', link: 'https://github.com/meanbuild'},
        {title: 'Increase your productivity', icon: '../../assets/gfx-c/features/1493099256_Calendar.png', link: '/about'},
        {title: 'Get started today', icon: '../../assets/gfx-c/features/1493099257_Download.png', link: '/register'}
      ];
      this.technologies = [
        {name: 'HTML5', icon: '../../assets/gfx-c/tech/badge-html-5-512.png', link: 'https://www.w3schools.com/html/html5_intro.asp'},
        {name: 'Bootstrap', icon: '../../assets/gfx-c/tech/bootstrap02.png', link: 'http://getbootstrap.com/'},
        {name: 'SASS', icon: '../../assets/gfx-c/tech/sass_2.png', link: 'http://sass-lang.com/'},
        {name: 'jQuery', icon: '../../assets/gfx-c/tech/93002_logo_512x512.png', link: 'https://jquery.com/'},
        {name: 'GulpJS', icon: '../../assets/gfx-c/tech/gulp-2x.png', link: 'http://gulpjs.com/'},
        {name: 'AngularJS', icon: '../../assets/gfx-c/tech/angular.png', link: 'https://angularjs.org/'},
        {name: 'NodeJS', icon: '../../assets/gfx-c/tech/nodejs-new-pantone-black.png', link: 'https://nodejs.org/en/'},
        {name: 'MongoDB', icon: '../../assets/gfx-c/tech/mongodb-logo-1.png', link: 'https://www.mongodb.com/'},
        {name: 'MongoLab', icon: '../../assets/gfx-c/tech/mongolab.png', link: 'https://mlab.com/'},
        {name: 'GitHub', icon: '../../assets/gfx-c/tech/1492471374_git.png', link: 'https://github.com/'}
      ];
    }

    public login(){
      let user = {email: '', password: ''}
      user.email = this.user.email;
      user.password = this.user.password;
      return this.userService.login(user).then((res) => {
        this.$window.localStorage.token = res.token;
        this.$window.localStorage.currentUser = res.user._id;
        console.log("before redirect")
        this.$state.go('dashboard', {id: res.user._id});
        console.log("after redirect");
      })
    }

    public userLogout() {
      return this.userService.logout();
    }


  }

  angular.module('app').controller('homeController', HomeController);

}

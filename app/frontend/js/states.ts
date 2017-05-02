namespace app {

  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'satellizer']).config((
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $authProvider
  ) => {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'controller'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/about.html'
    })
    .state('team', {
      url: '/team',
      templateUrl: '/views/team.html',
      controller: app.Controllers.TeamController,
      controllerAs: 'controller'
    })
    .state('documentation', {
      url: '/documentation',
      templateUrl: '/views/documentation.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: app.Controllers.RegisterController,
      controllerAs: 'controller'
    })
    .state('dashboard', {
      url: '/user/:id/dashboard',
      templateUrl: '/views/dashboard.html',
      controller: app.Controllers.DashboardController,
      controllerAs: 'controller',
      data: {
        requiresAuthentication: true
      }
    })
    .state('editProfile', {
      url: '/user/:id/edit/profile',
      templateUrl: '/views/user.html',
      controller: app.Controllers.UserController,
      controllerAs: 'controller',
      data: {
        requiresAuthentication: true
      }
    })
    .state('createProject', {
      url: '/user/:id/create/project',
      templateUrl: '/views/create.html',
      controller: app.Controllers.CreateController,
      controllerAs: 'controller',
      data: {
        requiresAuthentication: true
      }
    })
    .state('404', {
      url: '/404',
      templateUrl: '/views/404.html'
    });
    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    $urlRouterProvider.otherwise('/404');

    $locationProvider.html5Mode(true);
  });

  // angular.module('app').run((
  //   $rootScope,
  //   $state,
  //   loginService: app.Services.LoginService
  // ) => {
  //   $rootScope.$on('$stateChangeStart', (e, to) => {
  //     // protect non-public views
  //     if (to.data && to.data.requiresAuthentication) {
  //       if (!loginService.status) {
  //         e.preventDefault();
  //         $state.go('home');
  //       }
  //     }
  //   });
  // });

}

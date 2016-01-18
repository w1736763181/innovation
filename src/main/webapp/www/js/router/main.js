var router = angular.module('mainRouter', [
    'ngRoute'
]);

router.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/homepage', {
            controller : 'homepageCtrl',
            templateUrl : 'template/homepage.html'
        })
        .when('/user/register_step1', {
            controller : 'register1Ctrl',
            templateUrl : 'template/user/register_step1.html'
        })
        .when('/user/register_step2', {
            controller : 'register2Ctrl',
            templateUrl : 'template/user/register_step2.html'
        })
        .when('/user/register_step3', {
            controller : 'register3Ctrl',
            templateUrl : 'template/user/register_step3.html'
        })
        .when('/user/register_step4', {
            controller : 'register4Ctrl',
            templateUrl : 'template/user/register_step4.html'
        })
		.when('/user/login', {
            controller : 'loginCtrl',
            templateUrl : 'template/user/login.html'			
		})
		.when('/idea/create', {
            controller : 'ideaCreateCtrl',
            templateUrl : 'template/idea/create.html'			
		})
		.when('/idea/create_step1', {
            controller : 'ideaCreate1Ctrl',
            templateUrl : 'template/idea/create_step1.html'			
		})
		.when('/idea/create_step2', {
            controller : 'ideaCreate2Ctrl',
            templateUrl : 'template/idea/create_step2.html'			
		})
		.when('/idea/create_step3', {
            controller : 'ideaCreate3Ctrl',
            templateUrl : 'template/idea/create_step3.html'			
		})
		.when('/idea/create_step4', {
            controller : 'ideaCreate4Ctrl',
            templateUrl : 'template/idea/create_step4.html'			
		})		
        .otherwise({
            redirectTo : 'homepage'
        });
}]);
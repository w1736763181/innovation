var service = angular.module('mainService', []);

service.constant('DEFAULT_AVATAR', 'img/head.png');
service.constant('ANIMAL_IMAGES', [['img/animals/1giraffe_idea.png','img/animals/2giraffe_designfinish.png','img/animals/3giraffe_readyfordone.png'],
	['img/animals/4lion_idea.png','img/animals/5lion_designfinish.png','img/animals/6lion_readyfordone.png'],
	['img/animals/7monkey_idea.png','img/animals/8monkey_designfinish.png','img/animals/9monkey_readyfordone.png'],
	['img/animals/10eagle_idea.png','img/animals/11eagle_designfinish.png','img/animals/12eagle_readyfordone.png']]);

service.factory('upload', ['$http', function($http) {
	var upload=function(fd,cb){
		$http.post('/pic',fd, {
			withCredentials: true,
			headers: {'Content-Type': undefined },
			transformRequest: angular.identity
		})
		.success(function(data){
			cb(data)
		})
		.error(function(err){
			console.log(err)
		})			
	}

	return {
		upload:upload
	}
}])
.factory('ideaModel',[function(){
	var idea={
		title:'',
		description:'',
		type:'',
		impact:'',
		imgsSrc:[],
		files:[],
	}
	var clear=function(){
		idea.title="";
		idea.description="";
		idea.type="";
		idea.impact="";
		idea.imgsSrc.length=0;
		idea.files.length=0;
	}
	return{
		idea:idea,
		clear:clear
	}
}])
.factory('ideaListModel',[function(){
	//TEST
	var temp_item={
			title:'innovation gomification app',
			id:66,
			author:'lili',
			authorLink:'/user/12',
			like: 8,
			description:'fdsafdsfds fda fdsa fdsaf  da f dsa f dsf a dsf ds f dsa f dsa f dsaf ads fds ',
			src:'https://www.baidu.com/img/bd_logo1.png',	
			type:'/img/animals/4lion_idea.png',	
			date:'2016-01-19 16:22',
			pjState:'1'
		}
		
	var get_list=function(){
		return [
			temp_item,
			angular.copy(temp_item),
			angular.copy(temp_item),
			angular.copy(temp_item),
			angular.copy(temp_item)
		];
	}
	
	return {
		get:get_list
	}
}])
.factory('userMeModel', ['$rootScope',function($rootScope){
	var user={
		isLogin:false,
		model:{},
		login:function(username,pwd){
			//HTTP POST
			//SET COOKIE
			//-----SUCCESS
			this.isLogin=true;		
			this.model={};
		},
		logout:function(){
			this.isLogin=false;
			//HTTP POST 
			//CLEAR COOKIE
		},
		register:function(user){
			this.isLogin=false;
			//HTTP POST
			//----SUCCESS
			this.isLogin=true;
			this.model=user;
		},
		needLogin:function(){
			if(!this.isLogin){
				$rootScope.go('/user/login', 'slideLeft');
			}
		}
	};
	
	return user;
}])
.factory('projectListModel', ['$rootScope',function($rootScope){
	//TEST
	var temp_item={
			title:'innovation gomification app',
			id:66,
			author:'lili',
			authorLink:'/user/12',
			like: 8111,
			description:'fdsafdsfds fda fdsa fdsaf  da f dsa f dsf a dsf ds f dsa f dsa f dsaf ads fds ',
			src:'https://www.baidu.com/img/bd_logo1.png',	
			type:'/img/animals/4lion_idea.png',	
			date:'2016-01-19 16:22',
			pjState:'4'
		}
		
	var get_list=function(){
		return [
			temp_item,
			angular.copy(temp_item),
			angular.copy(temp_item),
			angular.copy(temp_item),
			angular.copy(temp_item)
		];
	}
	
	return {
		get:get_list
	}
}])
.factory('projectCreateModel',[function(){
	var project={
	}
	var clear=function(){

	}
	return{
		project:project,
		clear:clear
	}
}])
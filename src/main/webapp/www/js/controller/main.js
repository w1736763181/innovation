var mainCtcl = angular.module('mainController', []);



mainCtcl.controller('homepageCtrl', ['$scope','userMeModel', function($scope,userMeModel){
	$scope.logInAndOut=function(go,out){
		if(!$scope.isLogin){
			go('/user/login', 'slideLeft');
		}else{
			out();
		}
	}
	$scope.logout=function(){
		userMeModel.logout();
		$scope.isLogin=false;
		$scope.loginOrOut='Login';
	}
	$scope.isLogin=userMeModel.isLogin;
	$scope.loginOrOut=($scope.isLogin?'Logout':'Login')
}])
.controller('register1Ctrl', ['$scope', function($scope){
	//
}])
.controller('register2Ctrl', ['$scope', function($scope){
	//
}])
.controller('register3Ctrl', ['$scope','upload' ,'DEFAULT_AVATAR', function($scope,upload,DEFAULT_AVATAR){
	$scope.imgSrc=DEFAULT_AVATAR;
	
	$scope.uploadFile=function(img){
		var fd = new FormData();
		fd.append('img',img);
		
		upload.upload(fd,function(data){
			$scope.imgSrc='uploads/1.png';
		})
	}

	$scope.clearAndGo=function(fn,a,b){
		$scope.imgSrc=DEFAULT_AVATAR;
		fn(a,b);
	}
}])
.controller('register4Ctrl', ['$scope', function($scope){
	$scope.show=false;
	$scope.save=function(){
		$scope.show=true;
	}
	$scope.fnOk=function(){
		//console.log(1)
	}
	$scope.fnCancel=function(){
		$scope.show=false;
	}	
}])
.controller('loginCtrl', ['$scope', 'DEFAULT_AVATAR','userMeModel', function($scope,DEFAULT_AVATAR,userMeModel){
	$scope.imgSrc=DEFAULT_AVATAR;
	$scope.show=false;
	$scope.login=function(username,pwd){
		userMeModel.login(username,pwd);
		
		$scope.show=true;
		//SUCCESS
		$scope.title="SUCCESS";
		$scope.content="LOGIN SUCCESS!";
		$scope.fnOk=function(go){
			go();
		}
		//FAILED
	}
}])
.controller('ideaCreateCtrl',['ideaModel','$scope', 'userMeModel', function(ideaM,$scope,userMeModel){
	userMeModel.needLogin();
	
	$scope.idea=ideaM.idea;
	
	$scope.remove=function(idx){
		$scope.idea.imgsSrc.splice(idx,1);
	}
	
	$scope.add=function(file){
		console.log(file)
	}	
	
	$scope.change=function(e){
		var file=e.target.files[0];
		if(!file){
			return;
		}
		$scope.idea.files.push(file);
		$scope.idea.imgsSrc.push(URL.createObjectURL(file))
		$scope.$digest()
	}
}])
.controller('ideaListCtrl',['$scope','ideaListModel',function($scope,list){
	$scope.ideaList=list.get();
	$scope.listType=1;
	
}])
.controller('projectListCtrl',['$scope','projectListModel',function($scope,list){
	$scope.projectList=list.get();
	$scope.listType=2;
}])
.controller('projectCreateCtrl',['$scope','projectCreateModel',function($scope,list){
	
}])
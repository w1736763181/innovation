var mainCtcl = angular.module('mainController', []);



mainCtcl.controller('homepageCtrl', [function(){
	
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
.controller('loginCtrl', ['$scope', 'DEFAULT_AVATAR', function($scope,DEFAULT_AVATAR){
	$scope.imgSrc=DEFAULT_AVATAR;
}])
.controller('ideaCreateCtrl',['$scope', function($scope){
	$scope.ideaType='';
}])
.controller('ideaCreate1Ctrl',['$scope', function($scope){

}])
.controller('ideaCreate2Ctrl',['$scope', function($scope){

}])
.controller('ideaCreate3Ctrl',['$scope', function($scope){

}])
.controller('ideaCreate4Ctrl',['$scope', function($scope){

}])
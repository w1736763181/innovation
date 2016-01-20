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
.controller('ideaCreateCtrl',['ideaModel','$scope', function(ideaM,$scope){
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
	
}])
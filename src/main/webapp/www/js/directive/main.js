var direc = angular.module('mainDirective', []);
direc.directive('modal',[function(){
	return {
		restrict: 'AEC',
		templateUrl: 'template/part/modal.html',
		scope:{
			title:'@',
			content:'@',
			ok:'@',
			cancel:'@',
			fnOk:'&',
			fnCancel:'&'
		},
		link:function(scope, element, attrs){
			scope['showOk']=true;
			scope['showCancel']=true;
		}
	}
}])
.directive('navTop',[function(){
	return {
		restrict: 'AE',
		templateUrl: 'template/part/nav.html',
		scope:{
			center:'@',
			left:'@',
			right:'@',
			fnLeft:'&',
			fnRight:'&',
		},
		link:function(scope, element, attrs){
			scope['showLeft']=true;
			scope['showRight']=true;
		}
	}
}])
.directive('changeFile',[function(){
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			var onChangeHandler = scope.$eval(attrs.changeFile);
			element.bind('change',onChangeHandler)
		}
	};
}])
.directive('wrapScroll',[function(){
	return {
		restrict: 'AE',
		link: function (scope, element, attrs) {
			setTimeout(function(){
				var myScroll = new IScroll('#'+attrs.wrapScroll);
			},0) 
			
		}
	};
}])
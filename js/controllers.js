'use strict';

/* Controllers */
var bankUser = angular.module('bankUser',['angular-useragent-parser', 'angular-virtual-keyboard','ngRoute']);


/*{
	$routeProvide
	.when('/',{
		templateUrl:'LYUDANEXTLVL/index.html',
		controller:'bankUserController'
	})
	.when('/something.html',{
		templateUrl:'LYUDANEXTLVL/something.html',
		controller:'FormCtrl'
	})
}]);

bankUser.controller('FormCtrl',function($scope)
{
		$scope.logIn() = function()
		{
			if( ($scope.myForm.cardCode.value === $scope.user.cardnumber.value) && ($scope.myForm.pinCode.value === $scope.user.password.value) )
			{
				$location.path( "#/something.html" );
			}
			else return;
		};

});
*/
bankUser.controller('bankUserController',function($scope,$http)
{
	$scope.title='ДерБанк';
	$scope.userInfo={};
	$http.get('clients.json').success(function(data,status,headers,config)
		{
			$scope.users = data;
		});

	/*Проверка введенных данных*/

	$scope.savedUser=null;
	$scope.enter=function enter(userInfo)
	{
		$scope.savedUser=angular.copy(userInfo);
	};
	/*Конец проверки*/





/*Сабмитим нашу форму*/
function formController($scope){
    $scope.submit=function(){
        alert(angular.toJson($scope.myForm));
    }
}
/*Конец сабмита формы*/

	/*Для ввода номера карты*/
	var cc = myForm.cardcode;
	for (var i in ['input', 'change', 'blur', 'keyup']) {
	    cc.addEventListener('input', formatCardCode, false);
	}
	function formatCardCode() {
	    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
	    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
	    this.value = cardCode;
	}
	/*Конец ввода номера карты*/


	/*Для ввода пин кода карты
	bankUser.directive('autoFocus', function($timeout) {
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            $timeout(function(){
                _element[0].focus();
            }, 0);
        }
    };
	});
	*/


	/*
	$scope.title='Телефоны';
	$scope.phones = [
	 {'name':'Nexus S',
	 'snippet':'Fast just got faster with Nexus S.'},
	 {'name':'Motorola X00M with Wi-Fi',
	 'snippet':'The Next,Next generation tablet.'},
	 {'name':'Motorola X00M',
	 'snippet':'The Next,Next generation tablet'},
	];

	//Filter
	var date = new Date();

	$scope.today = date;

	$scope.doneAndFilter = function(phoneItem)
	{
		return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
	}

	$scope.sortField =undefined;
	$scope.reverse = false;
	$scope.sort = function(fieldName)
	{
		if ($scope.sortField === fieldName) 
			{
				$scope.reverse = !$scope.reverse;
			}
			else{
				$scope.sortField = fieldName;
				$scope.reverse = false;
			}
	};
*/

});



var myapp = angular.module('myapp', []);

myapp.controller('bookController',function($rootScope,$scope){
    $scope.name = "The GodFather";
    $rootScope.book = "book";
});

myapp.controller('homeController',function($scope,$compile){
    $scope.greeting = "Hello";
    $scope.name = "Joe";
    
    var templateString = '<div>{{5 + 10}}</div>';
    var el = angular.element(templateString);
    var l = $compile(el);
    console.log(l);
    
    
});

myapp.controller('relationController',function($scope){
    $scope.greeting = "Hello";
    $scope.name = "Joe";
});



myapp.directive('bookName', function(){
    return{
        restrict:'AE',
        template:'<div>Book Content: {{ name }} {{ book }}</div>',
        scope: false
    }
});


myapp.directive('myDirective', function(){
    return{
        restrict:'EA',
        scope: false,
        template: '<div>{{ greeting }} {{ name }}</div>',
        link:{
            pre:function(scope, ele, attr){
                scope.name = "Anand";
                scope.greeting = "Hi, I am ";
            },
            post:function(scope, ele, attr){
                scope.name = "abc";
                scope.greeting = "Hi, I am ";
            }
        }
    }
});

myapp.directive('dad', function(){
    return {
        restrict:'EA',
        scope:false,
        template:'<div>{{ greeting }} {{ name }}</div><son></son>',
        controller: function(){
            this.name = "KKK";
        },
        link:function(scope, ele, attr, ctrl){
            scope.greeting = "Hi, I am ";
            scope.name = ctrl.name;
        }
    }
});

myapp.directive('son', function(){
    return {
        restrict:'EA',
        scope:false,
        require:'^dad',
        template:'<div>{{ sonSays }} </div>',
        link: function(scope, ele, attr, ctrl){
            scope.sonSays = "Hi, I am son of "+ctrl.name;
        }
    }
});
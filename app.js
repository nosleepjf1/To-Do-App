(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'firebase'])
        .config(function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise("/list");

            $stateProvider
                .state('list', {
                    url: "/list",
                    template: "<list-component></list-component>"
                })
                .state('about', {
                    url: "/about",
                    template: "<about-component></about-component>"
                });
        })


    .filter('upper', function() {

        return function(input) {

            if(typeof input === 'string') {
                var strArray = input.split(' ');
                for (var i = 0; i < strArray.length; i++) {
                    var result = '';
                    for (var j = 0; j < strArray[i].length; j++) {
                        if (j === 0) {
                            var firstLetter = strArray[i][j].toUpperCase();
                            result = firstLetter;
                        }
                        else {
                            var otherLetters = strArray[i][j].toLowerCase();
                            result = result + otherLetters;
                        }
                    }
                    strArray[i] = result;
                }

                var newString = strArray.join(' ');
                return newString;
            }
        }

    });


})();
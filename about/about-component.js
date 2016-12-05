(function(){

    angular.module('myApp')
        .component('aboutComponent', {
            templateUrl: "about/about.html",
            controller: aboutController
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function aboutController() {


    }

})();


(function(){

    angular.module('myApp')
        .component('listComponent', {
            templateUrl: "lists/list.html",
            controller: listController
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function listController(todoService) {
      var self = this;
        //this gives me a reference to the entire service
        self.service = todoService;
        self.lists = self.service.lists;
        self.addList = addList;
        self.selectedList = selectedList;
        self.currentList = self.service.selectedList;
        self.showToast = showToast;
        //self.editClicked = false;
       

        //self.text is initialized to an empty string until someone types in the text box
        self.text = '';

        //this function runs the services addList function and passes in the text for the title
        function addList(){
            if(self.text.length < 1){
                alert("List not created. Please name your list before clicking 'create list' button.")
            }
            else {
                self.service.addList(self.text);
                self.text = "";
            }
        }

        //function editList(list){
        //    self.service.editList(list);
        //}

        function selectedList(list){
           self.currentList = self.service.selectList(list);
        }

        function showToast (item) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(item + ' Added!')
                    .position('top right')
                    .hideDelay(3000)
            );
        }

    }

})();
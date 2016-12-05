(function(){

    angular.module('myApp')
        .component('taskComponent', {
            templateUrl: "tasks/task.html",
            controller: taskController,
            bindings: {
                currentList: '='
            }
        });


    function taskController(todoService) {
        var self = this;
        //this gives me a reference to the entire service
        self.service = todoService;
        self.text = '';
        self.addTask = addTask;
        self.deleteTask = deleteTask;
        self.deleteFinished = deleteFinished;
        self.clicked = clicked;
        var click = 'no';


        function addTask(){
            self.service.addTask(self.text);
            self.text = "";
        }
        function clicked(){
            click = 'yes';
           // document.getElementById('mybutton').innerHTML = '<button class="btn btn-danger" ng-click="$ctrl.deleteFinished($ctrl.currentList);">Delete Finished Task</button>';
        }

        self.goBack = function() {
            self.currentList = self.service.deselectList();

        };

        function deleteTask (task) {
            self.service.deleteTask(task);
        }

        function deleteFinished(currentList) {
            self.service.deleteFinished(currentList);
        }

    }

})();
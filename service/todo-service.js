var stuff;
(function () {

    angular.module('myApp')
        .service('todoService', todoService);

    function todoService($firebaseArray, $q) {
        var self = this;
        var ref = firebase.database().ref().child("list");
        self.lists = $firebaseArray(ref);
        self.selectedList = undefined;
        self.addList = addList;
        self.addTask = addTask;
        self.selectList = selectList;
        self.deselectList = deselectList;
        self.deleteTask = deleteTask;
        self.deleteFinished = deleteFinished;

        function addList(name){
           // console.log(self.selectedList);

            ref.push({name: name});

        }

        function addTask(taskName){
            ref.child(self.selectedList.$id).child('todos').push({todo: taskName, done: false});
        }

        function selectList (list) {
            //console.log(list);
            self.selectedList = list;
           // stuff = list;
            self.selectedList.todos = $firebaseArray(ref.child(list.$id).child('todos'));
            return self.selectedList;
        }

        self.getLists = function() {
            return self.lists;

        };

        function deselectList () {
            self.selectedList = undefined;
            return self.selectedList;
        }

        function deleteTask(task) {
           // console.log(task);
            ref.child(self.selectedList.$id).child('todos').child(task.$id).remove();
        }

        function deleteFinished(currentList){
            console.log(currentList);
            var removedItems = [];
            for (var i = 0; i < currentList.todos.length; i ++) {
                if (currentList.todos[i].done === true) {
                    removedItems.push(currentList.todos[i]);
                }
            }
            for(var i = 0; i < removedItems.length; i++) {
                var index = currentList.todos.indexOf(removedItems[i]);
                currentList.todos.splice(index, 1);
                ref.child(self.selectedList.$id).child('todos').child(i.$id).remove();
            }
            console.log(currentList + "after");
        }

    }

})();



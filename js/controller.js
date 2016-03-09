function TestCtrl(loadTask){
    var vm = this;
    vm.documentsArr = [
        'content://TRACK/d3ababca-4ad0-43c2-aef4-31f723d22b0b',
        'content://TRACK/d74a42f4-dea7-4b08-a6ac-814738d6d9fc',
        'content://TRACK/f0903ea1-a4ef-4709-a910-44d5206a864e',
        'content://TRACK/e653f518-af71-4e8a-84d0-c26208543e25',
        'content://TRACK/8fe5d598-7ebc-47a7-ac8e-3eee86397c3d',
        'content://TRACK/7f10fce2-18cb-4e5d-a9b4-ff99a334bbd4',
        'content://TRACK/810a37ea-d390-4539-b261-1106c2cc7579'
    ];
    vm.getDocument = function(index){
        loadTask.query(vm.documentsArr[index]).then(function(res){
          vm.details = res;
          console.log('ctrl', vm.details)
        })
    }
}
angular.module('app').controller('TestCtrl', TestCtrl);

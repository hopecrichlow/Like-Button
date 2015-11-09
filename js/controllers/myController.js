let MindController = function ($scope) {

  $scope.message = "Likes";
  $scope.count = 0;

  $scope.incramentByOne = function () {
    
    $scope.count = $scope.count + 1;

    $scope.message = ($scope.count === 1) ? "Like" : "Likes";
  };

};

MindController.$inject= ['$scope'];

export default MindController;
﻿//新建数据库
function PlaceUpdateController($scope, $state, $stateParams, SavoryTripManageService) {

    $scope.id = $stateParams.id;

    function place_editable_callback(response) {

        $scope.loaded = true;
        if (response.status != 1) {
            return;
        }

        $scope.item = response.item;
        {
            for (var i = 0; i < $scope.item.timeMachineId.length; i++) {
                if ($scope.item.timeMachineId[i].selected) {
                    $scope.item.time_machine_id_value = $scope.item.timeMachineId[i].timeMachineId;
                    break;
                }
            }
        }
    }

    function place_update_callback(response) {
        if (response.status != 1) {
            swal(response.message);
            return;
        }

        $state.go('app.place-item', { id: $scope.id });
    }

    $scope.confirmUpdate = function () {

        $scope.waiting = true;
        $scope.message = null;

        var request = {};
        request.id = $scope.item.id;
        request.name = $scope.item.name;
        request.longitude = $scope.item.longitude;
        request.latitude = $scope.item.latitude;
        request.timeMachineId = $scope.item.time_machine_id_value;

        SavoryTripManageService.place_update(request).then(place_update_callback)
    }

    {
        var request = {};
        request.id = $scope.id;

        SavoryTripManageService.place_editable(request).then(place_editable_callback);
    }
}

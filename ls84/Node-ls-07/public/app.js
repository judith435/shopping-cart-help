const app = angular.module('file-app', []);

app.controller('upload', function($scope, $http) {
    $scope.file = {};

    $scope.sendFile = function() {
        var formData = new FormData()
        formData.append(name, $scope.file.name)
        formData.append(file, $scope.file.content)

        $http({
            method: 'POST',
            url: '/upload',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: {
               formData
            },
            transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });

                var headers = headersGetter();
                delete headers['Content-Type'];

                return formData;
            }
        })
        .success(function (data) {
            console.log(data);
        })
        .error(function (data, status) {
            console.log(data);
        });

    }
   
});


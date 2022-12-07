app.controller("tours", function ($scope, $window,$location) {
    $scope.tours = [
        {
            name: "HCM_DL",
            lichtrinh: "HCM - DL",
            Thoigian: "3N2D",
            gia: 900,
            NgayKH: "1/1/2022",
            hanh: "da-lat-3019.png",
            ChitietLT: "xxxxxxxx"
        },
        {
            name: "HCM_HA",
            lichtrinh: "HCM - HoiAn",
            Thoigian: "4N3D",
            gia: 5000,
            NgayKH: "1/1/2022",
            hanh: "da-lat-3019.png",
            ChitietLT: "xxxxxxxx"
        },
        {
            name: "HCM_HN",
            lichtrinh: "HCM - HaNoi",
            Thoigian: "7N6D",
            gia: 9000,
            NgayKH: "1/1/2022",
            hanh: "da-lat-3019.png",
            ChitietLT: "xxxxxxxx"
        },
        {
            name: "HCM_CT",
            lichtrinh: "HCM - CanTho",
            Thoigian: "3N2D",
            gia: 1200,
            NgayKH: "1/1/2022",
            hanh: "da-lat-3019.png",
            ChitietLT: "xxxxxxxx"
        }
    
    ];
    $scope.showdetails = function (p) {
       
        $scope.ph = p;
     };
     console.log("test1");
     $scope.tours.forEach(element => {
        if ($location.absUrl().indexOf(element.name) != -1) {
            $scope.tourdetails2 = element;
            $scope.tongtien = $scope.sluong * $scope.tourdetails2.gia
        }
    });
     $scope.accsesstour = function(){
        $window.location.href="booked.html?name="+$scope.ph.name;
        //console.log()
        
     }
  
});

app.controller('validateCtrl', function($scope) {
   
});


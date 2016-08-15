angular.module('starter.controllers', ['ngCordova'])

  .controller('LoginCtrl', function ($scope, $rootScope, parkingappservice) {
    $rootScope.errorMessage = '';
    $scope.login = {};
    $scope.tryLoginVerification = function () {
      if ($scope.login.input != undefined && $scope.login.passkey != undefined) {
        var response = parkingappservice.getLoginVerified($scope.login.input, $scope.login.passkey)
        response.then(function (data) {
          if (Object.keys(data).length > 0) {
            $rootScope.userId = data[0].UserId;
            $rootScope.userName = data[0].UserName;
            $rootScope.userType = data[0].UserType;
            $rootScope.userKey = data[0].UserKey;
            alert("Success" + $rootScope.userId + $rootScope.userName + $rootScope.userType + $rootScope.userKey);
          }
          else {
            alert("Failure");
            $rootScope.errorMessage = "Invalid Credentials. Please try again."
          }
        })
      }
      else {
        alert("Invalid Input");
      }

    };
  })

  .controller('HomeCtrl', function ($scope, $rootScope) {
    $rootScope.errorMessage = '';
    $scope.app = '';
    /*google.maps.event.addDomListener(window, 'load', function () {
      var myLatlng = new google.maps.LatLng(13.082680199999999, 80.2707184);
  
      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
      navigator.geolocation.getCurrentPosition(function (pos) {
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      });
  
      var icons = {
        parking: {
          icon: '../img/ParkingMarker.png'
        }
      };
  
      function addMarker(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
        });
      }
  
      var features = [
        {
          position: new google.maps.LatLng(13.082630199999999, 80.2707184),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(13.082650199999999, 80.2701184),
          type: 'parking'
        }, {
          position: new google.maps.LatLng(13.082680199999999, 80.27031842),
          type: 'parking'
        }
      ];
  
      for (var i = 0, feature; feature = features[i]; i++) {
        addMarker(feature);
      }
  
      $scope.map = map;
    });*/
  })

  .controller('UserCtrl', function ($scope, $rootScope, parkingappservice) {
    $rootScope.errorMessage = '';
    $scope.signup = {};
    $scope.addUserDetails = function () {
      $scope.signup.usertype = 2;
      alert(JSON.stringify($scope.signup));
      if ($scope.signup.username != undefined && $scope.signup.firstname != undefined && $scope.signup.lastname != undefined && $scope.signup.email != undefined && $scope.signup.phoneno != undefined && $scope.signup.password != undefined) {
        return parkingappservice.addUserDetails($scope.signup.username, $scope.signup.phoneno, $scope.signup.firstname, $scope.signup.lastname, $scope.signup.email, $scope.signup.password, $scope.signup.usertype).then(function () {
          alert("Success...!");
        })
      }
      else {
        alert("Input Invalid!");
      }
    };
    $scope.getAllUserDetails = function () {
      return parkingappservice.getAllUserDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getUserDetailsById = function () {
      return parkingappservice.getUserDetailsById()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.deleteUserDetails = function () {
      return parkingappservice.deleteUserDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getUserDetailsByUserType = function () {
      return parkingappservice.getUserDetailsByUserType()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateUserDetails = function () {
      return parkingappservice.updateUserDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
  })

  .controller('VendorCtrl', function ($scope, $rootScope) {
    $rootScope.errorMessage = '';
    $scope.vendor = '';
    $scope.addVendorDetails = function () {
      alert(JSON.stringify($scope.vendor));
      if ($scope.vendor.agencyname != undefined && $scope.vendor.ownername != undefined && $scope.vendor.streetname != undefined && $scope.vendor.area != undefined && $scope.vendor.city != undefined && $scope.vendor.code != undefined && $scope.vendor.landmark != undefined) {
        return parkingappservice.addUserDetails($scope.vendor.username, $scope.vendor.phoneno, $scope.vendor.firstname, $scope.vendor.lastname, $scope.vendor.email, $scope.vendor.password, $scope.vendor.usertype).then(function () {
          alert("Success...!");
        })
      }
      else {
        alert("Input Invalid!");
      }

    };
    $scope.deleteVendorDetails = function () {
      return parkingappservice.deleteVendorDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateVendorDetails = function () {
      return parkingappservice.updateVendorDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getVendorDetailsById = function () {
      return parkingappservice.getVendorDetailsById()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
  })

  .controller('WorkingDaysCtrl', function ($scope, $rootScope) {
    $rootScope.errorMessage = '';
    $scope.serializeData = '';
    $scope.serializaDataFunction = function (checkedMon, checkedTue, checkedWed, checkedThu, checkedFri, checkedSat, checkedSun) {
      $scope.serializeData = '';
      if (checkedMon)
        $scope.serializeData = $scope.serializeData + "Mon,";
      if (checkedTue)
        $scope.serializeData = $scope.serializeData + "Tue,";
      if (checkedWed)
        $scope.serializeData = $scope.serializeData + "Wed,";
      if (checkedThu)
        $scope.serializeData = $scope.serializeData + "Thu,";
      if (checkedFri)
        $scope.serializeData = $scope.serializeData + "Fri,";
      if (checkedSat)
        $scope.serializeData = $scope.serializeData + "Sat,";
      if (checkedSun)
        $scope.serializeData = $scope.serializeData + "Sun";
      //return $scope.serializeData;
    }
    $scope.getWorkdaysById = function () {
      return parkingappservice.getWorkdaysById()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
  })

  .controller('ParkingCtrl', function ($scope, $rootScope, $cordovaGeolocation, $ionicPlatform, parkingappservice, Hours, Minutes) {
    $rootScope.errorMessage = '';
    $scope.hours = Hours.all();
    $scope.mins = Minutes.all();

    $ionicPlatform.ready(function () {
      var posOptions = { timeout: 10000, enableHighAccuracy: true };
      $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
          $scope.coords = position.coords;
        }, function (err) {
          console.log("Get Location Error: " + err)
        });
    });
    /*
    $scope.ackData = false;
    getPosition();
    function getPosition() {

      var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
      }
      //var watchID = 
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

      function onSuccess(position) {
        $scope.latitude = position.coords.latitude;
        $scope.longitude = position.coords.longitude;
      };

      function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
      }
    }*/
    $scope.addParkingLotDetails = function () {
      return parkingappservice.addParkingLotDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.deleteParkingLotDetails = function () {
      return parkingappservice.deleteParkingLotDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateParkingLotDetails = function () {
      return parkingappservice.updateParkingLotDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getParkingLotDetailsById = function () {
      return parkingappservice.getParkingLotDetailsById()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };

  })

  .controller('TariffCtrl', function ($scope, $rootScope, parkingappservice) {
    $rootScope.errorMessage = '';
    $scope.tariff = '';
    $scope.vehicleTypes = [];
    $scope.getListAllVehicleTypes = function () {
      var response = parkingappservice.getListAllVehicleTypes()
      response.then(function (data) {
        $scope.vehicleTypes = data;
      })
        .catch(function (error) {
          if (error) {
            return "Error: Could not get values." + error;
          }
        });
    }
    $scope.getListAllVehicleTypes();

    $scope.addTariffDetails = function () {
      alert(JSON.stringify($scope.tariff));
      if ($scope.tariff.agencyname != undefined && $scope.tariff.ownername != undefined && $scope.tariff.streetname != undefined && $scope.tariff.area != undefined && $scope.tariff.city != undefined && $scope.tariff.code != undefined && $scope.tariff.landmark != undefined) {
        return parkingappservice.addUserDetails($scope.tariff.username, $scope.tariff.phoneno, $scope.tariff.firstname, $scope.tariff.lastname, $scope.tariff.email, $scope.tariff.password, $scope.tariff.usertype).then(function () {
          alert("Success...!");
        })
      }
      else {
        alert("Input Invalid!");
      }
    };
    $scope.deleteTariffDetails = function () {
      return parkingappservice.deleteTariffDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getTariffDetailsByID = function () {
      return parkingappservice.getTariffDetailsByID()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateTariffDetails = function () {
      return parkingappservice.updateTariffDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
  })

  .controller('VehicleCtrl', function ($scope, $rootScope, parkingappservice) {
    $rootScope.errorMessage = '';
    $scope.vehicleTypes = [];
    $scope.vehicleMakes = [];
    $scope.vehicleDescs = [];
    //$scope.users = [];
    //$scope.vehicles = [];
    $scope.getListAllVehicleTypes = function () {
      $scope.vehicleMakes = [];
      $scope.vehicleDescs = [];
      var response = parkingappservice.getListAllVehicleTypes()
      response.then(function (data) {
        $scope.vehicleTypes = data;
      })
        .catch(function (error) {
          if (error) {
            return "Error: Could not get values." + error;
          }
        });
    }
    $scope.getVehicleMakeByVehicleType = function (vehicleType) {
      var response = parkingappservice.getVehicleMakeByVehicleType(vehicleType)
      response.then(function (data) {
        $scope.vehicleMakes = data;
      })
        .catch(function (error) {
          if (error) {
            return "Error: Could not get values." + error;
          }
        });
    }
    $scope.getVehicleDescByVehicleMake = function (vehicleMake) {
      var response = parkingappservice.getVehicleDescByVehicleMake(vehicleMake)
      response.then(function (data) {
        $scope.vehicleDescs = data;
      })
        .catch(function (error) {
          if (error) {
            return "Error: Could not get values." + error;
          }
        });
    }

    $scope.getListAllVehicleTypes();

    $scope.vehicleTypeTrigger = function () {
      $scope.vehicleMakes = [];
      $scope.vehicleDescs = [];
      $scope.getVehicleMakeByVehicleType($scope.vehicleType.vehicle_type_id);
    }

    $scope.vehicleMakeTrigger = function () {
      $scope.vehicleDescs = [];
      if ($scope.vehicleMake) {
        $scope.getVehicleDescByVehicleMake($scope.vehicleMake.vehicle_make);
      }
    }

    $scope.addUserVehicleDetails = function () {
      return parkingappservice.addUserVehicleDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.deleteUserVehicleDetails = function () {
      return parkingappservice.deleteUserVehicleDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getUserVehicleDetailsById = function () {
      return parkingappservice.getUserVehicleDetailsById()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateUserVehicleDetails = function () {
      return parkingappservice.updateUserVehicleDetails()
        .then(function (data) {
          alert("Cntlr " + data);
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
  });
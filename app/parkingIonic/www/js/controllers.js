angular.module('starter.controllers', ['ngCordova'])

  .controller('LoginCtrl', function ($scope, $rootScope, parkingappservice) {
    $rootScope.errorMessage = '';
    $scope.login = {};
    $scope.tryLoginVerification = function () {
      if ($scope.login.input != undefined && $scope.login.passkey != undefined) {
        alert($scope.login.input + " " + $scope.login.passkey)
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

  .controller('HomeCtrl', function ($scope, $rootScope, parkingappservice) {
    $rootScope.errorMessage = '';
    $scope.app = '';
    $scope.getSampleAPI = function () {
      var response = parkingappservice.getSampleAPI(1)
      response.then(function (data) {
        alert(data);
        $scope.sampleAPIData = data;
      })
        .catch(function (error) {
          if (error) {
            return "Error: Could not get values." + error;
          }
        });
    }

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
        alert($scope.signup.username + " " + $scope.signup.phoneno + " " + $scope.signup.firstname + " " + $scope.signup.lastname + " " + $scope.signup.email + " " + $scope.signup.password + " " + $scope.signup.usertype);
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
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getUserDetailsById = function (id) {
      alert(id);
      return parkingappservice.getUserDetailsById(id)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.deleteUserDetails = function (userid, uid, upass) {
      alert(userid + " " + uid + " " + upass);
      return parkingappservice.deleteUserDetails(userid, uid, upass)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getUserDetailsByUserType = function (usertype) {
      alert(usertype);
      return parkingappservice.getUserDetailsByUserType(usertype)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateUserDetails = function (userid, username, phoneno, firstname, lastname, email, userpass, usertype) {
      alert(userid + " " + username + " " + phoneno + " " + firstname + " " + lastname + " " + email + " " + userpass + " " + usertype);
      return parkingappservice.updateUserDetails(userid, username, phoneno, firstname, lastname, email, userpass, usertype)
        .then(function (data) {
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
    $scope.addVendorDetails = function (userid, ownername, owneraddress, ownerlocationid) {
      alert(JSON.stringify($scope.vendor));
      if ($scope.vendor.agencyname != undefined && $scope.vendor.ownername != undefined && $scope.vendor.streetname != undefined && $scope.vendor.area != undefined && $scope.vendor.city != undefined && $scope.vendor.code != undefined && $scope.vendor.landmark != undefined) {
        alert($scope.vendor.username + " " + $scope.vendor.phoneno + " " + $scope.vendor.firstname + " " + $scope.vendor.lastname + " " + $scope.vendor.email + " " + $scope.vendor.password + " " + $scope.vendor.usertype);
        return parkingappservice.addUserDetails($scope.vendor.username, $scope.vendor.phoneno, $scope.vendor.firstname, $scope.vendor.lastname, $scope.vendor.email, $scope.vendor.password, $scope.vendor.usertype).then(function () {
          alert("Success...!");
        })
      }
      else {
        alert("Input Invalid!");
      }

    };
    $scope.deleteVendorDetails = function (vendorid, uid, upass) {
      alert(vendorid + " " + uid + " " + upass);
      return parkingappservice.deleteVendorDetails(vendorid, uid, upass)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateVendorDetails = function (vendorid, userid, ownername, owneraddress, ownerlocationid) {
      alert(vendorid + " " + userid + " " + ownername + " " + owneraddress + " " + ownerlocationid);
      return parkingappservice.updateVendorDetails(vendorid, userid, ownername, owneraddress, ownerlocationid)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getVendorDetailsById = function (vendorid) {
      alert(vendorid);
      return parkingappservice.getVendorDetailsById(vendorid)
        .then(function (data) {
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
    $scope.getWorkdaysById = function (workdaysid) {
      alert(workdaysid);
      return parkingappservice.getWorkdaysById(workdaysid)
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
    $scope.ackData = false;
    $ionicPlatform.ready(function () {
      var posOptions = { timeout: 10000, enableHighAccuracy: true };
      $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
          $scope.coords = position.coords;
        }, function (err) {
          console.log("Get Location Error: " + err)
        });
    });
    $scope.addParkingLotDetails = function (parking_name, parking_vendor_id, parking_loc_id, parking_tariff_id, parking_slots, parking_from_time, parking_to_time, parking_workdays_id, parking_managed_status) {
      alert(parking_name + " " + parking_vendor_id + " " + parking_loc_id + " " + parking_tariff_id + " " + parking_slots + " " + parking_from_time + " " + parking_to_time + " " + parking_workdays_id + " " + parking_managed_status);
      return parkingappservice.addParkingLotDetails(parking_name, parking_vendor_id, parking_loc_id, parking_tariff_id, parking_slots, parking_from_time, parking_to_time, parking_workdays_id, parking_managed_status)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.deleteParkingLotDetails = function (parkingid, uid, upass) {
      alert(parkingid + " " + uid + " " + upass);
      return parkingappservice.deleteParkingLotDetails(parkingid, uid, upass)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateParkingLotDetails = function (parkingid, parking_vendor_id, parking_name, parking_loc_id, parking_tariff_id, parking_slots, parking_from_time, parking_to_time, parking_workdays_id, parking_managed_status) {
      alert(parkingid + " " + parking_vendor_id + " " + parking_name + " " + parking_loc_id + " " + parking_tariff_id + " " + parking_slots + " " + parking_from_time + " " + parking_to_time + " " + parking_workdays_id + " " + parking_managed_status);
      return parkingappservice.updateParkingLotDetails(parkingid, parking_vendor_id, parking_name, parking_loc_id, parking_tariff_id, parking_slots, parking_from_time, parking_to_time, parking_workdays_id, parking_managed_status)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getParkingLotDetailsById = function (parkingid) {
      alert(parkingid);
      return parkingappservice.getParkingLotDetailsById(parkingid)
        .then(function (data) {
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

    $scope.addTariffDetails = function (locationid, vehicletypeid, tariffamount) {
      alert(JSON.stringify($scope.tariff));
      if ($scope.tariff.locationid != undefined && $scope.tariff.vehicletypeid != undefined && $scope.tariff.tariffamount != undefined) {
        alert(locationid + " " + vehicletypeid + " " + tariffamount);
        return parkingappservice.addUserDetails(locationid, vehicletypeid, tariffamount)
          .then(function () {
            alert("Success...!");
          })
      }
      else {
        alert("Input Invalid!");
      }
    };
    $scope.deleteTariffDetails = function (tariffid, uid, upass) {
      alert(tariffid + " " + uid + " " + upass);
      return parkingappservice.deleteTariffDetails(tariffid, uid, upass)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getTariffDetailsByID = function (tariffid) {
      alert(tariffid);
      return parkingappservice.getTariffDetailsByID(tariffid)
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateTariffDetails = function (tariffid, locationid, vehicletypeid, tariffamount) {
      alert(tariffid + " " + locationid + " " + vehicletypeid + " " + tariffamount);
      return parkingappservice.updateTariffDetails(tariffid, locationid, vehicletypeid, tariffamount)
        .then(function (data) {
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
      alert(vehicleType);
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
      alert(vehicleMake);
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

    $scope.addUserVehicleDetails = function (userid, vehicledimensionid, regnum) {
      alert(userid + " " + vehicledimensionid + " " + regnum);
      return parkingappservice.addUserVehicleDetails(userid, vehicledimensionid, regnum)
        .then(function (data) {          
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.deleteUserVehicleDetails = function (userid, carid, uid, upass) {
      alert(userid + " " + carid + " " + uid + " " + upass);
      return parkingappservice.deleteUserVehicleDetails(userid, carid, uid, upass)
        .then(function (data) {          
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.getUserVehicleDetailsById = function (uservehicleid) {
      alert(uservehicleid);
      return parkingappservice.getUserVehicleDetailsById(uservehicleid)
        .then(function (data) {          
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
    $scope.updateUserVehicleDetails = function (userid, carid, vehicledimensionid, regnum) {
      alert(userid + " " + carid + " " + vehicledimensionid + " " + regnum);
      return parkingappservice.updateUserVehicleDetails(userid, carid, vehicledimensionid, regnum)
        .then(function (data) {          
          return data;
        })
        .catch(function (error) {
          if (error) {
            alert("Error: Could not get values." + error);
          }
        });
    };
  });
'use strict';

var url = function(i) {
    var ct = encodeURIComponent('application/vnd.Collection.hyperadmin.angularclient+JSON');
    return [i, '?_HTTP_ACCEPT=', ct].join('');
};

angular.module('userServices', ['ngResource']).
    factory('crudSourceService', function($resource){
        return $resource(url('/hyperapi/:app/:resource/'), {
            app: '@app', resource: '@resource'
        }, {
            query: {method:'GET', params:{}, isArray: false},
            //headers : {'Accept': 'application/vnd.Collection.hyperadmin.angularclient+JSON'}
        });
    }).
    factory('resourceListingService', function($resource){
        return $resource(url('/hyperapi/:app/:resource/'), {
            app: '@app', resource: '@resource'
        }, {
            query: {method:'GET', params:{}, isArray: false},
            //headers : {'Accept': 'application/vnd.Collection.hyperadmin.angularclient+JSON'}
        });
    });

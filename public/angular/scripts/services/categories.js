'use strict';

/**
 * @ngdoc service
 * @name dcsUiApp.categories
 * @description
 * # categories
 * Service in the dcsUiApp.
 */
angular.module('dcsUiApp')
  .service('Categories', function($http) {
	var api_url = '/api/categories';
	var apiObject = {
		getAll: function(cat_id) {
			return $http.get(api_url)
			.then(function(response) {
				return response;
			});
		},
		getById: function(req) {
			return $http.get(api_url + req.id)
			.then(function(response) {
				return response;
			});
		},
		getByParentId: function(parentId) {
			return $http.get(api_url + parentId)
			.then(function(response) {
				return response;
			});
		},
		addNew: function(req) {
			return $http({
				url: api_url,
				method: 'POST',
				req: req,
				cache: false
			}).then(function(response) {
				return response;
			});
		},
		update: function(req) {
			return $http({
				url: api_url + req.id,
				method: 'PUT',
				req: req,
				cache: false
			}).then(function(response) {
				return response;
			});
		},
		delete: function(req) {
			return $http({
				url: api_url + req.id,
				method: 'DELETE',
				req: req,
				cache: false
			}).then(function(response) {
				return response;
			});
		}
	}
	return apiObject;
  });

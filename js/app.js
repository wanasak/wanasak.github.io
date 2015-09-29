(function() {
	'use strict';

	var app = angular.module('application', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('index', {
					url: '/',
					template: 'index.html'
				});
		});

	app.controller('mainController', function() {

	});
})
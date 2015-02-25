(function() {
	var phones = [{
		name: 'iphone',
		price: 100,
		image: 'assets/img/iphone.jpg',
		available: 0
	}, {
		name: 'mi4',
		price: 50,
		image: 'assets/img/mi4.jpg',
		available: 5
	}, {
		name: 'oneplus',
		price: 55,
		image: 'assets/img/one.jpg',
		available: 9
	}];


	var app = angular.module('myapp', []);
	app.controller('StoreListing', function() {
		this.products = phones;
	});

	app.directive('singleProduct', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/views/single-product.html'
			};
		})
		.directive('header', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/views/header.html'
			};
		})
		.directive("footer",function(){
			return {
				restrict: 'E',
				templateUrl: 'app/views/footer.html'
			};
		});
})();
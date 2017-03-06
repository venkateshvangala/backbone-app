define(['jquery', 'backbone',  'js/view/product-detailed-page', 'js/model/product-detail-model'],
function($, Backbone, ProductDetailedPageView, ProductDetailModel){
	var self, Router = Backbone.Router.extend({
		initialize : function() {
			self = this;
			Backbone.history.start();
 		},

		routes : {
			'*default' 	: 'productDetailRoute'
		},

		productDetailRoute : function() {
			this.beforeProductDetailRoute(function() {
				self.productDetailedPageView.render();
			});
		},

 		beforeProductDetailRoute : function(callback) {
			this.productDetailModel = new ProductDetailModel();
 			this.productDetailedPageView = new ProductDetailedPageView({
				model  : this.productDetailModel
 			});
 			callback();
   		},
 		 
	});
	return Router;
});

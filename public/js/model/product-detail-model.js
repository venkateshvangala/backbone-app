define(['jquery', 'backbone'], 
	function($, Backbone) {
	var ProductDetailModel = Backbone.Model.extend({
        defaults:{
	        imageUrl 	: 'public/img/shirt.jpg',
	        item	  	: 'T Shirt(fully cotton)',
	        quantity    : '2',
	        color       : 'green',
			size		: 'l',
			address: {
				addr1: '',
				addr2: '',
				city: '',
				state: '',
				pincode: ''
			}
	    }
    });
    return ProductDetailModel;
});

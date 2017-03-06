
define(['jquery', 'backbone', 'handlebars',  'text!template/product-detail.html',  'text!template/product-info.html'], 
function($, Backbone, Handlebars, ProductDetailTemplate, ProductInfoTemplate){
  ProductDetailedPageView = Backbone.View.extend({
    
    el : 'body',

    events: {
      'click #submit-product': 'checkoutProduct',
      'click #finish-product': 'finishProduct'
    },
    
    initialize : function() {
       this.model.bind('reset', this.render, this);
       Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if(v1 === v2) {
          return options.fn(this);
        }
        return options.inverse(this);
      });
    },

    checkoutProduct: function(event){
      $(event.target).addClass("inactive");
      this.model.set({
        color: $(".color").find(":selected").text().trim(),
        size: $(".size").find(":selected").text().trim(),
        quantity: $(".quantity").val().trim()
      });
      $(".address-details-container").removeClass("inactive");
    },

    validateAddress: function(){
       if($(".pincode").val() == ""){
          alert("Please enter pincode");
          return false;
      }
      if($(".state").val() == ""){
          alert("Please enter state");
          return false;
      }
      return true;
    },

    finishProduct: function(event){
      if(this.validateAddress()){
        this.model.set({
          address: {
            addr1: $(".addr1").val().trim(),
            addr2: $(".addr2").val().trim(),
            city: $(".city").val().trim(),
            state: $(".state").val().trim(),
            pincode: $(".pincode").val().trim()
          }
        });
        var template = Handlebars.compile(ProductInfoTemplate);
        $(this.el).find("#main-container").html(template(this.model.toJSON()));
      }
    },
 
    render	: function(){
      var productDetails = this.model.toJSON();
      var template = Handlebars.compile(ProductDetailTemplate);
      $(this.el).find("#main-container").html(template(productDetails));
    }

  });
 return ProductDetailedPageView;
});


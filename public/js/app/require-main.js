require.config({
  
   paths	: {
	      modernizr		   : "js/lib/modernizr-2.5.3",
 	      jquery		   : "js/lib/jquery-1.8.2.min",
 	      underscore	   : "js/lib/lodash-0.2.1",
	      backbone		   : "js/lib/backbone",
	      bootstrap		   : "jslib/bootstrap.min",
   	    handlebars	       : "js/lib/handlebars",
	      text			   : "js/lib/text-2.0.0",
	      noty			   : "js/lib/jquery.noty",
   },
  
   baseUrl: 'public/',

   shim: {

      "backbone" : {
          deps    : ["underscore", "jquery"],
          exports : "Backbone"   
      },
     
      "underscore" : {
          exports : "_"  
      },
        
      "handlebars" : {
          exports: "Handlebars"  
      },

      "noty" : {
    	  exports : "Noty"
      }
  } 
});

require(['modernizr', 'jquery', 'backbone', 'noty', 'js/controller/product-router'], 
    function(Modernizr, $, Backbone, Noty, Desktop) {
        this.router = new Desktop();
});
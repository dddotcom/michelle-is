"use strict";define("michelle-is/app",["exports","ember","michelle-is/resolver","ember-load-initializers","michelle-is/config/environment"],function(e,t,a,n,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(i,r.default.modulePrefix),e.default=i}),define("michelle-is/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("michelle-is/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("michelle-is/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("michelle-is/helpers/app-version",["exports","ember","michelle-is/config/environment"],function(e,t,a){function n(){return r}e.appVersion=n;var r=a.default.APP.version;e.default=t.default.Helper.helper(n)}),define("michelle-is/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("michelle-is/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("michelle-is/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","michelle-is/config/environment"],function(e,t,a){var n=a.default.APP,r=n.name,i=n.version;e.default={name:"App Version",initialize:(0,t.default)(r,i)}}),define("michelle-is/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("michelle-is/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("michelle-is/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("michelle-is/initializers/export-application-global",["exports","ember","michelle-is/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var r,i=a.default.exportApplicationGlobal;r="string"==typeof i?i:t.default.String.classify(a.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("michelle-is/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("michelle-is/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("michelle-is/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("michelle-is/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("michelle-is/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("michelle-is/router",["exports","ember","michelle-is/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});n.map(function(){this.route("about"),this.route("musings")}),e.default=n}),define("michelle-is/routes/about",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("michelle-is/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({redirect:function(){this.transitionTo("about")}})}),define("michelle-is/routes/musings",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("michelle-is/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("michelle-is/templates/about",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:1,column:0},end:{line:52,column:0}},moduleName:"michelle-is/templates/about.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","jumbotron");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-7");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("img");e.setAttribute(d,"class","mySlides"),e.setAttribute(d,"src","images/Michelle-32.jpeg"),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-5");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("An east coast native, Michelle Ortega\n          is a Los Angeles-based artist and\n          writer. The projects she relentlessly\n          pursues celebrate the human spirit\n          and a deep desire to uncover what\n          it means to lead a life well-lived.");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("br");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("Currently, Michelle is the Community\n          Lead and Thought Partner at Maitri\n          Yoga Store, a lifestyle boutique\n          in Culver City, CA.");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("br");e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("Prior to her current ventures, Michelle\n          was an Advertising Executive in\n          New York City.");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("br");e.appendChild(i,d);var d=e.createTextNode("\n\n        ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","row text-center icons-group");var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("div");e.setAttribute(l,"class","col-xs-3");var p=e.createTextNode("\n            ");e.appendChild(l,p);var p=e.createElement("p"),o=e.createTextNode("\n              ");e.appendChild(p,o);var o=e.createElement("a");e.setAttribute(o,"href","https://www.facebook.com/michortega"),e.setAttribute(o,"target","_blank");var c=e.createElement("i");e.setAttribute(c,"class","fa fa-facebook-official fa-lg icon-color icon"),e.appendChild(o,c),e.appendChild(p,o);var o=e.createTextNode("\n            ");e.appendChild(p,o),e.appendChild(l,p);var p=e.createTextNode("\n          ");e.appendChild(l,p),e.appendChild(d,l);var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("div");e.setAttribute(l,"class","col-xs-3");var p=e.createTextNode("\n            ");e.appendChild(l,p);var p=e.createElement("p"),o=e.createTextNode("\n              ");e.appendChild(p,o);var o=e.createElement("a");e.setAttribute(o,"href","https://medium.com/@michelleortega"),e.setAttribute(o,"target","_blank");var c=e.createElement("i");e.setAttribute(c,"class","fa fa-medium fa-lg icon-color icon"),e.appendChild(o,c),e.appendChild(p,o);var o=e.createTextNode("\n            ");e.appendChild(p,o),e.appendChild(l,p);var p=e.createTextNode("\n          ");e.appendChild(l,p),e.appendChild(d,l);var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("div");e.setAttribute(l,"class","col-xs-3");var p=e.createTextNode("\n            ");e.appendChild(l,p);var p=e.createElement("p"),o=e.createTextNode("\n              ");e.appendChild(p,o);var o=e.createElement("a");e.setAttribute(o,"href","https://www.instagram.com/michwoman/"),e.setAttribute(o,"target","_blank");var c=e.createElement("i");e.setAttribute(c,"class","fa fa-instagram fa-lg icon-color icon"),e.appendChild(o,c),e.appendChild(p,o);var o=e.createTextNode("\n            ");e.appendChild(p,o),e.appendChild(l,p);var p=e.createTextNode("\n          ");e.appendChild(l,p),e.appendChild(d,l);var l=e.createTextNode("\n          ");e.appendChild(d,l);var l=e.createElement("div");e.setAttribute(l,"class","col-xs-3");var p=e.createTextNode("\n            ");e.appendChild(l,p);var p=e.createElement("p"),o=e.createTextNode("\n              ");e.appendChild(p,o);var o=e.createElement("a");e.setAttribute(o,"href","https://www.linkedin.com/in/michortega"),e.setAttribute(o,"target","_blank");var c=e.createElement("i");e.setAttribute(c,"class","fa fa-linkedin-square fa-lg icon-color icon"),e.appendChild(o,c),e.appendChild(p,o);var o=e.createTextNode("\n            ");e.appendChild(p,o),e.appendChild(l,p);var p=e.createTextNode("\n          ");e.appendChild(l,p),e.appendChild(d,l);var l=e.createTextNode("\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("michelle-is/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:6,column:6},end:{line:8,column:6}},moduleName:"michelle-is/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"href","");var n=e.createElement("span");e.setAttribute(n,"class","glyphicon glyphicon-home"),e.appendChild(a,n);var n=e.createTextNode(" About");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:9,column:6},end:{line:11,column:6}},moduleName:"michelle-is/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"href","");var n=e.createElement("span");e.setAttribute(n,"class","glyphicon glyphicon-pencil"),e.appendChild(a,n);var n=e.createTextNode(" Musings");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:1,column:0},end:{line:31,column:0}},moduleName:"michelle-is/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment(' <nav class="navbar navbar-default navbar-static-top navbar-inverse"> ');e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("nav");e.setAttribute(a,"class","navbar navbar-default navbar-static-top");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h1");e.setAttribute(r,"class","homepage");var i=e.createTextNode("BODY + SOUL ");e.appendChild(r,i);var i=e.createElement("small"),d=e.createTextNode("live beyond yourself");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("ul");e.setAttribute(r,"class","nav navbar-nav homenav");var i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("      ");e.appendChild(r,i);var i=e.createElement("li"),d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","mailto:michelle.ortegaa@gmail.com?Subject=Hello%20from%20michelleortega.is!"),e.setAttribute(d,"target","_top");var l=e.createElement("span");e.setAttribute(l,"class","glyphicon glyphicon-envelope"),e.appendChild(d,l);var l=e.createTextNode(" Contact");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createComment(' <li>\n        <a href="/"><span class="glyphicon glyphicon-book"></span> Blog</a>\n      </li>');e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","wrap");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","main");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","footer"),e.setAttribute(a,"class","footer text-center");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("made with ♥ by ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"target","_blank"),e.setAttribute(r,"href","https://github.com/dddotcom"),e.setAttribute(r,"class","icon-color");var i=e.createTextNode("dddotcom");e.appendChild(r,i),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2,1,3]),r=new Array(3);return r[0]=e.createMorphAt(n,1,1),r[1]=e.createMorphAt(n,2,2),r[2]=e.createMorphAt(e.childAt(t,[4,1]),1,1),r},statements:[["block","link-to",["about"],["tagName","li"],0,null,["loc",[null,[6,6],[8,18]]]],["block","link-to",["musings"],["tagName","li"],1,null,["loc",[null,[9,6],[11,18]]]],["content","outlet",["loc",[null,[24,0],[24,10]]],0,0,0,0]],locals:[],templates:[e,t]}}())}),define("michelle-is/templates/musings",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:1,column:0},end:{line:70,column:0}},moduleName:"michelle-is/templates/musings.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","jumbotron");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-5");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("h4"),l=e.createTextNode("Big Sur, beauty");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          The waves crash and the rolling tide");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          brings me back");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          to you\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          Clear, starry night");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          Lights and lines touch the sky");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          I am yours");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          Searching for our shooting star");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-2");var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-5");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("h4"),l=e.createTextNode("She");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          Soul-centered source of internal light and power.");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          An extraordinary being, she speaks with bold enthusiasm and truth.");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          She is magic–made of sacred devotion, compassion and joy.");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          She is love–united with mind, body and spirit.");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          She remains open to the expanding universe.");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n          She is becoming.");e.appendChild(d,l);var l=e.createElement("br");e.appendChild(d,l);var l=e.createTextNode("\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","row padded-row");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-5");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("h4"),l=e.createTextNode("Chance vs. choice");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          There's so many distractions in our every\n          day lives - so many paths one could\n          go down. How do you choose? You\n          have to commit, I suppose. Just\n          pick.\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          But how do you know if it's the right thing\n          to do? Well, you don't. And therein\n          lies the problem - the paradox\n          of choice. The decision to stay.\n          Or to go.\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          The decision to reach out, or stay silent.\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-2");var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-5");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("h4"),l=e.createTextNode("No one else");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          It is me who needs myself the most and me\n          who I can turn to count on and\n          look to for deep and inner healing.\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("p"),l=e.createTextNode("\n          Be kind to yourself.\n        ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("michelle-is/config/environment",["ember"],function(e){var t="michelle-is";try{var a=t+"/config/environment",n=document.querySelector('meta[name="'+a+'"]').getAttribute("content"),r=JSON.parse(unescape(n)),i={default:r};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("michelle-is/app").default.create({name:"michelle-is",version:"0.0.1+9dfe1642"});
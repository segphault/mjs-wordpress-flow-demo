montageDefine("256bd30","core/wordpress-connector",{dependencies:["montage/core/core","reqwest","montage"],factory:function(e,t){var n=e("montage/core/core").Montage,i=e("reqwest");t.WordpressConnector=n.specialize({constructor:{value:function(){this.addPathChangeListener("host",this,"_makeRequest"),this.addPathChangeListener("path",this,"_makeRequest"),this.addPathChangeListener("categoryFilter",this,"_makeRequest")}},host:{value:null},path:{value:null},categoryFilter:{value:null},posts:{value:null},_latestRequest:{value:null},_makeRequest:{value:function(){if(this.host&&this.path){var e,t,n="http://"+this.host+"/wp-json/"+this.path+"?_jsonp=cb",r=this;this.categoryFilter&&(t={"filter[category_name]":this.categoryFilter},n+="&"+i.toQueryString(t)),e=this._latestRequest=i({url:n,type:"jsonp",method:"get",jsonpCallback:"_jsonp",jsonpCallbackName:"cb"}).then(function(t){e===r._latestRequest&&(r.posts=t)})}}}},{blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});
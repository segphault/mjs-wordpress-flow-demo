/**
 * @module ui/wordpress.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Reqwest = require("reqwest");

/**
 * @class Wordpress
 * @extends Component
 */
exports.Wordpress = Component.specialize(/** @lends Wordpress# */ {
    constructor: {
        value: function Wordpress() {
            this.super();
        }
    },
    
    templateDidLoad: {
        value: function() {
            this.loadContent();
            this.addPathChangeListener("selectedPost", this, "handleSelection");
        }
    },

    handlePostButtonAction: {
        value: function() {
            var blog = document.querySelector("#blog-post")
            blog.style.opacity = 0;

            document.querySelector(".js-card.selected").classList.remove("selected");

            var self = this;
            window.setTimeout(function() {
                blog.style.zIndex = 0;
                self.templateObjects.rangeController.clearSelection();
            }, 1000);
        }
    },

    handleSelection: {
        value: function(post) {
            if (!post) return;

            window.setTimeout(function() {
                var blog = document.getElementById("blog-post")
                blog.style.opacity = 1;
                blog.style.zIndex = 15;
            }, 1200);
        }
    },

    makeRequest: {
        value: function(address, path, query) {
            var url = "http://" + address + "/wp-json/" + path + "?_jsonp=cb";
            if (query) url += "&" + Reqwest.toQueryString(query);

            return Reqwest({url: url, type: "jsonp", method: "get", 
                            jsonpCallback: "_jsonp", jsonpCallbackName: "cb"});
        }
    },

    loadContent: {
        value: function()  {
            var params = {"filter[category_name]": "featured"};
            var request = this.makeRequest(this.siteAddress, "posts", params);

            var self = this;
            request.then(function(output) { self.items = output; });
        }
    }
});

/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function(firstTime) {
            if (firstTime) {
                this.addPathChangeListener("selectedPost", this, "handleSelection");
            }
        }
    },

    articlesController: {
        value: null
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
    }
});

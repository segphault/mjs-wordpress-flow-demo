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
                this.addPathChangeListener("selectedPost", this, "revealPost");
            }
        }
    },
    
    revealPost: {
        value: function () {
            
            if (0 === this.templateObjects.articlesController.selection.length) {
                return;
            }
            
            window.setTimeout(function() {
                var blog = document.getElementById("blog-post")
                blog.style.opacity = 1;
                blog.style.zIndex = 15;
            }, 1200);
        }
    },
    
    hidePost: {
        value: function() {
            
            if (this.templateObjects.articlesController.selection.length === 0) {
                return;
            }
            
            var blog = document.querySelector("#blog-post")
            blog.style.opacity = 0;

            document.querySelector(".js-card.selected").classList.remove("selected");

            var self = this;
            window.setTimeout(function() {
                blog.style.zIndex = 0;
                self.templateObjects.articlesController.clearSelection();
            }, 1000);
        }
    }
});

/**
 * @module ui/header.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Header
 * @extends Component
 */
exports.Header = Component.specialize(/** @lends Header# */ {
    constructor: {
        value: function Header() {
            this.super();
        }
    },
    handleCloseButtonAction: {
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
    }
});

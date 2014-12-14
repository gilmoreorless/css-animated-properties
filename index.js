/*!
 * https://github.com/gilmoreorless/css-animated-properties
 * MIT Licensed: http://gilmoreorless.mit-license.org/
 */
(function (exports) {
    /**
     * Data collated from multiple W3C specs: http://www.w3.org/Style/CSS/current-work
     * Only specs that are Candidate Recommendations or better are counted, with the
     * exception of some Working Drafts that have a lot of traction in browser implementations.
     * So far the WD specs included here are Text Level 3, Flexbox and Transforms.
     *
     * If a property is not in this list, it's not able to be consistently animated.
     * Technically `background-image` can be animated in some ways, but against the spec.
     *
     * @type {Object}
     */
    var props = exports.animatedProperties = {

        /*** Recommendations (REC) ***/

        // CSS 2.1: http://www.w3.org/TR/css3-transitions/#animatable-types
        // --Box model
        'margin': {properties: ['margin-top', 'margin-right', 'margin-bottom', 'margin-left']},
        'margin-bottom': {types: ['length']},
        'margin-left': {types: ['length']},
        'margin-right': {types: ['length']},
        'margin-top': {types: ['length']},
        'padding': {properties: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left']},
        'padding-bottom': {types: ['length']},
        'padding-left': {types: ['length']},
        'padding-right': {types: ['length']},
        'padding-top': {types: ['length']},
        // --Visual formatting model
        'bottom': {types: ['length-percentage-calc']},
        'left': {types: ['length-percentage-calc']},
        'right': {types: ['length-percentage-calc']},
        'top': {types: ['length-percentage-calc']},
        'z-index': {types: ['integer']},
        // --Visual formatting model details
        'width': {types: ['length-percentage-calc']},
        'max-width': {types: ['length-percentage-calc']},
        'min-width': {types: ['length-percentage-calc']},
        'height': {types: ['length-percentage-calc']},
        'max-height': {types: ['length-percentage-calc']},
        'min-height': {types: ['length-percentage-calc']},
        'line-height': {types: ['number', 'length']},
        'vertical-align': {types: ['length']},
        // --Visual effects
        'visibility': {types: ['visibility']},
        // --Tables
        'border-spacing': {types: ['length'], multiple: true},

        // CSS Color Module Level 3: http://www.w3.org/TR/css3-color/
        'color': {types: ['color']},
        'opacity': {types: ['number']},


        /*** Candidate Recommendations (CR) ***/

        // CSS Backgrounds and Borders Module Level 3: http://www.w3.org/TR/css3-background/
        'background': {properties: ['background-color', 'background-position', 'background-size']},
        'background-color': {types: ['color']},
        'background-position': {types: ['length-percentage-calc'], multiple: true, repeatable: true},
        'background-size': {types: ['length-percentage-calc'], multiple: true, repeatable: true},
        // --Border combinations
        'border': {properties: ['border-color', 'border-width']},
        'border-bottom': {properties: ['border-bottom-color', 'border-bottom-width']},
        'border-left': {properties: ['border-left-color', 'border-left-width']},
        'border-right': {properties: ['border-right-color', 'border-right-width']},
        'border-top': {properties: ['border-top-color', 'border-top-width']},
        'border-color': {properties: ['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color']},
        'border-width': {properties: ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width']},
        // --Border details
        'border-bottom-color': {types: ['color']},
        'border-left-color': {types: ['color']},
        'border-right-color': {types: ['color']},
        'border-top-color': {types: ['color']},
        'border-bottom-width': {types: ['length']},
        'border-left-width': {types: ['length']},
        'border-right-width': {types: ['length']},
        'border-top-width': {types: ['length']},
        // --Border radius
        'border-radius': {properties: ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius']},
        'border-top-left-radius': {types: ['length-percentage-calc'], multiple: true},
        'border-top-right-radius': {types: ['length-percentage-calc'], multiple: true},
        'border-bottom-right-radius': {types: ['length-percentage-calc'], multiple: true},
        'border-bottom-left-radius': {types: ['length-percentage-calc'], multiple: true},
        // --Box shadow
        'box-shadow': {types: ['shadow-list']},

        // CSS Basic User Interface Module Level 3 (CSS3 UI): http://www.w3.org/TR/css3-ui/
        'outline': {properties: ['outline-color', 'outline-width']},
        'outline-color': {types: ['color']},
        'outline-width': {types: ['length']},
        'outline-offset': {types: ['length']},

        // CSS Fonts Module Level 3: http://www.w3.org/TR/css3-fonts/
        'font': {properties: ['font-weight', 'font-stretch', 'font-size', 'line-height']},
        'font-weight': {types: ['font-weight']},
        'font-stretch': {types: ['font-stretch']},
        'font-size': {types: ['length']},
        'font-size-adjust': {types: ['number']},

        // CSS Masking Module Level 1: http://www.w3.org/TR/css-masking/
        'clip': {types: ['rectangle']},  // Deprecated
        'clip-path': {types: ['basic-shape']},
        'mask': {properties: ['mask-position', 'mask-size']},
        'mask-position': {types: ['length-percentage-calc'], multiple: true, repeatable: true},
        'mask-size': {types: ['length-percentage-calc'], multiple: true, repeatable: true},

        // CSS Multi-column Layout Module: http://www.w3.org/TR/css3-multicol/ + http://dev.w3.org/csswg/css-multicol/
        'columns': {properties: ['column-width', 'column-count']},
        'column-width': {types: ['length']},
        'column-count': {types: ['integer']},
        'column-gap': {types: ['length']},
        'column-rule': {properties: ['column-rule-color', 'column-rule-width']},
        'column-rule-color': {types: ['color']},
        'column-rule-width': {types: ['length']},

        // CSS Shapes Module Level 1: http://www.w3.org/TR/css-shapes-1/
        'shape-outside': {types: ['basic-shape']},
        'shape-margin': {types: ['length-percentage-calc']},
        'shape-image-threshold': {types: ['number']},

        // CSS Text Decoration Module Level 3: http://www.w3.org/TR/css-text-decor-3/
        'text-decoration': {properties: ['text-decoration-color']},
        'text-decoration-color': {types: ['color']},
        'text-emphasis': {properties: ['text-emphasis-color']},
        'text-emphasis-color': {types: ['color']},
        'text-shadow': {types: ['shadow-list']},


        /*** Last Call Working Drafts (LC) ***/

        // CSS Text Module Level 3: http://www.w3.org/TR/css3-text/
        'letter-spacing': {types: ['length']},
        'tab-size': {types: ['length']},
        'text-indent': {types: ['length-percentage-calc']},
        'word-spacing': {types: ['length-percentage-calc']},


        /*** Working Drafts (WD) ***/

        // CSS Flexible Box Layout Module Level 1: http://www.w3.org/TR/css3-flexbox/
        'flex': {properties: ['flex-grow', 'flex-shrink', 'flex-basis']},
        'flex-grow': {types: ['number']},
        'flex-shrink': {types: ['number']},
        'flex-basis': {types: ['length-percentage-calc']},
        'order': {types: ['integer']},

        // CSS Transforms Module Level 1: http://www.w3.org/TR/css3-transforms/
        'transform': {types: ['transform']},
        'transform-origin': {types: ['length-percentage-calc'], multiple: true},
        'perspective': {types: ['length']},
        'perspective-origin': {types: ['length-percentage-calc'], multiple: true},
    };

    /**
     * List of animatable types used by properties, with descriptions of how to interpolate each type.
     * Data taken from http://www.w3.org/TR/css3-transitions/#animatable-types and some other W3C specs.
     *
     * @type {Object}
     */
    exports.types = {
        'color': {
            name: 'color',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-color'
        },
        'length': {
            name: 'length',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-length'
        },
        'percentage': {
            name: 'percentage',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-percentage'
        },
        'length-percentage-calc': {
            name: 'length, percentage, or calc',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-lpcalc'
        },
        'integer': {
            name: 'integer',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-integer'
        },
        'font-weight': {
            name: 'font weight',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-font-weight'
        },
        'number': {
            name: 'number',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-number'
        },
        'rectangle': {
            name: 'rectangle',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-rect'
        },
        'visibility': {
            name: 'visibility',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-visibility'
        },
        'shadow-list': {
            name: 'shadow list',
            href: 'http://www.w3.org/TR/css3-transitions/#animtype-shadow-list'
        },
        // Other specs
        'transform': {
            name: 'transform',
            href: 'http://www.w3.org/TR/css3-transforms/#interpolation-of-transforms'
        },
        'font-stretch': {
            name: 'font stretch',
            href: 'http://www.w3.org/TR/css3-fonts/#font-stretch-animation'
        },
        'basic-shape': {
            name: 'basic shape',
            href: 'http://www.w3.org/TR/css-shapes-1/#basic-shape-interpolation'
        },
    };

    /**
     * Check if a CSS property can be animated
     * @param  {string} property CSS property name
     * @return {boolean}         True if the property can be animated
     */
    exports.canAnimate = function (property) {
        return props.hasOwnProperty(property);
    };

    /**
     * Get a definition of how a CSS property can be animated
     * @param  {string} property CSS property name
     * @param  {boolean} expand  Expand definitions for sub-properties, when available
     * @return {object}          Property definition, or null if it can't be animated
     */
    exports.getProperty = function (property, expand) {
        if (!exports.canAnimate(property)) {
            return null;
        }
        var prop = props[property];
        var ret = {name: property};
        Object.keys(prop).forEach(function (key) {
            var value = prop[key];
            if (Array.isArray(value)) {
                if (key === 'properties' && expand) {
                    value = value.map(function (subProp) {
                        return exports.getProperty(subProp, expand);
                    });
                } else {
                    value = value.slice(); // clone
                }
            }
            ret[key] = value;
        });
        return ret;
    };
})((function (root) {
    // CommonJS
    if (typeof module !== 'undefined' && module.exports !== undefined) return module.exports;
    // Global `cssAnimProps`
    return (root.cssAnimProps = {});
})(this));

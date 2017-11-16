# CSS Animated Properties

A simple way to list which CSS properties can be animated and how, as defined in various W3C specs.

I needed something like this for a project and hand-rolled some basic data.
But it might be useful for other people too, so I pulled out the data, cleaned it up and added some convenience methods.

Enjoy.

### Caveats & Citations

Only specs that are Candidate Recommendations or better are counted, with the exception of some Working Drafts that have a lot of traction in browser implementations. So far the WD specs included here are Text Level 3, Flexbox and Transforms.

If a property is not in this list, it's not able to be _consistently_ animated. Technically `background-image` can be animated in some ways, but against the spec (which says it can’t be animated at all).

For better details about individual browser support, see <http://thewebevolved.com/support/animation/properties/>. There is also a great amount of detail at <http://oli.jp/2010/css-animatable-properties/>, but I needed something that was usable by scripts.


## Usage

Available on npm as `css-animated-properties`, or in the browser as a global called `cssAnimProps`

### Properties

#### `animatedProperties`

The core data as a simple JS object. Each key is a CSS property. If a property isn’t in the list, it’s not animateable via CSS.

There are convenience methods (listed below) that mean you shouldn’t need to access this list directly, but it’s available for other use cases.

#### `types`

The types of values that can be animated. Each key is a value type that is referenced in the `animatedProperties` list. Each type contains properties of `name` (display name) and `href` (link to the W3C spec where the value type is defined).

For quick reference, most of the types are defined at <https://www.w3.org/TR/css3-transitions/>.


### Methods

#### `canAnimate()`

* Takes a CSS property and returns whether that property can be animated by CSS.
* **Parameters**: property _(String)_
* **Returns**: _Boolean_

```js
cssAnimProps.canAnimate('margin');    // true
cssAnimProps.canAnimate('position');  // false
```

#### `getProperty()`

* Takes a CSS property and returns the definition of how it can be animated.
  For properties that are shorthand combinations of other properties (e.g. `border`) this definition can be recursive.
* **Parameters**: property _(String)_, expand _(Boolean – optional, default `false`)_
* **Returns**: _Object_ with a combination of the following properties (all are optional), or `null` if property can’t be animated.
  * `properties` _(Array)_ – A list of other CSS properties that make up this property’s definition.
    The values of the array depend on the `expand` parameter.
  * `types` _(Array)_ – A list of one or more types of value – these refer to keys in the `types` property.
    Only one of `types` and `properties` will be present on the same object.
  * `multiple` _(Boolean)_ – If `true`, multiple space-separated values can be present (e.g. `transform-origin`).
  * `repeatable` _(Boolean)_ – If `true`, multiple comma-separated sets of values can be present (e.g. `background-position`).

```js
cssAnimProps.getProperty('color');
// {name: 'color', types: ['color']}

cssAnimProps.getProperty('position');
// null

cssAnimProps.getProperty('transform-origin');
// {name: 'transform-origin', types: ['length-percentage-calc'], multiple: true}

cssAnimProps.getProperty('border-color');
/*
{
    name: 'border-color',
    properties: [
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color'
    ]
}
*/

cssAnimProps.getProperty('border-color', true);
/*
{
    name: 'border-color',
    properties: [
        {name: 'border-top-color', types: ['color']},
        {name: 'border-right-color', types: ['color']},
        {name: 'border-bottom-color', types: ['color']},
        {name: 'border-left-color', types: ['color']}
    ]
}
*/

```


## Licence

MIT: <https://gilmoreorless.mit-license.org/>


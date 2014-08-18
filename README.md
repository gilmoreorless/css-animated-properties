# CSS Animated Properties

A simple way to list which CSS properties can be animated and how, as defined on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

I needed something like this for a project and hand-rolled some basic data.
But it might be useful for other people too, so I pulled out the data, cleaned it up and added some convenience methods.

Enjoy.

## Properties

#### animatedProperties

The core data as a simple JS object. Each key is a CSS property. If a property isn’t in the list, it’s not animateable via CSS.

There are convenience methods (listed below) that mean you shouldn’t need to access this list directly, but it’s available for other use cases.


## Methods

#### canAnimate

* Takes a CSS property and returns whether that property can be animated by CSS.
* **Parameters**: property _(String)_
* **Returns**: _Boolean_

```js
cssAnimProps.canAnimate('margin');    // true
cssAnimProps.canAnimate('position');  // false
```

#### getProperty

* Takes a CSS property and returns the definition of how it can be animated.
  For properties that are shorthand combinations of other properties (e.g. `border`) this definition can be recursive.
* **Parameters**: property _(String)_, expand _(Boolean – optional, default `false`)_
* **Returns**: _Object_ with a combination of the following properties (all are optional), or `null` if property can’t be animated.
  * `properties` _(Array)_ – A list of other CSS properties that make up this property’s definition.
    The values of the array depend on the `expand` parameter.
  * `types` _(Array)_ – A list of one or more types of value (see the “Types” section below).
    Only one of `types` and `properties` will be present on the same object.
  * `multiple` _(Boolean)_ – If `true`, multiple space-separated values can be present (e.g. `transform-origin`).
  * `repeatable` _(Boolean)_ – If `true`, multiple comma-separated sets of values can be present (e.g. `background-position`).

```js
cssAnimProps.getProperty('color');
// {name: 'color', types: ['color']}

cssAnimProps.getProperty('position');
// null

cssAnimProps.getProperty('transform-origin');
// {name: 'transform-origin', types: ['length', 'percentage', 'calc'], multiple: true}

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


## Types

* `length`
* `percentage`
* `calc`
* `color`
* `number`
* `integer`
* `shadow-list`
* `visibility`
* `font-weight`
* `font-stretch`
* `rectangle`
* `basic-shape`

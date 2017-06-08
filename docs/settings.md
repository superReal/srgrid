# Settings


## Grid id

sR Grid is able to create multiple grids. Each grid needs an unique grid id.

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$grid-id` | Grid id | String | `'srgrid'` |

*Note: in the default settings the `$grid-id` is used when creating the element attributes. If the`$grid-id` is changed
this is reflected in the naming of attributes.*


## Grid attribute names

sR Grid uses data attributes rather than classes for a simple markup syntax. These can be configured using the
following variables:

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$grid-attr-name` | Attribute name for the grid | String | `'data-#{$grid-id}'` |
| `$row-attr-name` | Attribute name for the row | String | `'data-#{$grid-id}-row'` | 
| `$column-attr-name` | Attribute name for the column | String | `'data-#{$grid-id}-col'` |


## Only attribute addition

The `only` mode needs an attribute addition which is used in the attribute value.

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$only-attr-addition` | Only attribute addition | String | `'only'` |

**Example markup**

```html
<div data-srgrid-col="m-only-2">...</div>
```


## Grid metrics

With sR Grid you are able to determine gutter widths as well as the amount of columns.

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$gutter-widths` | Gutter widths | Map | `(xs: 5, s: 5, m: 10, l: 15, xl: 20)` |
| `$column-count` | Column count | Number | `36` |

*In its default state sR Grid uses 36 columns. This makes it possible to create fully responsive pages within the span
of the whole viewport. A page can be centered by integrating columns on the left side for spacing.*

**Example markup for a centered fully responsive page**

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="6"></div> <!-- left spacing -->
        <div data-srgrid-col="24">
            Page content
        </div>
    </div>
</div>
```

For a cleaner code the [Offset feature](#offset-feature) can be used instead:

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="24 offset-6">
            Page content
        </div>
    </div>
</div>
```

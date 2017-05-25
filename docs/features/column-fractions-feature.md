# Column Fractions Feature

The column fractions feature simplifies the work with column widths and therefore increases the readability of the 
markup.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$column-fractions-feature` | Column fractions feature modes | Null/List | `null` |
| `$column-fractions` | Column fractions | Map | `(1 2, 1 3, 1 4, 2 3, 3 4)` |

## Example implementation

![](/docs/assets/srgrid-column-fractions-feature.gif)

*Starting from breakpoint "m" the first column fractions element will be one half wide, the second element will be one third wide.*

```sass
@include srgrid-create-grid(
    $column-fractions-feature: regular 
);
```

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="m-1-2">...</div> <!-- column fractions element -->
        <div data-srgrid-col="m-1-3">...</div> <!-- column fractions element -->
    </div>
</div>
```

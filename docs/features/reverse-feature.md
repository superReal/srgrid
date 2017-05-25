# Reverse Feature

The reverse feature is used to position an element within the rows in an inversed order.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$reverse-feature` | Reverse feature modes | Null/List | `null` |
| `$reverse-attr-addition` | Reverse attribute addition | String | `'reverse'` |

## Example implementation

![](/docs/assets/srgrid-reverse-feature.gif)

*The elements in the reverse element are displayed in a reverse order (3, 2, 1) from breakpoint "m" upwards.*

```sass
@include srgrid-create-grid(
    $reverse-feature: responsive
);
```

```html
<div data-srgrid>
    <div data-srgrid-row="m-reverse"> <!-- reverse element -->
        <div data-srgrid-col>1</div>
        <div data-srgrid-col>2</div>
        <div data-srgrid-col>3</div>
    </div>
</div>
```

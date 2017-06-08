# Offset Feature

The offset feature is used to move elements by the width of columns.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$offset-feature` | Offset feature modes | Null/List | `null` |
| `$offset-attr-addition` | Offset attribute addition | Null/List | `'offset'` |

*Note: if you want to reset the offset value you can use the value 0 (`offset-0`).*

## Example implementation

![](/docs/assets/srgrid-offset-feature.gif)

*Within the breakpoints "xs" and "s" the offset element is moved to the right by 4 columns, within breakpoints "m" 
and "l" by 6 columns and within breakpoint "xl" by 0 columns, therefore not at all.*

```sass
@include srgrid-create-grid(
    $offset-feature: regular responsive
);
```

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="offset-4 m-offset-10 xl-offset-0"> <!-- offset element -->
            ...
        </div>
    </div>
</div>
```

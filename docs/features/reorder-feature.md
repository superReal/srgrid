# Reorder Feature

The reorder feature is used for a more accurate repositioning of columns.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$reorder-feature` | Reorder feature modes | Null/List | `null` |
| `$reorder-attr-addition` | Reorder attribute addition | String | `'reorder'` |

## Example implementation

![](/docs/assets/srgrid-reorder-feature.gif)

*Starting from the breakpoint "m" the third reorder element is positioned to the left of the first reorder element.*

```sass
@include srgrid-create-grid(
    $reorder-feature: responsive
);
```

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="m-reorder-2">1</div> <!-- reorder element -->
        <div data-srgrid-col="m-reorder-3">2</div> <!-- reorder element -->
        <div data-srgrid-col="m-reorder-1">3</div> <!-- reorder element -->
    </div>
</div>
```

# Distribution Feature

The distribution feature is used for positioning elements within the columns.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$distribution-feature` | Distribution feature modes | Null/List | `null` |
| `$distribution-around-attr-addition` | Distribution around attribute addition | String | `'around'` |
| `$distribution-between-attr-addition` | Distribution between attribute addition | String | `'between'` |

## Example implementation

![](/docs/assets/srgrid-distribution-feature.gif)

*The elements in the distribution element are positioned on the left in the breakpoint "xs".
They are centered in breakpoints "s" and "m" and stretched in breakpoint "xl".*

```sass
@include srgrid-create-grid(
    $distribution-feature: responsive
);
```

```html
<div data-srgrid>
    <div data-srgrid-row="s-around xl-between"> <!-- distribution element -->
        <div data-srgrid-col="10">...</div>
        <div data-srgrid-col="10">...</div>
        <div data-srgrid-col="10">...</div>
    </div>
</div>
```

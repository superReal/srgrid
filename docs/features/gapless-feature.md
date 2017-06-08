# Gapless Feature

The gapless feature is used to remove the gaps within row elements.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$gapless-feature` | Gapless feature modes | Null/List | `null` |
| `$gapless-attr-addition` | Gapless attribute addition | String | `'gapless'` |

## Example implementation

![](/docs/assets/srgrid-gapless-feature.gif)

*Starting from breakpoint "l" all elements within the gapless element are free of gaps.*

```sass
@include srgrid-create-grid(
    $gapless-feature: regular 
);
```

```html
<div data-srgrid>
    <div data-srgrid-row="l-gapless"> <!-- gapless element -->
        <div data-srgrid-col>...</div>
        <div data-srgrid-col>...</div>
        <div data-srgrid-col>...</div>
    </div>
</div>
```

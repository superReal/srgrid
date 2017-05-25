# Block Feature

The block feature is used for splitting the existing grid into equal parts which are nevertheless aligned with the 
global grid.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$block-feature` | Block feature modes | Null/List | `null` |
| `$block-attr-addition` | Block attribute addition | String | `'block'` |

## Example implementation

![](/docs/assets/srgrid-block-feature.gif)

*The elements within the block element will initially be 2 columns wide. Starting from breakpoint "m" they will be 3 
columns wide.*

```sass
@include srgrid-create-grid(
    $block-feature: regular responsive
);
```

```html
<div data-srgrid>
    <div data-srgrid-row="block-2 m-block-3"> <!-- block element -->
        <div data-srgrid-col>...</div>
        <div data-srgrid-col>...</div>
        <div data-srgrid-col>...</div>
        <div data-srgrid-col>...</div>
    </div>
</div>
```

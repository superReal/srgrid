# Fluid Feature

The fluid feature is used for a better control of the columns.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$fluid-feature` | Fluid feature modes | Null/List | `null` |

## Example implementation

![](/docs/assets/srgrid-fluid-feature.gif)

*The fluid element will be 20 columns wide in breakpoint "l" and 10 columns wide in all other breakpoints.*

```sass
@include srgrid-create-grid(
    $fluid-feature: regular only
);
```

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="10 l-only-20"> <!-- fluid element -->
            ...
        </div>
    </div>
</div>
```

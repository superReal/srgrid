# Wrapper Feature

The wrapper feature is used for centering areas with a maximum width.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$wrapper-feature` | Enable the wrapper feature | Boolean | `false` |
| `$wrapper-attr-name` | Attribute name for the wrapper | String | `'data-#($grid-id)-wrapper'` |
| `$wrapper-max-widths` | Maximum widths for the wrapper | Map | `(xl: 1200)` |

*Note: the maximum width can also be determined for specific breakpoints and in other units except pixels.*

## Example implementation

![](/docs/assets/srgrid-wrapper-feature.gif)

*The element with the wrapper attribute will have a maximum width of 95 vw in breakpoint "s"
and 1400 px in breakpoint "xl".*

```sass
@include srgrid-create-grid(
    $wrapper-feature: true,
    $wrapper-max-widths: (s: 95vw, xl: 1400)
);
```

```html
<div data-srgrid>
    <div data-srgrid-wrapper> <!-- wrapper element -->
        <div data-srgrid-row>
            <div data-srgrid-col>
                ...
            </div>
        </div>
    </div>
</div>
```

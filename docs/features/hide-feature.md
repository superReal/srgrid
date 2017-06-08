# Hide Feature

The hide feature is used to hide an element on the page.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$hide-feature` | Hide feature modes | Null/List | `null` |
| `$hide-attr-name` | Hide attribute name | String | `'data-#($grid-id)-hide'` |

*Note: the hide attribute can be set on all page elements.*

## Example implementation

![](/docs/assets/srgrid-hide-feature.gif)

*The hide element is hidden between breakpoints "m" and "l".*

```sass
@include srgrid-create-grid(
    $hide-feature: between
);
```

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col data-srgrid-hide="m-l"> <!-- hide element -->
            ...
        </div>
    </div>
</div>
```

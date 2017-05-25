# Advanced

## Globals

The sR Grid does not affect your global namespace within Sass. The module merely creates the variable name `$srgrid`,
in which all settings are saved. Moreover sR Grid provides [helper functions](/docs/helpers.md) to simplify the work.

## Nested Grids

The sR Grid is designed to allow the nesting of grids.

*Note: it's also possible to nest the grids without a grid element.*

**Example implementation**

*The first nested grid is wrapped with a grid element. The second is not.*

```sass
@include srgrid-create-grid(
    $fluid-feature: regular
);
```

```html
<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="16">
            <div data-srgrid> <!-- nested grid with a grid element-->
                <div data-srgrid-row>
                    <div data-srgrid-col="10">...</div>
                    <div data-srgrid-col="10">...</div>
                    <div data-srgrid-col="16">...</div>
                </div>
            </div>
        </div>
        <div data-srgrid-col="20">...</div>
    </div>
</div>

<div data-srgrid>
    <div data-srgrid-row>
        <div data-srgrid-col="16">
            <div data-srgrid-row> <!-- nested grid without a grid element-->
                <div data-srgrid-col="10">...</div>
                <div data-srgrid-col="10">...</div>
                <div data-srgrid-col="16">...</div>
            </div>
        </div>
        <div data-srgrid-col="20">...</div>
    </div>
</div>
```

## Multi Grids

The sR Grid allows you to create and use multiple grids on one page.

*Note: every grid needs an unique `$grid-id`. Additionally different features can be used within the grid.*

**Example implementation**

*The first grid uses the default value of the `$grid-id` `srgrid`. The second grid uses `simple-grid` as an id.*

```sass
@include srgrid-create-grid(
    $fluid-feature: regular
);

@include srgrid-create-grid(
    $grid-id: 'simple-grid',
    $column-count: 4,
    $fluid-feature: regular,
    $alignment-feature: regular
);
```

```html
<div data-srgrid> <!-- first grid -->
    <div data-srgrid-row>
        <div data-srgrid-col>...</div>
        <div data-srgrid-col>...</div>
        <div data-srgrid-col>...</div>
    </div>
</div>

<div data-simple-grid> <!-- second grid -->
    <div data-simple-grid-row>
        <div data-simple-grid-col>...</div>
        <div data-simple-grid-col>...</div>
        <div data-simple-grid-col>...</div>
    </div>
</div>
```

# Align Column Feature

The align column feature is used for vertical positioning of elements inside the columns.

## Settings

| Name | Description | Type | Default value |
|:-:|:-:|:-:|:-:|
| `$align-column-feature` | Align column feature modes | Null/List | `null` | 
| `$align-column-top-attr-addition` | Align column top attribute addition | String | `'top'` | 
| `$align-column-middle-attr-addition` | Align column middle attribute addition | String | `'middle'` | 
| `$align-column-bottom-attr-addition` | Align column bottom attribute addition | String | `'bottom'` | 
| `$align-column-stretch-attr-addition` | Align column stretch attribute addition | String | `'stretch'` | 

## Example implementation

![](/docs/assets/srgrid-align-column-feature.gif)

*The first align column element is always aligned downwards. The second align column element is centered vertically 
from breakpoint "m" upwards.*

```sass
@include srgrid-create-grid(
 $align-column-feature: regular responsive
);
```

```html
<div data-srgrid>
 <div data-srgrid-row>
     <div data-srgrid-col="bottom"> <!-- align column element -->
         <div class="box"></div>
         </div> 
     <div data-srgrid-col>
         <div class="box box_large"></div>
     </div>
     <div data-srgrid-col="m-middle"> <!-- align column element -->
         <div class="box"></div>
     </div>
 </div>
</div>
```

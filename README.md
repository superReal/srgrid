# sR Grid
> Dead Simple Flexbox Grid

[![Dependency Status](https://david-dm.org/superReal/srgrid.svg)](https://david-dm.org/superReal/srgrid)
[![devDependencies Status](https://david-dm.org/superreal/srgrid/dev-status.svg)](https://david-dm.org/superreal/srgrid?type=dev)
[![Code Climate](https://codeclimate.com/github/superReal/srgrid/badges/gpa.svg)](https://codeclimate.com/github/superReal/srgrid)
[![Build Status](https://travis-ci.org/superReal/srgrid.svg?branch=master)](https://travis-ci.org/superReal/srgrid)
[![Known Vulnerabilities](https://snyk.io/test/github/superReal/srgrid/badge.svg)](https://snyk.io/test/github/superReal/srgrid)

sR Grid is a flexible and fully responsive grid system based on [Flexbox](https://www.w3.org/TR/css-flexbox-1/).
It follows the mobile first approach and the [features](/docs/features/README.md) are module-based. In the default setup each feature is disabled 
and can be enabled as required. In this way the generated code remains as small as possible.

The sR Grid uses data attributes. The markup remains clear and easy to understand.


## Installation
     
```bash
$ yarn add @superreal/srbreakpoints @superreal/srgrid
```

If you prefer using npm:

```bash
$ npm install --save @superreal/srbreakpoints @superreal/srgrid
```

*Note: the sR Grid module uses [sR Breakpoints](https://github.com/superreal/srbreakpoints) as a dependency.*


## Usage

1. Import the sR Breakpoints & sR Grid modules
2. [Init sR Breakpoints](https://github.com/superreal/srbreakpoints#usage) module
3. Create a sR Grid grid

```scss
@import 'path_to_node_modules_folder/@superreal/srbreakpoints/src/styles/srbreakpoints.scss';
@import 'path_to_node_modules_folder/@superreal/srgrid/src/styles/srgrid.scss';

@include srbreakpoints-init(
 // Your sR Breakpoints settings
);
@include srgrid-create-grid(
 // Your sR Grid settings
);
```

## Browser compatibility

### Desktop
| Chrome | Firefox | Safari | Opera | EDGE | Internet Explorer |
|:------:|:-------:|:------:|:-----:|:----:|:-----------------:|
| 29     | 28      | 9      | 17    | 12   | 11                |

### Mobile
| Chrome for Android | iOS Safari | Android Browser | Samsung Internet |
|:------------------:|:----------:|:---------------:|:----------------:|
| 57                 | 9.2        | 4.4             | 4                |


## Documentation
* [Settings](https://superreal.github.io/srgrid/docs/settings)
* [Helpers](https://superreal.github.io/srgrid/docs/helpers)
* [Features](https://superreal.github.io/srgrid/docs/features/)
* [Advanced](https://superreal.github.io/srgrid/docs/advanced)


## License (MIT)
Copyright (c) [superReal GmbH](http://www.superreal.de)

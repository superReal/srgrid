/* eslint-disable */
module.exports = function (casper, scenario, vp) {
    casper.evaluate(function () {
        document.querySelector('html').classList.add('test-mode');
    });
};

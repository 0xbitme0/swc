import _extends from "@swc/helpers/src/_extends.mjs";
let React = require('react'), obj1 = {
    x: 2
};
React.Component;
let anyobj;
_extends({}, {}, {
    y: !0,
    overwrite: "hi"
}, obj1), _extends({}, obj1, {
    y: !0,
    overwrite: "hi"
}), _extends({
    x: 3,
    overwrite: "hi"
}, obj1, {
    y: !0
}), _extends({
    overwrite: "hi"
}, obj1, {
    x: 3
}, {
    y: !0,
    x: 2,
    overwrite: "world"
}), _extends({}, {
    x: 2
}, {
    overwrite: "world"
}, {
    y: !0
}), _extends({}, anyobj);

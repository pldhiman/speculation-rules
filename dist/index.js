"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Speculationrules = function Speculationrules(_ref) {
  var prerenderRules = _ref.prerenderRules,
    prefetchRules = _ref.prefetchRules;
  var json = JSON.stringify({
    prerender: prerenderRules || [{
      where: {
        and: [{
          href_matches: "/*"
        }, {
          not: {
            selector_matches: ".no-prerender"
          }
        }]
      }
    }],
    prefetch: prefetchRules || []
  });
  return /*#__PURE__*/_react["default"].createElement("script", {
    type: "speculationrules",
    dangerouslySetInnerHTML: {
      __html: json
    }
  });
};
var _default = exports["default"] = Speculationrules;
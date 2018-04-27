Object.defineProperty(exports, "__esModule", {
  value: true,
});

/* eslint-disable no-use-before-define */

var createStringTreeNode = (exports.createStringTreeNode = function createStringTreeNode(
  value
) {
  return {
    type: "string",
    value: value,
  };
});

var createNumberTreeNode = (exports.createNumberTreeNode = function createNumberTreeNode(
  value
) {
  return {
    type: "number",
    value: value,
  };
});

var createReactElementTreeNode = (exports.createReactElementTreeNode = function createReactElementTreeNode(
  displayName,
  props,
  defaultProps,
  childrens
) {
  return {
    type: "ReactElement",
    displayName: displayName,
    props: props,
    defaultProps: defaultProps,
    childrens: childrens,
  };
});

var createReactFragmentTreeNode = (exports.createReactFragmentTreeNode = function createReactFragmentTreeNode(
  key,
  childrens
) {
  return {
    type: "ReactFragment",
    key: key,
    childrens: childrens,
  };
});
//# sourceMappingURL=tree.js.map

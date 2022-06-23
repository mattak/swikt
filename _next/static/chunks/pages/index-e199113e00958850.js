(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 8312:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(9936);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9936:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(7160);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./components/Transpiler.module.css
var Transpiler_module = __webpack_require__(9926);
var Transpiler_module_default = /*#__PURE__*/__webpack_require__.n(Transpiler_module);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/@uiw/react-textarea-code-editor/dist/editor.css
var editor = __webpack_require__(3915);
// EXTERNAL MODULE: ./node_modules/swikt-lib/index.js
var swikt_lib = __webpack_require__(3748);
;// CONCATENATED MODULE: ./components/Transpiler.tsx






var CodeEditor = dynamic_default()(// @ts-ignore
function() {
    return __webpack_require__.e(/* import() */ 844).then(__webpack_require__.t.bind(__webpack_require__, 878, 23)).then(function(mod) {
        return mod.default;
    });
}, {
    loadableGenerated: {
        webpack: function() {
            return [
                /*require.resolve*/(878)
            ];
        }
    },
    ssr: false
});
var Transpiler = function() {
    var updateSwiftCodeToKotlinCode = function updateSwiftCodeToKotlinCode(swiftCode) {
        var swiftTree = (0,swikt_lib.preprocessSwiftTree)((0,swikt_lib.parseSwift)(swiftCode));
        setSwiftTreeCode(JSON.stringify(swiftTree, null, 2));
        var kotlinTree = (0,swikt_lib.convertSwiftTreeToKotlinTree)(swiftTree, kotlinInfo);
        setKotlinTreeCode(JSON.stringify(kotlinTree, null, 2));
        var newKotlinCode = (0,swikt_lib.printKotlin)(kotlinTree);
        setKotlinCode(newKotlinCode);
    };
    var updateKotlinCode = function updateKotlinCode(kotlinCode) {
        var kotlinTree = (0,swikt_lib.parseKotlin)(kotlinCode);
        setKotlinTreeCode(JSON.stringify(kotlinTree, null, 2));
    };
    var ref = (0,react.useState)("import Foundation\n\nstruct Sample {\n  static func build(args: [String], count: Int) {\n  }\n}"), swiftCode1 = ref[0], setSwiftCode = ref[1];
    var ref1 = (0,react.useState)("package com.example.test\n\nclass Sample() {\n}\n"), kotlinCode1 = ref1[0], setKotlinCode = ref1[1];
    var ref2 = (0,react.useState)("{}"), swiftTreeCode = ref2[0], setSwiftTreeCode = ref2[1];
    var ref3 = (0,react.useState)("{}"), kotlinTreeCode = ref3[0], setKotlinTreeCode = ref3[1];
    var kotlinInfo = {
        package: "com.example.sample",
        importList: [
            "com.example.Test"
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Transpiler_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Transpiler_module_default()).item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        className: (Transpiler_module_default()).codeLabel,
                        children: "swift"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeEditor, {
                        // @ts-ignore
                        value: swiftCode1,
                        language: "swift",
                        placeholder: "Please enter Swift code.",
                        onChange: function(e) {
                            return updateSwiftCodeToKotlinCode(e.target.value);
                        },
                        padding: 15,
                        style: {
                            fontSize: 12,
                            backgroundColor: "#FAFAFA",
                            width: "100%",
                            fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (Transpiler_module_default()).item,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                            children: "swift ast"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeEditor, {
                            // @ts-ignore
                            value: swiftTreeCode,
                            language: "json",
                            padding: 15,
                            style: {
                                fontSize: 12,
                                backgroundColor: "#FAFAFA",
                                width: "100%",
                                fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (Transpiler_module_default()).item,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("summary", {
                            children: "kotlin ast"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeEditor, {
                            // @ts-ignore
                            value: kotlinTreeCode,
                            language: "json",
                            padding: 15,
                            style: {
                                fontSize: 12,
                                backgroundColor: "#FAFAFA",
                                width: "100%",
                                fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Transpiler_module_default()).item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        className: (Transpiler_module_default()).codeLabel,
                        children: "kotlin"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeEditor, {
                        // @ts-ignore
                        value: kotlinCode1,
                        language: "kotlin",
                        placeholder: "Please enter Kotlin code.",
                        onChange: function(e) {
                            return updateKotlinCode(e.target.value);
                        },
                        padding: 15,
                        style: {
                            fontSize: 12,
                            backgroundColor: "#FAFAFA",
                            width: "100%",
                            fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var components_Transpiler = (Transpiler);

;// CONCATENATED MODULE: ./pages/index.tsx





var Home = function() {
    var ref = (0,react.useState)("function add(a, b) {\n  return a + b;\n}"), code = ref[0], setCode = ref[1];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Swikt - swift to kotlin transpiler"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "transpiler between swift and kotlin"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: (Home_module_default()).title,
                        children: "Swikt"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: (Home_module_default()).description,
                        children: "Swift to Kotlin transpiler"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Transpiler, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
                className: (Home_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "Powered by",
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: (Home_module_default()).logo,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/vercel.svg",
                                alt: "Vercel Logo",
                                width: 72,
                                height: 16
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var pages = (Home);


/***/ }),

/***/ 9926:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"Transpiler_container__DlmkF","item":"Transpiler_item__v_g6R","codeLabel":"Transpiler_codeLabel__dqs5H"};

/***/ }),

/***/ 7160:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"Home_container__bCOhY","main":"Home_main__nLjiQ","footer":"Home_footer____T7K","title":"Home_title__T09hD","description":"Home_description__41Owk","code":"Home_code__suPER","grid":"Home_grid__GxQ85","card":"Home_card___LpL1","logo":"Home_logo__27_tb"};

/***/ }),

/***/ 7816:
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [273,94,63,774,888,179], function() { return __webpack_exec__(8312); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
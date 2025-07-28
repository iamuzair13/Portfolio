(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/homeComps/BlogCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cardData": (()=>cardData),
    "default": (()=>BlogCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/avatar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
const cardData = [
    {
        image: "/images/blog/blog-1.jpg",
        title: "Composable CMS: What Is It And Why ",
        text: " Learn how a composable CMS can transform your digital",
        icon: "/images/Team/Hedy.webp",
        name: "Jesse Schor",
        date: "Friday, May 23rd, 2025",
        category: 'Marketing',
        latest: true,
        featured: true
    },
    {
        image: "/images/blog/blog-2.jpg",
        title: "Composable CMS: What Is It And Why ",
        text: " Learn how a composable CMS can transform your digital",
        icon: "/images/Team/Hedy.webp",
        name: "Jesse Schor",
        date: "Friday, May 23rd, 2025",
        category: 'Development',
        latest: true,
        featured: true
    },
    {
        image: "/images/blog/blog-3.jpg",
        title: "Composable CMS: What Is It And Why ",
        text: " Learn how a composable CMS can transform your digital",
        icon: "/images/Team/Hedy.webp",
        name: "Jesse Schor",
        date: "Friday, May 23rd, 2025",
        category: 'Design',
        latest: true,
        featured: true
    },
    {
        image: "/images/blog/blog-4.jpg",
        title: "Composable CMS: What Is It And Why ",
        text: " Learn how a composable CMS can transform your digital",
        icon: "/images/Team/Hedy.webp",
        name: "Jesse Schor",
        date: "Friday, May 23rd, 2025",
        category: 'Marketing',
        latest: true,
        featured: true
    },
    {
        image: "/images/blog/blog-4.jpg",
        title: "Composable CMS: What Is It And Why ",
        text: " Learn how a composable CMS can transform your digital",
        icon: "/images/Team/Hedy.webp",
        name: "Jesse Schor",
        date: "Friday, May 23rd, 2025",
        category: 'Marketing',
        latest: true,
        featured: false
    },
    {
        image: "/images/blog/blog-4.jpg",
        title: "Composable CMS: What Is It And Why ",
        text: " Learn how a composable CMS can transform your digital",
        icon: "/images/Team/Hedy.webp",
        name: "Jesse Schor",
        date: "Friday, May 23rd, 2025",
        category: 'Marketing',
        latest: false,
        featured: false
    }
];
function BlogCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row flex-wrap gap-2 px-[5%] justify-between",
            children: cardData.map((item, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[20%] max-lg:w-[45%] max-md:w-full  group  flex flex-col items-center justify-between pb-4  cursor-pointer rounded-[20px] overflow-hidden border border-[#08090c]  transition-colors duration-300 ease-in-out hover:border-[#0a49eb] text-white  ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: " w-full h-auto transition-transform rounded-none duration-300 ease-in-out group-hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: item.image,
                                        alt: "Service Card 1",
                                        className: "w-full lg:h-[200px] object-cover rounded-none  "
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        children: [
                                            "Card ",
                                            index
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                lineNumber: 85,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-2 border border-transparent border-b-[#08090c]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "lg:text-[16px]   font-[600]",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "lg:text-[14px]  font-[400] ",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this),
                            item.button,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-x-2 justify-center  items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                src: item.icon,
                                                className: "w-25 h-10 grayscale"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                children: "Team Member"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: item.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                        lineNumber: 81,
                        columnNumber: 15
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/components/homeComps/BlogCard.jsx",
                    lineNumber: 80,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/components/homeComps/BlogCard.jsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/homeComps/BlogCard.jsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(pages)/blog/page.jsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/(pages)/blog/page.jsx'

Expression expected`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
}]);

//# sourceMappingURL=app_eb88ae3a._.js.map
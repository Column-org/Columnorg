(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_d69953bc._.js", {

"[project]/common/tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CustomTooltip": (()=>CustomTooltip),
    "SimpleTooltip": (()=>SimpleTooltip),
    "TooltipProvider": (()=>TooltipProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function SimpleTooltip({ delayDuration = 200, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        delayDuration: delayDuration,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {
            ...props
        }, void 0, false, {
            fileName: "[project]/common/tooltip.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/common/tooltip.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SimpleTooltip;
function CustomTooltip({ children, content, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/common/tooltip.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("z-999 max-w-[160px] rounded-md border border-[--border] bg-[--surface-secondary] px-2 py-1 text-sm text-[--text-secondary] dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] dark:text-[--dark-text-secondary]", className),
                    ...props,
                    children: [
                        content,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                fileName: "[project]/common/tooltip.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/common/tooltip.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/common/tooltip.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/common/tooltip.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/common/tooltip.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = CustomTooltip;
function Arrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "-mt-px",
        fill: "none",
        height: "10",
        viewBox: "0 0 12 10",
        width: "12",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "fill-surface-secondary dark:fill-dark-surface-secondary dark:stroke-dark-border stroke-border",
                d: "M6.76649 7.55043C6.41506 8.12151 5.58494 8.12151 5.23351 7.55043L0.894781 0.500001L11.1052 0.5L6.76649 7.55043Z"
            }, void 0, false, {
                fileName: "[project]/common/tooltip.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "fill-surface-secondary dark:fill-dark-surface-secondary",
                d: "M1.3418 0H10.7666L10.1989 1H1.80013L1.3418 0Z"
            }, void 0, false, {
                fileName: "[project]/common/tooltip.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/common/tooltip.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c2 = Arrow;
function TooltipProvider({ children, delayDuration = 200 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        delayDuration: delayDuration,
        skipDelayDuration: 500,
        children: children
    }, void 0, false, {
        fileName: "[project]/common/tooltip.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c3 = TooltipProvider;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SimpleTooltip");
__turbopack_context__.k.register(_c1, "CustomTooltip");
__turbopack_context__.k.register(_c2, "Arrow");
__turbopack_context__.k.register(_c3, "TooltipProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/common/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "$button": (()=>$button),
    "Button": (()=>Button),
    "ButtonLink": (()=>ButtonLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
const $button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("gap-1 font-normal shrink-0 rounded-full ring-[--control] focus-visible:ring-2 outline-hidden outline-0", {
    variants: {
        intent: {
            primary: "bg-[--accent-500] hover:bg-[--accent-600] text-[--text-on-accent-primary] border-[--accent-600]",
            secondary: "bg-[--surface-secondary] text-[--text-primary] border-[--border] border dark:bg-[--dark-surface-secondary] dark:text-[--dark-text-primary] dark:border-[--dark-border] hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary]",
            tertiary: "bg-[--text-primary] text-[--surface-primary] dark:bg-[--dark-text-primary] dark:text-[--dark-surface-primary] border border-[--dark-border] dark:border-[--border] hover:bg-[--dark-surface-tertiary] dark:hover:bg-[--surface-tertiary]"
        },
        disabled: {
            true: "opacity-30"
        },
        onlyButton: {
            true: "rounded-xs"
        },
        iconSide: {
            left: "flex-row-reverse pl-3",
            right: "flex-row pr-3"
        },
        unstyled: {
            true: "px-0 py-0 bg-transparent border-none hover:bg-transparent hover:border-none dark:hover:bg-transparent dark:hover:border-none dark:bg-transparent dark:border-none"
        },
        size: {
            md: "inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5",
            lg: "inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10"
        }
    }
});
const Button = ({ children, intent = "primary", disabled = false, onlyButton = false, icon, iconSide = "left", unstyled, className, size = "md", ref, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: $button(!unstyled ? {
            intent,
            disabled,
            onlyButton,
            iconSide: icon ? iconSide : undefined,
            unstyled,
            className,
            size
        } : {
            className
        }),
        disabled: disabled,
        ...props,
        children: [
            children,
            icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/common/button.tsx",
                lineNumber: 76,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/common/button.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_c = Button;
const ButtonLink = ({ children, intent = "primary", disabled = false, onlyButton = false, icon, iconSide = "left", unstyled, className, size = "md", ref, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        className: $button(!unstyled ? {
            intent,
            disabled,
            onlyButton,
            iconSide: icon ? iconSide : undefined,
            className,
            unstyled,
            size
        } : {
            className
        }),
        ...props,
        children: [
            children,
            icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/common/button.tsx",
                lineNumber: 113,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/common/button.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
};
_c1 = ButtonLink;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "ButtonLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/use-toggle-state.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useToggleState": (()=>useToggleState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useToggleState = (initialState = false)=>{
    _s();
    const [isOn, setIsOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const handleToggle = ()=>setIsOn((prev)=>!prev);
    const handleOff = ()=>setIsOn(false);
    const handleOn = ()=>setIsOn(true);
    return {
        isOn,
        handleToggle,
        handleOff,
        handleOn
    };
};
_s(useToggleState, "bFX+X03EKpSor0Mwz9PrFT7kikc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/use-has-rendered.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useHasRendered": (()=>useHasRendered)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useHasRendered = ()=>{
    _s();
    const [hasRendered, setHasRendered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHasRendered.useEffect": ()=>{
            setHasRendered(true);
        }
    }["useHasRendered.useEffect"], []);
    return hasRendered;
};
_s(useHasRendered, "3kNtBUjvjhLjlxLdftX+oP4jPJU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/navigation-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DesktopMenu": (()=>DesktopMenu),
    "MobileMenu": (()=>MobileMenu),
    "NavigationMenuHeader": (()=>NavigationMenuHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/common/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toggle$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toggle-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$has$2d$rendered$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-has-rendered.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function NavigationMenuHeader({ links, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenu"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("z-1 relative flex-col justify-center lg:flex", className),
        delayDuration: 50,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuList"], {
            className: "flex flex-1 gap-0.5 px-4",
            children: links.map((link)=>link.sublinks.items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuLinkWithMenu, {
                    ...link
                }, link._id, false, {
                    fileName: "[project]/components/navigation-menu.tsx",
                    lineNumber: 69,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuLink, {
                        href: link.href ?? "#",
                        children: link._title
                    }, void 0, false, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 72,
                        columnNumber: 15
                    }, this)
                }, link._id, false, {
                    fileName: "[project]/components/navigation-menu.tsx",
                    lineNumber: 71,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/navigation-menu.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navigation-menu.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = NavigationMenuHeader;
function NavigationMenuLink({ className, children, href, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuLink"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$button"])({
            className: "inline-flex h-6 shrink-0 items-center justify-center gap-1 rounded-full px-3 pb-px tracking-tight hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary] lg:h-7"
        }),
        href: href,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/navigation-menu.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c1 = NavigationMenuLink;
function NavigationMenuLinkWithMenu({ _title, href, sublinks }) {
    _s();
    const [closeOnClick, setCloseOnClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseEnter = ()=>{
        timeoutRef.current = window.setTimeout(()=>{
            setCloseOnClick(true);
        }, 500);
    };
    const handleMouseLeave = ()=>{
        clearTimeout(timeoutRef.current);
        setCloseOnClick(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuItem"], {
        className: "relative items-center gap-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuTrigger"], {
                onClick: (e)=>{
                    if (!closeOnClick) {
                        e.preventDefault();
                    }
                },
                onPointerEnter: handleMouseEnter,
                onPointerLeave: handleMouseLeave,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$button"])({
                    className: "inline-flex items-center gap-1 rounded-full pb-px pl-3 pr-2 tracking-tight hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary] lg:h-7"
                }),
                children: [
                    href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        children: _title
                    }, void 0, false, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cursor-default",
                        children: _title
                    }, void 0, false, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                        className: "text-[--text-tertiary] dark:text-[--dark-text-tertiary]"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuContent"], {
                className: "absolute top-[calc(100%+4px)] w-[clamp(180px,30vw,300px)] rounded-md border border-[--border] bg-[--surface-primary] p-0.5 dark:border-[--dark-border] dark:bg-[--dark-surface-primary]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col",
                        children: sublinks.items.map((sublink)=>{
                            const { href, _title } = sublink;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuLink"], {
                                    href: href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$button"])({
                                        className: "flex w-full items-center gap-2 rounded-md px-3 py-1.5 hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary]"
                                    }),
                                    children: _title
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation-menu.tsx",
                                    lineNumber: 146,
                                    columnNumber: 19
                                }, this)
                            }, sublink._id, false, {
                                fileName: "[project]/components/navigation-menu.tsx",
                                lineNumber: 145,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navigation-menu.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, `${href ?? ""}${_title}`, true, {
        fileName: "[project]/components/navigation-menu.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(NavigationMenuLinkWithMenu, "fY8HsZhxaq2GMYRp+JxdCnw4hI4=");
_c2 = NavigationMenuLinkWithMenu;
function DesktopMenu({ navbar, rightCtas }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuHeader, {
                className: "hidden lg:flex",
                links: navbar.items
            }, void 0, false, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden items-center gap-2 !justify-self-end lg:flex",
                children: rightCtas.items.map((cta)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                        className: "!px-3.5",
                        href: cta.href,
                        intent: cta.type,
                        children: [
                            cta.icon,
                            cta.label
                        ]
                    }, cta._id, true, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 172,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c3 = DesktopMenu;
function MobileMenu({ navbar, rightCtas }) {
    _s1();
    const { handleToggle, isOn, handleOff } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toggle$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToggleState"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Toggle Menu",
                className: "col-start-3 flex items-center justify-center gap-2 !justify-self-end rounded-sm border border-[--border] bg-[--surface-secondary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] lg:hidden lg:h-7",
                onPointerDown: handleToggle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HamburgerMenuIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/components/navigation-menu.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block lg:hidden",
                children: isOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed left-0 top-[calc(var(--header-height)+1px)] z-10 h-auto w-full bg-[--surface-primary] dark:bg-[--dark-surface-primary]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8 px-6 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex flex-col gap-4",
                                children: navbar.items.map((link)=>link.sublinks.items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemWithSublinks, {
                                        _id: link._id,
                                        _title: link._title,
                                        sublinks: link.sublinks.items,
                                        onClick: handleOff
                                    }, link._id, false, {
                                        fileName: "[project]/components/navigation-menu.tsx",
                                        lineNumber: 207,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "flex items-center gap-2 rounded-sm px-3 py-1.5",
                                        href: link.href ?? "#",
                                        onClick: handleOff,
                                        children: link._title
                                    }, link._id, false, {
                                        fileName: "[project]/components/navigation-menu.tsx",
                                        lineNumber: 215,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/navigation-menu.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-start gap-2",
                                children: rightCtas.items.map((cta)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                        href: cta.href,
                                        intent: cta.type,
                                        size: "lg",
                                        children: [
                                            cta.icon,
                                            cta.label
                                        ]
                                    }, cta._id, true, {
                                        fileName: "[project]/components/navigation-menu.tsx",
                                        lineNumber: 229,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/navigation-menu.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navigation-menu.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(MobileMenu, "XLgBTNufb0vtXoQCNmIjruPasSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toggle$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToggleState"]
    ];
});
_c4 = MobileMenu;
function ItemWithSublinks({ _id, _title, sublinks, onClick }) {
    _s2();
    const { isOn, handleOff, handleOn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toggle$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToggleState"])(false);
    const hasRendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$has$2d$rendered$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHasRendered"])();
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ItemWithSublinks.useEffect": ()=>{
            if (!hasRendered) return;
            if (isOn) {
                listRef.current?.animate([
                    {
                        height: `${(40 * sublinks.length).toString()}px`
                    }
                ], {
                    duration: 200,
                    easing: "ease-in-out",
                    fill: "forwards"
                });
            } else {
                listRef.current?.animate([
                    {
                        height: "0px"
                    }
                ], {
                    duration: 200,
                    easing: "ease-in-out",
                    fill: "forwards"
                });
            }
        }
    }["ItemWithSublinks.useEffect"], [
        isOn,
        hasRendered,
        sublinks
    ]);
    const handleToggle = ()=>{
        if (isOn) {
            handleOff();
        } else {
            handleOn();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "flex items-center gap-2 px-3 py-1.5",
                onClick: handleToggle,
                children: [
                    _title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("h-min transform text-[--text-tertiary] transition-transform dark:text-[--dark-text-tertiary]", isOn ? "rotate-180" : "rotate-0")
                    }, void 0, false, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: listRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex h-0 origin-top transform-gpu flex-col gap-2 overflow-hidden pl-4 transition-transform"),
                children: sublinks.map((sublink)=>{
                    const { href, _title } = sublink;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex items-center gap-2 rounded-md px-3 py-1.5 text-[--text-tertiary] dark:text-[--dark-text-tertiary]",
                            href: href,
                            onClick: onClick,
                            children: _title
                        }, void 0, false, {
                            fileName: "[project]/components/navigation-menu.tsx",
                            lineNumber: 307,
                            columnNumber: 15
                        }, this)
                    }, sublink._id, false, {
                        fileName: "[project]/components/navigation-menu.tsx",
                        lineNumber: 306,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/navigation-menu.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, _id, true, {
        fileName: "[project]/components/navigation-menu.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
_s2(ItemWithSublinks, "HYXXfrUmiXCWlRIzLj8aCK9z/Qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toggle$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToggleState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$has$2d$rendered$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHasRendered"]
    ];
});
_c5 = ItemWithSublinks;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "NavigationMenuHeader");
__turbopack_context__.k.register(_c1, "NavigationMenuLink");
__turbopack_context__.k.register(_c2, "NavigationMenuLinkWithMenu");
__turbopack_context__.k.register(_c3, "DesktopMenu");
__turbopack_context__.k.register(_c4, "MobileMenu");
__turbopack_context__.k.register(_c5, "ItemWithSublinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/theme-switcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeSwitcher": (()=>ThemeSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/common/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ThemeSwitcher() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [selectedTheme, setSelectedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeSwitcher.useEffect": ()=>{
            setSelectedTheme(theme);
        }
    }["ThemeSwitcher.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-0.5 rounded-full border border-[--border] bg-[--surface-primary] p-1 text-center dark:border-[--dark-border] dark:bg-[--dark-surface-primary]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwitchButton, {
                selectedTheme: selectedTheme,
                setTheme: setTheme,
                theme: "light",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SunIcon"], {
                    color: "currentColor",
                    height: 16,
                    width: 16
                }, void 0, false, {
                    fileName: "[project]/components/theme-switcher.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme-switcher.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwitchButton, {
                selectedTheme: selectedTheme,
                setTheme: setTheme,
                theme: "system",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Half2Icon"], {
                    color: "currentColor",
                    height: 16,
                    width: 16
                }, void 0, false, {
                    fileName: "[project]/components/theme-switcher.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme-switcher.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwitchButton, {
                selectedTheme: selectedTheme,
                setTheme: setTheme,
                theme: "dark",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoonIcon"], {
                    color: "currentColor",
                    height: 16,
                    width: 16
                }, void 0, false, {
                    fileName: "[project]/components/theme-switcher.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme-switcher.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme-switcher.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ThemeSwitcher, "7ysWEXdmaQDDVy+noXnwhxJO4MU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeSwitcher;
function SwitchButton({ selectedTheme, theme, setTheme, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$common$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        unstyled: true,
        "aria-label": `${theme} theme`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("!flex !size-6 items-center justify-center rounded-full !p-[3px] text-[--text-secondary] dark:text-[--dark-text-secondary]", "data-[selected='true']:bg-[--surface-tertiary] data-[selected='true']:text-[--text-primary] dark:data-[selected='true']:bg-[--dark-surface-tertiary] dark:data-[selected='true']:text-[--dark-text-primary]", "hover:bg-[--surface-secondary] hover:text-[--text-primary] dark:hover:bg-[--dark-surface-secondary] dark:hover:text-[--dark-text-primary]"),
        "data-selected": selectedTheme === theme,
        onClick: ()=>setTheme(theme),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/theme-switcher.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c1 = SwitchButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "ThemeSwitcher");
__turbopack_context__.k.register(_c1, "SwitchButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/error-suppressor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorSuppressor": (()=>ErrorSuppressor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ErrorSuppressor() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ErrorSuppressor.useEffect": ()=>{
            // 1. Suppress window errors and unhandled rejections
            const handleError = {
                "ErrorSuppressor.useEffect.handleError": (event)=>{
                    if (event.message?.includes("Failed to connect to MetaMask") || event.message?.includes("Cannot redefine property: ethereum") || event.error?.message?.includes("Failed to connect to MetaMask") || event.error?.message?.includes("Cannot redefine property: ethereum")) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        return true;
                    }
                }
            }["ErrorSuppressor.useEffect.handleError"];
            const handleRejection = {
                "ErrorSuppressor.useEffect.handleRejection": (event)=>{
                    if (event.reason?.message?.includes("Failed to connect to MetaMask") || event.reason?.message?.includes("Cannot redefine property: ethereum") || typeof event.reason === "string" && (event.reason.includes("Failed to connect to MetaMask") || event.reason.includes("Cannot redefine property: ethereum"))) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        return true;
                    }
                }
            }["ErrorSuppressor.useEffect.handleRejection"];
            window.addEventListener("error", handleError);
            window.addEventListener("unhandledrejection", handleRejection);
            // 2. Monkey-patch console.error to prevent Next.js overlay from picking up extension errors via console
            const originalConsoleError = console.error;
            console.error = ({
                "ErrorSuppressor.useEffect": (...args)=>{
                    const msg = args.join(" ");
                    if (msg.includes("Failed to connect to MetaMask") || msg.includes("Cannot redefine property: ethereum")) {
                        // Suppress this specific error log
                        return;
                    }
                    originalConsoleError.apply(console, args);
                }
            })["ErrorSuppressor.useEffect"];
            return ({
                "ErrorSuppressor.useEffect": ()=>{
                    window.removeEventListener("error", handleError);
                    window.removeEventListener("unhandledrejection", handleRejection);
                    console.error = originalConsoleError; // Restore original console.error
                }
            })["ErrorSuppressor.useEffect"];
        }
    }["ErrorSuppressor.useEffect"], []);
    return null;
}
_s(ErrorSuppressor, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ErrorSuppressor;
var _c;
__turbopack_context__.k.register(_c, "ErrorSuppressor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_d69953bc._.js.map
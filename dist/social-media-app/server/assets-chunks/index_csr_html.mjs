export default `<!DOCTYPE html>
<html lang="en" data-beasties-container="">
  <head>
    <meta charset="utf-8">
    <title>SocialMediaApp</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-Q3XCMWHQ.woff2") format("woff2"),url("./media/fa-brands-400-R2XQZCET.ttf") format("truetype")}:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-QSNYFYRT.woff2") format("woff2"),url("./media/fa-regular-400-XUOPSR7E.ttf") format("truetype")}:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-5ZUYHGA7.woff2") format("woff2"),url("./media/fa-solid-900-PJNKLK6W.ttf") format("truetype")}@layer theme{:root{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-blue-100:oklch(.932 .032 255.585);--color-blue-300:oklch(.809 .105 251.813);--color-blue-400:oklch(.707 .165 254.624);--color-blue-500:oklch(.623 .214 259.815);--color-blue-600:oklch(.546 .245 262.881);--color-blue-700:oklch(.488 .243 264.376);--color-blue-800:oklch(.424 .199 265.638);--color-indigo-500:oklch(.585 .233 277.117);--color-gray-50:oklch(.985 .002 247.839);--color-gray-100:oklch(.967 .003 264.542);--color-gray-200:oklch(.928 .006 264.531);--color-gray-300:oklch(.872 .01 258.338);--color-gray-400:oklch(.707 .022 261.325);--color-gray-500:oklch(.551 .027 264.364);--color-gray-600:oklch(.446 .03 256.802);--color-gray-700:oklch(.373 .034 259.733);--color-gray-800:oklch(.278 .033 256.848);--color-gray-900:oklch(.21 .034 264.665);--color-white:#fff;--spacing:.25rem;--breakpoint-xl:80rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-widest:.1em;--leading-relaxed:1.625;--radius-lg:.5rem;--ease-out:cubic-bezier(0, 0, .2, 1);--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-font-feature-settings:var(--font-sans--font-feature-settings);--default-font-variation-settings:var( --font-sans--font-variation-settings );--default-mono-font-family:var(--font-mono);--default-mono-font-feature-settings:var( --font-mono--font-feature-settings );--default-mono-font-variation-settings:var( --font-mono--font-variation-settings )}}@layer base{*,:after,:before{box-sizing:border-box;margin:0;padding:0;border:0 solid}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:var( --default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );font-feature-settings:var(--default-font-feature-settings, normal);font-variation-settings:var( --default-font-variation-settings, normal );-webkit-tap-highlight-color:transparent}body{line-height:inherit}}body{background-color:#eee}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0;}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0;}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0;}@property --tw-rotate-x{syntax:"*";inherits:false;initial-value:rotateX(0);}@property --tw-rotate-y{syntax:"*";inherits:false;initial-value:rotateY(0);}@property --tw-rotate-z{syntax:"*";inherits:false;initial-value:rotateZ(0);}@property --tw-skew-x{syntax:"*";inherits:false;initial-value:skewX(0);}@property --tw-skew-y{syntax:"*";inherits:false;initial-value:skewY(0);}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0;}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0;}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid;}@property --tw-leading{syntax:"*";inherits:false;}@property --tw-font-weight{syntax:"*";inherits:false;}@property --tw-tracking{syntax:"*";inherits:false;}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}@property --tw-shadow-color{syntax:"*";inherits:false;}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}@property --tw-inset-shadow-color{syntax:"*";inherits:false;}@property --tw-ring-color{syntax:"*";inherits:false;}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}@property --tw-inset-ring-color{syntax:"*";inherits:false;}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}@property --tw-ring-inset{syntax:"*";inherits:false;}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0px;}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff;}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid;}@property --tw-blur{syntax:"*";inherits:false;}@property --tw-brightness{syntax:"*";inherits:false;}@property --tw-contrast{syntax:"*";inherits:false;}@property --tw-grayscale{syntax:"*";inherits:false;}@property --tw-hue-rotate{syntax:"*";inherits:false;}@property --tw-invert{syntax:"*";inherits:false;}@property --tw-opacity{syntax:"*";inherits:false;}@property --tw-saturate{syntax:"*";inherits:false;}@property --tw-sepia{syntax:"*";inherits:false;}@property --tw-drop-shadow{syntax:"*";inherits:false;}@property --tw-backdrop-blur{syntax:"*";inherits:false;}@property --tw-backdrop-brightness{syntax:"*";inherits:false;}@property --tw-backdrop-contrast{syntax:"*";inherits:false;}@property --tw-backdrop-grayscale{syntax:"*";inherits:false;}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false;}@property --tw-backdrop-invert{syntax:"*";inherits:false;}@property --tw-backdrop-opacity{syntax:"*";inherits:false;}@property --tw-backdrop-saturate{syntax:"*";inherits:false;}@property --tw-backdrop-sepia{syntax:"*";inherits:false;}@property --tw-ease{syntax:"*";inherits:false;}</style><link rel="stylesheet" href="styles-U3EB5NCI.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-U3EB5NCI.css"></noscript></head>
  <body ngcm="">
    <app-root></app-root>
  <link rel="modulepreload" href="chunk-U3M3NPVX.js"><link rel="modulepreload" href="chunk-NDUVRPJ2.js"><link rel="modulepreload" href="chunk-7QM77V6U.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="scripts-TZWH235K.js" defer=""></script><script src="main-ZU5OI7NI.js" type="module"></script></body>
</html>
`;
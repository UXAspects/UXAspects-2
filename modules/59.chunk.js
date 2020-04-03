(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"5GH2":function(n,a,t){var s={"./app.html":"hIQ+","./app.ts":"LcJ0"};function p(n){var a=e(n);return t(a)}function e(n){if(!t.o(s,n)){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}return s[n]}p.keys=function(){return Object.keys(s)},p.resolve=e,n.exports=p,p.id="5GH2"},AVdU:function(n,a,t){"use strict";t.d(a,"a",(function(){return s}));var s=function(){return function(n){var a=this;this.snippets={compiled:{},raw:{}},n.keys().forEach((function(t){var s=t.replace("./","").replace(/\W+(\w)/g,(function(n){return n[1].toUpperCase()})),p=n(t);p.snippet&&(a.snippets.compiled[s]=p.snippet),p.example&&(a.snippets.raw[s]=p.example)}))}}()},LcJ0:function(n,a){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token operator">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token operator">:</span> <span class="token string">\'./app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    value<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n    <span class="token function">randomize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n',example:"import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent {\n\n    value: number = 15;\n\n    randomize() {\n        this.value = Math.floor((Math.random() * 100) + 1);\n    }\n}\n"}},h7Qg:function(n,a,t){"use strict";t.r(a);var s,p=t("DUip"),e=t("7Q8i"),o=t("XtaT"),c=t("T/2f"),r=t("YZ8U"),u=t("AVdU"),l=t("yHOM"),i=t("TYT/"),k=t("+gXg"),b=t("2RDK"),m=t("COk8"),d=(s=function(n,a){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var t in a)a.hasOwnProperty(t)&&(n[t]=a[t])})(n,a)},function(n,a){function t(){this.constructor=n}s(n,a),n.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}),f=function(n){function a(){var a=n.call(this,t("5GH2"))||this;return a.value=15,a.playground={files:{"app.component.html":a.snippets.raw.appHtml,"app.component.ts":a.snippets.raw.appTs},modules:[{imports:["ProgressBarModule"],library:"@ux-aspects/ux-aspects"}]},a}return d(a,n),a.prototype.randomize=function(){this.value=Math.floor(100*Math.random()+1)},a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=i.Ob({type:a,selectors:[["uxd-progress-bar"]],features:[i.zb],decls:68,vars:5,consts:[["max","100",1,"m-b-md",3,"value"],["aria-hidden","true"],["type","button",1,"btn","btn-primary",3,"click"],["tableTitle","Inputs"],["uxd-api-property","","name","value","type","number"],["uxd-api-property","","name","min","type","number","defaultValue","0"],["uxd-api-property","","name","max","type","number","defaultValue","100"],["uxd-api-property","","name","trackColor","type","string","defaultValue","grey7"],["uxd-api-property","","name","barColor","type","string","defaultValue","accent"],[3,"minimal"],["heading","HTML"],["language","html",3,"content"],["heading","JavaScript"],["language","javascript",3,"content"]],template:function(n,a){1&n&&(i.ac(0,"ux-progress-bar",0),i.Sc(1,"\n    "),i.ac(2,"span",1),i.Sc(3),i.Zb(),i.Sc(4,"\n"),i.Zb(),i.Sc(5,"\n\n"),i.ac(6,"button",2),i.ic("click",(function(){return a.randomize()})),i.Sc(7,"Random"),i.Zb(),i.Sc(8,"\n\n"),i.Vb(9,"hr"),i.Sc(10,"\n\n"),i.ac(11,"p"),i.Sc(12,"\n    A progress bar can be created by using the "),i.ac(13,"code"),i.Sc(14,"ux-progress-bar"),i.Zb(),i.Sc(15," component. Custom content can be added to the\n    bar by adding HTML inside the "),i.ac(16,"code"),i.Sc(17,"ux-progress-bar"),i.Zb(),i.Sc(18," tag.\n"),i.Zb(),i.Sc(19,"\n\n"),i.ac(20,"p"),i.Sc(21,"\n    Additional contextual information can be provided to screen readers by adding an "),i.ac(22,"code"),i.Sc(23,"aria-valuetext"),i.Zb(),i.Sc(24," attribute\n    to the "),i.ac(25,"code"),i.Sc(26,"ux-progress-bar"),i.Zb(),i.Sc(27,".\n"),i.Zb(),i.Sc(28,"\n\n"),i.ac(29,"p"),i.Sc(30,"\n    The following attributes can be used to configure the appearance and behavior of the progress bar:\n"),i.Zb(),i.Sc(31,"\n\n"),i.ac(32,"uxd-api-properties",3),i.Sc(33,"\n    "),i.ac(34,"tr",4),i.Sc(35,"\n        The value the bar should represent. This will be compared to the "),i.ac(36,"code"),i.Sc(37,"max"),i.Zb(),i.Sc(38," value to determine the width of\n        the bar.\n    "),i.Zb(),i.Sc(39,"\n    "),i.ac(40,"tr",5),i.Sc(41,"\n        The lower limit of the bar.\n    "),i.Zb(),i.Sc(42,"\n    "),i.ac(43,"tr",6),i.Sc(44,"\n        The upper limit of the bar.\n    "),i.Zb(),i.Sc(45,"\n    "),i.ac(46,"tr",7),i.Sc(47,"\n        The color of the track.\n    "),i.Zb(),i.Sc(48,"\n    "),i.ac(49,"tr",8),i.Sc(50,"\n        The color of the bar.\n    "),i.Zb(),i.Sc(51,"\n"),i.Zb(),i.Sc(52,"\n\n"),i.ac(53,"p"),i.Sc(54,"The following code can be used to create the example above:"),i.Zb(),i.Sc(55,"\n\n"),i.ac(56,"ux-tabset",9),i.Sc(57,"\n    "),i.ac(58,"ux-tab",10),i.Sc(59,"\n        "),i.Vb(60,"uxd-snippet",11),i.Sc(61,"\n    "),i.Zb(),i.Sc(62,"\n    "),i.ac(63,"ux-tab",12),i.Sc(64,"\n        "),i.Vb(65,"uxd-snippet",13),i.Sc(66,"\n    "),i.Zb(),i.Sc(67,"\n"),i.Zb()),2&n&&(i.tc("value",a.value),i.Cb(3),i.Uc("",a.value,"%"),i.Cb(53),i.tc("minimal",!1),i.Cb(4),i.tc("content",a.snippets.compiled.appHtml),i.Cb(5),i.tc("content",a.snippets.compiled.appTs))},directives:[e.Kc,e.N,k.a,b.a,e.Kd,e.Fd,m.a],encapsulation:2}),a=function(n,a,t,s){var p,e=arguments.length,o=e<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,a,t,s);else for(var c=n.length-1;c>=0;c--)(p=n[c])&&(o=(e<3?p(o):e>3?p(a,t,o):p(a,t))||o);return e>3&&o&&Object.defineProperty(a,t,o),o}([Object(l.a)("ComponentsProgressBarComponent")],a)}(u.a);t.d(a,"ComponentsProgressModule",(function(){return v}));var g=[f],h=[{path:"**",component:c.a,data:{category:r.b.resolveCategoryData(r.a.Components,"Progress")}}],v=function(){function n(n,a){a.registerResolver(n,g)}return n.\u0275mod=i.Sb({type:n}),n.\u0275inj=i.Rb({factory:function(a){return new(a||n)(i.ec(i.j),i.ec(r.b))},imports:[[o.a,e.Lc,p.i.forChild(h),e.Ld]]}),n}();("undefined"==typeof ngJitMode||ngJitMode)&&i.Mc(v,{declarations:[f],imports:[o.a,e.Lc,p.i,e.Ld],exports:[f]})},"hIQ+":function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-progress-bar</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-b-md<span class="token punctuation">"</span></span> <span class="token attr-name">[value]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ value }}%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-progress-bar</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>randomize()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Random<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<ux-progress-bar class="m-b-md" [value]="value" max="100">\n    <span>{{ value }}%</span>\n</ux-progress-bar>\n\n<button type="button" class="btn btn-primary" (click)="randomize()">Random</button>'}}}]);
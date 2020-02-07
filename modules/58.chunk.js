(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{AVdU:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));var t=function(){return function(n){var l=this;this.snippets={compiled:{},raw:{}},n.keys().forEach((function(e){var t=e.replace("./","").replace(/\W+(\w)/g,(function(n){return n[1].toUpperCase()})),a=n(e);a.snippet&&(l.snippets.compiled[t]=a.snippet),a.example&&(l.snippets.raw[t]=a.example)}))}}()},BzPB:function(n,l){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token operator">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token operator">:</span> <span class="token string">\'./app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n',example:"import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent { }\n"}},FYag:function(n,l){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container-fluid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-md-12 text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n                <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn button-primary<span class="token punctuation">"</span></span>\n                <span class="token attr-name">uxPopover</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Popover content here!<span class="token punctuation">"</span></span>\n                <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                Launch Popover\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="container-fluid">\n    <div class="row">\n        <div class="col-md-12 text-center">\n            <button type="button"\n                class="btn btn button-primary"\n                uxPopover="Popover content here!"\n                placement="bottom">\n                Launch Popover\n            </button>\n        </div>\n    </div>\n</div>'}},"j+8b":function(n,l,e){var t={"./app.html":"FYag","./app.ts":"BzPB"};function a(n){var l=u(n);return e(l)}function u(n){if(!e.o(t,n)){var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}return t[n]}a.keys=function(){return Object.keys(t)},a.resolve=u,n.exports=a,a.id="j+8b"},zt8d:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),a=e("T/2f"),u=e("YZ8U"),p=e("mrSG"),s=e("AVdU"),o=e("yHOM"),d=function(n){function l(){var l=n.call(this,e("j+8b"))||this;return l.playground={files:{"app.component.html":l.snippets.raw.appHtml,"app.component.ts":l.snippets.raw.appTs},modules:[{imports:["PopoverModule"],library:"@ux-aspects/ux-aspects"}]},l}return Object(p.__extends)(l,n),Object(p.__decorate)([Object(o.a)("ComponentsPopoverComponent")],l)}(s.a),r={category:u.b.resolveCategoryData(u.a.Components,"Popover")},i=function(){return function(n,l){l.registerResolver(n)}}(),c=e("WmtN"),m=e("2lL+"),v=e("pMnS"),h=e("GBPT"),b=e("rYg0"),k=e("FcDf"),f=e("eDkP"),y=e("qAlS"),g=e("9hoY"),w=e("+gXg"),x=e("rpQh"),T=e("2RDK"),C=e("r1ng"),R=e("COk8"),P=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function V(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,12,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](2,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](4,0,null,null,6,"div",[["class","col-md-12 text-center"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n            "])),(n()(),t["\u0275eld"](6,16777216,null,null,3,"button",[["class","btn btn button-primary"],["placement","bottom"],["type","button"],["uxPopover","Popover content here!"]],[[1,"aria-expanded",0]],null,null,null,null)),t["\u0275did"](7,212992,null,0,k.ib,[t.ElementRef,k.dc,k.c,t.NgZone,[2,k.Gc]],null,null),t["\u0275did"](8,737280,null,0,k.Bd,[t.ElementRef,t.ViewContainerRef,f.a,y.b,t.ChangeDetectorRef,t.Renderer2,k.lf],{content:[0,"content"],placement:[1,"placement"]},null),(n()(),t["\u0275ted"](-1,null,["\n                Launch Popover\n            "])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](14,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](16,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    To add a popover to an element add the "])),(n()(),t["\u0275eld"](18,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["uxPopover"])),(n()(),t["\u0275ted"](-1,null,[" attribute with the required text.\n    The popover is placed at the "])),(n()(),t["\u0275eld"](21,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["top"])),(n()(),t["\u0275ted"](-1,null,[" by default.\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](25,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The following attributes can be used to configure the "])),(n()(),t["\u0275eld"](27,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["uxPopover"])),(n()(),t["\u0275ted"](-1,null,[" directive:"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](31,0,null,null,101,"uxd-api-properties",[["tableTitle","Inputs"]],null,null,null,g.b,g.a)),t["\u0275did"](32,49152,null,0,w.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](34,0,null,0,2,"tr",[["name","uxPopover"],["type","string | TemplateRef"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](35,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If a string is specified, the text will be displayed as the popover content.\n        If a TemplateRef is provided the content of the template will be inserted into the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](38,0,null,0,5,"tr",[["name","popoverDisabled"],["type","boolean"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](39,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set to "])),(n()(),t["\u0275eld"](41,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["true"])),(n()(),t["\u0275ted"](-1,0,[" the popover will not be shown by any of it's triggers.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](45,0,null,0,2,"tr",[["name","popoverTitle"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](46,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set, the popover will display a title above as the popover content.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](49,0,null,0,2,"tr",[["name","popoverClass"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](50,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set, the provided class will be added to the popover. This can be used to change the appearance of the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](53,0,null,0,2,"tr",[["defaultValue","popover"],["name","popoverRole"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](54,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set, this will alter the role of the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](57,0,null,0,2,"tr",[["name","popoverContext"],["type","object"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](58,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If a TemplateRef is used as the content this can be used to provide the template with data.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](61,0,null,0,2,"tr",[["name","popoverDelay"],["type","number"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](62,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If specified, the popover will wait the specified number of milliseconds before showing.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](65,0,null,0,5,"tr",[["defaultValue","false"],["name","isOpen"],["type","boolean"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](66,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set to "])),(n()(),t["\u0275eld"](68,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["true"])),(n()(),t["\u0275ted"](-1,0,[" this will programmatically show the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](72,0,null,0,14,"tr",[["defaultValue","top"],["name","placement"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](73,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Defines which direction the popover should appear relative to the trigger element. The possible values are\n        "])),(n()(),t["\u0275eld"](75,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["top"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](78,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["right"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](81,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["bottom"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](84,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["left"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](88,0,null,0,11,"tr",[["defaultValue","center"],["name","alignment"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](89,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Defines the position of the arrow relative to the popover. The possible values are\n        "])),(n()(),t["\u0275eld"](91,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["start"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](94,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["center"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](97,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["end"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](101,0,null,0,11,"tr",[["defaultValue","['click']"],["name","showTriggers"],["type","string[]"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](102,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Specifies which events will cause the popover to appear.\n        To manually control when the popover appears set this to an empty array.\n        Possible events are "])),(n()(),t["\u0275eld"](104,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["click"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](107,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["mouseenter"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](110,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["focus"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](114,0,null,0,17,"tr",[["defaultValue","['click', 'escape', 'clickoutside']"],["name","hideTriggers"],["type","string[]"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](115,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Specifies which events will cause the popover to hide.\n        To manually control when the popover hides set this to an empty array.\n        Possible events are "])),(n()(),t["\u0275eld"](117,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["click"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](120,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["mouseleave"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](123,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["blur"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](126,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["escape"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](129,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["clickoutside"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](134,0,null,null,14,"uxd-api-properties",[["tableTitle","Outputs"]],null,null,null,g.b,g.a)),t["\u0275did"](135,49152,null,0,w.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](137,0,null,0,2,"tr",[["name","shown"],["type","void"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](138,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        This event will be triggered when the popover is shown.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](141,0,null,0,2,"tr",[["name","hidden"],["type","void"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](142,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        This event will be triggered when the popover is hidden.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](145,0,null,0,2,"tr",[["name","isOpenChange"],["type","boolean"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](146,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        This event will be triggered when the popover is shown or hidden and will\n        be provided will a boolean representing the visibility of the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](150,0,null,null,14,"uxd-api-properties",[["tableTitle","Methods"]],null,null,null,g.b,g.a)),t["\u0275did"](151,49152,null,0,w.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](153,0,null,0,2,"tr",[["name","show"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](154,49152,null,0,T.a,[],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Open the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](157,0,null,0,2,"tr",[["name","hide"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](158,49152,null,0,T.a,[],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Hide the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](161,0,null,0,2,"tr",[["name","toggle"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](162,49152,null,0,T.a,[],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Toggle the visibility of the popover.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](166,0,null,null,12,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,m.wc,m.db)),t["\u0275prd"](512,null,k.Te,k.Te,[]),t["\u0275did"](168,4374528,null,1,k.Re,[k.Te,t.ChangeDetectorRef],{minimal:[0,"minimal"]},null),t["\u0275qud"](603979776,1,{_tabs:1}),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](171,0,null,0,6,"ux-tab",[["heading","HTML"]],null,null,null,m.vc,m.cb)),t["\u0275did"](172,180224,[[1,4]],1,k.Le,[k.Te,t.ChangeDetectorRef],{heading:[0,"heading"]},null),t["\u0275qud"](603979776,2,{headingRef:0}),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275eld"](175,0,null,0,1,"uxd-snippet",[],null,null,null,C.b,C.a)),t["\u0275did"](176,114688,null,0,R.a,[],{content:[0,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],(function(n,l){var e=l.component;n(l,7,0),n(l,8,0,"Popover content here!","bottom"),n(l,32,0,"Inputs"),n(l,35,0,"uxPopover","string | TemplateRef"),n(l,39,0,"popoverDisabled","boolean"),n(l,46,0,"popoverTitle","string"),n(l,50,0,"popoverClass","string"),n(l,54,0,"popoverRole","string","popover"),n(l,58,0,"popoverContext","object"),n(l,62,0,"popoverDelay","number"),n(l,66,0,"isOpen","boolean","false"),n(l,73,0,"placement","string","top"),n(l,89,0,"alignment","string","center"),n(l,102,0,"showTriggers","string[]","['click']"),n(l,115,0,"hideTriggers","string[]","['click', 'escape', 'clickoutside']"),n(l,135,0,"Outputs"),n(l,138,0,"shown","void"),n(l,142,0,"hidden","void"),n(l,146,0,"isOpenChange","boolean"),n(l,151,0,"Methods"),n(l,154,0,"show"),n(l,158,0,"hide"),n(l,162,0,"toggle"),n(l,168,0,!1),n(l,172,0,"HTML"),n(l,176,0,e.snippets.compiled.appHtml)}),(function(n,l){n(l,6,0,t["\u0275nov"](l,8).isVisible),n(l,166,0,"left"===t["\u0275nov"](l,168).stacked,"right"===t["\u0275nov"](l,168).stacked)}))}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-components-popover",[],null,null,null,V,P)),t["\u0275did"](1,49152,null,0,d,[],null,null)],null,null)}var D=t["\u0275ccf"]("uxd-components-popover",d,O,{},{},[]),I=e("Ip0R"),F=e("M2Lx"),L=e("lLAP"),z=e("gIcY"),M=e("Fzqc"),j=e("dWZg"),A=e("qina"),E=e("zCE2"),H=e("4c35"),U=e("ZYCi"),_=e("FLOw"),N=e("XtaT");e.d(l,"ComponentsPopoverModuleNgFactory",(function(){return S}));var S=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,m.tb,m.a,v.a,h.a,b.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,I.p,I.o,[t.LOCALE_ID,[2,I.E]]),t["\u0275mpd"](4608,F.c,F.c,[]),t["\u0275mpd"](4608,k.c,k.c,[[2,k.a]]),t["\u0275mpd"](4608,k.Q,k.Q,[]),t["\u0275mpd"](4608,k.dc,k.dc,[L.d,k.c,k.cc,[2,k.a],t.RendererFactory2]),t["\u0275mpd"](4608,k.Hc,k.Hc,[t.RendererFactory2]),t["\u0275mpd"](4608,z.A,z.A,[]),t["\u0275mpd"](4608,k.sc,k.sc,[[3,k.sc],[2,k.pc]]),t["\u0275mpd"](4608,f.a,f.a,[f.f,f.b,t.ComponentFactoryResolver,f.e,f.c,t.Injector,t.NgZone,I.d,M.b]),t["\u0275mpd"](5120,f.g,f.h,[f.a]),t["\u0275mpd"](4608,k.lf,k.lf,[]),t["\u0275mpd"](4608,k.zd,k.zd,[]),t["\u0275mpd"](1073742336,I.c,I.c,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,F.d,F.d,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,k.G,k.G,[]),t["\u0275mpd"](1073742336,k.b,k.b,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,k.rb,k.rb,[]),t["\u0275mpd"](1073742336,z.z,z.z,[]),t["\u0275mpd"](1073742336,z.l,z.l,[]),t["\u0275mpd"](1073742336,k.rc,k.rc,[]),t["\u0275mpd"](1073742336,M.a,M.a,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,f.d,f.d,[]),t["\u0275mpd"](1073742336,k.z,k.z,[]),t["\u0275mpd"](1073742336,k.kf,k.kf,[]),t["\u0275mpd"](1073742336,k.Cd,k.Cd,[]),t["\u0275mpd"](1073742336,U.s,U.s,[[2,U.x],[2,U.o]]),t["\u0275mpd"](1073742336,k.Zd,k.Zd,[]),t["\u0275mpd"](1073742336,_.a,_.a,[]),t["\u0275mpd"](1073742336,k.yd,k.yd,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,k.Se,k.Se,[]),t["\u0275mpd"](1073742336,i,i,[t.ComponentFactoryResolver,u.b]),t["\u0275mpd"](1024,U.m,(function(){return[[{path:"**",component:a.a,data:r}]]}),[])])}))}}]);
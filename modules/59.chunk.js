(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{AVdU:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(n){var l=this;this.snippets={compiled:{},raw:{}},n.keys().forEach(function(e){var t=e.replace("./","").replace(/\W+(\w)/g,function(n){return n[1].toUpperCase()}),a=n(e);a.snippet&&(l.snippets.compiled[t]=a.snippet),a.example&&(l.snippets.raw[t]=a.example)})}}()},BzPB:function(n,l){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token punctuation">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">\'./app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n',example:"import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent { }\n"}},FYag:function(n,l){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container-fluid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-md-12 text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n                <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn button-primary<span class="token punctuation">"</span></span>\n                <span class="token attr-name">uxPopover</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Popover content here!<span class="token punctuation">"</span></span>\n                <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                Launch Popover\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="container-fluid">\n    <div class="row">\n        <div class="col-md-12 text-center">\n            <button type="button"\n                class="btn btn button-primary"\n                uxPopover="Popover content here!"\n                placement="bottom">\n                Launch Popover\n            </button>\n        </div>\n    </div>\n</div>'}},"j+8b":function(n,l,e){var t={"./app.html":"FYag","./app.ts":"BzPB"};function a(n){var l=u(n);return e(l)}function u(n){var l=t[n];if(!(l+1)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return l}a.keys=function(){return Object.keys(t)},a.resolve=u,n.exports=a,a.id="j+8b"},zt8d:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),a=e("T/2f"),u=e("YZ8U"),p=e("mrSG"),o=e("AVdU"),s=e("yHOM"),d=function(n){function l(){var l=n.call(this,e("j+8b"))||this;return l.playground={files:{"app.component.html":l.snippets.raw.appHtml,"app.component.ts":l.snippets.raw.appTs},modules:[{imports:["PopoverModule"],library:"@ux-aspects/ux-aspects"}]},l}return Object(p.__extends)(l,n),Object(p.__decorate)([Object(s.a)("ComponentsPopoverComponent")],l)}(o.a),i={category:u.b.resolveCategoryData(u.a.Components,"Popover")},r=function(){return function(n,l){l.registerResolver(n)}}(),c=e("WmtN"),m=e("2lL+"),v=e("pMnS"),b=e("GBPT"),h=e("rYg0"),k=e("FcDf"),y=e("eDkP"),f=e("qAlS"),g=e("9hoY"),w=e("+gXg"),x=e("rpQh"),T=e("2RDK"),C=e("r1ng"),P=e("COk8"),R=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function V(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,12,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](2,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](4,0,null,null,6,"div",[["class","col-md-12 text-center"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n            "])),(n()(),t["\u0275eld"](6,16777216,null,null,3,"button",[["class","btn btn button-primary"],["placement","bottom"],["type","button"],["uxPopover","Popover content here!"]],[[1,"aria-expanded",0]],null,null,null,null)),t["\u0275did"](7,212992,null,0,k.gb,[t.ElementRef,k.cc,k.c,t.NgZone,[2,k.Dc]],null,null),t["\u0275did"](8,737280,null,0,k.wd,[t.ElementRef,t.ViewContainerRef,y.a,f.b,t.ChangeDetectorRef,t.Renderer2,k.ff],{content:[0,"content"],placement:[1,"placement"]},null),(n()(),t["\u0275ted"](-1,null,["\n                Launch Popover\n            "])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](14,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](16,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    To add a popover to an element add the "])),(n()(),t["\u0275eld"](18,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["uxPopover"])),(n()(),t["\u0275ted"](-1,null,[" attribute with the required text.\n    The popover is placed at the "])),(n()(),t["\u0275eld"](21,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["top"])),(n()(),t["\u0275ted"](-1,null,[" by default.\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](25,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The following attributes can be used to configure the "])),(n()(),t["\u0275eld"](27,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["uxPopover"])),(n()(),t["\u0275ted"](-1,null,[" directive:"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](31,0,null,null,102,"uxd-api-properties",[["tableTitle","Inputs"]],null,null,null,g.b,g.a)),t["\u0275did"](32,49152,null,0,w.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](34,0,null,0,99,"tbody",[],null,null,null,null,null)),(n()(),t["\u0275eld"](35,0,null,null,2,"tr",[["name","uxPopover"],["type","string | TemplateRef"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](36,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If a string is specified, the text will be displayed as the popover content.\n        If a TemplateRef is provided the content of the template will be inserted into the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](39,0,null,null,5,"tr",[["name","popoverDisabled"],["type","boolean"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](40,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set to "])),(n()(),t["\u0275eld"](42,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["true"])),(n()(),t["\u0275ted"](-1,0,[" the popover will not be shown by any of it's triggers.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](46,0,null,null,2,"tr",[["name","popoverTitle"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](47,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set, the popover will display a title above as the popover content.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](50,0,null,null,2,"tr",[["name","popoverClass"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](51,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set, the provided class will be added to the popover. This can be used to change the appearance of the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](54,0,null,null,2,"tr",[["defaultValue","popover"],["name","popoverRole"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](55,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set, this will alter the role of the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](58,0,null,null,2,"tr",[["name","popoverContext"],["type","object"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](59,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If a TemplateRef is used as the content this can be used to provide the template with data.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](62,0,null,null,2,"tr",[["name","popoverDelay"],["type","number"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](63,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If specified, the popover will wait the specified number of milliseconds before showing.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](66,0,null,null,5,"tr",[["defaultValue","false"],["name","isOpen"],["type","boolean"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](67,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        If set to "])),(n()(),t["\u0275eld"](69,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["true"])),(n()(),t["\u0275ted"](-1,0,[" this will programmatically show the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](73,0,null,null,14,"tr",[["defaultValue","top"],["name","placement"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](74,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Defines which direction the popover should appear relative to the trigger element. The possible values are\n        "])),(n()(),t["\u0275eld"](76,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["top"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](79,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["right"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](82,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["bottom"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](85,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["left"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](89,0,null,null,11,"tr",[["defaultValue","center"],["name","alignment"],["type","string"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](90,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Defines the position of the arrow relative to the popover. The possible values are\n        "])),(n()(),t["\u0275eld"](92,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["start"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](95,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["center"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](98,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["end"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](102,0,null,null,11,"tr",[["defaultValue","['click']"],["name","showTriggers"],["type","string[]"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](103,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Specifies which events will cause the popover to appear.\n        To manually control when the popover appears set this to an empty array.\n        Possible events are "])),(n()(),t["\u0275eld"](105,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["click"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](108,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["mouseenter"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](111,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["focus"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](115,0,null,null,17,"tr",[["defaultValue","['click', 'escape', 'clickoutside']"],["name","hideTriggers"],["type","string[]"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](116,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Specifies which events will cause the popover to hide.\n        To manually control when the popover hides set this to an empty array.\n        Possible events are "])),(n()(),t["\u0275eld"](118,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["click"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](121,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["mouseleave"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](124,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["blur"])),(n()(),t["\u0275ted"](-1,0,[", "])),(n()(),t["\u0275eld"](127,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["escape"])),(n()(),t["\u0275ted"](-1,0,[" and "])),(n()(),t["\u0275eld"](130,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["clickoutside"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](135,0,null,null,15,"uxd-api-properties",[["tableTitle","Outputs"]],null,null,null,g.b,g.a)),t["\u0275did"](136,49152,null,0,w.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](138,0,null,0,12,"tbody",[],null,null,null,null,null)),(n()(),t["\u0275eld"](139,0,null,null,2,"tr",[["name","shown"],["type","void"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](140,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        This event will be triggered when the popover is shown.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](143,0,null,null,2,"tr",[["name","hidden"],["type","void"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](144,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        This event will be triggered when the popover is hidden.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](147,0,null,null,2,"tr",[["name","isOpenChange"],["type","boolean"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](148,49152,null,0,T.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        This event will be triggered when the popover is shown or hidden and will\n        be provided will a boolean representing the visibility of the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](152,0,null,null,15,"uxd-api-properties",[["tableTitle","Methods"]],null,null,null,g.b,g.a)),t["\u0275did"](153,49152,null,0,w.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](155,0,null,0,12,"tbody",[],null,null,null,null,null)),(n()(),t["\u0275eld"](156,0,null,null,2,"tr",[["name","show"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](157,49152,null,0,T.a,[],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Open the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](160,0,null,null,2,"tr",[["name","hide"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](161,49152,null,0,T.a,[],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Hide the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](164,0,null,null,2,"tr",[["name","toggle"],["uxd-api-property",""]],null,null,null,x.b,x.a)),t["\u0275did"](165,49152,null,0,T.a,[],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,["\n        Toggle the visibility of the popover.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](169,0,null,null,11,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,m.sc,m.bb)),t["\u0275prd"](512,null,k.Ne,k.Ne,[]),t["\u0275did"](171,5423104,null,1,k.Le,[k.Ne],{minimal:[0,"minimal"]},null),t["\u0275qud"](603979776,1,{tabs:1}),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](174,0,null,0,5,"ux-tab",[["heading","HTML"]],null,null,null,m.rc,m.ab)),t["\u0275did"](175,180224,[[1,4]],0,k.Ee,[k.Ne],{heading:[0,"heading"]},null),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275eld"](177,0,null,0,1,"uxd-snippet",[],null,null,null,C.b,C.a)),t["\u0275did"](178,114688,null,0,P.a,[],{content:[0,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,l){var e=l.component;n(l,7,0),n(l,8,0,"Popover content here!","bottom"),n(l,32,0,"Inputs"),n(l,36,0,"uxPopover","string | TemplateRef"),n(l,40,0,"popoverDisabled","boolean"),n(l,47,0,"popoverTitle","string"),n(l,51,0,"popoverClass","string"),n(l,55,0,"popoverRole","string","popover"),n(l,59,0,"popoverContext","object"),n(l,63,0,"popoverDelay","number"),n(l,67,0,"isOpen","boolean","false"),n(l,74,0,"placement","string","top"),n(l,90,0,"alignment","string","center"),n(l,103,0,"showTriggers","string[]","['click']"),n(l,116,0,"hideTriggers","string[]","['click', 'escape', 'clickoutside']"),n(l,136,0,"Outputs"),n(l,140,0,"shown","void"),n(l,144,0,"hidden","void"),n(l,148,0,"isOpenChange","boolean"),n(l,153,0,"Methods"),n(l,157,0,"show"),n(l,161,0,"hide"),n(l,165,0,"toggle"),n(l,171,0,!1),n(l,175,0,"HTML"),n(l,178,0,e.snippets.compiled.appHtml)},function(n,l){n(l,6,0,t["\u0275nov"](l,8).isVisible),n(l,169,0,"left"===t["\u0275nov"](l,171).stacked,"right"===t["\u0275nov"](l,171).stacked)})}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-components-popover",[],null,null,null,V,R)),t["\u0275did"](1,49152,null,0,d,[],null,null)],null,null)}var D=t["\u0275ccf"]("uxd-components-popover",d,O,{},{},[]),L=e("Ip0R"),M=e("M2Lx"),I=e("lLAP"),F=e("gIcY"),N=e("Fzqc"),E=e("dWZg"),_=e("qina"),j=e("zCE2"),z=e("4c35"),U=e("ZYCi"),A=e("FLOw"),B=e("XtaT");e.d(l,"ComponentsPopoverModuleNgFactory",function(){return S});var S=t["\u0275cmf"](r,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,m.rb,m.a,v.a,b.a,h.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[t.LOCALE_ID,[2,L["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,M.c,M.c,[]),t["\u0275mpd"](4608,k.c,k.c,[[2,k.a]]),t["\u0275mpd"](4608,k.Q,k.Q,[]),t["\u0275mpd"](4608,k.cc,k.cc,[I.d,k.c,k.bc,[2,k.a],t.RendererFactory2]),t["\u0275mpd"](4608,k.Ec,k.Ec,[t.RendererFactory2]),t["\u0275mpd"](4608,F.B,F.B,[]),t["\u0275mpd"](4608,y.a,y.a,[y.f,y.b,t.ComponentFactoryResolver,y.e,y.c,t.Injector,t.NgZone,L.DOCUMENT,N.b]),t["\u0275mpd"](5120,y.g,y.h,[y.a]),t["\u0275mpd"](4608,k.ff,k.ff,[]),t["\u0275mpd"](4608,k.ud,k.ud,[]),t["\u0275mpd"](1073742336,L.CommonModule,L.CommonModule,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,M.d,M.d,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,k.G,k.G,[]),t["\u0275mpd"](1073742336,k.b,k.b,[]),t["\u0275mpd"](1073742336,_.a,_.a,[]),t["\u0275mpd"](1073742336,j.a,j.a,[]),t["\u0275mpd"](1073742336,k.pb,k.pb,[]),t["\u0275mpd"](1073742336,F.y,F.y,[]),t["\u0275mpd"](1073742336,F.l,F.l,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,f.a,f.a,[]),t["\u0275mpd"](1073742336,y.d,y.d,[]),t["\u0275mpd"](1073742336,k.z,k.z,[]),t["\u0275mpd"](1073742336,k.ef,k.ef,[]),t["\u0275mpd"](1073742336,k.xd,k.xd,[]),t["\u0275mpd"](1073742336,U.p,U.p,[[2,U.v],[2,U.m]]),t["\u0275mpd"](1073742336,k.Sd,k.Sd,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,k.td,k.td,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,k.Me,k.Me,[]),t["\u0275mpd"](1073742336,r,r,[t.ComponentFactoryResolver,u.b]),t["\u0275mpd"](1024,U.k,function(){return[[{path:"**",component:a.a,data:i}]]},[])])})}}]);
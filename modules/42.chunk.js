(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"9LNQ":function(n,a){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> ViewChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ux-aspects/ux-aspects\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseChartDirective <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ng2-charts\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token operator">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token operator">:</span> <span class="token string">\'./app.component.html\'</span><span class="token punctuation">,</span>\n    styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./app.component.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// access the chart directive properties</span>\n    @<span class="token function">ViewChild</span><span class="token punctuation">(</span>BaseChartDirective<span class="token punctuation">)</span> baseChart<span class="token operator">:</span> BaseChartDirective<span class="token punctuation">;</span>\n\n    <span class="token comment">// configure the directive data</span>\n    lineChartData<span class="token operator">:</span> Chart<span class="token punctuation">.</span>ChartDataSets<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    lineChartOptions<span class="token operator">:</span> Chart<span class="token punctuation">.</span>ChartOptions<span class="token punctuation">;</span>\n    lineChartLegend<span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    lineChartColors<span class="token operator">:</span> any<span class="token punctuation">;</span>\n\n    livedata<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">colorService<span class="token operator">:</span> ColorService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">let</span> gridColor <span class="token operator">=</span> colorService<span class="token punctuation">.</span><span class="token function">getColor</span><span class="token punctuation">(</span><span class="token string">\'grey6\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> lineBorderColor <span class="token operator">=</span> colorService<span class="token punctuation">.</span><span class="token function">getColor</span><span class="token punctuation">(</span><span class="token string">\'chart1\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toRgb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> lineFillColor <span class="token operator">=</span> colorService<span class="token punctuation">.</span><span class="token function">getColor</span><span class="token punctuation">(</span><span class="token string">\'chart1\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAlpha</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toRgba</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// set the initial chart data</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateChartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>lineChartOptions <span class="token operator">=</span> <span class="token punctuation">{</span>\n            maintainAspectRatio<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            responsive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            animation<span class="token operator">:</span> <span class="token punctuation">{</span>\n                duration<span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            elements<span class="token operator">:</span> <span class="token punctuation">{</span>\n                line<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    tension<span class="token operator">:</span> <span class="token number">0</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            scales<span class="token operator">:</span> <span class="token punctuation">{</span>\n                xAxes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                    type<span class="token operator">:</span> <span class="token string">\'linear\'</span><span class="token punctuation">,</span>\n                    position<span class="token operator">:</span> <span class="token string">\'bottom\'</span><span class="token punctuation">,</span>\n                    ticks<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                        max<span class="token operator">:</span> <span class="token number">299</span><span class="token punctuation">,</span>\n                        step<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n                        fontSize<span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">/* Hide Labels on X Axis */</span>\n                    <span class="token punctuation">}</span> <span class="token keyword">as</span> Chart<span class="token punctuation">.</span>LinearTickOptions<span class="token punctuation">,</span>\n                    gridLines<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        color<span class="token operator">:</span> gridColor\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                yAxes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                    ticks<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                        max<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n                        stepSize<span class="token operator">:</span> <span class="token number">25</span>\n                    <span class="token punctuation">}</span> <span class="token keyword">as</span> Chart<span class="token punctuation">.</span>LinearTickOptions<span class="token punctuation">,</span>\n                    gridLines<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        color<span class="token operator">:</span> gridColor\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            tooltips<span class="token operator">:</span> <span class="token punctuation">{</span>\n                enabled<span class="token operator">:</span> <span class="token boolean">false</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>lineChartColors <span class="token operator">=</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                borderColor<span class="token operator">:</span> lineBorderColor<span class="token punctuation">,</span>\n                backgroundColor<span class="token operator">:</span> lineFillColor<span class="token punctuation">,</span>\n                pointBackgroundColor<span class="token operator">:</span> <span class="token string">\'transparent\'</span><span class="token punctuation">,</span>\n                pointBorderColor<span class="token operator">:</span> <span class="token string">\'transparent\'</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token comment">// update chart data every 40ms</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateChartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">updateChartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token comment">// instatiate new array to trigger change detection</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>lineChartData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span>Chart<span class="token punctuation">.</span>ChartDataSets<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>lineChartData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            data<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            borderWidth<span class="token operator">:</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">getRandomData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> number<span class="token punctuation">,</span> y<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>livedata <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">;</span>\n            <span class="token keyword">let</span> y <span class="token operator">=</span> previous <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>y <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> y <span class="token operator">></span> <span class="token number">100</span> <span class="token operator">?</span> <span class="token number">100</span> <span class="token operator">:</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// zip the generated y values with the x values</span>\n        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                x<span class="token operator">:</span> i<span class="token punctuation">,</span>\n                y<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>livedata<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>',example:"import { Component, ViewChild } from '@angular/core';\nimport { ColorService } from '@ux-aspects/ux-aspects';\nimport { BaseChartDirective } from 'ng2-charts';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html',\n    styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n\n    // access the chart directive properties\n    @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;\n\n    // configure the directive data\n    lineChartData: Chart.ChartDataSets[];\n    lineChartOptions: Chart.ChartOptions;\n    lineChartLegend: boolean = false;\n    lineChartColors: any;\n\n    livedata: number[] = [];\n\n    constructor(colorService: ColorService) {\n\n        let gridColor = colorService.getColor('grey6').toHex();\n        let lineBorderColor = colorService.getColor('chart1').toRgb();\n        let lineFillColor = colorService.getColor('chart1').setAlpha(0.1).toRgba();\n\n        // set the initial chart data\n        this.updateChartData();\n\n        this.lineChartOptions = {\n            maintainAspectRatio: false,\n            responsive: true,\n            animation: {\n                duration: 0\n            },\n            elements: {\n                line: {\n                    tension: 0\n                }\n            },\n            scales: {\n                xAxes: [{\n                    type: 'linear',\n                    position: 'bottom',\n                    ticks: {\n                        min: 0,\n                        max: 299,\n                        step: 50,\n                        fontSize: 0 /* Hide Labels on X Axis */\n                    } as Chart.LinearTickOptions,\n                    gridLines: {\n                        color: gridColor\n                    }\n                }],\n                yAxes: [{\n                    ticks: {\n                        min: 0,\n                        max: 100,\n                        stepSize: 25\n                    } as Chart.LinearTickOptions,\n                    gridLines: {\n                        color: gridColor\n                    }\n                }]\n            },\n            tooltips: {\n                enabled: false\n            }\n        };\n\n        this.lineChartColors = [\n            {\n                borderColor: lineBorderColor,\n                backgroundColor: lineFillColor,\n                pointBackgroundColor: 'transparent',\n                pointBorderColor: 'transparent'\n            }\n        ];\n\n        setInterval(() => {\n            // update chart data every 40ms\n            this.updateChartData();\n        }, 40);\n    }\n\n    updateChartData() {\n\n        // instatiate new array to trigger change detection\n        this.lineChartData = new Array<Chart.ChartDataSets>();\n\n        this.lineChartData.push({\n            data: this.getRandomData(),\n            borderWidth: 1\n        });\n    }\n\n    getRandomData(): { x: number, y: number }[] {\n\n        if (this.livedata.length) {\n            this.livedata = this.livedata.slice(1);\n        }\n\n        while (this.livedata.length < 300) {\n            let previous = this.livedata.length ? this.livedata[this.livedata.length - 1] : 50;\n            let y = previous + Math.random() * 10 - 5;\n\n            this.livedata.push(y < 0 ? 0 : y > 100 ? 100 : y);\n        }\n\n        // zip the generated y values with the x values\n        let res = [];\n        for (let i = 0; i < this.livedata.length; ++i) {\n            res.push({\n                x: i,\n                y: this.livedata[i]\n            });\n        }\n\n        return res;\n    }\n\n}"}},AVdU:function(n,a,s){"use strict";s.d(a,"a",(function(){return t}));var t=function(){return function(n){var a=this;this.snippets={compiled:{},raw:{}},n.keys().forEach((function(s){var t=s.replace("./","").replace(/\W+(\w)/g,(function(n){return n[1].toUpperCase()})),p=n(s);p.snippet&&(a.snippets.compiled[t]=p.snippet),p.example&&(a.snippets.raw[t]=p.example)}))}}()},V2IN:function(n,a,s){"use strict";s.r(a);var t,p=s("DUip"),o=s("7Q8i"),e=s("KLty"),c=s("XtaT"),l=s("T/2f"),r=s("YZ8U"),i=s("AVdU"),u=s("yHOM"),k=s("TYT/"),h=s("+gXg"),d=s("2RDK"),b=s("COk8"),m=(t=function(n,a){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)a.hasOwnProperty(s)&&(n[s]=a[s])})(n,a)},function(n,a){function s(){this.constructor=n}t(n,a),n.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}),C=function(n){function a(a){var t=n.call(this,s("s89H"))||this;t.playground={files:{"app.component.ts":t.snippets.raw.liveChartTs,"app.component.html":t.snippets.raw.liveChartHtml,"app.component.css":t.snippets.raw.liveChartCss},modules:[{library:"chart.js"},{imports:["ChartsModule"],library:"ng2-charts"},{imports:["ColorServiceModule"],library:"@ux-aspects/ux-aspects"}]},t.lineChartLegend=!1,t.livedata=[];var p=a.getColor("grey6").toHex(),o=a.getColor("chart1").toRgb(),e=a.getColor("chart1").setAlpha(.1).toRgba();return t.updateChartData(),t.lineChartOptions={maintainAspectRatio:!1,responsive:!0,animation:{duration:0},elements:{line:{tension:0}},scales:{xAxes:[{type:"linear",position:"bottom",ticks:{min:0,max:299,step:50,fontSize:0},gridLines:{color:p}}],yAxes:[{ticks:{min:0,max:100,stepSize:25},gridLines:{color:p}}]},tooltips:{enabled:!1}},t.lineChartColors=[{borderColor:o,backgroundColor:e,pointBackgroundColor:"transparent",pointBorderColor:"transparent"}],setInterval((function(){t.updateChartData()}),40),t}return m(a,n),a.prototype.updateChartData=function(){this.lineChartData=new Array,this.lineChartData.push({data:this.getRandomData(),borderWidth:1})},a.prototype.getRandomData=function(){for(this.livedata.length&&(this.livedata=this.livedata.slice(1));this.livedata.length<300;){var n=(this.livedata.length?this.livedata[this.livedata.length-1]:50)+10*Math.random()-5;this.livedata.push(n<0?0:n>100?100:n)}for(var a=[],s=0;s<this.livedata.length;++s)a.push({x:s,y:this.livedata[s]});return a},a.\u0275fac=function(n){return new(n||a)(k.Ub(o.t))},a.\u0275cmp=k.Ob({type:a,selectors:[["uxd-charts-live-chart"]],viewQuery:function(n,a){var s;1&n&&k.Oc(e.a,!0),2&n&&k.Cc(s=k.jc())&&(a.baseChart=s.first)},features:[k.zb],decls:146,vars:8,consts:[[1,"demo-chart-container"],["baseChart","","chartType","line",3,"datasets","options","legend","colors"],["tableTitle","Inputs"],["uxd-api-property","","name","dataSets","type","object[]"],["uxd-api-property","","name","chartType","type","string"],["uxd-api-property","","name","options","type","ChartOptions"],["uxd-api-property","","name","colors","type","object[]"],["uxd-api-property","","name","legend","type","boolean"],["tableTitle","Outputs"],["uxd-api-property","","name","chartClick"],["uxd-api-property","","name","chartHover"],[3,"minimal"],["heading","HTML"],["language","html",3,"content"],["heading","TypeScript"],["language","javascript",3,"content"],["heading","CSS"],["language","css",3,"content"],[1,"m-b-nil"],["href","https://www.npmjs.com/package/ng2-charts",1,"hyperlink"],["href","https://www.npmjs.com/package/chart.js",1,"hyperlink"],["href","https://www.npmjs.com/package/@types/chart.js",1,"hyperlink"],["href","http://valor-software.com/ng2-charts/",1,"hyperlink"],["href","http://www.chartjs.org/docs/",1,"hyperlink"]],template:function(n,a){1&n&&(k.ac(0,"div",0),k.Sc(1,"\n\n    "),k.ac(2,"canvas",1),k.Sc(3,"\n    "),k.Zb(),k.Sc(4,"\n\n"),k.Zb(),k.Sc(5,"\n\n"),k.Vb(6,"hr"),k.Sc(7,"\n\n"),k.ac(8,"p"),k.Sc(9,"\n    Live Charts can be added using the "),k.ac(10,"code"),k.Sc(11,"ng2-charts"),k.Zb(),k.Sc(12," library. \n    The "),k.ac(13,"code"),k.Sc(14,"chart.js"),k.Zb(),k.Sc(15," library needs to be imported and the "),k.ac(16,"code"),k.Sc(17,"ChartsModule"),k.Zb(),k.Sc(18," needs to be added to the appropriate NgModule.\n"),k.Zb(),k.Sc(19,"\n\n"),k.Vb(20,"br"),k.Sc(21,"\n\n"),k.ac(22,"p"),k.Sc(23,"The "),k.ac(24,"code"),k.Sc(25,"baseChart"),k.Zb(),k.Sc(26," directive should be added to a "),k.ac(27,"code"),k.Sc(28,"canvas"),k.Zb(),k.Sc(29," element and the following attributes can be used to customize the chart behavior and appearance:"),k.Zb(),k.Sc(30,"\n\n"),k.ac(31,"uxd-api-properties",2),k.Sc(32,"\n    "),k.ac(33,"tr",3),k.Sc(34,"\n        Contains the data and properties for each data set to be displayed in the chart.\n    "),k.Zb(),k.Sc(35,"\n    "),k.ac(36,"tr",4),k.Sc(37,"\n        Indicates the type of the chart. Possible options are: "),k.ac(38,"code"),k.Sc(39,"line"),k.Zb(),k.Sc(40,", "),k.ac(41,"code"),k.Sc(42,"bar"),k.Zb(),k.Sc(43,", "),k.ac(44,"code"),k.Sc(45,"radar"),k.Zb(),k.Sc(46,", "),k.ac(47,"code"),k.Sc(48,"pie"),k.Zb(),k.Sc(49,", "),k.ac(50,"code"),k.Sc(51,"polarArea"),k.Zb(),k.Sc(52,", "),k.ac(53,"code"),k.Sc(54,"doughnut"),k.Zb(),k.Sc(55,"\n    "),k.Zb(),k.Sc(56,"\n    "),k.ac(57,"tr",5),k.Sc(58,"\n        Configures the appearance and behavior of all aspects of the chart.\n    "),k.Zb(),k.Sc(59,"\n    "),k.ac(60,"tr",6),k.Sc(61,"\n        Configure the color values to be used within the chart.\n    "),k.Zb(),k.Sc(62,"\n    "),k.ac(63,"tr",7),k.Sc(64,"\n        Determines whether or not the legend should be displayed.\n    "),k.Zb(),k.Sc(65,"\n"),k.Zb(),k.Sc(66,"\n\n"),k.ac(67,"uxd-api-properties",8),k.Sc(68,"\n    "),k.ac(69,"tr",9),k.Sc(70,"\n        Fires when click on a chart has occurred, returns information regarding active points and labels.\n    "),k.Zb(),k.Sc(71,"\n    "),k.ac(72,"tr",10),k.Sc(73,"\n        Fires when mousemove (hover) on a chart has occurred, returns information regarding active points and labels.\n    "),k.Zb(),k.Sc(74,"\n"),k.Zb(),k.Sc(75,"\n\n"),k.ac(76,"p"),k.Sc(77,"Complete documentation on the directive and chart options can be found at the documentation links below."),k.Zb(),k.Sc(78,"\n\n"),k.ac(79,"p"),k.Sc(80,"The following code can be used to create the example above: "),k.Zb(),k.Sc(81,"\n\n"),k.ac(82,"ux-tabset",11),k.Sc(83,"\n\n    "),k.ac(84,"ux-tab",12),k.Sc(85,"\n        "),k.Vb(86,"uxd-snippet",13),k.Sc(87,"\n    "),k.Zb(),k.Sc(88,"\n\n    "),k.ac(89,"ux-tab",14),k.Sc(90,"\n        "),k.Vb(91,"uxd-snippet",15),k.Sc(92,"\n    "),k.Zb(),k.Sc(93,"\n\n    "),k.ac(94,"ux-tab",16),k.Sc(95,"\n        "),k.Vb(96,"uxd-snippet",17),k.Sc(97,"\n    "),k.Zb(),k.Sc(98,"\n\n"),k.Zb(),k.Sc(99,"\n\n"),k.Vb(100,"br"),k.Sc(101,"\n\n"),k.ac(102,"blockquote"),k.Sc(103,"\n\n    "),k.ac(104,"p",18),k.Sc(105,"\n        "),k.ac(106,"b"),k.Sc(107,"Dependencies: "),k.Zb(),k.Sc(108,"\n        "),k.ac(109,"a",19),k.Sc(110,"ng2-charts"),k.Zb(),k.Sc(111,", \n        "),k.ac(112,"a",20),k.Sc(113,"chart.js"),k.Zb(),k.Sc(114,"\n    "),k.Zb(),k.Sc(115,"\n\n    "),k.ac(116,"p",18),k.Sc(117,"\n        "),k.ac(118,"b"),k.Sc(119,"Type Definitions: "),k.Zb(),k.Sc(120,"\n        "),k.ac(121,"a",21),k.Sc(122,"@types/chart.js"),k.Zb(),k.Sc(123,"\n    "),k.Zb(),k.Sc(124,"\n\n    "),k.ac(125,"p",18),k.Sc(126,"\n        "),k.ac(127,"b"),k.Sc(128,"Modules: "),k.Zb(),k.Sc(129,"\n        "),k.ac(130,"span"),k.Sc(131,"ChartsModule"),k.Zb(),k.Sc(132,"\n    "),k.Zb(),k.Sc(133,"\n\n\n    "),k.ac(134,"p",18),k.Sc(135,"\n        "),k.ac(136,"b"),k.Sc(137,"Documentation: "),k.Zb(),k.Sc(138,"\n        "),k.ac(139,"a",22),k.Sc(140,"Angular Directive Documentation"),k.Zb(),k.Sc(141,", \n        "),k.ac(142,"a",23),k.Sc(143,"Chart Library Documentation"),k.Zb(),k.Sc(144,"\n    "),k.Zb(),k.Sc(145,"\n"),k.Zb()),2&n&&(k.Cb(2),k.tc("datasets",a.lineChartData)("options",a.lineChartOptions)("legend",a.lineChartLegend)("colors",a.lineChartColors),k.Cb(80),k.tc("minimal",!1),k.Cb(4),k.tc("content",a.snippets.compiled.liveChartHtml),k.Cb(5),k.tc("content",a.snippets.compiled.liveChartTs),k.Cb(5),k.tc("content",a.snippets.compiled.liveChartCss))},directives:[e.a,h.a,d.a,o.Kd,o.Fd,b.a,o.N],encapsulation:2}),a=function(n,a,s,t){var p,o=arguments.length,e=o<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(n,a,s,t);else for(var c=n.length-1;c>=0;c--)(p=n[c])&&(e=(o<3?p(e):o>3?p(a,s,e):p(a,s))||e);return o>3&&e&&Object.defineProperty(a,s,e),e}([Object(u.a)("ChartsLiveChartComponent")],a)}(i.a);s.d(a,"ChartsLiveChartsModule",(function(){return y}));var g=[C],v=[{path:"**",component:l.a,data:{category:r.b.resolveCategoryData(r.a.Charts,"Live Chart")}}],y=function(){function n(n,a){a.registerResolver(n,g)}return n.\u0275mod=k.Sb({type:n}),n.\u0275inj=k.Rb({factory:function(a){return new(a||n)(k.ec(k.j),k.ec(r.b))},imports:[[e.b,o.u,c.a,p.i.forChild(v),o.Ld]]}),n}();("undefined"==typeof ngJitMode||ngJitMode)&&k.Mc(y,{declarations:[C],imports:[e.b,o.u,c.a,p.i,o.Ld],exports:[C]})},"fRG/":function(n,a){n.exports={snippet:'<span class="token selector">.demo-chart-container</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:".demo-chart-container {\n    display: block;\n    position: relative;\n    height: 200px;\n}"}},"lR+T":function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-chart-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">baseChart</span> \n            <span class="token attr-name">[datasets]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lineChartData<span class="token punctuation">"</span></span>\n            <span class="token attr-name">[options]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lineChartOptions<span class="token punctuation">"</span></span>\n            <span class="token attr-name">[legend]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lineChartLegend<span class="token punctuation">"</span></span>\n            <span class="token attr-name">[colors]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lineChartColors<span class="token punctuation">"</span></span>\n            <span class="token attr-name">chartType</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>line<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="demo-chart-container">\n\n    <canvas baseChart \n            [datasets]="lineChartData"\n            [options]="lineChartOptions"\n            [legend]="lineChartLegend"\n            [colors]="lineChartColors"\n            chartType="line">\n    </canvas>\n\n</div>'}},s89H:function(n,a,s){var t={"./live-chart.css":"fRG/","./live-chart.html":"lR+T","./live-chart.ts":"9LNQ"};function p(n){var a=o(n);return s(a)}function o(n){if(!s.o(t,n)){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}return t[n]}p.keys=function(){return Object.keys(t)},p.resolve=o,n.exports=p,p.id="s89H"}}]);
webpackJsonp([2],{ARoL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),s=a.n(n),r=a("NYxO"),o={name:"dashboard",data:function(){return{chartData:{columns:["日期","成本","利润"],rows:[{"日期":"1月1号","成本":123,"利润":3},{"日期":"1月2号","成本":1223,"利润":6},{"日期":"1月3号","成本":2123,"利润":9},{"日期":"1月4号","成本":4123,"利润":12},{"日期":"1月5号","成本":3123,"利润":15},{"日期":"1月6号","成本":7123,"利润":20}]},chartSettings:{dataType:"KMB"}}},computed:s()({},Object(r.b)(["name","roles"]))},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"dashboard-text"},[e._v("name:"+e._s(e.name))]),e._v(" "),a("div",{staticClass:"dashboard-text"},[e._v("roles:"),e._l(e.roles,function(t){return a("span",{key:t},[e._v(e._s(t))])})],2),e._v(" "),a("ve-ring",{attrs:{data:e.chartData,settings:e.chartSettings}})],1)};d._withStripped=!0;var i={render:d,staticRenderFns:[]},c=i;var u=!1;var l=a("VU/8")(o,c,!1,function(e){u||a("vv7G")},"data-v-106c86ed",null);l.options.__file="src/views/dashboard/index.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");t.default=l.exports},MTwJ:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.dashboard-container[data-v-106c86ed] {\n  margin: 30px;\n}\n.dashboard-text[data-v-106c86ed] {\n  font-size: 30px;\n  line-height: 46px;\n}\n",""])},vv7G:function(e,t,a){var n=a("MTwJ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("33a295cc",n,!1)}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{8488:function(e,t,l){var a={"./":["a6d8",3],"./ar":["13ef",9,0],"./ar.js":["13ef",9,0],"./bg":["a6b2",9,0],"./bg.js":["a6b2",9,0],"./ca":["8378",9,0],"./ca.js":["8378",9,0],"./cs":["5ddc",9,0],"./cs.js":["5ddc",9,0],"./da":["d3e4",9,0],"./da.js":["d3e4",9,0],"./de":["215a",9,0],"./de.js":["215a",9,0],"./el":["83bc",9,0],"./el.js":["83bc",9,0],"./en-gb":["17f5",9,0],"./en-gb.js":["17f5",9,0],"./en-us":["1f91",9],"./en-us.js":["1f91",9],"./eo":["b25b",9,0],"./eo.js":["b25b",9,0],"./es":["df1a",9,0],"./es.js":["df1a",9,0],"./et":["c3ad",9,0],"./et.js":["c3ad",9,0],"./fa":["a0f3",9,0],"./fa-ir":["b67a",9,0],"./fa-ir.js":["b67a",9,0],"./fa.js":["a0f3",9,0],"./fi":["10c0",9,0],"./fi.js":["10c0",9,0],"./fr":["34fe",9,0],"./fr.js":["34fe",9,0],"./gn":["3c87",9,0],"./gn.js":["3c87",9,0],"./he":["36eb",9,0],"./he.js":["36eb",9,0],"./hr":["007f",9,0],"./hr.js":["007f",9,0],"./hu":["a9af",9,0],"./hu.js":["a9af",9,0],"./id":["7e40",9,0],"./id.js":["7e40",9,0],"./index":["a6d8",3],"./index.json":["a6d8",3],"./it":["a745",9,0],"./it.js":["a745",9,0],"./ja":["5521",9,0],"./ja.js":["5521",9,0],"./km":["726e",9,0],"./km.js":["726e",9,0],"./ko-kr":["187f",9,0],"./ko-kr.js":["187f",9,0],"./kur-ckb":["d9db",9,0],"./kur-ckb.js":["d9db",9,0],"./lu":["1ee2",9,0],"./lu.js":["1ee2",9,0],"./lv":["004e",9,0],"./lv.js":["004e",9,0],"./ml":["c454",9,0],"./ml.js":["c454",9,0],"./ms":["bf26",9,0],"./ms.js":["bf26",9,0],"./nb-no":["dacc",9,0],"./nb-no.js":["dacc",9,0],"./nl":["8cf4",9,0],"./nl.js":["8cf4",9,0],"./pl":["700f",9,0],"./pl.js":["700f",9,0],"./pt":["37ed",9,0],"./pt-br":["f476",9,0],"./pt-br.js":["f476",9,0],"./pt.js":["37ed",9,0],"./ro":["fecf",9,0],"./ro.js":["fecf",9,0],"./ru":["14c0",9,0],"./ru.js":["14c0",9,0],"./sk":["15e6",9,0],"./sk.js":["15e6",9,0],"./sl":["5e5a",9,0],"./sl.js":["5e5a",9,0],"./sr":["78dc",9,0],"./sr.js":["78dc",9,0],"./sv":["7107",9,0],"./sv.js":["7107",9,0],"./ta":["3572",9,0],"./ta.js":["3572",9,0],"./th":["c9b0",9,0],"./th.js":["c9b0",9,0],"./tr":["c1a5",9,0],"./tr.js":["c1a5",9,0],"./ug":["c290",9,0],"./ug.js":["c290",9,0],"./uk":["6464",9,0],"./uk.js":["6464",9,0],"./vi":["1fb0",9,0],"./vi.js":["1fb0",9,0],"./zh-hans":["bf69",9,0],"./zh-hans.js":["bf69",9,0],"./zh-hant":["db10",9,0],"./zh-hant.js":["db10",9,0]};function o(e){if(!l.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(2).map(l.e)).then((function(){return l.t(o,t[1])}))}o.keys=function(){return Object.keys(a)},o.id="8488",e.exports=o},"8b24":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-page",{attrs:{padding:""}},[l("q-filter-configurator",e._b({scopedSlots:e._u([{key:"actions",fn:function(){return[l("q-btn",{attrs:{label:"Save","no-caps":"",flat:"",color:"amber"},on:{click:e.saveConfiguration}})]},proxy:!0},{key:"slot_filter",fn:function(t){return[l("q-markdown",[e._v("\n          props from parent:\n```js\n"+e._s(t)+"\n```\n        ")])]}},{key:"slot_filter_select",fn:function(t){var a=t.copy,o=t.label,s=t.multiple,i=t.options;return[l("q-item",[l("q-item-section",[l("q-select",{attrs:{"emit-value":"","map-options":"",dense:"",borderless:"",label:o,multiple:s,options:i},model:{value:a.slot_filter_select,callback:function(t){e.$set(a,"slot_filter_select",t)},expression:"copy.slot_filter_select"}})],1)],1)]}}]),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"q-filter-configurator",e.config,!1)),l("q-badge",{staticClass:"q-my-sm",attrs:{"multi-line":"",outline:e.$q.dark.isActive,color:e.config.color}},[e._v("model: "+e._s(e.model))]),l("div",{staticClass:"row q-mt-md q-col-gutter-x-md"},[l("div",{staticClass:"col"},[l("q-item-label",{attrs:{header:""}},[e._v("Nodes")]),l("q-tree",{attrs:{nodes:e.nodes,"node-key":"model",selected:e.selected},on:{"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"default-header",fn:function(t){var a=t.node,o=a.label,s=a.icon,i=a.model;return[l("div",{class:{"row items-center":!0,"text-primary":e.isSelected(i)}},[l("q-icon",{attrs:{name:s,left:""}}),l("div",[e._v(e._s(o))])],1)]}}])})],1),l("div",{staticClass:"col"},[l("q-item-label",{attrs:{header:""}},[e._v("Configuration")]),e.selected?[l("q-item-label",{staticClass:"q-mb-md text-overline"},[e._v(e._s(e.selected))]),e._l(e.models,(function(t){return l("q-markdown",{directives:[{name:"show",rawName:"v-show",value:t===e.selected,expression:"model === selected"}],key:t,attrs:{"no-line-numbers":""}},[e._v("\n```js\n"+e._s(e.getFilter(t))+"\n```\n          ")])}))]:l("span",{staticClass:"text-caption"},[e._v("Click on a child node")])],2),l("div",{staticClass:"col"},[l("q-item-label",{attrs:{header:""}},[e._v("Playground")]),l("q-list",{staticClass:"rounded-borders",attrs:{dense:"",separator:"",bordered:""}},[l("q-item",[l("q-item-section",[l("q-select",e._b({attrs:{"options-dense":"",options:e.colors,label:"Color","options-selected-class":"text-"+e.config.color},scopedSlots:e._u([{key:"option",fn:function(t){var a=t.opt,o=t.itemProps,s=t.itemEvents;return[l("q-item",e._g(e._b({},"q-item",o,!1),s),[l("q-item-section",[l("q-item-label",[e._v(e._s(a))])],1),l("q-item-section",{attrs:{avatar:""}},[l("q-badge",{attrs:{color:a}})],1)],1)]}}]),model:{value:e.config.color,callback:function(t){e.$set(e.config,"color",t)},expression:"config.color"}},"q-select",e.defaultAttrs,!1))],1)],1),l("q-item",[l("q-item-section",[l("q-select",e._b({attrs:{"options-dense":"",options:e.langOptions,label:"Quasar Language","emit-value":"","map-options":""},model:{value:e.locale,callback:function(t){e.locale=t},expression:"locale"}},"q-select",e.defaultAttrs,!1))],1)],1),l("q-item",{attrs:{tag:"label"}},[l("q-item-section",[l("q-item-label",[e._v("Reverse direction")])],1),l("q-item-section",{attrs:{side:""}},[l("q-checkbox",{attrs:{color:e.config.color},model:{value:e.config.reverse,callback:function(t){e.$set(e.config,"reverse",t)},expression:"config.reverse"}})],1)],1),l("q-item",{attrs:{tag:"label"}},[l("q-item-section",[l("q-item-label",[e._v("Prepend chip label with node label")])],1),l("q-item-section",{attrs:{side:""}},[l("q-checkbox",{attrs:{color:e.config.color},model:{value:e.config.showNodeLabel,callback:function(t){e.$set(e.config,"showNodeLabel",t)},expression:"config.showNodeLabel"}})],1)],1),e.config.showNodeLabel?l("q-item",{attrs:{tag:"label"}},[l("q-item-section",[l("q-item-label",[e._v("Prepend node label with node icon")])],1),l("q-item-section",{attrs:{side:""}},[l("q-checkbox",{attrs:{color:e.config.color},model:{value:e.config.showNodeIcon,callback:function(t){e.$set(e.config,"showNodeIcon",t)},expression:"config.showNodeIcon"}})],1)],1):e._e(),l("q-item",{attrs:{tag:"label"}},[l("q-item-section",[l("q-item-label",[e._v("Set buttons label to uppercase state")])],1),l("q-item-section",{attrs:{side:""}},[l("q-checkbox",{attrs:{color:e.config.color},model:{value:e.config.uppercase,callback:function(t){e.$set(e.config,"uppercase",t)},expression:"config.uppercase"}})],1)],1),l("q-item",[l("q-item-section",[l("q-input",e._b({attrs:{label:"Date format"},scopedSlots:e._u([{key:"append",fn:function(){return[l("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"mdi-open-in-new"},on:{click:function(t){return e.openURL("https://quasar.dev/quasar-utils/date-utils#Format-for-display")}}},[l("q-tooltip",{attrs:{"content-class":"text-caption bg-grey-9","transition-show":"scale","transition-hide":"scale"}},[e._v("Available Formats")])],1)]},proxy:!0}]),model:{value:e.config.dateFormat,callback:function(t){e.$set(e.config,"dateFormat",t)},expression:"config.dateFormat"}},"q-input",e.defaultAttrs,!1))],1)],1),l("q-item",[l("q-item-section",[l("q-input",e._b({attrs:{clearable:"",label:"Custom label for 'filters available'"},model:{value:e.config.propertiesLabel,callback:function(t){e.$set(e.config,"propertiesLabel",t)},expression:"config.propertiesLabel"}},"q-input",e.defaultAttrs,!1))],1)],1),l("q-item",[l("q-item-section",[l("q-input",e._b({attrs:{clearable:"",label:"Placeholder"},model:{value:e.config.placeholder,callback:function(t){e.$set(e.config,"placeholder",t)},expression:"config.placeholder"}},"q-input",e.defaultAttrs,!1))],1)],1),l("q-item",[l("q-item-section",[l("q-input",e._b({attrs:{min:2,"hide-bottom-space":"",value:e.config.maxDisplay,label:"Maximum number of values to display",type:"number"},on:{input:function(t){return e.$set(e.config,"maxDisplay",t>1?Number(t):e.config.maxDisplay)}}},"q-input",e.defaultAttrs,!1))],1)],1),l("q-item",[l("q-item-section",[l("q-select",e._b({attrs:{readonly:"","options-dense":"",options:e.models,multiple:"",label:"Ignored filters","options-selected-class":"text-"+e.config.color},model:{value:e.config.ignore,callback:function(t){e.$set(e.config,"ignore",t)},expression:"config.ignore"}},"q-select",e.defaultAttrs,!1))],1)],1)],1)],1)])],1)},o=[],s=l("a6d8"),i=l("b06b"),n={name:"Index",data(){return{selected:"",locale:this.$q.lang.isoName,langOptions:[],colors:["blue","green","purple","orange","red","brown","blue-grey","teal","amber","yellow","cyan","black","grey"],model:{slot_filter_select:[1],custom_filter:"some filter",city_id:[10],region_flag:"Italy"},config:{color:"blue",placeholder:"Click to start",uppercase:!1,reverse:!1,showNodeLabel:!0,showNodeIcon:!1,ignore:["custom_filter"],nodes:[{label:"General",icon:"mdi-tune-vertical",filters:[{label:"When",model:"created",date:!0},{label:"Provenience",model:"provenience_ids",multiple:!0,options:[{label:"Leaflet",value:2},{label:"Advertising",value:3},{label:"Tv",value:4},{label:"Social",value:5},{label:"Web Site",value:6}]},{label:"Slot Filter",model:"slot_filter",options:[]},{label:"Select slot example",model:"slot_filter_select",multiple:!0,options:[{label:"One",value:1},{label:"Two",value:2}]}]},{label:"Map",icon:"mdi-navigation",filters:[{label:"Nation",model:"region_flag",options:["Italy","Los Angeles"]},{label:"City",model:"city_id",multiple:!0,options:[{label:"California",value:10},{label:"Naples",value:20}]},{label:"Radius",model:"radius",range:{min:10,max:200}}]},{label:"Products",icon:"mdi-tag",filters:[{label:"Categories",model:"category_id",multiple:!0,options:[{label:"Electronic",value:10},{label:"Phones",value:20}]},{label:"Brand",model:"brand_id",multiple:!0,options:[{label:"Asus",value:10},{label:"MSI",value:20}]},{label:"Price (markers)",model:"price",range:{min:0,max:80,step:20,markers:!0}}]},{label:"Phone",icon:"mdi-phone",filters:[{label:"Screen",model:"screen_id",options:[{label:"Large",value:"lg"},{label:"Medium",value:"md"},{label:"Small",value:"sm"}]},{label:"Device",model:"device_id",multiple:!0,options:[{label:"Samsung",value:10},{label:"Sony",value:20}]},{label:"Display (drag-range)",model:"display",range:{min:0,max:200,step:50,dragRange:!0}}]},{label:"Orders",icon:"mdi-cart",filters:[{label:"Client",model:"client_ids",multiple:!0,options:["John Doe","foobar"]},{label:"Status",model:"status",options:["delivered","purchased"]},{label:"Tax (snap)",model:"tax",range:{min:0,max:200,step:40,snap:!0}}]}]}}},created(){this.langOptions=s.map((e=>({label:e.nativeName,value:e.isoName})))},computed:{defaultAttrs(){return{dense:!0,borderless:!0,color:this.config.color}},allFilters(){return this.config.nodes.map((({filters:e})=>e)).flat()},models(){return["custom_filter",...this.allFilters.map((({model:e})=>e))]},getFilter(){return e=>{if("custom_filter"===e)return{};const{label:t,model:l,...a}=this.allFilters.find((({model:t})=>e===t));return a}},nodes(){return this.config.nodes.map((({filters:e,...t})=>({...t,model:t.label,selectable:!1,children:e.map((({multiple:e,range:t,date:l,options:a,...o})=>{let s="mdi-check-box-outline";return e?s="mdi-checkbox-multiple-marked-outline":l?s="mdi-calendar-blank":t&&(s="mdi-gesture-tap"),{...o,icon:s}}))})))},isSelected(){return e=>Object.entries(this.model).map((([e])=>e)).includes(e)}},watch:{locale(e){l("8488")("./"+e).then((e=>{this.$q.lang.set(e.default)}))}},methods:{openURL:i["a"],saveConfiguration(){this.$q.notify({message:"Filters configurations saved successfully",caption:"example",color:this.$q.dark.isActive?"dark":"primary",icon:"mdi-content-copy"})}}},r=n,c=l("2877"),d=l("9989"),m=l("9c40"),u=l("66e5"),f=l("4074"),b=l("ddd8"),p=l("58a8"),g=l("0170"),v=l("7f41"),q=l("0016"),h=l("1c1c"),_=l("8f8e"),k=l("27f9"),j=l("05c0"),x=l("eebe"),y=l.n(x),w=Object(c["a"])(r,a,o,!1,null,null,null);t["default"]=w.exports;y()(w,"components",{QPage:d["a"],QBtn:m["a"],QItem:u["a"],QItemSection:f["a"],QSelect:b["a"],QBadge:p["a"],QItemLabel:g["a"],QTree:v["a"],QIcon:q["a"],QList:h["a"],QCheckbox:_["a"],QInput:k["a"],QTooltip:j["a"]})}}]);
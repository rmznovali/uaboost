(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{237:function(t,e,r){"use strict";r.r(e);var l={},n=r(26),component=Object(n.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("footer",{staticClass:"bg-black"},[e("div",{staticClass:"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"},[e("p",{staticClass:"text-center text-base text-gray-400"},[this._v("\n        © 2020 UABoost. All rights reserved.\n      ")])])])])}],!1,null,"44600ce8",null);e.default=component.exports;installComponents(component,{Footer:r(237).default})},238:function(t,e,r){var content=r(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("1b7833da",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";r.r(e);r(72);var l=r(22),n=r(48),o=r.n(n);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{formData:{userEmail:null,userFullname:null,userPhone:null,userMessage:null}}},methods:{encode:function(data){for(var t=new FormData,e=0,r=Object.keys(data);e<r.length;e++){var l=r[e];t.append(l,data[l])}return t},handleFormSubmit:function(t){o.a.post(location.href,this.encode(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"form-name":t.target.getAttribute("name")},this.formData)),{header:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(data){return console.log(data)})).catch((function(t){return console.log(t)})).then(document.getElementById("myForm").innerHTML="\n            <div>\n                Thank you! We received your request.\n            </div>\n            ")}}},m=r(26),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"relative bg-gray-900"},[t._m(0),t._v(" "),r("div",{staticClass:"relative max-w-7xl mx-auto lg:grid lg:grid-cols-5"},[r("div",{staticClass:"bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"},[r("div",{staticClass:"max-w-lg mx-auto"},[r("h2",{staticClass:"text-2xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-3xl sm:leading-9"},[t._v("\n              Get in touch\n            ")]),t._v(" "),r("p",{staticClass:"mt-3 text-lg leading-6 text-gray-300"},[t._v("\n              Our customer support team is ready to assist you.\n            ")]),t._v(" "),r("dl",{staticClass:"mt-8 text-base leading-6 text-gray-500"},[t._m(1),t._v(" "),r("div",{staticClass:"mt-6"},[r("dt",{staticClass:"sr-only"},[t._v("Phone number")]),t._v(" "),r("dd",{staticClass:"flex"},[r("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}})]),t._v(" "),r("span",{staticClass:"ml-3"},[t._v(" +90 216 912 00 96 ")])])]),t._v(" "),r("div",{staticClass:"mt-3"},[r("dt",{staticClass:"sr-only"},[t._v("Email")]),t._v(" "),r("dd",{staticClass:"flex"},[r("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),t._v(" "),r("span",{staticClass:"ml-3"},[t._v(" info@uaboost.com ")])])])])])]),t._v(" "),r("div",{staticClass:"bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"},[r("div",{staticClass:"max-w-lg mx-auto lg:max-w-none"},[r("form",{staticClass:"grid grid-cols-1 gap-y-6",attrs:{id:"uaboost-contact",name:"contact",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field",enctype:"application/x-www-form-urlencoded"},on:{submit:function(e){return e.preventDefault(),t.handleFormSubmit(e)}}},[r("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),t._v(" "),r("div",[r("label",{staticClass:"sr-only",attrs:{for:"full_name"}},[t._v("Full name")]),t._v(" "),r("div",{staticClass:"relative rounded-md shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.userFullname,expression:"formData.userFullname"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{id:"full_name",name:"userFullname",placeholder:"Full name"},domProps:{value:t.formData.userFullname},on:{input:function(e){e.target.composing||t.$set(t.formData,"userFullname",e.target.value)}}})])]),t._v(" "),r("div",[r("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("div",{staticClass:"relative rounded-md shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.userEmail,expression:"formData.userEmail"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{id:"email",name:"userEmail",type:"email",placeholder:"Email"},domProps:{value:t.formData.userEmail},on:{input:function(e){e.target.composing||t.$set(t.formData,"userEmail",e.target.value)}}})])]),t._v(" "),r("div",[r("label",{staticClass:"sr-only",attrs:{for:"phone"}},[t._v("Phone")]),t._v(" "),r("div",{staticClass:"relative rounded-md shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.userPhone,expression:"formData.userPhone"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{id:"phone",name:"userPhone",placeholder:"Phone"},domProps:{value:t.formData.userPhone},on:{input:function(e){e.target.composing||t.$set(t.formData,"userPhone",e.target.value)}}})])]),t._v(" "),r("div",[r("label",{staticClass:"sr-only",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),r("div",{staticClass:"relative rounded-md shadow-sm"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.userMessage,expression:"formData.userMessage"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{id:"message",name:"userMessage",rows:"4",placeholder:"Message"},domProps:{value:t.formData.userMessage},on:{input:function(e){e.target.composing||t.$set(t.formData,"userMessage",e.target.value)}}})])]),t._v(" "),t._m(2)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute inset-0"},[e("div",{staticClass:"absolute inset-y-0 left-0 w-1/2 bg-gray-900"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("dt",{staticClass:"sr-only"},[this._v("Postal address")]),this._v(" "),e("dd",[e("p",[this._v("Zuhtupasa Mah. Sefikbey Sk. No:3")]),this._v(" "),e("p",[this._v("Kadikoy, Istanbul")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("span",{staticClass:"inline-flex rounded-md shadow-sm"},[e("button",{staticClass:"inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit"}},[this._v("\n                    Submit\n                  ")])])])}],!1,null,null,null);e.default=component.exports},240:function(t,e,r){"use strict";r.r(e);var l={components:{Logo:r(241).default}},n=r(26),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"relative bg-black overflow-hidden md:h-screen"},[e("div",{staticClass:"hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"},[e("div",{staticClass:"relative max-w-screen-xl mx-auto"},[e("svg",{staticClass:"absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2",attrs:{width:"404",height:"784",fill:"none",viewBox:"0 0 404 784"}},[e("defs",[e("pattern",{attrs:{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[e("rect",{staticClass:"text-gray-700",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),this._v(" "),e("rect",{attrs:{width:"404",height:"784",fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"}})]),this._v(" "),e("svg",{staticClass:"absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2",attrs:{width:"404",height:"784",fill:"none",viewBox:"0 0 404 784"}},[e("defs",[e("pattern",{attrs:{id:"5d0dd344-b041-4d26-bec4-8d33ea57ec9b",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[e("rect",{staticClass:"text-gray-700",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),this._v(" "),e("rect",{attrs:{width:"404",height:"784",fill:"url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"}})])])]),this._v(" "),e("Logo"),this._v(" "),this._m(0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32"},[e("main",{staticClass:"mt-10 mx-auto h-full max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"text-4xl tracking-tight leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-none md:text-6xl"},[this._v("\n            Innovation Based\n            "),e("br",{staticClass:"xl:hidden"}),this._v(" "),e("span",{staticClass:"bg-gradient-to-r from-yellow-400 via-yellow-600 to-red-700 bg-clip-text text-transparent"},[this._v("High Growth")])]),this._v(" "),e("p",{staticClass:"mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"},[this._v("\n            UABoost is a self-service platform for Mobile Gaming UA Ad\n            Creatives. We predict & optimize Ad Creative performance on Mobile\n            Gaming UA to minimize UA costs & maximize UA ROI\n          ")])])])])}],!1,null,"42bdd03e",null);e.default=component.exports;installComponents(component,{Logo:r(241).default})},241:function(t,e,r){"use strict";r.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative bg-none"},[e("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[e("div",{staticClass:"flex justify-center items-center py-6 md:space-x-10"},[e("div",{staticClass:"lg:w-0 lg:flex-1"},[e("a",{staticClass:"flex justify-center",attrs:{href:"#"}},[e("img",{staticClass:"h-24 w-auto sm:h-32",attrs:{src:r(242),alt:"Workflow"}})])])])])])}],n={},o=r(26),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),l,!1,null,"3192a712",null);e.default=component.exports},242:function(t,e,r){t.exports=r.p+"img/ua-boost-logo.b8fd500.png"},243:function(t,e,r){"use strict";r(238)},244:function(t,e,r){(e=r(57)(!1)).push([t.i,"",""]),t.exports=e},257:function(t,e,r){"use strict";r.r(e);var l=r(239),n=r(237),o=r(240),c={components:{Contact:l.default,Footer:n.default,Heading:o.default}},d=(r(243),r(26)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Heading"),this._v(" "),e("Contact"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:r(240).default,Contact:r(239).default,Footer:r(237).default})}}]);
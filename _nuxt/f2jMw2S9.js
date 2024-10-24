import{aJ as _,d as w,aq as C,g as x,aK as R,aL as A,r as D,o as j,aM as k,H as q,aN as O,a1 as I,aO as S,t as T,v as B,z as H,M as P}from"./CHwUt4xx.js";const L={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},U={ariaLabel:{type:String},ariaDescribedby:{type:String}},E={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...L,...U},J=A[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function u(t){return S(t)?O(t):t}function V(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return S(e)?new Proxy(t,{}):t}function W(t,e){const a=t.options;a&&e&&Object.assign(a,e)}function M(t,e){t.labels=e}function z(t,e,a){const o=[];t.datasets=e.map(n=>{const s=t.datasets.find(c=>c[a]===n[a]);return!s||!n.data||o.includes(s)?{...n}:(o.push(s),Object.assign(s,n),s)})}function $(t,e){const a={labels:[],datasets:[]};return M(a,t.labels),z(a,t.datasets,e),a}const F=w({props:E,setup(t,e){let{expose:a,slots:o}=e;const n=D(null),s=C(null);a({chart:s});const c=()=>{if(!n.value)return;const{type:r,data:f,options:h,plugins:p,datasetIdKey:b}=t,y=$(f,b),i=V(y,f);s.value=new _(n.value,{type:r,data:i,options:{...h},plugins:p})},d=()=>{const r=O(s.value);r&&(t.destroyDelay>0?setTimeout(()=>{r.destroy(),s.value=null},t.destroyDelay):(r.destroy(),s.value=null))},K=r=>{r.update(t.updateMode)};return j(c),k(d),q([()=>t.options,()=>t.data],(r,f)=>{let[h,p]=r,[b,y]=f;const i=O(s.value);if(!i)return;let g=!1;if(h){const l=u(h),m=u(b);l&&l!==m&&(W(i,l),g=!0)}if(p){const l=u(p.labels),m=u(y.labels),v=u(p.datasets),N=u(y.datasets);l!==m&&(M(i.config.data,l),g=!0),v&&v!==N&&(z(i.config.data,v,t.datasetIdKey),g=!0)}g&&I(()=>{K(i)})},{deep:!0}),()=>x("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:n},[x("p",{},[o.default?o.default():""])])}});function G(t,e){return _.register(e),w({props:L,setup(a,o){let{expose:n}=o;const s=C(null),c=d=>{s.value=d==null?void 0:d.chart};return n({chart:s}),()=>x(F,J({ref:c},{type:t,...a}))}})}const Q=G("doughnut",R),X={class:"chart_contents type_simple_donut"},Z={__name:"SimpleDonut",props:{weatherChart:Object},setup(t){D(null);const e=D({maintainAspectRatio:!1,plugins:{datalabels:{display:"true",color:"#171717",align:"middle",formatter:function(a,o){return a},textAlign:"center",font:function(a){var o=a.chart.height,n=Math.round(o/20);return{family:"NotoSansKR",size:n*1.25,weight:700}}},legend:{labels:function(a){var o=a.chart.height,n=Math.round(o/20);return{color:"#171717",font:{family:"NotoSansKR",size:n,weight:500},boxWidth:n,boxHeight:n,padding:n*.625}},position:"right"}}});return(a,o)=>(T(),B("div",X,[H(P(Q),{data:t.weatherChart,options:P(e)},null,8,["data","options"])]))}};export{Z as _};

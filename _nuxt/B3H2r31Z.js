import{aV as st,r as L,aW as it,U as D,a2 as N,V as ot,W as E,al as M,aX as ee,as as ct,X as dt,aY as ft,aq as vt,Y as se,c as k,aZ as Y,Z as T,z as v,$ as B,a_ as he,a1 as pe,F as oe,ai as j,ag as De,H as Fe,aj as G,a$ as re,b0 as gt,a0 as R,aF as mt,b1 as yt,an as _e,ao as Q,b2 as J,b3 as Z,N as X,B as Pe,b4 as xe,y as bt,aQ as ue,aS as q,M as U}from"./CHwUt4xx.js";import{m as ht,a as pt}from"./BE5A0Jph.js";import{m as Pt}from"./Ct0IGzh2.js";import{m as xt,a as St,V as kt}from"./t-dNEinQ.js";import{a as wt}from"./DY2OmhVL.js";import{m as It}from"./I-LRDaxN.js";import{m as Vt}from"./BZoqGZTr.js";import{m as Tt}from"./0fPjhjDc.js";import{V as $}from"./vT4LeaA9.js";import{u as H,b as Dt}from"./DW0wPAlN.js";import{V as Ft}from"./CA3zQgSz.js";import{m as _t,a as Bt,L as Ct}from"./BS5QynI9.js";import{V as ce}from"./DGCkmM1X.js";import{m as Lt,V as Se}from"./OVArsr9K.js";import{b as At}from"./hXytWGGs.js";function ke(e,l,a){return Object.keys(e).filter(t=>st(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function Ot(){const e=L([]);it(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const $t=D({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:N,default:"$first"},prevIcon:{type:N,default:"$prev"},nextIcon:{type:N,default:"$next"},lastIcon:{type:N,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...ht(),...Pt(),...xt(),...pt(),...It(),...St(),...Vt({tag:"nav"}),...ot(),...Tt({variant:"text"})},"VPagination"),we=E()({name:"VPagination",props:$t(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=M(e,"modelValue"),{t:r,n:o}=ee(),{isRtl:s}=ct(),{themeClasses:u}=dt(e),{width:c}=ft(),f=vt(-1);se(void 0,{scoped:!0});const{resizeRef:m}=wt(P=>{if(!P.length)return;const{target:S,contentRect:w}=P[0],V=S.querySelector(".v-pagination__list > *");if(!V)return;const _=w.width,O=V.offsetWidth+parseFloat(getComputedStyle(V).marginRight)*2;f.value=b(_,O)}),i=k(()=>parseInt(e.length,10)),d=k(()=>parseInt(e.start,10)),y=k(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):f.value>=0?f.value:b(c.value,58));function b(P,S){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((P-S*w)/S).toFixed(2)))}const g=k(()=>{if(i.value<=0||isNaN(i.value)||i.value>Number.MAX_SAFE_INTEGER)return[];if(y.value<=0)return[];if(y.value===1)return[n.value];if(i.value<=y.value)return Y(i.value,d.value);const P=y.value%2===0,S=P?y.value/2:Math.floor(y.value/2),w=P?S:S+1,V=i.value-S;if(w-n.value>=0)return[...Y(Math.max(1,y.value-1),d.value),e.ellipsis,i.value];if(n.value-V>=(P?1:0)){const _=y.value-1,O=i.value-_+d.value;return[d.value,e.ellipsis,...Y(_,O)]}else{const _=Math.max(1,y.value-3),O=_===1?n.value:n.value-Math.ceil(_/2)+d.value;return[d.value,e.ellipsis,...Y(_,O),e.ellipsis,i.value]}});function h(P,S,w){P.preventDefault(),n.value=S,w&&t(w,S)}const{refs:x,updateRef:I}=Ot();se({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const p=k(()=>g.value.map((P,S)=>{const w=V=>I(V,S);if(typeof P=="string")return{isActive:!1,key:`ellipsis-${S}`,page:P,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const V=P===n.value;return{isActive:V,key:P,page:o(P),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:V?e.activeColor:e.color,"aria-current":V,"aria-label":r(V?e.currentPageAriaLabel:e.pageAriaLabel,P),onClick:_=>h(_,P)}}}})),F=k(()=>{const P=!!e.disabled||n.value<=d.value,S=!!e.disabled||n.value>=d.value+i.value-1;return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:w=>h(w,d.value,"first"),disabled:P,"aria-label":r(e.firstAriaLabel),"aria-disabled":P}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:w=>h(w,n.value-1,"prev"),disabled:P,"aria-label":r(e.previousAriaLabel),"aria-disabled":P},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:w=>h(w,n.value+1,"next"),disabled:S,"aria-label":r(e.nextAriaLabel),"aria-disabled":S},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:w=>h(w,d.value+i.value-1,"last"),disabled:S,"aria-label":r(e.lastAriaLabel),"aria-disabled":S}:void 0}});function A(){var S;const P=n.value-d.value;(S=x.value[P])==null||S.$el.focus()}function K(P){P.key===he.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,pe(A)):P.key===he.right&&!e.disabled&&n.value<d.value+i.value-1&&(n.value=n.value+1,pe(A))}return H(()=>v(e.tag,{ref:m,class:["v-pagination",u.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:K,"data-test":"v-pagination-root"},{default:()=>[v("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&v("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(F.value.first):v($,B({_as:"VPaginationBtn"},F.value.first),null)]),v("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(F.value.prev):v($,B({_as:"VPaginationBtn"},F.value.prev),null)]),p.value.map((P,S)=>v("li",{key:P.key,class:["v-pagination__item",{"v-pagination__item--is-active":P.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(P):v($,B({_as:"VPaginationBtn"},P.props),{default:()=>[P.page]})])),v("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(F.value.next):v($,B({_as:"VPaginationBtn"},F.value.next),null)]),e.showFirstLastPage&&v("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(F.value.last):v($,B({_as:"VPaginationBtn"},F.value.last),null)])])]})),{}}}),Mt=D({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Be=Symbol.for("vuetify:data-table-pagination");function Et(e){const l=M(e,"page",void 0,t=>+(t??1)),a=M(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function Nt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=k(()=>a.value===-1?0:a.value*(l.value-1)),r=k(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),o=k(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));oe(()=>{l.value>o.value&&(l.value=o.value)});function s(i){a.value=i,l.value=1}function u(){l.value=re(l.value+1,1,o.value)}function c(){l.value=re(l.value-1,1,o.value)}function f(i){l.value=re(i,1,o.value)}const m={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:o,itemsLength:t,nextPage:u,prevPage:c,setPage:f,setItemsPerPage:s};return j(Be,m),m}function Rt(){const e=G(Be);if(!e)throw new Error("Missing pagination!");return e}function jt(e){const l=De("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,o=k(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return Fe(o,s=>{l.emit("update:currentItems",s)}),{paginatedItems:o}}const Ce=D({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Ie=E()({name:"VDataTableFooter",props:Ce(),setup(e,l){let{slots:a}=l;const{t}=ee(),{page:n,pageCount:r,startIndex:o,stopIndex:s,itemsLength:u,itemsPerPage:c,setItemsPerPage:f}=Rt(),m=k(()=>e.itemsPerPageOptions.map(i=>typeof i=="number"?{value:i,title:i===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(i)}:{...i,title:t(i.title)}));return H(()=>{var d;const i=we.filterProps(e);return v("div",{class:"v-data-table-footer"},[(d=a.prepend)==null?void 0:d.call(a),v("div",{class:"v-data-table-footer__items-per-page"},[v("span",null,[t(e.itemsPerPageText)]),v(Ft,{items:m.value,modelValue:c.value,"onUpdate:modelValue":y=>f(Number(y)),density:"compact",variant:"outlined","hide-details":!0},null)]),v("div",{class:"v-data-table-footer__info"},[v("div",null,[t(e.pageText,u.value?o.value+1:0,s.value,u.value)])]),v("div",{class:"v-data-table-footer__pagination"},[v(we,B({modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},i),null)])])}),{}}}),de=gt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return v(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:R(e.height),width:R(e.width),left:R(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),Gt=D({headers:Array},"DataTable-header"),Le=Symbol.for("vuetify:data-table-headers"),Ae={title:"",sortable:!1},Ht={...Ae,width:48};function Kt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function ie(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)ie(a,l);return l}function Oe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Oe(a.children,l);return l}function zt(e){if(e.key){if(e.key==="data-table-group")return Ae;if(["data-table-expand","data-table-select"].includes(e.key))return Ht}}function fe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>fe(a,l+1))):l}function Wt(e){let l=!1;function a(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(o&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s],!0);else l?isNaN(+r.width)&&yt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return o;if(r.children){r.fixedOffset=o;for(const s of r.children)o=t(s,o)}else r.fixed&&(r.fixedOffset=o,o+=parseFloat(r.width||"0")||0);return o}let n=0;for(const r of e)n=t(r,n)}function Ut(e,l){const a=[];let t=0;const n=Kt(e);for(;n.size()>0;){let o=n.count();const s=[];let u=1;for(;o>0;){const{element:c,priority:f}=n.dequeue(),m=l-t-fe(c);if(s.push({...c,rowspan:m??1,colspan:c.children?ie(c).length:1}),c.children)for(const i of c.children){const d=f%1+u/Math.pow(10,t+2);n.enqueue(i,t+m+d)}u+=1,o-=1}t+=1,a.push(s)}return{columns:e.map(o=>ie(o)).flat(),headers:a}}function $e(e){const l=[];for(const a of e){const t={...zt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,o={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?$e(t.children):void 0};l.push(o)}return l}function qt(e,l){const a=L([]),t=L([]),n=L({}),r=L({}),o=L({});oe(()=>{var b,g,h;const c=(e.headers||Object.keys(e.items[0]??{}).map(x=>({key:x,title:mt(x)}))).slice(),f=Oe(c);(b=l==null?void 0:l.groupBy)!=null&&b.value.length&&!f.has("data-table-group")&&c.unshift({key:"data-table-group",title:"Group"}),(g=l==null?void 0:l.showSelect)!=null&&g.value&&!f.has("data-table-select")&&c.unshift({key:"data-table-select"}),(h=l==null?void 0:l.showExpand)!=null&&h.value&&!f.has("data-table-expand")&&c.push({key:"data-table-expand"});const m=$e(c);Wt(m);const i=Math.max(...m.map(x=>fe(x)))+1,d=Ut(m,i);a.value=d.headers,t.value=d.columns;const y=d.headers.flat(1);for(const x of y)x.key&&(x.sortable&&(x.sort&&(n.value[x.key]=x.sort),x.sortRaw&&(r.value[x.key]=x.sortRaw)),x.filter&&(o.value[x.key]=x.filter))});const s={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:o};return j(Le,s),s}function te(){const e=G(Le);if(!e)throw new Error("Missing headers!");return e}const Qt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Me={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Me.select({items:a,value:l,selected:t})}},Ee={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return Ee.select({items:a,value:l,selected:t})}},Xt=D({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:_e}},"DataTable-select"),Ne=Symbol.for("vuetify:data-table-selection");function Yt(e,l){let{allItems:a,currentPage:t}=l;const n=M(e,"modelValue",e.modelValue,g=>new Set(Q(g).map(h=>{var x;return((x=a.value.find(I=>e.valueComparator(h,I.value)))==null?void 0:x.value)??h})),g=>[...g.values()]),r=k(()=>a.value.filter(g=>g.selectable)),o=k(()=>t.value.filter(g=>g.selectable)),s=k(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Qt;case"all":return Ee;case"page":default:return Me}});function u(g){return Q(g).every(h=>n.value.has(h.value))}function c(g){return Q(g).some(h=>n.value.has(h.value))}function f(g,h){const x=s.value.select({items:g,value:h,selected:new Set(n.value)});n.value=x}function m(g){f([g],!u([g]))}function i(g){const h=s.value.selectAll({value:g,allItems:r.value,currentPage:o.value,selected:new Set(n.value)});n.value=h}const d=k(()=>n.value.size>0),y=k(()=>{const g=s.value.allSelected({allItems:r.value,currentPage:o.value});return!!g.length&&u(g)}),b={toggleSelect:m,select:f,selectAll:i,isSelected:u,isSomeSelected:c,someSelected:d,allSelected:y,showSelectAll:s.value.showSelectAll};return j(Ne,b),b}function ae(){const e=G(Ne);if(!e)throw new Error("Missing selection!");return e}const Zt=D({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Re=Symbol.for("vuetify:data-table-sort");function Jt(e){const l=M(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function ea(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=u=>{if(u.key==null)return;let c=l.value.map(m=>({...m}))??[];const f=c.find(m=>m.key===u.key);f?f.order==="desc"?a.value?f.order="asc":c=c.filter(m=>m.key!==u.key):f.order="desc":t.value?c=[...c,{key:u.key,order:"asc"}]:c=[{key:u.key,order:"asc"}],l.value=c,n&&(n.value=1)};function o(u){return!!l.value.find(c=>c.key===u.key)}const s={sortBy:l,toggleSort:r,isSorted:o};return j(Re,s),s}function ta(){const e=G(Re);if(!e)throw new Error("Missing sort!");return e}function aa(e,l,a,t,n){const r=ee();return{sortedItems:k(()=>a.value.length?la(l.value,a.value,r.current.value,{...e.customKeySort,...t==null?void 0:t.value},n==null?void 0:n.value):l.value)}}function la(e,l,a,t,n){const r=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((o,s)=>{for(let u=0;u<l.length;u++){let c=!1;const f=l[u].key,m=l[u].order??"asc";if(m===!1)continue;let i=J(o.raw,f),d=J(s.raw,f),y=o.raw,b=s.raw;if(m==="desc"&&([i,d]=[d,i],[y,b]=[b,y]),n!=null&&n[f]){const g=n[f](y,b);if(g==null)continue;if(c=!0,g)return g}if(t!=null&&t[f]){const g=t[f](i,d);if(g==null)continue;if(c=!0,g)return g}if(!c){if(i instanceof Date&&d instanceof Date)return i.getTime()-d.getTime();if([i,d]=[i,d].map(g=>g!=null?g.toString().toLocaleLowerCase():g),i!==d)return Z(i)&&Z(d)?0:Z(i)?-1:Z(d)?1:!isNaN(i)&&!isNaN(d)?Number(i)-Number(d):r.compare(i,d)}}return 0})}const je=D({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:N,default:"$sortAsc"},sortDescIcon:{type:N,default:"$sortDesc"},headerProps:{type:Object},..._t()},"VDataTableHeaders"),Ve=E()({name:"VDataTableHeaders",props:je(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:r}=ta(),{someSelected:o,allSelected:s,selectAll:u,showSelectAll:c}=ae(),{columns:f,headers:m}=te(),{loaderClasses:i}=Bt(e);function d(I,p){if(!(!e.sticky&&!I.fixed))return{position:"sticky",left:I.fixed?R(I.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${p})`:void 0}}function y(I){const p=n.value.find(F=>F.key===I.key);return p?p.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:b,backgroundColorStyles:g}=Dt(e,"color"),h=k(()=>({headers:m.value,columns:f.value,toggleSort:t,isSorted:r,sortBy:n.value,someSelected:o.value,allSelected:s.value,selectAll:u,getSortIcon:y})),x=I=>{let{column:p,x:F,y:A}=I;const K=p.key==="data-table-select"||p.key==="data-table-expand",P=B(e.headerProps??{},p.headerProps??{});return v(de,B({tag:"th",align:p.align,class:["v-data-table__th",{"v-data-table__th--sortable":p.sortable,"v-data-table__th--sorted":r(p),"v-data-table__th--fixed":p.fixed,"v-data-table__th--sticky":e.sticky},i.value],style:{width:R(p.width),minWidth:R(p.minWidth),...d(p,A)},colspan:p.colspan,rowspan:p.rowspan,onClick:p.sortable?()=>t(p):void 0,fixed:p.fixed,lastFixed:p.lastFixed,noPadding:K},P),{default:()=>{var V;const S=`header.${p.key}`,w={column:p,selectAll:u,isSorted:r,toggleSort:t,sortBy:n.value,someSelected:o.value,allSelected:s.value,getSortIcon:y};return a[S]?a[S](w):p.key==="data-table-select"?((V=a["header.data-table-select"])==null?void 0:V.call(a,w))??(c&&v(ce,{modelValue:s.value,indeterminate:o.value&&!s.value,"onUpdate:modelValue":u},null)):v("div",{class:"v-data-table-header__content"},[v("span",null,[p.title]),p.sortable&&v(kt,{key:"icon",class:"v-data-table-header__sort-icon",icon:y(p)},null),e.multiSort&&r(p)&&v("div",{key:"badge",class:["v-data-table-header__sort-badge",...b.value],style:g.value},[n.value.findIndex(_=>_.key===p.key)+1])])}})};H(()=>v(X,null,[a.headers?a.headers(h.value):m.value.map((I,p)=>v("tr",null,[I.map((F,A)=>v(x,{column:F,x:A,y:p},null))])),e.loading&&v("tr",{class:"v-data-table-progress"},[v("th",{colspan:f.value.length},[v(Ct,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),na=D({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Ge=Symbol.for("vuetify:data-table-group");function ra(e){return{groupBy:M(e,"groupBy")}}function ua(e){const{groupBy:l,sortBy:a}=e,t=L(new Set),n=k(()=>l.value.map(c=>({...c,order:c.order??!1})).concat(a.value));function r(c){return t.value.has(c.id)}function o(c){const f=new Set(t.value);r(c)?f.delete(c.id):f.add(c.id),t.value=f}function s(c){function f(m){const i=[];for(const d of m.items)"type"in d&&d.type==="group"?i.push(...f(d)):i.push(d);return i}return f({type:"group",items:c,id:"dummy",key:"dummy",value:"dummy",depth:0})}const u={sortByWithGroups:n,toggleGroup:o,opened:t,groupBy:l,extractRows:s,isGroupOpen:r};return j(Ge,u),u}function He(){const e=G(Ge);if(!e)throw new Error("Missing group!");return e}function sa(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=J(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Ke(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=sa(e,l[0]),r=[],o=l.slice(1);return n.forEach((s,u)=>{const c=l[0],f=`${t}_${c}_${u}`;r.push({depth:a,id:f,key:c,value:u,items:o.length?Ke(s,o,a+1,f):s,type:"group"})}),r}function ze(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...ze(t.items,l))):a.push(t);return a}function ia(e,l,a){return{flatItems:k(()=>{if(!l.value.length)return e.value;const n=Ke(e.value,l.value.map(r=>r.key));return ze(n,a.value)})}}const oa=D({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ca=E()({name:"VDataTableGroupHeaderRow",props:oa(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=He(),{isSelected:o,isSomeSelected:s,select:u}=ae(),{columns:c}=te(),f=k(()=>r([e.item]));return()=>v("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(m=>{var i,d;if(m.key==="data-table-group"){const y=t(e.item)?"$expand":"$next",b=()=>n(e.item);return((i=a["data-table-group"])==null?void 0:i.call(a,{item:e.item,count:f.value.length,props:{icon:y,onClick:b}}))??v(de,{class:"v-data-table-group-header-row__column"},{default:()=>[v($,{size:"small",variant:"text",icon:y,onClick:b},null),v("span",null,[e.item.value]),v("span",null,[Pe("("),f.value.length,Pe(")")])]})}if(m.key==="data-table-select"){const y=o(f.value),b=s(f.value)&&!y,g=h=>u(f.value,h);return((d=a["data-table-select"])==null?void 0:d.call(a,{props:{modelValue:y,indeterminate:b,"onUpdate:modelValue":g}}))??v("td",null,[v(ce,{modelValue:y,indeterminate:b,"onUpdate:modelValue":g},null)])}return v("td",null,null)})])}}),da=D({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),We=Symbol.for("vuetify:datatable:expanded");function fa(e){const l=T(e,"expandOnClick"),a=M(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,u){const c=new Set(a.value);u?c.add(s.value):c.delete(s.value),a.value=c}function n(s){return a.value.has(s.value)}function r(s){t(s,!n(s))}const o={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return j(We,o),o}function Ue(){const e=G(We);if(!e)throw new Error("foo");return e}const va=D({index:Number,item:Object,cellProps:[Object,Function],onClick:ue(),onContextmenu:ue(),onDblclick:ue()},"VDataTableRow"),ga=E()({name:"VDataTableRow",props:va(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=ae(),{isExpanded:r,toggleExpand:o}=Ue(),{columns:s}=te();H(()=>v("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&s.value.map((u,c)=>{const f=e.item,m=`item.${u.key}`,i={index:e.index,item:f.raw,internalItem:f,value:J(f.columns,u.key),column:u,isSelected:t,toggleSelect:n,isExpanded:r,toggleExpand:o},d=typeof e.cellProps=="function"?e.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value,column:u}):e.cellProps,y=typeof u.cellProps=="function"?u.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value}):u.cellProps;return v(de,B({align:u.align,fixed:u.fixed,fixedOffset:u.fixedOffset,lastFixed:u.lastFixed,noPadding:u.key==="data-table-select"||u.key==="data-table-expand",width:u.width},d,y),{default:()=>{var b,g;return a[m]?a[m](i):u.key==="data-table-select"?((b=a["item.data-table-select"])==null?void 0:b.call(a,i))??v(ce,{disabled:!f.selectable,modelValue:t([f]),onClick:xe(()=>n(f),["stop"])},null):u.key==="data-table-expand"?((g=a["item.data-table-expand"])==null?void 0:g.call(a,i))??v($,{icon:r(f)?"$collapse":"$expand",size:"small",variant:"text",onClick:xe(()=>o(f),["stop"])},null):bt(i.value)}})})]))}}),qe=D({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),Te=E()({name:"VDataTableRows",inheritAttrs:!1,props:qe(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=te(),{expandOnClick:r,toggleExpand:o,isExpanded:s}=Ue(),{isSelected:u,toggleSelect:c}=ae(),{toggleGroup:f,isGroupOpen:m}=He(),{t:i}=ee();return H(()=>{var d,y;return e.loading&&(!e.items.length||t.loading)?v("tr",{class:"v-data-table-rows-loading",key:"loading"},[v("td",{colspan:n.value.length},[((d=t.loading)==null?void 0:d.call(t))??i(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?v("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[v("td",{colspan:n.value.length},[((y=t["no-data"])==null?void 0:y.call(t))??i(e.noDataText)])]):v(X,null,[e.items.map((b,g)=>{var I;if(b.type==="group"){const p={index:g,item:b,columns:n.value,isExpanded:s,toggleExpand:o,isSelected:u,toggleSelect:c,toggleGroup:f,isGroupOpen:m};return t["group-header"]?t["group-header"](p):v(ca,B({key:`group-header_${b.id}`,item:b},ke(a,":group-header",()=>p)),t)}const h={index:g,item:b.raw,internalItem:b,columns:n.value,isExpanded:s,toggleExpand:o,isSelected:u,toggleSelect:c},x={...h,props:B({key:`item_${b.key??b.index}`,onClick:r.value?()=>{o(b)}:void 0,index:g,item:b,cellProps:e.cellProps},ke(a,":row",()=>h),typeof e.rowProps=="function"?e.rowProps({item:h.item,index:h.index,internalItem:h.internalItem}):e.rowProps)};return v(X,{key:x.props.key},[t.item?t.item(x):v(ga,x.props,t),s(b)&&((I=t["expanded-row"])==null?void 0:I.call(t,h))])})])}),{}}}),ma=D({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function ya(e,l,a,t){const n=e.returnObject?l:q(l,e.itemValue),r=q(l,e.itemSelectable,!0),o=t.reduce((s,u)=>(u.key!=null&&(s[u.key]=q(l,u.value)),s),{});return{type:"item",key:e.returnObject?q(l,e.itemValue):n,index:a,value:n,selectable:r,columns:o,raw:l}}function ba(e,l,a){return l.map((t,n)=>ya(e,t,n,a))}function ha(e,l){return{items:k(()=>ba(e,e.items,l.value))}}function pa(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const o=De("VDataTable"),s=k(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let u=null;Fe(s,()=>{_e(u,s.value)||(u&&u.search!==s.value.search&&(l.value=1),o.emit("update:options",s.value),u=s.value)},{deep:!0,immediate:!0})}const Pa=(e,l,a)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),xa=D({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Sa(e,l,a){var s;const t=[],n=(a==null?void 0:a.default)??Pa,r=a!=null&&a.filterKeys?Q(a.filterKeys):!1,o=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let u=0;u<e.length;u++){const[c,f=c]=Q(e[u]),m={},i={};let d=-1;if(l&&!(a!=null&&a.noFilter)){if(typeof c=="object"){const g=r||Object.keys(f);for(const h of g){const x=q(f,h),I=(s=a==null?void 0:a.customKeyFilter)==null?void 0:s[h];if(d=I?I(x,l,c):n(x,l,c),d!==-1&&d!==!1)I?m[h]=d:i[h]=d;else if((a==null?void 0:a.filterMode)==="every")continue e}}else d=n(c,l,c),d!==-1&&d!==!1&&(i.title=d);const y=Object.keys(i).length,b=Object.keys(m).length;if(!y&&!b||(a==null?void 0:a.filterMode)==="union"&&b!==o&&!y||(a==null?void 0:a.filterMode)==="intersection"&&(b!==o||!y))continue}t.push({index:u,matches:{...i,...m}})}return t}function ka(e,l,a,t){const n=L([]),r=L(new Map),o=k(()=>t!=null&&t.transform?U(l).map(u=>[u,t.transform(u)]):U(l));oe(()=>{const u=typeof a=="function"?a():U(a),c=typeof u!="string"&&typeof u!="number"?"":String(u),f=Sa(o.value,c,{customKeyFilter:{...e.customKeyFilter,...U(t==null?void 0:t.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),m=U(l),i=[],d=new Map;f.forEach(y=>{let{index:b,matches:g}=y;const h=m[b];i.push(h),d.set(h.value,g)}),n.value=i,r.value=d});function s(u){return r.value.get(u.value)}return{filteredItems:n,filteredMatches:r,getMatches:s}}const wa=D({...qe(),width:[String,Number],search:String,...da(),...na(),...Gt(),...ma(),...Xt(),...Zt(),...je(),...Lt()},"DataTable"),Ia=D({...Mt(),...wa(),...xa(),...Ce()},"VDataTable"),ja=E()({name:"VDataTable",props:Ia(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=ra(e),{sortBy:r,multiSort:o,mustSort:s}=Jt(e),{page:u,itemsPerPage:c}=Et(e),{columns:f,headers:m,sortFunctions:i,sortRawFunctions:d,filterFunctions:y}=qt(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:b}=ha(e,f),g=T(e,"search"),{filteredItems:h}=ka(e,b,g,{transform:z=>z.columns,customKeyFilter:y}),{toggleSort:x}=ea({sortBy:r,multiSort:o,mustSort:s,page:u}),{sortByWithGroups:I,opened:p,extractRows:F,isGroupOpen:A,toggleGroup:K}=ua({groupBy:n,sortBy:r}),{sortedItems:P}=aa(e,h,I,i,d),{flatItems:S}=ia(P,n,p),w=k(()=>S.value.length),{startIndex:V,stopIndex:_,pageCount:O,setItemsPerPage:Qe}=Nt({page:u,itemsPerPage:c,itemsLength:w}),{paginatedItems:le}=jt({items:S,startIndex:V,stopIndex:_,itemsPerPage:c}),ne=k(()=>F(le.value)),{isSelected:Xe,select:Ye,selectAll:Ze,toggleSelect:Je,someSelected:et,allSelected:tt}=Yt(e,{allItems:b,currentPage:ne}),{isExpanded:at,toggleExpand:lt}=fa(e);pa({page:u,itemsPerPage:c,sortBy:r,groupBy:n,search:g}),se({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const C=k(()=>({page:u.value,itemsPerPage:c.value,sortBy:r.value,pageCount:O.value,toggleSort:x,setItemsPerPage:Qe,someSelected:et.value,allSelected:tt.value,isSelected:Xe,select:Ye,selectAll:Ze,toggleSelect:Je,isExpanded:at,toggleExpand:lt,isGroupOpen:A,toggleGroup:K,items:ne.value.map(z=>z.raw),internalItems:ne.value,groupedItems:le.value,columns:f.value,headers:m.value}));return H(()=>{const z=Ie.filterProps(e),nt=Ve.filterProps(e),rt=Te.filterProps(e),ut=Se.filterProps(e);return v(Se,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},ut),{top:()=>{var W;return(W=t.top)==null?void 0:W.call(t,C.value)},default:()=>{var W,ve,ge,me,ye,be;return t.default?t.default(C.value):v(X,null,[(W=t.colgroup)==null?void 0:W.call(t,C.value),v("thead",null,[v(Ve,nt,t)]),(ve=t.thead)==null?void 0:ve.call(t,C.value),v("tbody",null,[(ge=t["body.prepend"])==null?void 0:ge.call(t,C.value),t.body?t.body(C.value):v(Te,B(a,rt,{items:le.value}),t),(me=t["body.append"])==null?void 0:me.call(t,C.value)]),(ye=t.tbody)==null?void 0:ye.call(t,C.value),(be=t.tfoot)==null?void 0:be.call(t,C.value)])},bottom:()=>t.bottom?t.bottom(C.value):v(X,null,[v(At,null,null),v(Ie,z,{prepend:t["footer.prepend"]})])})}),{}}});export{ja as V};

import{U as $,W as O,z as r,c as I,ar as D,Z as G,ag as J,aq as y,r as K,H as P,aD as Q,a1 as X,e as Y,a3 as j,aC as p,N as ee,$ as te,a0 as re,aE as ne}from"./CHwUt4xx.js";import{m as E}from"./Ct0IGzh2.js";import{a as ae,b as se,m as ie,u as le}from"./I-LRDaxN.js";import{u as F,b as oe}from"./DW0wPAlN.js";import{m as ue,M as z}from"./DUY3liSl.js";function ce(e){return{aspectStyles:I(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const q=$({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...E(),...ae()},"VResponsive"),W=O()({name:"VResponsive",props:q(),setup(e,l){let{slots:i}=l;const{aspectStyles:n}=ce(e),{dimensionStyles:m}=se(e);return F(()=>{var g;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[m.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(g=i.additional)==null?void 0:g.call(i),i.default&&r("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function ve(e,l){if(!D)return;const i=l.modifiers||{},n=l.value,{handler:m,options:g}=typeof n=="object"?n:{handler:n,options:{}},b=new IntersectionObserver(function(){var c;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const a=(c=e._observe)==null?void 0:c[l.instance.$.uid];if(!a)return;const s=d.some(f=>f.isIntersecting);m&&(!i.quiet||a.init)&&(!i.once||s||a.init)&&m(s,d,h),s&&i.once?H(e,l):a.init=!0},g);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:b},b.observe(e)}function H(e,l){var n;const i=(n=e._observe)==null?void 0:n[l.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const de={mounted:ve,unmounted:H},me=de,ge=$({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...q(),...E(),...ie(),...ue()},"VImg"),he=O()({name:"VImg",directives:{intersect:me},props:ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:n}=l;const{backgroundColorClasses:m,backgroundColorStyles:g}=oe(G(e,"color")),{roundedClasses:b}=le(e),d=J("VImg"),h=y(""),a=K(),s=y(e.eager?"loading":"idle"),c=y(),f=y(),u=I(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=I(()=>u.value.aspect||c.value/f.value||0);P(()=>e.src,()=>{R(s.value!=="idle")}),P(S,(t,o)=>{!t&&o&&a.value&&_(a.value)}),Q(()=>R());function R(t){if(!(e.eager&&t)&&!(D&&!t&&!e.eager)){if(s.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&X(()=>{var o;i("loadstart",((o=a.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var v;if(!d.isUnmounted)if((v=a.value)!=null&&v.complete){if(a.value.naturalWidth||w(),s.value==="error")return;S.value||_(a.value,null),s.value==="loading"&&k()}else S.value||_(a.value),T()})})}}function k(){var t;d.isUnmounted||(T(),_(a.value),s.value="loaded",i("load",((t=a.value)==null?void 0:t.currentSrc)||u.value.src))}function w(){var t;d.isUnmounted||(s.value="error",i("error",((t=a.value)==null?void 0:t.currentSrc)||u.value.src))}function T(){const t=a.value;t&&(h.value=t.currentSrc||t.src)}let C=-1;Y(()=>{clearTimeout(C)});function _(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const v=()=>{if(clearTimeout(C),d.isUnmounted)return;const{naturalHeight:N,naturalWidth:U}=t;N||U?(c.value=U,f.value=N):!t.complete&&s.value==="loading"&&o!=null?C=window.setTimeout(v,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,f.value=1)};v()}const V=I(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),M=()=>{var v;if(!u.value.src||s.value==="idle")return null;const t=r("img",{class:["v-img__img",V.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:a,onLoad:k,onError:w},null),o=(v=n.sources)==null?void 0:v.call(n);return r(z,{transition:e.transition,appear:!0},{default:()=>[j(o?r("picture",{class:"v-img__picture"},[o,t]):t,[[ne,s.value==="loaded"]])]})},x=()=>r(z,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",V.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),A=()=>n.placeholder?r(z,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,L=()=>n.error?r(z,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,Z=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=y(!1);{const t=P(S,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),t())})}return F(()=>{const t=W.filterProps(e);return j(r(W,te({class:["v-img",{"v-img--booting":!B.value},m.value,b.value,e.class],style:[{width:re(e.width==="auto"?c.value:e.width)},g.value,e.style]},t,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(ee,null,[r(M,null,null),r(x,null,null),r(Z,null,null),r(A,null,null),r(L,null,null)]),default:n.default}),[[p("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:a,state:s,naturalWidth:c,naturalHeight:f}}});export{me as I,he as V,ge as m};

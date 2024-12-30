import{m as k,V as w,b as B,a as h}from"./4Udqx6YN.js";import{U as I,a2 as b,W as y,al as x,aX as _,r as T,H as f,o as S,z as t,N,$ as s,a0 as W}from"./b2T7q6L_.js";import{V as p}from"./D0x_gWA6.js";import{V as $}from"./DcdK9zl3.js";import{V as A}from"./BPiqkC7S.js";import{u as C}from"./BkGqsLto.js";import{m as F,V as P}from"./Fk9sonsa.js";const L=I({color:String,cycle:Boolean,delimiterIcon:{type:b,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...k({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),E=y()({name:"VCarousel",props:L(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const l=x(e,"modelValue"),{t:u}=_(),o=T();let m=-1;f(l,c),f(()=>e.interval,c),f(()=>e.cycle,d=>{d?c():window.clearTimeout(m)}),S(g);function g(){!e.cycle||!o.value||(m=window.setTimeout(o.value.group.next,+e.interval>0?+e.interval:6e3))}function c(){window.clearTimeout(m),window.requestAnimationFrame(g)}return C(()=>{const d=w.filterProps(e);return t(w,s({ref:o},d,{modelValue:l.value,"onUpdate:modelValue":v=>l.value=v,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:W(e.height)},e.style]}),{default:a.default,additional:v=>{let{group:r}=v;return t(N,null,[!e.hideDelimiters&&t("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[r.items.value.length>0&&t(p,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map((i,D)=>{const V={id:`carousel-item-${i.id}`,"aria-label":u("$vuetify.carousel.ariaLabel.delimiter",D+1,r.items.value.length),class:["v-carousel__controls__item",r.isSelected(i.id)&&"v-btn--active"],onClick:()=>r.select(i.id,!0)};return a.item?a.item({props:V,item:i}):t($,s(i,V),null)})]})]),e.progress&&t(A,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(r.getItemIndex(l.value)+1)/r.items.value.length*100},null)])},prev:a.prev,next:a.next})}),{}}}),U=I({...F(),...B()},"VCarouselItem"),G=y()({name:"VCarouselItem",inheritAttrs:!1,props:U(),setup(e,n){let{slots:a,attrs:l}=n;C(()=>{const u=P.filterProps(e),o=h.filterProps(e);return t(h,s({class:["v-carousel-item",e.class]},o),{default:()=>[t(P,s(l,u),a)]})})}});export{E as V,G as a};
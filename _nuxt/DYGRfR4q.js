import{m as o}from"./DtNImj0h.js";import{W as u,aF as d,aG as f,g as V,U as y,a2 as k,V as P,X as C,z as r}from"./B_vfiEZe.js";import{m as S,a as z,u as h,b as I,V as A}from"./HH6xagHG.js";import{m as x,u as D}from"./BoEIRsDx.js";import{m as F}from"./B9zzZUYD.js";import{m as R,u as T,V as B,g as _}from"./CQDjgXlo.js";import{V as b}from"./BA3T3aFE.js";import{u as G}from"./D6ccEb_q.js";function H(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return u()({name:s??d(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(e,m){let{slots:t}=m;return()=>{var n;return V(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}const N=y({start:Boolean,end:Boolean,icon:k,image:String,text:String,...o(),...S(),...x(),...z(),...F(),...P(),...R({variant:"flat"})},"VAvatar"),J=u()({name:"VAvatar",props:N(),setup(a,l){let{slots:s}=l;const{themeClasses:e}=C(a),{colorClasses:m,colorStyles:t,variantClasses:n}=T(a),{densityClasses:i}=h(a),{roundedClasses:c}=D(a),{sizeClasses:g,sizeStyles:v}=I(a);return G(()=>r(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},e.value,m.value,i.value,c.value,g.value,n.value,a.class],style:[t.value,v.value,a.style]},{default:()=>[s.default?r(B,{key:"content-defaults",defaults:{VImg:{cover:!0,image:a.image},VIcon:{icon:a.icon}}},{default:()=>[s.default()]}):a.image?r(b,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?r(A,{key:"icon",icon:a.icon},null):a.text,_(!1,"v-avatar")]})),{}}});export{J as V,H as c};
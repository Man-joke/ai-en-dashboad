import{r as b,ad as V,e as x,H as w,ae as y,af as U,U as C,ag as S,ah as M,ai as R,aj as O,Z as B,c as v,ak as P,al as z,o as A,am as $,an as q,ao as N,ap as W,M as F}from"./b2T7q6L_.js";function j(l){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=b(),e=b();if(V){const n=new ResizeObserver(t=>{l==null||l(t,n),t.length&&(d==="content"?e.value=t[0].contentRect:e.value=t[0].target.getBoundingClientRect())});x(()=>{n.disconnect()}),w(a,(t,o)=>{o&&(n.unobserve(y(o)),e.value=void 0),t&&n.observe(y(t))},{flush:"post"})}return{resizeRef:a,contentRect:U(e)}}const k=C({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),D=C({value:null,disabled:Boolean,selectedClass:String},"group-item");function J(l,d){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const e=S("useGroupItem");if(!e)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const n=M();R(Symbol.for(`${d.description}:id`),n);const t=O(d,null);if(!t){if(!a)return t;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${d.description}`)}const o=B(l,"value"),h=v(()=>!!(t.disabled.value||l.disabled));t.register({id:n,value:o,disabled:h},e),x(()=>{t.unregister(n)});const m=v(()=>t.isSelected(n)),I=v(()=>m.value&&[t.selectedClass.value,l.selectedClass]);return w(m,g=>{e.emit("group:selected",{value:g})},{flush:"sync"}),{id:n,isSelected:m,toggle:()=>t.select(n,!m.value),select:g=>t.select(n,g),selectedClass:I,value:o,disabled:h,group:t}}function L(l,d){let a=!1;const e=P([]),n=z(l,"modelValue",[],s=>s==null?[]:G(e,N(s)),s=>{const u=Z(e,s);return l.multiple?u:u[0]}),t=S("useGroup");function o(s,u){const r=s,i=Symbol.for(`${d.description}:id`),f=W(i,t==null?void 0:t.vnode).indexOf(u);F(r.value)==null&&(r.value=f,r.useIndexAsValue=!0),f>-1?e.splice(f,0,r):e.push(r)}function h(s){if(a)return;m();const u=e.findIndex(r=>r.id===s);e.splice(u,1)}function m(){const s=e.find(u=>!u.disabled);s&&l.mandatory==="force"&&!n.value.length&&(n.value=[s.id])}A(()=>{m()}),x(()=>{a=!0}),$(()=>{for(let s=0;s<e.length;s++)e[s].useIndexAsValue&&(e[s].value=s)});function I(s,u){const r=e.find(i=>i.id===s);if(!(u&&(r!=null&&r.disabled)))if(l.multiple){const i=n.value.slice(),c=i.findIndex(E=>E===s),f=~c;if(u=u??!f,f&&l.mandatory&&i.length<=1||!f&&l.max!=null&&i.length+1>l.max)return;c<0&&u?i.push(s):c>=0&&!u&&i.splice(c,1),n.value=i}else{const i=n.value.includes(s);if(l.mandatory&&i)return;n.value=u??!i?[s]:[]}}function g(s){if(l.multiple,n.value.length){const u=n.value[0],r=e.findIndex(f=>f.id===u);let i=(r+s)%e.length,c=e[i];for(;c.disabled&&i!==r;)i=(i+s)%e.length,c=e[i];if(c.disabled)return;n.value=[e[i].id]}else{const u=e.find(r=>!r.disabled);u&&(n.value=[u.id])}}const p={register:o,unregister:h,selected:n,select:I,disabled:B(l,"disabled"),prev:()=>g(e.length-1),next:()=>g(1),isSelected:s=>n.value.includes(s),selectedClass:v(()=>l.selectedClass),items:v(()=>e),getItemIndex:s=>H(e,s)};return R(d,p),p}function H(l,d){const a=G(l,[d]);return a.length?l.findIndex(e=>e.id===a[0]):-1}function G(l,d){const a=[];return d.forEach(e=>{const n=l.find(o=>q(e,o.value)),t=l[e];(n==null?void 0:n.value)!=null?a.push(n.id):t!=null&&a.push(t.id)}),a}function Z(l,d){const a=[];return d.forEach(e=>{const n=l.findIndex(t=>t.id===e);if(~n){const t=l[n];a.push(t.value!=null?t.value:n)}}),a}export{j as a,D as b,J as c,k as m,L as u};
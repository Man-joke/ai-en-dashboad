import{bm as V,r as h,bn as k,c as $,au as O,t as p,L as m,A as u,x as l,y as _,M as s,R,bo as g,Q as v,a5 as w,v as A,z as y,B,u as F}from"./DC6CnTeg.js";import{V as f}from"./C3oJ8mSs.js";import{V as S}from"./iI4aIyHT.js";import"./DxY6Ge0n.js";import"./Dtu_17Ax.js";import"./RigbkcRr.js";import"./CU9xQcnq.js";import"./iFiMjmG8.js";import"./C_dm_hEJ.js";import"./Dluhh7g-.js";import"./KY6J3fBj.js";import"./CPvsHk6C.js";import"./DsdCClHY.js";import"./qK6XUxtL.js";import"./DUQlMwls.js";import"./DWGaNmQL.js";import"./aHDrFHoh.js";import"./HWhwsxKA.js";const x=V("modal",()=>{const a={isOpen:!1,type:"",buttonLabels:[],message:""},t=h({...a});return{modalData:t,openModalFunc:o=>{Object.assign(t.value,o,{isOpen:!0})},closeModalFunc:()=>{Object.assign(t.value,{...a})}}}),C=()=>{const a=x(),{modalData:t}=k(a),n=$(()=>t.value.isOpen),{type:e,buttonLabels:o,message:r}=O(t.value);return{isOpen:n,type:e,buttonLabels:o,message:r,openModal:i=>{a.openModalFunc(i)},closeModal:()=>{a.closeModalFunc()}}},L={class:"dialog_wrap teacher_area"},D={class:"dialog_message"},N=["textContent"],z=["textContent"],j={__name:"Modal",emits:["handleAction","modalClosed"],setup(a,{emit:t}){const{isOpen:n,buttonLabels:e,message:o,closeModal:r}=C(),d=t,M=()=>{r(),d("modalClosed")};return(i,c)=>(p(),m(S,{modelValue:s(n),"onUpdate:modelValue":c[1]||(c[1]=b=>w(n)?n.value=b:null),persistent:"",activator:"parent",transition:"dialog-center-transition",width:"auto"},{default:u(()=>[l("div",L,[l("div",D,[l("span",null,_(s(o)),1)]),l("div",{class:R({dialog_btn_wrap:s(e).length>0})},[g(i.$slots,"footer",{},()=>[s(e)[0]?(p(),m(f,{key:0,rounded:"",flat:"",class:"secondary",onClick:M},{default:u(()=>[l("span",{style:{"white-space":"pre-line"},textContent:_(s(e)[0])},null,8,N)]),_:1})):v("",!0),s(e)[1]?(p(),m(f,{key:1,class:"primary",flat:"",rounded:"",onClick:c[0]||(c[0]=b=>i.$emit("handleAction"))},{default:u(()=>[l("span",{style:{"white-space":"pre-line"},textContent:_(s(e)[1])},null,8,z)]),_:1})):v("",!0)])],2),g(i.$slots,"bottom")])]),_:3},8,["modelValue"]))}},E=l("h1",null,"AI 학기말 생활기록부 화면 진입",-1),ae={__name:"record",setup(a){const{openModal:t,closeModal:n}=C();return(e,o)=>{const r=j;return p(),A("div",null,[E,y(f,{rounded:"",flat:"",size:"large",class:"primary",onClick:o[0]||(o[0]=d=>s(t)({type:"notice2",message:"학습결과(대시보드) 화면으로 이동됩니다.",buttonLabels:["","확인"]}))},{default:u(()=>[B("학습결과(대시보드)")]),_:1}),y(r,{onHandleAction:o[1]||(o[1]=d=>{("useRouter"in e?e.useRouter:s(F))().push("/"),s(n)()})})])}}};export{ae as default};
import{_,t as c,L as m,A as t,v as x,N as g,P as b,x as r,y as o,z as s,B as l}from"./Cu3nRdIJ.js";import{V as i,a as n}from"./E5Yss7rt.js";import{V as w}from"./D8aE5qK5.js";import"./csT8HWIH.js";import"./Cms8BFiK.js";import"./TVeuImzg.js";import"./X4G6UIvp.js";import"./D97VQcr-.js";import"./BREB3W0C.js";import"./B27fAMdE.js";import"./B_BmZxHr.js";import"./j2C2XfU6.js";import"./DU3oUj5Q.js";import"./DskSxXo2.js";import"./DYLa3KdE.js";import"./B47fbA8T.js";import"./DQdJ4BFC.js";import"./Cr5SGugK.js";import"./BRyp-o3w.js";import"./DoCP832n.js";import"./CgUIHCnj.js";import"./BsmJpVpv.js";import"./CKSsIFbn.js";import"./DWGaNmQL.js";import"./oNeYDdYL.js";import"./Dovmo2L1.js";import"./B3dXd-41.js";import"./DGLnQU1W.js";import"./CHRJnb9a.js";import"./DRtuSaZR.js";const h={data(){return{expanded:[],basicHeaders:[{title:"채팅 날짜",align:"center",sortable:!1,key:"date"},{title:"채팅 시간",align:"center",sortable:!1,key:"time"},{title:"칭찬 표현",align:"center",sortable:!1,key:"compliment"},{title:"철자를 틀린 표현",align:"center",sortable:!1,key:"wrongWord"},{title:"잘못된 표현",align:"center",sortable:!1,key:"wrongExpression"},{title:"AI 표현 도우미",align:"center",sortable:!1,key:"AI"}],tableBasic:[{date:"MM월 DD일 (월)",time:"90분",compliment:"How are you?",compliment2:"How about you?",wrongWord:"moning(x)",spell:"mo",spell2:"ning (o)",errSpell:"r",wrongExpression:"good night 은 무조건 헤어질 때 하는 인사가 아니에요.",wrongExpression2:"헤어질 때에는 Good bye.",wrongExpression3:"저녁에 잘 자라고 할 때에는 Good night.",AI:"친구들이 주로 쓴 표현은 무엇이 있을까?",AI2:"What a bout you? 는 상기시킬 때 많이 씁니다."}]}}},y={class:"text_center"},k={class:"text_center"},B=r("span",{class:"text_arrow"},"→",-1),A={class:"text_err"},E={class:"vertical-top"},V=r("p",{class:"mr-1"},"Q.",-1),I=r("p",{class:"mr-1"},"A:",-1);function D(u,p,d,W,a,v){return c(),m(w,{expanded:a.expanded,"onUpdate:expanded":p[0]||(p[0]=e=>a.expanded=e),headers:a.basicHeaders,items:a.tableBasic,"item-value":"date"},{item:t(({item:e})=>[(c(),x(g,null,b(5,f=>r("tr",{key:f},[r("td",y,o(e.date),1),r("td",k,o(e.time),1),r("td",null,[s(i,{class:"list_dot"},{default:t(()=>[s(n,null,{default:t(()=>[l(o(e.compliment),1)]),_:2},1024),s(n,null,{default:t(()=>[l(o(e.compliment2),1)]),_:2},1024)]),_:2},1024)]),r("td",null,[s(i,{class:"list_dot"},{default:t(()=>[s(n,{class:"inline_wrap"},{default:t(()=>[l(o(e.wrongWord)+" ",1),B,l(" "+o(e.spell)+" ",1),r("span",A,o(e.errSpell),1),l(" "+o(e.spell2),1)]),_:2},1024)]),_:2},1024)]),r("td",null,[s(i,{class:"list_check text-left"},{default:t(()=>[s(n,null,{default:t(()=>[l(o(e.wrongExpression),1)]),_:2},1024),s(n,null,{default:t(()=>[l(o(e.wrongExpression2),1)]),_:2},1024),s(n,null,{default:t(()=>[l(o(e.wrongExpression3),1)]),_:2},1024)]),_:2},1024)]),r("td",E,[s(i,null,{default:t(()=>[s(n,null,{default:t(()=>[V,l(" "+o(e.AI),1)]),_:2},1024),s(n,null,{default:t(()=>[I,l(" "+o(e.AI2),1)]),_:2},1024)]),_:2},1024)])])),64))]),_:1},8,["expanded","headers","items"])}const H=_(h,[["render",D]]),L={};function N(u,p){const d=H;return c(),m(d)}const ce=_(L,[["render",N]]);export{ce as default};
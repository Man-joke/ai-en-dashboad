import{V as c}from"./vT4LeaA9.js";import{V}from"./D2Sj5yae.js";import{V as v}from"./DswERWLr.js";import{V as w}from"./CA3zQgSz.js";import{V as x}from"./B3H2r31Z.js";import{V as d,a as n}from"./hXytWGGs.js";import{r as m,v as u,z as l,A as s,N as f,t as g,B as o,x as e,P as y,y as a}from"./CHwUt4xx.js";import"./BE5A0Jph.js";import"./Ct0IGzh2.js";import"./t-dNEinQ.js";import"./DW0wPAlN.js";import"./BZoqGZTr.js";import"./I-LRDaxN.js";import"./0fPjhjDc.js";import"./DY2OmhVL.js";import"./BS5QynI9.js";import"./CTPNK-rz.js";import"./DC14tAEg.js";import"./_pL9EjLW.js";import"./DWGaNmQL.js";import"./B18si4Id.js";import"./DUY3liSl.js";import"./CbWOHun_.js";import"./ojkJl-A_.js";import"./BWsG7-qA.js";import"./DJk48GVi.js";import"./DnBaDFdj.js";import"./BnLh3-ns.js";import"./DGCkmM1X.js";import"./XTasZUYb.js";import"./CXFvcYDL.js";import"./OVArsr9K.js";import"./4m_W2pNo.js";const k={class:"dialog_header"},I={class:"inline_wrap gap1"},A=e("h1",null,"AI CURI Talk!",-1),E=e("h1",null,"한눈에보기",-1),B=e("i",{class:"ico close_30 ico_size_lg"},null,-1),C={class:"dialog_body"},D={class:"table_wrap scrollable_container"},S=e("div",{class:"inner_header"},[e("span",null,"누적 채팅 횟수:"),e("span",{class:"font-color-orange"},"42회"),e("span",{class:"mgl10"},"누적 채팅 시간:"),e("span",{class:"font-color-orange"},"6시간 41분")],-1),T={class:"table_items scrollable"},H={class:"text_center"},N={class:"text_center"},U=e("span",{class:"text_arrow"},"→",-1),W={class:"text_err"},L={class:"vertical-top"},j=e("p",{class:"mr-1"},"Q.",-1),z=e("p",{class:"mr-1"},"A:",-1),G={data(){return{test:!0,expanded:[],basicHeaders:[{title:"채팅 날짜",align:"center",sortable:!1,key:"date"},{title:"채팅 시간",align:"center",sortable:!1,key:"time"},{title:"칭찬 표현",align:"center",sortable:!1,key:"compliment"},{title:"철자를 틀린 표현",align:"center",sortable:!1,key:"wrongWord"},{title:"잘못된 표현",align:"center",sortable:!1,key:"wrongExpression"},{title:"AI 표현 도우미",align:"center",sortable:!1,key:"AI"}],tableBasic:[{date:"MM월 DD일 (월)",time:"90분",compliment:"How are you?",compliment2:"How about you?",wrongWord:"moning(x)",spell:"mo",spell2:"ning (o)",errSpell:"r",wrongExpression:"good night 은 무조건 헤어질 때 하는 인사가 아니에요.",wrongExpression2:"헤어질 때에는 Good bye.",wrongExpression3:"저녁에 잘 자라고 할 때에는 Good night.",AI:"친구들이 주로 쓴 표현은 무엇이 있을까?",AI2:"What a bout you? 는 상기시킬 때 많이 씁니다."}]}}},we=Object.assign(G,{__name:"CuriTalkInfo",setup(M){const p=m(!0),_=m({state:"학기 전체"}),b=m([{state:"학기 전체"},{state:"1학기"},{state:"2학기"}]);return(i,r)=>(g(),u(f,null,[l(c,{class:"primary",onClick:r[0]||(r[0]=t=>p.value=!0)},{default:s(()=>[o(" Open Dialog ")]),_:1}),l(V,{modelValue:p.value,"onUpdate:modelValue":r[4]||(r[4]=t=>p.value=t),width:"auto"},{default:s(()=>[l(v,{class:"dialog AI_talk",width:"167.5rem",height:"83rem"},{default:s(()=>[e("div",k,[e("div",I,[A,l(w,{modelValue:_.value,"onUpdate:modelValue":r[1]||(r[1]=t=>_.value=t),items:b.value,class:"type_primary_fill","menu-props":{contentClass:"primary_fill_item"},"item-title":"state","item-value":"abbr",label:"Select",variant:"outlined","persistent-hint":"",rounded:"","return-object":"","single-line":"","hide-details":""},null,8,["modelValue","items"]),E]),l(c,{class:"icon_close",onClick:r[2]||(r[2]=t=>i.aItalk=!1)},{default:s(()=>[B]),_:1})]),e("div",C,[e("div",D,[S,e("div",T,[l(x,{expanded:i.expanded,"onUpdate:expanded":r[3]||(r[3]=t=>i.expanded=t),headers:i.basicHeaders,items:i.tableBasic,"item-value":"date"},{item:s(({item:t})=>[(g(),u(f,null,y(5,h=>e("tr",{key:h},[e("td",H,a(t.date),1),e("td",N,a(t.time),1),e("td",null,[l(d,{class:"list_dot"},{default:s(()=>[l(n,null,{default:s(()=>[o(a(t.compliment),1)]),_:2},1024),l(n,null,{default:s(()=>[o(a(t.compliment2),1)]),_:2},1024)]),_:2},1024)]),e("td",null,[l(d,{class:"list_dot"},{default:s(()=>[l(n,{class:"inline_wrap"},{default:s(()=>[o(a(t.wrongWord)+" ",1),U,o(" "+a(t.spell)+" ",1),e("span",W,a(t.errSpell),1),o(" "+a(t.spell2),1)]),_:2},1024)]),_:2},1024)]),e("td",null,[l(d,{class:"list_check text-left"},{default:s(()=>[l(n,null,{default:s(()=>[o(a(t.wrongExpression),1)]),_:2},1024),l(n,null,{default:s(()=>[o(a(t.wrongExpression2),1)]),_:2},1024),l(n,null,{default:s(()=>[o(a(t.wrongExpression3),1)]),_:2},1024)]),_:2},1024)]),e("td",L,[l(d,null,{default:s(()=>[l(n,null,{default:s(()=>[j,o(" "+a(t.AI),1)]),_:2},1024),l(n,null,{default:s(()=>[z,o(" "+a(t.AI2),1)]),_:2},1024)]),_:2},1024)])])),64))]),_:1},8,["expanded","headers","items"])])])])]),_:1})]),_:1},8,["modelValue"])],64))}});export{we as default};

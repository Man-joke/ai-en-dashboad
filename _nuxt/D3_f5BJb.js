import{r,i as J,L as K,A as e,t as i,x as t,z as l,M as c,a5 as k,T as P,v as u,N as f,P as v,R as w,B as a,y as m,S as Y}from"./B_vfiEZe.js";import{V as h,b,a as V}from"./DuVkGSWr.js";import{V as N}from"./Ca7rCPlF.js";import{V as x}from"./B1QExcYD.js";import{V as D}from"./BZc_fT5O.js";import{V as j,a as n}from"./BEPbLDNn.js";import{V as Q,a as C}from"./D8fIz6yq.js";import{V as z,a as y}from"./DWM8vo01.js";import"./DtNImj0h.js";import"./D6ccEb_q.js";import"./DYGRfR4q.js";import"./HH6xagHG.js";import"./B9zzZUYD.js";import"./BoEIRsDx.js";import"./CQDjgXlo.js";import"./BA3T3aFE.js";import"./DRPrMtrA.js";import"./CIFD_C6M.js";import"./BexMN-eP.js";import"./CSR1Oovd.js";import"./B8YB6kp6.js";import"./KWcawHqq.js";import"./DOvyJZ4Y.js";import"./CTvFO2tJ.js";import"./DWGaNmQL.js";import"./BYskvoXY.js";import"./BKMg3jQG.js";import"./CrLUMkWd.js";import"./CMXh7jLG.js";import"./B5bKwtDT.js";import"./Cav82K1U.js";/* empty css        */const W={class:"title-box"},Z=t("div",{class:"tit"},[t("i",{class:"ico ico_size_4 people mr-2"}),t("p",null,[a("오늘 로그인 횟수 : "),t("span",{class:"num"},"2"),a("회")])],-1),$={class:"sub_title"},tt=t("p",null,"오늘의 수업 현황",-1),lt={class:"d-flex mb-5"},et={class:"datepicker"},st=t("i",{class:"ico calendar_refresh"},null,-1),at=t("span",{class:"blind"},"새로고침",-1),ot={key:0,class:"legend_wrap"},nt={key:1,class:"legend_wrap"},it=t("span",null," 영역별 학업 성취도",-1),ct=t("i",{class:"ico more"},null,-1),dt=t("div",{class:"card_no_data"},[t("i",{class:"ico no_class_data ico_size_25"}),t("p",null,"선택한 날에는 수업이 배정되어 있지 않습니다.")],-1),ut={class:"d-flex mb20 gap2"},rt={class:"selfCheck"},_t=t("div",{class:"flag flag-left"},[t("span",null,"2차시")],-1),pt=t("span",null," 영역별 학업 성취도학업 성취도",-1),mt=t("i",{class:"ico more"},null,-1),ht=t("i",{class:"ico imoji1"},null,-1),ft=t("i",{class:"ico imoji2"},null,-1),vt=t("i",{class:"ico imoji3"},null,-1),yt=t("i",{class:"ico imoji4"},null,-1),gt=t("i",{class:"ico imoji5"},null,-1),kt={class:"selfCheck"},bt=t("span",null," 영역별 학업 성취도학업 성취도",-1),Vt=t("i",{class:"ico more"},null,-1),xt={class:"selfCheck"},Dt=t("span",null," 영역별 학업 성취도학업 성취도",-1),Ct=t("i",{class:"ico more"},null,-1),wt=t("span",{class:"mr-5"}," 나의 학습 분석",-1),Yt={class:"d-flex"},Mt={class:"select_box_wrap mgr10"},Bt={class:"date_picker_slot"},St={class:"date_selector"},Tt={class:"start_date"},At=["value","onClick"],Ft=["onClick"],Et=t("p",null,"~",-1),jt={class:"end_date"},zt=["value","onClick"],It=["onClick"],Ut={class:"footer_text"},Lt={class:"learningDiagnostics"},Nt=t("h3",{class:"learn-title bullet-bot"},"단어 학습 진단",-1),Rt={class:"chart-bar"},Gt={class:"learningDiagnostics"},Ot=t("h3",{class:"learn-title bullet-bot"},"누적 학습 시간",-1),Xt={class:"chart-bar"},xl={__name:"StudentAnalytics",props:{student:Boolean},setup(R){const I=new Date,_=I.getFullYear(),p=I.getMonth(),g=r(new Date),G=()=>{g.value=null},U=R,O=r({highlight:{style:{backgroundColor:"transparent",border:"2px solid #1E3257",zIndex:"10"},contentStyle:{color:"#000000"}},selectedDate:g.value}),L=r([{key:"수업 예정일",class:"unsubmission",highlight:{style:{backgroundColor:"#D5D5D5"},contentStyle:{color:"#000000"}},dates:[new Date(_,p,5),new Date(_,p,12)]},{key:"수업 완료일",class:"submission",highlight:{style:{backgroundColor:"#139D42"}},dates:[new Date(_,p,7),new Date(_,p,8),new Date(_,p,11)]},{key:"생활기록부 발행 기간",class:"period",highlight:{start:{fillMode:"light"},base:{fillMode:"light"},end:{fillMode:"light"}},dates:{start:new Date(_,p,12),end:new Date(_,p,15)}}]),M=r({start:null,end:null}),B=r(0),S=r({txt:"최근 7일"}),X=r([{txt:"최근 7일"},{txt:"최근 30일"}]),T=[{title:"완벽하게 이해하고 활용한 단어",color:"#42C5B1",value:"85"},{title:"이해하지만 활용하지 못한 단어",color:"#8DBB2C",value:"26"},{title:"잘못 이해하고 활용한 단어",color:"#FFBF00",value:"38"},{title:"철자를 잘못 알고 있는 단어",color:"#FF8D00",value:"32"},{title:"아예 모르는 단어",color:"#FD6E7F",value:"5"},{title:"학습한 누적 단어 개수",color:"#B0B0B0",value:"100"}],A=[{title:"교과서 진도 학습",color:"#46A7E5",value:"80",time:"98"},{title:"Drill and Play",color:"#46A7E5",value:"32",time:"32"},{title:"Touch VOCA",color:"#46A7E5",value:"16",time:"16"},{title:"AI CURI Talk",color:"#46A7E5",value:"5",time:"5"},{title:"총 누적 학습 시간",color:"#B0B0B0",value:"100",time:"133분 (2시간 13분)"}],F=r({state:"진도 학습"}),q=r([{state:"진도 학습"}]);return(E,o)=>{const H=J("vc-date-picker");return i(),K(h,{class:"analytics type_student gap2",dark:""},{default:e(()=>[t("div",W,[Z,t("div",$,[tt,l(N,{modelValue:c(F),"onUpdate:modelValue":o[0]||(o[0]=s=>k(F)?F.value=s:null),items:c(q),class:"type_white","menu-props":{contentClass:"white_item"},"item-title":"state","item-value":"abbr",label:"Select",variant:"outlined","persistent-hint":"",rounded:"","return-object":"","single-line":"","hide-details":"","base-color":"#fff"},null,8,["modelValue","items"])])]),t("div",lt,[l(h,{elevation:"0","max-width":"42rem","max-height":"54rem",class:"mr-5"},{default:e(()=>[t("div",et,[l(x,{onClick:G,flat:"",rounded:"",size:"x-small",class:"reset_btn"},{default:e(()=>[st,at]),_:1}),l(c(P),{modelValue:c(g),"onUpdate:modelValue":o[1]||(o[1]=s=>k(g)?g.value=s:null),color:"mustard",class:"my-calendar",attributes:U.student?E.attributesStudent:c(L),"select-attribute":c(O),masks:{title:"YYYY년 MMM"},onDayclick:o[2]||(o[2]=(s,d)=>console.log(s,d))},null,8,["modelValue","attributes","select-attribute"]),U.student?(i(),u("div",ot,[(i(!0),u(f,null,v(E.attributesStudent,s=>(i(),u("span",{class:"legend",key:s.key},[t("i",{class:w(s.class)},null,2),a(" "+m(s.key),1)]))),128))])):(i(),u("div",nt,[(i(!0),u(f,null,v(c(L),s=>(i(),u("span",{class:"legend",key:s.key},[t("i",{class:w(s.class)},null,2),a(" "+m(s.key),1)]))),128))]))])]),_:1}),l(h,{elevation:"0"},{default:e(()=>[l(b,null,{default:e(()=>[l(V,null,{default:e(()=>[it,l(x,{class:"icon_only icon_only-sm",rounded:"",flat:""},{default:e(()=>[ct]),_:1})]),_:1})]),_:1}),l(D,{class:"px-13 py20"},{default:e(()=>[dt]),_:1})]),_:1})]),t("div",ut,[l(h,{height:"56rem",elevation:"0",class:"v-card-yellow v-card-with_flag"},{default:e(()=>[t("div",rt,[_t,l(b,null,{default:e(()=>[l(V,null,{default:e(()=>[pt,l(x,{class:"icon_only icon_only-sm",rounded:"",flat:""},{default:e(()=>[mt]),_:1})]),_:1})]),_:1}),l(D,{class:"px30 py30"},{default:e(()=>[l(j,{class:"list_dot py-0"},{default:e(()=>[l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1})]),_:1}),l(Q,{"selected-class":"active",mandatory:"",modelValue:c(B),"onUpdate:modelValue":o[3]||(o[3]=s=>k(B)?B.value=s:null)},{default:e(()=>[l(C,{class:"px-1 py-1",variant:"text",color:"transparent"},{default:e(()=>[ht,a("5")]),_:1}),l(C,{class:"px-1 py-1",variant:"text",color:"transparent"},{default:e(()=>[ft,a("4")]),_:1}),l(C,{class:"px-1 py-1",variant:"text",color:"transparent"},{default:e(()=>[vt,a("3")]),_:1}),l(C,{class:"px-1 py-1",variant:"text",color:"transparent"},{default:e(()=>[yt,a("2")]),_:1}),l(C,{class:"px-1 py-1",variant:"text",color:"transparent"},{default:e(()=>[gt,a("1")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1}),l(h,{height:"56rem",elevation:"0",class:"v-card-green"},{default:e(()=>[t("div",kt,[l(b,null,{default:e(()=>[l(V,null,{default:e(()=>[bt,l(x,{class:"icon_only icon_only-sm",rounded:"",flat:""},{default:e(()=>[Vt]),_:1})]),_:1})]),_:1}),l(D,{class:"px30 py30"},{default:e(()=>[l(j,{class:"list_dot py-0"},{default:e(()=>[l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1})]),_:1})]),_:1})])]),_:1}),l(h,{height:"56rem",elevation:"0",class:"v-card-green"},{default:e(()=>[t("div",xt,[l(b,null,{default:e(()=>[l(V,null,{default:e(()=>[Dt,l(x,{class:"icon_only icon_only-sm",rounded:"",flat:""},{default:e(()=>[Ct]),_:1})]),_:1})]),_:1}),l(D,{class:"px30 py30"},{default:e(()=>[l(j,{class:"list_dot py-0"},{default:e(()=>[l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1}),l(n,{class:"py-0","min-height":"auto"},{default:e(()=>[a("안부를 묻고 답하는 말을 이해하여 말할 수 있나요?")]),_:1})]),_:1})]),_:1})])]),_:1})]),l(h,{elevation:"0",class:"v-card-lightblue"},{default:e(()=>[l(b,null,{default:e(()=>[l(V,{class:"d-flex align-center"},{default:e(()=>[wt,t("div",Yt,[t("div",Mt,[l(N,{modelValue:c(S),"onUpdate:modelValue":o[4]||(o[4]=s=>k(S)?S.value=s:null),items:c(X),class:"type_primary_fill","menu-props":{contentClass:"primary_fill_item"},"item-title":"txt","item-value":"abbr",label:"TEXT",variant:"outlined","persistent-hint":"",rounded:"","return-object":"","single-line":"","hide-details":""},null,8,["modelValue","items"])]),t("div",Bt,[l(H,{modelValue:c(M),"onUpdate:modelValue":o[5]||(o[5]=s=>k(M)?M.value=s:null),"is-range":"","model-config":{type:"string",mask:"YYYY-MM-DD"},masks:{L:"YYYY-MM-DD",title:"YYYY년 MMM"}},{default:e(({inputValue:s,togglePopover:d})=>[t("div",St,[t("div",Tt,[t("input",{value:s.start||"YYYY.MM.DD",onClick:()=>d()},null,8,At),t("i",{class:"ico calendar",onClick:()=>d()},null,8,Ft)]),Et,t("div",jt,[t("input",{value:s.end||"YYYY.MM.DD",onClick:()=>d()},null,8,zt),t("i",{class:"ico calendar",onClick:()=>d()},null,8,It)])])]),footer:e(()=>[t("div",Ut,[t("p",null,[t("span",null,m(E.footerText),1)])])]),_:1},8,["modelValue"])])])]),_:1})]),_:1}),l(D,{class:"px40 py20"},{default:e(()=>[l(z,{"no-gutters":"",class:"gap6"},{default:e(()=>[l(y,null,{default:e(()=>[t("div",Lt,[Nt,t("div",Rt,[l(z,{"no-gutters":"",class:"gap2"},{default:e(()=>[l(y,null,{default:e(()=>[(i(),u(f,null,v(T,s=>t("div",{class:"use-word",key:s.title},[t("span",{class:"bullet",style:Y({background:s.color})},null,4),t("p",null,m(s.title),1)])),64))]),_:1}),l(y,null,{default:e(()=>[(i(),u(f,null,v(T,(s,d)=>t("div",{class:"progress-background",key:s.title},[t("div",{class:w(["progress-date",s.value>70?"white":""]),style:Y({width:s.value+"%",background:s.color})},[t("span",null,m(d===T.length-1?s.value+"개":s.value),1)],6)])),64))]),_:1})]),_:1})])])]),_:1}),l(y,null,{default:e(()=>[t("div",Gt,[Ot,t("div",Xt,[l(z,{"no-gutters":"",class:"gap2"},{default:e(()=>[l(y,null,{default:e(()=>[(i(),u(f,null,v(A,s=>t("div",{class:"use-word",key:s.title},[t("span",{class:"bullet",style:Y({background:s.color})},null,4),t("p",null,m(s.title),1)])),64))]),_:1}),l(y,null,{default:e(()=>[(i(),u(f,null,v(A,(s,d)=>t("div",{class:"progress-background",key:s.title},[t("div",{class:w(["progress-date",s.value>70?"white":""]),style:Y({width:s.value+"%",background:s.color})},[t("span",null,m(d===A.length-1?s.value+"개":s.value),1)],6)])),64))]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{xl as default};
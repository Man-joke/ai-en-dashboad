import{a as y}from"./BaY6Zg1F.js";import{V as x}from"./BKJUu8K8.js";import{V as u}from"./BrNdv6TO.js";import{a as b,V as k}from"./oJ317TiT.js";import{V as o}from"./B1QExcYD.js";import{V}from"./BA3T3aFE.js";import{V as _}from"./KWcawHqq.js";import{L as C,A as l,t as I,x as t,z as e,R as a,B as c,y as n,M as B}from"./B_vfiEZe.js";import"./CIFD_C6M.js";import"./D6ccEb_q.js";import"./DtNImj0h.js";import"./BoEIRsDx.js";import"./CSR1Oovd.js";import"./B8YB6kp6.js";import"./B9zzZUYD.js";import"./HH6xagHG.js";import"./CrLUMkWd.js";import"./CQDjgXlo.js";import"./Ca7rCPlF.js";import"./CTvFO2tJ.js";import"./DOvyJZ4Y.js";import"./DRPrMtrA.js";import"./DWGaNmQL.js";import"./BEPbLDNn.js";import"./B5bKwtDT.js";import"./DYGRfR4q.js";import"./BYskvoXY.js";import"./BKMg3jQG.js";import"./CMXh7jLG.js";import"./D8fIz6yq.js";import"./Cav82K1U.js";import"./BexMN-eP.js";import"./C5x9Ib7n.js";import"./4Gc_BC3A.js";const q={class:"tableCarousel"},z=t("h3",{class:"bullet"}," 단원별 평균 학업 성취율입니다. 각 단원별 학업 성취율을 클릭하면, 학생별로 단원 평가를 과제로 출제할 수 있습니다. ",-1),A=t("i",{class:"ico close_circle close position-absolute"},null,-1),N={class:"box"},T={class:"left-table"},H={class:"center-table"},w=t("i",{class:"emblem emblem_02"},null,-1),D=t("i",{class:"ico stamp_complete"},null,-1),S=t("i",{class:"emblem emblem_05"},null,-1),F=t("i",{class:"ico list"},null,-1),L={class:"disabled"},M={class:"disabled"},P={class:"disabled"},R=t("i",{class:"emblem emblem_02"},null,-1),U=t("i",{class:"ico stamp_complete"},null,-1),$=t("i",{class:"ico stamp_wait"},null,-1),j=t("i",{class:"emblem emblem_05"},null,-1),E=t("i",{class:"ico list"},null,-1),G={class:"disabled"},J={class:"disabled"},K={class:"disabled"},O={class:"right-table"},Q={class:"customized",style:{top:"26.4rem",display:"block"}},W={class:"contents d-flex align-center"},X={class:"left"},Y={class:"box d-flex align-center"},Z={class:"avatar"},tt={class:"mgl20 mgr30"},st=t("h3",null,"단원 평가 AI 맞춤 출제",-1),et={class:"right"},lt={class:"block"},at=t("p",{class:"question"},"단어 문제",-1),it={class:"d-flex align-center mgt10"},nt=t("span",{class:"points mgl10"},"x 6점 배점",-1),ot={class:"block"},ct=t("p",{class:"question"},"표현 문제",-1),rt={class:"d-flex align-center mgt10"},dt=t("span",{class:"points mgl10"},"x 6점 배점",-1),ut={class:"block"},_t=t("p",{class:"question"},"상황 문제",-1),mt={class:"d-flex align-center mgt10"},pt=t("span",{class:"points mgl10"},"x 8점 배점",-1),bt={class:"block"},ht=t("p",{class:"question"},"총 문항 수",-1),ft={class:"d-flex align-center mgt10"},vt=t("span",{class:"points mgl10"},"= 100점 만점",-1),gt={class:"page_buttons"},es={__name:"TableCarousel",setup(yt){const h=[{title:"번호",sortable:!1,key:"number"},{title:"이름",key:"name"}],f=[{number:1,name:"김아미"},{number:2,name:"김아미"},{number:3,name:"김아미"},{number:4,name:"김아미"},{number:5,name:"김아미"}],m=[{title:"1단원",sortable:!1,key:"unit01"},{title:"2단원",sortable:!1,key:"unit02"},{title:"3단원",sortable:!1,key:"unit03"},{title:"4단원",sortable:!1,key:"unit04"},{title:"5단원",sortable:!1,key:"unit05"},{title:"6단원",sortable:!1,key:"unit06"}],p=[{unit01:90,unit02:90,unit03:90,unit04:"학습대기",unit05:"학습대기",unit06:"학습대기"},{unit01:90,unit02:90,unit03:90,unit04:"학습대기",unit05:"학습대기",unit06:"학습대기"},{unit01:90,unit02:90,unit03:90,unit04:"학습대기",unit05:"학습대기",unit06:"학습대기"},{unit01:90,unit02:90,unit03:"미학습",unit04:"학습대기",unit05:"학습대기",unit06:"학습대기"},{unit01:90,unit02:90,unit03:90,unit04:"학습대기",unit05:"학습대기",unit06:"학습대기"}],v=[{title:"평균 학업 성취율",sortable:!1,key:"average"}],g=[{average:"75%"},{average:"75%"},{average:"75%"},{average:"75%"},{average:"75%"}],i=d=>typeof d=="number"?"type_default_underline":"txt",r=d=>typeof d=="number"?`${d}%`:d;return(d,xt)=>(I(),C(x,null,{default:l(()=>[t("div",q,[z,A,t("div",N,[t("div",T,[e(u,{headers:h,items:f,"item-value":"number",class:"color_gray type_center"})]),t("div",H,[e(k,{"hide-delimiters":"",class:"table-carousel",height:"auto"},{default:l(()=>[e(b,null,{default:l(()=>[e(u,{headers:m,items:p,"item-value":"number",class:"color_gray type_center"},{item:l(({item:s})=>[t("tr",null,[t("td",null,[w,e(o,{variant:"text",ripple:!1,class:a(i(s.unit01))},{default:l(()=>[c(n(r(s.unit01)),1)]),_:2},1032,["class"]),D]),t("td",null,[S,e(o,{variant:"text",ripple:!1,class:a(i(s.unit02))},{default:l(()=>[c(n(r(s.unit02)),1)]),_:2},1032,["class"]),F]),t("td",null,[t("i",{class:a(["emblem",s.unit03==="미학습"?"emblem_01":"emblem_04"])},null,2),e(o,{variant:"text",ripple:!1,class:a(i(s.unit03))},{default:l(()=>[c(n(r(s.unit03)),1)]),_:2},1032,["class"])]),t("td",L,[t("span",{class:a(i(s.unit04))},n(s.unit04),3)]),t("td",M,[t("span",{class:a(i(s.unit05))},n(s.unit05),3)]),t("td",P,[t("span",{class:a(i(s.unit06))},n(s.unit06),3)])])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(u,{headers:m,items:p,"item-value":"number",class:"color_gray type_center"},{item:l(({item:s})=>[t("tr",null,[t("td",null,[R,e(o,{variant:"text",ripple:!1,class:a(i(s.unit01))},{default:l(()=>[c(n(r(s.unit01)),1)]),_:2},1032,["class"]),U,$]),t("td",null,[j,e(o,{variant:"text",ripple:!1,class:a(i(s.unit02))},{default:l(()=>[c(n(r(s.unit02)),1)]),_:2},1032,["class"]),E]),t("td",null,[t("i",{class:a(["emblem",s.unit03==="미학습"?"emblem_01":"emblem_04"])},null,2),e(o,{variant:"text",ripple:!1,class:a(i(s.unit03))},{default:l(()=>[c(n(r(s.unit03)),1)]),_:2},1032,["class"])]),t("td",G,[t("span",{class:a(i(s.unit04))},n(s.unit04),3)]),t("td",J,[t("span",{class:a(i(s.unit05))},n(s.unit05),3)]),t("td",K,[t("span",{class:a(i(s.unit06))},n(s.unit06),3)])])]),_:1})]),_:1})]),_:1})]),t("div",O,[e(u,{headers:v,items:g,"item-value":"number",class:"color_gray type_center"})]),t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[e(V,{src:B(y),alt:"캐릭터",class:"avatar-item-93"},null,8,["src"])]),t("div",tt,[st,e(o,{rounded:"",flat:"",size:"small",class:"primary mgt10"},{default:l(()=>[c("과제 보내기")]),_:1})])])]),t("div",et,[t("div",lt,[at,t("div",it,[e(_,{type:"number",value:"5","hide-details":"",variant:"filled"}),nt])]),t("div",ot,[ct,t("div",rt,[e(_,{type:"number",value:"5","hide-details":"",variant:"filled"}),dt])]),t("div",ut,[_t,t("div",mt,[e(_,{type:"number",value:"5","hide-details":"",variant:"filled"}),pt])]),t("div",bt,[ht,t("div",ft,[e(_,{type:"number",value:"15",class:"total","hide-details":"",variant:"filled",disabled:""}),vt])])])])])]),t("div",gt,[e(o,{rounded:"",flat:"",class:"secondary"},{default:l(()=>[c("5명 더보기 (1/4)")]),_:1})])])]),_:1}))}};export{es as default};
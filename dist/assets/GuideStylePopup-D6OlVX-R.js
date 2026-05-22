import g from"./UiModal-gCDnk0bH.js";import h from"./UiTab-BHHux2YS.js";import C from"./UiTabPanel-DeyB_tbn.js";import{_ as k,r as v,b as d,c as m,d as t,e as i,w as n,g as e,F as T,h as B,k as b,t as O,f as w,j as y}from"./index-SBn8eRYL.js";const F={name:"StylePopup",components:{popup:g,UiTab:h,UiTabPanel:C},setup(){const a=y(new Set),o=s=>{a.value=new Set([...a.value,s])},f=s=>{const u=new Set(a.value);u.delete(s),a.value=u,console.log("handlePopClose",a.value)},l=y(0),P=y([{label:"기본",disabled:!1},{label:"부가",disabled:!1},{label:"PT",disabled:!1},{label:"패스트",disabled:!1},{label:"엑스",disabled:!1},{label:"프로",disabled:!1},{label:"필라테스",disabled:!1}]);return{activePopups:a,handlePopOpen:o,handlePopClose:f,activeTabIndex:l,tabs:P,handleTabSelected:s=>{l.value=s}}}},S={class:"wrapper"},L={class:"pub-guie-wrap"},U={class:"pub-guide-view"},D={class:"btn-wrap"},I={class:"pub-guide-view"},N={class:"btn-wrap"},V={class:"pub-guide-view"},G={class:"btn-wrap right"},j={class:"pub-guide-view"},E={class:"btn-wrap right"},q={class:"pub-guide-view"},z={class:"btn-wrap right"},A={class:"pub-guide-view"},H={class:"col-multi-group payment"},J={class:"col scroll-y"},K={class:"tab-box"},M={class:"tabs"},Q={class:"tabs-content"};function R(a,o,f,l,P,x){const s=v("popup"),u=v("UiTab"),r=v("UiTabPanel");return d(),m("div",S,[t("div",L,[o[39]||(o[39]=t("header",null,"Popup Style Guide",-1)),t("section",null,[t("div",null,[o[16]||(o[16]=t("h3",{class:"pub-guide-tit-s"},"Layer Popup(default w600)",-1)),t("div",U,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[0]||(o[0]=p=>l.handlePopOpen("pop-default-w600"))},"default w600"),i(s,{"is-pop-show":l.activePopups.has("pop-default-w600"),"pop-close-handler":()=>l.handlePopClose("pop-default-w600"),"pop-title":"Default Popup Title","add-class-name":"pop-w600"},{popBody:n(()=>[o[12]||(o[12]=e(" 팝업 내용 팝업 내용 ",-1)),o[13]||(o[13]=t("br",null,null,-1)),o[14]||(o[14]=t("br",null,null,-1)),t("button",{type:"button",class:"btn-txt secondary",onClick:o[1]||(o[1]=p=>l.handlePopOpen("pop-default-w360"))},"팝업 위 팝업 열기(새로 열리는 팝업엔 딤드 없음)")]),popFooter:n(()=>[t("div",D,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[2]||(o[2]=p=>l.handlePopClose("pop-default-w600"))},"닫기"),o[15]||(o[15]=t("button",{type:"button",class:"btn-txt primary"},"저장",-1))])]),_:1},8,["is-pop-show","pop-close-handler"])]),o[17]||(o[17]=t("div",{class:"pub-guide-code"},[t("pre",null,`<button type="button" class="btn-txt secondary" click="handlePopOpen('pop-default-w600')">secondary button h36</button>
<popup 
  is-pop-show="activePopup === 'pop-default-w600'"
  :pop-close-handler="handlePopClose('pop-default-w600')"
  pop-title="Default Popup Title"
  add-class-name="pop-w600"
>
  <template v-slot:popBody>
      팝업 내용 팝업 내용
  </template>
  <template v-slot:popFooter>
    <div class="btn-wrap">
      <button type="button" class="btn-txt secondary">닫기</button>
      <button type="button" class="btn-txt primary">저장</button>
    </div>
  </template> 
</popup>
            `)],-1))]),t("div",null,[o[20]||(o[20]=t("h3",{class:"pub-guide-tit-s"},"Layer Popup(small w360)",-1)),t("div",I,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[3]||(o[3]=p=>l.handlePopOpen("pop-default-w360"))},"small w360"),i(s,{"is-pop-show":l.activePopups.has("pop-default-w360"),"pop-close-handler":()=>l.handlePopClose("pop-default-w360"),"pop-title":"small Popup Title","add-class-name":"pop-w360"},{popBody:n(()=>[...o[18]||(o[18]=[e(" 팝업 내용 팝업 내용 ",-1)])]),popFooter:n(()=>[t("div",N,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[4]||(o[4]=p=>l.handlePopClose("pop-default-w360"))},"닫기"),o[19]||(o[19]=t("button",{type:"button",class:"btn-txt primary"},"저장",-1))])]),_:1},8,["is-pop-show","pop-close-handler"])]),o[21]||(o[21]=t("div",{class:"pub-guide-code"},[t("pre",null,`<button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-default-w360')">secondary button h36</button>
<popup 
  :is-pop-show="activePopup === 'pop-default-w360'"
  :pop-close-handler="handlePopClose('pop-default-w360')"
  pop-title="Default Popup Title"
>
  <template v-slot:popBody>
      팝업 내용 팝업 내용
  </template>
  <template v-slot:popFooter>
    <div class="btn-wrap">
      <button type="button" class="btn-txt secondary" @click="handlePopClose('pop-default-w360')">닫기</button>
      <button type="button" class="btn-txt primary">저장</button>
    </div>
  </template> 
</popup>
            `)],-1))]),t("div",null,[o[24]||(o[24]=t("h3",{class:"pub-guide-tit-s"},"Layer Popup(large w800)",-1)),t("div",V,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[5]||(o[5]=p=>l.handlePopOpen("pop-default-w800"))},"large w800"),i(s,{"is-pop-show":l.activePopups.has("pop-default-w800"),"pop-close-handler":()=>l.handlePopClose("pop-default-w800"),"pop-title":"large Popup Title","add-class-name":"pop-w800"},{popBody:n(()=>[...o[22]||(o[22]=[])]),popFooter:n(()=>[t("div",G,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[6]||(o[6]=p=>l.handlePopClose("pop-default-w800"))},"닫기"),o[23]||(o[23]=t("button",{type:"button",class:"btn-txt primary"},"저장",-1))])]),_:1},8,["is-pop-show","pop-close-handler"])]),o[25]||(o[25]=t("div",{class:"pub-guide-code"},[t("pre",null,`<button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-default-w800')">secondary button h36</button>
<popup 
  :is-pop-show="activePopup === 'pop-default-w800'"
  :pop-close-handler="handlePopClose('pop-default-w800')"
  pop-title="Default Popup Title"
>
  <template v-slot:popBody>
      팝업 내용 팝업 내용
  </template>
  <template v-slot:popFooter>
    <div class="btn-wrap right">
      <button type="button" class="btn-txt secondary" @click="handlePopClose('pop-default-w800')">닫기</button>
      <button type="button" class="btn-txt primary">저장</button>
    </div>
  </template> 
</popup>
            `)],-1))]),t("div",null,[o[28]||(o[28]=t("h3",{class:"pub-guide-tit-s"},"Layer Popup(xlarge w1000)",-1)),t("div",j,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[7]||(o[7]=p=>l.handlePopOpen("pop-default-w1000"))},"xlarge w1000"),i(s,{"is-pop-show":l.activePopups.has("pop-default-w1000"),"pop-close-handler":()=>l.handlePopClose("pop-default-w1000"),"pop-title":"xlarge Popup Title","add-class-name":"pop-w1000"},{popBody:n(()=>[...o[26]||(o[26]=[e(" 팝업 내용 팝업 내용 ",-1)])]),popFooter:n(()=>[t("div",E,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[8]||(o[8]=p=>l.handlePopClose("pop-default-w1000"))},"닫기"),o[27]||(o[27]=t("button",{type:"button",class:"btn-txt primary"},"저장",-1))])]),_:1},8,["is-pop-show","pop-close-handler"])]),o[29]||(o[29]=t("div",{class:"pub-guide-code"},[t("pre",null,`<button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-default-w1000')">secondary button h36</button>
<popup 
  :is-pop-show="activePopup === 'pop-default-w1000'"
  :pop-close-handler="handlePopClose('pop-default-w1000')"
  pop-title="xlarge Popup Title"
  add-class-name="pop-w1000"
>
  <template v-slot:popBody>
      팝업 내용 팝업 내용
  </template>
  <template v-slot:popFooter>
    <div class="btn-wrap right">
      <button type="button" class="btn-txt secondary" @click="handlePopClose('pop-default-w1000')">닫기</button>
      <button type="button" class="btn-txt primary">저장</button>
    </div>
  </template> 
</popup>
            `)],-1))]),t("div",null,[o[31]||(o[31]=t("h3",{class:"pub-guide-tit-s"},"Layer Popup(xlarge w1400)",-1)),t("div",q,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[9]||(o[9]=p=>l.handlePopOpen("pop-default-w1400"))},"xlarge w1400"),i(s,{"is-pop-show":l.activePopups.has("pop-default-w1400"),"pop-close-handler":()=>l.handlePopClose("pop-default-w1400"),"pop-title":"xlarge Popup Title","add-class-name":"pop-w1400"},{popBody:n(()=>[...o[30]||(o[30]=[e(" 팝업 내용 팝업 내용 ",-1)])]),popFooter:n(()=>[t("div",z,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[10]||(o[10]=p=>l.handlePopClose("pop-default-w1400"))},"상세보기")])]),_:1},8,["is-pop-show","pop-close-handler"])]),o[32]||(o[32]=t("div",{class:"pub-guide-code"},[t("pre",null,`<button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-default-w1400')">xlarge w1400</button>
<popup 
  :is-pop-show="activePopup === 'pop-default-w1400'"
  :pop-close-handler="handlePopClose('pop-default-w1400')"
  pop-title="xlarge Popup Title"
>
  <template v-slot:popBody>
      팝업 내용 팝업 내용
  </template>
  <template v-slot:popFooter>
    <div class="btn-wrap right">
      <button type="button" class="btn-txt secondary" @click="handlePopClose('pop-default-w1400')">닫기</button>
      <button type="button" class="btn-txt primary">저장</button>
    </div>
  </template> 
</popup>
            `)],-1))]),t("div",null,[o[37]||(o[37]=t("h3",{class:"pub-guide-tit-s"},"xlarge w1400 col2",-1)),t("div",A,[t("button",{type:"button",class:"btn-txt secondary",onClick:o[11]||(o[11]=p=>l.handlePopOpen("pop-default-w1400 col2"))},"xlarge w1400 col2"),i(s,{"is-pop-show":l.activePopups.has("pop-default-w1400 col2"),"pop-close-handler":()=>l.handlePopClose("pop-default-w1400 col2"),"is-pop-footer":!1,"pop-title":"회원권 판매","add-class-name":"pop-w1400 hscroll"},{popBody:n(()=>[t("div",H,[t("div",J,[t("div",K,[t("ul",M,[(d(!0),m(T,null,B(l.tabs,(p,c)=>(d(),b(u,{key:c,active:l.activeTabIndex===c,disabled:p.disabled,onTabSelected:W=>l.handleTabSelected(c)},{default:n(()=>[e(O(p.label),1)]),_:2},1032,["active","disabled","onTabSelected"]))),128))])]),t("div",Q,[l.activeTabIndex===0?(d(),b(r,{key:0},{default:n(()=>[...o[33]||(o[33]=[e(" content01 ",-1)])]),_:1})):w("",!0),l.activeTabIndex===1?(d(),b(r,{key:1},{default:n(()=>[...o[34]||(o[34]=[e(" content02 ",-1)])]),_:1})):w("",!0),l.activeTabIndex===2?(d(),b(r,{key:2},{default:n(()=>[...o[35]||(o[35]=[e(" content03 ",-1)])]),_:1})):w("",!0)])]),o[36]||(o[36]=t("div",{class:"col detail"},[t("div",{class:"detail-box"},[t("h4",{class:"l-ttl fc-primary"},"기본정보 설정"),t("div",{class:"no-data"},[t("span",{class:"ico-nodata"}),t("p",{class:"desc"},"상품을 선택해주세요.")]),t("h4",{class:"l-ttl fc-primary"},"기본정보 설정"),t("h4",{class:"l-ttl fc-primary"},"결제정보"),t("ul",{class:"detail-info-list"},[t("li",null,[t("span",{class:"info-lb"},"피트니스 - 6개월"),t("span",{class:"info-val"},[t("strong",null,"545,455"),e("원")])]),t("li",null,[t("span",{class:"info-lb"},"가입비"),t("span",{class:"info-val"},[t("strong",null,"30,000"),e("원")])])]),t("ul",{class:"detail-info-list"},[t("li",null,[t("span",{class:"info-lb"},"PT 세션 - 10회"),t("span",{class:"info-val"},[t("strong",null,"545,455"),e("원")])])]),t("ul",{class:"detail-info-list"},[t("li",null,[t("span",{class:"info-lb"},"쿠폰 사용 ver.1"),t("span",{class:"info-val fc-orange"},[t("strong",null,"- 30,000"),e("원")])]),t("li",null,[t("span",{class:"info-lb"},"쿠폰 사용 ver.1"),t("span",{class:"info-val fc-orange"},[t("strong",null,"쿠폰 사용 ver.2")])])]),t("ul",{class:"detail-info-list total"},[t("li",null,[t("span",{class:"info-lb"},"총 합계"),t("span",{class:"info-val"},[t("strong",null,"- 27,000"),e("원")])]),t("li",null,[t("span",{class:"info-lb"},"부가세"),t("span",{class:"info-val"},[t("strong",null,"3,000"),e("원")])])])]),t("div",{class:"result-info-box"},[t("h4",{class:"l-ttl"},"결제 예정금액"),t("div",{class:"val-info"},[t("strong",{class:"val"},"1,030,000"),t("span",{class:"unit"},"원")]),t("div",{class:"btn-wrap"},[t("button",{type:"button",class:"btn-txt primary"},"결제요청"),t("button",{type:"button",class:"btn-refresh"},[t("span",{class:"txt-blind"},"새로고침")])])])],-1))])]),_:1},8,["is-pop-show","pop-close-handler"])]),o[38]||(o[38]=t("div",{class:"pub-guide-code"},[t("pre",null,`<button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-default-w1400 col2')">xlarge w1400</button>
<popup 
  :is-pop-show="activePopup === 'pop-default-w1400 col2'"
  :pop-close-handler="handlePopClose('pop-default-w1400 col2')"
  pop-title="xlarge Popup Title"
>
  <template v-slot:popBody>
      팝업 내용 팝업 내용
  </template>
  <template v-slot:popFooter>
    <div class="btn-wrap">
      <button type="button" class="btn-txt secondary">닫기</button>
      <button type="button" class="btn-txt primary">저장</button>
    </div>
  </template> 
</popup>
            `)],-1))])])])])}const _=k(F,[["render",R]]);export{_ as default};

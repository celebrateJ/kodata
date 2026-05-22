import I from"./UiTab-BHHux2YS.js";import _ from"./UiTabPanel-DeyB_tbn.js";import{_ as P,r,b as t,c as T,d as e,F as x,h as f,k as i,w as d,g as b,t as U,f as o,j as m}from"./index-SBn8eRYL.js";const k={name:"StyleTabList",components:{UiTab:I,UiTabPanel:_},setup(){const c=m(0),n=m([{label:"Tab 1",disabled:!1},{label:"Tab 2",disabled:!1},{label:"Tab 3",disabled:!1}]);return{activeTabIndex:c,tabs:n,handleTabSelected:a=>{c.value=a}}}},S={class:"pub-guie-wrap"},g={class:"pub-guide-view"},w={class:"tab-box"},C={class:"tabs"},B={class:"tabs-content"},L={class:"pub-guide-view"},N={class:"tab-box type-box"},V={class:"tabs"},F={class:"tabs-content"};function G(c,n,p,a,j,D){const u=r("UiTab"),s=r("UiTabPanel");return t(),T("div",S,[n[10]||(n[10]=e("header",null,"Tab Style Guide",-1)),e("section",null,[e("div",null,[n[3]||(n[3]=e("h3",{class:"pub-guide-tit-s"},"Tab style 01",-1)),e("div",g,[e("div",w,[e("ul",C,[(t(!0),T(x,null,f(a.tabs,(v,l)=>(t(),i(u,{key:l,active:a.activeTabIndex===l,disabled:v.disabled,onTabSelected:y=>a.handleTabSelected(l)},{default:d(()=>[b(U(v.label),1)]),_:2},1032,["active","disabled","onTabSelected"]))),128))])]),e("div",B,[a.activeTabIndex===0?(t(),i(s,{key:0},{default:d(()=>[...n[0]||(n[0]=[e("div",null,"content01",-1)])]),_:1})):o("",!0),a.activeTabIndex===1?(t(),i(s,{key:1},{default:d(()=>[...n[1]||(n[1]=[e("div",null,"content02",-1)])]),_:1})):o("",!0),a.activeTabIndex===2?(t(),i(s,{key:2},{default:d(()=>[...n[2]||(n[2]=[e("div",null,"content03",-1)])]),_:1})):o("",!0)])]),n[4]||(n[4]=e("div",{class:"pub-guide-code"},[e("pre",null,[b(`<div class="tab-box">
  <ul class="tabs">
    <UiTab
      v-for="(tab, index) in tabs"
      :key="index"
      :active="activeTabIndex === index"
      :disabled="tab.disabled"
      @tab-selected="handleTabSelected(index)"
    >
      {{ tab.label }}
    </UiTab>
  </ul>
</div>

`),e("span",{class:"comment"},"<!-- Tabs Content -->"),b(`
<div class="tabs-content">
  <UiTabPanel v-if="activeTabIndex === 0">
    <div>content01</div>
  </UiTabPanel>
  <UiTabPanel v-if="activeTabIndex === 1">
    <div>content02</div>
  </UiTabPanel>
  <UiTabPanel v-if="activeTabIndex === 2">
    <div>content03</div>
  </UiTabPanel>
</div>
          `)])],-1))]),e("div",null,[n[8]||(n[8]=e("h3",{class:"pub-guide-tit-s"},"Tab style 02",-1)),e("div",L,[e("div",N,[e("ul",V,[(t(!0),T(x,null,f(a.tabs,(v,l)=>(t(),i(u,{key:l,active:a.activeTabIndex===l,disabled:v.disabled,onTabSelected:y=>a.handleTabSelected(l)},{default:d(()=>[b(U(v.label),1)]),_:2},1032,["active","disabled","onTabSelected"]))),128))])]),e("div",F,[a.activeTabIndex===0?(t(),i(s,{key:0},{default:d(()=>[...n[5]||(n[5]=[e("div",null,"content01",-1)])]),_:1})):o("",!0),a.activeTabIndex===1?(t(),i(s,{key:1},{default:d(()=>[...n[6]||(n[6]=[e("div",null,"content02",-1)])]),_:1})):o("",!0),a.activeTabIndex===2?(t(),i(s,{key:2},{default:d(()=>[...n[7]||(n[7]=[e("div",null,"content03",-1)])]),_:1})):o("",!0)])]),n[9]||(n[9]=e("div",{class:"pub-guide-code"},[e("pre",null,[b(`<div class="tab-box type-box">
  <ul class="tabs">
    <UiTab
      v-for="(tab, index) in tabs"
      :key="index"
      :active="activeTabIndex === index"
      :disabled="tab.disabled"
      @tab-selected="handleTabSelected(index)"
    >
      {{ tab.label }}
    </UiTab>
  </ul>
</div>

`),e("span",{class:"comment"},"<!-- Tabs Content -->"),b(`
<div class="tabs-content">
  <UiTabPanel v-if="activeTabIndex === 0">
    <div>content01</div>
  </UiTabPanel>
  <UiTabPanel v-if="activeTabIndex === 1">
    <div>content02</div>
  </UiTabPanel>
  <UiTabPanel v-if="activeTabIndex === 2">
    <div>content03</div>
  </UiTabPanel>
</div>
          `)])],-1))])])])}const A=P(k,[["render",G]]);export{A as default};

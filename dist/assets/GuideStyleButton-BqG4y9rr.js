import g from"./UiBreadcrumbs-BJ9HOZJe.js";import y from"./UiPagination-4byX9tsp.js";import{_ as v,r,b as s,c as l,d as n,m as p,e as c,F as x,h,n as k,t as f,j as d}from"./index-SBn8eRYL.js";const w={name:"StyleButton",components:{UiBreadcrumbs:g,UiPagination:y},setup(){const a=d([{name:"홈",path:""},{name:"1depth menu",path:""},{name:"2depth menu",path:"#"}]),t=[{value:"1",label:"월간"},{value:"2",label:"주간"},{value:"3",label:"일간",lastGroup:!0},{value:"4",label:"목록"}],u=d(0);return{breadcrumbsList:a,optList:t,selectedOpt:u,changeOpt:(e=>{u.value=e})}}},B={class:"pub-guie-wrap"},_={class:"pub-guide-view"},O={class:"pub-guide-view"},U={class:"pub-guide-view"},L={class:"opt-list"},G=["onClick"];function P(a,t,u,o,e,S){const q=r("UiBreadcrumbs"),m=r("UiPagination");return s(),l("div",B,[t[8]||(t[8]=n("header",null,"Buttons Style Guide",-1)),n("section",null,[n("div",null,[t[3]||(t[3]=p(`<h3 class="pub-guide-tit-s">Text Button</h3><div class="pub-guide-view"><div class="btn-wrap"><button type="button" class="btn-txt primary">primary button h36</button><button type="button" class="btn-txt secondary">secondary button h36</button><button type="button" class="btn-txt line-primary">line-primary button h36</button><button type="button" class="btn-txt black">black button h36</button><button type="button" class="btn-txt primary" disabled>disabled button</button></div><br><div class="btn-wrap"><button type="button" class="btn-txt primary large">large button h48</button><button type="button" class="btn-txt secondary large">large button h48</button><button type="button" class="btn-txt primary small">small button h28</button><button type="button" class="btn-txt secondary small">small button h28</button><button type="button" class="btn-txt black small">small button h28</button><button type="button" class="btn-txt primary mini">mini button h24</button><button type="button" class="btn-txt secondary mini">mini button h24</button><button type="button" class="btn-txt black mini">mini button h24</button><button type="button" class="btn-txt round black small">round small button h28</button><button type="button" class="btn-txt round secondary small">round small button h28</button></div><button type="button" class="btn-black-small">검색</button><button type="button" class="btn-line-small">검색</button><br></div><div class="pub-guide-code"><pre>&lt;div class=&quot;btn-wrap&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt primary&quot;&gt;primary button h36&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt secondary&quot;&gt;secondary button h36&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt black&quot;&gt;black button h36&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt primary&quot; disabled&gt;disabled button&lt;/button&gt;
&lt;/div&gt;

&lt;button type=&quot;button&quot; class=&quot;btn-txt primary large&quot;&gt;large button h48&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt secondary large&quot;&gt;large button h48&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt primary small&quot;&gt;small button h28&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt secondary small&quot;&gt;small button h28&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt black small&quot;&gt;small button h28&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt primary mini&quot;&gt;mini button h24&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt secondary mini&quot;&gt;mini button h24&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt black mini&quot;&gt;mini button h24&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt round black small&quot;&gt;round small button h28&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-txt round secondary small&quot;&gt;round small button h28&lt;/button&gt;
          </pre></div><h3 class="pub-guide-tit-s">Icon Button</h3><div class="pub-guide-view"><button type="button" class="btn-more-list">더보기</button><button type="button" class="btn-more">더보기</button><button type="button" class="btn-refresh"><span class="txt-blind">새로고침</span></button><button type="button" class="btn-refresh white"><span class="txt-blind">새로고침</span></button><button type="button" class="btn-icon exel">엑셀 다운로드</button><button type="button" class="btn-icon add">등록</button></div><div class="pub-guide-code"><pre>&lt;button type=&quot;button&quot; class=&quot;btn-more-list&quot;&gt;더보기&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-more&quot;&gt;더보기&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-refresh&quot;&gt;&lt;span class=&quot;txt-blind&quot;&gt;새로고침&lt;/span&gt;&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-icon exel&quot;&gt;엑셀 다운로드&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-icon add&quot;&gt;등록&lt;/button&gt;

          </pre></div><h3 class="pub-guide-tit-s">Breadcrumbs</h3>`,7)),n("div",_,[c(q,{breadcrumbs:o.breadcrumbsList},null,8,["breadcrumbs"])]),t[4]||(t[4]=n("h3",{class:"pub-guide-tit-s"},"Pagenation",-1)),n("div",O,[c(m)]),t[5]||(t[5]=n("div",{class:"pub-guide-code"},[n("pre",null,`<UiPagination />
          `)],-1)),t[6]||(t[6]=n("h3",{class:"pub-guide-tit-s"},"기타",-1)),n("div",U,[n("div",L,[(s(!0),l(x,null,h(o.optList,(i,b)=>(s(),l("button",{type:"button",class:k(["opt-item",{active:o.selectedOpt===b,last:i.lastGroup}]),key:b,onClick:()=>o.changeOpt(b)},f(i.label),11,G))),128))]),t[0]||(t[0]=n("br",null,null,-1)),t[1]||(t[1]=n("button",{type:"button",class:"opt-item"},"목록",-1)),t[2]||(t[2]=n("br",null,null,-1))]),t[7]||(t[7]=p(`<div class="pub-guide-code"><pre>&lt;div class=&quot;opt-list&quot;&gt;
  &lt;button
    type=&quot;button&quot; 
    class=&quot;opt-item&quot;
    :class=&quot;{ active : selectedOpt === index, last : item.lastGroup, }&quot;
    v-for=&quot;(item, index) in optList&quot; :key=&quot;index&quot;
    @click=&quot;() =&gt; changeOpt(index)&quot;
  &gt;item.label&lt;/button&gt;
&lt;/div&gt;
          </pre></div><h3 class="pub-guide-tit-s">btn-wrap 분할</h3><div class="pub-guide-view"><div class="btn-wrap col2"><button type="button" class="btn-txt line-primary">버튼</button><button type="button" class="btn-txt line-primary">버튼</button><button type="button" class="btn-txt line-primary">버튼</button><button type="button" class="btn-txt line-primary">버튼</button></div></div><div class="pub-guide-code"><pre>&lt;div class=&quot;btn-wrap col2&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;버튼&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;버튼&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;버튼&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;버튼&lt;/button&gt;
&lt;/div&gt;
          </pre></div>`,4))])])])}const F=v(w,[["render",P]]);export{F as default};

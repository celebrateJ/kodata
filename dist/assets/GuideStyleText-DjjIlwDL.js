import u from"./UiBreadcrumbs-BJ9HOZJe.js";import{_ as o,r,b as d,c as p,d as l,m as s,e as b,j as i}from"./index-SBn8eRYL.js";const c={name:"StyleText",components:{UiBreadcrumbs:u},setup(){return{breadcrumbsList:i([{name:"홈",path:""},{name:"1depth menu",path:""},{name:"2depth menu",path:"#"}])}}},g={class:"pub-guie-wrap"},m={class:"pub-guide-view"},q={class:"page-title-wrap"};function h(a,t,v,n,y,k){const e=r("UiBreadcrumbs");return d(),p("div",g,[t[3]||(t[3]=l("header",null,"Text/Title Style Guide",-1)),l("section",null,[l("div",null,[t[1]||(t[1]=s(`<h3 class="pub-guide-tit-s">Headline</h3><div class="pub-guide-view"><h2 class="main-ttl">main title</h2><h3 class="sub-ttl">sub title</h3><h4 class="section-ttl">section title</h4><h4 class="l-ttl">large title</h4><h4 class="m-ttl">medium title</h4></div><div class="pub-guide-code"><pre>&lt;h2 class=&quot;main-ttl&quot;&gt;main title&lt;/h2&gt;
&lt;h3 class=&quot;sub-ttl&quot;&gt;sub title&lt;/h3&gt;
<span class="comment">&lt;!-- 컨텐츠 영역 --&gt;</span>
&lt;h4 class=&quot;section-ttl&quot;&gt;section title&lt;/h4&gt;
&lt;h4 class=&quot;l-ttl&quot;&gt;large title&lt;/h4&gt;
&lt;h4 class=&quot;m-ttl&quot;&gt;medium title&lt;/h4&gt;
          </pre></div><h3 class="pub-guide-tit-s">Headline 조합</h3>`,4)),l("div",m,[l("div",q,[t[0]||(t[0]=l("h2",{class:"main-ttl"},"타이틀명은 router에서 meta로 받아옴.(program/program-ScheduleList.vue 화면 참고)",-1)),b(e,{breadcrumbs:n.breadcrumbsList},null,8,["breadcrumbs"])])]),t[2]||(t[2]=s(`<div class="pub-guide-code"><pre>&lt;div class=&quot;page-title-wrap&quot;&gt;
&lt;h2 class=&quot;main-ttl&quot;&gt;pageTitle&lt;/h2&gt;
  &lt;UiBreadcrumbs :breadcrumbs=&quot;breadcrumbsList&quot; /&gt;
&lt;/div&gt;
          </pre></div><h3 class="pub-guide-tit-s">Label</h3><div class="pub-guide-view"><span class="lb-square">square label</span><span class="lb-round blue">round label blue</span><span class="lb-round sky">round label sky</span><span class="lb-round green">round label green</span><span class="lb-round gray">round label gray</span><span class="lb-round yellow">round label yellow</span><span class="lb-round graybg">round label graybg</span><span class="lb-round orange">round label orange</span><span class="lb-round purple">round label purple</span><span class="lb-round pink">round label pink</span><span class="lb-round black">round label black</span></div><div class="pub-guide-code"><pre>&lt;span class=&quot;lb-square&quot;&gt;square label&lt;/span&gt;

&lt;span class=&quot;lb-round blue&quot;&gt;round label blue&lt;/span&gt;
&lt;span class=&quot;lb-round sky&quot;&gt;round label sky&lt;/span&gt;
&lt;span class=&quot;lb-round green&quot;&gt;round label green&lt;/span&gt;
&lt;span class=&quot;lb-round gray&quot;&gt;round label gray&lt;/span&gt;
&lt;span class=&quot;lb-round yellow&quot;&gt;round label yellow&lt;/span&gt;
&lt;span class=&quot;lb-round graybg&quot;&gt;round label graybg&lt;/span&gt;
&lt;span class=&quot;lb-round orange&quot;&gt;round label orange&lt;/span&gt;
&lt;span class=&quot;lb-round purple&quot;&gt;round label purple&lt;/span&gt;
&lt;span class=&quot;lb-round pink&quot;&gt;round label pink&lt;/span&gt;
&lt;span class=&quot;lb-round black&quot;&gt;round label black&lt;/span&gt;
          </pre></div>`,4))])])])}const f=o(c,[["render",h]]);export{f as default};

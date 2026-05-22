import x from"./UiSelect-BOb2GJ13.js";import y from"./UiTextField-BlU8W61C.js";import k from"./UiDatePicker-D6QSAdS_.js";import f from"./UiCertField-QRTV81gv.js";import{_ as h,r as c,b as w,c as U,d as l,m as r,e as o,g as b,w as d,j as u}from"./index-SBn8eRYL.js";import"./main-BBgDnu97.js";import"./UiExcelDownload-Bi2n_oSn.js";const V={name:"StyleForm",components:{UiSelect:x,UiTextField:y,UiDatePicker:k,UiCertField:f},setup(){const q=[{value:"1",label:"전체"},{value:"2",label:"Option 1"},{value:"3",label:"Option 2"}],t="1",g=u("2025-01-01"),e=u(new Date),v=u(),m=u(""),i=u(new Date),s=u({hours:10,minutes:0}),a=u({year:2025,month:1});return{selectOptions:q,selectedOption:t,selectedDate01:g,selectedDate02:e,selectedDate03:v,selectedTime:m,selectedStartTime:i,selectedEndTime:s,selectedDateYear:a}}},O={class:"pub-guie-wrap"},T={class:"pub-guide-view"},D={class:"pub-guide-view"},F={class:"ipt-row"},P={class:"ipt-file"},S={class:"ipt-file type02"},C={class:"ipt-row type-date"},G={class:"ipt-row"},N={class:"ipt-row"},E={class:"ipt-row"},J={class:"combo-search-box"},B={class:"combo-search-box type02"},Y={class:"ipt-row"},j={class:"ipt-row-txt"},A={class:"pub-guide-view"},I={class:"search-simple-wrap"},M={class:"right-area"},Z={class:"combo-search-box"},z={class:"search-simple-inner"},H={class:"left-area"},K={class:"combo-search-box type02"},L={class:"right-area"},R={class:"pub-guide-view"},W={class:"search-simple-wrap"},Q={class:"left-area"},X={class:"combo-search-box"},$={class:"right-area"},_={class:"ipt-row-box"},tt={class:"ipt-row"},lt={class:"pub-guide-view"},et={class:"search-table-wrap"},ot={class:"tbl-form"},nt={class:"ipt-row"},it={class:"ipt-row type-date"},st={class:"pub-guide-view"},dt={class:"search-table-wrap"},at={class:"tbl-form"},ut={class:"ipt-row"},pt={class:"ipt-row type-date"},ct={class:"ipt-row"},rt={class:"pub-guide-view"},bt={class:"search-table-wrap type-gray"},qt={class:"tbl-form"},gt={class:"ipt-row"},vt={class:"ipt-row type-date"},mt={class:"ipt-row"},xt={class:"pub-guide-view"};function yt(q,t,g,e,v,m){const i=c("UiSelect"),s=c("UiTextField"),a=c("UiDatePicker"),p=c("UiCertField");return w(),U("div",O,[t[100]||(t[100]=l("header",null,"Form Style Guide",-1)),l("section",null,[l("div",null,[t[88]||(t[88]=r(`<h3 class="pub-guide-tit-s">Radio button &amp; Checkbox</h3><div class="pub-guide-view"><div class="ipt-box type-no-txt"><input type="radio" name="radio01" id="rdo01-01" class="ipt-radio"><label for="rdo01-01"><span class="txt-blind">radio</span></label><input type="radio" name="radio01" id="rdo01-02" class="ipt-radio" checked><label for="rdo01-02"><span class="txt-blind">radio checked</span></label><input type="radio" name="radio01" id="rdo01-03" class="ipt-radio" disabled><label for="rdo01-03"><span class="txt-blind">radio disabled</span></label><input type="radio" name="radio01" id="rdo01-04" class="ipt-radio" checked disabled><label for="rdo01-04"><span class="txt-blind">radio checked disabled</span></label></div><div class="ipt-box"><input type="radio" name="radio02" id="rdo02-01" class="ipt-radio"><label for="rdo02-01">radio</label><input type="radio" name="radio02" id="rdo02-02" class="ipt-radio" checked><label for="rdo02-02">radio checked</label><input type="radio" name="radio02" id="rdo02-03" class="ipt-radio" disabled><label for="rdo02-03">radio disabled</label><input type="radio" name="radio02" id="rdo02-04" class="ipt-radio" checked disabled><label for="rdo01-04">radio checked disabled</label></div></div><div class="pub-guide-code"><pre>&lt;div class=&quot;ipt-box type-no-txt&quot;&gt;
  &lt;input type=&quot;radio&quot; name=&quot;radio01&quot; id=&quot;rdo01-01&quot; class=&quot;ipt-radio&quot;&gt;
  &lt;label for=&quot;rdo01-01&quot;&gt;&lt;span class=&quot;txt-blind&quot;&gt;radio&lt;/span&gt;&lt;/label&gt;
  &lt;input type=&quot;radio&quot; name=&quot;radio01&quot; id=&quot;rdo01-02&quot; class=&quot;ipt-radio&quot; checked&gt;
  &lt;label for=&quot;rdo01-02&quot;&gt;&lt;span class=&quot;txt-blind&quot;&gt;radio checked&lt;/span&gt;&lt;/label&gt;
  &lt;input type=&quot;radio&quot; name=&quot;radio01&quot; id=&quot;rdo01-03&quot; class=&quot;ipt-radio&quot; disabled&gt;
  &lt;label for=&quot;rdo01-03&quot;&gt;&lt;span class=&quot;txt-blind&quot;&gt;radio disabled&lt;/span&gt;&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;ipt-box&quot;&gt;
  &lt;input type=&quot;radio&quot; name=&quot;radio02&quot; id=&quot;rdo02-01&quot; class=&quot;ipt-radio&quot;&gt;
  &lt;label for=&quot;rdo02-01&quot;&gt;radio&lt;/label&gt;
  &lt;input type=&quot;radio&quot; name=&quot;radio02&quot; id=&quot;rdo02-02&quot; class=&quot;ipt-radio&quot; checked&gt;
  &lt;label for=&quot;rdo02-02&quot;&gt;radio checked&lt;/label&gt;
  &lt;input type=&quot;radio&quot; name=&quot;radio02&quot; id=&quot;rdo02-03&quot; class=&quot;ipt-radio&quot; disabled&gt;
  &lt;label for=&quot;rdo02-03&quot;&gt;radio disabled&lt;/label&gt;
&lt;/div&gt;
          </pre></div><div class="pub-guide-view"><div class="ipt-box type-no-txt"><input type="checkbox" id="chk01-01" class="ipt-check"><label for="chk01-01"><span class="txt-blind">check</span></label><input type="checkbox" id="chk01-02" class="ipt-check" checked><label for="chk01-02"><span class="txt-blind">checkbox checked</span></label><input type="checkbox" id="chk01-03" class="ipt-check" disabled><label for="chk01-03"><span class="txt-blind">checkbox disabled</span></label></div><div class="ipt-box"><input type="checkbox" id="chk02-01" class="ipt-check"><label for="chk02-01">checkbox</label><input type="checkbox" id="chk02-02" class="ipt-check" checked><label for="chk02-02">checkbox checked</label><input type="checkbox" id="chk03-03" class="ipt-check" disabled><label for="chk03-03">checkbox disabled</label><input type="checkbox" id="chk04-04" class="ipt-check" checked disabled><label for="chk04-04">checkbox checked disabled</label></div><div class="ipt-box type02"><input type="checkbox" id="chk03-01" class="ipt-check"><label for="chk03-01">checkbox</label><input type="checkbox" id="chk03-02" class="ipt-check" checked><label for="chk03-02">checkbox checked</label><input type="checkbox" id="chk03-03" class="ipt-check" disabled><label for="chk03-03">checkbox disabled</label><input type="checkbox" id="chk03-04" class="ipt-check" checked disabled><label for="chk03-04">checkbox checked disabled</label></div><div class="ipt-box type03"><input type="checkbox" id="chk04-01" class="ipt-check"><label for="chk04-01">checkbox</label><input type="checkbox" id="chk04-02" class="ipt-check" checked><label for="chk04-02">checkbox checked</label><input type="checkbox" id="chk04-03" class="ipt-check" disabled><label for="chk04-03">checkbox disabled</label><input type="checkbox" id="chk04-04" class="ipt-check" checked disabled><label for="chk04-04">checkbox checked disabled</label></div></div><div class="pub-guide-code"><pre>&lt;div class=&quot;ipt-box type-no-txt&quot;&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk01-01&quot; class=&quot;ipt-check&quot;&gt;
  &lt;label for=&quot;chk01-01&quot;&gt;&lt;span class=&quot;txt-blind&quot;&gt;check&lt;/span&gt;&lt;/label&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk01-02&quot; class=&quot;ipt-check&quot; checked&gt;
  &lt;label for=&quot;chk01-02&quot;&gt;&lt;span class=&quot;txt-blind&quot;&gt;checkbox checked&lt;/span&gt;&lt;/label&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk01-03&quot; class=&quot;ipt-check&quot; disabled&gt;
  &lt;label for=&quot;chk01-03&quot;&gt;&lt;span class=&quot;txt-blind&quot;&gt;checkbox disabled&lt;/span&gt;&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;ipt-box&quot;&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk02-01&quot; class=&quot;ipt-check&quot;&gt;
  &lt;label for=&quot;chk02-01&quot;&gt;checkbox&lt;/label&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk02-02&quot; class=&quot;ipt-check&quot; checked&gt;
  &lt;label for=&quot;chk02-02&quot;&gt;checkbox checked&lt;/label&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk03-03&quot; class=&quot;ipt-check&quot; disabled&gt;
  &lt;label for=&quot;chk03-03&quot;&gt;checkbox disabled&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;ipt-box type02&quot;&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk03-01&quot; class=&quot;ipt-check&quot;&gt;
  &lt;label for=&quot;chk03-01&quot;&gt;checkbox&lt;/label&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk03-02&quot; class=&quot;ipt-check&quot; checked&gt;
  &lt;label for=&quot;chk03-02&quot;&gt;checkbox checked&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;ipt-box type03&quot;&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk04-01&quot; class=&quot;ipt-check&quot;&gt;
  &lt;label for=&quot;chk04-01&quot;&gt;checkbox&lt;/label&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;chk04-02&quot; class=&quot;ipt-check&quot; checked&gt;
  &lt;label for=&quot;chk04-02&quot;&gt;checkbox checked&lt;/label&gt;
&lt;/div&gt;
          </pre></div><h3 class="pub-guide-tit-s">Switch</h3><div class="pub-guide-view"><div class="switch-box"><div class="ipt-switch"><input type="checkbox" title="타이틀 작성"></div></div><div class="switch-box"><div class="ipt-switch"><input type="checkbox" title="타이틀 작성" disabled></div></div></div><div class="pub-guide-code"><pre>&lt;div class=&quot;switch-box&quot;&gt;
  &lt;div class=&quot;ipt-switch&quot;&gt;
    &lt;input type=&quot;checkbox&quot; title=&quot;타이틀 작성&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;switch-box&quot;&gt;
  &lt;div class=&quot;ipt-switch&quot;&gt;
    &lt;input type=&quot;checkbox&quot; title=&quot;타이틀 작성&quot; disabled&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre></div><h3 class="pub-guide-tit-s">Select</h3>`,9)),l("div",T,[o(i,{options:e.selectOptions,initialValue:e.selectedOption},null,8,["options","initialValue"]),o(i,{options:e.selectOptions,initialValue:e.selectedOption,disabled:!0},null,8,["options","initialValue"])]),t[89]||(t[89]=l("div",{class:"pub-guide-code"},[l("pre",null,`<UiSelect 
  :options="selectOptions" 
  :initialValue="selectedOption" 
/>

<UiSelect 
  :options="selectOptions" 
  :initialValue="selectedOption" 
  :disabled="true"
/>
          `)],-1)),t[90]||(t[90]=l("div",{class:"pub-guide-code js"},[l("pre",null,[b(`import UiSelect from '../components/baseCommonUI/UiSelect.vue';

export default {
  setup() {
    const selectOptions = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    const selectedOption = ''; `),l("span",{class:"comment"},"// 초기 선택값"),b(`

    return {
      selectOptions,
      selectedOption,
    };
  },
}
          `)])],-1)),t[91]||(t[91]=l("h3",{class:"pub-guide-tit-s"},"Input text",-1)),l("div",D,[o(s,null,{default:d(()=>[...t[13]||(t[13]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[37]||(t[37]=l("br",null,null,-1)),o(s,{class:"error"},{default:d(()=>[...t[14]||(t[14]=[l("input",{type:"text",value:"error",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[38]||(t[38]=l("p",{class:"err-msg"},"error message",-1)),t[39]||(t[39]=l("p",{class:"ok-msg"},"ok message",-1)),t[40]||(t[40]=l("br",null,null,-1)),o(s,{disabled:!0},{default:d(()=>[...t[15]||(t[15]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력",disabled:""},null,-1)])]),_:1}),t[41]||(t[41]=l("br",null,null,-1)),l("div",F,[o(s,null,{default:d(()=>[...t[16]||(t[16]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[17]||(t[17]=l("span",{class:"unit"},"%",-1))]),t[42]||(t[42]=l("br",null,null,-1)),l("div",P,[o(s,{disabled:!0},{default:d(()=>[...t[18]||(t[18]=[l("input",{type:"text",value:"파일없음",disabled:"",class:"file-name"},null,-1),l("input",{type:"file",id:"file01",class:"file-hidden",multiple:""},null,-1)])]),_:1}),t[19]||(t[19]=l("label",{for:"file01",class:"btn-txt secondary"},"파일선택",-1))]),t[43]||(t[43]=l("br",null,null,-1)),l("div",S,[o(s,{readonly:!0},{default:d(()=>[...t[20]||(t[20]=[l("input",{type:"text",placeholder:"선택된 파일 없음",class:"file-name",readonly:""},null,-1),l("input",{type:"file",id:"file02",class:"file-hidden"},null,-1)])]),_:1}),t[21]||(t[21]=l("label",{for:"file02",class:"btn-txt secondary"},"파일 찾기",-1)),t[22]||(t[22]=l("p",{class:"txt"},"- 10MB 이하, JPG/JPEG/PNG 파일만 업로드 가능",-1))]),t[44]||(t[44]=r('<br><div class="ipt-file"><input type="file" id="file03" class="file-hidden"><label for="file03" class="btn-txt secondary small">파일 업로드</label></div><br><div class="file-name-wrap sc"><div class="ipt-file"><input type="file" id="file02" class="file-hidden"><label for="file02" class="btn-txt secondary">파일선택</label></div><div class="item"><span class="file-name-txt">수료증.pdf</span><button type="button" class="btn-link">수료증.pdf</button><button type="button" class="btn-file-del"><span class="txt-blind">삭제</span></button></div></div><br><div class="ipt-file"><input type="file" id="file01" class="file-hidden"><label for="file01" class="btn-txt secondary small">사진 업로드</label></div><div class="attached-wrap"><ul class="attached-list"><li><div class="img-box"><img src="https://i.namu.wiki/i/Jao_kg29rcgVHu4e2zOF6AVeZno4t4VuWNLxZghY2ub6makJpYTTvdoPca09e-FkiFG29mA10xKNS12kGDT2TA.webp" alt=""></div><button type="button" class="btn-attached-del"><span class="txt-blind">삭제</span></button></li><li><div class="img-box"><img src="https://entertainimg.kbsmedia.co.kr/cms/uploads/CONTENTS_20230617081504_2705a25caeb27bbe602bb31bc64d0b99.png" alt=""></div><button type="button" class="btn-attached-del"><span class="txt-blind">삭제</span></button></li><li><div class="img-box"><img src="https://pds.saramin.co.kr/company/logo/202303/16/rrlb25_wixl-1p57ngn_logo.png" alt=""></div><button type="button" class="btn-attached-del"><span class="txt-blind">삭제</span></button></li></ul></div><br>',8)),o(a,{modelValue:e.selectedTime,"onUpdate:modelValue":t[0]||(t[0]=n=>e.selectedTime=n),type:"time"},null,8,["modelValue"]),t[45]||(t[45]=l("br",null,null,-1)),o(a,{modelValue:e.selectedDate01,"onUpdate:modelValue":t[1]||(t[1]=n=>e.selectedDate01=n)},null,8,["modelValue"]),t[46]||(t[46]=l("br",null,null,-1)),l("div",C,[o(a,{modelValue:e.selectedDate02,"onUpdate:modelValue":t[2]||(t[2]=n=>e.selectedDate02=n)},null,8,["modelValue"]),t[23]||(t[23]=l("span",{class:"dash"},"~",-1)),o(a,{modelValue:e.selectedDate03,"onUpdate:modelValue":t[3]||(t[3]=n=>e.selectedDate03=n)},null,8,["modelValue"])]),t[47]||(t[47]=l("br",null,null,-1)),l("div",G,[o(s,null,{default:d(()=>[...t[24]||(t[24]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[25]||(t[25]=l("button",{type:"button",class:"btn-txt black"},"text",-1))]),t[48]||(t[48]=l("br",null,null,-1)),l("div",N,[o(i,{options:e.selectOptions},null,8,["options"]),o(s,null,{default:d(()=>[...t[26]||(t[26]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1})]),t[49]||(t[49]=l("br",null,null,-1)),l("div",E,[o(i,{options:e.selectOptions,class:"flex"},null,8,["options"]),t[27]||(t[27]=l("button",{type:"button",class:"btn-txt black"},"text",-1))]),t[50]||(t[50]=l("br",null,null,-1)),l("div",J,[o(i,{options:e.selectOptions},null,8,["options"]),o(s,null,{default:d(()=>[...t[28]||(t[28]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[29]||(t[29]=l("button",{type:"button",class:"btn-txt primary"},"조회",-1))]),t[51]||(t[51]=l("br",null,null,-1)),l("div",B,[o(i,{options:e.selectOptions},null,8,["options"]),o(s,null,{default:d(()=>[...t[30]||(t[30]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[31]||(t[31]=l("button",{type:"button",class:"btn-txt black"},"조회",-1))]),t[52]||(t[52]=l("br",null,null,-1)),l("div",Y,[t[33]||(t[33]=l("span",{class:"ipt-ttl"},"타이틀",-1)),o(s,null,{default:d(()=>[...t[32]||(t[32]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1})]),t[53]||(t[53]=l("br",null,null,-1)),l("div",j,[t[34]||(t[34]=l("span",{class:"ipt-ttl"},"시작",-1)),o(a,{modelValue:e.selectedStartTime,"onUpdate:modelValue":t[4]||(t[4]=n=>e.selectedStartTime=n),type:"time"},null,8,["modelValue"]),t[35]||(t[35]=l("span",{class:"dash"},"~",-1)),t[36]||(t[36]=l("span",{class:"ipt-ttl"},"종료",-1)),o(a,{modelValue:e.selectedEndTime,"onUpdate:modelValue":t[5]||(t[5]=n=>e.selectedEndTime=n),type:"time"},null,8,["modelValue"])]),t[54]||(t[54]=l("br",null,null,-1)),o(a,{modelValue:e.selectedDateYear,"onUpdate:modelValue":t[6]||(t[6]=n=>e.selectedDateYear=n),type:"month"},null,8,["modelValue"])]),t[92]||(t[92]=r(`<div class="pub-guide-code"><pre><span class="comment">&lt;!-- 입력 필드 : 기본 --&gt;</span>
&lt;UiTextField &gt;
  &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
&lt;/UiTextField&gt;
<span class="comment">&lt;!-- 입력 필드 : error --&gt;</span>
&lt;UiTextField class=&quot;error&quot;&gt;
  &lt;input type=&quot;text&quot; value=&quot;error&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
&lt;/UiTextField&gt;
<span class="comment">&lt;!-- 입력 필드 : disabled --&gt;</span>
&lt;UiTextField :disabled=&quot;true&quot;&gt;
  &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot; disabled&gt;
&lt;/UiTextField&gt;
<span class="comment">&lt;!--  입력 필드 : 기본 + 단위 --&gt;</span>
&lt;div class=&quot;ipt-row&quot;&gt;
  &lt;UiTextField &gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
  &lt;/UiTextField&gt;
  &lt;span class=&quot;unit&quot;&gt;%&lt;/span&gt;
&lt;/div&gt;
<span class="comment">&lt;!--  입력 필드 : file --&gt;</span>
&lt;div class=&quot;ipt-file&quot;&gt;
  &lt;UiTextField :disabled=&quot;true&quot;&gt;
    &lt;input type=&quot;text&quot; value=&quot;파일없음&quot; disabled class=&quot;file-name&quot;&gt;
    &lt;input type=&quot;file&quot; id=&quot;file01&quot; class=&quot;file-hidden&quot;&gt;
  &lt;/UiTextField&gt;
  &lt;label for=&quot;file01&quot; class=&quot;btn-txt secondary&quot;&gt;파일선택&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;ipt-file type02&quot;&gt;
  &lt;UiTextField&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;선택된 파일 없음&quot; class=&quot;file-name&quot; readonly&gt;
    &lt;input type=&quot;file&quot; id=&quot;file01&quot; class=&quot;file-hidden&quot;&gt;
  &lt;/UiTextField&gt;
  &lt;label for=&quot;file01&quot; class=&quot;btn-txt secondary&quot;&gt;파일 찾기&lt;/label&gt;
  &lt;p class=&quot;txt&quot;&gt;- 10MB 이하, JPG/JPEG/PNG 파일만 업로드 가능&lt;/p&gt;
&lt;/div&gt;

&lt;div class=&quot;ipt-file&quot;&gt;
  &lt;input type=&quot;file&quot; id=&quot;file03&quot; class=&quot;file-hidden&quot;&gt;
  &lt;label for=&quot;file03&quot; class=&quot;btn-txt secondary small&quot;&gt;파일 업로드&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;file-name-wrap sc&quot;&gt;
  &lt;div class=&quot;ipt-file&quot;&gt;
    &lt;input type=&quot;file&quot; id=&quot;file02&quot; class=&quot;file-hidden&quot;&gt;
    &lt;label for=&quot;file02&quot; class=&quot;btn-txt secondary&quot;&gt;파일선택&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;
    &lt;span class=&quot;file-name-txt&quot;&gt;수료증.pdf&lt;/span&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn-link&quot;&gt;수료증.pdf&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn-file-del&quot;&gt;
      &lt;span class=&quot;txt-blind&quot;&gt;삭제&lt;/span&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

<span class="comment">&lt;!-- 입력 필드 : timepicker --&gt;</span>
&lt;UiDatePicker v-model=&quot;selectedTime&quot; type=&quot;time&quot; /&gt;
<span class="comment">&lt;!--  입력 필드 : datepicker --&gt;</span>
&lt;UiDatePicker v-model=&quot;selectedDate01&quot; /&gt;
<span class="comment">&lt;!--  입력 필드 : datepicker group --&gt;</span>
&lt;div class=&quot;ipt-row type-date&quot;&gt;
  &lt;UiDatePicker v-model=&quot;selectedDate02&quot; /&gt;
  &lt;span class=&quot;dash&quot;&gt;~&lt;/span&gt;
  &lt;UiDatePicker v-model=&quot;selectedDate03&quot; /&gt;
&lt;/div&gt;
<span class="comment">&lt;!--  입력 필드 : text + button --&gt;</span>
&lt;div class=&quot;ipt-row&quot;&gt;
  &lt;UiTextField&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
  &lt;/UiTextField&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt black&quot;&gt;text&lt;/button&gt;
&lt;/div&gt;
<span class="comment">&lt;!--  입력 필드 : select + input --&gt;</span>
&lt;div class=&quot;ipt-row&quot;&gt;
  &lt;UiSelect 
    :options=&quot;selectOptions&quot; 
  /&gt;
  &lt;UiTextField&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
  &lt;/UiTextField&gt;
&lt;/div&gt;
<span class="comment">&lt;!--  입력 필드 : select + buttond --&gt;</span>
&lt;div class=&quot;ipt-row&quot;&gt;
  &lt;!-- 비밀번호 입력 필드 + 비밀번호 보기 토글 --&gt;
  &lt;UiSelect 
    :options=&quot;selectOptions&quot; 
    class=&quot;flex&quot;
  /&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt black&quot;&gt;text&lt;/button&gt;
&lt;/div&gt;
<span class="comment">&lt;!--  입력 필드 : select + input + button --&gt;</span>
&lt;div class=&quot;combo-search-box&quot;&gt;
  &lt;UiSelect 
    :options=&quot;selectOptions&quot; 
  /&gt;
  &lt;UiTextField&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
  &lt;/UiTextField&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt primary&quot;&gt;조회&lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;combo-search-box type02&quot;&gt;
  &lt;UiSelect 
    :options=&quot;selectOptions&quot; 
  /&gt;
  &lt;UiTextField&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
  &lt;/UiTextField&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt black&quot;&gt;조회&lt;/button&gt;
&lt;/div&gt;
<span class="comment">&lt;!--  입력 필드 : title + input --&gt;</span>
&lt;div class=&quot;ipt-row&quot;&gt;
  &lt;span class=&quot;ipt-ttl&quot;&gt;타이틀&lt;/span&gt;
  &lt;UiTextField&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;입력&quot; title=&quot;타이틀 입력&quot;&gt;
  &lt;/UiTextField&gt;
&lt;/div&gt;

&lt;div class=&quot;ipt-row-txt&quot;&gt;
  &lt;span class=&quot;ipt-ttl&quot;&gt;시작&lt;/span&gt;
  &lt;UiDatePicker v-model=&quot;selectedTime&quot; type=&quot;time&quot; /&gt;
  &lt;span class=&quot;dash&quot;&gt;~&lt;/span&gt;
  &lt;span class=&quot;ipt-ttl&quot;&gt;종료&lt;/span&gt;
  &lt;UiDatePicker v-model=&quot;selectedTime&quot; type=&quot;time&quot; /&gt;
&lt;/div&gt;
          </pre></div><div class="pub-guide-code js"><pre>import { ref } from &#39;vue&#39;;
import UiDatePicker from &#39;@/components/baseCommonUI/UiDatePicker.vue&#39;;

export default {
  setup() {
    const selectedDate01 = ref(&#39;2025-01-01&#39;); <span class="comment">// 작성된 날짜 제공</span> 
    const selectedDate02 = ref(new Date());  <span class="comment">// 오늘 날짜 제공</span> 
    const selectedDate03 = ref();  <span class="comment">// placeholder 제공</span> 

    return {
      selectedDate01,
      selectedDate02,
      selectedDate03,
    };
  },
}
          </pre></div><h3 class="pub-guide-tit-s">Search area</h3>`,3)),l("div",A,[l("div",I,[t[57]||(t[57]=l("div",{class:"left-area"},[l("p",{class:"bul-txt"},"스케줄을 보실 회원명 혹은 회원번호를 입력 해주세요.")],-1)),l("div",M,[l("div",Z,[o(i,{options:e.selectOptions,initialValue:e.selectedOption},null,8,["options","initialValue"]),o(s,null,{default:d(()=>[...t[55]||(t[55]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[56]||(t[56]=l("button",{type:"button",class:"btn-txt primary"},"조회",-1))])])]),t[60]||(t[60]=l("br",null,null,-1)),l("div",z,[l("div",H,[l("div",K,[o(i,{options:e.selectOptions,initialValue:e.selectedOption},null,8,["options","initialValue"]),o(s,null,{default:d(()=>[...t[58]||(t[58]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[59]||(t[59]=l("button",{type:"button",class:"btn-txt black"},"조회",-1))])]),l("div",L,[o(p)])])]),t[93]||(t[93]=l("div",{class:"pub-guide-code"},[l("pre",null,`<div class="search-simple-wrap">
  <div class="left-area">
    <p class="bul-txt">스케줄을 보실 회원명 혹은 회원번호를 입력 해주세요.</p>
  </div>
  <div class="right-area">
    <div class="combo-search-box">
      <UiSelect 
        :options="selectOptions" 
        :initialValue="selectedOption" 
      />
      <UiTextField>
        <input type="text" placeholder="입력" title="타이틀 입력">
      </UiTextField>
      <button type="button" class="btn-txt primary">조회</button>
    </div>
  </div>
</div>

<div class="search-simple-inner">
  <div class="left-area">
    <div class="combo-search-box type02">
      <UiSelect 
        :options="selectOptions" 
        :initialValue="selectedOption" 
      />
      <UiTextField>
        <input type="text" placeholder="입력" title="타이틀 입력">
      </UiTextField>
      <button type="button" class="btn-txt black">조회</button>
    </div>
  </div>
  <div class="right-area">
    <div class="ipt-row-box">
      <UiCertField />
    </div>
  </div>
</div>
          `)],-1)),l("div",R,[l("div",W,[l("div",Q,[l("div",X,[o(i,{options:e.selectOptions,initialValue:e.selectedOption},null,8,["options","initialValue"]),o(s,null,{default:d(()=>[...t[61]||(t[61]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1}),t[62]||(t[62]=l("button",{type:"button",class:"btn-txt primary"},"조회",-1))])]),l("div",$,[l("div",_,[o(p),l("div",tt,[t[63]||(t[63]=l("span",{class:"ipt-ttl"},"접수자",-1)),o(i,{options:e.selectOptions,initialValue:e.selectedOption},null,8,["options","initialValue"])])])])])]),t[94]||(t[94]=l("div",{class:"pub-guide-code"},[l("pre",null,`<div class="search-simple-wrap">
  <div class="left-area">
    <div class="combo-search-box">
      <UiSelect 
        :options="selectOptions" 
        :initialValue="selectedOption" 
      />
      <UiTextField>
        <input type="text" placeholder="입력" title="타이틀 입력">
      </UiTextField>
      <button type="button" class="btn-txt primary">조회</button>
    </div>
  </div>
  <div class="right-area">
    <div class="ipt-row-box">
      <UiCertField />
      <div class="ipt-row">
        <span class="ipt-ttl">접수자</span>
        <UiSelect 
          :options="selectOptions" 
          :initialValue="selectedOption" 
        />
      </div>
    </div>
  </div>
</div>
          `)],-1)),l("div",lt,[l("div",et,[l("table",ot,[t[67]||(t[67]=l("colgroup",null,[l("col",{style:{width:"11.6rem"}}),l("col"),l("col")],-1)),l("tbody",null,[l("tr",null,[t[65]||(t[65]=l("th",null,"기간선택",-1)),l("td",null,[l("div",nt,[o(i,{options:e.selectOptions},null,8,["options"]),l("div",it,[o(a,{modelValue:e.selectedDate03,"onUpdate:modelValue":t[7]||(t[7]=n=>e.selectedDate03=n)},null,8,["modelValue"]),t[64]||(t[64]=l("span",{class:"dash"},"~",-1)),o(a,{modelValue:e.selectedDate03,"onUpdate:modelValue":t[8]||(t[8]=n=>e.selectedDate03=n)},null,8,["modelValue"])])])]),t[66]||(t[66]=l("td",null,[l("div",{class:"btn-fc-box"},[l("div",{class:"btn-wrap"},[l("button",{type:"button",class:"btn-txt secondary"},"초기화"),l("button",{type:"button",class:"btn-txt primary"},"조회")])])],-1))])])])])]),t[95]||(t[95]=l("div",{class:"pub-guide-code"},[l("pre",null,`<div class="search-table-wrap">
  <table class="tbl-form">
    <colgroup>
      <col style="width: 11.6rem;"><col>
      <col>
    </colgroup>
    <tbody>
      <tr>
        <th>기간선택</th>
        <td>
          <div class="ipt-row">
            <UiSelect :options="selectOptions" />
            <div class="ipt-row type-date">
              <UiDatePicker v-model="selectedDate03" />
              <span class="dash">~</span>
              <UiDatePicker v-model="selectedDate03" />
            </div>
          </div>
        </td>
        <td>
          <div class="btn-fc-box">
            <div class="btn-wrap">
              <button type="button" class="btn-txt secondary">초기화</button>
              <button type="button" class="btn-txt primary">조회</button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
          `)],-1)),l("div",st,[l("div",dt,[l("table",at,[t[77]||(t[77]=l("colgroup",null,[l("col",{style:{width:"11.6rem"}}),l("col"),l("col",{style:{width:"11.6rem"}}),l("col"),l("col",{style:{width:"11.6rem"}}),l("col")],-1)),l("tbody",null,[l("tr",null,[t[69]||(t[69]=l("th",null,[b("기간선택 "),l("em",{class:"required"},"*")],-1)),l("td",null,[l("div",ut,[o(i,{options:e.selectOptions},null,8,["options"]),l("div",pt,[o(a,{modelValue:e.selectedDate03,"onUpdate:modelValue":t[9]||(t[9]=n=>e.selectedDate03=n)},null,8,["modelValue"]),t[68]||(t[68]=l("span",{class:"dash"},"~",-1)),o(a,{modelValue:e.selectedDate03,"onUpdate:modelValue":t[10]||(t[10]=n=>e.selectedDate03=n)},null,8,["modelValue"])])])]),t[70]||(t[70]=l("th",null,"진행상태",-1)),l("td",null,[o(i,{options:e.selectOptions},null,8,["options"])]),t[71]||(t[71]=l("th",null,"담당T 선택",-1)),l("td",null,[o(i,{options:e.selectOptions},null,8,["options"])])]),l("tr",null,[t[73]||(t[73]=l("th",null,"회원검색",-1)),l("td",null,[l("div",ct,[o(i,{options:e.selectOptions},null,8,["options"]),o(s,null,{default:d(()=>[...t[72]||(t[72]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1})])]),t[74]||(t[74]=l("th",null,"PT신청 상태",-1)),t[75]||(t[75]=l("td",null,[l("div",{class:"ipt-box"},[l("input",{type:"radio",name:"rdoPt",id:"rdoPt01",class:"ipt-radio",checked:""}),l("label",{for:"rdoPt01"},"전체"),l("input",{type:"radio",name:"rdoPt",id:"rdoPt02",class:"ipt-radio"}),l("label",{for:"rdoPt02"},"신청"),l("input",{type:"radio",name:"rdoPt",id:"rdoPt03",class:"ipt-radio"}),l("label",{for:"rdoPt03"},"미신청")])],-1)),t[76]||(t[76]=l("td",{colspan:"2"},[l("div",{class:"btn-fc-box"},[l("div",{class:"btn-wrap"},[l("button",{type:"button",class:"btn-txt secondary"},"초기화"),l("button",{type:"button",class:"btn-txt primary"},"조회")])])],-1))])])])])]),t[96]||(t[96]=l("div",{class:"pub-guide-code"},[l("pre",null,`<div class="search-table-wrap">
  <table class="tbl-form">
    <colgroup>
      <col style="width: 11.6rem;"><col>
      <col style="width: 11.6rem;"><col>
      <col style="width: 11.6rem;"><col>
    </colgroup>
    <tbody>
      <tr>
        <th>기간선택<em class="required">*</em></th>
        <td>
          <div class="ipt-row">
            <UiSelect :options="selectOptions" />
            <div class="ipt-row type-date">
              <UiDatePicker v-model="selectedDate03" />
              <span class="dash">~</span>
              <UiDatePicker v-model="selectedDate03" />
            </div>
          </div>
        </td>
        <th>진행상태</th>
        <td>
          <UiSelect :options="selectOptions" />
        </td>
        <th>담당T 선택</th>
        <td><UiSelect :options="selectOptions" /></td>
      </tr>
      <tr>
        <th>회원검색</th>
        <td>
          <div class="ipt-row">
            <UiSelect :options="selectOptions" />
            <UiTextField>
              <input type="text" placeholder="입력" title="타이틀 입력">
            </UiTextField>
          </div>
        </td>
        <th>PT신청 상태</th>
        <td>
          <div class="ipt-box">
            <input type="radio" name="radioPt" id="rdo-pt-01" class="ipt-radio" checked>
            <label for="rdo-pt-01">전체</label>
            <input type="radio" name="radioPt" id="rdo-pt-02" class="ipt-radio">
            <label for="rdo-pt-02">신청</label>
            <input type="radio" name="radioPt" id="rdo-pt-03" class="ipt-radio">
            <label for="rdo-pt-03">미신청</label>
          </div>
        </td>
        <td colspan="2">
          <div class="btn-fc-box">
            <div class="btn-wrap">
              <button type="button" class="btn-txt secondary">초기화</button>
              <button type="button" class="btn-txt primary">조회</button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
          `)],-1)),l("div",rt,[l("div",bt,[l("table",qt,[t[87]||(t[87]=l("colgroup",null,[l("col",{style:{width:"11.6rem"}}),l("col"),l("col",{style:{width:"11.6rem"}}),l("col"),l("col",{style:{width:"11.6rem"}}),l("col")],-1)),l("tbody",null,[l("tr",null,[t[79]||(t[79]=l("th",null,[b("기간선택 "),l("em",{class:"required"},"*")],-1)),l("td",null,[l("div",gt,[o(i,{options:e.selectOptions},null,8,["options"]),l("div",vt,[o(a,{modelValue:e.selectedDate03,"onUpdate:modelValue":t[11]||(t[11]=n=>e.selectedDate03=n)},null,8,["modelValue"]),t[78]||(t[78]=l("span",{class:"dash"},"~",-1)),o(a,{modelValue:e.selectedDate03,"onUpdate:modelValue":t[12]||(t[12]=n=>e.selectedDate03=n)},null,8,["modelValue"])])])]),t[80]||(t[80]=l("th",null,"진행상태",-1)),l("td",null,[o(i,{options:e.selectOptions},null,8,["options"])]),t[81]||(t[81]=l("th",null,"담당T 선택",-1)),l("td",null,[o(i,{options:e.selectOptions},null,8,["options"])])]),l("tr",null,[t[83]||(t[83]=l("th",null,"회원검색",-1)),l("td",null,[l("div",mt,[o(i,{options:e.selectOptions},null,8,["options"]),o(s,null,{default:d(()=>[...t[82]||(t[82]=[l("input",{type:"text",placeholder:"입력",title:"타이틀 입력"},null,-1)])]),_:1})])]),t[84]||(t[84]=l("th",null,"PT신청 상태",-1)),t[85]||(t[85]=l("td",null,[l("div",{class:"ipt-box"},[l("input",{type:"radio",name:"radioPt",id:"rdo-pt-01",class:"ipt-radio",checked:""}),l("label",{for:"rdo-pt-01"},"전체"),l("input",{type:"radio",name:"radioPt",id:"rdo-pt-02",class:"ipt-radio"}),l("label",{for:"rdo-pt-02"},"신청"),l("input",{type:"radio",name:"radioPt",id:"rdo-pt-03",class:"ipt-radio"}),l("label",{for:"rdo-pt-03"},"미신청")])],-1)),t[86]||(t[86]=l("td",{colspan:"2"},[l("div",{class:"btn-fc-box"},[l("div",{class:"btn-wrap"},[l("button",{type:"button",class:"btn-txt secondary"},"초기화"),l("button",{type:"button",class:"btn-txt primary"},"조회")])])],-1))])])])])]),t[97]||(t[97]=l("div",{class:"pub-guide-code"},[l("pre",null,`<div class="search-table-wrap type-gray">
  <table class="tbl-form">
    <colgroup>
      <col style="width: 11.6rem;"><col>
      <col style="width: 11.6rem;"><col>
      <col style="width: 11.6rem;"><col>
    </colgroup>
    <tbody>
      <tr>
        <th>기간선택<em class="required">*</em></th>
        <td>
          <div class="ipt-row">
            <UiSelect :options="selectOptions" />
            <div class="ipt-row type-date">
              <UiDatePicker v-model="selectedDate03" />
              <span class="dash">~</span>
              <UiDatePicker v-model="selectedDate03" />
            </div>
          </div>
        </td>
        <th>진행상태</th>
        <td>
          <UiSelect :options="selectOptions" />
        </td>
        <th>담당T 선택</th>
        <td><UiSelect :options="selectOptions" /></td>
      </tr>
      <tr>
        <th>회원검색</th>
        <td>
          <div class="ipt-row">
            <UiSelect :options="selectOptions" />
            <UiTextField>
              <input type="text" placeholder="입력" title="타이틀 입력">
            </UiTextField>
          </div>
        </td>
        <th>PT신청 상태</th>
        <td>
          <div class="ipt-box">
            <input type="radio" name="radioPt" id="rdo-pt-01" class="ipt-radio" checked>
            <label for="rdo-pt-01">전체</label>
            <input type="radio" name="radioPt" id="rdo-pt-02" class="ipt-radio">
            <label for="rdo-pt-02">신청</label>
            <input type="radio" name="radioPt" id="rdo-pt-03" class="ipt-radio">
            <label for="rdo-pt-03">미신청</label>
          </div>
        </td>
        <td colspan="2">
          <div class="btn-fc-box">
            <div class="btn-wrap">
              <button type="button" class="btn-txt secondary">초기화</button>
              <button type="button" class="btn-txt primary">조회</button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
          `)],-1)),t[98]||(t[98]=l("h3",{class:"pub-guide-tit-s"},"인증코드",-1)),l("div",xt,[o(p),o(p,{certTg:"유라클_지부장"})]),t[99]||(t[99]=r(`<div class="pub-guide-code"><pre>&lt;UiCertField /&gt;
          </pre></div><h3 class="pub-guide-tit-s">item delete</h3><div class="pub-guide-view"><ul class="regist-item-list"><li><span class="item-txt"><span class="fw-sb">국민은행</span> 123456-01-987654</span><button type="button" class="btn-del"><span class="txt-blind">삭제</span></button></li><li><span class="item-txt"><span class="fw-sb">국민은행</span> 123456-01-987654</span><span class="item-txt">국민은행 123456-01-987654</span><button type="button" class="btn-del"><span class="txt-blind">삭제</span></button></li></ul></div><div class="pub-guide-code"><pre>
          </pre></div>`,4))])])])}const Tt=h(V,[["render",yt]]);export{Tt as default};

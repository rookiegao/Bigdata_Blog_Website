"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[4638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,O=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(O,i(i({ref:t},p),{},{components:r})):n.createElement(O,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Oracle_FAQ",l={unversionedId:"\u5927\u6570\u636e\u6846\u67b6_FAQ/Oracle_FAQ",id:"version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/Oracle_FAQ",title:"Oracle_FAQ",description:"Q1: Oracle \u5982\u4f55\u5b9e\u73b0\u5bf9\u540c\u4e00\u4e2a\u8868\u7684 upsert \u529f\u80fd\uff1f",source:"@site/versioned_docs/version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/Oracle_FAQ.md",sourceDirName:"\u5927\u6570\u636e\u6846\u67b6_FAQ",slug:"/\u5927\u6570\u636e\u6846\u67b6_FAQ/Oracle_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/Oracle_FAQ",draft:!1,tags:[],version:"1.1",lastUpdatedBy:"skylines",lastUpdatedAt:1670685133,formattedLastUpdatedAt:"Dec 10, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MySql_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_FAQ"},next:{title:"MySQL_CDC_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_CDC_FAQ"}},c={},s=[{value:"Q1: Oracle \u5982\u4f55\u5b9e\u73b0\u5bf9\u540c\u4e00\u4e2a\u8868\u7684 upsert \u529f\u80fd\uff1f",id:"q1-oracle-\u5982\u4f55\u5b9e\u73b0\u5bf9\u540c\u4e00\u4e2a\u8868\u7684-upsert-\u529f\u80fd",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oracle_faq"},"Oracle_FAQ"),(0,a.kt)("h2",{id:"q1-oracle-\u5982\u4f55\u5b9e\u73b0\u5bf9\u540c\u4e00\u4e2a\u8868\u7684-upsert-\u529f\u80fd"},"Q1: Oracle \u5982\u4f55\u5b9e\u73b0\u5bf9\u540c\u4e00\u4e2a\u8868\u7684 upsert \u529f\u80fd\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MERGE INTO test T1\nUSING (select count(*) AS c from test T2 where T2.ID = 'xxxxx211108593445YY2022') x\nON ( x.c > 0 )\nWHEN MATCHED THEN\n    UPDATE SET USERID = 'asfafsasagsa' where ID = 'xxxxx211108593445YY2021'\nWHEN NOT MATCHED THEN\n    INSERT VALUES('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Flink sink \u4ee3\u7801\u98ce\u683c\n            String mergeSql =\n                   " MERGE INTO "\n                           + sinkTable\n                           + " T1 USING (SELECT COUNT (*) AS c FROM"\n                           + sinkTable\n                           + " T2 WHERE "\n                           + StringUtils.join(pkSet, ",")\n                           + " = "\n                           + StringUtils.join(pkValues, ",")\n                           + ") x ON ( x.c > 0 ) WHEN MATCHED THEN UPDATE SET "\n                           + " WHEN MATCHED THEN "\n                           + getSetSql(value)\n                           + " WHERE "\n                           + StringUtils.join(pkSet, ",")\n                           + " = "\n                           + StringUtils.join(pkValues, ",")\n                           + "WHEN NOT MATCHED THEN INSERT VALUES (\'"\n                           + StringUtils.join(values, "\',\'")\n                           + "\')";\n')))}u.isMDXComponent=!0}}]);
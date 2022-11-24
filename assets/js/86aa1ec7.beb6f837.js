"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[1645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(r),s=a,v=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},l=void 0,p={unversionedId:"\u9762\u8bd5/Hive optimization",id:"version-1.0/\u9762\u8bd5/Hive optimization",title:"Hive optimization",description:"MapJoin",source:"@site/versioned_docs/version-1.0/\u9762\u8bd5/Hive optimization.md",sourceDirName:"\u9762\u8bd5",slug:"/\u9762\u8bd5/Hive optimization",permalink:"/Bigdata_Blog_Website/docs/\u9762\u8bd5/Hive optimization",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"skylines",lastUpdatedAt:1669277510,formattedLastUpdatedAt:"2022\u5e7411\u670824\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hive interview",permalink:"/Bigdata_Blog_Website/docs/\u9762\u8bd5/Hive interview"},next:{title:"Kafka interview",permalink:"/Bigdata_Blog_Website/docs/\u9762\u8bd5/Kafka interview"}},o={},u=[{value:"MapJoin",id:"mapjoin",level:2},{value:"\u884c\u5217\u8fc7\u6ee4",id:"\u884c\u5217\u8fc7\u6ee4",level:2},{value:"\u5217\u5f0f\u5b58\u50a8",id:"\u5217\u5f0f\u5b58\u50a8",level:2},{value:"\u91c7\u7528\u5206\u533a\u6280\u672f",id:"\u91c7\u7528\u5206\u533a\u6280\u672f",level:2},{value:"\u5408\u7406\u8bbe\u7f6eMap\u6570",id:"\u5408\u7406\u8bbe\u7f6emap\u6570",level:2},{value:"\u5408\u7406\u8bbe\u7f6eReduce\u6570",id:"\u5408\u7406\u8bbe\u7f6ereduce\u6570",level:2},{value:"\u5c0f\u6587\u4ef6\u5982\u4f55\u4ea7\u751f\u7684\uff1f",id:"\u5c0f\u6587\u4ef6\u5982\u4f55\u4ea7\u751f\u7684",level:2},{value:"\u5c0f\u6587\u4ef6\u89e3\u51b3\u65b9\u6848",id:"\u5c0f\u6587\u4ef6\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5f00\u542fmap\u7aefcombiner\uff08\u4e0d\u5f71\u54cd\u6700\u7ec8\u4e1a\u52a1\u903b\u8f91\uff09",id:"\u5f00\u542fmap\u7aefcombiner\u4e0d\u5f71\u54cd\u6700\u7ec8\u4e1a\u52a1\u903b\u8f91",level:2},{value:"\u538b\u7f29\uff08\u9009\u62e9\u5feb\u7684\uff09",id:"\u538b\u7f29\u9009\u62e9\u5feb\u7684",level:2},{value:"\u91c7\u7528tez\u5f15\u64ce\u6216\u8005spark\u5f15\u64ce",id:"\u91c7\u7528tez\u5f15\u64ce\u6216\u8005spark\u5f15\u64ce",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mapjoin"},"MapJoin"),(0,a.kt)("p",null,"\u5f53\u5904\u7406\u7684\u6570\u636e\u91cf\u6bd4\u8f83\u5c0f\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u91c7\u53d6 map join \uff0c\u6b64\u65f6 hive \u4f1a\u5c06\u5c0f\u8868\u5168\u90e8\u52a0\u8f7d\u81f3\u5185\u5b58\u4e2d\u5728 map \u7aef\u8fdb\u884c join \u4ece\u800c\u907f\u514d\u5728 reducer \u5904\u7406\u6570\u636e\uff0c\u5982\u4e0d\u7b26\u5408 map join \u6761\u4ef6\uff0chive \u89e3\u6790\u5668\u4f1a\u5c06 join\n\u64cd\u4f5c\u8f6c\u6362\u4e3a common join \u5373\u5728 reduce \u7aef\u8fdb\u884c join \u8fd9\u6837\u4f1a\u589e\u52a0\u6570\u636e\u503e\u659c\u7684\u6982\u7387\u3002"),(0,a.kt)("h2",{id:"\u884c\u5217\u8fc7\u6ee4"},"\u884c\u5217\u8fc7\u6ee4"),(0,a.kt)("p",null,"\u7531\u4e8e\u751f\u4ea7\u4e2d hive \u5206\u533a\u8868\u7684\u6570\u636e\u901a\u5e38\u4f1a\u6709\u4ebf\u7ea7\u7684\u6570\u636e\u91cf\uff0c\u6b64\u65f6\u5408\u9002\u7684\u884c\u5217\u8fc7\u6ee4\u64cd\u4f5c\u5bf9\u4e8e\u6570\u636e\u5904\u7406\u6765\u8bb2\u662f\u975e\u5e38\u5fc5\u8981\u7684\n\u5bf9\u4e8e\u5217\u6765\u8bb2\uff0c\u53ea\u62ff\u9700\u8981\u7684\u5217\uff0c\u4f7f\u7528\u5206\u533a\u8fc7\u6ee4\uff0c\u907f\u514d\u4f7f\u7528 select *\n\u5bf9\u4e8e\u884c\u6765\u8bb2\uff0c\u5728\u5206\u533a\u88c1\u526a\u4e2d\uff0c\u5728\u8fdb\u884c\u5916\u5173\u8054\u65f6\uff0c\u5982\u679c\u5c06\u526f\u8868\u7684\u8fc7\u6ee4\u6761\u4ef6\u5199\u5728 where \u540e\u9762\uff0c\u90a3\u4e48\u5c31\u4f1a\u5148\u5168\u8868\u5173\u8054\uff0c\u518d\u8fdb\u884c\u8fc7\u6ee4\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u5217\u5f0f\u5b58\u50a8"},"\u5217\u5f0f\u5b58\u50a8"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5927\u6570\u636e\u5b58\u50a8\u6765\u5c06\uff0c\u5408\u9002\u7684\u5217\u5b58\u50a8\u683c\u5f0f\u662f\u5341\u5206\u5fc5\u8981\u7684"),(0,a.kt)("h2",{id:"\u91c7\u7528\u5206\u533a\u6280\u672f"},"\u91c7\u7528\u5206\u533a\u6280\u672f"),(0,a.kt)("h2",{id:"\u5408\u7406\u8bbe\u7f6emap\u6570"},"\u5408\u7406\u8bbe\u7f6eMap\u6570"),(0,a.kt)("p",null,"mapred.min.split.size: \u6307\u7684\u662f\u6570\u636e\u7684\u6700\u5c0f\u5206\u5272\u5355\u5143\u5927\u5c0f\uff1bmin\u7684\u9ed8\u8ba4\u503c\u662f1B"),(0,a.kt)("p",null,"mapred.max.split.size: \u6307\u7684\u662f\u6570\u636e\u7684\u6700\u5927\u5206\u5272\u5355\u5143\u5927\u5c0f\uff1bmax\u7684\u9ed8\u8ba4\u503c\u662f256MB"),(0,a.kt)("p",null,"\u901a\u8fc7\u8c03\u6574max\u53ef\u4ee5\u8d77\u5230\u8c03\u6574map\u6570\u7684\u4f5c\u7528\uff0c\u51cf\u5c0fmax\u53ef\u4ee5\u589e\u52a0map\u6570\uff0c\u589e\u5927max\u53ef\u4ee5\u51cf\u5c11map\u6570\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u63d0\u9192\u7684\u662f\uff0c\u76f4\u63a5\u8c03\u6574mapred.map.tasks\u8fd9\u4e2a\u53c2\u6570\u662f\u6ca1\u6709\u6548\u679c\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/swordfall/p/11037539.html"},"https://www.cnblogs.com/swordfall/p/11037539.html")),(0,a.kt)("h2",{id:"\u5408\u7406\u8bbe\u7f6ereduce\u6570"},"\u5408\u7406\u8bbe\u7f6eReduce\u6570"),(0,a.kt)("p",null,"Reduce\u4e2a\u6570\u5e76\u4e0d\u662f\u8d8a\u591a\u8d8a\u597d"),(0,a.kt)("p",null,"\uff081\uff09\u8fc7\u591a\u7684\u542f\u52a8\u548c\u521d\u59cb\u5316Reduce\u4e5f\u4f1a\u6d88\u8017\u65f6\u95f4\u548c\u8d44\u6e90\uff1b"),(0,a.kt)("p",null,"\uff082\uff09\u53e6\u5916\uff0c\u6709\u591a\u5c11\u4e2aReduce\uff0c\u5c31\u4f1a\u6709\u591a\u5c11\u4e2a\u8f93\u51fa\u6587\u4ef6\uff0c\u5982\u679c\u751f\u6210\u4e86\u5f88\u591a\u4e2a\u5c0f\u6587\u4ef6\uff0c\u90a3\u4e48\u5982\u679c\u8fd9\u4e9b\u5c0f\u6587\u4ef6\u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u4efb\u52a1\u7684\u8f93\u5165\uff0c\u5219\u4e5f\u4f1a\u51fa\u73b0\u5c0f\u6587\u4ef6\u8fc7\u591a\u7684\u95ee\u9898\uff1b"),(0,a.kt)("p",null,"\u5728\u8bbe\u7f6eReduce\u4e2a\u6570\u7684\u65f6\u5019\u4e5f\u9700\u8981\u8003\u8651\u8fd9\u4e24\u4e2a\u539f\u5219\uff1a\u5904\u7406\u5927\u6570\u636e\u91cf\u5229\u7528\u5408\u9002\u7684Reduce\u6570\uff1b\u4f7f\u5355\u4e2aReduce\u4efb\u52a1\u5904\u7406\u6570\u636e\u91cf\u5927\u5c0f\u8981\u5408\u9002\uff1b"),(0,a.kt)("h2",{id:"\u5c0f\u6587\u4ef6\u5982\u4f55\u4ea7\u751f\u7684"},"\u5c0f\u6587\u4ef6\u5982\u4f55\u4ea7\u751f\u7684\uff1f"),(0,a.kt)("p",null,"\uff081\uff09\u52a8\u6001\u5206\u533a\u63d2\u5165\u6570\u636e\uff0c\u4ea7\u751f\u5927\u91cf\u7684\u5c0f\u6587\u4ef6\uff0c\u4ece\u800c\u5bfc\u81f4map\u6570\u91cf\u5267\u589e\uff1b"),(0,a.kt)("p",null,"\uff082\uff09reduce\u6570\u91cf\u8d8a\u591a\uff0c\u5c0f\u6587\u4ef6\u4e5f\u8d8a\u591a\uff08reduce\u7684\u4e2a\u6570\u548c\u8f93\u51fa\u6587\u4ef6\u662f\u5bf9\u5e94\u7684\uff09\uff1b"),(0,a.kt)("p",null,"\uff083\uff09\u6570\u636e\u6e90\u672c\u8eab\u5c31\u5305\u542b\u5927\u91cf\u7684\u5c0f\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5c0f\u6587\u4ef6\u89e3\u51b3\u65b9\u6848"},"\u5c0f\u6587\u4ef6\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\uff081\uff09\u5728Map\u6267\u884c\u524d\u5408\u5e76\u5c0f\u6587\u4ef6\uff0c\u51cf\u5c11Map\u6570\uff1aCombineHiveInputFormat\u5177\u6709\u5bf9\u5c0f\u6587\u4ef6\u8fdb\u884c\u5408\u5e76\u7684\u529f\u80fd\uff08\u7cfb\u7edf\u9ed8\u8ba4\u7684\u683c\u5f0f\uff09\u3002HiveInputFormat\u6ca1\u6709\u5bf9\u5c0f\u6587\u4ef6\u5408\u5e76\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\uff082\uff09merge\n// \u8f93\u51fa\u5408\u5e76\u5c0f\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SET hive.merge.mapfiles = true; -- \u9ed8\u8ba4true\uff0c\u5728map-only\u4efb\u52a1\u7ed3\u675f\u65f6\u5408\u5e76\u5c0f\u6587\u4ef6\nSET hive.merge.mapredfiles = true; -- \u9ed8\u8ba4false\uff0c\u5728map-reduce\u4efb\u52a1\u7ed3\u675f\u65f6\u5408\u5e76\u5c0f\u6587\u4ef6\nSET hive.merge.size.per.task = 268435456; -- \u9ed8\u8ba4256M\nSET hive.merge.smallfiles.avgsize = 16777216; -- \u5f53\u8f93\u51fa\u6587\u4ef6\u7684\u5e73\u5747\u5927\u5c0f\u5c0f\u4e8e16m\u8be5\u503c\u65f6\uff0c\u542f\u52a8\u4e00\u4e2a\u72ec\u7acb\u7684map-reduce\u4efb\u52a1\u8fdb\u884c\u6587\u4ef6merge\n")),(0,a.kt)("p",null,"\uff083\uff09\u5f00\u542fJVM\u91cd\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set mapreduce.job.jvm.numtasks=10\n")),(0,a.kt)("h2",{id:"\u5f00\u542fmap\u7aefcombiner\u4e0d\u5f71\u54cd\u6700\u7ec8\u4e1a\u52a1\u903b\u8f91"},"\u5f00\u542fmap\u7aefcombiner\uff08\u4e0d\u5f71\u54cd\u6700\u7ec8\u4e1a\u52a1\u903b\u8f91\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set hive.map.aggr=true\uff1b\n")),(0,a.kt)("h2",{id:"\u538b\u7f29\u9009\u62e9\u5feb\u7684"},"\u538b\u7f29\uff08\u9009\u62e9\u5feb\u7684\uff09"),(0,a.kt)("p",null,"\u8bbe\u7f6emap\u7aef\u8f93\u51fa\u3001\u4e2d\u95f4\u7ed3\u679c\u538b\u7f29\u3002\uff08\u4e0d\u5b8c\u5168\u662f\u89e3\u51b3\u6570\u636e\u503e\u659c\u7684\u95ee\u9898\uff0c\u4f46\u662f\u51cf\u5c11\u4e86IO\u8bfb\u5199\u548c\u7f51\u7edc\u4f20\u8f93\uff0c\u80fd\u63d0\u9ad8\u5f88\u591a\u6548\u7387\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set hive.exec.compress.intermediate=true --\u542f\u7528\u4e2d\u95f4\u6570\u636e\u538b\u7f29\nset mapreduce.map.output.compress=true --\u542f\u7528\u6700\u7ec8\u6570\u636e\u538b\u7f29\nset mapreduce.map.outout.compress.codec=\u2026; --\u8bbe\u7f6e\u538b\u7f29\u65b9\u5f0f\n")),(0,a.kt)("h2",{id:"\u91c7\u7528tez\u5f15\u64ce\u6216\u8005spark\u5f15\u64ce"},"\u91c7\u7528tez\u5f15\u64ce\u6216\u8005spark\u5f15\u64ce"),(0,a.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e hive on tez \u6216\u8005 hive on spark \u63d0\u5347\u6570\u636e\u5904\u7406\u6548\u7387"))}m.isMDXComponent=!0}}]);
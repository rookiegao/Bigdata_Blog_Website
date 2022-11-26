"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[4145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),y=o,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},l="MySql_FAQ",i={unversionedId:"\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_FAQ",id:"version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_FAQ",title:"MySql_FAQ",description:"Q1: MySQL Error \u201cToo many connections\u201d and how to resolve it",source:"@site/versioned_docs/version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_FAQ.md",sourceDirName:"\u5927\u6570\u636e\u6846\u67b6_FAQ",slug:"/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_FAQ",draft:!1,tags:[],version:"1.1",lastUpdatedBy:"rookiegao",lastUpdatedAt:1669472666,formattedLastUpdatedAt:"2022\u5e7411\u670826\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MongoDB_CDC_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/MongoDB_CDC_FAQ"},next:{title:"Oracle_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/Oracle_FAQ"}},c={},s=[{value:"Q1: MySQL Error \u201cToo many connections\u201d and how to resolve it",id:"q1-mysql-error-too-many-connections-and-how-to-resolve-it",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql_faq"},"MySql_FAQ"),(0,o.kt)("h2",{id:"q1-mysql-error-too-many-connections-and-how-to-resolve-it"},"Q1: MySQL Error \u201cToo many connections\u201d and how to resolve it"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.thegeekdiary.com/mysql-error-too-many-connections-and-how-to-resolve-it/"},"\u89e3\u51b3\u65b9\u6848\u539f\u6587")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Solution")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mysql \u2013u root \u2013p\nmysql> SHOW VARIABLES LIKE 'max_connections';\n+-----------------+-------+\n| Variable_name   | Value |\n+-----------------+-------+\n| max_connections | 151   |\n+-----------------+-------+\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Changing the max_connections parameter (Temporarily)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mysql \u2013u root \u2013p\nmysql> SET GLOBAL max_connections = 512;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Changing the max_connections parameter (Permanently)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# vi /etc/my.cnf\nmax_connections = 512\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For CentOS/RHEL 6:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# service mysqld restart\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For CentOS/RHEL 7:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# systemctl restart mysqld\n")))}u.isMDXComponent=!0}}]);
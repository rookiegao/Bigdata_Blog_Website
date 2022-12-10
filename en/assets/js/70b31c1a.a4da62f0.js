"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[6206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(r),p=a,x=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(x,i(i({ref:t},l),{},{components:r})):n.createElement(x,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"\u6570\u636e\u96c6\u6210/Debezium/Debezium_FAQ",id:"version-1.0/\u6570\u636e\u96c6\u6210/Debezium/Debezium_FAQ",title:"Debezium_FAQ",description:"Q1 : Debezium for MySQL \u7684\u7b80\u5355\u793a\u4f8b",source:"@site/versioned_docs/version-1.0/\u6570\u636e\u96c6\u6210/Debezium/Debezium_FAQ.md",sourceDirName:"\u6570\u636e\u96c6\u6210/Debezium",slug:"/\u6570\u636e\u96c6\u6210/Debezium/Debezium_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u6570\u636e\u96c6\u6210/Debezium/Debezium_FAQ",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"skylines",lastUpdatedAt:1670685133,formattedLastUpdatedAt:"Dec 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debezium \u535a\u6587\u63a8\u8350",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u6570\u636e\u96c6\u6210/Debezium/Debezium \u535a\u6587\u63a8\u8350"},next:{title:"MongoDB_CDC_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u6570\u636e\u96c6\u6210/Flink_CDC/MongoDB_CDC_FAQ/"}},c={},m=[{value:"Q1 : Debezium for MySQL \u7684\u7b80\u5355\u793a\u4f8b",id:"q1--debezium-for-mysql-\u7684\u7b80\u5355\u793a\u4f8b",level:2}],l={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"q1--debezium-for-mysql-\u7684\u7b80\u5355\u793a\u4f8b"},"Q1 : Debezium for MySQL \u7684\u7b80\u5355\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' curl -H "Content-Type: application/json" -X POST -d  \'{\n      "name" : "xxxx_2022",\n      "config" : {\n          "connector.class" : "io.debezium.connector.mysql.MySqlConnector",\n          "database.hostname" : "xxx.xxx.xx.xxx",\n          "database.port" : "3306",\n          "database.user" : "user",\n          "database.password" : "pass",\n          "database.server.id" : "122811",\n          "database.server.name" : "xxxx_2022",\n          "database.include.list" : "xxxx",\n          "snapshot.mode" : "schema_only",\n          "database.history.skip.unparseable.ddl": "true",\n          "key.converter": "org.apache.kafka.connect.json.JsonConverter",\n          "value.converter": "org.apache.kafka.connect.json.JsonConverter",\n          "key.converter.schemas.enable": "false",\n          "value.converter.schemas.enable": "false",\n          "include.schema.changes": "true",\n          "decimal.handling.mode" : "string",\n          "transforms": "unwrap",\n          "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState",\n          "transforms.unwrap.drop.tombstones": "true",\n          "transforms.unwrap.delete.handling.mode": "rewrite",\n          "transforms.unwrap.add.fields": "source.ts_ms,source.db,source.table,op",\n          "converters" : "datetime",\n          "datetime.type" : "com.darcytech.debezium.converter.MySqlDateTimeConverter",\n          "datetime.format.date" : "yyyy-MM-dd",\n          "datetime.format.time" : "HH:mm:ss",\n          "datetime.format.datetime" : "yyyy-MM-dd HH:mm:ss",\n          "datetime.format.timestamp" : "yyyy-MM-dd HH:mm:ss",\n          "datetime.format.timestamp.zone" : "UTC+8",\n          "table.include.list" : "xxxx.user,xxxx.ordertrance,xxxx.ordertrance_agent_info",\n          "database.history.kafka.bootstrap.servers":"xxxx.xxx.xx.xxx:9092,xxxx.xxx.xx.xxx:9092,xxxx.xxx.xx.xxx:9092",\n          "database.history.kafka.topic":"history_xxxx_2022"\n      }\n  }\' http://xxxx.xxx.xx.xxx:8083/connectors \n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"note")),(0,a.kt)("p",null,"Debezium \u8f6c\u6362 MySQL \u65f6\u95f4\u7c7b\u578b\u6bd4\u8f83\u6df7\u4e71\uff0c\u9700\u8981\u91cd\u65b0\u505a\u65f6\u95f4\u8f6c\u6362\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/holmofy/debezium-datetime-converter/blob/master/src/main/java/com/darcytech/debezium/converter/MySqlDateTimeConverter.java"},"https://github.com/holmofy/debezium-datetime-converter/blob/master/src/main/java/com/darcytech/debezium/converter/MySqlDateTimeConverter.java")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.hufeifei.cn/2021/03/DB/mysql-binlog-parser/index.html"},"https://blog.hufeifei.cn/2021/03/DB/mysql-binlog-parser/index.html"))))}u.isMDXComponent=!0}}]);
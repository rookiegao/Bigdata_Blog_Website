"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[5386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const o={authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/120880414?spm=1001.2014.3001.5501"}],title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",date:new Date("2021-11-21T09:24:31.000Z"),tags:["\u6570\u636e\u96c6\u6210"],keywords:["Debeziium"],description:"\u4f7f\u7528 debezium \u5bf9 oracle \u6570\u636e\u8fdb\u884c\u91c7\u96c6"},i=void 0,r={permalink:"/Bigdata_Blog_Website/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",editUrl:"https://sophiadata.github.io/bigdata-blog/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65.md",source:"@site/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65.md",title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",description:"\u4f7f\u7528 debezium \u5bf9 oracle \u6570\u636e\u8fdb\u884c\u91c7\u96c6",date:"2021-11-21T09:24:31.000Z",formattedDate:"2021\u5e7411\u670821\u65e5",tags:[{label:"\u6570\u636e\u96c6\u6210",permalink:"/Bigdata_Blog_Website/blog/tags/\u6570\u636e\u96c6\u6210"}],readingTime:12.93,hasTruncateMarker:!1,authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/120880414?spm=1001.2014.3001.5501"}],frontMatter:{authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/120880414?spm=1001.2014.3001.5501"}],title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",date:"2021-11-21T09:24:31.000Z",tags:["\u6570\u636e\u96c6\u6210"],keywords:["Debeziium"],description:"\u4f7f\u7528 debezium \u5bf9 oracle \u6570\u636e\u8fdb\u884c\u91c7\u96c6"},prevItem:{title:"Flink CDC 2.3.0 Announce",permalink:"/Bigdata_Blog_Website/blog/Flink CDC 2.3.0 Announce"},nextItem:{title:"Ambari \u5165\u95e8\u53ca\u5b89\u88c5",permalink:"/Bigdata_Blog_Website/blog/Ambari \u5165\u95e8\u53ca\u5b89\u88c5"}},s={authorsImageUrls:[void 0]},c=[{value:"\u7b2c1\u7ae0 debezium\u6982\u8ff0",id:"\u7b2c1\u7ae0-debezium\u6982\u8ff0",level:2},{value:"1.1 debezium\u662f\u4ec0\u4e48",id:"11-debezium\u662f\u4ec0\u4e48",level:3},{value:"1.2 debezium\u7684\u4f9d\u8d56",id:"12-debezium\u7684\u4f9d\u8d56",level:3},{value:"\u7b2c2\u7ae0 \u73af\u5883\u642d\u5efa",id:"\u7b2c2\u7ae0-\u73af\u5883\u642d\u5efa",level:2},{value:"2.1 \u6240\u9700\u8f6f\u4ef6\u53ca\u6d4b\u8bd5\u7248\u672c",id:"21-\u6240\u9700\u8f6f\u4ef6\u53ca\u6d4b\u8bd5\u7248\u672c",level:3},{value:"2.2 \u6570\u636e\u5e93\u51c6\u5907",id:"22-\u6570\u636e\u5e93\u51c6\u5907",level:3},{value:"2.3\u90e8\u7f72\u8fde\u63a5\u5668",id:"23\u90e8\u7f72\u8fde\u63a5\u5668",level:3},{value:"\u7b2c3\u7ae0\u542f\u52a8Debezium",id:"\u7b2c3\u7ae0\u542f\u52a8debezium",level:2},{value:"3.1 \u6d4b\u8bd5\u4efb\u52a1\u542f\u52a8",id:"31-\u6d4b\u8bd5\u4efb\u52a1\u542f\u52a8",level:3},{value:"3.2 Oracle\u5f52\u6863\u65e5\u5fd7\u8fc7\u591a\u89e3\u51b3(\u78c1\u76d8\u5f88\u5927\u53ef\u4ee5\u5ffd\u7565)",id:"32-oracle\u5f52\u6863\u65e5\u5fd7\u8fc7\u591a\u89e3\u51b3\u78c1\u76d8\u5f88\u5927\u53ef\u4ee5\u5ffd\u7565",level:3},{value:"3.3 \u65b0\u589e\u8868\u95ee\u9898",id:"33-\u65b0\u589e\u8868\u95ee\u9898",level:3},{value:"3.3.1 \u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6848",id:"331-\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6848",level:4},{value:"3.3.2\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6848",id:"332\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6848",level:4},{value:"3.4 \u6ce8\u610f\u4e8b\u9879",id:"34-\u6ce8\u610f\u4e8b\u9879",level:3},{value:"3.4.1\u914d\u7f6e Debezium \u4e3b\u9898",id:"341\u914d\u7f6e-debezium-\u4e3b\u9898",level:4},{value:"3.4.2\u5176\u4ed6\u4e3b\u9898",id:"342\u5176\u4ed6\u4e3b\u9898",level:4},{value:"3.4.3\u5355\u5206\u533a",id:"343\u5355\u5206\u533a",level:4},{value:"3.4.4\u5173\u4e8e\u5bf9oracle \u6570\u636e\u5e93\u538b\u529b\u7684\u95ee\u9898",id:"344\u5173\u4e8e\u5bf9oracle-\u6570\u636e\u5e93\u538b\u529b\u7684\u95ee\u9898",level:4},{value:"3.5 \u9519\u8bef\u5904\u7406",id:"35-\u9519\u8bef\u5904\u7406",level:3},{value:"3.5.1\u4e0d\u80fd\u8bc6\u522bjdbc\u9a71\u52a8\uff1f",id:"351\u4e0d\u80fd\u8bc6\u522bjdbc\u9a71\u52a8",level:4},{value:"3.5.2 Kafka\u4ee5\u53caKafka connect\u91cd\u542f\u95ee\u9898",id:"352-kafka\u4ee5\u53cakafka-connect\u91cd\u542f\u95ee\u9898",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b2c1\u7ae0-debezium\u6982\u8ff0"},"\u7b2c1\u7ae0 debezium\u6982\u8ff0"),(0,l.kt)("h3",{id:"11-debezium\u662f\u4ec0\u4e48"},"1.1 debezium\u662f\u4ec0\u4e48"),(0,l.kt)("p",null," Debezium \u662f\u4e00\u7ec4\u5206\u5e03\u5f0f\u670d\u52a1\uff0c\u7528\u4e8e\u6355\u83b7\u6570\u636e\u5e93\u4e2d\u7684\u66f4\u6539\uff0c\u4ee5\u4fbf\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u67e5\u770b\u8fd9\u4e9b\u66f4\u6539\u5e76\u5bf9\u5176\u505a\u51fa\u54cd\u5e94\u3002 Debezium \u5728\u66f4\u6539\u4e8b\u4ef6\u6d41\u4e2d\u8bb0\u5f55\u6bcf\u4e2a\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6240\u6709\u884c\u7ea7\u66f4\u6539\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ea\u9700\u8bfb\u53d6\u8fd9\u4e9b\u6d41\u4ee5\u67e5\u770b\u66f4\u6539\u4e8b\u4ef6\u53d1\u751f\u7684\u76f8\u540c\u987a\u5e8f\u3002"),(0,l.kt)("h3",{id:"12-debezium\u7684\u4f9d\u8d56"},"1.2 debezium\u7684\u4f9d\u8d56"),(0,l.kt)("p",null,"Debezium \u6784\u5efa\u5728 Apache Kafka \u4e4b\u4e0a\uff0c\u5e76\u63d0\u4f9b\u4e0e Kafka Connect \u517c\u5bb9\u7684\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u76d1\u63a7\u7279\u5b9a\u7684\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002 Debezium \u5728 Kafka \u65e5\u5fd7\u4e2d\u8bb0\u5f55\u6570\u636e\u66f4\u6539\u7684\u5386\u53f2\u8bb0\u5f55\uff0c\u4ece\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u5b83\u4eec\u7684\u4f4d\u7f6e\u3002 \u8fd9\u4f7f\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u8f7b\u677e\u6b63\u786e\u4e14\u5b8c\u6574\u5730\u4f7f\u7528\u6240\u6709\u4e8b\u4ef6\u3002 \u5373\u4f7f\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u610f\u5916\u505c\u6b62\uff0c\u5b83\u4e5f\u4e0d\u4f1a\u9519\u8fc7\u4efb\u4f55\u5185\u5bb9\uff1a\u5f53\u5e94\u7528\u7a0b\u5e8f\u91cd\u65b0\u542f\u52a8\u65f6\uff0c\u5b83\u5c06\u7ee7\u7eed\u4f7f\u7528\u5b83\u505c\u6b62\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u7b2c2\u7ae0-\u73af\u5883\u642d\u5efa"},"\u7b2c2\u7ae0 \u73af\u5883\u642d\u5efa"),(0,l.kt)("h3",{id:"21-\u6240\u9700\u8f6f\u4ef6\u53ca\u6d4b\u8bd5\u7248\u672c"},"2.1 \u6240\u9700\u8f6f\u4ef6\u53ca\u6d4b\u8bd5\u7248\u672c"),(0,l.kt)("p",null,"jdk-8u211-linux-x64.tar.gz"),(0,l.kt)("p",null,"apache-zookeeper-3.5.7-bin.tar.gz"),(0,l.kt)("p",null,"kafka_2.11-2.4.0.tgz"),(0,l.kt)("p",null,"debezium-connector-oracle-1.7.0.Final-plugin.tar.gz"),(0,l.kt)("p",null,"instantclient-basic-linux.x64-21.3.0.0.0.zip (oracle\u5ba2\u6237\u7aef)"),(0,l.kt)("p",null,"oracle 11g R2"),(0,l.kt)("h3",{id:"22-\u6570\u636e\u5e93\u51c6\u5907"},"2.2 \u6570\u636e\u5e93\u51c6\u5907"),(0,l.kt)("p",null,"\uff081\uff09\u8bbe\u7f6eOracle LogMiner\u6240\u9700\u7684\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 config]# su - oracle\n[oracle@tDataAnalysis01 config]$ sqlplus / as sysdba\nSQL> alter system set db_recovery_file_dest_size = 10G;\nSQL> shutdown immediate;\nSQL> startup mount;\nSQL> alter database archivelog;\nSQL> alter database open;\n")),(0,l.kt)("p",null,"\uff082\uff09\u4fdd\u8bc1Database log mode\u663e\u793a\u4e3aArchive Mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SQL> archive log list\n")),(0,l.kt)("p",null,"\uff083\uff09\u542f\u7528\u8865\u5145\u65e5\u5fd7\u8bb0\u5f55,\uff08\u6240\u6709\u8868\u90fd\u5f97\u6267\u884c\uff0c\u8868\u91cc\u987b\u81f3\u5c11\u4e00\u6761\u6570\u636e\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SQL> ALTER DATABASE add SUPPLEMENTAL LOG DATA ;\nSQL> ALTER TABLE \u5e93.\u8868 ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\n")),(0,l.kt)("p",null,"Debezium Oracle\u8fde\u63a5\u5668\u8981\u6c42\u4f7f\u7528\u7279\u5b9a\u6743\u9650\u8bbe\u7f6e\u7528\u6237\u8d26\u53f7\uff0c\u4ee5\u4fbf\u8fde\u63a5\u5668\u6355\u83b7\u66f4\u591a\u4e8b\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/logminer_tbs.dbf'\nSIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n\nCREATE USER debezium IDENTIFIED BY 123456\n    DEFAULT TABLESPACE TEST0\n    QUOTA UNLIMITED ON TEST0;\n \n  GRANT CREATE SESSION TO debezium ;\n  GRANT SELECT ON V_$DATABASE to debezium ;\n  GRANT FLASHBACK ANY TABLE TO debezium ;\n  GRANT SELECT ANY TABLE TO debezium ;\n  GRANT SELECT_CATALOG_ROLE TO debezium ;\n  GRANT EXECUTE_CATALOG_ROLE TO debezium ;\n  GRANT SELECT ANY TRANSACTION TO debezium ;\n\n  GRANT CREATE TABLE TO debezium ;\n  GRANT LOCK ANY TABLE TO debezium ;\n  GRANT ALTER ANY TABLE TO debezium ;\n  GRANT CREATE SEQUENCE TO debezium ;\n \n  GRANT EXECUTE ON DBMS_LOGMNR TO debezium ;\n  GRANT EXECUTE ON DBMS_LOGMNR_D TO debezium ;\n \n  GRANT SELECT ON V_$LOG TO debezium ;\n  GRANT SELECT ON V_$LOG_HISTORY TO debezium ;\n  GRANT SELECT ON V_$LOGMNR_LOGS TO debezium ;\n  GRANT SELECT ON V_$LOGMNR_CONTENTS TO debezium ;\n  GRANT SELECT ON V_$LOGMNR_PARAMETERS TO debezium ;\n  GRANT SELECT ON V_$LOGFILE TO debezium ;\n  GRANT SELECT ON V_$ARCHIVED_LOG TO debezium ;\n  GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO debezium ;\n \n  exit;\n")),(0,l.kt)("h3",{id:"23\u90e8\u7f72\u8fde\u63a5\u5668"},"2.3\u90e8\u7f72\u8fde\u63a5\u5668"),(0,l.kt)("p",null,"\uff081\uff09\u8fdb\u5165\u5230oracle\u5ba2\u6237\u7aef\u76ee\u5f55\u4e2d\uff0c\u5c06xstreams.jar\u548cojbc8.jar\u590d\u5236\u5230kafka lib\u4e0b\uff0c\u5e76\u5206\u53d1\u7ed902\uff0c03\u4e24\u53f0\u673a\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 ~]# cd /opt/oracle/ instantclient_21_3/\n[root@tDataAnalysis01 instantclient_21_3]# cp xstreams.jar /opt/module/kafka_2.11-2.4.0/libs/\n[root@tDataAnalysis01 instantclient_21_3]# cp ojdbc8.jar /opt/module/kafka_2.11-2.4.0/libs/\n[root@tDataAnalysis01 instantclient_21_3]# scp xstreams.jar tDataAnalysis02:/opt/module/kafka_2.11-2.4.0/libs/\n[root@tDataAnalysis01 instantclient_21_3]# scp ojdbc8.jar tDataAnalysis02:/opt/module/kafka_2.11-2.4.0/libs/\n[root@tDataAnalysis01 instantclient_21_3]# scp xstreams.jar tDataAnalysis03:/opt/module/kafka_2.11-2.4.0/libs/\n[root@tDataAnalysis01 instantclient_21_3]# scp ojdbc8.jar tDataAnalysis03:/opt/module/kafka_2.11-2.4.0/libs/\n")),(0,l.kt)("p",null,"\uff082\uff09\u589e\u52a0LD_LIBRARY_PATH\u73af\u5883\u53d8\u91cf\uff0c\u6307\u5411oracle client\u8def\u5f84(\u6bcf\u4e2a\u8282\u70b9\u90fd\u914d\u7f6e)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 instantclient_21_3]# vim /etc/profile\nexport LD_LIBRARY_PATH=/opt/oracle/instantclient_21_3\n[root@tDataAnalysis01 instantclient_21_3]# source /etc/profile\n")),(0,l.kt)("p",null,"\uff083\uff09\u521b\u5efakafka plugins\u6587\u4ef6\u5939"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 software]# mkdir -p /usr/local/share/kafka/plugins/\n")),(0,l.kt)("p",null,"\uff084\uff09\u4e0a\u4f20debezium-connector-oracle-1.7.0.Final-plugin.tar.gz\n\uff0c\u89e3\u538b\u5230kafka plugins\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 software]# tar -zxvf debezium-connector-oracle-1.7.0.Final-plugin.tar.gz -C /usr/local/share/kafka/plugins/\n")),(0,l.kt)("p",null,"\uff085\uff09\u518d\u6b21\u4fee\u6539kafka\u4e0b\u7684connect-distributed.properties\u6587\u4ef6\uff0c\u6dfb\u52a0plugins\u8def\u5f84"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 software]# cd /opt/module/kafka_2.11-2.4.0/config/\n[root@tDataAnalysis01 config]# vim connect-distributed.properties \nplugin.path=/usr/local/share/kafka/plugins/\n")),(0,l.kt)("p",null,"\uff086\uff09\u5206\u53d1plugins\u6587\u4ef6\u5939,\u5206\u53d1connect-distributed.properties"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 config]# scp -r /usr/local/share/kafka/  tDataAnalysis02:/usr/local/share/\n[root@tDataAnalysis01 config]# scp -r /usr/local/share/kafka/  tDataAnalysis03:/usr/local/share/\n[root@tDataAnalysis01 config]# scp connect-distributed.properties  tDataAnalysis02:/opt/module/kafka_2.11-2.4.0/config/\n[root@tDataAnalysis01 config]# scp connect-distributed.properties  tDataAnalysis03:/opt/module/kafka_2.11-2.4.0/config/\n")),(0,l.kt)("p",null,"\uff087\uff09\u542f\u52a8kafka connector"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@tDataAnalysis01 kafka_2.11-2.4.0]# bin/connect-distributed.sh -daemon config/connect-distributed.properties\n[root@tDataAnalysis02 kafka_2.11-2.4.0]# bin/connect-distributed.sh -daemon config/connect-distributed.properties\n[root@tDataAnalysis03 kafka_2.11-2.4.0]# bin/connect-distributed.sh -daemon config/connect-distributed.properties\n")),(0,l.kt)("p",null,"\uff088\uff09\u67e5\u770b\u8fdb\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"25010 Kafka\n25555 ConnectDistributed\n")),(0,l.kt)("h2",{id:"\u7b2c3\u7ae0\u542f\u52a8debezium"},"\u7b2c3\u7ae0\u542f\u52a8Debezium"),(0,l.kt)("h3",{id:"31-\u6d4b\u8bd5\u4efb\u52a1\u542f\u52a8"},"3.1 \u6d4b\u8bd5\u4efb\u52a1\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'curl -H "Content-Type: application/json" -X POST -d  \'{\n       "name" : "oracle-connector",\n       "config" : {\n           "connector.class" : "io.debezium.connector.oracle.OracleConnector",\n           "database.hostname" : "xxx.xxx.16.53",\n           "database.port" : "1522",\n           "database.user" : "debezium",\n           "database.password" : "123456",\n           "database.dbname": "ORCL",\n           "database.server.name" : "orcl6",\n           "database.history.kafka.topic" : "schema-changes.inventory5",\n           "database.history.kafka.bootstrap.servers" : "tDataAnalysis01:9092,tDataAnalysis02:9092,tDataAnalysis03:9092",\n           "snapshot.mode" : "initial",\n           "schema.include.list" : "c##HAHA123",\n           "table.include.list" : "c##HAHA123.CIRCLE",\n           "database.oracle.version": "11", \n           "database.tablename.case.insensitive": "false",\n           "decimal.handling.mode" : "string"\n }\n}\' http://tDataAnalysis01:8083/connectors\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u4efb\u52a1\u8fd9\u91cc\u6211\u4f7f\u7528\u4e86\u521d\u59cb\u5316\u5feb\u7167")),(0,l.kt)("p",null,"\u67e5\u770bkafka topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --bootstrap-server tDataAnalysis01:9092 --list\nFlinkError\n__consumer_offsets\nconnect-oracle-configs\nconnect-oracle-offsets\nconnect-oracle-status\nflumeError\nmyTest\norcl6.C__HAHA123.CIRCLE\nschema-changes.inventory5\n")),(0,l.kt)("p",null,"\u67e5\u770bconnect\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Accept:application/json" tDataAnalysis01:8083/connectors/\n["oracle-connector"][root@tDataAnalysis02 kafka]#\n')),(0,l.kt)("p",null,"\u63d2\u5165\u6570\u636e\u540e"),(0,l.kt)("p",null,"\u6d88\u8d39topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-consumer.sh --bootstrap-server tDataAnalysis01:9092 --topic orcl6.C__HAHA123.CIRCLE --from-beginning\n")),(0,l.kt)("p",null,"\u6570\u636e\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "schema": {\n        "type": "struct", \n        "fields": [\n            {\n                "type": "struct", \n                "fields": [\n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "SERIALNO"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "FILEPATH"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "PARTID"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "STAFFNO"\n                    }, \n                    {\n                        "type": "int64", \n                        "optional": false, \n                        "name": "io.debezium.time.Timestamp", \n                        "version": 1, \n                        "field": "RECORDTIME"\n                    }\n                ], \n                "optional": true, \n                "name": "orcl6.C__HAHA123.CIRCLE.Value", \n                "field": "before"\n            }, \n            {\n                "type": "struct", \n                "fields": [\n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "SERIALNO"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "FILEPATH"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "PARTID"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "STAFFNO"\n                    }, \n                    {\n                        "type": "int64", \n                        "optional": false, \n                        "name": "io.debezium.time.Timestamp", \n                        "version": 1, \n                        "field": "RECORDTIME"\n                    }\n                ], \n                "optional": true, \n                "name": "orcl6.C__HAHA123.CIRCLE.Value", \n                "field": "after"\n            }, \n            {\n                "type": "struct", \n                "fields": [\n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "version"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "connector"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "name"\n                    }, \n                    {\n                        "type": "int64", \n                        "optional": false, \n                        "field": "ts_ms"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": true, \n                        "name": "io.debezium.data.Enum", \n                        "version": 1, \n                        "parameters": {\n                            "allowed": "true,last,false"\n                        }, \n                        "default": "false", \n                        "field": "snapshot"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "db"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": true, \n                        "field": "sequence"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "schema"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "table"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": true, \n                        "field": "txId"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": true, \n                        "field": "scn"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": true, \n                        "field": "commit_scn"\n                    }, \n                    {\n                        "type": "string", \n                        "optional": true, \n                        "field": "lcr_position"\n                    }\n                ], \n                "optional": false, \n                "name": "io.debezium.connector.oracle.Source", \n                "field": "source"\n            }, \n            {\n                "type": "string", \n                "optional": false, \n                "field": "op"\n            }, \n            {\n                "type": "int64", \n                "optional": true, \n                "field": "ts_ms"\n            }, \n            {\n                "type": "struct", \n                "fields": [\n                    {\n                        "type": "string", \n                        "optional": false, \n                        "field": "id"\n                    }, \n                    {\n                        "type": "int64", \n                        "optional": false, \n                        "field": "total_order"\n                    }, \n                    {\n                        "type": "int64", \n                        "optional": false, \n                        "field": "data_collection_order"\n                    }\n                ], \n                "optional": true, \n                "field": "transaction"\n            }\n        ], \n        "optional": false, \n        "name": "orcl6.C__HAHA123.CIRCLE.Envelope"\n    }, \n    "payload": {\n        "before": null, \n        "after": {\n            "SERIALNO": "1209", \n            "FILEPATH": "vqrouj", \n            "PARTID": "5606", \n            "STAFFNO": "YTCZ060002", \n            "RECORDTIME": 1329061915000\n        }, \n        "source": {\n            "version": "1.7.0.Final", \n            "connector": "oracle", \n            "name": "orcl6", \n            "ts_ms": 1634660571000, \n            "snapshot": "false", \n            "db": "ORCL", \n            "sequence": null, \n            "schema": "C##HAHA123", \n            "table": "CIRCLE", \n            "txId": "05000300282e0000", \n            "scn": "19202446", \n            "commit_scn": "19202478", \n            "lcr_position": null\n        }, \n        "op": "c", \n        "ts_ms": 1634631840937, \n        "transaction": null\n    }\n}\n')),(0,l.kt)("p",null,"\u5220\u9664connect "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -v -X DELETE http://tDataAnalysis01:8083/connectors/oracle-connector\n")),(0,l.kt)("p",null,"\u8bbf\u95ee 8083\u7aef\u53e3\u53ef\u67e5\u770b connect\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tDataAnalysis03:8083/connectors/oracle-connector/status\n")),(0,l.kt)("h3",{id:"32-oracle\u5f52\u6863\u65e5\u5fd7\u8fc7\u591a\u89e3\u51b3\u78c1\u76d8\u5f88\u5927\u53ef\u4ee5\u5ffd\u7565"},"3.2 Oracle\u5f52\u6863\u65e5\u5fd7\u8fc7\u591a\u89e3\u51b3(\u78c1\u76d8\u5f88\u5927\u53ef\u4ee5\u5ffd\u7565)"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u4e2d\u56e0\u4e3a\u65e5\u5fd7\u5199\u5165\u8fc7\u5feb\u95ee\u9898\u5bfc\u81f4\u78c1\u76d8\u88ab\u5199\u6ee1\uff0c\u4f7f\u5f97Oracle\u6570\u636e\u5e93\u6781\u4e0d\u7a33\u5b9a"),(0,l.kt)("p",null,"\u65e5\u5fd7\u4e0d\u5141\u8bb8\u7269\u7406\u5220\u9664\uff0c\u5e94\u901a\u8fc7rman target /"),(0,l.kt)("p",null,"\u6267\u884c "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"delete noprompt archivelog until time 'sysdate-1/24';\n")),(0,l.kt)("p",null,"\u811a\u672c\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7531\u4e8e\u8fde\u63a5\u5668\u662f\u4f9d\u8d56\u4e8eOracle\u7684\u5f52\u6863\u65e5\u5fd7\u505a\u7684\u5b9e\u65f6\u540c\u6b65\n# \u5b58\u5728\u5f52\u6863\u65e5\u5fd7\u6491\u7206\u78c1\u76d8\u7684\u95ee\u9898\n#! /bin/bash\nexec >> /xxx/oracle/oracle_log/del_arch`date +%F-%H`.log #\u8bb0\u5f55\u811a\u672c\u65e5\u5fd7\n$ORACLE_HOME/bin/rman target / <<EOF\n#\u68c0\u67e5\u5f52\u6863\u65e5\u5fd7\ncrosscheck archivelog all;\n#\u5220\u9664\u6240\u6709\u8fc7\u671f\u65e5\u5fd7\ndelete noprompt expired archivelog all;\n#\u5220\u9664\u4e00\u4e2a\u5c0f\u65f6\u524d\u7684\u5f52\u6863\u65e5\u5fd7\ndelete noprompt archivelog until time 'sysdate-1/24';\nexit;\nEOF\n")),(0,l.kt)("h3",{id:"33-\u65b0\u589e\u8868\u95ee\u9898"},"3.3 \u65b0\u589e\u8868\u95ee\u9898"),(0,l.kt)("h4",{id:"331-\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6848"},"3.3.1 \u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u5b89\u88c5Debezium,\u53ef\u4ee5\u76d1\u63a7\u5230\u6570\u636e\u5e93\u4e2d\u8868\u7684\u521d\u59cb\u8868\uff0c\u4f46\u662f\u540e\u7eed\u518d\u5efa\u8868\u5e76\u4e14\u589e\u52a0SUPPLEMENTAL LOG DATA\uff0cConnector\u662f\u65e0\u6cd5\u6355\u83b7\u5230\u7684\u3002\n\u89e3\u51b3\u65b9\u6848\uff1a\n\u518d\u63d0\u4ea4\u4e00\u4e2a\u65b0\u7684connecotr,\u7528\u6765\u76d1\u63a7\u540e\u7eed\u521b\u5efa\u7684\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -X POST -d  \'{\n       "name" : "oracle-connector2",\n       "config" : {\n           "connector.class" : "io.debezium.connector.oracle.OracleConnector",\n           "database.hostname" : "xxx.xxx.16.53",\n           "database.port" : "1522",\n           "database.user" : "debezium",\n           "database.password" : "123456",\n           "database.dbname": "ORCL",\n           "database.server.name" : "orcl7",\n           "database.history.kafka.topic" : "schema-changes.inventory6",\n           "database.history.kafka.bootstrap.servers" : "tDataAnalysis01:9092,tDataAnalysis02:9092,tDataAnalysis03:9092",\n           "snapshot.mode" : "initial",\n           "schema.include.list" : "c##HAHA123",\n           "table.include.list" : "c##HAHA123.CIRCLE2",\n           "database.oracle.version": "11", \n           "database.tablename.case.insensitive": "false",\n           "decimal.handling.mode" : "string"\n }\n}\' http://tDataAnalysis01:8083/connectors\n')),(0,l.kt)("p",null,"\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570table.include.list\u6307\u5b9a\u6240\u9700\u7684\u76d1\u63a7\u7684\u8868\uff0c\u6216\u8005\u4f7f\u7528table.exclude.list\u6307\u5b9a\u4e0d\u9700\u8981\u76d1\u63a7\u7684\u8868\uff0c\u4e8c\u8005\u53ea\u80fd\u9009\u4e00\u4e2a\u4f7f\u7528(\u8fd9\u4e2a\u65b9\u6848\u5b9e\u6d4b\u901a\u8fc7\uff0c\u53ef\u4ee5\u6b63\u5e38\u6536\u6570\u636e)"),(0,l.kt)("p",null,"\u67e5\u770b\u8fde\u63a5\u5668\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Accept:application/json" tDataAnalysis01:8083/connectors/\n["oracle-connector2","oracle-connector"][root@tDataAnalysis02 kafka]#\n')),(0,l.kt)("h4",{id:"332\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6848"},"3.3.2\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"*\u6700\u65b0\u6d4b\u8bd5 \u6839\u636e\u793e\u533a\u56de\u590d"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/910a6a1d318d4c11b557b36d2a0a91b0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6I-c6bifQ29kZXJz,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u8868\u53ef\u901a\u8fc7\u505c\u6b62\u539f\u6709\u4efb\u52a1\uff0c\u4fee\u6539\u914d\u7f6e\u53c2\u6570\uff0c\u91cd\u65b0\u542f\u52a8\u4efb\u52a1\uff0c\u65e7\u8868\u6570\u636e\u4e0d\u53d7\u5f71\u54cd\uff0c\u5e95\u5c42\u5b58\u6709\u504f\u79fb\u91cf\uff0c\u6570\u636e\u540c\u6b65\u53ef\u4ee5\u8ffd\u6eaf \u5feb\u7167\u65b9\u5f0f\u4e3a schema_only")),(0,l.kt)("p",null,"\u5efa\u8bae\uff1a \u6211\u4eec\u7684oracle\u6570\u636e\u5e93\u672c\u8eab\u6570\u636e\u91cf\u5b58\u50a8\u91cf\u5e94\u8be5\u662f\u4e0d\u5c0f\u7684\uff0c\u6211\u5728\u6d4b\u8bd5\u4e2d\u4e3a\u65b9\u4fbf\u5feb\u7167\u4e3a\u521d\u59cb\u5316\uff0c\u751f\u4ea7\u4e2d\u5efa\u8baeschema_only \u4e3a\u589e\u91cf\u8bfb\u53d6\u4ee5\u907f\u514d\u4efb\u52a1\u957f\u65f6\u95f4\u8fd0\u884c\u9020\u6210\u5931\u8d25\u3002"),(0,l.kt)("h3",{id:"34-\u6ce8\u610f\u4e8b\u9879"},"3.4 \u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("h4",{id:"341\u914d\u7f6e-debezium-\u4e3b\u9898"},"3.4.1\u914d\u7f6e Debezium \u4e3b\u9898"),(0,l.kt)("p",null,"Debezium \u4f7f\u7528\uff08\u901a\u8fc7 Kafka Connect \u6216\u76f4\u63a5\uff09\u591a\u4e2a\u4e3b\u9898\u6765\u5b58\u50a8\u6570\u636e\u3002 \u8fd9\u4e9b\u4e3b\u9898\u5fc5\u987b\u7531\u7ba1\u7406\u5458\u6216 Kafka \u672c\u8eab\u901a\u8fc7\u542f\u7528\u4e3b\u9898\u7684\u81ea\u52a8\u521b\u5efa\u6765\u521b\u5efa\u3002\n\u6709\u4e00\u4e9b\u9002\u7528\u4e8e\u4e3b\u9898\u7684\u9650\u5236\u548c\u5efa\u8bae\uff1a"),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u5386\u53f2\u4e3b\u9898\uff08\u9002\u7528\u4e8e MySQL \u548c SQL Server \u7684 Debezium \u8fde\u63a5\u5668\uff09\n\u65e0\u9650\uff08\u6216\u975e\u5e38\u957f\uff09\u4fdd\u7559\uff08\u65e0\u538b\u7f29\uff01\uff09\n\u751f\u4ea7\u7684\u590d\u5236\u56e0\u5b50\u81f3\u5c11\u4e3a 3\n\u5355\u5206\u533a"),(0,l.kt)("h4",{id:"342\u5176\u4ed6\u4e3b\u9898"},"3.4.2\u5176\u4ed6\u4e3b\u9898"),(0,l.kt)("p",null,"\u53ef\u9009\u5730\uff0c\u542f\u7528\u65e5\u5fd7\u538b\u7f29\uff08\u5982\u679c\u60a8\u5e0c\u671b\u53ea\u4fdd\u7559\u7ed9\u5b9a\u8bb0\u5f55\u7684\u6700\u540e\u4e00\u4e2a\u66f4\u6539\u4e8b\u4ef6\uff09\uff1b \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e94\u914d\u7f6e Apache Kafka \u4e2d\u7684 min.compaction.lag.ms \u548c delete.retention.ms \u4e3b\u9898\u7ea7\u522b\u8bbe\u7f6e\uff0c\u4ee5\u4fbf\u6d88\u8d39\u8005\u6709\u8db3\u591f\u7684\u65f6\u95f4\u63a5\u6536\u6240\u6709\u4e8b\u4ef6\u5e76\u5220\u9664\u6807\u8bb0\uff1b \u5177\u4f53\u6765\u8bf4\uff0c\u8fd9\u4e9b\u503c\u5e94\u5927\u4e8e\u60a8\u9884\u671f\u7684\u63a5\u6536\u5668\u8fde\u63a5\u5668\u7684\u6700\u5927\u505c\u673a\u65f6\u95f4\uff0c\u4f8b\u5982 \u66f4\u65b0\u5b83\u4eec\u65f6\n\u5728\u751f\u4ea7\u4e2d\u590d\u5236"),(0,l.kt)("h4",{id:"343\u5355\u5206\u533a"},"3.4.3\u5355\u5206\u533a"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u653e\u5bbd\u5355\u5206\u533a\u89c4\u5219\uff0c\u4f46\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u5904\u7406\u6570\u636e\u5e93\u4e2d\u4e0d\u540c\u884c\u7684\u4e71\u5e8f\u4e8b\u4ef6\uff08\u5355\u884c\u7684\u4e8b\u4ef6\u4ecd\u7136\u662f\u5b8c\u5168\u6709\u5e8f\u7684\uff09\u3002 \u5982\u679c\u4f7f\u7528\u591a\u4e2a\u5206\u533a\uff0cKafka\u9ed8\u8ba4\u4f1a\u901a\u8fc7\u5bf9key\u8fdb\u884chash\u6765\u786e\u5b9a\u5206\u533a\u3002 \u5176\u4ed6\u5206\u533a\u7b56\u7565\u9700\u8981\u4f7f\u7528 SMT \u4e3a\u6bcf\u4e2a\u8bb0\u5f55\u8bbe\u7f6e\u5206\u533a\u53f7\u3002\n\u6709\u5173\u53ef\u81ea\u5b9a\u4e49\u7684\u4e3b\u9898\u81ea\u52a8\u521b\u5efa\uff08\u81ea Kafka Connect 2.6.0 \u8d77\u53ef\u7528\uff09\uff0c\u8bf7\u53c2\u9605\u81ea\u5b9a\u4e49\u4e3b\u9898\u81ea\u52a8\u521b\u5efa"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b98\u7f51\u5bf9\u4e8e\u6570\u636e\u5e93\u5386\u53f2\u4e3b\u9898\u867d\u53ea\u63d0\u5230MySQL\uff0cSQL server\uff0c\u4f46\u662f\u5b9e\u9645\u6d4b\u8bd5\u4e2d\u5982\u679cschema-changes.inventory5 \u4e3b\u9898\u88ab\u8bef\u5220\uff0cconnect\u5c06\u62a5\u9519\uff0c\u53ea\u6709\u5c06ddl\u8bed\u53e5\u91cd\u65b0\u63d2\u5165\u8fdb\u53bb\uff0c\u624d\u53ef\u4ee5\u6062\u590d\u6b63\u5e38\uff0c\u4e14oracle \u8fde\u63a5\u5668\u5feb\u7167\u76ee\u524d\u53ea\u652f\u6301schema_only\uff0cinitial \u3002\u4e34\u65f6\u5feb\u7167\u548c\u589e\u91cf\u5feb\u7167\u5c1a\u5728\u5b75\u5316\u4e2d")),(0,l.kt)("h4",{id:"344\u5173\u4e8e\u5bf9oracle-\u6570\u636e\u5e93\u538b\u529b\u7684\u95ee\u9898"},"3.4.4\u5173\u4e8e\u5bf9oracle \u6570\u636e\u5e93\u538b\u529b\u7684\u95ee\u9898"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/286d681d969542f88248bd3c5e622794.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6I-c6bifQ29kZXJz,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"\u793e\u533a\u5927\u4f6c\u7684\u56de\u590d"})),(0,l.kt)("h3",{id:"35-\u9519\u8bef\u5904\u7406"},"3.5 \u9519\u8bef\u5904\u7406"),(0,l.kt)("p",null,"\u5982\u51fa\u73b0\u4e0d\u80fd\u8bc6\u522boracle\u7248\u672c\u6216\u5176\u4ed6\u9519\u8bef\uff0c\u8bf7\u524d\u5f80xx01(post\u8bf7\u6c42\u540e\u7f00\u4e3a01)\u8282\u70b9\u6240\u5728Kafka logs\u76ee\u5f55\n\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tail -200 connectDistributed.out\n")),(0,l.kt)("p",null,"\u67e5\u770b\u5177\u4f53\u65e5\u5fd7"),(0,l.kt)("h4",{id:"351\u4e0d\u80fd\u8bc6\u522bjdbc\u9a71\u52a8"},"3.5.1\u4e0d\u80fd\u8bc6\u522bjdbc\u9a71\u52a8\uff1f"),(0,l.kt)("p",null,"\u5148\u53bb\u770boracle\u914d\u7f6e\uff0c\u786e\u4fddhost\uff0cport\uff0csid\u7b49\u65e0\u8bef\uff0c\u53e6\u5916\u5224\u65adojdbc8.jar\u662f\u5426\u88ab\u8bc6\u522b\u5230\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u542fKafka \u4ee5\u53caKafka connect \u6216\u76f4\u63a5\u65b0\u88c5\u4e00\u5957Kafka\u96c6\u7fa4\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,l.kt)("h4",{id:"352-kafka\u4ee5\u53cakafka-connect\u91cd\u542f\u95ee\u9898"},"3.5.2 Kafka\u4ee5\u53caKafka connect\u91cd\u542f\u95ee\u9898"),(0,l.kt)("p",null,"Kafka(\u66b4\u529b\u6740\u6b7b\uff0c\u91cd\u542f\u4f1a\u6709\u51b2\u7a81) \u4e0d\u5141\u8bb8kill -9 \u6740\u6389\u8fdb\u7a0b \u5e94\u4f7f\u7528\u547d\u4ee4\u505c\u6b62\uff0cKafka\u901a\u5e38\u5173\u95ed\u8f83\u6162\uff0c\u786e\u8ba4\u96c6\u7fa4Kafka\u5173\u95ed\u540e\u518d\u91cd\u542f \u5404\u4e2a\u8282\u70b9\u6267\u884c\u505c\u6b62\u6216\u91cd\u542f\uff0ccdh\u7248\u5728\u63a7\u5236\u53f0\u542f\u505c\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/opt/module/kafka/bin/kafka-server-stop.sh -daemon /opt/module/kafka/config/server.properties\n")),(0,l.kt)("p",null,"\u5982\u9700\u91cd\u542f Kafka connect\u670d\u52a1\nKafka connect kill -9 \u6740\u6389\u6240\u6709\u8282\u70b9\u5373\u53ef\n\u542f\u52a8\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/opt/module/kafka/bin/connect-distributed.sh -daemon /opt/module/kafka/config/connect-distributed.properties \n")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.7/connectors/oracle.html#oracle-overview%20%20%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BOracle%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.doc%20%28debezium%20to%20oracle%2019%20c%29%20%20https://blog.51cto.com/tiany/1552783%20%20https://www.codeleading.com/article/64945986138/%20%20https://my.oschina.net/dacoolbaby/blog/4320036%20%20https://my.oschina.net/dacoolbaby/blog/3191882%20%20https://www.cnblogs.com/yaowentao/p/14944739.html"},"https://debezium.io/documentation/reference/1.7/connectors/oracle.html#oracle-overview")),(0,l.kt)("p",null,"\u5c1a\u7845\u8c37\u5927\u6570\u636e\u6280\u672f\u4e4bOracle\u5b9e\u65f6\u540c\u6b65\u65b9\u6848.doc (debezium to oracle 19 c)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.51cto.com/tiany/1552783"},"https://blog.51cto.com/tiany/1552783")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.codeleading.com/article/64945986138/"},"https://www.codeleading.com/article/64945986138/")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://my.oschina.net/dacoolbaby/blog/4320036"},"https://my.oschina.net/dacoolbaby/blog/4320036")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://my.oschina.net/dacoolbaby/blog/3191882"},"https://my.oschina.net/dacoolbaby/blog/3191882")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/yaowentao/p/14944739.html"},"https://www.cnblogs.com/yaowentao/p/14944739.html")))}d.isMDXComponent=!0}}]);
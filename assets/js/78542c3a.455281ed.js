"use strict";(self.webpackChunkyugawa=self.webpackChunkyugawa||[]).push([[952],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return c}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),s=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(g,p(p({ref:e},u),{},{components:r})):n.createElement(g,p({ref:e},u))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,p[1]=o;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2155:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),p=["components"],o={id:"postgres-servers",title:"Postgres servers",sidebar_label:"Postgres servers"},i=void 0,s={unversionedId:"postgres-servers",id:"postgres-servers",title:"Postgres servers",description:"Hardware Info",source:"@site/docs/postgres-servers.md",sourceDirName:".",slug:"/postgres-servers",permalink:"/postgres-servers",draft:!1,editUrl:"https://github.com/jeremyhager/yugawa-website/edit/main/docs/postgres-servers.md",tags:[],version:"current",frontMatter:{id:"postgres-servers",title:"Postgres servers",sidebar_label:"Postgres servers"}},u={},d=[{value:"Hardware Info",id:"hardware-info",level:2},{value:"OS Info",id:"os-info",level:2},{value:"Snapshot info",id:"snapshot-info",level:2},{value:"postgresql1",id:"postgresql1",level:3},{value:"Package Info",id:"package-info",level:2},{value:"IPA info",id:"ipa-info",level:2}],m={toc:d};function c(t){var e=t.components,r=(0,a.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hardware-info"},"Hardware Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Asset"),(0,l.kt)("th",{parentName:"tr",align:null},"Capacity"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"12288 (MiB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vda"),(0,l.kt)("td",{parentName:"tr",align:null},"32GB")))),(0,l.kt)("h2",{id:"os-info"},"OS Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"postgresql1 Spec"),(0,l.kt)("th",{parentName:"tr",align:null},"postgresql2 Spec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"postgresql1.internal.virtnet"),(0,l.kt)("td",{parentName:"tr",align:null},"postgresql2.internal.virtnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP address"),(0,l.kt)("td",{parentName:"tr",align:null},"172.16.0.13/16"),(0,l.kt)("td",{parentName:"tr",align:null},"172.16.0.14/16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kernel"),(0,l.kt)("td",{parentName:"tr",align:null},"3.10.0-1160.11.1.el7.x86_64"),(0,l.kt)("td",{parentName:"tr",align:null},"3.10.0-1160.11.1.el7.x86_64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Release"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux 7 (Core)"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux 7 (Core)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Firewall services"),(0,l.kt)("td",{parentName:"tr",align:null},"dhcpv6-client http https ssh"),(0,l.kt)("td",{parentName:"tr",align:null},"dhcpv6-client postgresql ssh")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Firewall Ports"),(0,l.kt)("td",{parentName:"tr",align:null},"9999/tcp 9898/tcp 9000/tcp 9694/udp"),(0,l.kt)("td",{parentName:"tr",align:null},"9999/tcp 9898/tcp 9000/tcp 9694/udp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"eth0"),(0,l.kt)("td",{parentName:"tr",align:null},"eth0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Automatic updates"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Last updated"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-01"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Users"),(0,l.kt)("td",{parentName:"tr",align:null},"ldap, root (local)"),(0,l.kt)("td",{parentName:"tr",align:null},"ldap, root (local)")))),(0,l.kt)("h2",{id:"snapshot-info"},"Snapshot info"),(0,l.kt)("h3",{id:"postgresql1"},"postgresql1"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1609528151"),(0,l.kt)("td",{parentName:"tr",align:null},"Pre ldap/gssapi auth")))),(0,l.kt)("h2",{id:"package-info"},"Package Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Spec")))),(0,l.kt)("h2",{id:"ipa-info"},"IPA info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Spec")))))}c.isMDXComponent=!0}}]);
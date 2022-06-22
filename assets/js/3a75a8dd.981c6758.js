"use strict";(self.webpackChunkyugawa=self.webpackChunkyugawa||[]).push([[936],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),c=a,f=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},304:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"pfsense-router",title:"PfSense Router",sidebar_label:"PfSense Router"},p=void 0,u={unversionedId:"pfsense-router",id:"pfsense-router",title:"PfSense Router",description:"Hardware Info",source:"@site/docs/pfsense-router.md",sourceDirName:".",slug:"/pfsense-router",permalink:"/pfsense-router",draft:!1,editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/pfsense-router.md",tags:[],version:"current",frontMatter:{id:"pfsense-router",title:"PfSense Router",sidebar_label:"PfSense Router"},sidebar:"docs",previous:{title:"Ldap servers",permalink:"/ldap1-ldap2"},next:{title:"Creating new VM network",permalink:"/creating-new-network"}},d={},m=[{value:"Hardware Info",id:"hardware-info",level:2},{value:"OS Info",id:"os-info",level:2},{value:"Snapshot info",id:"snapshot-info",level:2},{value:"WAN Rules",id:"wan-rules",level:2}],s={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hardware-info"},"Hardware Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Asset"),(0,l.kt)("th",{parentName:"tr",align:null},"Capacity"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"12288 (MiB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vda"),(0,l.kt)("td",{parentName:"tr",align:null},"32GB")))),(0,l.kt)("h2",{id:"os-info"},"OS Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Spec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"router.internal.virtnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WAN IP (vnet0)"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.86.4/24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAN IP (vnet1)"),(0,l.kt)("td",{parentName:"tr",align:null},"172.16.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kernel"),(0,l.kt)("td",{parentName:"tr",align:null},"11.3-STABLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"vnet0, vnet1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Automatic updates"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Last updated"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-10-8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Users"),(0,l.kt)("td",{parentName:"tr",align:null},"admin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snapshot"),(0,l.kt)("td",{parentName:"tr",align:null},"1602169002")))),(0,l.kt)("h2",{id:"snapshot-info"},"Snapshot info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1608682916"),(0,l.kt)("td",{parentName:"tr",align:null},"(no special snapshot, created 2020-12-22)")))),(0,l.kt)("h2",{id:"wan-rules"},"WAN Rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Rule"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pass: TCP/443, 192.168.86.0/24 -> WAN interface"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow remote management from home LAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pass: TCP/22, WAN net -> LAN net"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow ssh into LAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pass: ICMP/Echo request, WAN net -> self"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow ping to firewall from LAN")))))}c.isMDXComponent=!0}}]);
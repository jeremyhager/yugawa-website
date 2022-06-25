"use strict";(self.webpackChunkyugawa=self.webpackChunkyugawa||[]).push([[557],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(v,o(o({ref:n},c),{},{components:t})):r.createElement(v,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2033:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"maintaining-dns",title:"Maintaining DNS",sidebar_label:"Maintaining DNS"},d=void 0,s={unversionedId:"maintaining-dns",id:"maintaining-dns",title:"Maintaining DNS",description:"This guide assumes you've already gone through setting up BIND tutorial.",source:"@site/docs/maintaining-dns.md",sourceDirName:".",slug:"/maintaining-dns",permalink:"/maintaining-dns",draft:!1,editUrl:"https://github.com/jeremyhager/yugawa-website/edit/main/docs/maintaining-dns.md",tags:[],version:"current",frontMatter:{id:"maintaining-dns",title:"Maintaining DNS",sidebar_label:"Maintaining DNS"},sidebar:"docs",previous:{title:"Setting up Bind",permalink:"/setting-up-bind"},next:{title:"Setting up dhcp",permalink:"/setting-up-dhcp"}},c={},p=[{value:"Add record in forward lookup zone file:",id:"add-record-in-forward-lookup-zone-file",level:3},{value:"Increment serial",id:"increment-serial",level:4},{value:"Add A record:",id:"add-a-record",level:4},{value:"Add record in reverse lookup zone file:",id:"add-record-in-reverse-lookup-zone-file",level:3},{value:"Increment serial",id:"increment-serial-1",level:4},{value:"Reload named",id:"reload-named",level:3}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide assumes you've already gone through ",(0,i.kt)("a",{parentName:"p",href:"/setting-up-bind"},"setting up BIND")," tutorial."))),(0,i.kt)("h3",{id:"add-record-in-forward-lookup-zone-file"},"Add record in forward lookup zone file:"),(0,i.kt)("h4",{id:"increment-serial"},"Increment serial"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always increase the serial number, it can never decrease."))),(0,i.kt)("p",null,"Serial numbers within the zone files must always be increased after editing.Technically speaking this is done in a master-slave scenario with multiple dns servers. When the change occurs in the master, the slave dns servers will see the serial number has increased and update as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'},"$TTL    604800\n@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (\n            2020091010  ; Serial //old value of serial was 2020091000\n//rest of config clipped for brevity\n")),(0,i.kt)("h4",{id:"add-a-record"},"Add A record:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'},"//beginning of config clipped for brevity\n; 172.16.0.0/16 - A records\nforeman.internal.virtnet.       IN      A       172.16.0.10\nldap1.internal.virtnet          IN      A       172.16.0.11 //new entry\nldap2.internal.virtnet          IN      A       172.16.0.12 //new entry\n")),(0,i.kt)("h3",{id:"add-record-in-reverse-lookup-zone-file"},"Add record in reverse lookup zone file:"),(0,i.kt)("h4",{id:"increment-serial-1"},"Increment serial"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/16.172.rev"',title:'"/var/named/zones/16.172.rev"'},"$TTL    604800\n@       IN      SOA     internal.virtnet. admin.internal.virtnet. (\n            2020091010  ; Serial //old value of serial was 2020091000\n//rest of config clipped for brevity\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/16.172.rev"',title:'"/var/named/zones/16.172.rev"'},"//beginning of config clipped for brevity\n; PTR Records\n0.8       IN      PTR     dns-dhcp.internal.virtnet.      ; 172.16.0.8\n0.10      IN      PTR     foreman.internal.virtnet.       ; 172.16.0.10\n0.11      IN      PTR     ldap1.internal.virtnet.         ; 172.16.0.11\n0.12      IN      PTR     ldap2.internal.virtnet.         ; 172.16.0.12\n")),(0,i.kt)("h3",{id:"reload-named"},"Reload named"),(0,i.kt)("p",null,"It is possible to restart ",(0,i.kt)("inlineCode",{parentName:"p"},"named"),", however if the server is both authoritative for the zone and recursive for users then restarting ",(0,i.kt)("inlineCode",{parentName:"p"},"named")," will discards cached entries from other domains. As such, it is advisable to use ",(0,i.kt)("inlineCode",{parentName:"p"},"rdnc reload")," to keep the cached entries and update changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rndc reload\n")))}u.isMDXComponent=!0}}]);
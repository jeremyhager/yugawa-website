"use strict";(self.webpackChunkyugawa=self.webpackChunkyugawa||[]).push([[912],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8545:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"setting-up-bind",title:"Setting up Bind",sidebar_label:"Setting up Bind"},s=void 0,d={unversionedId:"setting-up-bind",id:"setting-up-bind",title:"Setting up Bind",description:"This guide assumes you've already gone through the base vm server setup tutorial.",source:"@site/docs/setting-up-bind.md",sourceDirName:".",slug:"/setting-up-bind",permalink:"/setting-up-bind",draft:!1,editUrl:"https://github.com/jeremyhager/yugawa-website/edit/master/docs/setting-up-bind.md",tags:[],version:"current",frontMatter:{id:"setting-up-bind",title:"Setting up Bind",sidebar_label:"Setting up Bind"},sidebar:"docs",previous:{title:"Base vm server setup",permalink:"/base-vm-server-setup"},next:{title:"Maintaining DNS",permalink:"/maintaining-dns"}},c={},p=[{value:"Install BIND",id:"install-bind",level:3},{value:"Configure named.conf",id:"configure-namedconf",level:3},{value:"Add an ACL",id:"add-an-acl",level:4},{value:"Configure <code>options</code> statement",id:"configure-options-statement",level:4},{value:"Include a local zones file",id:"include-a-local-zones-file",level:4},{value:"Create local named file",id:"create-local-named-file",level:3},{value:"Forward lookup zone",id:"forward-lookup-zone",level:3},{value:"Create zone directory",id:"create-zone-directory",level:4},{value:"Create forward lookup zone file",id:"create-forward-lookup-zone-file",level:4},{value:"Reverse zone file",id:"reverse-zone-file",level:3},{value:"Check BIND syntax",id:"check-bind-syntax",level:3},{value:"Check for zone errors",id:"check-for-zone-errors",level:3},{value:"Start and Enable BIND",id:"start-and-enable-bind",level:3},{value:"Set DNS to resolve to self",id:"set-dns-to-resolve-to-self",level:3},{value:"Allow DNS in firewall",id:"allow-dns-in-firewall",level:3},{value:"Testing",id:"testing",level:3},{value:"Source",id:"source",level:3}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This guide assumes you've already gone through the ",(0,l.kt)("a",{parentName:"p",href:"/base-vm-server-setup"},"base vm server setup")," tutorial."))),(0,l.kt)("h3",{id:"install-bind"},"Install BIND"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install bind bind-utils\n")),(0,l.kt)("p",null,"This will install bind on a machine and any dependences needed, as well as its accompanying utility package ",(0,l.kt)("inlineCode",{parentName:"p"},"bind-utils"),"."),(0,l.kt)("h3",{id:"configure-namedconf"},"Configure named.conf"),(0,l.kt)("h4",{id:"add-an-acl"},"Add an ACL"),(0,l.kt)("p",null,"Allows dns request from the local network the BIND server is on. If this is being set up on a home network, then any device on the home network will be able to query the server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi /etc/named.conf\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'},'acl "trusted" {\n    localnets;\n};\n')),(0,l.kt)("h4",{id:"configure-options-statement"},"Configure ",(0,l.kt)("inlineCode",{parentName:"h4"},"options")," statement"),(0,l.kt)("p",null,'Allow queries to be made on the local network interface and allow any queries from the "trusted" acl.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'},"options {\n    listen-on port 53 { 127.0.0.1; 172.16.0.8;}; //add the local network IP\n    ... //do NOT include these 3 dots in the file, this is just just to indicate there is likely lines between these options.\n    allow-query     { trusted; };\n    ...\n}\n")),(0,l.kt)("h4",{id:"include-a-local-zones-file"},"Include a local zones file"),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"named.conf.local")," at the bottom of the ",(0,l.kt)("inlineCode",{parentName:"p"},"named.conf")," file. This will be where zone files will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'},'include "named.conf.local";\n')),(0,l.kt)("p",null,"Note this is a relative path - so this will likely be in ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/named/"),"."),(0,l.kt)("h3",{id:"create-local-named-file"},"Create local named file"),(0,l.kt)("p",null,"This file will serve the local subnet the BIND server will be on. First zone statement will link the ",(0,l.kt)("inlineCode",{parentName:"p"},"internal.virtnet")," domain file, second zone statement will create a reverse zone file. Both of these files will contain static information on the hosts we specify, specifically for the environments created within the how-to's series."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/named.conf.local"',title:'"/var/named/named.conf.local"'},'# This file should be empty when first created\nzone "internal.virtnet" {\n    type master;\n    file "zones/internal.virtnet"; //relative zone file path\n};\n\nzone "16.172.in-addr.arpa" {\n    type master;\n    file "zones/16.172.rev";  //relative reverse zone file path for 172.16.0.0/16 subnet\n};\n')),(0,l.kt)("h3",{id:"forward-lookup-zone"},"Forward lookup zone"),(0,l.kt)("h4",{id:"create-zone-directory"},"Create zone directory"),(0,l.kt)("p",null,"There is not /var/named/zones by default, so it must be created:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /var/named/zones\n")),(0,l.kt)("h4",{id:"create-forward-lookup-zone-file"},"Create forward lookup zone file"),(0,l.kt)("p",null,"For the serial number, a common practice is to use the current date. For example, the serial number below means the file was last edited 2020, September 10th at 00 hours.\nThis has the added benefit fin that someone reading the config file will know right away when the last change was."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'},"$TTL    604800\n@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (\n            2020091000  ; Serial\n            604800      ; Refresh\n            86400       ; Retry\n            2419200     ; Expire\n            604800 )    ; Negative Cache TTL\n; name servers - NS records\n    IN      NS      dns-dhcp.internal.virtnet.\n; name servers - A records\ndns-dhcp.internal.virtnet.      IN      A       172.16.0.8\n\n; 172.16.0.0/16 - A records\nforeman.internal.virtnet.       IN      A       172.16.0.10\nldap1.internal.virtnet.         IN      A       172.16.0.11\nldap2.internal.virtnet.         IN      A       172.16.0.12\npostgresql1.internal.virtnet.   IN      A       172.16.0.13\npostgresql2.internal.virtnet.   IN      A       172.16.0.14\niscsitgt-nfs.internal.virtnet.  IN      A       172.16.0.15\nbacula.internal.virtnet.        IN      A       172.16.0.16\nhttpd1.internal.virtnet.        IN      A       172.16.0.17\nhttpd2.internal.virtnet.        IN      A       172.16.0.18\ntomcat1.internal.virtnet.       IN      A       172.16.0.19\ntomcat2.internal.virtnet.       IN      A       172.16.0.20\niptables.internal.virtnet.      IN      A       172.16.0.21\npostfix.internal.virtnet.       IN      A       172.16.0.22\nnagios.internal.virtnet.        IN      A       172.16.0.23\nsyslog.internal.virtnet.        IN      A       172.16.0.24\n")),(0,l.kt)("h3",{id:"reverse-zone-file"},"Reverse zone file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/16.172.rev"',title:'"/var/named/zones/16.172.rev"'},"$TTL    604800\n@       IN      SOA     internal.virtnet. admin.internal.virtnet. (\n                        2020091000  ; Serial\n                        604800      ; Refresh\n                        86400       ; Retry\n                        2419200     ; Expire\n                    604800 )        ; Negative Cache TTL\n; name servers\n        IN      NS      dns-dhcp.internal.virtnet.\n\n; PTR Records\n8.0     IN      PTR     dns-dhcp.internal.virtnet.      ; 172.16.0.8\n10.0    IN      PTR     foreman.internal.virtnet.       ; 172.16.0.10\n11.0    IN      PTR     ldap1.internal.virtnet.         ; 172.16.0.11\n12.0    IN      PTR     ldap2.internal.virtnet.         ; 172.16.0.12\n13.0    IN      PTR     postgresql1.internal.virtnet.   ; 172.16.0.13\n14.0    IN      PTR     postgresql2.internal.virtnet.   ; 172.16.0.14\n15.0    IN      PTR     iscsitgt-nfs.internal.virtnet.  ; 172.16.0.15\n16.0    IN      PTR     bacula.internal.virtnet.        ; 172.16.0.16\n17.0    IN      PTR     httpd1.internal.virtnet.        ; 172.16.0.17\n18.0    IN      PTR     httpd2.internal.virtnet.        ; 172.16.0.18\n19.0    IN      PTR     tomcat1.internal.virtnet.       ; 172.16.0.19\n20.0    IN      PTR     tomcat2.internal.virtnet.       ; 172.16.0.20\n21.0    IN      PTR     iptables.internal.virtnet.      ; 172.16.0.21\n22.0    IN      PTR     postfix.internal.virtnet.       ; 172.16.0.22\n23.0    IN      PTR     nagios.internal.virtnet.        ; 172.16.0.23\n24.0    IN      PTR     syslog.internal.virtnet.        ; 172.16.0.24\n")),(0,l.kt)("h3",{id:"check-bind-syntax"},"Check BIND syntax"),(0,l.kt)("p",null,"Double-check for any errors in the configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo named-checkconf\n")),(0,l.kt)("p",null,"If there are errors, ",(0,l.kt)("inlineCode",{parentName:"p"},"named-checkconf")," will show something similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/etc/named.conf:66: missing ';' before end of file\n")),(0,l.kt)("p",null,"In this case, the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/named.conf")," only had 65 lines, so ",(0,l.kt)("inlineCode",{parentName:"p"},"named-checkconf")," is actually specifying the linked file ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/named/named.conf.local"),". The file was missing a semicolon at the end."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"named-checkconf")," has no response, then the configuration does not have any syntax errors."),(0,l.kt)("h3",{id:"check-for-zone-errors"},"Check for zone errors"),(0,l.kt)("p",null,"If the configuration syntax checks out, it's time to check for errors in the zone files."),(0,l.kt)("p",null,"First check the forward lookup zone:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo named-checkzone internal.virtnet /var/named/zones/internal.virtnet\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"zone internal.virtnet/IN: loaded serial 3\nOK\n")),(0,l.kt)("p",null,"Now check the reverse lookup zone:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo named-checkzone 16.172.in-addr.arpa /var/named/zones/16.172.rev\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"zone 16.172.in-addr.arpa/IN: loaded serial 3\nOK\n")),(0,l.kt)("p",null,"If both commands reply ",(0,l.kt)("inlineCode",{parentName:"p"},"OK"),", then it's time to start BIND."),(0,l.kt)("h3",{id:"start-and-enable-bind"},"Start and Enable BIND"),(0,l.kt)("p",null,"First enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"named")," service, then start the service so it's running."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable named\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start named\n")),(0,l.kt)("h3",{id:"set-dns-to-resolve-to-self"},"Set DNS to resolve to self"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/sysconfig/network-scripts/ifcfg-eth0"',title:'"/etc/sysconfig/network-scripts/ifcfg-eth0"'},"#Change DNS1 to localhost and optionally change DNS2 to secondary dns host\nDNS1=127.0.0.1 #Localhost\nDNS2=172.16.0.1 #local DNS server, eg. router\n")),(0,l.kt)("p",null,"Once the changes are complete, restart the network:"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Heads up!")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are connected via ssh you will ",(0,l.kt)("em",{parentName:"p"},"may")," loose your connection. Be sure there is a way to access the vm without ssh (eg. using the console on the hypervisor) incase of a malformed network config file."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart network\n")),(0,l.kt)("h3",{id:"allow-dns-in-firewall"},"Allow DNS in firewall"),(0,l.kt)("p",null,"In order to respond to DNS requests, the final step is to add the dns service in the firewall:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo firewall-cmd --permanent --add-service=dns\n")),(0,l.kt)("p",null,"Now restart the firewall so the changes take effect:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo firewall-cmd --reload\n")),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("p",null,"Time to test that BIND can respond to requests externally and reverse-lookups work:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="external host"',title:'"external','host"':!0},"nslookup foreman.internal.virtnet 172.16.0.8\n")),(0,l.kt)("p",null,"A response should look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Server:         172.16.0.8\nAddress:        172.16.0.8#53\n\nName:   foreman.internal.virtnet\nAddress: 172.16.0.10\n")),(0,l.kt)("p",null,"Finally, test the reverse lookup zones are working properly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nslookup 172.16.0.10 172.16.0.8\n")),(0,l.kt)("p",null,"Response should look similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"10.0.16.172.in-addr.arpa        name = foreman.internal.virtnet.\n")),(0,l.kt)("h3",{id:"source"},"Source"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-centos-7"},"How to configure BIND"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Note the tutorial here is only for 1 DNS server, while on digital ocean is for 2.")))))}m.isMDXComponent=!0}}]);
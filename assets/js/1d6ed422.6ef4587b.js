"use strict";(self.webpackChunkyugawa=self.webpackChunkyugawa||[]).push([[803],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7525:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"dns-dhcp",title:"dns-dhcp configuration",sidebar_label:"dns-dhcp Configuration"},d=void 0,s={unversionedId:"dns-dhcp",id:"dns-dhcp",title:"dns-dhcp configuration",description:"Hardware Info",source:"@site/docs/dns-dhcp.md",sourceDirName:".",slug:"/dns-dhcp",permalink:"/dns-dhcp",draft:!1,editUrl:"https://github.com/jeremyhager/yugawa-website/edit/main/docs/dns-dhcp.md",tags:[],version:"current",frontMatter:{id:"dns-dhcp",title:"dns-dhcp configuration",sidebar_label:"dns-dhcp Configuration"},sidebar:"docs",previous:{title:"Foreman Configuration",permalink:"/foreman"},next:{title:"Ldap servers",permalink:"/ldap1-ldap2"}},p={},c=[{value:"Hardware Info",id:"hardware-info",level:2},{value:"OS Info",id:"os-info",level:2},{value:"Package Info",id:"package-info",level:2},{value:"Snapshot info",id:"snapshot-info",level:2},{value:"DNS Configuration",id:"dns-configuration",level:2},{value:"/etc/named.conf",id:"etcnamedconf",level:3},{value:"named.conf.local",id:"namedconflocal",level:3},{value:"zones/internal.virtnet forward lookup zone",id:"zonesinternalvirtnet-forward-lookup-zone",level:3},{value:"zones/16.172.rev reverse lookup zone",id:"zones16172rev-reverse-lookup-zone",level:3},{value:"DHCP Configuration",id:"dhcp-configuration",level:2},{value:"Other configurations",id:"other-configurations",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hardware-info"},"Hardware Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Asset"),(0,l.kt)("th",{parentName:"tr",align:null},"Capacity"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"2048 (MiB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vda"),(0,l.kt)("td",{parentName:"tr",align:null},"12GB")))),(0,l.kt)("h2",{id:"os-info"},"OS Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Spec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"dns-dhcp.internal.virtnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,l.kt)("td",{parentName:"tr",align:null},"172.16.0.8/24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kernel"),(0,l.kt)("td",{parentName:"tr",align:null},"3.10.0-1062.el7.x86_64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Release"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 7.8.2003 (Core)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Firewall services"),(0,l.kt)("td",{parentName:"tr",align:null},"dhcpv6-client dns ssh")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},"eth0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Automatic updates"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Last updated"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-09-13")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Users"),(0,l.kt)("td",{parentName:"tr",align:null},"jeremy, root (disabled)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snapshot"),(0,l.kt)("td",{parentName:"tr",align:null},"1600037836 (dns installed and configured)")))),(0,l.kt)("h2",{id:"package-info"},"Package Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Spec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bind"),(0,l.kt)("td",{parentName:"tr",align:null},"bind.x86_64 32:9.11.4-16.P2.el7_8.6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bind-utils"),(0,l.kt)("td",{parentName:"tr",align:null},"bind-utils.x86_64 32:9.11.4-16.P2.el7_8.6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dhcp"),(0,l.kt)("td",{parentName:"tr",align:null},"12:4.2.5-79.el7.centos")))),(0,l.kt)("h2",{id:"snapshot-info"},"Snapshot info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1608682843"),(0,l.kt)("td",{parentName:"tr",align:null},"Post ldap enrollment")))),(0,l.kt)("h2",{id:"dns-configuration"},"DNS Configuration"),(0,l.kt)("h3",{id:"etcnamedconf"},"/etc/named.conf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'},'acl "trusted" {\n    localnets;\n};\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'},"options {\n    listen-on port 53 { 127.0.0.1; 172.16.0.8;};\n    //...\n    allow-query     { trusted; };\n    //...\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/etc/named.conf"',title:'"/etc/named.conf"'},'//...\ninclude "named.conf.local";\n')),(0,l.kt)("h3",{id:"namedconflocal"},"named.conf.local"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/named.conf.local"',title:'"/var/named/named.conf.local"'},'zone "internal.virtnet" {\n    type master;\n    file "zones/internal.virtnet"; //relative zone file path\n};\n\nzone "16.172.in-addr.arpa" {\n    type master;\n    file "zones/16.172.rev";  //relative reverse zone file path for 172.16.0.0/16 subnet\n};\n')),(0,l.kt)("h3",{id:"zonesinternalvirtnet-forward-lookup-zone"},"zones/internal.virtnet forward lookup zone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/internal.virtnet"',title:'"/var/named/zones/internal.virtnet"'},'$TTL    604800\n@       IN      SOA     dns-dhcp.internal.virtnet. admin.internal.virtnet. (\n            2020121815  ; Serial\n            604800      ; Refresh\n            86400       ; Retry\n            2419200     ; Expire\n            604800 )    ; Negative Cache TTL\n; name servers - NS records\n    IN      NS      dns-dhcp.internal.virtnet.\n; name servers - A records\ndns-dhcp.internal.virtnet.      IN      A       172.16.0.8\n\n; 172.16.0.0/16 - A records\nforeman.internal.virtnet.       IN      A       172.16.0.10\nldap1.internal.virtnet.         IN      A       172.16.0.11\nldap2.internal.virtnet.         IN      A       172.16.0.12\npostgresql1.internal.virtnet.   IN      A       172.16.0.13\npostgresql2.internal.virtnet.   IN      A       172.16.0.14\niscsitgt-nfs.internal.virtnet.  IN      A       172.16.0.15\nbacula.internal.virtnet.        IN      A       172.16.0.16\nhttpd1.internal.virtnet.        IN      A       172.16.0.17\nhttpd2.internal.virtnet.        IN      A       172.16.0.18\ntomcat1.internal.virtnet.       IN      A       172.16.0.19\ntomcat2.internal.virtnet.       IN      A       172.16.0.20\niptables.internal.virtnet.      IN      A       172.16.0.21\npostfix.internal.virtnet.       IN      A       172.16.0.22\nnagios.internal.virtnet.        IN      A       172.16.0.23\nsyslog.internal.virtnet.        IN      A       172.16.0.24\n\n; domain info\n_kerberos-master._tcp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos-master._udp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos._tcp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos._udp.internal.virtnet. 86400 IN SRV 0 100 88 ldap1.internal.virtnet.\n_kerberos.internal.virtnet. 86400 IN TXT "INTERNAL.VIRTNET"\n_kpasswd._tcp.internal.virtnet. 86400 IN SRV 0 100 464 ldap1.internal.virtnet.\n_kpasswd._udp.internal.virtnet. 86400 IN SRV 0 100 464 ldap1.internal.virtnet.\n_ldap._tcp.internal.virtnet. 86400 IN SRV 0 100 389 ldap1.internal.virtnet.\n_ntp._udp.internal.virtnet. 86400 IN SRV 0 100 123 ldap1.internal.virtnet.\nipa-ca.internal.virtnet. 86400 IN A 172.16.0.11\n')),(0,l.kt)("h3",{id:"zones16172rev-reverse-lookup-zone"},"zones/16.172.rev reverse lookup zone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/var/named/zones/16.172.rev"',title:'"/var/named/zones/16.172.rev"'},"$TTL    604800\n@       IN      SOA     internal.virtnet. admin.internal.virtnet. (\n                        2020121815  ; Serial\n                        604800      ; Refresh\n                        86400       ; Retry\n                        2419200     ; Expire\n                    604800 )        ; Negative Cache TTL\n; name servers\n        IN      NS      dns-dhcp.internal.virtnet.\n\n; PTR Records\n8.0     IN      PTR     dns-dhcp.internal.virtnet.      ; 172.16.0.8\n10.0    IN      PTR     foreman.internal.virtnet.       ; 172.16.0.10\n11.0    IN      PTR     ldap1.internal.virtnet.         ; 172.16.0.11\n12.0    IN      PTR     ldap2.internal.virtnet.         ; 172.16.0.12\n13.0    IN      PTR     postgresql1.internal.virtnet.   ; 172.16.0.13\n14.0    IN      PTR     postgresql2.internal.virtnet.   ; 172.16.0.14\n15.0    IN      PTR     iscsitgt-nfs.internal.virtnet.  ; 172.16.0.15\n16.0    IN      PTR     bacula.internal.virtnet.        ; 172.16.0.16\n17.0    IN      PTR     httpd1.internal.virtnet.        ; 172.16.0.17\n18.0    IN      PTR     httpd2.internal.virtnet.        ; 172.16.0.18\n19.0    IN      PTR     tomcat1.internal.virtnet.       ; 172.16.0.19\n20.0    IN      PTR     tomcat2.internal.virtnet.       ; 172.16.0.20\n21.0    IN      PTR     iptables.internal.virtnet.      ; 172.16.0.21\n22.0    IN      PTR     postfix.internal.virtnet.       ; 172.16.0.22\n23.0    IN      PTR     nagios.internal.virtnet.        ; 172.16.0.23\n24.0    IN      PTR     syslog.internal.virtnet.        ; 172.16.0.24\n")),(0,l.kt)("h2",{id:"dhcp-configuration"},"DHCP Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-clike",metastring:'title="/etc/dhcp/dhcpd.conf"',title:'"/etc/dhcp/dhcpd.conf"'},'#\n# DHCP Server Configuration file.\n#   see /usr/share/doc/dhcp*/dhcpd.conf.example\n#   see dhcpd.conf(5) man page\n#\noption domain-name "internal.virtnet"; #default domain\n#option domain-name-servers 172.16.0.8; #dns server(s)\n#option subnet-mask 255.255.0.0; #subnet mask for the subnet\ndefault-lease-time 14400; #lease of 14400 seconds, or 4 hours\nmax-lease-time 28800; #max lease of 8 hours\nallow bootp; #allow clients to run a pxe boot\n\n#if the client is PXE, sent it to the .10 server and ask for the "pxelinux.0" file\nclass "pxeClients" {\n    match if substring(option vendor-class-identifier, 0,9) = "PXEClient";\n    next-server 172.16.0.10;\n    filename "pxelinux.0";\n}\n\n#subnet for the 172.16.0.0/16 network\nsubnet 172.16.0.0 netmask 255.255.0.0 {\n    pool {\n        range 172.16.1.0 172.16.1.255; #dhcp lease range\n        option broadcast-address 172.16.255.255; #network broadcast address\n        option routers 172.16.0.2; #router or gateway configuration\n        option domain-name-servers 172.16.0.8;\n        #option dynamic-bootp 172.16.1.0 172.16.1.16;\n        #bootp or pxe clients will use the addresses 1.0 to 1.24\n        allow unknown-clients; #allow unknown clients\n        #allow any; #only any member on the network\n        default-lease-time 14400;\n        max-lease-time 28800;\n        next-server 172.16.0.10;\n        filename "pxelinux.0";\n    }\n}\n\n#Static IP assignments\nhost ldap1 {\n    hardware ethernet 52:54:00:00:00:11;\n    fixed-address 172.16.0.11;\n}\nhost ldap2 {\n    hardware ethernet 52:54:00:00:00:12;\n    fixed-address 172.16.0.12;\n}\nhost postgresql1 {\n    hardware ethernet 52:54:00:00:00:13;\n    fixed-address 172.16.0.13;\n}\nhost postgresql2 {\n    hardware ethernet 52:54:00:00:00:14;\n    fixed-address 172.16.0.14;\n}\nhost iscsitgt-nfs {\n    hardware ethernet 52:54:00:00:00:15;\n    fixed-address 172.16.0.15;\n}\nhost bacula {\n    hardware ethernet 52:54:00:00:00:16;\n    fixed-address 172.16.0.16;\n}\nhost httpd1 {\n    hardware ethernet 52:54:00:00:00:17;\n    fixed-address 172.16.0.17;\n}\nhost httpd2 {\n    hardware ethernet 52:54:00:00:00:18;\n    fixed-address 172.16.0.18;\n}\nhost tomcat1 {\n    hardware ethernet 52:54:00:00:00:19;\n    fixed-address 172.16.0.19;\n}\nhost tomcat2 {\n    hardware ethernet 52:54:00:00:00:20;\n    fixed-address 172.16.0.20;\n}\nhost iptables {\n    hardware ethernet 52:54:00:00:00:21;\n    fixed-address 172.16.0.21;\n}\nhost postfix {\n    hardware ethernet 52:54:00:00:00:22;\n    fixed-address 172.16.0.22;\n}\nhost nagios {\n    hardware ethernet 52:54:00:00:00:23;\n    fixed-address 172.16.0.23;\n}\nhost syslog {\n    hardware ethernet 52:54:00:00:00:24;\n    fixed-address 172.16.0.24;\n}\n')),(0,l.kt)("h2",{id:"other-configurations"},"Other configurations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/sysconfig/network-scripts/ifcfg-eth0"',title:'"/etc/sysconfig/network-scripts/ifcfg-eth0"'},'DEVICE=eth0\nHWADDR=52:54:00:01:49:44\nBOOTPROTO=static\nONBOOT="yes"\nIPADDR=172.16.0.8\nNETMASK=255.255.0.0\nNETWORK=172.16.0.0\nBROADCAST=172.16.255.255\nDNS1=127.0.0.1\nGATEWAY=172.16.0.2\n')))}m.isMDXComponent=!0}}]);
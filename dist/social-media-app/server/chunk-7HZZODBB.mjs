import './polyfills.server.mjs';
import{D as Ve,F as Ge,Fa as qe,G as P,Ga as Qe,H as b,J as F,L as v,M as y,O as We,Pa as S,Q as Ye,Qa as E,R as Ze,Y as Ke,_ as Xe,_a as et,c as me,ea as ye,f as xe,ga as Je,i as Ue,j as Q,ja as Ee,n as W,s as $e,sa as ee,u as je,x as ze,za as He}from"./chunk-WKOQ6WKO.mjs";import{a as H,d as ke,g as q}from"./chunk-X2SEQXRR.mjs";var st=null;function we(){return st}function xr(e){st??=e}var tt=class{};var le=new F(""),ot=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>y(zt),providedIn:"platform"})}return e})();var zt=(()=>{class e extends ot{_location;_history;_doc=y(le);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return we().getBaseHref(this._doc)}onPopState(n){let r=we().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=we().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,i){this._history.pushState(n,r,i)}replaceState(n,r,i){this._history.replaceState(n,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function at(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function nt(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function z(e){return e&&e[0]!=="?"?`?${e}`:e}var ve=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:()=>y(Gt),providedIn:"root"})}return e})(),Vt=new F(""),Gt=(()=>{class e extends ve{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??y(le).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return at(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+z(this._platformLocation.search),i=this._platformLocation.hash;return i&&n?`${r}${i}`:r}pushState(n,r,i,o){let s=this.prepareExternalUrl(i+z(o));this._platformLocation.pushState(n,r,s)}replaceState(n,r,i,o){let s=this.prepareExternalUrl(i+z(o));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||e)(v(ot),v(Vt,8))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Wt=(()=>{class e{_subject=new xe;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=Kt(nt(rt(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+z(r))}normalize(n){return e.stripTrailingSlash(Zt(this._basePath,rt(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",i=null){this._locationStrategy.pushState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+z(r)),i)}replaceState(n,r="",i=null){this._locationStrategy.replaceState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+z(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(i=>i(n,r))}subscribe(n,r,i){return this._subject.subscribe({next:n,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=z;static joinWithSlash=at;static stripTrailingSlash=nt;static \u0275fac=function(r){return new(r||e)(v(ve))};static \u0275prov=b({token:e,factory:()=>Yt(),providedIn:"root"})}return e})();function Yt(){return new Wt(v(ve))}function Zt(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function rt(e){return e.replace(/\/index.html$/,"")}function Kt(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var A=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(A||{}),g=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(g||{}),_=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(_||{}),B={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Xt(e){return S(e)[E.LocaleId]}function Jt(e,t,n){let r=S(e),i=[r[E.DayPeriodsFormat],r[E.DayPeriodsStandalone]],o=R(i,t);return R(o,n)}function Ht(e,t,n){let r=S(e),i=[r[E.DaysFormat],r[E.DaysStandalone]],o=R(i,t);return R(o,n)}function qt(e,t,n){let r=S(e),i=[r[E.MonthsFormat],r[E.MonthsStandalone]],o=R(i,t);return R(o,n)}function Qt(e,t){let r=S(e)[E.Eras];return R(r,t)}function te(e,t){let n=S(e);return R(n[E.DateFormat],t)}function ne(e,t){let n=S(e);return R(n[E.TimeFormat],t)}function re(e,t){let r=S(e)[E.DateTimeFormat];return R(r,t)}function fe(e,t){let n=S(e),r=n[E.NumberSymbols][t];if(typeof r>"u"){if(t===B.CurrencyDecimal)return n[E.NumberSymbols][B.Decimal];if(t===B.CurrencyGroup)return n[E.NumberSymbols][B.Group]}return r}function ut(e){if(!e[E.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[E.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function en(e){let t=S(e);return ut(t),(t[E.ExtraData][2]||[]).map(r=>typeof r=="string"?Ce(r):[Ce(r[0]),Ce(r[1])])}function tn(e,t,n){let r=S(e);ut(r);let i=[r[E.ExtraData][0],r[E.ExtraData][1]],o=R(i,t)||[];return R(o,n)||[]}function R(e,t){for(let n=t;n>-1;n--)if(typeof e[n]<"u")return e[n];throw new Error("Locale data API: locale data undefined")}function Ce(e){let[t,n]=e.split(":");return{hours:+t,minutes:+n}}var nn=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ie={},rn=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function sn(e,t,n,r){let i=gn(e);t=L(n,t)||t;let s=[],u;for(;t;)if(u=rn.exec(t),u){s=s.concat(u.slice(1));let f=s.pop();if(!f)break;t=f}else{s.push(t);break}let a=i.getTimezoneOffset();r&&(a=dt(r,a),i=hn(i,r,!0));let h="";return s.forEach(f=>{let D=ln(f);h+=D?D(i,n,a):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),h}function ce(e,t,n){let r=new Date(0);return r.setFullYear(e,t,n),r.setHours(0,0,0),r}function L(e,t){let n=Xt(e);if(ie[n]??={},ie[n][t])return ie[n][t];let r="";switch(t){case"shortDate":r=te(e,_.Short);break;case"mediumDate":r=te(e,_.Medium);break;case"longDate":r=te(e,_.Long);break;case"fullDate":r=te(e,_.Full);break;case"shortTime":r=ne(e,_.Short);break;case"mediumTime":r=ne(e,_.Medium);break;case"longTime":r=ne(e,_.Long);break;case"fullTime":r=ne(e,_.Full);break;case"short":let i=L(e,"shortTime"),o=L(e,"shortDate");r=se(re(e,_.Short),[i,o]);break;case"medium":let s=L(e,"mediumTime"),u=L(e,"mediumDate");r=se(re(e,_.Medium),[s,u]);break;case"long":let a=L(e,"longTime"),h=L(e,"longDate");r=se(re(e,_.Long),[a,h]);break;case"full":let f=L(e,"fullTime"),D=L(e,"fullDate");r=se(re(e,_.Full),[f,D]);break}return r&&(ie[n][t]=r),r}function se(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(n,r){return t!=null&&r in t?t[r]:n})),e}function I(e,t,n="-",r,i){let o="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,o=n));let s=String(e);for(;s.length<t;)s="0"+s;return r&&(s=s.slice(s.length-t)),o+s}function on(e,t){return I(e,3).substring(0,t)}function w(e,t,n=0,r=!1,i=!1){return function(o,s){let u=an(e,o);if((n>0||u>-n)&&(u+=n),e===3)u===0&&n===-12&&(u=12);else if(e===6)return on(u,t);let a=fe(s,B.MinusSign);return I(u,t,a,r,i)}}function an(e,t){switch(e){case 0:return t.getFullYear();case 1:return t.getMonth();case 2:return t.getDate();case 3:return t.getHours();case 4:return t.getMinutes();case 5:return t.getSeconds();case 6:return t.getMilliseconds();case 7:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function p(e,t,n=A.Format,r=!1){return function(i,o){return un(i,o,e,t,n,r)}}function un(e,t,n,r,i,o){switch(n){case 2:return qt(t,i,r)[e.getMonth()];case 1:return Ht(t,i,r)[e.getDay()];case 0:let s=e.getHours(),u=e.getMinutes();if(o){let h=en(t),f=tn(t,i,r),D=h.findIndex(C=>{if(Array.isArray(C)){let[c,T]=C,d=s>=c.hours&&u>=c.minutes,l=s<T.hours||s===T.hours&&u<T.minutes;if(c.hours<T.hours){if(d&&l)return!0}else if(d||l)return!0}else if(C.hours===s&&C.minutes===u)return!0;return!1});if(D!==-1)return f[D]}return Jt(t,i,r)[s<12?0:1];case 3:return Qt(t,r)[e.getFullYear()<=0?0:1];default:let a=n;throw new Error(`unexpected translation type ${a}`)}}function oe(e){return function(t,n,r){let i=-1*r,o=fe(n,B.MinusSign),s=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case 0:return(i>=0?"+":"")+I(s,2,o)+I(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+I(s,1,o);case 2:return"GMT"+(i>=0?"+":"")+I(s,2,o)+":"+I(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+I(s,2,o)+":"+I(Math.abs(i%60),2,o);default:throw new Error(`Unknown zone width "${e}"`)}}}var cn=0,ue=4;function dn(e){let t=ce(e,cn,1).getDay();return ce(e,0,1+(t<=ue?ue:ue+7)-t)}function ct(e){let t=e.getDay(),n=t===0?-3:ue-t;return ce(e.getFullYear(),e.getMonth(),e.getDate()+n)}function Fe(e,t=!1){return function(n,r){let i;if(t){let o=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,s=n.getDate();i=1+Math.floor((s+o)/7)}else{let o=ct(n),s=dn(o.getFullYear()),u=o.getTime()-s.getTime();i=1+Math.round(u/6048e5)}return I(i,e,fe(r,B.MinusSign))}}function ae(e,t=!1){return function(n,r){let o=ct(n).getFullYear();return I(o,e,fe(r,B.MinusSign),t)}}var Ae={};function ln(e){if(Ae[e])return Ae[e];let t;switch(e){case"G":case"GG":case"GGG":t=p(3,g.Abbreviated);break;case"GGGG":t=p(3,g.Wide);break;case"GGGGG":t=p(3,g.Narrow);break;case"y":t=w(0,1,0,!1,!0);break;case"yy":t=w(0,2,0,!0,!0);break;case"yyy":t=w(0,3,0,!1,!0);break;case"yyyy":t=w(0,4,0,!1,!0);break;case"Y":t=ae(1);break;case"YY":t=ae(2,!0);break;case"YYY":t=ae(3);break;case"YYYY":t=ae(4);break;case"M":case"L":t=w(1,1,1);break;case"MM":case"LL":t=w(1,2,1);break;case"MMM":t=p(2,g.Abbreviated);break;case"MMMM":t=p(2,g.Wide);break;case"MMMMM":t=p(2,g.Narrow);break;case"LLL":t=p(2,g.Abbreviated,A.Standalone);break;case"LLLL":t=p(2,g.Wide,A.Standalone);break;case"LLLLL":t=p(2,g.Narrow,A.Standalone);break;case"w":t=Fe(1);break;case"ww":t=Fe(2);break;case"W":t=Fe(1,!0);break;case"d":t=w(2,1);break;case"dd":t=w(2,2);break;case"c":case"cc":t=w(7,1);break;case"ccc":t=p(1,g.Abbreviated,A.Standalone);break;case"cccc":t=p(1,g.Wide,A.Standalone);break;case"ccccc":t=p(1,g.Narrow,A.Standalone);break;case"cccccc":t=p(1,g.Short,A.Standalone);break;case"E":case"EE":case"EEE":t=p(1,g.Abbreviated);break;case"EEEE":t=p(1,g.Wide);break;case"EEEEE":t=p(1,g.Narrow);break;case"EEEEEE":t=p(1,g.Short);break;case"a":case"aa":case"aaa":t=p(0,g.Abbreviated);break;case"aaaa":t=p(0,g.Wide);break;case"aaaaa":t=p(0,g.Narrow);break;case"b":case"bb":case"bbb":t=p(0,g.Abbreviated,A.Standalone,!0);break;case"bbbb":t=p(0,g.Wide,A.Standalone,!0);break;case"bbbbb":t=p(0,g.Narrow,A.Standalone,!0);break;case"B":case"BB":case"BBB":t=p(0,g.Abbreviated,A.Format,!0);break;case"BBBB":t=p(0,g.Wide,A.Format,!0);break;case"BBBBB":t=p(0,g.Narrow,A.Format,!0);break;case"h":t=w(3,1,-12);break;case"hh":t=w(3,2,-12);break;case"H":t=w(3,1);break;case"HH":t=w(3,2);break;case"m":t=w(4,1);break;case"mm":t=w(4,2);break;case"s":t=w(5,1);break;case"ss":t=w(5,2);break;case"S":t=w(6,1);break;case"SS":t=w(6,2);break;case"SSS":t=w(6,3);break;case"Z":case"ZZ":case"ZZZ":t=oe(0);break;case"ZZZZZ":t=oe(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=oe(1);break;case"OOOO":case"ZZZZ":case"zzzz":t=oe(2);break;default:return null}return Ae[e]=t,t}function dt(e,t){e=e.replace(/:/g,"");let n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}function fn(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function hn(e,t,n){let r=n?-1:1,i=e.getTimezoneOffset(),o=dt(t,i);return fn(e,r*(o-i))}function gn(e){if(it(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,o=1,s=1]=e.split("-").map(u=>+u);return ce(i,o-1,s)}let n=parseFloat(e);if(!isNaN(e-n))return new Date(n);let r;if(r=e.match(nn))return pn(r)}let t=new Date(e);if(!it(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function pn(e){let t=new Date(0),n=0,r=0,i=e[8]?t.setUTCFullYear:t.setFullYear,o=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=Number(e[9]+e[10]),r=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let s=Number(e[4]||0)-n,u=Number(e[5]||0)-r,a=Number(e[6]||0),h=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return o.call(t,s,u,a,h),t}function it(e){return e instanceof Date&&!isNaN(e.valueOf())}function lt(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[i,o]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}function Dn(e,t){return new P(2100,!1)}var mn="mediumDate",yn=new F(""),En=new F(""),Ur=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(n,r,i){this.locale=n,this.defaultTimezone=r,this.defaultOptions=i}transform(n,r,i,o){if(n==null||n===""||n!==n)return null;try{let s=r??this.defaultOptions?.dateFormat??mn,u=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return sn(n,s,o||this.locale,u)}catch(s){throw Dn(e,s.message)}}static \u0275fac=function(r){return new(r||e)(ee(et,16),ee(yn,24),ee(En,24))};static \u0275pipe=He({name:"date",type:e,pure:!0})}return e})();var wn="browser",Cn="server";function $r(e){return e===wn}function jr(e){return e===Cn}var zr=(()=>{class e{static \u0275prov=b({token:e,providedIn:"root",factory:()=>new be})}return e})();var be=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},de=class{};var K=class{},X=class{},O=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let i=n.slice(0,r),o=n.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){let n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){let n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,n);let i=(t.op==="a"?this.headers.get(n):void 0)||[];i.push(...r),this.headers.set(n,i);break;case"d":let o=t.value;if(!o)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=this.headers.get(n);if(!s)return;s=s.filter(u=>o.indexOf(u)===-1),s.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}break}}addHeaderEntry(t,n){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(t,n){let r=(Array.isArray(n)?n:[n]).map(o=>o.toString()),i=t.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}};var Se=class{encodeKey(t){return ft(t)}encodeValue(t){return ft(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function An(e,t){let n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,u]=o==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,o)),t.decodeValue(i.slice(o+1))],a=n.get(s)||[];a.push(u),n.set(s,a)}),n}var bn=/%(\d[a-f0-9])/gi,vn={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ft(e){return encodeURIComponent(e).replace(bn,(t,n)=>vn[n]??t)}function he(e){return`${e}`}var x=class e{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Se,t.fromString){if(t.fromObject)throw new P(2805,!1);this.map=An(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{let r=t.fromObject[n],i=Array.isArray(r)?r.map(he):[he(r)];this.map.set(n,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){let n=[];return Object.keys(t).forEach(r=>{let i=t[r];Array.isArray(i)?i.forEach(o=>{n.push({param:r,value:o,op:"a"})}):n.push({param:r,value:i,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let n=(t.op==="a"?this.map.get(t.param):void 0)||[];n.push(he(t.value)),this.map.set(t.param,n);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],i=r.indexOf(he(t.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Re=class{map=new Map;set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function _n(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ht(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function gt(e){return typeof Blob<"u"&&e instanceof Blob}function pt(e){return typeof FormData<"u"&&e instanceof FormData}function Tn(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Y="Content-Type",ge="Accept",Pe="X-Request-URL",_t="text/plain",Tt="application/json",St=`${Tt}, ${_t}, */*`,Z=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,n,r,i){this.url=n,this.method=t.toUpperCase();let o;if(_n(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new O,this.context??=new Re,!this.params)this.params=new x,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let u=n.indexOf("?"),a=u===-1?"?":u<n.length-1?"&":"";this.urlWithParams=n+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ht(this.body)||gt(this.body)||pt(this.body)||Tn(this.body)?this.body:this.body instanceof x?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||pt(this.body)?null:gt(this.body)?this.body.type||null:ht(this.body)?null:typeof this.body=="string"?_t:this.body instanceof x?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Tt:null}clone(t={}){let n=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,o=t.transferCache??this.transferCache,s=t.body!==void 0?t.body:this.body,u=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,h=t.headers||this.headers,f=t.params||this.params,D=t.context??this.context;return t.setHeaders!==void 0&&(h=Object.keys(t.setHeaders).reduce((C,c)=>C.set(c,t.setHeaders[c]),h)),t.setParams&&(f=Object.keys(t.setParams).reduce((C,c)=>C.set(c,t.setParams[c]),f)),new e(n,r,s,{params:f,headers:h,context:D,reportProgress:a,responseType:i,withCredentials:u,transferCache:o})}},U=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(U||{}),J=class{headers;status;statusText;url;ok;type;constructor(t,n=200,r="OK"){this.headers=t.headers||new O,this.status=t.status!==void 0?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},pe=class e extends J{constructor(t={}){super(t)}type=U.ResponseHeader;clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},V=class e extends J{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=U.Response;clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},k=class extends J{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Rt=200,Sn=204;function _e(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Rn=(()=>{class e{handler;constructor(n){this.handler=n}request(n,r,i={}){let o;if(n instanceof Z)o=n;else{let a;i.headers instanceof O?a=i.headers:a=new O(i.headers);let h;i.params&&(i.params instanceof x?h=i.params:h=new x({fromObject:i.params})),o=new Z(n,r,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:h,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let s=Q(o).pipe(je(a=>this.handler.handle(a)));if(n instanceof Z||i.observe==="events")return s;let u=s.pipe($e(a=>a instanceof V));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return u.pipe(W(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new P(2806,!1);return a.body}));case"blob":return u.pipe(W(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new P(2807,!1);return a.body}));case"text":return u.pipe(W(a=>{if(a.body!==null&&typeof a.body!="string")throw new P(2808,!1);return a.body}));case"json":default:return u.pipe(W(a=>a.body))}case"response":return u;default:throw new P(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new x().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,i={}){return this.request("PATCH",n,_e(i,r))}post(n,r,i={}){return this.request("POST",n,_e(i,r))}put(n,r,i={}){return this.request("PUT",n,_e(i,r))}static \u0275fac=function(r){return new(r||e)(v(K))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),In=/^\)\]\}',?\n/;function Dt(e){if(e.url)return e.url;let t=Pe.toLocaleLowerCase();return e.headers.get(t)}var It=new F(""),Te=(()=>{class e{fetchImpl=y(Ie,{optional:!0})?.fetch??((...n)=>globalThis.fetch(...n));ngZone=y(Xe);handle(n){return new me(r=>{let i=new AbortController;return this.doRequest(n,i.signal,r).then(Me,o=>r.error(new k({error:o}))),()=>i.abort()})}doRequest(n,r,i){return q(this,null,function*(){let o=this.createRequestInit(n),s;try{let c=this.ngZone.runOutsideAngular(()=>this.fetchImpl(n.urlWithParams,H({signal:r},o)));Mn(c),i.next({type:U.Sent}),s=yield c}catch(c){i.error(new k({error:c,status:c.status??0,statusText:c.statusText,url:n.urlWithParams,headers:c.headers}));return}let u=new O(s.headers),a=s.statusText,h=Dt(s)??n.urlWithParams,f=s.status,D=null;if(n.reportProgress&&i.next(new pe({headers:u,status:f,statusText:a,url:h})),s.body){let c=s.headers.get("content-length"),T=[],d=s.body.getReader(),l=0,M,N,m=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>q(this,null,function*(){for(;;){let{done:j,value:G}=yield d.read();if(j)break;if(T.push(G),l+=G.length,n.reportProgress){N=n.responseType==="text"?(N??"")+(M??=new TextDecoder).decode(G,{stream:!0}):void 0;let Be=()=>i.next({type:U.DownloadProgress,total:c?+c:void 0,loaded:l,partialText:N});m?m.run(Be):Be()}}}));let $=this.concatChunks(T,l);try{let j=s.headers.get(Y)??"";D=this.parseBody(n,$,j)}catch(j){i.error(new k({error:j,headers:new O(s.headers),status:s.status,statusText:s.statusText,url:Dt(s)??n.urlWithParams}));return}}f===0&&(f=D?Rt:0),f>=200&&f<300?(i.next(new V({body:D,headers:u,status:f,statusText:a,url:h})),i.complete()):i.error(new k({error:D,headers:u,status:f,statusText:a,url:h}))})}parseBody(n,r,i){switch(n.responseType){case"json":let o=new TextDecoder().decode(r).replace(In,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(n){let r={},i=n.withCredentials?"include":void 0;if(n.headers.forEach((o,s)=>r[o]=s.join(",")),n.headers.has(ge)||(r[ge]=St),!n.headers.has(Y)){let o=n.detectContentTypeHeader();o!==null&&(r[Y]=o)}return{body:n.serializeBody(),method:n.method,headers:r,credentials:i}}concatChunks(n,r){let i=new Uint8Array(r),o=0;for(let s of n)i.set(s,o),o+=s.length;return i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Ie=class{};function Me(){}function Mn(e){e.then(Me,Me)}function On(e,t){return t(e)}function Pn(e,t,n){return(r,i)=>Ze(n,()=>t(r,o=>e(o,i)))}var Le=new F(""),Mt=new F(""),Ln=new F("",{providedIn:"root",factory:()=>!0});var mt=(()=>{class e extends K{backend;injector;chain=null;pendingTasks=y(Ke);contributeToStability=y(Ln);constructor(n,r){super(),this.backend=n,this.injector=r}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Le),...this.injector.get(Mt,[])]));this.chain=r.reduceRight((i,o)=>Pn(i,o,this.injector),On)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,i=>this.backend.handle(i)).pipe(ze(()=>this.pendingTasks.remove(r)))}else return this.chain(n,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(v(X),v(Ye))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Nn=/^\)\]\}',?\n/,Bn=RegExp(`^${Pe}:`,"m");function kn(e){return"responseURL"in e&&e.responseURL?e.responseURL:Bn.test(e.getAllResponseHeaders())?e.getResponseHeader(Pe):null}var yt=(()=>{class e{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new P(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Ue(r.\u0275loadImpl()):Q(null)).pipe(Ve(()=>new me(o=>{let s=r.build();if(s.open(n.method,n.urlWithParams),n.withCredentials&&(s.withCredentials=!0),n.headers.forEach((d,l)=>s.setRequestHeader(d,l.join(","))),n.headers.has(ge)||s.setRequestHeader(ge,St),!n.headers.has(Y)){let d=n.detectContentTypeHeader();d!==null&&s.setRequestHeader(Y,d)}if(n.responseType){let d=n.responseType.toLowerCase();s.responseType=d!=="json"?d:"text"}let u=n.serializeBody(),a=null,h=()=>{if(a!==null)return a;let d=s.statusText||"OK",l=new O(s.getAllResponseHeaders()),M=kn(s)||n.url;return a=new pe({headers:l,status:s.status,statusText:d,url:M}),a},f=()=>{let{headers:d,status:l,statusText:M,url:N}=h(),m=null;l!==Sn&&(m=typeof s.response>"u"?s.responseText:s.response),l===0&&(l=m?Rt:0);let $=l>=200&&l<300;if(n.responseType==="json"&&typeof m=="string"){let j=m;m=m.replace(Nn,"");try{m=m!==""?JSON.parse(m):null}catch(G){m=j,$&&($=!1,m={error:G,text:m})}}$?(o.next(new V({body:m,headers:d,status:l,statusText:M,url:N||void 0})),o.complete()):o.error(new k({error:m,headers:d,status:l,statusText:M,url:N||void 0}))},D=d=>{let{url:l}=h(),M=new k({error:d,status:s.status||0,statusText:s.statusText||"Unknown Error",url:l||void 0});o.error(M)},C=!1,c=d=>{C||(o.next(h()),C=!0);let l={type:U.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),n.responseType==="text"&&s.responseText&&(l.partialText=s.responseText),o.next(l)},T=d=>{let l={type:U.UploadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),o.next(l)};return s.addEventListener("load",f),s.addEventListener("error",D),s.addEventListener("timeout",D),s.addEventListener("abort",D),n.reportProgress&&(s.addEventListener("progress",c),u!==null&&s.upload&&s.upload.addEventListener("progress",T)),s.send(u),o.next({type:U.Sent}),()=>{s.removeEventListener("error",D),s.removeEventListener("abort",D),s.removeEventListener("load",f),s.removeEventListener("timeout",D),n.reportProgress&&(s.removeEventListener("progress",c),u!==null&&s.upload&&s.upload.removeEventListener("progress",T)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||e)(v(de))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Ot=new F(""),xn="XSRF-TOKEN",Un=new F("",{providedIn:"root",factory:()=>xn}),$n="X-XSRF-TOKEN",jn=new F("",{providedIn:"root",factory:()=>$n}),De=class{},zn=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,r,i){this.doc=n,this.platform=r,this.cookieName=i}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=lt(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||e)(v(le),v(ye),v(Un))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function Vn(e,t){let n=e.url.toLowerCase();if(!y(Ot)||e.method==="GET"||e.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return t(e);let r=y(De).getToken(),i=y(jn);return r!=null&&!e.headers.has(i)&&(e=e.clone({headers:e.headers.set(i,r)})),t(e)}var Ne=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Ne||{});function Pt(e,t){return{\u0275kind:e,\u0275providers:t}}function ai(...e){let t=[Rn,yt,mt,{provide:K,useExisting:mt},{provide:X,useFactory:()=>y(It,{optional:!0})??y(yt)},{provide:Le,useValue:Vn,multi:!0},{provide:Ot,useValue:!0},{provide:De,useClass:zn}];for(let n of e)t.push(...n.\u0275providers);return We(t)}function ui(e){return Pt(Ne.Interceptors,e.map(t=>({provide:Le,useValue:t,multi:!0})))}function ci(){return Pt(Ne.Fetch,[Te,{provide:It,useExisting:Te},{provide:X,useExisting:Te}])}var Gn=new F(""),Et="b",wt="h",Ct="s",Ft="st",At="u",bt="rt",Oe=new F(""),Wn=["GET","HEAD"];function Yn(e,t){let C=y(Oe),{isCacheActive:n}=C,r=ke(C,["isCacheActive"]),{transferCache:i,method:o}=e;if(!n||i===!1||o==="POST"&&!r.includePostRequests&&!i||o!=="POST"&&!Wn.includes(o)||!r.includeRequestsWithAuthHeaders&&Zn(e)||r.filter?.(e)===!1)return t(e);let s=y(Je),u=y(Gn,{optional:!0}),a=u?Hn(e.url,u):e.url,h=Xn(e,a),f=s.get(h,null),D=r.includeHeaders;if(typeof i=="object"&&i.includeHeaders&&(D=i.includeHeaders),f){let{[Et]:c,[bt]:T,[wt]:d,[Ct]:l,[Ft]:M,[At]:N}=f,m=c;switch(T){case"arraybuffer":m=new TextEncoder().encode(c).buffer;break;case"blob":m=new Blob([c]);break}let $=new O(d);return Q(new V({body:m,headers:$,status:l,statusText:M,url:N}))}return t(e).pipe(Ge(c=>{c instanceof V&&s.set(h,{[Et]:c.body,[wt]:Kn(c.headers,D),[Ct]:c.status,[Ft]:c.statusText,[At]:a,[bt]:e.responseType})}))}function Zn(e){return e.headers.has("authorization")||e.headers.has("proxy-authorization")}function Kn(e,t){if(!t)return{};let n={};for(let r of t){let i=e.getAll(r);i!==null&&(n[r]=i)}return n}function vt(e){return[...e.keys()].sort().map(t=>`${t}=${e.getAll(t)}`).join("&")}function Xn(e,t){let{params:n,method:r,responseType:i}=e,o=vt(n),s=e.serializeBody();s instanceof URLSearchParams?s=vt(s):typeof s!="string"&&(s="");let u=[r,i,t,s,o].join("|"),a=Jn(u);return a}function Jn(e){let t=0;for(let n of e)t=Math.imul(31,t)+n.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function di(e){return[{provide:Oe,useFactory:()=>(Ee("NgHttpTransferCache"),H({isCacheActive:!0},e))},{provide:Mt,useValue:Yn,multi:!0},{provide:qe,multi:!0,useFactory:()=>{let t=y(Qe),n=y(Oe);return()=>{t.whenStable().then(()=>{n.isCacheActive=!1})}}}]}function Hn(e,t){let n=new URL(e,"resolve://").origin,r=t[n];return r?e.replace(n,r):e}export{we as a,xr as b,tt as c,le as d,ot as e,Vt as f,Wt as g,lt as h,Ur as i,wn as j,Cn as k,$r as l,jr as m,zr as n,be as o,de as p,Rn as q,Mt as r,ai as s,ui as t,ci as u,di as v};

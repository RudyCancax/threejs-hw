(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ms="161",zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mc=0,qs=1,Sc=2,Aa=1,Ec=2,Qt=3,_n=0,wt=1,en=2,dn=0,ai=1,Zs=2,js=3,Ks=4,yc=5,An=100,Tc=101,bc=102,Js=103,$s=104,Ac=200,wc=201,Rc=202,Cc=203,cs=204,ls=205,Pc=206,Lc=207,Dc=208,Uc=209,Nc=210,Ic=211,Oc=212,Fc=213,Bc=214,zc=0,Gc=1,Hc=2,cr=3,Vc=4,kc=5,Wc=6,Xc=7,wa=0,Yc=1,qc=2,pn=0,Zc=1,jc=2,Kc=3,Jc=4,$c=5,Qc=6,Ra=300,ui=301,hi=302,us=303,hs=304,_r=306,fs=1e3,Ht=1001,ds=1002,bt=1003,Qs=1004,gi=1005,At=1006,Cr=1007,Rn=1008,mn=1009,el=1010,tl=1011,Ss=1012,Ca=1013,fn=1014,tn=1015,bi=1016,Pa=1017,La=1018,Cn=1020,nl=1021,Vt=1023,il=1024,rl=1025,Pn=1026,fi=1027,sl=1028,Da=1029,ol=1030,Ua=1031,Na=1033,Pr=33776,Lr=33777,Dr=33778,Ur=33779,eo=35840,to=35841,no=35842,io=35843,Ia=36196,ro=37492,so=37496,oo=37808,ao=37809,co=37810,lo=37811,uo=37812,ho=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,vo=37819,xo=37820,Mo=37821,Nr=36492,So=36494,Eo=36495,al=36283,yo=36284,To=36285,bo=36286,Oa=3e3,Ln=3001,cl=3200,ll=3201,ul=0,hl=1,Ft="",_t="srgb",rn="srgb-linear",Es="display-p3",vr="display-p3-linear",lr="linear",et="srgb",ur="rec709",hr="p3",Hn=7680,Ao=519,fl=512,dl=513,pl=514,Fa=515,ml=516,gl=517,_l=518,vl=519,wo=35044,Ro="300 es",ps=1035,nn=2e3,fr=2001;class On{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Co=1234567;const Si=Math.PI/180,Ai=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function ys(i,e){return(i%e+e)%e}function xl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ml(i,e,t){return i!==e?(t-i)/(e-i):0}function Ei(i,e,t){return(1-t)*i+t*e}function Sl(i,e,t,n){return Ei(i,e,1-Math.exp(-t*n))}function El(i,e=1){return e-Math.abs(ys(i,e*2)-e)}function yl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Al(i,e){return i+Math.random()*(e-i)}function wl(i){return i*(.5-Math.random())}function Rl(i){i!==void 0&&(Co=i);let e=Co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cl(i){return i*Si}function Pl(i){return i*Ai}function ms(i){return(i&i-1)===0&&i!==0}function Ll(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dl(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),p=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*p,o*l);break;case"YZY":i.set(c*p,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*p,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ul={DEG2RAD:Si,RAD2DEG:Ai,generateUUID:Fn,clamp:lt,euclideanModulo:ys,mapLinear:xl,inverseLerp:Ml,lerp:Ei,damp:Sl,pingpong:El,smoothstep:yl,smootherstep:Tl,randInt:bl,randFloat:Al,randFloatSpread:wl,seededRandom:Rl,degToRad:Cl,radToDeg:Pl,isPowerOfTwo:ms,ceilPowerOfTwo:Ll,floorPowerOfTwo:dr,setQuaternionFromProperEuler:Dl,normalize:yt,denormalize:ii};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],m=n[5],g=n[8],x=r[0],d=r[3],f=r[6],E=r[1],_=r[4],M=r[7],L=r[2],w=r[5],b=r[8];return s[0]=a*x+o*E+c*L,s[3]=a*d+o*_+c*w,s[6]=a*f+o*M+c*b,s[1]=l*x+u*E+h*L,s[4]=l*d+u*_+h*w,s[7]=l*f+u*M+h*b,s[2]=p*x+m*E+g*L,s[5]=p*d+m*_+g*w,s[8]=p*f+m*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,p=o*c-u*s,m=l*s-a*c,g=t*h+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=p*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ir.makeScale(e,t)),this}rotate(e){return this.premultiply(Ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Xe;function Ba(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nl(){const i=pr("canvas");return i.style.display="block",i}const Po={};function ci(i){i in Po||(Po[i]=!0,console.warn(i))}const Lo=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Do=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ii={[rn]:{transfer:lr,primaries:ur,toReference:i=>i,fromReference:i=>i},[_t]:{transfer:et,primaries:ur,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vr]:{transfer:lr,primaries:hr,toReference:i=>i.applyMatrix3(Do),fromReference:i=>i.applyMatrix3(Lo)},[Es]:{transfer:et,primaries:hr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Do),fromReference:i=>i.applyMatrix3(Lo).convertLinearToSRGB()}},Il=new Set([rn,vr]),Ke={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Il.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ii[e].toReference,r=Ii[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ii[i].primaries},getTransfer:function(i){return i===Ft?lr:Ii[i].transfer}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vn;class za{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=pr("canvas")),Vn.width=e.width,Vn.height=e.height;const n=Vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ol=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fr(r[a].image)):s.push(Fr(r[a]))}else s=Fr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class Rt extends On{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Ht,r=Ht,s=At,a=Rn,o=Vt,c=mn,l=Rt.DEFAULT_ANISOTROPY,u=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=Fn(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ln?_t:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ra)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Ln:Oa}set encoding(e){ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ln?_t:Ft}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Ra;Rt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],m=c[5],g=c[9],x=c[2],d=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,M=(m+1)/2,L=(f+1)/2,w=(u+p)/4,b=(h+x)/4,N=(g+d)/4;return _>M&&_>L?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=b/n):M>L?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=w/r,s=N/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=b/s,r=N/s),this.set(n,r,s,t),this}let E=Math.sqrt((d-g)*(d-g)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(h-x)/E,this.z=(p-u)/E,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends On{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ln?_t:Ft),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ha extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const p=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==p||l!==m||u!==g){let d=1-o;const f=c*p+l*m+u*g+h*x,E=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const L=Math.sqrt(_),w=Math.atan2(L,f*E);d=Math.sin(d*w)/L,o=Math.sin(o*w)/L}const M=o*E;if(c=c*d+p*M,l=l*d+m*M,u=u*d+g*M,h=h*d+x*M,d===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],p=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*m-l*p,e[t+1]=c*g+u*p+l*h-o*m,e[t+2]=l*g+u*m+o*p-c*h,e[t+3]=u*g-o*h-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),p=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*u*h+l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h+p*m*g;break;case"YZX":this._x=p*u*h+l*m*g,this._y=l*m*h+p*u*g,this._z=l*u*g-p*m*h,this._w=l*u*h-p*m*g;break;case"XZY":this._x=p*u*h-l*m*g,this._y=l*m*h-p*u*g,this._z=l*u*g+p*m*h,this._w=l*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=n+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new D,Uo=new Un;class Pi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bt):Bt.fromBufferAttribute(s,a),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(e.matrixWorld),this.union(Oi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),Fi.subVectors(this.max,_i),kn.subVectors(e.a,_i),Wn.subVectors(e.b,_i),Xn.subVectors(e.c,_i),sn.subVectors(Wn,kn),on.subVectors(Xn,Wn),Sn.subVectors(kn,Xn);let t=[0,-sn.z,sn.y,0,-on.z,on.y,0,-Sn.z,Sn.y,sn.z,0,-sn.x,on.z,0,-on.x,Sn.z,0,-Sn.x,-sn.y,sn.x,0,-on.y,on.x,0,-Sn.y,Sn.x,0];return!zr(t,kn,Wn,Xn,Fi)||(t=[1,0,0,0,1,0,0,0,1],!zr(t,kn,Wn,Xn,Fi))?!1:(Bi.crossVectors(sn,on),t=[Bi.x,Bi.y,Bi.z],zr(t,kn,Wn,Xn,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new D,new D,new D,new D,new D,new D,new D,new D],Bt=new D,Oi=new Pi,kn=new D,Wn=new D,Xn=new D,sn=new D,on=new D,Sn=new D,_i=new D,Fi=new D,Bi=new D,En=new D;function zr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){En.fromArray(i,s);const o=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),c=e.dot(En),l=t.dot(En),u=n.dot(En);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Gl=new Pi,vi=new D,Gr=new D;class Ts{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Gr)),this.expandByPoint(vi.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new D,Hr=new D,zi=new D,an=new D,Vr=new D,Gi=new D,kr=new D;class Va{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hr.copy(e).add(t).multiplyScalar(.5),zi.copy(t).sub(e).normalize(),an.copy(this.origin).sub(Hr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zi),o=an.dot(this.direction),c=-an.dot(zi),l=an.lengthSq(),u=Math.abs(1-a*a);let h,p,m,g;if(u>0)if(h=a*c-o,p=a*o-c,g=s*u,h>=0)if(p>=-g)if(p<=g){const x=1/u;h*=x,p*=x,m=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;else p<=-g?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l):p<=g?(h=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+p*(p+2*c)+l);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Hr).addScaledVector(zi,p),m}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),r=jt.dot(jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,r,s){Vr.subVectors(t,e),Gi.subVectors(n,e),kr.crossVectors(Vr,Gi);let a=this.direction.dot(kr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;an.subVectors(this.origin,e);const c=o*this.direction.dot(Gi.crossVectors(an,Gi));if(c<0)return null;const l=o*this.direction.dot(Vr.cross(an));if(l<0||c+l>a)return null;const u=-o*an.dot(kr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,a,o,c,l,u,h,p,m,g,x,d){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,p,m,g,x,d)}set(e,t,n,r,s,a,o,c,l,u,h,p,m,g,x,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=m,f[7]=g,f[11]=x,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Yn.setFromMatrixColumn(e,0).length(),s=1/Yn.setFromMatrixColumn(e,1).length(),a=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,m=c*h,g=l*u,x=l*h;t[0]=p+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,m=c*h,g=l*u,x=l*h;t[0]=p-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,m=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=p*l+x,t[1]=c*h,t[5]=x*l+p,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-p*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=p-x*h}else if(e.order==="XZY"){const p=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+x,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hl,e,Vl)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),cn.crossVectors(n,Pt),cn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),cn.crossVectors(n,Pt)),cn.normalize(),Hi.crossVectors(Pt,cn),r[0]=cn.x,r[4]=Hi.x,r[8]=Pt.x,r[1]=cn.y,r[5]=Hi.y,r[9]=Pt.y,r[2]=cn.z,r[6]=Hi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],m=n[13],g=n[2],x=n[6],d=n[10],f=n[14],E=n[3],_=n[7],M=n[11],L=n[15],w=r[0],b=r[4],N=r[8],W=r[12],v=r[1],A=r[5],H=r[9],Z=r[13],U=r[2],G=r[6],F=r[10],K=r[14],q=r[3],j=r[7],J=r[11],ne=r[15];return s[0]=a*w+o*v+c*U+l*q,s[4]=a*b+o*A+c*G+l*j,s[8]=a*N+o*H+c*F+l*J,s[12]=a*W+o*Z+c*K+l*ne,s[1]=u*w+h*v+p*U+m*q,s[5]=u*b+h*A+p*G+m*j,s[9]=u*N+h*H+p*F+m*J,s[13]=u*W+h*Z+p*K+m*ne,s[2]=g*w+x*v+d*U+f*q,s[6]=g*b+x*A+d*G+f*j,s[10]=g*N+x*H+d*F+f*J,s[14]=g*W+x*Z+d*K+f*ne,s[3]=E*w+_*v+M*U+L*q,s[7]=E*b+_*A+M*G+L*j,s[11]=E*N+_*H+M*F+L*J,s[15]=E*W+_*Z+M*K+L*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],m=e[14],g=e[3],x=e[7],d=e[11],f=e[15];return g*(+s*c*h-r*l*h-s*o*p+n*l*p+r*o*m-n*c*m)+x*(+t*c*m-t*l*p+s*a*p-r*a*m+r*l*u-s*c*u)+d*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*u-n*l*u)+f*(-r*o*u-t*c*h+t*o*p+r*a*h-n*a*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],m=e[11],g=e[12],x=e[13],d=e[14],f=e[15],E=h*d*l-x*p*l+x*c*m-o*d*m-h*c*f+o*p*f,_=g*p*l-u*d*l-g*c*m+a*d*m+u*c*f-a*p*f,M=u*x*l-g*h*l+g*o*m-a*x*m-u*o*f+a*h*f,L=g*h*c-u*x*c-g*o*p+a*x*p+u*o*d-a*h*d,w=t*E+n*_+r*M+s*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(x*p*s-h*d*s-x*r*m+n*d*m+h*r*f-n*p*f)*b,e[2]=(o*d*s-x*c*s+x*r*l-n*d*l-o*r*f+n*c*f)*b,e[3]=(h*c*s-o*p*s-h*r*l+n*p*l+o*r*m-n*c*m)*b,e[4]=_*b,e[5]=(u*d*s-g*p*s+g*r*m-t*d*m-u*r*f+t*p*f)*b,e[6]=(g*c*s-a*d*s-g*r*l+t*d*l+a*r*f-t*c*f)*b,e[7]=(a*p*s-u*c*s+u*r*l-t*p*l-a*r*m+t*c*m)*b,e[8]=M*b,e[9]=(g*h*s-u*x*s-g*n*m+t*x*m+u*n*f-t*h*f)*b,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*f+t*o*f)*b,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*m-t*o*m)*b,e[12]=L*b,e[13]=(u*x*r-g*h*r+g*n*p-t*x*p-u*n*d+t*h*d)*b,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*d-t*o*d)*b,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*p+t*o*p)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,p=s*l,m=s*u,g=s*h,x=a*u,d=a*h,f=o*h,E=c*l,_=c*u,M=c*h,L=n.x,w=n.y,b=n.z;return r[0]=(1-(x+f))*L,r[1]=(m+M)*L,r[2]=(g-_)*L,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(p+f))*w,r[6]=(d+E)*w,r[7]=0,r[8]=(g+_)*b,r[9]=(d-E)*b,r[10]=(1-(p+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const a=Yn.set(r[4],r[5],r[6]).length(),o=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const l=1/s,u=1/a,h=1/o;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=u,zt.elements[5]*=u,zt.elements[6]*=u,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=nn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let m,g;if(o===nn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===fr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=nn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),p=(t+e)*l,m=(n+r)*u;let g,x;if(o===nn)g=(a+s)*h,x=-2*h;else if(o===fr)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yn=new D,zt=new pt,Hl=new D(0,0,0),Vl=new D(1,1,1),cn=new D,Hi=new D,Pt=new D,No=new pt,Io=new Un;class xr{constructor(e=0,t=0,n=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kl=0;const Oo=new D,qn=new Un,Kt=new pt,Vi=new D,xi=new D,Wl=new D,Xl=new Un,Fo=new D(1,0,0),Bo=new D(0,1,0),zo=new D(0,0,1),Yl={type:"added"},ql={type:"removed"};class Dt extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new D,t=new xr,n=new Un,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Xe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Fo,e)}rotateY(e){return this.rotateOnAxis(Bo,e)}rotateZ(e){return this.rotateOnAxis(zo,e)}translateOnAxis(e,t){return Oo.copy(e).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fo,e)}translateY(e){return this.translateOnAxis(Bo,e)}translateZ(e){return this.translateOnAxis(zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vi.copy(e):Vi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(xi,Vi,this.up):Kt.lookAt(Vi,xi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Kt),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,Wl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new D(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new D,Jt=new D,Wr=new D,$t=new D,Zn=new D,jn=new D,Go=new D,Xr=new D,Yr=new D,qr=new D;class Wt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),Jt.subVectors(n,t),Wr.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(Jt),c=Gt.dot(Wr),l=Jt.dot(Jt),u=Jt.dot(Wr),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(l*c-o*u)*p,g=(a*u-o*c)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$t)===null?!1:$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,$t)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$t.x),c.addScaledVector(a,$t.y),c.addScaledVector(o,$t.z),c)}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),Jt.subVectors(e,t),Gt.cross(Jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Gt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Zn.subVectors(r,n),jn.subVectors(s,n),Xr.subVectors(e,n);const c=Zn.dot(Xr),l=jn.dot(Xr);if(c<=0&&l<=0)return t.copy(n);Yr.subVectors(e,r);const u=Zn.dot(Yr),h=jn.dot(Yr);if(u>=0&&h<=u)return t.copy(r);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Zn,a);qr.subVectors(e,s);const m=Zn.dot(qr),g=jn.dot(qr);if(g>=0&&m<=g)return t.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(jn,o);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Go.subVectors(s,r),o=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(Go,o);const f=1/(d+x+p);return a=x*f,o=p*f,t.copy(n).addScaledVector(Zn,a).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=ys(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Zr(a,s,e+1/3),this.g=Zr(a,s,e),this.b=Zr(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Wa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ke.fromWorkingColorSpace(St.copy(this),e),Math.round(lt(St.r*255,0,255))*65536+Math.round(lt(St.g*255,0,255))*256+Math.round(lt(St.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(St.copy(this),t);const n=St.r,r=St.g,s=St.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=_t){Ke.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,r=St.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ln),this.setHSL(ln.h+e,ln.s+t,ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(ki);const n=Ei(ln.h,ki.h,t),r=Ei(ln.s,ki.s,t),s=Ei(ln.l,ki.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Je;Je.NAMES=Wa;let Zl=0;class Mr extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ai,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=ls,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cs&&(n.blendSrc=this.blendSrc),this.blendDst!==ls&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ct extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new D,Wi=new se;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ci("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}}class Xa extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ya extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ke extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jl=0;const Nt=new pt,jr=new Dt,Kn=new D,Lt=new Pi,Mi=new Pi,dt=new D;class mt extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ba(e)?Ya:Xa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Lt.min,Mi.min),Lt.expandByPoint(dt),dt.addVectors(Lt.max,Mi.max),Lt.expandByPoint(dt)):(Lt.expandByPoint(Mi.min),Lt.expandByPoint(Mi.max))}Lt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)dt.fromBufferAttribute(o,l),c&&(Kn.fromBufferAttribute(e,l),dt.add(Kn)),r=Math.max(r,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let v=0;v<o;v++)l[v]=new D,u[v]=new D;const h=new D,p=new D,m=new D,g=new se,x=new se,d=new se,f=new D,E=new D;function _(v,A,H){h.fromArray(r,v*3),p.fromArray(r,A*3),m.fromArray(r,H*3),g.fromArray(a,v*2),x.fromArray(a,A*2),d.fromArray(a,H*2),p.sub(h),m.sub(h),x.sub(g),d.sub(g);const Z=1/(x.x*d.y-d.x*x.y);isFinite(Z)&&(f.copy(p).multiplyScalar(d.y).addScaledVector(m,-x.y).multiplyScalar(Z),E.copy(m).multiplyScalar(x.x).addScaledVector(p,-d.x).multiplyScalar(Z),l[v].add(f),l[A].add(f),l[H].add(f),u[v].add(E),u[A].add(E),u[H].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let v=0,A=M.length;v<A;++v){const H=M[v],Z=H.start,U=H.count;for(let G=Z,F=Z+U;G<F;G+=3)_(n[G+0],n[G+1],n[G+2])}const L=new D,w=new D,b=new D,N=new D;function W(v){b.fromArray(s,v*3),N.copy(b);const A=l[v];L.copy(A),L.sub(b.multiplyScalar(b.dot(A))).normalize(),w.crossVectors(N,A);const Z=w.dot(u[v])<0?-1:1;c[v*4]=L.x,c[v*4+1]=L.y,c[v*4+2]=L.z,c[v*4+3]=Z}for(let v=0,A=M.length;v<A;++v){const H=M[v],Z=H.start,U=H.count;for(let G=Z,F=Z+U;G<F;G+=3)W(n[G+0]),W(n[G+1]),W(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),x=e.getX(p+1),d=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,d),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,p=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,d=c.length;x<d;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let f=0;f<u;f++)p[g++]=l[m++]}return new Xt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const p=l[u],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new pt,yn=new Va,Xi=new Ts,Vo=new D,Jn=new D,$n=new D,Qn=new D,Kr=new D,Yi=new D,qi=new se,Zi=new se,ji=new se,ko=new D,Wo=new D,Xo=new D,Ki=new D,Ji=new D;class Qe extends Dt{constructor(e=new mt,t=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Kr.fromBufferAttribute(h,e),a?Yi.addScaledVector(Kr,u):Yi.addScaledVector(Kr.sub(t),u))}t.add(Yi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(s),yn.copy(e.ray).recast(e.near),!(Xi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Xi,Vo)===null||yn.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Ho.copy(s).invert(),yn.copy(e.ray).applyMatrix4(Ho),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const d=p[g],f=a[d.materialIndex],E=Math.max(d.start,m.start),_=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=E,L=_;M<L;M+=3){const w=o.getX(M),b=o.getX(M+1),N=o.getX(M+2);r=$i(this,f,e,n,l,u,h,w,b,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=g,f=x;d<f;d+=3){const E=o.getX(d),_=o.getX(d+1),M=o.getX(d+2);r=$i(this,a,e,n,l,u,h,E,_,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const d=p[g],f=a[d.materialIndex],E=Math.max(d.start,m.start),_=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let M=E,L=_;M<L;M+=3){const w=M,b=M+1,N=M+2;r=$i(this,f,e,n,l,u,h,w,b,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let d=g,f=x;d<f;d+=3){const E=d,_=d+1,M=d+2;r=$i(this,a,e,n,l,u,h,E,_,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Kl(i,e,t,n,r,s,a,o){let c;if(e.side===wt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===_n,o),c===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ji);return l<t.near||l>t.far?null:{distance:l,point:Ji.clone(),object:i}}function $i(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Jn),i.getVertexPosition(c,$n),i.getVertexPosition(l,Qn);const u=Kl(i,e,t,n,Jn,$n,Qn,Ki);if(u){r&&(qi.fromBufferAttribute(r,o),Zi.fromBufferAttribute(r,c),ji.fromBufferAttribute(r,l),u.uv=Wt.getInterpolation(Ki,Jn,$n,Qn,qi,Zi,ji,new se)),s&&(qi.fromBufferAttribute(s,o),Zi.fromBufferAttribute(s,c),ji.fromBufferAttribute(s,l),u.uv1=Wt.getInterpolation(Ki,Jn,$n,Qn,qi,Zi,ji,new se),u.uv2=u.uv1),a&&(ko.fromBufferAttribute(a,o),Wo.fromBufferAttribute(a,c),Xo.fromBufferAttribute(a,l),u.normal=Wt.getInterpolation(Ki,Jn,$n,Qn,ko,Wo,Xo,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new D,materialIndex:0};Wt.getNormal(Jn,$n,Qn,h.normal),u.face=h}return u}class Bn extends mt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function g(x,d,f,E,_,M,L,w,b,N,W){const v=M/b,A=L/N,H=M/2,Z=L/2,U=w/2,G=b+1,F=N+1;let K=0,q=0;const j=new D;for(let J=0;J<F;J++){const ne=J*A-Z;for(let ue=0;ue<G;ue++){const Le=ue*v-H;j[x]=Le*E,j[d]=ne*_,j[f]=U,l.push(j.x,j.y,j.z),j[x]=0,j[d]=0,j[f]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(ue/b),h.push(1-J/N),K+=1}}for(let J=0;J<N;J++)for(let ne=0;ne<b;ne++){const ue=p+ne+G*J,Le=p+ne+G*(J+1),k=p+(ne+1)+G*(J+1),ie=p+(ne+1)+G*J;c.push(ue,Le,ie),c.push(Le,k,ie),q+=6}o.addGroup(m,q,W),m+=q,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function Jl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qa(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}const $l={clone:di,merge:Tt};var Ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ql,this.fragmentShader=eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Za extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new D,Yo=new se,qo=new se;class It extends Za{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ai*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Si*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Si*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,qo),t.subVectors(qo,Yo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Si*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class tu extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new It(ei,ti,e,t);r.layers=this.layers,this.add(r);const s=new It(ei,ti,e,t);s.layers=this.layers,this.add(s);const a=new It(ei,ti,e,t);a.layers=this.layers,this.add(a);const o=new It(ei,ti,e,t);o.layers=this.layers,this.add(o);const c=new It(ei,ti,e,t);c.layers=this.layers,this.add(c);const l=new It(ei,ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ja extends Rt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nu extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ln?_t:Ft),this.texture=new ja(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bn(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:dn});s.uniforms.tEquirect.value=t;const a=new Qe(r,s),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=At),new tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Jr=new D,iu=new D,ru=new Xe;class hn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Jr.subVectors(n,t).cross(iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ru.getNormalMatrix(e),r=this.coplanarPoint(Jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Ts,Qi=new D;class Ka{constructor(e=new hn,t=new hn,n=new hn,r=new hn,s=new hn,a=new hn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],p=r[7],m=r[8],g=r[9],x=r[10],d=r[11],f=r[12],E=r[13],_=r[14],M=r[15];if(n[0].setComponents(c-s,p-l,d-m,M-f).normalize(),n[1].setComponents(c+s,p+l,d+m,M+f).normalize(),n[2].setComponents(c+a,p+u,d+g,M+E).normalize(),n[3].setComponents(c-a,p-u,d-g,M-E).normalize(),n[4].setComponents(c-o,p-h,d-x,M-_).normalize(),t===nn)n[5].setComponents(c+o,p+h,d+x,M+_).normalize();else if(t===fr)n[5].setComponents(o,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qi.x=r.normal.x>0?e.max.x:e.min.x,Qi.y=r.normal.y>0?e.max.y:e.min.y,Qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ja(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function su(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,p=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,p),l.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,h){const p=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,p),g.length!==0){for(let x=0,d=g.length;x<d;x++){const f=g[x];t?i.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class Li extends mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,p=t/c,m=[],g=[],x=[],d=[];for(let f=0;f<u;f++){const E=f*p-a;for(let _=0;_<l;_++){const M=_*h-s;g.push(M,-E,0),x.push(0,0,1),d.push(_/o),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const _=E+l*f,M=E+l*(f+1),L=E+1+l*(f+1),w=E+1+l*f;m.push(_,M,w),m.push(M,L,w)}this.setIndex(m),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,th=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Th=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ch=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,af=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,df=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:ou,alphahash_pars_fragment:au,alphamap_fragment:cu,alphamap_pars_fragment:lu,alphatest_fragment:uu,alphatest_pars_fragment:hu,aomap_fragment:fu,aomap_pars_fragment:du,batching_pars_vertex:pu,batching_vertex:mu,begin_vertex:gu,beginnormal_vertex:_u,bsdfs:vu,iridescence_fragment:xu,bumpmap_pars_fragment:Mu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:yu,clipping_planes_vertex:Tu,color_fragment:bu,color_pars_fragment:Au,color_pars_vertex:wu,color_vertex:Ru,common:Cu,cube_uv_reflection_fragment:Pu,defaultnormal_vertex:Lu,displacementmap_pars_vertex:Du,displacementmap_vertex:Uu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Iu,colorspace_fragment:Ou,colorspace_pars_fragment:Fu,envmap_fragment:Bu,envmap_common_pars_fragment:zu,envmap_pars_fragment:Gu,envmap_pars_vertex:Hu,envmap_physical_pars_fragment:Qu,envmap_vertex:Vu,fog_vertex:ku,fog_pars_vertex:Wu,fog_fragment:Xu,fog_pars_fragment:Yu,gradientmap_pars_fragment:qu,lightmap_fragment:Zu,lightmap_pars_fragment:ju,lights_lambert_fragment:Ku,lights_lambert_pars_fragment:Ju,lights_pars_begin:$u,lights_toon_fragment:eh,lights_toon_pars_fragment:th,lights_phong_fragment:nh,lights_phong_pars_fragment:ih,lights_physical_fragment:rh,lights_physical_pars_fragment:sh,lights_fragment_begin:oh,lights_fragment_maps:ah,lights_fragment_end:ch,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:uh,logdepthbuf_pars_vertex:hh,logdepthbuf_vertex:fh,map_fragment:dh,map_pars_fragment:ph,map_particle_fragment:mh,map_particle_pars_fragment:gh,metalnessmap_fragment:_h,metalnessmap_pars_fragment:vh,morphcolor_vertex:xh,morphnormal_vertex:Mh,morphtarget_pars_vertex:Sh,morphtarget_vertex:Eh,normal_fragment_begin:yh,normal_fragment_maps:Th,normal_pars_fragment:bh,normal_pars_vertex:Ah,normal_vertex:wh,normalmap_pars_fragment:Rh,clearcoat_normal_fragment_begin:Ch,clearcoat_normal_fragment_maps:Ph,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Dh,opaque_fragment:Uh,packing:Nh,premultiplied_alpha_fragment:Ih,project_vertex:Oh,dithering_fragment:Fh,dithering_pars_fragment:Bh,roughnessmap_fragment:zh,roughnessmap_pars_fragment:Gh,shadowmap_pars_fragment:Hh,shadowmap_pars_vertex:Vh,shadowmap_vertex:kh,shadowmask_pars_fragment:Wh,skinbase_vertex:Xh,skinning_pars_vertex:Yh,skinning_vertex:qh,skinnormal_vertex:Zh,specularmap_fragment:jh,specularmap_pars_fragment:Kh,tonemapping_fragment:Jh,tonemapping_pars_fragment:$h,transmission_fragment:Qh,transmission_pars_fragment:ef,uv_pars_fragment:tf,uv_pars_vertex:nf,uv_vertex:rf,worldpos_vertex:sf,background_vert:of,background_frag:af,backgroundCube_vert:cf,backgroundCube_frag:lf,cube_vert:uf,cube_frag:hf,depth_vert:ff,depth_frag:df,distanceRGBA_vert:pf,distanceRGBA_frag:mf,equirect_vert:gf,equirect_frag:_f,linedashed_vert:vf,linedashed_frag:xf,meshbasic_vert:Mf,meshbasic_frag:Sf,meshlambert_vert:Ef,meshlambert_frag:yf,meshmatcap_vert:Tf,meshmatcap_frag:bf,meshnormal_vert:Af,meshnormal_frag:wf,meshphong_vert:Rf,meshphong_frag:Cf,meshphysical_vert:Pf,meshphysical_frag:Lf,meshtoon_vert:Df,meshtoon_frag:Uf,points_vert:Nf,points_frag:If,shadow_vert:Of,shadow_frag:Ff,sprite_vert:Bf,sprite_frag:zf},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},kt={basic:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Tt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Tt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Tt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Tt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Tt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Tt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Tt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Tt([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};kt.physical={uniforms:Tt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const er={r:0,b:0,g:0};function Gf(i,e,t,n,r,s,a){const o=new Je(0);let c=s===!0?0:1,l,u,h=null,p=0,m=null;function g(d,f){let E=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),E=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_r)?(u===void 0&&(u=new Qe(new Bn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:di(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(_.colorSpace)!==et,(h!==_||p!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,p=_.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qe(new Li(2,2),new vn({name:"BackgroundMaterial",uniforms:di(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,p=_.version,m=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function x(d,f){d.getRGB(er,qa(i)),n.buffers.color.setClear(er.r,er.g,er.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(d,f=1){o.set(d),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,x(o,c)},render:g}}function Hf(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=d(null);let l=c,u=!1;function h(U,G,F,K,q){let j=!1;if(a){const J=x(K,F,G);l!==J&&(l=J,m(l.object)),j=f(U,K,F,q),j&&E(U,K,F,q)}else{const J=G.wireframe===!0;(l.geometry!==K.id||l.program!==F.id||l.wireframe!==J)&&(l.geometry=K.id,l.program=F.id,l.wireframe=J,j=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,N(U,G,F,K),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?i.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function x(U,G,F){const K=F.wireframe===!0;let q=o[U.id];q===void 0&&(q={},o[U.id]=q);let j=q[G.id];j===void 0&&(j={},q[G.id]=j);let J=j[K];return J===void 0&&(J=d(p()),j[K]=J),J}function d(U){const G=[],F=[],K=[];for(let q=0;q<r;q++)G[q]=0,F[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:F,attributeDivisors:K,object:U,attributes:{},index:null}}function f(U,G,F,K){const q=l.attributes,j=G.attributes;let J=0;const ne=F.getAttributes();for(const ue in ne)if(ne[ue].location>=0){const k=q[ue];let ie=j[ue];if(ie===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),k===void 0||k.attribute!==ie||ie&&k.data!==ie.data)return!0;J++}return l.attributesNum!==J||l.index!==K}function E(U,G,F,K){const q={},j=G.attributes;let J=0;const ne=F.getAttributes();for(const ue in ne)if(ne[ue].location>=0){let k=j[ue];k===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(k=U.instanceColor));const ie={};ie.attribute=k,k&&k.data&&(ie.data=k.data),q[ue]=ie,J++}l.attributes=q,l.attributesNum=J,l.index=K}function _(){const U=l.newAttributes;for(let G=0,F=U.length;G<F;G++)U[G]=0}function M(U){L(U,0)}function L(U,G){const F=l.newAttributes,K=l.enabledAttributes,q=l.attributeDivisors;F[U]=1,K[U]===0&&(i.enableVertexAttribArray(U),K[U]=1),q[U]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,G),q[U]=G)}function w(){const U=l.newAttributes,G=l.enabledAttributes;for(let F=0,K=G.length;F<K;F++)G[F]!==U[F]&&(i.disableVertexAttribArray(F),G[F]=0)}function b(U,G,F,K,q,j,J){J===!0?i.vertexAttribIPointer(U,G,F,q,j):i.vertexAttribPointer(U,G,F,K,q,j)}function N(U,G,F,K){if(n.isWebGL2===!1&&(U.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=K.attributes,j=F.getAttributes(),J=G.defaultAttributeValues;for(const ne in j){const ue=j[ne];if(ue.location>=0){let Le=q[ne];if(Le===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Le=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Le=U.instanceColor)),Le!==void 0){const k=Le.normalized,ie=Le.itemSize,ge=t.get(Le);if(ge===void 0)continue;const Se=ge.buffer,Te=ge.type,xe=ge.bytesPerElement,Ie=n.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||Le.gpuType===Ca);if(Le.isInterleavedBufferAttribute){const Ae=Le.data,P=Ae.stride,le=Le.offset;if(Ae.isInstancedInterleavedBuffer){for(let X=0;X<ue.locationSize;X++)L(ue.location+X,Ae.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let X=0;X<ue.locationSize;X++)M(ue.location+X);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let X=0;X<ue.locationSize;X++)b(ue.location+X,ie/ue.locationSize,Te,k,P*xe,(le+ie/ue.locationSize*X)*xe,Ie)}else{if(Le.isInstancedBufferAttribute){for(let Ae=0;Ae<ue.locationSize;Ae++)L(ue.location+Ae,Le.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Ae=0;Ae<ue.locationSize;Ae++)M(ue.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ae=0;Ae<ue.locationSize;Ae++)b(ue.location+Ae,ie/ue.locationSize,Te,k,ie*xe,ie/ue.locationSize*Ae*xe,Ie)}}else if(J!==void 0){const k=J[ne];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(ue.location,k);break;case 3:i.vertexAttrib3fv(ue.location,k);break;case 4:i.vertexAttrib4fv(ue.location,k);break;default:i.vertexAttrib1fv(ue.location,k)}}}}w()}function W(){H();for(const U in o){const G=o[U];for(const F in G){const K=G[F];for(const q in K)g(K[q].object),delete K[q];delete G[F]}delete o[U]}}function v(U){if(o[U.id]===void 0)return;const G=o[U.id];for(const F in G){const K=G[F];for(const q in K)g(K[q].object),delete K[q];delete G[F]}delete o[U.id]}function A(U){for(const G in o){const F=o[G];if(F[U.id]===void 0)continue;const K=F[U.id];for(const q in K)g(K[q].object),delete K[q];delete F[U.id]}}function H(){Z(),u=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:Z,dispose:W,releaseStatesOfGeometry:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:M,disableUnusedAttributes:w}}function Vf(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,p){if(p===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,p),t.update(h,s,p)}function l(u,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function kf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,M=a||e.has("OES_texture_float"),L=_&&M,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:w}}function Wf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new hn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const E=s?0:n,_=E*4;let M=f.clippingState||null;c.value=M,M=u(g,p,_,m);for(let L=0;L!==_;++L)M[L]=t[L];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,m,g){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=c.value,g!==!0||d===null){const f=m+x*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<f)&&(d=new Float32Array(f));for(let _=0,M=m;_!==x;++_,M+=4)a.copy(h[_]).applyMatrix4(E,o),a.normal.toArray(d,M),d[M+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Xf(i){let e=new WeakMap;function t(a,o){return o===us?a.mapping=ui:o===hs&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===us||o===hs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new nu(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yf extends Za{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Zo=[.125,.215,.35,.446,.526,.582],wn=20,$r=new Yf,jo=new Je;let Qr=null,es=0,ts=0;const bn=(1+Math.sqrt(5))/2,ni=1/bn,Ko=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,bn,ni),new D(0,bn,-ni),new D(ni,0,bn),new D(-ni,0,bn),new D(bn,ni,0),new D(-bn,ni,0)];class Jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Qr=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ts=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,es,ts),e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ts=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:bi,format:Vt,colorSpace:rn,depthBuffer:!1},r=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qf(s)),this._blurMaterial=Zf(s,e,t)}return r}_compileMaterial(e){const t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,r){const o=new It(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(jo),u.toneMapping=pn,u.autoClear=!1;const m=new ct({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new Qe(new Bn,m);let x=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(jo),x=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const _=this._cubeSize;tr(r,E*_,f>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ui||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;tr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ko[(r-1)%Ko.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qe(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wn-1),x=s/g,d=isFinite(s)?1+Math.floor(u*x):wn;d>wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${wn}`);const f=[];let E=0;for(let b=0;b<wn;++b){const N=b/x,W=Math.exp(-N*N/2);f.push(W),b===0?E+=W:b<d&&(E+=2*W)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-n;const M=this._sizeLods[r],L=3*M*(r>_-ri?r-_+ri:0),w=4*(this._cubeSize-M);tr(t,L,w,3*M,2*M),c.setRenderTarget(t),c.render(h,$r)}}function qf(i){const e=[],t=[],n=[];let r=i;const s=i-ri+1+Zo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-ri?c=Zo[a-i+ri-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,d=2,f=1,E=new Float32Array(x*g*m),_=new Float32Array(d*g*m),M=new Float32Array(f*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,N=w>2?0:-1,W=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];E.set(W,x*g*w),_.set(p,d*g*w);const v=[w,w,w,w,w,w];M.set(v,f*g*w)}const L=new mt;L.setAttribute("position",new Xt(E,x)),L.setAttribute("uv",new Xt(_,d)),L.setAttribute("faceIndex",new Xt(M,f)),e.push(L),r>ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $o(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Zf(i,e,t){const n=new Float32Array(wn),r=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Qo(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ea(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function bs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===us||c===hs,u=c===ui||c===hi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Jo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Jo(i));const p=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jf(i,e,t,n){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const x=p.morphAttributes[g];for(let d=0,f=x.length;d<f;d++)e.remove(x[d])}p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let d=0,f=x.length;d<f;d++)e.update(x[d],i.ARRAY_BUFFER)}}function l(h){const p=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let _=0,M=E.length;_<M;_+=3){const L=E[_+0],w=E[_+1],b=E[_+2];p.push(L,w,w,b,b,L)}}else if(g!==void 0){const E=g.array;x=g.version;for(let _=0,M=E.length/3-1;_<M;_+=3){const L=_+0,w=_+1,b=_+2;p.push(L,w,w,b,b,L)}}else return;const d=new(Ba(p)?Ya:Xa)(p,1);d.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,d)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function $f(i,e,t,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(s,g,o,m*c),t.update(g,s,1)}function h(m,g,x){if(x===0)return;let d,f;if(r)d=i,f="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,g,o,m*c,x),t.update(g,s,x)}function p(m,g,x){if(x===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<x;f++)this.render(m[f]/c,g[f]);else{d.multiDrawElementsWEBGL(s,g,0,o,m,0,x);let f=0;for(let E=0;E<x;E++)f+=g[E];t.update(f,s,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function Qf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ed(i,e){return i[0]-e[0]}function td(i,e){return Math.abs(e[1])-Math.abs(i[1])}function nd(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new vt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==x){let G=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var m=G;d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let W=0;_===!0&&(W=1),M===!0&&(W=2),L===!0&&(W=3);let v=u.attributes.position.count*W,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const H=new Float32Array(v*A*4*x),Z=new Ha(H,v,A,x);Z.type=tn,Z.needsUpdate=!0;const U=W*4;for(let F=0;F<x;F++){const K=w[F],q=b[F],j=N[F],J=v*A*4*F;for(let ne=0;ne<K.count;ne++){const ue=ne*U;_===!0&&(a.fromBufferAttribute(K,ne),H[J+ue+0]=a.x,H[J+ue+1]=a.y,H[J+ue+2]=a.z,H[J+ue+3]=0),M===!0&&(a.fromBufferAttribute(q,ne),H[J+ue+4]=a.x,H[J+ue+5]=a.y,H[J+ue+6]=a.z,H[J+ue+7]=0),L===!0&&(a.fromBufferAttribute(j,ne),H[J+ue+8]=a.x,H[J+ue+9]=a.y,H[J+ue+10]=a.z,H[J+ue+11]=j.itemSize===4?a.w:1)}}d={count:x,texture:Z,size:new se(v,A)},s.set(u,d),u.addEventListener("dispose",G)}let f=0;for(let _=0;_<p.length;_++)f+=p[_];const E=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let x=n[u.id];if(x===void 0||x.length!==g){x=[];for(let M=0;M<g;M++)x[M]=[M,0];n[u.id]=x}for(let M=0;M<g;M++){const L=x[M];L[0]=M,L[1]=p[M]}x.sort(td);for(let M=0;M<8;M++)M<g&&x[M][1]?(o[M][0]=x[M][0],o[M][1]=x[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(ed);const d=u.morphAttributes.position,f=u.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const L=o[M],w=L[0],b=L[1];w!==Number.MAX_SAFE_INTEGER&&b?(d&&u.getAttribute("morphTarget"+M)!==d[w]&&u.setAttribute("morphTarget"+M,d[w]),f&&u.getAttribute("morphNormal"+M)!==f[w]&&u.setAttribute("morphNormal"+M,f[w]),r[M]=b,E+=b):(d&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),f&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const _=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function id(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class $a extends Rt{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:Pn,u!==Pn&&u!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pn&&(n=fn),n===void 0&&u===fi&&(n=Cn),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qa=new Rt,ec=new $a(1,1);ec.compareFunction=Fa;const tc=new Ha,nc=new zl,ic=new ja,ta=[],na=[],ia=new Float32Array(16),ra=new Float32Array(9),sa=new Float32Array(4);function pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ta[r];if(s===void 0&&(s=new Float32Array(r),ta[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sr(i,e){let t=na[e];t===void 0&&(t=new Int32Array(e),na[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function cd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;sa.set(n),i.uniformMatrix2fv(this.addr,!1,sa),ht(t,n)}}function ld(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;ra.set(n),i.uniformMatrix3fv(this.addr,!1,ra),ht(t,n)}}function ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;ia.set(n),i.uniformMatrix4fv(this.addr,!1,ia),ht(t,n)}}function hd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function md(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function _d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function xd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?ec:Qa;t.setTexture2D(e||s,r)}function Md(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nc,r)}function Sd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ic,r)}function Ed(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tc,r)}function yd(i){switch(i){case 5126:return rd;case 35664:return sd;case 35665:return od;case 35666:return ad;case 35674:return cd;case 35675:return ld;case 35676:return ud;case 5124:case 35670:return hd;case 35667:case 35671:return fd;case 35668:case 35672:return dd;case 35669:case 35673:return pd;case 5125:return md;case 36294:return gd;case 36295:return _d;case 36296:return vd;case 35678:case 36198:case 36298:case 36306:case 35682:return xd;case 35679:case 36299:case 36307:return Md;case 35680:case 36300:case 36308:case 36293:return Sd;case 36289:case 36303:case 36311:case 36292:return Ed}}function Td(i,e){i.uniform1fv(this.addr,e)}function bd(i,e){const t=pi(e,this.size,2);i.uniform2fv(this.addr,t)}function Ad(i,e){const t=pi(e,this.size,3);i.uniform3fv(this.addr,t)}function wd(i,e){const t=pi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rd(i,e){const t=pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cd(i,e){const t=pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pd(i,e){const t=pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ld(i,e){i.uniform1iv(this.addr,e)}function Dd(i,e){i.uniform2iv(this.addr,e)}function Ud(i,e){i.uniform3iv(this.addr,e)}function Nd(i,e){i.uniform4iv(this.addr,e)}function Id(i,e){i.uniform1uiv(this.addr,e)}function Od(i,e){i.uniform2uiv(this.addr,e)}function Fd(i,e){i.uniform3uiv(this.addr,e)}function Bd(i,e){i.uniform4uiv(this.addr,e)}function zd(i,e,t){const n=this.cache,r=e.length,s=Sr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Qa,s[a])}function Gd(i,e,t){const n=this.cache,r=e.length,s=Sr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nc,s[a])}function Hd(i,e,t){const n=this.cache,r=e.length,s=Sr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ic,s[a])}function Vd(i,e,t){const n=this.cache,r=e.length,s=Sr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||tc,s[a])}function kd(i){switch(i){case 5126:return Td;case 35664:return bd;case 35665:return Ad;case 35666:return wd;case 35674:return Rd;case 35675:return Cd;case 35676:return Pd;case 5124:case 35670:return Ld;case 35667:case 35671:return Dd;case 35668:case 35672:return Ud;case 35669:case 35673:return Nd;case 5125:return Id;case 36294:return Od;case 36295:return Fd;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Vd}}class Wd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yd(t.type)}}class Xd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kd(t.type)}}class Yd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function oa(i,e){i.seq.push(e),i.map[e.id]=e}function qd(i,e,t){const n=i.name,r=n.length;for(ns.lastIndex=0;;){const s=ns.exec(n),a=ns.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){oa(t,l===void 0?new Wd(o,i,e):new Xd(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Yd(o),oa(t,h)),t=h}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);qd(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function aa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zd=37297;let jd=0;function Kd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jd(i){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i);let n;switch(e===t?n="":e===hr&&t===ur?n="LinearDisplayP3ToLinearSRGB":e===ur&&t===hr&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case vr:return[n,"LinearTransferOETF"];case _t:case Es:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ca(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Kd(i.getShaderSource(e),a)}else return r}function $d(i,e){const t=Jd(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qd(i,e){let t;switch(e){case Zc:t="Linear";break;case jc:t="Reinhard";break;case Kc:t="OptimizedCineon";break;case Jc:t="ACESFilmic";break;case Qc:t="AgX";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ep(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(si).join(`
`)}function np(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function si(i){return i!==""}function la(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ua(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function gs(i){return i.replace(rp,op)}const sp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function op(i,e){let t=Ge[e];if(t===void 0){const n=sp.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gs(t)}const ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ha(i){return i.replace(ap,cp)}function cp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Aa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function up(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case hi:e="ENVMAP_TYPE_CUBE";break;case _r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function fp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wa:e="ENVMAP_BLENDING_MULTIPLY";break;case Yc:e="ENVMAP_BLENDING_MIX";break;case qc:e="ENVMAP_BLENDING_ADD";break}return e}function dp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=lp(t),l=up(t),u=hp(t),h=fp(t),p=dp(t),m=t.isWebGL2?"":ep(t),g=tp(t),x=np(s),d=r.createProgram();let f,E,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(si).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(si).join(`
`),E.length>0&&(E+=`
`)):(f=[fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),E=[m,fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==pn?Qd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,$d("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),a=gs(a),a=la(a,t),a=ua(a,t),o=gs(o),o=la(o,t),o=ua(o,t),a=ha(a),o=ha(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const M=_+f+a,L=_+E+o,w=aa(r,r.VERTEX_SHADER,M),b=aa(r,r.FRAGMENT_SHADER,L);r.attachShader(d,w),r.attachShader(d,b),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function N(H){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(d).trim(),U=r.getShaderInfoLog(w).trim(),G=r.getShaderInfoLog(b).trim();let F=!0,K=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,d,w,b);else{const q=ca(r,w,"vertex"),j=ca(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+q+`
`+j)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(U===""||G==="")&&(K=!1);K&&(H.diagnostics={runnable:F,programLog:Z,vertexShader:{log:U,prefix:f},fragmentShader:{log:G,prefix:E}})}r.deleteShader(w),r.deleteShader(b),W=new ar(r,d),v=ip(r,d)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let v;this.getAttributes=function(){return v===void 0&&N(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(d,Zd)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jd++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=w,this.fragmentShader=b,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _p(e),t.set(e,n)),n}}class _p{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function vp(i,e,t,n,r,s,a){const o=new ka,c=new gp,l=new Set,u=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,A,H,Z,U){const G=Z.fog,F=U.geometry,K=v.isMeshStandardMaterial?Z.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),j=q&&q.mapping===_r?q.image.height:null,J=x[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=ne!==void 0?ne.length:0;let Le=0;F.morphAttributes.position!==void 0&&(Le=1),F.morphAttributes.normal!==void 0&&(Le=2),F.morphAttributes.color!==void 0&&(Le=3);let k,ie,ge,Se;if(J){const Ye=kt[J];k=Ye.vertexShader,ie=Ye.fragmentShader}else k=v.vertexShader,ie=v.fragmentShader,c.update(v),ge=c.getVertexShaderID(v),Se=c.getFragmentShaderID(v);const Te=i.getRenderTarget(),xe=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,Ae=!!v.map,P=!!v.matcap,le=!!q,X=!!v.aoMap,ae=!!v.lightMap,Y=!!v.bumpMap,ye=!!v.normalMap,pe=!!v.displacementMap,y=!!v.emissiveMap,S=!!v.metalnessMap,I=!!v.roughnessMap,te=v.anisotropy>0,Q=v.clearcoat>0,$=v.iridescence>0,Me=v.sheen>0,fe=v.transmission>0,_e=te&&!!v.anisotropyMap,Ce=Q&&!!v.clearcoatMap,Oe=Q&&!!v.clearcoatNormalMap,ee=Q&&!!v.clearcoatRoughnessMap,qe=$&&!!v.iridescenceMap,He=$&&!!v.iridescenceThicknessMap,Ue=Me&&!!v.sheenColorMap,we=Me&&!!v.sheenRoughnessMap,me=!!v.specularMap,Be=!!v.specularColorMap,C=!!v.specularIntensityMap,ce=fe&&!!v.transmissionMap,de=fe&&!!v.thicknessMap,Re=!!v.gradientMap,R=!!v.alphaMap,oe=v.alphaTest>0,re=!!v.alphaHash,Ee=!!v.extensions;let Pe=pn;v.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Ze={isWebGL2:h,shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:k,fragmentShader:ie,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ie,instancing:xe,instancingColor:xe&&U.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:rn,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:P,envMap:le,envMapMode:le&&q.mapping,envMapCubeUVHeight:j,aoMap:X,lightMap:ae,bumpMap:Y,normalMap:ye,displacementMap:m&&pe,emissiveMap:y,normalMapObjectSpace:ye&&v.normalMapType===hl,normalMapTangentSpace:ye&&v.normalMapType===ul,metalnessMap:S,roughnessMap:I,anisotropy:te,anisotropyMap:_e,clearcoat:Q,clearcoatMap:Ce,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ee,iridescence:$,iridescenceMap:qe,iridescenceThicknessMap:He,sheen:Me,sheenColorMap:Ue,sheenRoughnessMap:we,specularMap:me,specularColorMap:Be,specularIntensityMap:C,transmission:fe,transmissionMap:ce,thicknessMap:de,gradientMap:Re,opaque:v.transparent===!1&&v.blending===ai&&v.alphaToCoverage===!1,alphaMap:R,alphaTest:oe,alphaHash:re,combine:v.combine,mapUv:Ae&&d(v.map.channel),aoMapUv:X&&d(v.aoMap.channel),lightMapUv:ae&&d(v.lightMap.channel),bumpMapUv:Y&&d(v.bumpMap.channel),normalMapUv:ye&&d(v.normalMap.channel),displacementMapUv:pe&&d(v.displacementMap.channel),emissiveMapUv:y&&d(v.emissiveMap.channel),metalnessMapUv:S&&d(v.metalnessMap.channel),roughnessMapUv:I&&d(v.roughnessMap.channel),anisotropyMapUv:_e&&d(v.anisotropyMap.channel),clearcoatMapUv:Ce&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:He&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&d(v.sheenRoughnessMap.channel),specularMapUv:me&&d(v.specularMap.channel),specularColorMapUv:Be&&d(v.specularColorMap.channel),specularIntensityMapUv:C&&d(v.specularIntensityMap.channel),transmissionMapUv:ce&&d(v.transmissionMap.channel),thicknessMapUv:de&&d(v.thicknessMap.channel),alphaMapUv:R&&d(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||te),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Ae||R),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Ee&&v.extensions.derivatives===!0,extensionFragDepth:Ee&&v.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function E(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)A.push(H),A.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(_(A,v),M(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){const A=x[v.type];let H;if(A){const Z=kt[A];H=$l.clone(Z.uniforms)}else H=v.uniforms;return H}function w(v,A){let H;for(let Z=0,U=u.length;Z<U;Z++){const G=u[Z];if(G.cacheKey===A){H=G,++H.usedTimes;break}}return H===void 0&&(H=new pp(i,A,v,s),u.push(H)),H}function b(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),v.destroy()}}function N(v){c.remove(v)}function W(){c.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:L,acquireProgram:w,releaseProgram:b,releaseShaderCache:N,programs:u,dispose:W}}function xp(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function da(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,p,m,g,x,d){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:d},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=d),e++,f}function o(h,p,m,g,x,d){const f=a(h,p,m,g,x,d);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(h,p,m,g,x,d){const f=a(h,p,m,g,x,d);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,p){t.length>1&&t.sort(h||Mp),n.length>1&&n.sort(p||da),r.length>1&&r.sort(p||da)}function u(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Sp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new pa,i.set(n,[a])):r>=s.length?(a=new pa,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tp=0;function bp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ap(i,e){const t=new Ep,n=yp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,a=new pt,o=new pt;function c(u,h){let p=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let x=0,d=0,f=0,E=0,_=0,M=0,L=0,w=0,b=0,N=0,W=0;u.sort(bp);const v=h===!0?Math.PI:1;for(let H=0,Z=u.length;H<Z;H++){const U=u[H],G=U.color,F=U.intensity,K=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=G.r*F*v,m+=G.g*F*v,g+=G.b*F*v;else if(U.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(U.sh.coefficients[j],F);W++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const J=U.shadow,ne=n.get(U);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.directionalShadow[x]=ne,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=U.shadow.matrix,M++}r.directional[x]=j,x++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(G).multiplyScalar(F*v),j.distance=K,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,r.spot[f]=j;const J=U.shadow;if(U.map&&(r.spotLightMap[b]=U.map,b++,J.updateMatrices(U),U.castShadow&&N++),r.spotLightMatrix[f]=J.matrix,U.castShadow){const ne=n.get(U);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,r.spotShadow[f]=ne,r.spotShadowMap[f]=q,w++}f++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(G).multiplyScalar(F),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),r.rectArea[E]=j,E++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*v),j.distance=U.distance,j.decay=U.decay,U.castShadow){const J=U.shadow,ne=n.get(U);ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,ne.shadowCameraNear=J.camera.near,ne.shadowCameraFar=J.camera.far,r.pointShadow[d]=ne,r.pointShadowMap[d]=q,r.pointShadowMatrix[d]=U.shadow.matrix,L++}r.point[d]=j,d++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(F*v),j.groundColor.copy(U.groundColor).multiplyScalar(F*v),r.hemi[_]=j,_++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==x||A.pointLength!==d||A.spotLength!==f||A.rectAreaLength!==E||A.hemiLength!==_||A.numDirectionalShadows!==M||A.numPointShadows!==L||A.numSpotShadows!==w||A.numSpotMaps!==b||A.numLightProbes!==W)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=E,r.point.length=d,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+b-N,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=W,A.directionalLength=x,A.pointLength=d,A.spotLength=f,A.rectAreaLength=E,A.hemiLength=_,A.numDirectionalShadows=M,A.numPointShadows=L,A.numSpotShadows=w,A.numSpotMaps=b,A.numLightProbes=W,r.version=Tp++)}function l(u,h){let p=0,m=0,g=0,x=0,d=0;const f=h.matrixWorldInverse;for(let E=0,_=u.length;E<_;E++){const M=u[E];if(M.isDirectionalLight){const L=r.directional[p];L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),p++}else if(M.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const L=r.rectArea[x];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const L=r.hemi[d];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(f),d++}}}return{setup:c,setupView:l,state:r}}function ma(i,e){const t=new Ap(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function wp(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new ma(i,e),t.set(s,[c])):a>=o.length?(c=new ma(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rp extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cp extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dp(i,e,t){let n=new Ka;const r=new se,s=new se,a=new vt,o=new Rp({depthPacking:ll}),c=new Cp,l={},u=t.maxTextureSize,h={[_n]:wt,[wt]:_n,[en]:en},p=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Pp,fragmentShader:Lp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let f=this.type;this.render=function(w,b,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const W=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),H=i.state;H.setBlending(dn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=f!==Qt&&this.type===Qt,U=f===Qt&&this.type!==Qt;for(let G=0,F=w.length;G<F;G++){const K=w[G],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const j=q.getFrameExtents();if(r.multiply(j),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||Z===!0||U===!0){const ne=this.type!==Qt?{minFilter:bt,magFilter:bt}:{};q.map!==null&&q.map.dispose(),q.map=new Dn(r.x,r.y,ne),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const J=q.getViewportCount();for(let ne=0;ne<J;ne++){const ue=q.getViewport(ne);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),H.viewport(a),q.updateMatrices(K,ne),n=q.getFrustum(),M(b,N,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Qt&&E(q,N),q.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(W,v,A)};function E(w,b){const N=e.update(x);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,N,p,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,N,m,x,null)}function _(w,b,N,W){let v=null;const A=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)v=A;else if(v=N.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=v.uuid,Z=b.uuid;let U=l[H];U===void 0&&(U={},l[H]=U);let G=U[Z];G===void 0&&(G=v.clone(),U[Z]=G,b.addEventListener("dispose",L)),v=G}if(v.visible=b.visible,v.wireframe=b.wireframe,W===Qt?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=i.properties.get(v);H.light=N}return v}function M(w,b,N,W,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Qt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),U=w.material;if(Array.isArray(U)){const G=Z.groups;for(let F=0,K=G.length;F<K;F++){const q=G[F],j=U[q.materialIndex];if(j&&j.visible){const J=_(w,j,W,v);w.onBeforeShadow(i,w,b,N,Z,J,q),i.renderBufferDirect(N,null,Z,J,w,q),w.onAfterShadow(i,w,b,N,Z,J,q)}}}else if(U.visible){const G=_(w,U,W,v);w.onBeforeShadow(i,w,b,N,Z,G,null),i.renderBufferDirect(N,null,Z,G,w,null),w.onAfterShadow(i,w,b,N,Z,G,null)}}const H=w.children;for(let Z=0,U=H.length;Z<U;Z++)M(H[Z],b,N,W,v)}function L(w){w.target.removeEventListener("dispose",L);for(const N in l){const W=l[N],v=w.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}function Up(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const oe=new vt;let re=null;const Ee=new vt(0,0,0,0);return{setMask:function(Pe){re!==Pe&&!R&&(i.colorMask(Pe,Pe,Pe,Pe),re=Pe)},setLocked:function(Pe){R=Pe},setClear:function(Pe,Ze,Ye,$e,gt){gt===!0&&(Pe*=$e,Ze*=$e,Ye*=$e),oe.set(Pe,Ze,Ye,$e),Ee.equals(oe)===!1&&(i.clearColor(Pe,Ze,Ye,$e),Ee.copy(oe))},reset:function(){R=!1,re=null,Ee.set(-1,0,0,0)}}}function s(){let R=!1,oe=null,re=null,Ee=null;return{setTest:function(Pe){Pe?xe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!R&&(i.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(re!==Pe){switch(Pe){case zc:i.depthFunc(i.NEVER);break;case Gc:i.depthFunc(i.ALWAYS);break;case Hc:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case Vc:i.depthFunc(i.EQUAL);break;case kc:i.depthFunc(i.GEQUAL);break;case Wc:i.depthFunc(i.GREATER);break;case Xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Pe}},setLocked:function(Pe){R=Pe},setClear:function(Pe){Ee!==Pe&&(i.clearDepth(Pe),Ee=Pe)},reset:function(){R=!1,oe=null,re=null,Ee=null}}}function a(){let R=!1,oe=null,re=null,Ee=null,Pe=null,Ze=null,Ye=null,$e=null,gt=null;return{setTest:function(je){R||(je?xe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(je){oe!==je&&!R&&(i.stencilMask(je),oe=je)},setFunc:function(je,rt,Et){(re!==je||Ee!==rt||Pe!==Et)&&(i.stencilFunc(je,rt,Et),re=je,Ee=rt,Pe=Et)},setOp:function(je,rt,Et){(Ze!==je||Ye!==rt||$e!==Et)&&(i.stencilOp(je,rt,Et),Ze=je,Ye=rt,$e=Et)},setLocked:function(je){R=je},setClear:function(je){gt!==je&&(i.clearStencil(je),gt=je)},reset:function(){R=!1,oe=null,re=null,Ee=null,Pe=null,Ze=null,Ye=null,$e=null,gt=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,x=[],d=null,f=!1,E=null,_=null,M=null,L=null,w=null,b=null,N=null,W=new Je(0,0,0),v=0,A=!1,H=null,Z=null,U=null,G=null,F=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=j>=2);let ne=null,ue={};const Le=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),ie=new vt().fromArray(Le),ge=new vt().fromArray(k);function Se(R,oe,re,Ee){const Pe=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(R,Ze),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<re;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(oe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ze}const Te={};Te[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),xe(i.DEPTH_TEST),c.setFunc(cr),pe(!1),y(qs),xe(i.CULL_FACE),Y(dn);function xe(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function Ie(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function Ae(R,oe){return m[R]!==oe?(i.bindFramebuffer(R,oe),m[R]=oe,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function P(R,oe){let re=x,Ee=!1;if(R)if(re=g.get(oe),re===void 0&&(re=[],g.set(oe,re)),R.isWebGLMultipleRenderTargets){const Pe=R.texture;if(re.length!==Pe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Ye=Pe.length;Ze<Ye;Ze++)re[Ze]=i.COLOR_ATTACHMENT0+Ze;re.length=Pe.length,Ee=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Ee=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function le(R){return d!==R?(i.useProgram(R),d=R,!0):!1}const X={[An]:i.FUNC_ADD,[Tc]:i.FUNC_SUBTRACT,[bc]:i.FUNC_REVERSE_SUBTRACT};if(n)X[Js]=i.MIN,X[$s]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(X[Js]=R.MIN_EXT,X[$s]=R.MAX_EXT)}const ae={[Ac]:i.ZERO,[wc]:i.ONE,[Rc]:i.SRC_COLOR,[cs]:i.SRC_ALPHA,[Nc]:i.SRC_ALPHA_SATURATE,[Dc]:i.DST_COLOR,[Pc]:i.DST_ALPHA,[Cc]:i.ONE_MINUS_SRC_COLOR,[ls]:i.ONE_MINUS_SRC_ALPHA,[Uc]:i.ONE_MINUS_DST_COLOR,[Lc]:i.ONE_MINUS_DST_ALPHA,[Ic]:i.CONSTANT_COLOR,[Oc]:i.ONE_MINUS_CONSTANT_COLOR,[Fc]:i.CONSTANT_ALPHA,[Bc]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(R,oe,re,Ee,Pe,Ze,Ye,$e,gt,je){if(R===dn){f===!0&&(Ie(i.BLEND),f=!1);return}if(f===!1&&(xe(i.BLEND),f=!0),R!==yc){if(R!==E||je!==A){if((_!==An||w!==An)&&(i.blendEquation(i.FUNC_ADD),_=An,w=An),je)switch(R){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case js:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ks:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case js:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ks:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,L=null,b=null,N=null,W.set(0,0,0),v=0,E=R,A=je}return}Pe=Pe||oe,Ze=Ze||re,Ye=Ye||Ee,(oe!==_||Pe!==w)&&(i.blendEquationSeparate(X[oe],X[Pe]),_=oe,w=Pe),(re!==M||Ee!==L||Ze!==b||Ye!==N)&&(i.blendFuncSeparate(ae[re],ae[Ee],ae[Ze],ae[Ye]),M=re,L=Ee,b=Ze,N=Ye),($e.equals(W)===!1||gt!==v)&&(i.blendColor($e.r,$e.g,$e.b,gt),W.copy($e),v=gt),E=R,A=!1}function ye(R,oe){R.side===en?Ie(i.CULL_FACE):xe(i.CULL_FACE);let re=R.side===wt;oe&&(re=!re),pe(re),R.blending===ai&&R.transparent===!1?Y(dn):Y(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ee=R.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),I(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(R){H!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),H=R)}function y(R){R!==Mc?(xe(i.CULL_FACE),R!==Z&&(R===qs?i.cullFace(i.BACK):R===Sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),Z=R}function S(R){R!==U&&(q&&i.lineWidth(R),U=R)}function I(R,oe,re){R?(xe(i.POLYGON_OFFSET_FILL),(G!==oe||F!==re)&&(i.polygonOffset(oe,re),G=oe,F=re)):Ie(i.POLYGON_OFFSET_FILL)}function te(R){R?xe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Q(R){R===void 0&&(R=i.TEXTURE0+K-1),ne!==R&&(i.activeTexture(R),ne=R)}function $(R,oe,re){re===void 0&&(ne===null?re=i.TEXTURE0+K-1:re=ne);let Ee=ue[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},ue[re]=Ee),(Ee.type!==R||Ee.texture!==oe)&&(ne!==re&&(i.activeTexture(re),ne=re),i.bindTexture(R,oe||Te[R]),Ee.type=R,Ee.texture=oe)}function Me(){const R=ue[ne];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(R){ie.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ie.copy(R))}function C(R){ge.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ge.copy(R))}function ce(R,oe){let re=h.get(oe);re===void 0&&(re=new WeakMap,h.set(oe,re));let Ee=re.get(R);Ee===void 0&&(Ee=i.getUniformBlockIndex(oe,R.name),re.set(R,Ee))}function de(R,oe){const Ee=h.get(oe).get(R);u.get(oe)!==Ee&&(i.uniformBlockBinding(oe,Ee,R.__bindingPointIndex),u.set(oe,Ee))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ne=null,ue={},m={},g=new WeakMap,x=[],d=null,f=!1,E=null,_=null,M=null,L=null,w=null,b=null,N=null,W=new Je(0,0,0),v=0,A=!1,H=null,Z=null,U=null,G=null,F=null,ie.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:xe,disable:Ie,bindFramebuffer:Ae,drawBuffers:P,useProgram:le,setBlending:Y,setMaterial:ye,setFlipSided:pe,setCullFace:y,setLineWidth:S,setPolygonOffset:I,setScissorTest:te,activeTexture:Q,bindTexture:$,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:we,texImage3D:me,updateUBOMapping:ce,uniformBlockBinding:de,texStorage2D:He,texStorage3D:Ue,texSubImage2D:Ce,texSubImage3D:Oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:qe,scissor:Be,viewport:C,reset:Re}}function Np(i,e,t,n,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,S){return m?new OffscreenCanvas(y,S):pr("canvas")}function x(y,S,I,te){let Q=1;if((y.width>te||y.height>te)&&(Q=te/Math.max(y.width,y.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const $=S?dr:Math.floor,Me=$(Q*y.width),fe=$(Q*y.height);h===void 0&&(h=g(Me,fe));const _e=I?g(Me,fe):h;return _e.width=Me,_e.height=fe,_e.getContext("2d").drawImage(y,0,0,Me,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Me+"x"+fe+")."),_e}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function d(y){return ms(y.width)&&ms(y.height)}function f(y){return o?!1:y.wrapS!==Ht||y.wrapT!==Ht||y.minFilter!==bt&&y.minFilter!==At}function E(y,S){return y.generateMipmaps&&S&&y.minFilter!==bt&&y.minFilter!==At}function _(y){i.generateMipmap(y)}function M(y,S,I,te,Q=!1){if(o===!1)return S;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=S;if(S===i.RED&&(I===i.FLOAT&&($=i.R32F),I===i.HALF_FLOAT&&($=i.R16F),I===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&($=i.R8UI),I===i.UNSIGNED_SHORT&&($=i.R16UI),I===i.UNSIGNED_INT&&($=i.R32UI),I===i.BYTE&&($=i.R8I),I===i.SHORT&&($=i.R16I),I===i.INT&&($=i.R32I)),S===i.RG&&(I===i.FLOAT&&($=i.RG32F),I===i.HALF_FLOAT&&($=i.RG16F),I===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RGBA){const Me=Q?lr:Ke.getTransfer(te);I===i.FLOAT&&($=i.RGBA32F),I===i.HALF_FLOAT&&($=i.RGBA16F),I===i.UNSIGNED_BYTE&&($=Me===et?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function L(y,S,I){return E(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==bt&&y.minFilter!==At?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function w(y){return y===bt||y===Qs||y===gi?i.NEAREST:i.LINEAR}function b(y){const S=y.target;S.removeEventListener("dispose",b),W(S),S.isVideoTexture&&u.delete(S)}function N(y){const S=y.target;S.removeEventListener("dispose",N),A(S)}function W(y){const S=n.get(y);if(S.__webglInit===void 0)return;const I=y.source,te=p.get(I);if(te){const Q=te[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(y),Object.keys(te).length===0&&p.delete(I)}n.remove(y)}function v(y){const S=n.get(y);i.deleteTexture(S.__webglTexture);const I=y.source,te=p.get(I);delete te[S.__cacheKey],a.memory.textures--}function A(y){const S=y.texture,I=n.get(y),te=n.get(S);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(I.__webglFramebuffer[Q]))for(let $=0;$<I.__webglFramebuffer[Q].length;$++)i.deleteFramebuffer(I.__webglFramebuffer[Q][$]);else i.deleteFramebuffer(I.__webglFramebuffer[Q]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Q])}else{if(Array.isArray(I.__webglFramebuffer))for(let Q=0;Q<I.__webglFramebuffer.length;Q++)i.deleteFramebuffer(I.__webglFramebuffer[Q]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Q=0;Q<I.__webglColorRenderbuffer.length;Q++)I.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Q]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,$=S.length;Q<$;Q++){const Me=n.get(S[Q]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(S[Q])}n.remove(S),n.remove(y)}let H=0;function Z(){H=0}function U(){const y=H;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),H+=1,y}function G(y){const S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function F(y,S){const I=n.get(y);if(y.isVideoTexture&&ye(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const te=y.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(I,y,S);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+S)}function K(y,S){const I=n.get(y);if(y.version>0&&I.__version!==y.version){ie(I,y,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+S)}function q(y,S){const I=n.get(y);if(y.version>0&&I.__version!==y.version){ie(I,y,S);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+S)}function j(y,S){const I=n.get(y);if(y.version>0&&I.__version!==y.version){ge(I,y,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+S)}const J={[fs]:i.REPEAT,[Ht]:i.CLAMP_TO_EDGE,[ds]:i.MIRRORED_REPEAT},ne={[bt]:i.NEAREST,[Qs]:i.NEAREST_MIPMAP_NEAREST,[gi]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},ue={[fl]:i.NEVER,[vl]:i.ALWAYS,[dl]:i.LESS,[Fa]:i.LEQUAL,[pl]:i.EQUAL,[_l]:i.GEQUAL,[ml]:i.GREATER,[gl]:i.NOTEQUAL};function Le(y,S,I){if(S.type===tn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===At||S.magFilter===Cr||S.magFilter===gi||S.magFilter===Rn||S.minFilter===At||S.minFilter===Cr||S.minFilter===gi||S.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),I?(i.texParameteri(y,i.TEXTURE_WRAP_S,J[S.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,J[S.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,J[S.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ne[S.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ne[S.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Ht||S.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,w(S.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==bt&&S.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===bt||S.minFilter!==gi&&S.minFilter!==Rn||S.type===tn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===bi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(y,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function k(y,S){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",b));const te=S.source;let Q=p.get(te);Q===void 0&&(Q={},p.set(te,Q));const $=G(S);if($!==y.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Q[$].usedTimes++;const Me=Q[y.__cacheKey];Me!==void 0&&(Q[y.__cacheKey].usedTimes--,Me.usedTimes===0&&v(S)),y.__cacheKey=$,y.__webglTexture=Q[$].texture}return I}function ie(y,S,I){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const Q=k(y,S),$=S.source;t.bindTexture(te,y.__webglTexture,i.TEXTURE0+I);const Me=n.get($);if($.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+I);const fe=Ke.getPrimaries(Ke.workingColorSpace),_e=S.colorSpace===Ft?null:Ke.getPrimaries(S.colorSpace),Ce=S.colorSpace===Ft||fe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Oe=f(S)&&d(S.image)===!1;let ee=x(S.image,Oe,!1,r.maxTextureSize);ee=pe(S,ee);const qe=d(ee)||o,He=s.convert(S.format,S.colorSpace);let Ue=s.convert(S.type),we=M(S.internalFormat,He,Ue,S.colorSpace,S.isVideoTexture);Le(te,S,qe);let me;const Be=S.mipmaps,C=o&&S.isVideoTexture!==!0&&we!==Ia,ce=Me.__version===void 0||Q===!0,de=$.dataReady,Re=L(S,ee,qe);if(S.isDepthTexture)we=i.DEPTH_COMPONENT,o?S.type===tn?we=i.DEPTH_COMPONENT32F:S.type===fn?we=i.DEPTH_COMPONENT24:S.type===Cn?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:S.type===tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Pn&&we===i.DEPTH_COMPONENT&&S.type!==Ss&&S.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=fn,Ue=s.convert(S.type)),S.format===fi&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,S.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Cn,Ue=s.convert(S.type))),ce&&(C?t.texStorage2D(i.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,we,ee.width,ee.height,0,He,Ue,null));else if(S.isDataTexture)if(Be.length>0&&qe){C&&ce&&t.texStorage2D(i.TEXTURE_2D,Re,we,Be[0].width,Be[0].height);for(let R=0,oe=Be.length;R<oe;R++)me=Be[R],C?de&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,He,Ue,me.data):t.texImage2D(i.TEXTURE_2D,R,we,me.width,me.height,0,He,Ue,me.data);S.generateMipmaps=!1}else C?(ce&&t.texStorage2D(i.TEXTURE_2D,Re,we,ee.width,ee.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,He,Ue,ee.data)):t.texImage2D(i.TEXTURE_2D,0,we,ee.width,ee.height,0,He,Ue,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){C&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,we,Be[0].width,Be[0].height,ee.depth);for(let R=0,oe=Be.length;R<oe;R++)me=Be[R],S.format!==Vt?He!==null?C?de&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,me.width,me.height,ee.depth,He,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,we,me.width,me.height,ee.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,me.width,me.height,ee.depth,He,Ue,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,R,we,me.width,me.height,ee.depth,0,He,Ue,me.data)}else{C&&ce&&t.texStorage2D(i.TEXTURE_2D,Re,we,Be[0].width,Be[0].height);for(let R=0,oe=Be.length;R<oe;R++)me=Be[R],S.format!==Vt?He!==null?C?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,He,me.data):t.compressedTexImage2D(i.TEXTURE_2D,R,we,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?de&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,He,Ue,me.data):t.texImage2D(i.TEXTURE_2D,R,we,me.width,me.height,0,He,Ue,me.data)}else if(S.isDataArrayTexture)C?(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,we,ee.width,ee.height,ee.depth),de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,He,Ue,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,He,Ue,ee.data);else if(S.isData3DTexture)C?(ce&&t.texStorage3D(i.TEXTURE_3D,Re,we,ee.width,ee.height,ee.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,He,Ue,ee.data)):t.texImage3D(i.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,He,Ue,ee.data);else if(S.isFramebufferTexture){if(ce)if(C)t.texStorage2D(i.TEXTURE_2D,Re,we,ee.width,ee.height);else{let R=ee.width,oe=ee.height;for(let re=0;re<Re;re++)t.texImage2D(i.TEXTURE_2D,re,we,R,oe,0,He,Ue,null),R>>=1,oe>>=1}}else if(Be.length>0&&qe){C&&ce&&t.texStorage2D(i.TEXTURE_2D,Re,we,Be[0].width,Be[0].height);for(let R=0,oe=Be.length;R<oe;R++)me=Be[R],C?de&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,He,Ue,me):t.texImage2D(i.TEXTURE_2D,R,we,He,Ue,me);S.generateMipmaps=!1}else C?(ce&&t.texStorage2D(i.TEXTURE_2D,Re,we,ee.width,ee.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Ue,ee)):t.texImage2D(i.TEXTURE_2D,0,we,He,Ue,ee);E(S,qe)&&_(te),Me.__version=$.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function ge(y,S,I){if(S.image.length!==6)return;const te=k(y,S),Q=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+I);const $=n.get(Q);if(Q.version!==$.__version||te===!0){t.activeTexture(i.TEXTURE0+I);const Me=Ke.getPrimaries(Ke.workingColorSpace),fe=S.colorSpace===Ft?null:Ke.getPrimaries(S.colorSpace),_e=S.colorSpace===Ft||Me===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let R=0;R<6;R++)!Ce&&!Oe?ee[R]=x(S.image[R],!1,!0,r.maxCubemapSize):ee[R]=Oe?S.image[R].image:S.image[R],ee[R]=pe(S,ee[R]);const qe=ee[0],He=d(qe)||o,Ue=s.convert(S.format,S.colorSpace),we=s.convert(S.type),me=M(S.internalFormat,Ue,we,S.colorSpace),Be=o&&S.isVideoTexture!==!0,C=$.__version===void 0||te===!0,ce=Q.dataReady;let de=L(S,qe,He);Le(i.TEXTURE_CUBE_MAP,S,He);let Re;if(Ce){Be&&C&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,me,qe.width,qe.height);for(let R=0;R<6;R++){Re=ee[R].mipmaps;for(let oe=0;oe<Re.length;oe++){const re=Re[oe];S.format!==Vt?Ue!==null?Be?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe,0,0,re.width,re.height,Ue,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe,me,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe,0,0,re.width,re.height,Ue,we,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe,me,re.width,re.height,0,Ue,we,re.data)}}}else{Re=S.mipmaps,Be&&C&&(Re.length>0&&de++,t.texStorage2D(i.TEXTURE_CUBE_MAP,de,me,ee[0].width,ee[0].height));for(let R=0;R<6;R++)if(Oe){Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ee[R].width,ee[R].height,Ue,we,ee[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,me,ee[R].width,ee[R].height,0,Ue,we,ee[R].data);for(let oe=0;oe<Re.length;oe++){const Ee=Re[oe].image[R].image;Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe+1,0,0,Ee.width,Ee.height,Ue,we,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe+1,me,Ee.width,Ee.height,0,Ue,we,Ee.data)}}else{Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ue,we,ee[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,me,Ue,we,ee[R]);for(let oe=0;oe<Re.length;oe++){const re=Re[oe];Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe+1,0,0,Ue,we,re.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,oe+1,me,Ue,we,re.image[R])}}}E(S,He)&&_(i.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function Se(y,S,I,te,Q,$){const Me=s.convert(I.format,I.colorSpace),fe=s.convert(I.type),_e=M(I.internalFormat,Me,fe,I.colorSpace);if(!n.get(S).__hasExternalTextures){const Oe=Math.max(1,S.width>>$),ee=Math.max(1,S.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,_e,Oe,ee,S.depth,0,Me,fe,null):t.texImage2D(Q,$,_e,Oe,ee,0,Me,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),Y(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,n.get(I).__webglTexture,0,ae(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,n.get(I).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(y,S,I){if(i.bindRenderbuffer(i.RENDERBUFFER,y),S.depthBuffer&&!S.stencilBuffer){let te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||Y(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===tn?te=i.DEPTH_COMPONENT32F:Q.type===fn&&(te=i.DEPTH_COMPONENT24));const $=ae(S);Y(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,te,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,$,te,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(S.depthBuffer&&S.stencilBuffer){const te=ae(S);I&&Y(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):Y(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<te.length;Q++){const $=te[Q],Me=s.convert($.format,$.colorSpace),fe=s.convert($.type),_e=M($.internalFormat,Me,fe,$.colorSpace),Ce=ae(S);I&&Y(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,_e,S.width,S.height):Y(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,_e,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_e,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(y,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,Q=ae(S);if(S.depthTexture.format===Pn)Y(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===fi)Y(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ie(y){const S=n.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,y)}else if(I){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=i.createRenderbuffer(),Te(S.__webglDepthbuffer[te],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Te(S.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(y,S,I){const te=n.get(y);S!==void 0&&Se(te.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ie(y)}function P(y){const S=y.texture,I=n.get(y),te=n.get(S);y.addEventListener("dispose",N),y.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,a.memory.textures++);const Q=y.isWebGLCubeRenderTarget===!0,$=y.isWebGLMultipleRenderTargets===!0,Me=d(y)||o;if(Q){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let _e=0;_e<S.mipmaps.length;_e++)I.__webglFramebuffer[fe][_e]=i.createFramebuffer()}else I.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)I.__webglFramebuffer[fe]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if($)if(r.drawBuffers){const fe=y.texture;for(let _e=0,Ce=fe.length;_e<Ce;_e++){const Oe=n.get(fe[_e]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&Y(y)===!1){const fe=$?S:[S];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const Ce=fe[_e];I.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[_e]);const Oe=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),qe=M(Ce.internalFormat,Oe,ee,Ce.colorSpace,y.isXRRenderTarget===!0),He=ae(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,qe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,I.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Le(i.TEXTURE_CUBE_MAP,S,Me);for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Se(I.__webglFramebuffer[fe][_e],y,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else Se(I.__webglFramebuffer[fe],y,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);E(S,Me)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const fe=y.texture;for(let _e=0,Ce=fe.length;_e<Ce;_e++){const Oe=fe[_e],ee=n.get(Oe);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Le(i.TEXTURE_2D,Oe,Me),Se(I.__webglFramebuffer,y,Oe,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),E(Oe,Me)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?fe=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,te.__webglTexture),Le(fe,S,Me),o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Se(I.__webglFramebuffer[_e],y,S,i.COLOR_ATTACHMENT0,fe,_e);else Se(I.__webglFramebuffer,y,S,i.COLOR_ATTACHMENT0,fe,0);E(S,Me)&&_(fe),t.unbindTexture()}y.depthBuffer&&Ie(y)}function le(y){const S=d(y)||o,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let te=0,Q=I.length;te<Q;te++){const $=I[te];if(E($,S)){const Me=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get($).__webglTexture;t.bindTexture(Me,fe),_(Me),t.unbindTexture()}}}function X(y){if(o&&y.samples>0&&Y(y)===!1){const S=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,te=y.height;let Q=i.COLOR_BUFFER_BIT;const $=[],Me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(y),_e=y.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){$.push(i.COLOR_ATTACHMENT0+Ce),y.depthBuffer&&$.push(Me);const Oe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Oe===!1&&(y.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),_e&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),_e){const ee=n.get(S[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,I,te,0,0,I,te,Q,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);const Oe=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function ae(y){return Math.min(r.maxSamples,y.samples)}function Y(y){const S=n.get(y);return o&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(y){const S=a.render.frame;u.get(y)!==S&&(u.set(y,S),y.update())}function pe(y,S){const I=y.colorSpace,te=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===ps||I!==rn&&I!==Ft&&(Ke.getTransfer(I)===et?o===!1?e.has("EXT_sRGB")===!0&&te===Vt?(y.format=ps,y.minFilter=At,y.generateMipmaps=!1):S=za.sRGBToLinear(S):(te!==Vt||Q!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}this.allocateTextureUnit=U,this.resetTextureUnits=Z,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Ae,this.setupRenderTarget=P,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Y}function Ip(i,e,t){const n=t.isWebGL2;function r(s,a=Ft){let o;const c=Ke.getTransfer(a);if(s===mn)return i.UNSIGNED_BYTE;if(s===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(s===La)return i.UNSIGNED_SHORT_5_5_5_1;if(s===el)return i.BYTE;if(s===tl)return i.SHORT;if(s===Ss)return i.UNSIGNED_SHORT;if(s===Ca)return i.INT;if(s===fn)return i.UNSIGNED_INT;if(s===tn)return i.FLOAT;if(s===bi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===nl)return i.ALPHA;if(s===Vt)return i.RGBA;if(s===il)return i.LUMINANCE;if(s===rl)return i.LUMINANCE_ALPHA;if(s===Pn)return i.DEPTH_COMPONENT;if(s===fi)return i.DEPTH_STENCIL;if(s===ps)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sl)return i.RED;if(s===Da)return i.RED_INTEGER;if(s===ol)return i.RG;if(s===Ua)return i.RG_INTEGER;if(s===Na)return i.RGBA_INTEGER;if(s===Pr||s===Lr||s===Dr||s===Ur)if(c===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Pr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Pr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ur)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===eo||s===to||s===no||s===io)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===to)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===no)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===io)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ia)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ro||s===so)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ro)return c===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===so)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oo||s===ao||s===co||s===lo||s===uo||s===ho||s===fo||s===po||s===mo||s===go||s===_o||s===vo||s===xo||s===Mo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===oo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ao)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===co)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ho)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===po)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===go)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_o)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mo)return c===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nr||s===So||s===Eo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Nr)return c===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===So)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Eo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===al||s===yo||s===To||s===bo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Nr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===yo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===To)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Op extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nr extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,n),f=this._getHandJoint(l,x);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new vn({extensions:{fragDepth:!0},vertexShader:Bp,fragmentShader:zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qe(new Li(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Hp extends On{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,p=null,m=null,g=null;const x=new Gp,d=t.getContextAttributes();let f=null,E=null;const _=[],M=[],L=new se;let w=null;const b=new It;b.layers.enable(1),b.viewport=new vt;const N=new It;N.layers.enable(2),N.viewport=new vt;const W=[b,N],v=new Op;v.layers.enable(1),v.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ie=_[k];return ie===void 0&&(ie=new is,_[k]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(k){let ie=_[k];return ie===void 0&&(ie=new is,_[k]=ie),ie.getGripSpace()},this.getHand=function(k){let ie=_[k];return ie===void 0&&(ie=new is,_[k]=ie),ie.getHandSpace()};function Z(k){const ie=M.indexOf(k.inputSource);if(ie===-1)return;const ge=_[ie];ge!==void 0&&(ge.update(k.inputSource,k.frame,l||a),ge.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",G);for(let k=0;k<_.length;k++){const ie=M[k];ie!==null&&(M[k]=null,_[k].disconnect(ie))}A=null,H=null,x.reset(),e.setRenderTarget(f),m=null,p=null,h=null,r=null,E=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",U),r.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Dn(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ie=null,ge=null,Se=null;d.depth&&(Se=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=d.stencil?fi:Pn,ge=d.stencil?Cn:fn);const Te={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Te),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new Dn(p.textureWidth,p.textureHeight,{format:Vt,type:mn,depthTexture:new $a(p.textureWidth,p.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const xe=e.properties.get(E);xe.__ignoreDepthValues=p.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(k){for(let ie=0;ie<k.removed.length;ie++){const ge=k.removed[ie],Se=M.indexOf(ge);Se>=0&&(M[Se]=null,_[Se].disconnect(ge))}for(let ie=0;ie<k.added.length;ie++){const ge=k.added[ie];let Se=M.indexOf(ge);if(Se===-1){for(let xe=0;xe<_.length;xe++)if(xe>=M.length){M.push(ge),Se=xe;break}else if(M[xe]===null){M[xe]=ge,Se=xe;break}if(Se===-1)break}const Te=_[Se];Te&&Te.connect(ge)}}const F=new D,K=new D;function q(k,ie,ge){F.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);const Se=F.distanceTo(K),Te=ie.projectionMatrix.elements,xe=ge.projectionMatrix.elements,Ie=Te[14]/(Te[10]-1),Ae=Te[14]/(Te[10]+1),P=(Te[9]+1)/Te[5],le=(Te[9]-1)/Te[5],X=(Te[8]-1)/Te[0],ae=(xe[8]+1)/xe[0],Y=Ie*X,ye=Ie*ae,pe=Se/(-X+ae),y=pe*-X;ie.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(y),k.translateZ(pe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const S=Ie+pe,I=Ae+pe,te=Y-y,Q=ye+(Se-y),$=P*Ae/I*S,Me=le*Ae/I*S;k.projectionMatrix.makePerspective(te,Q,$,Me,S,I),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,ie){ie===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ie.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;x.texture!==null&&(k.near=x.depthNear,k.far=x.depthFar),v.near=N.near=b.near=k.near,v.far=N.far=b.far=k.far,(A!==v.near||H!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,H=v.far,b.near=A,b.far=H,N.near=A,N.far=H,b.updateProjectionMatrix(),N.updateProjectionMatrix(),k.updateProjectionMatrix());const ie=k.parent,ge=v.cameras;j(v,ie);for(let Se=0;Se<ge.length;Se++)j(ge[Se],ie);ge.length===2?q(v,b,N):v.projectionMatrix.copy(b.projectionMatrix),J(k,v,ie)};function J(k,ie,ge){ge===null?k.matrix.copy(ie.matrixWorld):(k.matrix.copy(ge.matrixWorld),k.matrix.invert(),k.matrix.multiply(ie.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ai*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(k){c=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null};let ne=null;function ue(k,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Se=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,Se=!0);for(let xe=0;xe<ge.length;xe++){const Ie=ge[xe];let Ae=null;if(m!==null)Ae=m.getViewport(Ie);else{const le=h.getViewSubImage(p,Ie);Ae=le.viewport,xe===0&&(e.setRenderTargetTextures(E,le.colorTexture,p.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(E))}let P=W[xe];P===void 0&&(P=new It,P.layers.enable(xe),P.viewport=new vt,W[xe]=P),P.matrix.fromArray(Ie.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Ie.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),xe===0&&(v.matrix.copy(P.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Se===!0&&v.cameras.push(P)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const xe=h.getDepthInformation(ge[0]);xe&&xe.isValid&&xe.texture&&x.init(e,xe,r.renderState)}}for(let ge=0;ge<_.length;ge++){const Se=M[ge],Te=_[ge];Se!==null&&Te!==void 0&&Te.update(Se,ie,l||a)}x.render(e,v),ne&&ne(k,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Le=new Ja;Le.setAnimationLoop(ue),this.setAnimationLoop=function(k){ne=k},this.dispose=function(){}}}function Vp(i,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,qa(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,E,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(d,f):f.isMeshToonMaterial?(s(d,f),h(d,f)):f.isMeshPhongMaterial?(s(d,f),u(d,f)):f.isMeshStandardMaterial?(s(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,M)):f.isMeshMatcapMaterial?(s(d,f),g(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),x(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?c(d,f,E,_):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===wt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===wt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const E=e.get(f).envMap;if(E&&(d.envMap.value=E,d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,E,_){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*E,d.scale.value=_*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function h(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),e.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,E){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function x(d,f){const E=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function kp(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,_){const M=_.program;n.uniformBlockBinding(E,M)}function l(E,_){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",d));const L=_.program;n.updateUBOMapping(E,L);const w=e.render.frame;s[E.id]!==w&&(p(E),s[E.id]=w)}function u(E){const _=h();E.__bindingPointIndex=_;const M=i.createBuffer(),L=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const _=r[E.id],M=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,b=M.length;w<b;w++){const N=Array.isArray(M[w])?M[w]:[M[w]];for(let W=0,v=N.length;W<v;W++){const A=N[W];if(m(A,w,W,L)===!0){const H=A.__offset,Z=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let G=0;G<Z.length;G++){const F=Z[G],K=x(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,H+U,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,_,M,L){const w=E.value,b=_+"_"+M;if(L[b]===void 0)return typeof w=="number"||typeof w=="boolean"?L[b]=w:L[b]=w.clone(),!0;{const N=L[b];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return L[b]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(E){const _=E.uniforms;let M=0;const L=16;for(let b=0,N=_.length;b<N;b++){const W=Array.isArray(_[b])?_[b]:[_[b]];for(let v=0,A=W.length;v<A;v++){const H=W[v],Z=Array.isArray(H.value)?H.value:[H.value];for(let U=0,G=Z.length;U<G;U++){const F=Z[U],K=x(F),q=M%L;q!==0&&L-q<K.boundary&&(M+=L-q),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=K.storage}}}const w=M%L;return w>0&&(M+=L-w),E.__size=M,E.__cache={},this}function x(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function d(E){const _=E.target;_.removeEventListener("dispose",d);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class rc{constructor(e={}){const{canvas:t=Nl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,d=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const _=this;let M=!1,L=0,w=0,b=null,N=-1,W=null;const v=new vt,A=new vt;let H=null;const Z=new Je(0);let U=0,G=t.width,F=t.height,K=1,q=null,j=null;const J=new vt(0,0,G,F),ne=new vt(0,0,G,F);let ue=!1;const Le=new Ka;let k=!1,ie=!1,ge=null;const Se=new pt,Te=new se,xe=new D,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return b===null?K:1}let P=n;function le(T,O){for(let z=0;z<T.length;z++){const V=T[z],B=t.getContext(V,O);if(B!==null)return B}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ms}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),P=le(O,T),P===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let X,ae,Y,ye,pe,y,S,I,te,Q,$,Me,fe,_e,Ce,Oe,ee,qe,He,Ue,we,me,Be,C;function ce(){X=new Kf(P),ae=new kf(P,X,e),X.init(ae),me=new Ip(P,X,ae),Y=new Up(P,X,ae),ye=new Qf(P),pe=new xp,y=new Np(P,X,Y,pe,ae,me,ye),S=new Xf(_),I=new jf(_),te=new su(P,ae),Be=new Hf(P,X,te,ae),Q=new Jf(P,te,ye,Be),$=new id(P,Q,te,ye),He=new nd(P,ae,y),Oe=new Wf(pe),Me=new vp(_,S,I,X,ae,Be,Oe),fe=new Vp(_,pe),_e=new Sp,Ce=new wp(X,ae),qe=new Gf(_,S,I,Y,$,p,c),ee=new Dp(_,$,ae),C=new kp(P,ye,ae,Y),Ue=new Vf(P,X,ye,ae),we=new $f(P,X,ye,ae),ye.programs=Me.programs,_.capabilities=ae,_.extensions=X,_.properties=pe,_.renderLists=_e,_.shadowMap=ee,_.state=Y,_.info=ye}ce();const de=new Hp(_,P);this.xr=de,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=X.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=X.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(G,F,!1))},this.getSize=function(T){return T.set(G,F)},this.setSize=function(T,O,z=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,F=O,t.width=Math.floor(T*K),t.height=Math.floor(O*K),z===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(G*K,F*K).floor()},this.setDrawingBufferSize=function(T,O,z){G=T,F=O,K=z,t.width=Math.floor(T*z),t.height=Math.floor(O*z),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,O,z,V){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,O,z,V),Y.viewport(v.copy(J).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,O,z,V){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,O,z,V),Y.scissor(A.copy(ne).multiplyScalar(K).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){Y.setScissorTest(ue=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,O=!0,z=!0){let V=0;if(T){let B=!1;if(b!==null){const ve=b.texture.format;B=ve===Na||ve===Ua||ve===Da}if(B){const ve=b.texture.type,be=ve===mn||ve===fn||ve===Ss||ve===Cn||ve===Pa||ve===La,De=qe.getClearColor(),Ne=qe.getClearAlpha(),Ve=De.r,Fe=De.g,ze=De.b;be?(m[0]=Ve,m[1]=Fe,m[2]=ze,m[3]=Ne,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Ve,g[1]=Fe,g[2]=ze,g[3]=Ne,P.clearBufferiv(P.COLOR,0,g))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT),z&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),_e.dispose(),Ce.dispose(),pe.dispose(),S.dispose(),I.dispose(),$.dispose(),Be.dispose(),C.dispose(),Me.dispose(),de.dispose(),de.removeEventListener("sessionstart",gt),de.removeEventListener("sessionend",je),ge&&(ge.dispose(),ge=null),rt.stop()};function Re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ye.autoReset,O=ee.enabled,z=ee.autoUpdate,V=ee.needsUpdate,B=ee.type;ce(),ye.autoReset=T,ee.enabled=O,ee.autoUpdate=z,ee.needsUpdate=V,ee.type=B}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const O=T.target;O.removeEventListener("dispose",re),Ee(O)}function Ee(T){Pe(T),pe.remove(T)}function Pe(T){const O=pe.get(T).programs;O!==void 0&&(O.forEach(function(z){Me.releaseProgram(z)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,z,V,B,ve){O===null&&(O=Ie);const be=B.isMesh&&B.matrixWorld.determinant()<0,De=gc(T,O,z,V,B);Y.setMaterial(V,be);let Ne=z.index,Ve=1;if(V.wireframe===!0){if(Ne=Q.getWireframeAttribute(z),Ne===void 0)return;Ve=2}const Fe=z.drawRange,ze=z.attributes.position;let st=Fe.start*Ve,Ct=(Fe.start+Fe.count)*Ve;ve!==null&&(st=Math.max(st,ve.start*Ve),Ct=Math.min(Ct,(ve.start+ve.count)*Ve)),Ne!==null?(st=Math.max(st,0),Ct=Math.min(Ct,Ne.count)):ze!=null&&(st=Math.max(st,0),Ct=Math.min(Ct,ze.count));const ft=Ct-st;if(ft<0||ft===1/0)return;Be.setup(B,V,De,z,Ne);let qt,tt=Ue;if(Ne!==null&&(qt=te.get(Ne),tt=we,tt.setIndex(qt)),B.isMesh)V.wireframe===!0?(Y.setLineWidth(V.wireframeLinewidth*Ae()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(B.isLine){let We=V.linewidth;We===void 0&&(We=1),Y.setLineWidth(We*Ae()),B.isLineSegments?tt.setMode(P.LINES):B.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else B.isPoints?tt.setMode(P.POINTS):B.isSprite&&tt.setMode(P.TRIANGLES);if(B.isBatchedMesh)tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)tt.renderInstances(st,ft,B.count);else if(z.isInstancedBufferGeometry){const We=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,br=Math.min(z.instanceCount,We);tt.renderInstances(st,ft,br)}else tt.render(st,ft)};function Ze(T,O,z){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=wt,T.needsUpdate=!0,Ni(T,O,z),T.side=_n,T.needsUpdate=!0,Ni(T,O,z),T.side=en):Ni(T,O,z)}this.compile=function(T,O,z=null){z===null&&(z=T),d=Ce.get(z),d.init(),E.push(d),z.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),T!==z&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(_._useLegacyLights);const V=new Set;return T.traverse(function(B){const ve=B.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const De=ve[be];Ze(De,z,B),V.add(De)}else Ze(ve,z,B),V.add(ve)}),E.pop(),d=null,V},this.compileAsync=function(T,O,z=null){const V=this.compile(T,O,z);return new Promise(B=>{function ve(){if(V.forEach(function(be){pe.get(be).currentProgram.isReady()&&V.delete(be)}),V.size===0){B(T);return}setTimeout(ve,10)}X.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ye=null;function $e(T){Ye&&Ye(T)}function gt(){rt.stop()}function je(){rt.start()}const rt=new Ja;rt.setAnimationLoop($e),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(T){Ye=T,de.setAnimationLoop(T),T===null?rt.stop():rt.start()},de.addEventListener("sessionstart",gt),de.addEventListener("sessionend",je),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,O,b),d=Ce.get(T,E.length),d.init(),E.push(d),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Le.setFromProjectionMatrix(Se),ie=this.localClippingEnabled,k=Oe.init(this.clippingPlanes,ie),x=_e.get(T,f.length),x.init(),f.push(x),Et(T,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,j),this.info.render.frame++,k===!0&&Oe.beginShadows();const z=d.state.shadowsArray;if(ee.render(z,T,O),k===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1)&&qe.render(x,T),d.setupLights(_._useLegacyLights),O.isArrayCamera){const V=O.cameras;for(let B=0,ve=V.length;B<ve;B++){const be=V[B];Hs(x,T,be,be.viewport)}}else Hs(x,T,O);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(_,T,O),Be.resetDefaultState(),N=-1,W=null,E.pop(),E.length>0?d=E[E.length-1]:d=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Et(T,O,z,V){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Le.intersectsSprite(T)){V&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);const be=$.update(T),De=T.material;De.visible&&x.push(T,be,De,z,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Le.intersectsObject(T))){const be=$.update(T),De=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),xe.copy(be.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(De)){const Ne=be.groups;for(let Ve=0,Fe=Ne.length;Ve<Fe;Ve++){const ze=Ne[Ve],st=De[ze.materialIndex];st&&st.visible&&x.push(T,be,st,z,xe.z,ze)}}else De.visible&&x.push(T,be,De,z,xe.z,null)}}const ve=T.children;for(let be=0,De=ve.length;be<De;be++)Et(ve[be],O,z,V)}function Hs(T,O,z,V){const B=T.opaque,ve=T.transmissive,be=T.transparent;d.setupLightsView(z),k===!0&&Oe.setGlobalState(_.clippingPlanes,z),ve.length>0&&mc(B,ve,O,z),V&&Y.viewport(v.copy(V)),B.length>0&&Ui(B,O,z),ve.length>0&&Ui(ve,O,z),be.length>0&&Ui(be,O,z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function mc(T,O,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ve=ae.isWebGL2;ge===null&&(ge=new Dn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?bi:mn,minFilter:Rn,samples:ve?4:0})),_.getDrawingBufferSize(Te),ve?ge.setSize(Te.x,Te.y):ge.setSize(dr(Te.x),dr(Te.y));const be=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(Z),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();const De=_.toneMapping;_.toneMapping=pn,Ui(T,z,V),y.updateMultisampleRenderTarget(ge),y.updateRenderTargetMipmap(ge);let Ne=!1;for(let Ve=0,Fe=O.length;Ve<Fe;Ve++){const ze=O[Ve],st=ze.object,Ct=ze.geometry,ft=ze.material,qt=ze.group;if(ft.side===en&&st.layers.test(V.layers)){const tt=ft.side;ft.side=wt,ft.needsUpdate=!0,Vs(st,z,V,Ct,ft,qt),ft.side=tt,ft.needsUpdate=!0,Ne=!0}}Ne===!0&&(y.updateMultisampleRenderTarget(ge),y.updateRenderTargetMipmap(ge)),_.setRenderTarget(be),_.setClearColor(Z,U),_.toneMapping=De}function Ui(T,O,z){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ve=T.length;B<ve;B++){const be=T[B],De=be.object,Ne=be.geometry,Ve=V===null?be.material:V,Fe=be.group;De.layers.test(z.layers)&&Vs(De,O,z,Ne,Ve,Fe)}}function Vs(T,O,z,V,B,ve){T.onBeforeRender(_,O,z,V,B,ve),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(_,O,z,V,T,ve),B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=wt,B.needsUpdate=!0,_.renderBufferDirect(z,O,V,B,T,ve),B.side=_n,B.needsUpdate=!0,_.renderBufferDirect(z,O,V,B,T,ve),B.side=en):_.renderBufferDirect(z,O,V,B,T,ve),T.onAfterRender(_,O,z,V,B,ve)}function Ni(T,O,z){O.isScene!==!0&&(O=Ie);const V=pe.get(T),B=d.state.lights,ve=d.state.shadowsArray,be=B.state.version,De=Me.getParameters(T,B.state,ve,O,z),Ne=Me.getProgramCacheKey(De);let Ve=V.programs;V.environment=T.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(T.isMeshStandardMaterial?I:S).get(T.envMap||V.environment),Ve===void 0&&(T.addEventListener("dispose",re),Ve=new Map,V.programs=Ve);let Fe=Ve.get(Ne);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===be)return Ws(T,De),Fe}else De.uniforms=Me.getUniforms(T),T.onBuild(z,De,_),T.onBeforeCompile(De,_),Fe=Me.acquireProgram(De,Ne),Ve.set(Ne,Fe),V.uniforms=De.uniforms;const ze=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=Oe.uniform),Ws(T,De),V.needsLights=vc(T),V.lightsStateVersion=be,V.needsLights&&(ze.ambientLightColor.value=B.state.ambient,ze.lightProbe.value=B.state.probe,ze.directionalLights.value=B.state.directional,ze.directionalLightShadows.value=B.state.directionalShadow,ze.spotLights.value=B.state.spot,ze.spotLightShadows.value=B.state.spotShadow,ze.rectAreaLights.value=B.state.rectArea,ze.ltc_1.value=B.state.rectAreaLTC1,ze.ltc_2.value=B.state.rectAreaLTC2,ze.pointLights.value=B.state.point,ze.pointLightShadows.value=B.state.pointShadow,ze.hemisphereLights.value=B.state.hemi,ze.directionalShadowMap.value=B.state.directionalShadowMap,ze.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ze.spotShadowMap.value=B.state.spotShadowMap,ze.spotLightMatrix.value=B.state.spotLightMatrix,ze.spotLightMap.value=B.state.spotLightMap,ze.pointShadowMap.value=B.state.pointShadowMap,ze.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function ks(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ar.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ws(T,O){const z=pe.get(T);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function gc(T,O,z,V,B){O.isScene!==!0&&(O=Ie),y.resetTextureUnits();const ve=O.fog,be=V.isMeshStandardMaterial?O.environment:null,De=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:rn,Ne=(V.isMeshStandardMaterial?I:S).get(V.envMap||be),Ve=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!z.morphAttributes.position,st=!!z.morphAttributes.normal,Ct=!!z.morphAttributes.color;let ft=pn;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ft=_.toneMapping);const qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=qt!==void 0?qt.length:0,We=pe.get(V),br=d.state.lights;if(k===!0&&(ie===!0||T!==W)){const Ut=T===W&&V.id===N;Oe.setState(V,T,Ut)}let it=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==br.state.version||We.outputColorSpace!==De||B.isBatchedMesh&&We.batching===!1||!B.isBatchedMesh&&We.batching===!0||B.isInstancedMesh&&We.instancing===!1||!B.isInstancedMesh&&We.instancing===!0||B.isSkinnedMesh&&We.skinning===!1||!B.isSkinnedMesh&&We.skinning===!0||B.isInstancedMesh&&We.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&We.instancingColor===!1&&B.instanceColor!==null||We.envMap!==Ne||V.fog===!0&&We.fog!==ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Oe.numPlanes||We.numIntersection!==Oe.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Fe||We.morphTargets!==ze||We.morphNormals!==st||We.morphColors!==Ct||We.toneMapping!==ft||ae.isWebGL2===!0&&We.morphTargetsCount!==tt)&&(it=!0):(it=!0,We.__version=V.version);let xn=We.currentProgram;it===!0&&(xn=Ni(V,O,B));let Xs=!1,mi=!1,Ar=!1;const xt=xn.getUniforms(),Mn=We.uniforms;if(Y.useProgram(xn.program)&&(Xs=!0,mi=!0,Ar=!0),V.id!==N&&(N=V.id,mi=!0),Xs||W!==T){xt.setValue(P,"projectionMatrix",T.projectionMatrix),xt.setValue(P,"viewMatrix",T.matrixWorldInverse);const Ut=xt.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,xe.setFromMatrixPosition(T.matrixWorld)),ae.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,mi=!0,Ar=!0)}if(B.isSkinnedMesh){xt.setOptional(P,B,"bindMatrix"),xt.setOptional(P,B,"bindMatrixInverse");const Ut=B.skeleton;Ut&&(ae.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),xt.setValue(P,"boneTexture",Ut.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(xt.setOptional(P,B,"batchingTexture"),xt.setValue(P,"batchingTexture",B._matricesTexture,y));const wr=z.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0&&ae.isWebGL2===!0)&&He.update(B,z,xn),(mi||We.receiveShadow!==B.receiveShadow)&&(We.receiveShadow=B.receiveShadow,xt.setValue(P,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Mn.envMap.value=Ne,Mn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),mi&&(xt.setValue(P,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&_c(Mn,Ar),ve&&V.fog===!0&&fe.refreshFogUniforms(Mn,ve),fe.refreshMaterialUniforms(Mn,V,K,F,ge),ar.upload(P,ks(We),Mn,y)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ar.upload(P,ks(We),Mn,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(P,"center",B.center),xt.setValue(P,"modelViewMatrix",B.modelViewMatrix),xt.setValue(P,"normalMatrix",B.normalMatrix),xt.setValue(P,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ut=V.uniformsGroups;for(let Rr=0,xc=Ut.length;Rr<xc;Rr++)if(ae.isWebGL2){const Ys=Ut[Rr];C.update(Ys,xn),C.bind(Ys,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function _c(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function vc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,O,z){pe.get(T.texture).__webglTexture=O,pe.get(T.depthTexture).__webglTexture=z;const V=pe.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const z=pe.get(T);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,z=0){b=T,L=O,w=z;let V=!0,B=null,ve=!1,be=!1;if(T){const Ne=pe.get(T);Ne.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(P.FRAMEBUFFER,null),V=!1):Ne.__webglFramebuffer===void 0?y.setupRenderTarget(T):Ne.__hasExternalTextures&&y.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const Fe=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?B=Fe[O][z]:B=Fe[O],ve=!0):ae.isWebGL2&&T.samples>0&&y.useMultisampledRTT(T)===!1?B=pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?B=Fe[z]:B=Fe,v.copy(T.viewport),A.copy(T.scissor),H=T.scissorTest}else v.copy(J).multiplyScalar(K).floor(),A.copy(ne).multiplyScalar(K).floor(),H=ue;if(Y.bindFramebuffer(P.FRAMEBUFFER,B)&&ae.drawBuffers&&V&&Y.drawBuffers(T,B),Y.viewport(v),Y.scissor(A),Y.setScissorTest(H),ve){const Ne=pe.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,z)}else if(be){const Ne=pe.get(T.texture),Ve=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ne.__webglTexture,z||0,Ve)}N=-1},this.readRenderTargetPixels=function(T,O,z,V,B,ve,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(De=De[be]),De){Y.bindFramebuffer(P.FRAMEBUFFER,De);try{const Ne=T.texture,Ve=Ne.format,Fe=Ne.type;if(Ve!==Vt&&me.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===bi&&(X.has("EXT_color_buffer_half_float")||ae.isWebGL2&&X.has("EXT_color_buffer_float"));if(Fe!==mn&&me.convert(Fe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===tn&&(ae.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-V&&z>=0&&z<=T.height-B&&P.readPixels(O,z,V,B,me.convert(Ve),me.convert(Fe),ve)}finally{const Ne=b!==null?pe.get(b).__webglFramebuffer:null;Y.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,O,z=0){const V=Math.pow(2,-z),B=Math.floor(O.image.width*V),ve=Math.floor(O.image.height*V);y.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,T.x,T.y,B,ve),Y.unbindTexture()},this.copyTextureToTexture=function(T,O,z,V=0){const B=O.image.width,ve=O.image.height,be=me.convert(z.format),De=me.convert(z.type);y.setTexture2D(z,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,V,T.x,T.y,B,ve,be,De,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,V,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,V,T.x,T.y,be,De,O.image),V===0&&z.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,O,z,V,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,be=T.max.y-T.min.y+1,De=T.max.z-T.min.z+1,Ne=me.convert(V.format),Ve=me.convert(V.type);let Fe;if(V.isData3DTexture)y.setTexture3D(V,0),Fe=P.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)y.setTexture2DArray(V,0),Fe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);const ze=P.getParameter(P.UNPACK_ROW_LENGTH),st=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ct=P.getParameter(P.UNPACK_SKIP_PIXELS),ft=P.getParameter(P.UNPACK_SKIP_ROWS),qt=P.getParameter(P.UNPACK_SKIP_IMAGES),tt=z.isCompressedTexture?z.mipmaps[B]:z.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?P.texSubImage3D(Fe,B,O.x,O.y,O.z,ve,be,De,Ne,Ve,tt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Fe,B,O.x,O.y,O.z,ve,be,De,Ne,tt.data)):P.texSubImage3D(Fe,B,O.x,O.y,O.z,ve,be,De,Ne,Ve,tt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ct),P.pixelStorei(P.UNPACK_SKIP_ROWS,ft),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qt),B===0&&V.generateMipmaps&&P.generateMipmap(Fe),Y.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){L=0,w=0,b=null,Y.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Es?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Ln:Oa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ln?_t:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Wp extends rc{}Wp.prototype.isWebGL1Renderer=!0;class Xp extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Yt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],p=n[r+1]-u,m=(a-u)/p;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new se:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],a=[],o=new D,c=new pt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(lt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(lt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class As extends Yt{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new se,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*u-m*h+this.aX,l=p*h+m*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yp extends As{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ws(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let p=(a-s)/l-(o-s)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+h)+(c-o)/h;p*=u,m*=u,r(a,o,p,m)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const ir=new D,rs=new ws,ss=new ws,os=new ws;class qp extends Yt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(ir.subVectors(r[0],r[1]).add(r[0]),l=ir);const h=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ir.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),x=Math.pow(h.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(u),m);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),rs.initNonuniformCatmullRom(l.x,h.x,p.x,u.x,g,x,d),ss.initNonuniformCatmullRom(l.y,h.y,p.y,u.y,g,x,d),os.initNonuniformCatmullRom(l.z,h.z,p.z,u.z,g,x,d)}else this.curveType==="catmullrom"&&(rs.initCatmullRom(l.x,h.x,p.x,u.x,this.tension),ss.initCatmullRom(l.y,h.y,p.y,u.y,this.tension),os.initCatmullRom(l.z,h.z,p.z,u.z,this.tension));return n.set(rs.calc(c),ss.calc(c),os.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ga(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function Zp(i,e){const t=1-i;return t*t*e}function jp(i,e){return 2*(1-i)*i*e}function Kp(i,e){return i*i*e}function yi(i,e,t,n){return Zp(i,e)+jp(i,t)+Kp(i,n)}function Jp(i,e){const t=1-i;return t*t*t*e}function $p(i,e){const t=1-i;return 3*t*t*i*e}function Qp(i,e){return 3*(1-i)*i*i*e}function em(i,e){return i*i*i*e}function Ti(i,e,t,n,r){return Jp(i,e)+$p(i,t)+Qp(i,n)+em(i,r)}class sc extends Yt{constructor(e=new se,t=new se,n=new se,r=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new se){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ti(e,r.x,s.x,a.x,o.x),Ti(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tm extends Yt{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ti(e,r.x,s.x,a.x,o.x),Ti(e,r.y,s.y,a.y,o.y),Ti(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oc extends Yt{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nm extends Yt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ac extends Yt{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(yi(e,r.x,s.x,a.x),yi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cc extends Yt{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(yi(e,r.x,s.x,a.x),yi(e,r.y,s.y,a.y),yi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lc extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(ga(o,c.x,l.x,u.x,h.x),ga(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new se().fromArray(r))}return this}}var mr=Object.freeze({__proto__:null,ArcCurve:Yp,CatmullRomCurve3:qp,CubicBezierCurve:sc,CubicBezierCurve3:tm,EllipseCurve:As,LineCurve:oc,LineCurve3:nm,QuadraticBezierCurve:ac,QuadraticBezierCurve3:cc,SplineCurve:lc});class im extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new mr[r.type]().fromJSON(r))}return this}}class _s extends im{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new oc(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ac(this.currentPoint.clone(),new se(e,t),new se(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new sc(this.currentPoint.clone(),new se(e,t),new se(n,r),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new As(e,t,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Er extends mt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=lt(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/t,h=new D,p=new se,m=new D,g=new D,x=new D;let d=0,f=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:d=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,m.x=f*1,m.y=-d,m.z=f*0,x.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:d=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,m.x=f*1,m.y=-d,m.z=f*0,g.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),c.push(m.x,m.y,m.z),x.copy(g)}for(let E=0;E<=t;E++){const _=n+E*u*r,M=Math.sin(_),L=Math.cos(_);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*M,h.y=e[w].y,h.z=e[w].x*L,a.push(h.x,h.y,h.z),p.x=E/t,p.y=w/(e.length-1),o.push(p.x,p.y);const b=c[3*w+0]*M,N=c[3*w+1],W=c[3*w+0]*L;l.push(b,N,W)}}for(let E=0;E<t;E++)for(let _=0;_<e.length-1;_++){const M=_+E*e.length,L=M,w=M+e.length,b=M+e.length+1,N=M+1;s.push(L,w,N),s.push(b,N,w)}this.setIndex(s),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.points,e.segments,e.phiStart,e.phiLength)}}class Rs extends Er{constructor(e=1,t=1,n=4,r=8){const s=new _s;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Rs(e.radius,e.length,e.capSegments,e.radialSegments)}}class Cs extends mt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new D,u=new se;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){const m=n+h/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yr extends mt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],m=[];let g=0;const x=[],d=n/2;let f=0;E(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(m,2));function E(){const M=new D,L=new D;let w=0;const b=(t-e)/n;for(let N=0;N<=s;N++){const W=[],v=N/s,A=v*(t-e)+e;for(let H=0;H<=r;H++){const Z=H/r,U=Z*c+o,G=Math.sin(U),F=Math.cos(U);L.x=A*G,L.y=-v*n+d,L.z=A*F,h.push(L.x,L.y,L.z),M.set(G,b,F).normalize(),p.push(M.x,M.y,M.z),m.push(Z,1-v),W.push(g++)}x.push(W)}for(let N=0;N<r;N++)for(let W=0;W<s;W++){const v=x[W][N],A=x[W+1][N],H=x[W+1][N+1],Z=x[W][N+1];u.push(v,A,Z),u.push(A,H,Z),w+=6}l.addGroup(f,w,0),f+=w}function _(M){const L=g,w=new se,b=new D;let N=0;const W=M===!0?e:t,v=M===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,d*v,0),p.push(0,v,0),m.push(.5,.5),g++;const A=g;for(let H=0;H<=r;H++){const U=H/r*c+o,G=Math.cos(U),F=Math.sin(U);b.x=W*F,b.y=d*v,b.z=W*G,h.push(b.x,b.y,b.z),p.push(0,v,0),w.x=G*.5+.5,w.y=F*.5*v+.5,m.push(w.x,w.y),g++}for(let H=0;H<r;H++){const Z=L+H,U=A+H;M===!0?u.push(U,U+1,Z):u.push(U+1,U,Z),N+=3}l.addGroup(f,N,M===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ps extends yr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ps(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ls extends mt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(s.slice(),3)),this.setAttribute("uv",new ke(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const _=new D,M=new D,L=new D;for(let w=0;w<t.length;w+=3)m(t[w+0],_),m(t[w+1],M),m(t[w+2],L),c(_,M,L,E)}function c(E,_,M,L){const w=L+1,b=[];for(let N=0;N<=w;N++){b[N]=[];const W=E.clone().lerp(M,N/w),v=_.clone().lerp(M,N/w),A=w-N;for(let H=0;H<=A;H++)H===0&&N===w?b[N][H]=W:b[N][H]=W.clone().lerp(v,H/A)}for(let N=0;N<w;N++)for(let W=0;W<2*(w-N)-1;W++){const v=Math.floor(W/2);W%2===0?(p(b[N][v+1]),p(b[N+1][v]),p(b[N][v])):(p(b[N][v+1]),p(b[N+1][v+1]),p(b[N+1][v]))}}function l(E){const _=new D;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(E),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function u(){const E=new D;for(let _=0;_<s.length;_+=3){E.x=s[_+0],E.y=s[_+1],E.z=s[_+2];const M=d(E)/2/Math.PI+.5,L=f(E)/Math.PI+.5;a.push(M,1-L)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const _=a[E+0],M=a[E+2],L=a[E+4],w=Math.max(_,M,L),b=Math.min(_,M,L);w>.9&&b<.1&&(_<.2&&(a[E+0]+=1),M<.2&&(a[E+2]+=1),L<.2&&(a[E+4]+=1))}}function p(E){s.push(E.x,E.y,E.z)}function m(E,_){const M=E*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function g(){const E=new D,_=new D,M=new D,L=new D,w=new se,b=new se,N=new se;for(let W=0,v=0;W<s.length;W+=9,v+=6){E.set(s[W+0],s[W+1],s[W+2]),_.set(s[W+3],s[W+4],s[W+5]),M.set(s[W+6],s[W+7],s[W+8]),w.set(a[v+0],a[v+1]),b.set(a[v+2],a[v+3]),N.set(a[v+4],a[v+5]),L.copy(E).add(_).add(M).divideScalar(3);const A=d(L);x(w,v+0,E,A),x(b,v+2,_,A),x(N,v+4,M,A)}}function x(E,_,M,L){L<0&&E.x===1&&(a[_]=E.x-1),M.x===0&&M.z===0&&(a[_]=L/2/Math.PI+.5)}function d(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.vertices,e.indices,e.radius,e.details)}}class uc extends _s{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new _s().fromJSON(r))}return this}}const rm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=hc(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,p,m;if(n&&(s=lm(i,e,s,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(let g=t;g<r;g+=t)h=i[g],p=i[g+1],h<o&&(o=h),p<c&&(c=p),h>l&&(l=h),p>u&&(u=p);m=Math.max(l-o,u-c),m=m!==0?32767/m:0}return wi(s,a,t,o,c,m,0),a}};function hc(i,e,t,n,r){let s,a;if(r===Mm(i,e,t,n)>0)for(s=e;s<t;s+=n)a=_a(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=_a(s,i[s],i[s+1],a);return a&&Tr(a,a.next)&&(Ci(a),a=a.next),a}function Nn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Tr(t,t.next)||nt(t.prev,t,t.next)===0)){if(Ci(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wi(i,e,t,n,r,s,a){if(!i)return;!a&&s&&pm(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?om(i,n,r,s):sm(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ci(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=am(Nn(i),e,t),wi(i,e,t,n,r,s,2)):a===2&&cm(i,e,t,n,r,s):wi(Nn(i),e,t,n,r,s,1);break}}}function sm(i){const e=i.prev,t=i,n=i.next;if(nt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,p=r>s?r>a?r:a:s>a?s:a,m=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=m&&oi(r,o,s,c,a,l,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function om(i,e,t,n){const r=i.prev,s=i,a=i.next;if(nt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,p=a.y,m=o<c?o<l?o:l:c<l?c:l,g=u<h?u<p?u:p:h<p?h:p,x=o>c?o>l?o:l:c>l?c:l,d=u>h?u>p?u:p:h>p?h:p,f=vs(m,g,e,t,n),E=vs(x,d,e,t,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=f&&M&&M.z<=E;){if(_.x>=m&&_.x<=x&&_.y>=g&&_.y<=d&&_!==r&&_!==a&&oi(o,u,c,h,l,p,_.x,_.y)&&nt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==a&&oi(o,u,c,h,l,p,M.x,M.y)&&nt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=x&&_.y>=g&&_.y<=d&&_!==r&&_!==a&&oi(o,u,c,h,l,p,_.x,_.y)&&nt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=E;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=d&&M!==r&&M!==a&&oi(o,u,c,h,l,p,M.x,M.y)&&nt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function am(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Tr(r,s)&&fc(r,n,n.next,s)&&Ri(r,s)&&Ri(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ci(n),Ci(n.next),n=i=s),n=n.next}while(n!==i);return Nn(n)}function cm(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_m(a,o)){let c=dc(a,o);a=Nn(a,a.next),c=Nn(c,c.next),wi(a,e,t,n,r,s,0),wi(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function lm(i,e,t,n){const r=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=hc(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(gm(l));for(r.sort(um),s=0;s<r.length;s++)t=hm(r[s],t);return t}function um(i,e){return i.x-e.x}function hm(i,e){const t=fm(i,e);if(!t)return e;const n=dc(t,i);return Nn(n,n.next),Nn(t,t.next)}function fm(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>n&&(n=p,r=t.x<t.next.x?t:t.next,p===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,l=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&oi(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Ri(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&dm(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function dm(i,e){return nt(i.prev,i,e.prev)<0&&nt(e.next,i,i.next)<0}function pm(i,e,t,n){let r=i;do r.z===0&&(r.z=vs(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,mm(r)}function mm(i){let e,t,n,r,s,a,o,c,l=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(a>1);return i}function vs(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function _m(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vm(i,e)&&(Ri(i,e)&&Ri(e,i)&&xm(i,e)&&(nt(i.prev,i,e.prev)||nt(i,e.prev,e))||Tr(i,e)&&nt(i.prev,i,i.next)>0&&nt(e.prev,e,e.next)>0)}function nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Tr(i,e){return i.x===e.x&&i.y===e.y}function fc(i,e,t,n){const r=sr(nt(i,e,t)),s=sr(nt(i,e,n)),a=sr(nt(t,n,i)),o=sr(nt(t,n,e));return!!(r!==s&&a!==o||r===0&&rr(i,t,e)||s===0&&rr(i,n,e)||a===0&&rr(t,i,n)||o===0&&rr(t,e,n))}function rr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sr(i){return i>0?1:i<0?-1:0}function vm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ri(i,e){return nt(i.prev,i,i.next)<0?nt(i,e,i.next)>=0&&nt(i,i.prev,e)>=0:nt(i,e,i.prev)<0||nt(i,i.next,e)<0}function xm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dc(i,e){const t=new xs(i.i,i.x,i.y),n=new xs(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function _a(i,e,t,n){const r=new xs(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ci(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xs(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mm(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class gn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return gn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];va(e),xa(n,e);let a=e.length;t.forEach(va);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,xa(n,t[c]);const o=rm.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function va(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xa(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ds extends mt{constructor(e=new uc([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new ke(r,3)),this.setAttribute("uv",new ke(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Sm;let _,M=!1,L,w,b,N;f&&(_=f.getSpacedPoints(u),M=!0,p=!1,L=f.computeFrenetFrames(u,!1),w=new D,b=new D,N=new D),p||(d=0,m=0,g=0,x=0);const W=o.extractPoints(l);let v=W.shape;const A=W.holes;if(!gn.isClockWise(v)){v=v.reverse();for(let P=0,le=A.length;P<le;P++){const X=A[P];gn.isClockWise(X)&&(A[P]=X.reverse())}}const Z=gn.triangulateShape(v,A),U=v;for(let P=0,le=A.length;P<le;P++){const X=A[P];v=v.concat(X)}function G(P,le,X){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(le,X)}const F=v.length,K=Z.length;function q(P,le,X){let ae,Y,ye;const pe=P.x-le.x,y=P.y-le.y,S=X.x-P.x,I=X.y-P.y,te=pe*pe+y*y,Q=pe*I-y*S;if(Math.abs(Q)>Number.EPSILON){const $=Math.sqrt(te),Me=Math.sqrt(S*S+I*I),fe=le.x-y/$,_e=le.y+pe/$,Ce=X.x-I/Me,Oe=X.y+S/Me,ee=((Ce-fe)*I-(Oe-_e)*S)/(pe*I-y*S);ae=fe+pe*ee-P.x,Y=_e+y*ee-P.y;const qe=ae*ae+Y*Y;if(qe<=2)return new se(ae,Y);ye=Math.sqrt(qe/2)}else{let $=!1;pe>Number.EPSILON?S>Number.EPSILON&&($=!0):pe<-Number.EPSILON?S<-Number.EPSILON&&($=!0):Math.sign(y)===Math.sign(I)&&($=!0),$?(ae=-y,Y=pe,ye=Math.sqrt(te)):(ae=pe,Y=y,ye=Math.sqrt(te/2))}return new se(ae/ye,Y/ye)}const j=[];for(let P=0,le=U.length,X=le-1,ae=P+1;P<le;P++,X++,ae++)X===le&&(X=0),ae===le&&(ae=0),j[P]=q(U[P],U[X],U[ae]);const J=[];let ne,ue=j.concat();for(let P=0,le=A.length;P<le;P++){const X=A[P];ne=[];for(let ae=0,Y=X.length,ye=Y-1,pe=ae+1;ae<Y;ae++,ye++,pe++)ye===Y&&(ye=0),pe===Y&&(pe=0),ne[ae]=q(X[ae],X[ye],X[pe]);J.push(ne),ue=ue.concat(ne)}for(let P=0;P<d;P++){const le=P/d,X=m*Math.cos(le*Math.PI/2),ae=g*Math.sin(le*Math.PI/2)+x;for(let Y=0,ye=U.length;Y<ye;Y++){const pe=G(U[Y],j[Y],ae);Se(pe.x,pe.y,-X)}for(let Y=0,ye=A.length;Y<ye;Y++){const pe=A[Y];ne=J[Y];for(let y=0,S=pe.length;y<S;y++){const I=G(pe[y],ne[y],ae);Se(I.x,I.y,-X)}}}const Le=g+x;for(let P=0;P<F;P++){const le=p?G(v[P],ue[P],Le):v[P];M?(b.copy(L.normals[0]).multiplyScalar(le.x),w.copy(L.binormals[0]).multiplyScalar(le.y),N.copy(_[0]).add(b).add(w),Se(N.x,N.y,N.z)):Se(le.x,le.y,0)}for(let P=1;P<=u;P++)for(let le=0;le<F;le++){const X=p?G(v[le],ue[le],Le):v[le];M?(b.copy(L.normals[P]).multiplyScalar(X.x),w.copy(L.binormals[P]).multiplyScalar(X.y),N.copy(_[P]).add(b).add(w),Se(N.x,N.y,N.z)):Se(X.x,X.y,h/u*P)}for(let P=d-1;P>=0;P--){const le=P/d,X=m*Math.cos(le*Math.PI/2),ae=g*Math.sin(le*Math.PI/2)+x;for(let Y=0,ye=U.length;Y<ye;Y++){const pe=G(U[Y],j[Y],ae);Se(pe.x,pe.y,h+X)}for(let Y=0,ye=A.length;Y<ye;Y++){const pe=A[Y];ne=J[Y];for(let y=0,S=pe.length;y<S;y++){const I=G(pe[y],ne[y],ae);M?Se(I.x,I.y+_[u-1].y,_[u-1].x+X):Se(I.x,I.y,h+X)}}}k(),ie();function k(){const P=r.length/3;if(p){let le=0,X=F*le;for(let ae=0;ae<K;ae++){const Y=Z[ae];Te(Y[2]+X,Y[1]+X,Y[0]+X)}le=u+d*2,X=F*le;for(let ae=0;ae<K;ae++){const Y=Z[ae];Te(Y[0]+X,Y[1]+X,Y[2]+X)}}else{for(let le=0;le<K;le++){const X=Z[le];Te(X[2],X[1],X[0])}for(let le=0;le<K;le++){const X=Z[le];Te(X[0]+F*u,X[1]+F*u,X[2]+F*u)}}n.addGroup(P,r.length/3-P,0)}function ie(){const P=r.length/3;let le=0;ge(U,le),le+=U.length;for(let X=0,ae=A.length;X<ae;X++){const Y=A[X];ge(Y,le),le+=Y.length}n.addGroup(P,r.length/3-P,1)}function ge(P,le){let X=P.length;for(;--X>=0;){const ae=X;let Y=X-1;Y<0&&(Y=P.length-1);for(let ye=0,pe=u+d*2;ye<pe;ye++){const y=F*ye,S=F*(ye+1),I=le+ae+y,te=le+Y+y,Q=le+Y+S,$=le+ae+S;xe(I,te,Q,$)}}}function Se(P,le,X){c.push(P),c.push(le),c.push(X)}function Te(P,le,X){Ie(P),Ie(le),Ie(X);const ae=r.length/3,Y=E.generateTopUV(n,r,ae-3,ae-2,ae-1);Ae(Y[0]),Ae(Y[1]),Ae(Y[2])}function xe(P,le,X,ae){Ie(P),Ie(le),Ie(ae),Ie(le),Ie(X),Ie(ae);const Y=r.length/3,ye=E.generateSideWallUV(n,r,Y-6,Y-3,Y-2,Y-1);Ae(ye[0]),Ae(ye[1]),Ae(ye[3]),Ae(ye[1]),Ae(ye[2]),Ae(ye[3])}function Ie(P){r.push(c[P*3+0]),r.push(c[P*3+1]),r.push(c[P*3+2])}function Ae(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Em(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new mr[r.type]().fromJSON(r)),new Ds(n,e.options)}}const Sm={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new se(s,a),new se(o,c),new se(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],p=e[r*3],m=e[r*3+1],g=e[r*3+2],x=e[s*3],d=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new se(a,1-c),new se(l,1-h),new se(p,1-g),new se(x,1-f)]:[new se(o,1-c),new se(u,1-h),new se(m,1-g),new se(d,1-f)]}};function Em(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Us extends Ls{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Us(e.radius,e.detail)}}class Ns extends mt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const p=(t-e)/r,m=new D,g=new se;for(let x=0;x<=r;x++){for(let d=0;d<=n;d++){const f=s+d/n*a;m.x=h*Math.cos(f),m.y=h*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=p}for(let x=0;x<r;x++){const d=x*(n+1);for(let f=0;f<n;f++){const E=f+d,_=E,M=E+n+1,L=E+n+2,w=E+1;o.push(_,M,w),o.push(M,L,w)}}this.setIndex(o),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Is extends mt{constructor(e=new uc([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(s,3)),this.setAttribute("uv",new ke(a,2));function l(u){const h=r.length/3,p=u.extractPoints(t);let m=p.shape;const g=p.holes;gn.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,f=g.length;d<f;d++){const E=g[d];gn.isClockWise(E)===!0&&(g[d]=E.reverse())}const x=gn.triangulateShape(m,g);for(let d=0,f=g.length;d<f;d++){const E=g[d];m=m.concat(E)}for(let d=0,f=m.length;d<f;d++){const E=m[d];r.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let d=0,f=x.length;d<f;d++){const E=x[d],_=E[0]+h,M=E[1]+h,L=E[2]+h;n.push(_,M,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ym(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Is(n,e.curveSegments)}}function ym(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class gr extends mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new D,p=new D,m=[],g=[],x=[],d=[];for(let f=0;f<=n;f++){const E=[],_=f/n;let M=0;f===0&&a===0?M=.5/t:f===n&&c===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const w=L/t;h.x=-e*Math.cos(r+w*s)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(r+w*s)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),d.push(w+M,1-_),E.push(l++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const _=u[f][E+1],M=u[f][E],L=u[f+1][E],w=u[f+1][E+1];(f!==0||a>0)&&m.push(_,M,w),(f!==n-1||c<Math.PI)&&m.push(M,L,w)}this.setIndex(m),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Os extends mt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new D,h=new D,p=new D;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const x=g/r*s,d=m/n*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(x),h.y=(e+t*Math.cos(d))*Math.sin(x),h.z=t*Math.sin(d),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(h,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const x=(r+1)*m+g-1,d=(r+1)*(m-1)+g-1,f=(r+1)*(m-1)+g,E=(r+1)*m+g;a.push(x,d,E),a.push(d,f,E)}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fs extends mt{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],c=[],l=[],u=[],h=new D,p=new D,m=new D,g=new D,x=new D,d=new D,f=new D;for(let _=0;_<=n;++_){const M=_/n*s*Math.PI*2;E(M,s,a,e,m),E(M+.01,s,a,e,g),d.subVectors(g,m),f.addVectors(g,m),x.crossVectors(d,f),f.crossVectors(x,d),x.normalize(),f.normalize();for(let L=0;L<=r;++L){const w=L/r*Math.PI*2,b=-t*Math.cos(w),N=t*Math.sin(w);h.x=m.x+(b*f.x+N*x.x),h.y=m.y+(b*f.y+N*x.y),h.z=m.z+(b*f.z+N*x.z),c.push(h.x,h.y,h.z),p.subVectors(h,m).normalize(),l.push(p.x,p.y,p.z),u.push(_/n),u.push(L/r)}}for(let _=1;_<=n;_++)for(let M=1;M<=r;M++){const L=(r+1)*(_-1)+(M-1),w=(r+1)*_+(M-1),b=(r+1)*_+M,N=(r+1)*(_-1)+M;o.push(L,w,N),o.push(w,b,N)}this.setIndex(o),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(u,2));function E(_,M,L,w,b){const N=Math.cos(_),W=Math.sin(_),v=L/M*_,A=Math.cos(v);b.x=w*(2+A)*.5*N,b.y=w*(2+A)*W*.5,b.z=w*Math.sin(v)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Bs extends mt{constructor(e=new cc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new se;let u=new D;const h=[],p=[],m=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(m,2));function x(){for(let _=0;_<t;_++)d(_);d(s===!1?t:0),E(),f()}function d(_){u=e.getPointAt(_/t,u);const M=a.normals[_],L=a.binormals[_];for(let w=0;w<=r;w++){const b=w/r*Math.PI*2,N=Math.sin(b),W=-Math.cos(b);c.x=W*M.x+N*L.x,c.y=W*M.y+N*L.y,c.z=W*M.z+N*L.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function f(){for(let _=1;_<=t;_++)for(let M=1;M<=r;M++){const L=(r+1)*(_-1)+(M-1),w=(r+1)*_+(M-1),b=(r+1)*_+M,N=(r+1)*(_-1)+M;g.push(L,w,N),g.push(w,b,N)}}function E(){for(let _=0;_<=t;_++)for(let M=0;M<=r;M++)l.x=_/t,l.y=M/r,m.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bs(new mr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Tm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ma(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ma();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ma(){return(typeof performance>"u"?Date:performance).now()}class Sa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ms}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ms);const Ea={type:"change"},as={type:"start"},ya={type:"end"},or=new Va,Ta=new hn,bm=Math.cos(70*Ul.DEG2RAD);class Am extends On{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ce),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ea),n.update(),s=r.NONE},this.update=function(){const C=new D,ce=new Un().setFromUnitVectors(e.up,new D(0,1,0)),de=ce.clone().invert(),Re=new D,R=new Un,oe=new D,re=2*Math.PI;return function(Pe=null){const Ze=n.object.position;C.copy(Ze).sub(n.target),C.applyQuaternion(ce),o.setFromVector3(C),n.autoRotate&&s===r.NONE&&H(v(Pe)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ye=n.minAzimuthAngle,$e=n.maxAzimuthAngle;isFinite(Ye)&&isFinite($e)&&(Ye<-Math.PI?Ye+=re:Ye>Math.PI&&(Ye-=re),$e<-Math.PI?$e+=re:$e>Math.PI&&($e-=re),Ye<=$e?o.theta=Math.max(Ye,Math.min($e,o.theta)):o.theta=o.theta>(Ye+$e)/2?Math.max(Ye,o.theta):Math.min($e,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=J(o.radius):o.radius=J(o.radius*l),C.setFromSpherical(o),C.applyQuaternion(de),Ze.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let gt=!1;if(n.zoomToCursor&&w){let je=null;if(n.object.isPerspectiveCamera){const rt=C.length();je=J(rt*l);const Et=rt-je;n.object.position.addScaledVector(M,Et),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const rt=new D(L.x,L.y,0);rt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),gt=!0;const Et=new D(L.x,L.y,0);Et.unproject(n.object),n.object.position.sub(Et).add(rt),n.object.updateMatrixWorld(),je=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;je!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(je).add(n.object.position):(or.origin.copy(n.object.position),or.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(or.direction))<bm?e.lookAt(n.target):(Ta.setFromNormalAndCoplanarPoint(n.object.up,n.target),or.intersectPlane(Ta,n.target))))}else n.object.isOrthographicCamera&&(gt=l!==1,gt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,w=!1,gt||Re.distanceToSquared(n.object.position)>a||8*(1-R.dot(n.object.quaternion))>a||oe.distanceToSquared(n.target)>0?(n.dispatchEvent(Ea),Re.copy(n.object.position),R.copy(n.object.quaternion),oe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qe),n.domElement.removeEventListener("pointerdown",y),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",I),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ce),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Sa,c=new Sa;let l=1;const u=new D,h=new se,p=new se,m=new se,g=new se,x=new se,d=new se,f=new se,E=new se,_=new se,M=new D,L=new se;let w=!1;const b=[],N={};let W=!1;function v(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function A(C){const ce=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*ce)}function H(C){c.theta-=C}function Z(C){c.phi-=C}const U=function(){const C=new D;return function(de,Re){C.setFromMatrixColumn(Re,0),C.multiplyScalar(-de),u.add(C)}}(),G=function(){const C=new D;return function(de,Re){n.screenSpacePanning===!0?C.setFromMatrixColumn(Re,1):(C.setFromMatrixColumn(Re,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(de),u.add(C)}}(),F=function(){const C=new D;return function(de,Re){const R=n.domElement;if(n.object.isPerspectiveCamera){const oe=n.object.position;C.copy(oe).sub(n.target);let re=C.length();re*=Math.tan(n.object.fov/2*Math.PI/180),U(2*de*re/R.clientHeight,n.object.matrix),G(2*Re*re/R.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(de*(n.object.right-n.object.left)/n.object.zoom/R.clientWidth,n.object.matrix),G(Re*(n.object.top-n.object.bottom)/n.object.zoom/R.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C,ce){if(!n.zoomToCursor)return;w=!0;const de=n.domElement.getBoundingClientRect(),Re=C-de.left,R=ce-de.top,oe=de.width,re=de.height;L.x=Re/oe*2-1,L.y=-(R/re)*2+1,M.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function ne(C){h.set(C.clientX,C.clientY)}function ue(C){j(C.clientX,C.clientX),f.set(C.clientX,C.clientY)}function Le(C){g.set(C.clientX,C.clientY)}function k(C){p.set(C.clientX,C.clientY),m.subVectors(p,h).multiplyScalar(n.rotateSpeed);const ce=n.domElement;H(2*Math.PI*m.x/ce.clientHeight),Z(2*Math.PI*m.y/ce.clientHeight),h.copy(p),n.update()}function ie(C){E.set(C.clientX,C.clientY),_.subVectors(E,f),_.y>0?K(A(_.y)):_.y<0&&q(A(_.y)),f.copy(E),n.update()}function ge(C){x.set(C.clientX,C.clientY),d.subVectors(x,g).multiplyScalar(n.panSpeed),F(d.x,d.y),g.copy(x),n.update()}function Se(C){j(C.clientX,C.clientY),C.deltaY<0?q(A(C.deltaY)):C.deltaY>0&&K(A(C.deltaY)),n.update()}function Te(C){let ce=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),ce=!0;break}ce&&(C.preventDefault(),n.update())}function xe(C){if(b.length===1)h.set(C.pageX,C.pageY);else{const ce=me(C),de=.5*(C.pageX+ce.x),Re=.5*(C.pageY+ce.y);h.set(de,Re)}}function Ie(C){if(b.length===1)g.set(C.pageX,C.pageY);else{const ce=me(C),de=.5*(C.pageX+ce.x),Re=.5*(C.pageY+ce.y);g.set(de,Re)}}function Ae(C){const ce=me(C),de=C.pageX-ce.x,Re=C.pageY-ce.y,R=Math.sqrt(de*de+Re*Re);f.set(0,R)}function P(C){n.enableZoom&&Ae(C),n.enablePan&&Ie(C)}function le(C){n.enableZoom&&Ae(C),n.enableRotate&&xe(C)}function X(C){if(b.length==1)p.set(C.pageX,C.pageY);else{const de=me(C),Re=.5*(C.pageX+de.x),R=.5*(C.pageY+de.y);p.set(Re,R)}m.subVectors(p,h).multiplyScalar(n.rotateSpeed);const ce=n.domElement;H(2*Math.PI*m.x/ce.clientHeight),Z(2*Math.PI*m.y/ce.clientHeight),h.copy(p)}function ae(C){if(b.length===1)x.set(C.pageX,C.pageY);else{const ce=me(C),de=.5*(C.pageX+ce.x),Re=.5*(C.pageY+ce.y);x.set(de,Re)}d.subVectors(x,g).multiplyScalar(n.panSpeed),F(d.x,d.y),g.copy(x)}function Y(C){const ce=me(C),de=C.pageX-ce.x,Re=C.pageY-ce.y,R=Math.sqrt(de*de+Re*Re);E.set(0,R),_.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),K(_.y),f.copy(E);const oe=(C.pageX+ce.x)*.5,re=(C.pageY+ce.y)*.5;j(oe,re)}function ye(C){n.enableZoom&&Y(C),n.enablePan&&ae(C)}function pe(C){n.enableZoom&&Y(C),n.enableRotate&&X(C)}function y(C){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",I)),He(C),C.pointerType==="touch"?Oe(C):te(C))}function S(C){n.enabled!==!1&&(C.pointerType==="touch"?ee(C):Q(C))}function I(C){switch(Ue(C),b.length){case 0:n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",I),n.dispatchEvent(ya),s=r.NONE;break;case 1:const ce=b[0],de=N[ce];Oe({pointerId:ce,pageX:de.x,pageY:de.y});break}}function te(C){let ce;switch(C.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case zn.DOLLY:if(n.enableZoom===!1)return;ue(C),s=r.DOLLY;break;case zn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;Le(C),s=r.PAN}else{if(n.enableRotate===!1)return;ne(C),s=r.ROTATE}break;case zn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;ne(C),s=r.ROTATE}else{if(n.enablePan===!1)return;Le(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(as)}function Q(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(C);break;case r.DOLLY:if(n.enableZoom===!1)return;ie(C);break;case r.PAN:if(n.enablePan===!1)return;ge(C);break}}function $(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(as),Se(Me(C)),n.dispatchEvent(ya))}function Me(C){const ce=C.deltaMode,de={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ce){case 1:de.deltaY*=16;break;case 2:de.deltaY*=100;break}return C.ctrlKey&&!W&&(de.deltaY*=10),de}function fe(C){C.key==="Control"&&(W=!0,n.domElement.getRootNode().addEventListener("keyup",_e,{passive:!0,capture:!0}))}function _e(C){C.key==="Control"&&(W=!1,n.domElement.getRootNode().removeEventListener("keyup",_e,{passive:!0,capture:!0}))}function Ce(C){n.enabled===!1||n.enablePan===!1||Te(C)}function Oe(C){switch(we(C),b.length){case 1:switch(n.touches.ONE){case Gn.ROTATE:if(n.enableRotate===!1)return;xe(C),s=r.TOUCH_ROTATE;break;case Gn.PAN:if(n.enablePan===!1)return;Ie(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(C),s=r.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;le(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(as)}function ee(C){switch(we(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;X(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ae(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(C),n.update();break;default:s=r.NONE}}function qe(C){n.enabled!==!1&&C.preventDefault()}function He(C){b.push(C.pointerId)}function Ue(C){delete N[C.pointerId];for(let ce=0;ce<b.length;ce++)if(b[ce]==C.pointerId){b.splice(ce,1);return}}function we(C){let ce=N[C.pointerId];ce===void 0&&(ce=new se,N[C.pointerId]=ce),ce.set(C.pageX,C.pageY)}function me(C){const ce=C.pointerId===b[0]?b[1]:b[0];return N[ce]}n.domElement.addEventListener("contextmenu",qe),n.domElement.addEventListener("pointerdown",y),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",$,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}const ba=document.getElementById("myDropdown");ba.addEventListener("change",function(){const i=ba.value;switch(at.clear(),i){case"box":at.add(new Qe(new Bn(1,1,1),new ct({color:16096779,wireframe:!0})));break;case"sphere":at.add(new Qe(new gr(1),new ct({color:16096779,wireframe:!0})));break;case"bsphere":at.add(new Qe(new gr(5),new ct({color:16096779,wireframe:!0})));break;case"cone":at.add(new Qe(new Ps(1,3),new ct({color:16096779,wireframe:!0})));break;case"ring":at.add(new Qe(new Ns(.5,1),new ct({color:16096779,wireframe:!0})));break;case"tube":at.add(new Qe(new Bs,new ct({color:16096779,wireframe:!0})));break;case"extrude":at.add(new Qe(new Ds,new ct({color:16096779,wireframe:!0})));break;case"late":at.add(new Qe(new Er,new ct({color:16096779,wireframe:!0})));break;case"plane":at.add(new Qe(new Li,new ct({color:16096779,wireframe:!0})));break;case"shape":at.add(new Qe(new Is,new ct({color:16096779,wireframe:!0})));break;case"torus":at.add(new Qe(new Os(2),new ct({color:16096779,wireframe:!0})));break;case"circle":at.add(new Qe(new Cs(2),new ct({color:16096779,wireframe:!0})));break;case"capsule":at.add(new Qe(new Rs(2,3),new ct({color:16096779,wireframe:!0})));break;case"cilinder":at.add(new Qe(new yr(0,2,3,10),new ct({color:16096779,wireframe:!0})));break;case"torusk":at.add(new Qe(new Fs,new ct({color:16096779,wireframe:!0})));break;case"octa":at.add(new Qe(new Us,new ct({color:16096779,wireframe:!0})));break;default:console.log("No option selected")}In.updateProjectionMatrix()});window.addEventListener("mousemove",i=>{i.x/Ot.width-.5,i.y/Ot.height-.5});const zs=document.querySelector("canvas.webgl"),wm=document.getElementById("resetb"),Ot={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ot.width=window.innerWidth,Ot.height=window.innerHeight,In.aspect=Ot.width/Ot.height,In.updateProjectionMatrix(),Di.setSize(Ot.width,Ot.height)});window.addEventListener("dblclick",()=>{console.log("double cl"),document.fullscreenElement?document.exitFullscreen():zs.requestFullscreen()});wm.addEventListener("click",()=>{Gs.reset()});const at=new Xp,Rm=new Qe(new Bn(1,1,1),new ct({color:16096779,wireframe:!0}));at.add(Rm);const In=new It(65,Ot.width/Ot.height,.1,100);In.position.z=4;at.add(In);const Di=new rc({canvas:zs});Di.setSize(Ot.width,Ot.height);Di.setClearColor(856882);Di.setPixelRatio(Math.min(2,window.devicePixelRatio));const Cm=new Tm,Gs=new Am(In,zs);Gs.enableDamping=!0;const pc=()=>{Cm.getElapsedTime(),Gs.update(),Di.render(at,In),window.requestAnimationFrame(pc)};pc();

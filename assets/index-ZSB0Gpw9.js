var Ae=(g,c)=>()=>(c||g((c={exports:{}}).exports,c),c.exports);var Ze=Ae((Xe,B)=>{(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))C(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const T of m.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&C(T)}).observe(document,{childList:!0,subtree:!0});function b(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function C(d){if(d.ep)return;d.ep=!0;const m=b(d);fetch(d.href,m)}})();var B={};(function g(c,b,C,d){var m=!!(c.Worker&&c.Blob&&c.Promise&&c.OffscreenCanvas&&c.OffscreenCanvasRenderingContext2D&&c.HTMLCanvasElement&&c.HTMLCanvasElement.prototype.transferControlToOffscreen&&c.URL&&c.URL.createObjectURL),T=typeof Path2D=="function"&&typeof DOMMatrix=="function",k=function(){if(!c.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var a=r.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function Z(){}function q(r){var e=b.exports.Promise,a=e!==void 0?e:c.Promise;return typeof a=="function"?new a(r):(r(Z,Z),null)}var D=function(r,e){return{transform:function(a){if(r)return a;if(e.has(a))return e.get(a);var t=new OffscreenCanvas(a.width,a.height),o=t.getContext("2d");return o.drawImage(a,0,0),e.set(a,t),t},clear:function(){e.clear()}}}(k,new Map),W=function(){var r=Math.floor(16.666666666666668),e,a,t={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var s=Math.random();return t[s]=requestAnimationFrame(function n(l){o===l||o+r-1<l?(o=l,delete t[s],i()):t[s]=requestAnimationFrame(n)}),s},a=function(i){t[i]&&cancelAnimationFrame(t[i])}):(e=function(i){return setTimeout(i,r)},a=function(i){return clearTimeout(i)}),{frame:e,cancel:a}}(),te=function(){var r,e,a={};function t(o){function i(s,n){o.postMessage({options:s||{},callback:n})}o.init=function(n){var l=n.transferControlToOffscreen();o.postMessage({canvas:l},[l])},o.fire=function(n,l,h){if(e)return i(n,null),e;var v=Math.random().toString(36).slice(2);return e=q(function(f){function p(M){M.data.callback===v&&(delete a[v],o.removeEventListener("message",p),e=null,D.clear(),h(),f())}o.addEventListener("message",p),i(n,v),a[v]=p.bind(null,{data:{callback:v}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var n in a)a[n](),delete a[n]}}return function(){if(r)return r;if(!C&&m){var o=["var CONFETTI, SIZE = {}, module = {};","("+g.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}t(r)}return r}}(),oe={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ie(r,e){return e?e(r):r}function se(r){return r!=null}function y(r,e,a){return ie(r&&se(r[e])?r[e]:oe[e],a)}function le(r){return r<0?0:Math.floor(r)}function ce(r,e){return Math.floor(Math.random()*(e-r))+r}function _(r){return parseInt(r,16)}function ue(r){return r.map(de)}function de(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:_(e.substring(0,2)),g:_(e.substring(2,4)),b:_(e.substring(4,6))}}function he(r){var e=y(r,"origin",Object);return e.x=y(e,"x",Number),e.y=y(e,"y",Number),e}function fe(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function me(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ve(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function pe(r,e,a,t,o,i,s,n,l){r.save(),r.translate(e,a),r.rotate(i),r.scale(t,o),r.arc(0,0,1,s,n,l),r.restore()}function ge(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function ye(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,t=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,s=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),T&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(be(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-t)*.1,Math.abs(s-o)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var n=Math.PI/10*e.wobble,l=Math.abs(i-t)*.1,h=Math.abs(s-o)*.1,v=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,p=new DOMMatrix([Math.cos(n)*l,Math.sin(n)*l,-Math.sin(n)*h,Math.cos(n)*h,e.x,e.y]);p.multiplySelf(new DOMMatrix(e.shape.matrix));var M=r.createPattern(D.transform(e.shape.bitmap),"no-repeat");M.setTransform(p),r.globalAlpha=1-a,r.fillStyle=M,r.fillRect(e.x-v/2,e.y-f/2,v,f),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(s-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):pe(r,e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(s-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var u=Math.PI/2*3,w=4*e.scalar,x=8*e.scalar,P=e.x,F=e.y,I=5,O=Math.PI/I;I--;)P=e.x+Math.cos(u)*x,F=e.y+Math.sin(u)*x,r.lineTo(P,F),u+=O,P=e.x+Math.cos(u)*w,F=e.y+Math.sin(u)*w,r.lineTo(P,F),u+=O;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(s)),r.lineTo(Math.floor(t),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function Me(r,e,a,t,o){var i=e.slice(),s=r.getContext("2d"),n,l,h=q(function(v){function f(){n=l=null,s.clearRect(0,0,t.width,t.height),D.clear(),o(),v()}function p(){C&&!(t.width===d.width&&t.height===d.height)&&(t.width=r.width=d.width,t.height=r.height=d.height),!t.width&&!t.height&&(a(r),t.width=r.width,t.height=r.height),s.clearRect(0,0,t.width,t.height),i=i.filter(function(M){return ye(s,M)}),i.length?n=W.frame(p):f()}n=W.frame(p),l=f});return{addFettis:function(v){return i=i.concat(v),h},canvas:r,promise:h,reset:function(){n&&W.cancel(n),l&&l()}}}function G(r,e){var a=!r,t=!!y(e||{},"resize"),o=!1,i=y(e,"disableForReducedMotion",Boolean),s=m&&!!y(e||{},"useWorker"),n=s?te():null,l=a?fe:me,h=r&&n?!!r.__confetti_initialized:!1,v=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function p(u,w,x){for(var P=y(u,"particleCount",le),F=y(u,"angle",Number),I=y(u,"spread",Number),O=y(u,"startVelocity",Number),Te=y(u,"decay",Number),xe=y(u,"gravity",Number),Pe=y(u,"drift",Number),K=y(u,"colors",ue),Ee=y(u,"ticks",Number),J=y(u,"shapes"),Oe=y(u,"scalar"),Fe=!!y(u,"flat"),Q=he(u),$=P,U=[],Ie=r.width*Q.x,Se=r.height*Q.y;$--;)U.push(ge({x:Ie,y:Se,angle:F,spread:I,startVelocity:O,color:K[$%K.length],shape:J[ce(0,J.length)],ticks:Ee,decay:Te,gravity:xe,drift:Pe,scalar:Oe,flat:Fe}));return f?f.addFettis(U):(f=Me(r,U,l,w,x),f.promise)}function M(u){var w=i||y(u,"disableForReducedMotion",Boolean),x=y(u,"zIndex",Number);if(w&&v)return q(function(O){O()});a&&f?r=f.canvas:a&&!r&&(r=ve(x),document.body.appendChild(r)),t&&!h&&l(r);var P={width:r.width,height:r.height};n&&!h&&n.init(r),h=!0,n&&(r.__confetti_initialized=!0);function F(){if(n){var O={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};l(O),n.postMessage({resize:{width:O.width,height:O.height}});return}P.width=P.height=null}function I(){f=null,t&&(o=!1,c.removeEventListener("resize",F)),a&&r&&(document.body.removeChild(r),r=null,h=!1)}return t&&!o&&(o=!0,c.addEventListener("resize",F,!1)),n?n.fire(u,P,I):p(u,P,I)}return M.reset=function(){n&&n.reset(),f&&f.reset()},M}var j;function X(){return j||(j=G(null,{useWorker:!0,resize:!0})),j}function be(r,e,a,t,o,i,s){var n=new Path2D(r),l=new Path2D;l.addPath(n,new DOMMatrix(e));var h=new Path2D;return h.addPath(l,new DOMMatrix([Math.cos(s)*o,Math.sin(s)*o,-Math.sin(s)*i,Math.cos(s)*i,a,t])),h}function we(r){if(!T)throw new Error("path confetti are not supported in this browser");var e,a;typeof r=="string"?e=r:(e=r.path,a=r.matrix);var t=new Path2D(e),o=document.createElement("canvas"),i=o.getContext("2d");if(!a){for(var s=1e3,n=s,l=s,h=0,v=0,f,p,M=0;M<s;M+=2)for(var u=0;u<s;u+=2)i.isPointInPath(t,M,u,"nonzero")&&(n=Math.min(n,M),l=Math.min(l,u),h=Math.max(h,M),v=Math.max(v,u));f=h-n,p=v-l;var w=10,x=Math.min(w/f,w/p);a=[x,0,0,x,-Math.round(f/2+n)*x,-Math.round(p/2+l)*x]}return{type:"path",path:e,matrix:a}}function Ce(r){var e,a=1,t="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,a="scalar"in r?r.scalar:a,o="fontFamily"in r?r.fontFamily:o,t="color"in r?r.color:t);var i=10*a,s=""+i+"px "+o,n=new OffscreenCanvas(i,i),l=n.getContext("2d");l.font=s;var h=l.measureText(e),v=Math.ceil(h.actualBoundingBoxRight+h.actualBoundingBoxLeft),f=Math.ceil(h.actualBoundingBoxAscent+h.actualBoundingBoxDescent),p=2,M=h.actualBoundingBoxLeft+p,u=h.actualBoundingBoxAscent+p;v+=p+p,f+=p+p,n=new OffscreenCanvas(v,f),l=n.getContext("2d"),l.font=s,l.fillStyle=t,l.fillText(e,M,u);var w=1/a;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[w,0,0,w,-v*w/2,-f*w/2]}}b.exports=function(){return X().apply(this,arguments)},b.exports.reset=function(){X().reset()},b.exports.create=G,b.exports.shapeFromPath=we,b.exports.shapeFromText=Ce})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),B,!1);const R=B.exports;B.exports.create;const H=document.querySelectorAll(".grid__box"),Le=document.querySelector(".grid"),ke=document.querySelector(".message"),A=document.querySelector(".message__text"),N=document.querySelector(".button__restart"),ee=document.querySelector(".playComp"),V=document.querySelector(".playTwo"),Re=new Audio("./src/assets/shakesound.mp3"),Y=new Audio("./src/assets/yay.mp3"),Be=new Audio("./src/assets/drawsound.mp3"),re=new Audio("./src/assets/click.mp3"),Ne=new Audio("./src/assets/error.mp3");if(!Le||!ke||!A||!N||!ee||!V)throw new Error("issue with a query selector");let L=!0,E="🔵",S=["","","","","","","","",""];const qe=R.shapeFromText({text:"❌"}),ae=R.shapeFromText({text:"💊"}),De={particleCount:100,spread:180,colors:["#ffffff","#77DD77","#000000"],shapes:["star",qe,ae],scalar:5},We=R.shapeFromText({text:"O"}),_e={particleCount:100,spread:180,colors:["#ffffff","#77DD77","#FFA500"],shapes:["circle",We,ae],scalar:5};ee.addEventListener("click",()=>{L=!1});V.addEventListener("click",()=>{L=!0});(S=["","","","","","","","",""])&&(A.innerText="Pick a square to Start! ☝️ ",N.style.visibility="hidden");const je=(g,c)=>{if(E)if(g.innerHTML==="")ne(g,c),re.play(),Ue(),A.innerText="",N.style.visibility="visible";else{Ne.play(),alert("That space is taken dude");return}};H.forEach((g,c)=>g.addEventListener("click",()=>{je(g,c),z()}));const ne=(g,c)=>{S[c]=E,g.innerHTML=E},Ue=()=>{L&&(E==="🔵"?E="❎":E="🔵"),L||(E==="🔵"?(z(),ze()):(z(),E="🔵"))},ze=()=>{let g=[],c=[];E="❎";let b=-1;H.forEach(m=>{b++,m.innerText===""&&(g.push(m),c.push(b))});let C=g[Math.floor(Math.random()*g.length)];re.play();let d=Number(c[C]);ne(C,d),E="🔵",L=!1},He=()=>{S=["","","","","","","","",""],E="🔵",H.forEach(g=>g.innerHTML=""),A.innerText="Pick a square to Start! ☝️ ",Re.play(),L=!0,V.checked=!0};N.addEventListener("click",He);const Ve=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],z=()=>{let g=!1,c=!1,b=!1;for(let C=0;C<=7;C++){const d=Ve[C],m=S[d[0]],T=S[d[1]],k=S[d[2]];if(!(m===""||T===""||k==="")){if(m=="❎"&&m===T&&T===k){g=!0;break}if(m==="🔵"&&m===T&&T===k){c=!0;break}if(C==7&&!S.includes("")){b=!0;break}}}if(g){A.innerHTML="❌congrats, X won!❌",R(De),Y.play();return}if(c){A.innerHTML="💊OOOO you're a winner💊",R(_e),Y.play();return}if(b){A.innerHTML="🤪its a draw - play again!🤪",Be.play();return}}});export default Ze();

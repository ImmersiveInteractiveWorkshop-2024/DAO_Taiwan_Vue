import{_ as T,c as w,a as o,t as y,f as A,g as p,F as D,e as B,o as C,n as L,h as P,p as W,i as R}from"./index-IscVJPnJ.js";var v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E={exports:{}};(function(t,n){(function(d,l){l()})(v,function(){function d(a,i){return typeof i>"u"?i={autoBom:!1}:typeof i!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function l(a,i,u){var r=new XMLHttpRequest;r.open("GET",a),r.responseType="blob",r.onload=function(){m(r.response,i,u)},r.onerror=function(){console.error("could not download file")},r.send()}function c(a){var i=new XMLHttpRequest;i.open("HEAD",a,!1);try{i.send()}catch{}return 200<=i.status&&299>=i.status}function s(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(i)}}var e=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof v=="object"&&v.global===v?v:void 0,_=e.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=e.saveAs||(typeof window!="object"||window!==e?function(){}:"download"in HTMLAnchorElement.prototype&&!_?function(a,i,u){var r=e.URL||e.webkitURL,h=document.createElement("a");i=i||a.name||"download",h.download=i,h.rel="noopener",typeof a=="string"?(h.href=a,h.origin===location.origin?s(h):c(h.href)?l(a,i,u):s(h,h.target="_blank")):(h.href=r.createObjectURL(a),setTimeout(function(){r.revokeObjectURL(h.href)},4e4),setTimeout(function(){s(h)},0))}:"msSaveOrOpenBlob"in navigator?function(a,i,u){if(i=i||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(d(a,u),i);else if(c(a))l(a,i,u);else{var r=document.createElement("a");r.href=a,r.target="_blank",setTimeout(function(){s(r)})}}:function(a,i,u,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof a=="string")return l(a,i,u);var h=a.type==="application/octet-stream",S=/constructor/i.test(e.HTMLElement)||e.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||h&&S||_)&&typeof FileReader<"u"){var x=new FileReader;x.onloadend=function(){var g=x.result;g=k?g:g.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=g:location=g,r=null},x.readAsDataURL(a)}else{var F=e.URL||e.webkitURL,b=F.createObjectURL(a);r?r.location=b:location.href=b,r=null,setTimeout(function(){F.revokeObjectURL(b)},4e4)}});e.saveAs=m.saveAs=m,t.exports=m})})(E);var j=E.exports;const O="/DAO_Taiwan_Vue/assets/logo_small-n2mYl6OL.png",X="/DAO_Taiwan_Vue/assets/conbon_c-bm_N2DFX.png",M={data(){return{selectedProduct:null,message:" ",painting:!1,canvas:null,ctx:null,colors:["#C73232","#E6A34B","#EBC352","#FDF673","#D4DAAC","#9BEC58","#4234E9","#A0BEBA","#DDE9F1","#D59CF9"],currentColor:"#C73232",backgroundColor:"#FFFFFF",appWidth:0,lastX:0,lastY:0}},computed:{canvasWidth(){return this.appWidth}},methods:{updateAppWidth(){this.appWidth=this.$refs.appContainer.offsetWidth},changeColor(t){this.ctx.strokeStyle=t,this.currentColor=t,this.eraser(!1)},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.backgroundColor="#FFFFFF",this.eraser(!1)},fillCanvas(){this.ctx.fillStyle=this.currentColor,this.backgroundColor=this.currentColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},startPainting(t){this.painting=!0,t.touches&&t.touches.length>0?this.startTouching(t.touches[0]):this.draw(t)},draw(t){if(!this.painting)return;const n=t.offsetX||t.touches[0].clientX-this.$refs.canvas.offsetLeft,d=t.offsetY||t.touches[0].clientY-this.$refs.canvas.offsetTop;this.ctx.lineWidth=10,this.ctx.lineCap="round",this.ctx.lineTo(n,d),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(n,d)},paintingSelect(){this.ctx.strokeStyle=this.currentColor},finishedPainting(){this.painting=!1,this.ctx.beginPath()},startTouching(t){t.preventDefault(),this.painting=!0,this.ctx.lineWidth=10,this.ctx.lineCap="round";const n=this.canvas.getBoundingClientRect(),d=t.touches[0].clientX-n.left,l=t.touches[0].clientY-n.top;this.lastX=d,this.lastY=l},dragging(t){t.preventDefault();const n=this.canvas.getBoundingClientRect(),d=t.touches[0].clientX-n.left,l=t.touches[0].clientY-n.top;this.painting&&(this.ctx.lineWidth=10,this.ctx.beginPath(),this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(d,l),this.ctx.stroke(),this.lastX=d,this.lastY=l)},finishDragging(){this.painting=!1,this.ctx.beginPath()},eraser(t){t?this.ctx.strokeStyle="#FFFFFF":this.ctx.strokeStyle=this.currentColor},saveCanvas(){const t=document.createElement("canvas"),n=t.getContext("2d"),d=1024,l=1024;t.width=d,t.height=l,n.drawImage(this.canvas,0,0,d,l),t.toBlob(c=>{j.saveAs(c,"canvas_image.png")},"image/png")},uploadImage(){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=1024,t.height=1024,n.drawImage(this.canvas,0,0,1024,1024),t.toBlob(d=>{const l=new FormData;l.append("image",d,"canvas_image.png"),l.append("type","conbon_c"),fetch("https://daotaiwanapi.onrender.com/upload",{method:"POST",body:l}).then(c=>c.json()).then(c=>{console.log(c),alert(JSON.stringify(c.message))}).catch(c=>{console.error("Error:",c),alert("Failed to upload image")})},"image/png")}},mounted(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.updateAppWidth(),window.addEventListener("resize",this.updateAppWidth),this.canvas.height=window.innerWidth*.9,this.canvas.width=576;const t=JSON.parse(localStorage.getItem("selectedProduct"));t&&(this.selectedProduct=t),this.$nextTick(()=>{this.ctx.strokeStyle=this.colors[0]})},beforeUnmount(){window.removeEventListener("resize",this.updateAppWidth)},updated(){this.updateAppWidth()}},f=t=>(W("data-v-30379d0a"),t=t(),R(),t),I=f(()=>o("h1",null,"繪製貼圖",-1)),Y={key:0},U={class:"my-0 mx-auto d-flex justify-content-between align-items-center"},H=f(()=>o("a",{href:"#",class:"button-circle"},[o("ion-icon",{name:"chevron-back-outline"})],-1)),N=f(()=>o("img",{class:"logo_sm",src:O,alt:"logo_sm"},null,-1)),V={id:"app",class:"position-relative",ref:"appContainer"},z={class:"canvas-container"},q=["width","height"],G=f(()=>o("img",{src:X,class:"overlay-img",alt:"conbon_c"},null,-1)),J={class:"color-picker"},K=["onClick"],Q={class:"tool-list d-flex"},Z=f(()=>o("i",{class:"fas fa-paint-brush"},null,-1)),$=[Z],tt=f(()=>o("i",{class:"fab fa-bitbucket"},null,-1)),et=[tt],nt=f(()=>o("i",{class:"fas fa-eraser"},null,-1)),st=[nt],at=f(()=>o("i",{class:"fas fa-trash"},null,-1)),it=[at],ot=f(()=>o("i",{class:"fas fa-save"},null,-1)),rt=[ot];function lt(t,n,d,l,c,s){return C(),w("div",null,[I,c.selectedProduct?(C(),w("div",Y,[o("h2",null,"選中的物件: "+y(c.selectedProduct.name),1),o("p",null,"物件描述: "+y(c.selectedProduct.description),1)])):A("",!0),o("nav",U,[H,N,o("a",{class:"done-button",href:"#",onClick:n[0]||(n[0]=p((...e)=>s.uploadImage&&s.uploadImage(...e),["prevent"]))},"完成")]),o("div",V,[o("h2",null,y(c.message),1),o("div",z,[o("canvas",{onMousedown:n[1]||(n[1]=(...e)=>s.startPainting&&s.startPainting(...e)),onMouseup:n[2]||(n[2]=(...e)=>s.finishedPainting&&s.finishedPainting(...e)),onMousemove:n[3]||(n[3]=(...e)=>s.draw&&s.draw(...e)),onTouchstart:n[4]||(n[4]=(...e)=>s.startTouching&&s.startTouching(...e)),onTouchmove:n[5]||(n[5]=(...e)=>s.dragging&&s.dragging(...e)),onTouchend:n[6]||(n[6]=(...e)=>s.finishDragging&&s.finishDragging(...e)),id:"canvas",width:s.canvasWidth,height:s.canvasWidth},null,40,q),G]),o("div",J,[(C(!0),w(D,null,B(c.colors,e=>(C(),w("div",{key:e},[o("div",{class:L(["color-box",{currentColor:e===this.currentColor}]),style:P({backgroundColor:e,outlineColor:e}),onClick:_=>s.changeColor(e)},null,14,K)]))),128))]),o("div",Q,[o("a",{class:"painting-button",onClick:n[7]||(n[7]=p((...e)=>s.paintingSelect&&s.paintingSelect(...e),["prevent"]))},$),o("a",{class:"fill-button",onClick:n[8]||(n[8]=p((...e)=>s.fillCanvas&&s.fillCanvas(...e),["prevent"]))},et),o("a",{class:"eraser-button",onClick:n[9]||(n[9]=p(e=>s.eraser(!0),["prevent"]))},st),o("a",{class:"clear-button",onClick:n[10]||(n[10]=p((...e)=>s.clearCanvas&&s.clearCanvas(...e),["prevent"]))},it),o("a",{class:"save-button",onClick:n[11]||(n[11]=p((...e)=>s.saveCanvas&&s.saveCanvas(...e),["prevent"]))},rt)])],512)])}const dt=T(M,[["render",lt],["__scopeId","data-v-30379d0a"]]);export{dt as default};

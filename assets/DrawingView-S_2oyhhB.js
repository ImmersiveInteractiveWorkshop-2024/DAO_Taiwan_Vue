import{io as E}from"https://cdn.socket.io/4.7.5/socket.io.esm.min.js";import{_ as U,c as f,a as n,t as x,g as A,h as p,n as _,i as L,F as W,f as P,o as m,p as F,e as R}from"./index-znjGBhYI.js";import{_ as T}from"./logo_small-nh19fpU0.js";var y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B={exports:{}};(function(e,t){(function(c,h){h()})(y,function(){function c(a,r){return typeof r>"u"?r={autoBom:!1}:typeof r!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function h(a,r,u){var l=new XMLHttpRequest;l.open("GET",a),l.responseType="blob",l.onload=function(){w(l.response,r,u)},l.onerror=function(){console.error("could not download file")},l.send()}function i(a){var r=new XMLHttpRequest;r.open("HEAD",a,!1);try{r.send()}catch{}return 200<=r.status&&299>=r.status}function o(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(r)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof y=="object"&&y.global===y?y:void 0,v=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),w=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(a,r,u){var l=s.URL||s.webkitURL,d=document.createElement("a");r=r||a.name||"download",d.download=r,d.rel="noopener",typeof a=="string"?(d.href=a,d.origin===location.origin?o(d):i(d.href)?h(a,r,u):o(d,d.target="_blank")):(d.href=l.createObjectURL(a),setTimeout(function(){l.revokeObjectURL(d.href)},4e4),setTimeout(function(){o(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,r,u){if(r=r||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(c(a,u),r);else if(i(a))h(a,r,u);else{var l=document.createElement("a");l.href=a,l.target="_blank",setTimeout(function(){o(l)})}}:function(a,r,u,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof a=="string")return h(a,r,u);var d=a.type==="application/octet-stream",S=/constructor/i.test(s.HTMLElement)||s.safari,I=/CriOS\/[\d]+/.test(navigator.userAgent);if((I||d&&S||v)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var C=k.result;C=I?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=C:location=C,l=null},k.readAsDataURL(a)}else{var D=s.URL||s.webkitURL,b=D.createObjectURL(a);l?l.location=b:location.href=b,l=null,setTimeout(function(){D.revokeObjectURL(b)},4e4)}});s.saveAs=w.saveAs=w,e.exports=w})})(B);var O=B.exports;const H="/DAO_Taiwan_Vue/assets/stroke-bar-JHactPn7.png",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKLSURBVFhH1ZhNTsJAFMcpbDCayAkUTyAcwAS2bFqBA8AJhBOIJxBOAOwBy9KV6AWsJxBPIIluAf+PDM3M0OlHGEuZxIUt782P//uYNxipI1nGkXCmtIJallUwDOPc78uv1+sP27YXUQXSBlqr1d6xeSECgI3P2uPxeBjGRgsoKZnJZAg08oLCc0ShDWACVy5doHmAfkam5AwA3J1MJm2VDy2g5LxarTagjIUNcz7AOXzmWvUetgPANr3eawONoma9Xi8ByoLNnWyH5w+A7cjPDwK6hUABEuwAf0KngOrl0Wg042EPCkogKETKb0eCnaG4yokCZfndgoqPPNhyuSyi39IX2KyDK8qlAbUnc/u/nKuJAUXX6EDVew70FUVVSpyirBO8cOF3kKfFxIGiqHIoqm8+TwHqRjx06JmjJ+QOnedthIXairYlK4p9vrBHPpKiDJLC4g4dqMorVOVcFylyVKh8gEbLUS/ITbvwaMr7QKP5d2HPn1Q9hL4VSlEVJIyHcNLYB4y3VUxft/xEpczRuCAJWJ5l5fzcRNBLlbgg2T59MNCZ7y6ANuVi3QGNC5IGEgD1kevCWCgXkWeOViqVy2w2+wbjC0lpBw58J/CQ+UrzaIFanAxI9nSfWq1WJa87laAoWsQPHJyF3FTrxxikpWp5Ligbt4TrBIypDWkFUjjroS93/G6nsqK/ADuVEvs/YacM0B3nVKoIoKZp3uC8fQbsCW+AvHHwbKpJ2kU6nXbkCT7It1fV09V3BkPheuB38QraRMd7VR9NHKzfyZQoWN+SZmfwThoglMLAoCO0QT4Ce48KVveYtzcoOfCCTSQog82jrdj0kww6AE34ND/GtgJDHxtJwEZHA/oHlng8NI7UMm4AAAAASUVORK5CYII=",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJ/SURBVFhHzZdLTsJAGMdbOIDcQDyBeACjnsAWWLkRboAL1xTXJugJZOcGaCUcoCTuUS8gNxCWJDz8j2mbdmg705kR2oQQ6Pf4fY+Z+UbXcv7oOefThABN07xgBWbb9oQlw/OeC7Ber19uNptbGLzUdb3MY3i73c6hc+U4zgePfJJMKqBhGJVisdglYCJOANkZDoeWiK6vkwhYrVYbEOoiYyVRBwBsArAnqk/0YgEJHMBeUgwv4JxVOgcl7qHEc6WAXlmntFEAfQLaWq/XrqzTLMCRDAKuVCgUpvRCUNFLWaDCshFAlNYCXJsyZg4GA0fUgaweDfhDLYo3wBmyTmT0A8CY3lug38r77Le4QAJAurzouwm2CKH9TyZjtG4iIASfUd6WSmcitgLAWq1GFsK1bwQZvEMGn0SMqtRJK7H0MUWDkj7HNmaT//Hd7Pf7LiuYtBIrX8Hocxe7RDAJ8RyF4RKT7eQvOvJAeYYSn7AizPIegDMAHod1WJCRfRB9uKWUlZYZ9iNJCCUjcaigAXtQInNf8GAvPJOd6cL2kgaRpEzSZ3EZ8983lcUZphLzUJA74xYibKFPyJAaeRChhZ7sZOm5NFneTMbOg+iVnVKHnLlkAeE3+cg+FSRj56xHxe5xp3kkxhMnagakLFigj2A1QNLV0lar1eloNPpKvZN45bagfaSMiNMQsviKLN4wb3VkiMXCsRCpQe9hnL5SxeIySBSWy+X5eDx+ZwKGrXtHVQX/lRXBkaMvOP99m8heG9l7SO1BFQD/torzAneQDPLuf36SMvWgbGalz2JZAJa+9DTDciD7XmoelHXOo+/dHF1PtsFz395rD/IEQcvkHvAX8ndONHfmN6AAAAAASUVORK5CYII=",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIbSURBVFhHzZj9UQIxEMUNFCB0AB1oBWAF3gD/ix3QgViB0gEF8HEdiBWAFYgdYAGALww4uVxy2SzJwc0wN0M2e7/b9/JxETeMK0mSu2q1upRd9/v982w2GzPSkLoIUpQSBLhapVJZCiEap79jQnoDdrvdOcAS/cViQXoBdjqdASr3Zqt6DEgyoOq7IluEhiQBmnxXFiQJ0Oa7MiCdgC7fxYYsBKT6LiakFdDXd7EgrYAc38WANAKe47vQkDnAEL4LCZkBDOm7UJAZwNC+CwH5DxjLdwXr9gbbtLprN3UAjO07EwTW7E8Atp2AZflOAxlNp9OBC062C/hujPsTJThAzC9y9AGXUnMJeG+BPV6L2oEbB0m/drtdkqbp2ieHrKB8m0efToxYsqR6bgEPNvABtELDLePBri7ekuYAlVG8CAnJldQIGAGSLakVMBDk2ZIWAp4DyZG01+u1MbJb+I0wujcmQxu3W8eVxceT3pJKOLzUxxFqhbnxngzoUUm2pJh/v7XTiVcsfUOnxGpAUSU5kp5yA24IuBf1Wci3gdRNXWrnV50F0ltSFUav3qkNkLkqOgGPcssDo8PijvtiMplIf7IurFzyXEee7+QuAK4hc1NtIAGySCydTPKqodvttq7KfHWAGM0ZptIBteklU2dI/AOJGxeVWD7ctoPCyH7Q/V16BZWppg+gBFWr4b6C995Ne8WLAVIH3tUD/gGr1U028S9yRQAAAABJRU5ErkJggg==",V=E("https://daotaiwanapi.onrender.com",{withCredentials:!1});V.on("message",function(e){console.log("伺服器傳送訊息:",e)});const Y={data(){return{canvasLeft:"50%",overlayImageLoaded:!1,selectedProduct:null,message:" ",painting:!1,canvas:null,ctx:null,colors:["#C73232","#E27200","#EAC252","#E8DF00","#88D04D","#2E8100","#04CBF0","#4234E9","#9400F2","#D526C7","#FFFFFF","#000000"],currentColor:"#C73232",backgroundColor:"#FFFFFF",appWidth:0,lastX:0,lastY:0,showColorPicker:!0,canvasEnabled:!0,isLandscape:!1,rotateButton:null,history:[],redoHistory:[],strokeDragging:!1,startX:0,startY:0,offsetX:0,offsetY:0,currentLineWidth:15,productInfo:{conbon_c:{width:.8,height:.8,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240509/conbon_c-201802413-new_conbon_c.png"},conbon_v:{width:1,height:1,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240508/conbon_v-072814348-masks_conbon_v.png"},conbon_h:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240508/conbon_h-075041962-masks_conbon_h.png"},poster_vu:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_vu-080911471-masks_poster_vu.png"},poster_h:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_h-081819072-models_poster_h.png"},poster_vs:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240509/poster_vs-180239779-models_poster_vs.png"},conbon_hl:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240509/conbon_hl-180254547-models_conbon_hl.png"},poster_hs:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240509/poster_hs-181336719-models_poster_hs.png"},poster_v:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_v-082633244-models_poster_v.png"},conbon_u:{width:.82,height:.82,left:"44%",overlayImg:"https://storage.googleapis.com/texture-image/20240509/conbon_u-181347300-models_conbon_u.png"}},reloadCount:0}},computed:{canvasWidthtest(){return this.appWidth*.9},canvasHeighttest(){return this.appWidth*.9},canvasWidth(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].width:this.appWidth*.9},canvasHeight(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].height:this.appWidth*.9}},methods:{overlayImgSrc(e){if(console.log("更新遮罩：",e),console.log(this.productInfo[e]),this.productInfo[e])return this.canvasLeft=this.productInfo[this.selectedProduct].left,this.productInfo[e].overlayImg},overlayImageLoad(){this.overlayImageLoaded=!0,this.overlayImageLoaded},checkOrientation(e){e.matches?(this.message="您的設備已處於橫向模式",this.rotateButton.style.display="none",this.isLandscape=!0):(this.message="請將您的設備切換至横向模式以獲取更好的體驗",this.rotateButton.style.display="none",this.isLandscape=!1)},updateOverlayImgSrc(){this.selectedProduct&&this.productInfo[this.selectedProduct]?this.overlayImgSrc=this.productInfo[this.selectedProduct].overlayImg:(this.overlayImgSrc=this.productInfo.conbon_c.overlayImg,console.log("沒有找到其他招牌"))},backwardButton(){this.$router.push("/models")},updateAppWidth(){this.appWidth=this.$refs.appContainer.offsetWidth,this.ctx.strokeStyle=this.currentColor},changeColor(e){this.ctx.strokeStyle=e,this.currentColor=e,this.eraser(!1)},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.backgroundColor="#FFFFFF",this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.eraser(!1)},fillCanvas(){this.history.push(this.canvas.toDataURL()),this.ctx.fillStyle=this.currentColor,this.backgroundColor=this.currentColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.history.push(this.canvas.toDataURL())},startPainting(e){this.painting=!0,e.touches&&e.touches.length>0?(this.history.push(this.canvas.toDataURL()),this.startTouching(e.touches[0])):(this.history.push(this.canvas.toDataURL()),this.draw(e))},draw(e){if(!this.painting||!this.canvasEnabled)return;const t=e.offsetX||e.touches[0].clientX-this.$refs.canvas.offsetLeft,c=e.offsetY||e.touches[0].clientY-this.$refs.canvas.offsetTop;this.ctx.lineWidth=this.currentLineWidth,this.ctx.lineCap="round",this.ctx.lineTo(t,c),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t,c)},undo(){this.history.length>0&&(this.redoHistory.push(this.history.pop()),this.restoreCanvas(this.history[this.history.length-1]),this.redoHistory.push(this.history.pop()))},redo(){if(this.redoHistory.length>0){for(let e=0;e<2;e++)if(this.redoHistory.length>0){const t=this.redoHistory.pop();this.history.push(t),this.restoreCanvas(t)}}},restoreCanvas(e){const t=new Image;t.onload=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(t,0,0)},t.src=e},paintingSelect(){this.ctx.strokeStyle=this.currentColor},finishedPainting(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},startTouching(e){e.preventDefault(),this.painting=!0,this.history.push(this.canvas.toDataURL()),this.ctx.lineWidth=10,this.ctx.lineCap="round";const t=this.canvas.getBoundingClientRect(),c=e.touches[0].clientX-t.left,h=e.touches[0].clientY-t.top;this.lastX=c,this.lastY=h},dragging(e){e.preventDefault();const t=this.canvas.getBoundingClientRect(),c=e.touches[0].clientX-t.left,h=e.touches[0].clientY-t.top;!this.painting||!this.canvasEnabled||(this.ctx.lineWidth=this.currentLineWidth,this.ctx.beginPath(),this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(c,h),this.ctx.stroke(),this.lastX=c,this.lastY=h)},finishDragging(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},eraser(e){e?this.ctx.strokeStyle="#FFFFFF":this.ctx.strokeStyle=this.currentColor},saveCanvas(){const e=document.createElement("canvas"),t=e.getContext("2d"),c=1024,h=1024;e.width=c,e.height=h,t.drawImage(this.canvas,0,0,c,h),e.toBlob(i=>{O.saveAs(i,"canvas_image.png")},"image/png")},uploadImage(){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=1024,e.height=1024,t.drawImage(this.canvas,0,0,1024,1024),e.toBlob(c=>{const h=new FormData;h.append("image",c,"canvas_image.png"),h.append("type",this.selectedProduct),fetch("https://daotaiwanapi.onrender.com/upload",{method:"POST",body:h}).then(i=>i.json()).then(i=>{console.log(i),document.cookie=`textureCookie=${JSON.stringify(i.data)}; expires=${new Date(Date.now()+3600*1e3).toUTCString()}; path=/`,alert(JSON.stringify(i.message)),this.$router.push("/result")}).catch(i=>{console.error("Error:",i),alert("Failed to upload image")})},"image/png")},doneDrawing(){this.canvasEnabled=!1,this.showColorPicker=!1},startDragging(e){this.strokeDragging=!0},handleDragging(e){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),c=t.top,h=t.bottom;let i=e.pageY-this.offsetY;i=Math.max(c,Math.min(i,h));const o=this.$refs.strokeWidth.parentElement.offsetHeight,s=(i-c)/o*100;this.$refs.strokeWidth.style.top=`${s}%`;const v=5+(100-s)/100*25;this.currentLineWidth=v,console.log(this.currentLineWidth)}},handleTouchDragging(e){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),c=t.top,h=t.bottom;let i=e.touches[0].clientY-this.offsetY;i=Math.max(c,Math.min(i,h));const o=this.$refs.strokeWidth.parentElement.offsetHeight,s=(i-c)/o*100;this.$refs.strokeWidth.style.top=`${s}%`;const v=5+(100-s)/100*25;this.currentLineWidth=v,console.log(this.currentLineWidth)}},stopDragging(){this.strokeDragging=!1},reloadComponent(){if(this.reloadCount<3){console.log(this.reloadCount),this.reloadCount++,this.$forceUpdate();const e=document.querySelector(".overlay-img");e?(e.style.zIndex="3",console.log("Reloading...")):console.log("Stopped reloading.")}}},mounted(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.updateAppWidth(),window.addEventListener("resize",this.updateAppWidth),this.canvas.height=450*.9,this.canvas.width=450*.9,this.$nextTick(()=>{this.ctx.strokeStyle=this.colors[0],this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)});const e=window.matchMedia("(orientation: landscape)");this.rotateButton=document.getElementById("rotateButton"),e.addEventListener("change",()=>this.checkOrientation(e)),this.checkOrientation(e),this.updateAppWidth();const t=JSON.parse(localStorage.getItem("selectedProduct"));t&&(this.selectedProduct=t,this.overlayImgSrc(this.selectedProduct)),document.addEventListener("mousemove",this.handleDragging),document.addEventListener("mouseup",this.stopDragging),document.addEventListener("touchstart",this.startStrokeDragging),document.addEventListener("touchmove",this.handleTouchDragging),document.addEventListener("touchend",this.stopDragging),this.reloadComponent(),this.reloadComponent(),this.reloadComponent(),this.reloadComponent()},beforeUnmount(){window.removeEventListener("resize",this.updateAppWidth),document.removeEventListener("mousemove",this.handleDragging),document.removeEventListener("mouseup",this.stopDragging),document.removeEventListener("touchmove",this.handleTouchDragging),document.removeEventListener("touchend",this.stopDragging)}},g=e=>(F("data-v-0ead22f6"),e=e(),R(),e),X=g(()=>n("h1",{class:"d-none"},"繪製貼圖",-1)),K={key:0,class:"d-none"},Q={id:"app",class:"position-relative",ref:"appContainer"},j={key:0,class:"my-0 mx-auto d-flex justify-content-between align-items-center"},G={class:"w-25"},Z=g(()=>n("ion-icon",{name:"chevron-back-outline"},null,-1)),z=[Z],q=g(()=>n("img",{class:"logo_sm d-none",src:T,alt:"logo_sm"},null,-1)),$={class:"w-25 d-flex"},tt=g(()=>n("button",{type:"button",id:"rotateButton"},"rotate",-1)),et={class:"fs-6 d-none"},st={class:"canvas-container"},ot=["src"],nt=["width","height"],it={key:0,class:"stroke-container",ref:"strokeContainer"},at=g(()=>n("img",{src:H,class:"stroke-bar",alt:"stroke-bar"},null,-1)),rt={key:1,class:"tool-list d-flex"},lt=g(()=>n("i",{class:"fas fa-paint-brush"},null,-1)),ct=[lt],ht=g(()=>n("img",{src:J,alt:""},null,-1)),dt=[ht],gt=g(()=>n("img",{src:M,alt:""},null,-1)),ut=[gt],pt=g(()=>n("img",{src:N,alt:""},null,-1)),ft=[pt],mt=g(()=>n("i",{class:"fas fa-eraser"},null,-1)),vt=[mt],At=g(()=>n("i",{class:"fas fa-trash"},null,-1)),Ct=[At],yt=g(()=>n("i",{class:"fas fa-save"},null,-1)),wt=[yt],kt={key:2,class:"color-picker"},bt=["onClick"],xt={key:3,class:"d-flex justify-content-center mb-5 pb-5"};function It(e,t,c,h,i,o){return m(),f("div",null,[X,i.selectedProduct?(m(),f("div",K,[n("h2",null,"選中的物件: "+x(i.selectedProduct.name),1),n("p",null,"物件描述: "+x(i.selectedProduct.description),1)])):A("",!0),n("div",Q,[i.showColorPicker?(m(),f("nav",j,[n("div",G,[n("a",{href:"#",class:"button-circle",onClick:t[0]||(t[0]=p((...s)=>o.backwardButton&&o.backwardButton(...s),["prevent"]))},z)]),q,n("div",$,[n("a",{class:"done-button",href:"#",onClick:t[1]||(t[1]=p((...s)=>o.doneDrawing&&o.doneDrawing(...s),["prevent"]))},"完成")])])):A("",!0),tt,n("h2",et,x(i.message),1),n("div",st,[n("img",{src:o.overlayImgSrc(this.selectedProduct),class:_(["overlay-img",this.selectedProduct]),alt:"conbon_c"},null,10,ot),n("canvas",{id:"canvas",onMousedown:t[2]||(t[2]=(...s)=>o.startPainting&&o.startPainting(...s)),onMouseup:t[3]||(t[3]=(...s)=>o.finishedPainting&&o.finishedPainting(...s)),onMousemove:t[4]||(t[4]=(...s)=>o.draw&&o.draw(...s)),onTouchstart:t[5]||(t[5]=(...s)=>o.startTouching&&o.startTouching(...s)),onTouchmove:t[6]||(t[6]=(...s)=>o.dragging&&o.dragging(...s)),onTouchend:t[7]||(t[7]=(...s)=>o.finishDragging&&o.finishDragging(...s)),width:o.canvasWidth,height:o.canvasHeight,style:L({left:i.canvasLeft})},null,44,nt),i.showColorPicker?(m(),f("div",it,[n("div",{class:"stroke-width",draggable:"true",ref:"strokeWidth",onMousedown:t[8]||(t[8]=(...s)=>o.startDragging&&o.startDragging(...s)),onTouchstart:t[9]||(t[9]=(...s)=>o.startDragging&&o.startDragging(...s)),onMousemove:t[10]||(t[10]=(...s)=>o.handleDragging&&o.handleDragging(...s)),onTouchmove:t[11]||(t[11]=(...s)=>o.handleTouchDragging&&o.handleTouchDragging(...s)),onMouseup:t[12]||(t[12]=(...s)=>o.stopDragging&&o.stopDragging(...s)),onTouchend:t[13]||(t[13]=(...s)=>o.stopDragging&&o.stopDragging(...s))},null,544),at],512)):A("",!0)]),i.showColorPicker?(m(),f("div",rt,[n("a",{class:"painting-button",onClick:t[14]||(t[14]=p((...s)=>o.paintingSelect&&o.paintingSelect(...s),["prevent"]))},ct),n("a",{class:"clear-button",onClick:t[15]||(t[15]=p((...s)=>o.undo&&o.undo(...s),["prevent"]))},dt),n("a",{class:"save-button",onClick:t[16]||(t[16]=p((...s)=>o.redo&&o.redo(...s),["prevent"]))},ut),n("a",{class:"fill-button",onClick:t[17]||(t[17]=p((...s)=>o.fillCanvas&&o.fillCanvas(...s),["prevent"]))},ft),n("a",{class:"eraser-button",onClick:t[18]||(t[18]=p(s=>o.eraser(!0),["prevent"]))},vt),n("a",{class:"clear-button",onClick:t[19]||(t[19]=p((...s)=>o.clearCanvas&&o.clearCanvas(...s),["prevent"]))},Ct),n("a",{class:"save-button d-none",onClick:t[20]||(t[20]=p((...s)=>o.saveCanvas&&o.saveCanvas(...s),["prevent"]))},wt)])):A("",!0),i.showColorPicker?(m(),f("div",kt,[(m(!0),f(W,null,P(i.colors,s=>(m(),f("div",{key:s},[n("div",{class:_(["color-box",{currentColor:s===this.currentColor}]),style:L({backgroundColor:s,outlineColor:s}),onClick:v=>o.changeColor(s)},null,14,bt)]))),128))])):A("",!0),i.showColorPicker?A("",!0):(m(),f("div",xt,[n("a",{class:"upload-button",href:"#",onClick:t[21]||(t[21]=p((...s)=>o.uploadImage&&o.uploadImage(...s),["prevent"]))},"確認上傳")]))],512)])}const Bt=U(Y,[["render",It],["__scopeId","data-v-0ead22f6"]]);export{Bt as default};

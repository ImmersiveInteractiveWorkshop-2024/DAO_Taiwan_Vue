import{io as E}from"https://cdn.socket.io/4.7.5/socket.io.esm.min.js";import{_ as S,c as p,a as o,t as x,g as m,h as f,F as W,f as U,o as A,n as F,i as P,p as R,e as T}from"./index-hmb-WyZY.js";import{_}from"./logo_small-nh19fpU0.js";var w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I={exports:{}};(function(s,t){(function(h,l){l()})(w,function(){function h(a,r){return typeof r>"u"?r={autoBom:!1}:typeof r!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function l(a,r,u){var c=new XMLHttpRequest;c.open("GET",a),c.responseType="blob",c.onload=function(){y(c.response,r,u)},c.onerror=function(){console.error("could not download file")},c.send()}function i(a){var r=new XMLHttpRequest;r.open("HEAD",a,!1);try{r.send()}catch{}return 200<=r.status&&299>=r.status}function n(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(r)}}var e=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof w=="object"&&w.global===w?w:void 0,v=e.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),y=e.saveAs||(typeof window!="object"||window!==e?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(a,r,u){var c=e.URL||e.webkitURL,d=document.createElement("a");r=r||a.name||"download",d.download=r,d.rel="noopener",typeof a=="string"?(d.href=a,d.origin===location.origin?n(d):i(d.href)?l(a,r,u):n(d,d.target="_blank")):(d.href=c.createObjectURL(a),setTimeout(function(){c.revokeObjectURL(d.href)},4e4),setTimeout(function(){n(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,r,u){if(r=r||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(h(a,u),r);else if(i(a))l(a,r,u);else{var c=document.createElement("a");c.href=a,c.target="_blank",setTimeout(function(){n(c)})}}:function(a,r,u,c){if(c=c||open("","_blank"),c&&(c.document.title=c.document.body.innerText="downloading..."),typeof a=="string")return l(a,r,u);var d=a.type==="application/octet-stream",L=/constructor/i.test(e.HTMLElement)||e.safari,D=/CriOS\/[\d]+/.test(navigator.userAgent);if((D||d&&L||v)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var C=k.result;C=D?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=C:location=C,c=null},k.readAsDataURL(a)}else{var B=e.URL||e.webkitURL,b=B.createObjectURL(a);c?c.location=b:location.href=b,c=null,setTimeout(function(){B.revokeObjectURL(b)},4e4)}});e.saveAs=y.saveAs=y,s.exports=y})})(I);var O=I.exports;const H="/DAO_Taiwan_Vue/assets/stroke-bar-JHactPn7.png",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKLSURBVFhH1ZhNTsJAFMcpbDCayAkUTyAcwAS2bFqBA8AJhBOIJxBOAOwBy9KV6AWsJxBPIIluAf+PDM3M0OlHGEuZxIUt782P//uYNxipI1nGkXCmtIJallUwDOPc78uv1+sP27YXUQXSBlqr1d6xeSECgI3P2uPxeBjGRgsoKZnJZAg08oLCc0ShDWACVy5doHmAfkam5AwA3J1MJm2VDy2g5LxarTagjIUNcz7AOXzmWvUetgPANr3eawONoma9Xi8ByoLNnWyH5w+A7cjPDwK6hUABEuwAf0KngOrl0Wg042EPCkogKETKb0eCnaG4yokCZfndgoqPPNhyuSyi39IX2KyDK8qlAbUnc/u/nKuJAUXX6EDVew70FUVVSpyirBO8cOF3kKfFxIGiqHIoqm8+TwHqRjx06JmjJ+QOnedthIXairYlK4p9vrBHPpKiDJLC4g4dqMorVOVcFylyVKh8gEbLUS/ITbvwaMr7QKP5d2HPn1Q9hL4VSlEVJIyHcNLYB4y3VUxft/xEpczRuCAJWJ5l5fzcRNBLlbgg2T59MNCZ7y6ANuVi3QGNC5IGEgD1kevCWCgXkWeOViqVy2w2+wbjC0lpBw58J/CQ+UrzaIFanAxI9nSfWq1WJa87laAoWsQPHJyF3FTrxxikpWp5Ligbt4TrBIypDWkFUjjroS93/G6nsqK/ADuVEvs/YacM0B3nVKoIoKZp3uC8fQbsCW+AvHHwbKpJ2kU6nXbkCT7It1fV09V3BkPheuB38QraRMd7VR9NHKzfyZQoWN+SZmfwThoglMLAoCO0QT4Ce48KVveYtzcoOfCCTSQog82jrdj0kww6AE34ND/GtgJDHxtJwEZHA/oHlng8NI7UMm4AAAAASUVORK5CYII=",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJ/SURBVFhHzZdLTsJAGMdbOIDcQDyBeACjnsAWWLkRboAL1xTXJugJZOcGaCUcoCTuUS8gNxCWJDz8j2mbdmg705kR2oQQ6Pf4fY+Z+UbXcv7oOefThABN07xgBWbb9oQlw/OeC7Ber19uNptbGLzUdb3MY3i73c6hc+U4zgePfJJMKqBhGJVisdglYCJOANkZDoeWiK6vkwhYrVYbEOoiYyVRBwBsArAnqk/0YgEJHMBeUgwv4JxVOgcl7qHEc6WAXlmntFEAfQLaWq/XrqzTLMCRDAKuVCgUpvRCUNFLWaDCshFAlNYCXJsyZg4GA0fUgaweDfhDLYo3wBmyTmT0A8CY3lug38r77Le4QAJAurzouwm2CKH9TyZjtG4iIASfUd6WSmcitgLAWq1GFsK1bwQZvEMGn0SMqtRJK7H0MUWDkj7HNmaT//Hd7Pf7LiuYtBIrX8Hocxe7RDAJ8RyF4RKT7eQvOvJAeYYSn7AizPIegDMAHod1WJCRfRB9uKWUlZYZ9iNJCCUjcaigAXtQInNf8GAvPJOd6cL2kgaRpEzSZ3EZ8983lcUZphLzUJA74xYibKFPyJAaeRChhZ7sZOm5NFneTMbOg+iVnVKHnLlkAeE3+cg+FSRj56xHxe5xp3kkxhMnagakLFigj2A1QNLV0lar1eloNPpKvZN45bagfaSMiNMQsviKLN4wb3VkiMXCsRCpQe9hnL5SxeIySBSWy+X5eDx+ZwKGrXtHVQX/lRXBkaMvOP99m8heG9l7SO1BFQD/torzAneQDPLuf36SMvWgbGalz2JZAJa+9DTDciD7XmoelHXOo+/dHF1PtsFz395rD/IEQcvkHvAX8ndONHfmN6AAAAAASUVORK5CYII=",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIbSURBVFhHzZj9UQIxEMUNFCB0AB1oBWAF3gD/ix3QgViB0gEF8HEdiBWAFYgdYAGALww4uVxy2SzJwc0wN0M2e7/b9/JxETeMK0mSu2q1upRd9/v982w2GzPSkLoIUpQSBLhapVJZCiEap79jQnoDdrvdOcAS/cViQXoBdjqdASr3Zqt6DEgyoOq7IluEhiQBmnxXFiQJ0Oa7MiCdgC7fxYYsBKT6LiakFdDXd7EgrYAc38WANAKe47vQkDnAEL4LCZkBDOm7UJAZwNC+CwH5DxjLdwXr9gbbtLprN3UAjO07EwTW7E8Atp2AZflOAxlNp9OBC062C/hujPsTJThAzC9y9AGXUnMJeG+BPV6L2oEbB0m/drtdkqbp2ieHrKB8m0efToxYsqR6bgEPNvABtELDLePBri7ekuYAlVG8CAnJldQIGAGSLakVMBDk2ZIWAp4DyZG01+u1MbJb+I0wujcmQxu3W8eVxceT3pJKOLzUxxFqhbnxngzoUUm2pJh/v7XTiVcsfUOnxGpAUSU5kp5yA24IuBf1Wci3gdRNXWrnV50F0ltSFUav3qkNkLkqOgGPcssDo8PijvtiMplIf7IurFzyXEee7+QuAK4hc1NtIAGySCydTPKqodvttq7KfHWAGM0ZptIBteklU2dI/AOJGxeVWD7ctoPCyH7Q/V16BZWppg+gBFWr4b6C995Ne8WLAVIH3tUD/gGr1U028S9yRQAAAABJRU5ErkJggg==",V=E("https://daotaiwanapi.onrender.com",{withCredentials:!1});V.on("message",function(s){console.log("伺服器傳送訊息:",s)});const Y={data(){return{selectedProduct:null,message:" ",painting:!1,canvas:null,ctx:null,colors:["#C73232","#FF00EB","#D59CF9","#E6A34B","#EBC352","#FDF673","#D4DAAC","#A0BEBA","#9BEC58","#4234E9","#FFFFFF","#000000"],currentColor:"#C73232",backgroundColor:"#FFFFFF",appWidth:0,lastX:0,lastY:0,showColorPicker:!0,canvasEnabled:!0,isLandscape:!1,rotateButton:null,history:[],redoHistory:[],strokeDragging:!1,startX:0,startY:0,offsetX:0,offsetY:0,currentLineWidth:15,productInfo:{conbon_c:{width:.9,height:.9,overlayImg:"https://storage.googleapis.com/texture-image/20240508/conbon_c-052259638-conbon_c.png"},conbon_v:{width:.5,height:.9,overlayImg:"/src/assets/images/logo_small.png"}}}},computed:{canvasWidthtest(){return this.appWidth*.9},canvasHeighttest(){return this.appWidth*.9},canvasWidth(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].width:this.appWidth*.9},canvasHeight(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].height:this.appWidth*.9}},watch:{},methods:{overlayImgSrc(s){return console.log("更新遮罩：",s),console.log(this.productInfo[s]),s&&this.productInfo[s]?this.productInfo[s].overlayImg:this.productInfo.conbon_c.overlayImg},checkOrientation(s){s.matches?(this.message="您的設備已處於橫向模式",this.rotateButton.style.display="none",this.isLandscape=!0):(this.message="請將您的設備切換至横向模式以獲取更好的體驗",this.rotateButton.style.display="none",this.isLandscape=!1)},updateOverlayImgSrc(){this.selectedProduct&&this.productInfo[this.selectedProduct]?this.overlayImgSrc=this.productInfo[this.selectedProduct].overlayImg:(this.overlayImgSrc=this.productInfo.conbon_c.overlayImg,console.log("沒有找到其他招牌"))},homeButton(){this.$router.push("/home")},updateAppWidth(){this.appWidth=this.$refs.appContainer.offsetWidth,this.ctx.strokeStyle=this.currentColor},changeColor(s){this.ctx.strokeStyle=s,this.currentColor=s,this.eraser(!1)},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.backgroundColor="#FFFFFF",this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.eraser(!1),alert(`你選擇了${this.selectedProduct}`)},fillCanvas(){this.history.push(this.canvas.toDataURL()),this.ctx.fillStyle=this.currentColor,this.backgroundColor=this.currentColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.history.push(this.canvas.toDataURL())},startPainting(s){this.painting=!0,s.touches&&s.touches.length>0?(this.history.push(this.canvas.toDataURL()),this.startTouching(s.touches[0])):(this.history.push(this.canvas.toDataURL()),this.draw(s))},draw(s){if(!this.painting||!this.canvasEnabled)return;const t=s.offsetX||s.touches[0].clientX-this.$refs.canvas.offsetLeft,h=s.offsetY||s.touches[0].clientY-this.$refs.canvas.offsetTop;this.ctx.lineWidth=this.currentLineWidth,this.ctx.lineCap="round",this.ctx.lineTo(t,h),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t,h)},undo(){this.history.length>0&&(this.redoHistory.push(this.history.pop()),this.restoreCanvas(this.history[this.history.length-1]),this.redoHistory.push(this.history.pop()))},redo(){if(this.redoHistory.length>0){for(let s=0;s<2;s++)if(this.redoHistory.length>0){const t=this.redoHistory.pop();this.history.push(t),this.restoreCanvas(t)}}},restoreCanvas(s){const t=new Image;t.onload=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(t,0,0)},t.src=s},paintingSelect(){this.ctx.strokeStyle=this.currentColor},finishedPainting(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},startTouching(s){s.preventDefault(),this.painting=!0,this.history.push(this.canvas.toDataURL()),this.ctx.lineWidth=10,this.ctx.lineCap="round";const t=this.canvas.getBoundingClientRect(),h=s.touches[0].clientX-t.left,l=s.touches[0].clientY-t.top;this.lastX=h,this.lastY=l},dragging(s){s.preventDefault();const t=this.canvas.getBoundingClientRect(),h=s.touches[0].clientX-t.left,l=s.touches[0].clientY-t.top;!this.painting||!this.canvasEnabled||(this.ctx.lineWidth=this.currentLineWidth,this.ctx.beginPath(),this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(h,l),this.ctx.stroke(),this.lastX=h,this.lastY=l)},finishDragging(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},eraser(s){s?this.ctx.strokeStyle="#FFFFFF":this.ctx.strokeStyle=this.currentColor},saveCanvas(){const s=document.createElement("canvas"),t=s.getContext("2d"),h=1024,l=1024;s.width=h,s.height=l,t.drawImage(this.canvas,0,0,h,l),s.toBlob(i=>{O.saveAs(i,"canvas_image.png")},"image/png")},uploadImage(){const s=document.createElement("canvas"),t=s.getContext("2d");s.width=1024,s.height=1024,t.drawImage(this.canvas,0,0,1024,1024),s.toBlob(h=>{const l=new FormData;l.append("image",h,"canvas_image.png"),l.append("type",this.selectedProduct),fetch("https://daotaiwanapi.onrender.com/upload",{method:"POST",body:l}).then(i=>i.json()).then(i=>{console.log(i),document.cookie=`textureCookie=${JSON.stringify(i.data)}; expires=${new Date(Date.now()+3600*1e3).toUTCString()}; path=/`,alert(JSON.stringify(i.message)),this.$router.push("/result")}).catch(i=>{console.error("Error:",i),alert("Failed to upload image")})},"image/png")},doneDrawing(){this.canvasEnabled=!1,this.showColorPicker=!1},startDragging(s){this.strokeDragging=!0},handleDragging(s){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),h=t.top,l=t.bottom;let i=s.pageY-this.offsetY;i=Math.max(h,Math.min(i,l));const n=this.$refs.strokeWidth.parentElement.offsetHeight,e=(i-h)/n*100;this.$refs.strokeWidth.style.top=`${e}%`;const v=5+(100-e)/100*25;this.currentLineWidth=v,console.log(this.currentLineWidth)}},handleTouchDragging(s){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),h=t.top,l=t.bottom;let i=s.touches[0].clientY-this.offsetY;i=Math.max(h,Math.min(i,l));const n=this.$refs.strokeWidth.parentElement.offsetHeight,e=(i-h)/n*100;this.$refs.strokeWidth.style.top=`${e}%`;const v=5+(100-e)/100*25;this.currentLineWidth=v,console.log(this.currentLineWidth)}},stopDragging(){this.strokeDragging=!1}},mounted(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.updateAppWidth(),window.addEventListener("resize",this.updateAppWidth),this.canvas.height=450*.9,this.canvas.width=450*.9;const s=JSON.parse(localStorage.getItem("selectedProduct"));s&&(this.selectedProduct=s,this.overlayImgSrc(this.selectedProduct)),this.$nextTick(()=>{this.ctx.strokeStyle=this.colors[0],this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)});const t=window.matchMedia("(orientation: landscape)");this.rotateButton=document.getElementById("rotateButton"),t.addEventListener("change",()=>this.checkOrientation(t)),this.checkOrientation(t),this.updateAppWidth(),document.addEventListener("mousemove",this.handleDragging),document.addEventListener("mouseup",this.stopDragging),document.addEventListener("touchstart",this.startStrokeDragging),document.addEventListener("touchmove",this.handleTouchDragging),document.addEventListener("touchend",this.stopDragging)},beforeUnmount(){window.removeEventListener("resize",this.updateAppWidth),document.removeEventListener("mousemove",this.handleDragging),document.removeEventListener("mouseup",this.stopDragging),document.removeEventListener("touchmove",this.handleTouchDragging),document.removeEventListener("touchend",this.stopDragging)},updated(){this.updateAppWidth()}},g=s=>(R("data-v-e33777c4"),s=s(),T(),s),X=g(()=>o("h1",{class:"d-none"},"繪製貼圖",-1)),K={key:0,class:"d-none"},Q={id:"app",class:"position-relative",ref:"appContainer"},j={key:0,class:"my-0 mx-auto d-flex justify-content-between align-items-center"},G={class:"w-25"},Z=g(()=>o("ion-icon",{name:"chevron-back-outline"},null,-1)),z=[Z],q=g(()=>o("img",{class:"logo_sm d-none",src:_,alt:"logo_sm"},null,-1)),$={class:"w-25 d-flex"},tt=g(()=>o("button",{type:"button",id:"rotateButton"},"rotate",-1)),et={class:"fs-6 d-none"},st={class:"canvas-container"},nt=["width","height"],ot=["src"],it={key:0,class:"stroke-container",ref:"strokeContainer"},at=g(()=>o("img",{src:H,class:"stroke-bar",alt:"stroke-bar"},null,-1)),rt={key:1,class:"color-picker"},ct=["onClick"],ht={key:2,class:"tool-list d-flex"},lt=g(()=>o("i",{class:"fas fa-paint-brush"},null,-1)),dt=[lt],gt=g(()=>o("img",{src:J,alt:""},null,-1)),ut=[gt],ft=g(()=>o("img",{src:M,alt:""},null,-1)),pt=[ft],At=g(()=>o("img",{src:N,alt:""},null,-1)),vt=[At],mt=g(()=>o("i",{class:"fas fa-eraser"},null,-1)),Ct=[mt],wt=g(()=>o("i",{class:"fas fa-trash"},null,-1)),yt=[wt],kt=g(()=>o("i",{class:"fas fa-save"},null,-1)),bt=[kt],xt={key:3,class:"d-flex justify-content-center mb-5 pb-5"};function Dt(s,t,h,l,i,n){return A(),p("div",null,[X,i.selectedProduct?(A(),p("div",K,[o("h2",null,"選中的物件: "+x(i.selectedProduct.name),1),o("p",null,"物件描述: "+x(i.selectedProduct.description),1)])):m("",!0),o("div",Q,[i.showColorPicker?(A(),p("nav",j,[o("div",G,[o("a",{href:"#",class:"button-circle",onClick:t[0]||(t[0]=f((...e)=>n.homeButton&&n.homeButton(...e),["prevent"]))},z)]),q,o("div",$,[o("a",{class:"done-button",href:"#",onClick:t[1]||(t[1]=f((...e)=>n.doneDrawing&&n.doneDrawing(...e),["prevent"]))},"完成")])])):m("",!0),tt,o("h2",et,x(i.message),1),o("div",st,[o("canvas",{onMousedown:t[2]||(t[2]=(...e)=>n.startPainting&&n.startPainting(...e)),onMouseup:t[3]||(t[3]=(...e)=>n.finishedPainting&&n.finishedPainting(...e)),onMousemove:t[4]||(t[4]=(...e)=>n.draw&&n.draw(...e)),onTouchstart:t[5]||(t[5]=(...e)=>n.startTouching&&n.startTouching(...e)),onTouchmove:t[6]||(t[6]=(...e)=>n.dragging&&n.dragging(...e)),onTouchend:t[7]||(t[7]=(...e)=>n.finishDragging&&n.finishDragging(...e)),id:"canvas",width:n.canvasWidthtest,height:n.canvasHeighttest},null,40,nt),o("img",{src:n.overlayImgSrc,class:"overlay-img",alt:"conbon_c"},null,8,ot),i.showColorPicker?(A(),p("div",it,[o("div",{class:"stroke-width",draggable:"true",ref:"strokeWidth",onMousedown:t[8]||(t[8]=(...e)=>n.startDragging&&n.startDragging(...e)),onTouchstart:t[9]||(t[9]=(...e)=>n.startDragging&&n.startDragging(...e)),onMousemove:t[10]||(t[10]=(...e)=>n.handleDragging&&n.handleDragging(...e)),onTouchmove:t[11]||(t[11]=(...e)=>n.handleTouchDragging&&n.handleTouchDragging(...e)),onMouseup:t[12]||(t[12]=(...e)=>n.stopDragging&&n.stopDragging(...e)),onTouchend:t[13]||(t[13]=(...e)=>n.stopDragging&&n.stopDragging(...e))},null,544),at],512)):m("",!0)]),i.showColorPicker?(A(),p("div",rt,[(A(!0),p(W,null,U(i.colors,e=>(A(),p("div",{key:e},[o("div",{class:F(["color-box",{currentColor:e===this.currentColor}]),style:P({backgroundColor:e,outlineColor:e}),onClick:v=>n.changeColor(e)},null,14,ct)]))),128))])):m("",!0),i.showColorPicker?(A(),p("div",ht,[o("a",{class:"painting-button",onClick:t[14]||(t[14]=f((...e)=>n.paintingSelect&&n.paintingSelect(...e),["prevent"]))},dt),o("a",{class:"clear-button",onClick:t[15]||(t[15]=f((...e)=>n.undo&&n.undo(...e),["prevent"]))},ut),o("a",{class:"save-button",onClick:t[16]||(t[16]=f((...e)=>n.redo&&n.redo(...e),["prevent"]))},pt),o("a",{class:"fill-button",onClick:t[17]||(t[17]=f((...e)=>n.fillCanvas&&n.fillCanvas(...e),["prevent"]))},vt),o("a",{class:"eraser-button",onClick:t[18]||(t[18]=f(e=>n.eraser(!0),["prevent"]))},Ct),o("a",{class:"clear-button d-none",onClick:t[19]||(t[19]=f((...e)=>n.clearCanvas&&n.clearCanvas(...e),["prevent"]))},yt),o("a",{class:"save-button d-none",onClick:t[20]||(t[20]=f((...e)=>n.saveCanvas&&n.saveCanvas(...e),["prevent"]))},bt)])):m("",!0),i.showColorPicker?m("",!0):(A(),p("div",xt,[o("a",{class:"upload-button",href:"#",onClick:t[21]||(t[21]=f((...e)=>n.uploadImage&&n.uploadImage(...e),["prevent"]))},"確認上傳")]))],512)])}const Et=S(Y,[["render",Dt],["__scopeId","data-v-e33777c4"]]);export{Et as default};
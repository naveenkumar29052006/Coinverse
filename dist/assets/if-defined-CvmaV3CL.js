const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-p20fZnAm.js","assets/index-ByBNakLR.js","assets/index-C8ZAgdIr.js","assets/index-CSvLYjhy.css","assets/all-wallets-DeSL9kS4.js","assets/arrow-bottom-circle-DjEb_SFz.js","assets/app-store-BCM1YhGB.js","assets/apple-K_V6rOW-.js","assets/arrow-bottom-BKbIn8KO.js","assets/arrow-left-BoNfvFw3.js","assets/arrow-right-DoKtmmCi.js","assets/arrow-top-CLoYdVxN.js","assets/bank-CEy7SKDD.js","assets/browser-D69A_hzM.js","assets/bin-Bx69h0u5.js","assets/bitcoin-C36sq9zl.js","assets/card-BI74eyXS.js","assets/checkmark-DDPdzCH9.js","assets/checkmark-bold-CMeu2Q9m.js","assets/chevron-bottom-DFp9u2dm.js","assets/chevron-left-C0QTQDnk.js","assets/chevron-right-zddpJ2EC.js","assets/chevron-top-BtWFFH_Z.js","assets/chrome-store-jsEMwl_J.js","assets/clock-DIlKYNIy.js","assets/close-D4JGWhXY.js","assets/compass-DerZ0lSI.js","assets/coinPlaceholder-C5wf95eq.js","assets/copy-mWGO3M6d.js","assets/cursor-bgsHWoiz.js","assets/cursor-transparent-D8Fe5YWr.js","assets/circle-CK531QXU.js","assets/desktop--paY1U4q.js","assets/disconnect-9tBgJQWT.js","assets/discord-CV7qx0Lm.js","assets/ethereum-BFIH8BjC.js","assets/etherscan-DUSSxudF.js","assets/extension-DRNLPP3S.js","assets/external-link-ckLwVO2P.js","assets/facebook-D8Tq1YWl.js","assets/farcaster-huCbKZ3i.js","assets/filters-C9zOwkMK.js","assets/github-qho31CJ-.js","assets/google-Bi4h3IT4.js","assets/help-circle-BwyfwIHK.js","assets/image-BiKYCzYS.js","assets/id-Dlgl8ql6.js","assets/info-circle-D4iVhrPK.js","assets/lightbulb-Bzqf3r5N.js","assets/mail-hbrfa1rL.js","assets/mobile-B3-QySj-.js","assets/more-FhpXUNpR.js","assets/network-placeholder-ebP6fMNP.js","assets/nftPlaceholder-CMHFQq5n.js","assets/off-VpTXXaF8.js","assets/play-store-qeHHCyY8.js","assets/plus-DUGunjL0.js","assets/qr-code-gVMMY0e6.js","assets/recycle-horizontal-DuyVMwNi.js","assets/refresh-aYzXheFK.js","assets/search-Br8yKYRl.js","assets/send-hcRb795O.js","assets/swapHorizontal-BW7vH9nz.js","assets/swapHorizontalMedium-DWrMLNih.js","assets/swapHorizontalBold-CGGPez7q.js","assets/swapHorizontalRoundedBold-CBeXlzFG.js","assets/swapVertical-BjWGRRzu.js","assets/solana-DNA8koMn.js","assets/telegram-C12vpMBo.js","assets/three-dots-N_fg4p4B.js","assets/twitch-EGLk7eEf.js","assets/x-CuMdD62M.js","assets/twitterIcon-CAqqiyNj.js","assets/verify-Bz5_LWuG.js","assets/verify-filled-D5DVlaHp.js","assets/wallet-DLl4rL8G.js","assets/walletconnect-BqE43mx9.js","assets/wallet-placeholder-DQFZCHaY.js","assets/warning-circle-B0JMOp-0.js","assets/info-DxQiqAbi.js","assets/exclamation-triangle-DJkV14ha.js","assets/reown-logo-BJ-Ay_9e.js","assets/x-mark-CkrWohdz.js"])))=>i.map(i=>d[i]);
import{an as r}from"./index-C8ZAgdIr.js";import{a4 as z,a5 as B,a6 as T,i as P,r as R,V as M,a as L,x as S,a1 as j}from"./index-ByBNakLR.js";const v={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:n}){return t.length<=e+i?t:n==="end"?`${t.substring(0,e)}...`:n==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),n=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const g=this.tintColor(n,.15*h);u.push(`rgb(${g[0]}, ${g[1]}, ${g[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,n=e>>8&255,o=e&255;return[i,n,o]},tintColor(t,e){const[i,n,o]=t,a=Math.round(i+(255-i)*e),s=Math.round(n+(255-n)*e),c=Math.round(o+(255-o)*e);return[a,s,c]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function H(t,e){const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function U(t,e){return customElements.get(t)||customElements.define(t,e),e}function I(t){return function(i){return typeof i=="function"?U(t,i):H(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:z},G=(t=F,e,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),n==="accessor"){const{name:s}=i;return{set(c){const u=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,u,t)},init(c){return c!==void 0&&this.C(s,void 0,t,c),c}}}if(n==="setter"){const{name:s}=i;return function(c){const u=this[s];e.call(this,c),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+n)};function l(t){return(e,i)=>typeof i=="object"?G(t,e,i):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},C=t=>(...e)=>({_$litDirective$:t,values:e});let x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(t,e)=>{var n;const i=t._$AN;if(i===void 0)return!1;for(const o of i)(n=o._$AO)==null||n.call(o,e,!1),f(o,e);return!0},E=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},k=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),X(e)}};function q(t){this._$AN!==void 0?(E(this),this._$AM=t,k(this)):this._$AM=t}function K(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let a=i;a<n.length;a++)f(n[a],!1),E(n[a]);else n!=null&&(f(n,!1),E(n));else f(this,t)}const X=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=K),t._$AQ??(t._$AQ=q))};class Y extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),k(this),this.isConnected=e._$AU}_$AO(e,i=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(f(this,e),E(this))}setValue(e){if(W(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Q{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=t=>!N(t)&&typeof t.then=="function",O=1073741823;class J extends Y{constructor(){super(...arguments),this._$Cwt=O,this._$Cbt=[],this._$CK=new Z(this),this._$CX=new Q}render(...e){return e.find(i=>!D(i))??T}update(e,i){const n=this._$Cbt;let o=n.length;this._$Cbt=i;const a=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const u=i[c];if(!D(u))return this._$Cwt=c,u;c<o&&u===n[c]||(this._$Cwt=O,o=0,Promise.resolve(u).then(async h=>{for(;s.get();)await s.get();const g=a.deref();if(g!==void 0){const $=g._$Cbt.indexOf(u);$>-1&&$<g._$Cwt&&(g._$Cwt=$,g.setValue(h))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const A=new et,it=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var m=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const b={add:async()=>(await r(async()=>{const{addSvg:t}=await import("./add-p20fZnAm.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3]))).addSvg,allWallets:async()=>(await r(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-DeSL9kS4.js");return{allWalletsSvg:t}},__vite__mapDeps([4,1,2,3]))).allWalletsSvg,arrowBottomCircle:async()=>(await r(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-DjEb_SFz.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([5,1,2,3]))).arrowBottomCircleSvg,appStore:async()=>(await r(async()=>{const{appStoreSvg:t}=await import("./app-store-BCM1YhGB.js");return{appStoreSvg:t}},__vite__mapDeps([6,1,2,3]))).appStoreSvg,apple:async()=>(await r(async()=>{const{appleSvg:t}=await import("./apple-K_V6rOW-.js");return{appleSvg:t}},__vite__mapDeps([7,1,2,3]))).appleSvg,arrowBottom:async()=>(await r(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-BKbIn8KO.js");return{arrowBottomSvg:t}},__vite__mapDeps([8,1,2,3]))).arrowBottomSvg,arrowLeft:async()=>(await r(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-BoNfvFw3.js");return{arrowLeftSvg:t}},__vite__mapDeps([9,1,2,3]))).arrowLeftSvg,arrowRight:async()=>(await r(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-DoKtmmCi.js");return{arrowRightSvg:t}},__vite__mapDeps([10,1,2,3]))).arrowRightSvg,arrowTop:async()=>(await r(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-CLoYdVxN.js");return{arrowTopSvg:t}},__vite__mapDeps([11,1,2,3]))).arrowTopSvg,bank:async()=>(await r(async()=>{const{bankSvg:t}=await import("./bank-CEy7SKDD.js");return{bankSvg:t}},__vite__mapDeps([12,1,2,3]))).bankSvg,browser:async()=>(await r(async()=>{const{browserSvg:t}=await import("./browser-D69A_hzM.js");return{browserSvg:t}},__vite__mapDeps([13,1,2,3]))).browserSvg,bin:async()=>(await r(async()=>{const{binSvg:t}=await import("./bin-Bx69h0u5.js");return{binSvg:t}},__vite__mapDeps([14,1,2,3]))).binSvg,bitcoin:async()=>(await r(async()=>{const{bitcoinSvg:t}=await import("./bitcoin-C36sq9zl.js");return{bitcoinSvg:t}},__vite__mapDeps([15,1,2,3]))).bitcoinSvg,card:async()=>(await r(async()=>{const{cardSvg:t}=await import("./card-BI74eyXS.js");return{cardSvg:t}},__vite__mapDeps([16,1,2,3]))).cardSvg,checkmark:async()=>(await r(async()=>{const{checkmarkSvg:t}=await import("./checkmark-DDPdzCH9.js");return{checkmarkSvg:t}},__vite__mapDeps([17,1,2,3]))).checkmarkSvg,checkmarkBold:async()=>(await r(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-CMeu2Q9m.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([18,1,2,3]))).checkmarkBoldSvg,chevronBottom:async()=>(await r(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-DFp9u2dm.js");return{chevronBottomSvg:t}},__vite__mapDeps([19,1,2,3]))).chevronBottomSvg,chevronLeft:async()=>(await r(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-C0QTQDnk.js");return{chevronLeftSvg:t}},__vite__mapDeps([20,1,2,3]))).chevronLeftSvg,chevronRight:async()=>(await r(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-zddpJ2EC.js");return{chevronRightSvg:t}},__vite__mapDeps([21,1,2,3]))).chevronRightSvg,chevronTop:async()=>(await r(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-BtWFFH_Z.js");return{chevronTopSvg:t}},__vite__mapDeps([22,1,2,3]))).chevronTopSvg,chromeStore:async()=>(await r(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-jsEMwl_J.js");return{chromeStoreSvg:t}},__vite__mapDeps([23,1,2,3]))).chromeStoreSvg,clock:async()=>(await r(async()=>{const{clockSvg:t}=await import("./clock-DIlKYNIy.js");return{clockSvg:t}},__vite__mapDeps([24,1,2,3]))).clockSvg,close:async()=>(await r(async()=>{const{closeSvg:t}=await import("./close-D4JGWhXY.js");return{closeSvg:t}},__vite__mapDeps([25,1,2,3]))).closeSvg,compass:async()=>(await r(async()=>{const{compassSvg:t}=await import("./compass-DerZ0lSI.js");return{compassSvg:t}},__vite__mapDeps([26,1,2,3]))).compassSvg,coinPlaceholder:async()=>(await r(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-C5wf95eq.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([27,1,2,3]))).coinPlaceholderSvg,copy:async()=>(await r(async()=>{const{copySvg:t}=await import("./copy-mWGO3M6d.js");return{copySvg:t}},__vite__mapDeps([28,1,2,3]))).copySvg,cursor:async()=>(await r(async()=>{const{cursorSvg:t}=await import("./cursor-bgsHWoiz.js");return{cursorSvg:t}},__vite__mapDeps([29,1,2,3]))).cursorSvg,cursorTransparent:async()=>(await r(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-D8Fe5YWr.js");return{cursorTransparentSvg:t}},__vite__mapDeps([30,1,2,3]))).cursorTransparentSvg,circle:async()=>(await r(async()=>{const{circleSvg:t}=await import("./circle-CK531QXU.js");return{circleSvg:t}},__vite__mapDeps([31,1,2,3]))).circleSvg,desktop:async()=>(await r(async()=>{const{desktopSvg:t}=await import("./desktop--paY1U4q.js");return{desktopSvg:t}},__vite__mapDeps([32,1,2,3]))).desktopSvg,disconnect:async()=>(await r(async()=>{const{disconnectSvg:t}=await import("./disconnect-9tBgJQWT.js");return{disconnectSvg:t}},__vite__mapDeps([33,1,2,3]))).disconnectSvg,discord:async()=>(await r(async()=>{const{discordSvg:t}=await import("./discord-CV7qx0Lm.js");return{discordSvg:t}},__vite__mapDeps([34,1,2,3]))).discordSvg,ethereum:async()=>(await r(async()=>{const{ethereumSvg:t}=await import("./ethereum-BFIH8BjC.js");return{ethereumSvg:t}},__vite__mapDeps([35,1,2,3]))).ethereumSvg,etherscan:async()=>(await r(async()=>{const{etherscanSvg:t}=await import("./etherscan-DUSSxudF.js");return{etherscanSvg:t}},__vite__mapDeps([36,1,2,3]))).etherscanSvg,extension:async()=>(await r(async()=>{const{extensionSvg:t}=await import("./extension-DRNLPP3S.js");return{extensionSvg:t}},__vite__mapDeps([37,1,2,3]))).extensionSvg,externalLink:async()=>(await r(async()=>{const{externalLinkSvg:t}=await import("./external-link-ckLwVO2P.js");return{externalLinkSvg:t}},__vite__mapDeps([38,1,2,3]))).externalLinkSvg,facebook:async()=>(await r(async()=>{const{facebookSvg:t}=await import("./facebook-D8Tq1YWl.js");return{facebookSvg:t}},__vite__mapDeps([39,1,2,3]))).facebookSvg,farcaster:async()=>(await r(async()=>{const{farcasterSvg:t}=await import("./farcaster-huCbKZ3i.js");return{farcasterSvg:t}},__vite__mapDeps([40,1,2,3]))).farcasterSvg,filters:async()=>(await r(async()=>{const{filtersSvg:t}=await import("./filters-C9zOwkMK.js");return{filtersSvg:t}},__vite__mapDeps([41,1,2,3]))).filtersSvg,github:async()=>(await r(async()=>{const{githubSvg:t}=await import("./github-qho31CJ-.js");return{githubSvg:t}},__vite__mapDeps([42,1,2,3]))).githubSvg,google:async()=>(await r(async()=>{const{googleSvg:t}=await import("./google-Bi4h3IT4.js");return{googleSvg:t}},__vite__mapDeps([43,1,2,3]))).googleSvg,helpCircle:async()=>(await r(async()=>{const{helpCircleSvg:t}=await import("./help-circle-BwyfwIHK.js");return{helpCircleSvg:t}},__vite__mapDeps([44,1,2,3]))).helpCircleSvg,image:async()=>(await r(async()=>{const{imageSvg:t}=await import("./image-BiKYCzYS.js");return{imageSvg:t}},__vite__mapDeps([45,1,2,3]))).imageSvg,id:async()=>(await r(async()=>{const{idSvg:t}=await import("./id-Dlgl8ql6.js");return{idSvg:t}},__vite__mapDeps([46,1,2,3]))).idSvg,infoCircle:async()=>(await r(async()=>{const{infoCircleSvg:t}=await import("./info-circle-D4iVhrPK.js");return{infoCircleSvg:t}},__vite__mapDeps([47,1,2,3]))).infoCircleSvg,lightbulb:async()=>(await r(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-Bzqf3r5N.js");return{lightbulbSvg:t}},__vite__mapDeps([48,1,2,3]))).lightbulbSvg,mail:async()=>(await r(async()=>{const{mailSvg:t}=await import("./mail-hbrfa1rL.js");return{mailSvg:t}},__vite__mapDeps([49,1,2,3]))).mailSvg,mobile:async()=>(await r(async()=>{const{mobileSvg:t}=await import("./mobile-B3-QySj-.js");return{mobileSvg:t}},__vite__mapDeps([50,1,2,3]))).mobileSvg,more:async()=>(await r(async()=>{const{moreSvg:t}=await import("./more-FhpXUNpR.js");return{moreSvg:t}},__vite__mapDeps([51,1,2,3]))).moreSvg,networkPlaceholder:async()=>(await r(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-ebP6fMNP.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([52,1,2,3]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-CMHFQq5n.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([53,1,2,3]))).nftPlaceholderSvg,off:async()=>(await r(async()=>{const{offSvg:t}=await import("./off-VpTXXaF8.js");return{offSvg:t}},__vite__mapDeps([54,1,2,3]))).offSvg,playStore:async()=>(await r(async()=>{const{playStoreSvg:t}=await import("./play-store-qeHHCyY8.js");return{playStoreSvg:t}},__vite__mapDeps([55,1,2,3]))).playStoreSvg,plus:async()=>(await r(async()=>{const{plusSvg:t}=await import("./plus-DUGunjL0.js");return{plusSvg:t}},__vite__mapDeps([56,1,2,3]))).plusSvg,qrCode:async()=>(await r(async()=>{const{qrCodeIcon:t}=await import("./qr-code-gVMMY0e6.js");return{qrCodeIcon:t}},__vite__mapDeps([57,1,2,3]))).qrCodeIcon,recycleHorizontal:async()=>(await r(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-DuyVMwNi.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([58,1,2,3]))).recycleHorizontalSvg,refresh:async()=>(await r(async()=>{const{refreshSvg:t}=await import("./refresh-aYzXheFK.js");return{refreshSvg:t}},__vite__mapDeps([59,1,2,3]))).refreshSvg,search:async()=>(await r(async()=>{const{searchSvg:t}=await import("./search-Br8yKYRl.js");return{searchSvg:t}},__vite__mapDeps([60,1,2,3]))).searchSvg,send:async()=>(await r(async()=>{const{sendSvg:t}=await import("./send-hcRb795O.js");return{sendSvg:t}},__vite__mapDeps([61,1,2,3]))).sendSvg,swapHorizontal:async()=>(await r(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-BW7vH9nz.js");return{swapHorizontalSvg:t}},__vite__mapDeps([62,1,2,3]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-DWrMLNih.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([63,1,2,3]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-CGGPez7q.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([64,1,2,3]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-CBeXlzFG.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([65,1,2,3]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-BjWGRRzu.js");return{swapVerticalSvg:t}},__vite__mapDeps([66,1,2,3]))).swapVerticalSvg,solana:async()=>(await r(async()=>{const{solanaSvg:t}=await import("./solana-DNA8koMn.js");return{solanaSvg:t}},__vite__mapDeps([67,1,2,3]))).solanaSvg,telegram:async()=>(await r(async()=>{const{telegramSvg:t}=await import("./telegram-C12vpMBo.js");return{telegramSvg:t}},__vite__mapDeps([68,1,2,3]))).telegramSvg,threeDots:async()=>(await r(async()=>{const{threeDotsSvg:t}=await import("./three-dots-N_fg4p4B.js");return{threeDotsSvg:t}},__vite__mapDeps([69,1,2,3]))).threeDotsSvg,twitch:async()=>(await r(async()=>{const{twitchSvg:t}=await import("./twitch-EGLk7eEf.js");return{twitchSvg:t}},__vite__mapDeps([70,1,2,3]))).twitchSvg,twitter:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-CuMdD62M.js");return{xSvg:t}},__vite__mapDeps([71,1,2,3]))).xSvg,twitterIcon:async()=>(await r(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-CAqqiyNj.js");return{twitterIconSvg:t}},__vite__mapDeps([72,1,2,3]))).twitterIconSvg,verify:async()=>(await r(async()=>{const{verifySvg:t}=await import("./verify-Bz5_LWuG.js");return{verifySvg:t}},__vite__mapDeps([73,1,2,3]))).verifySvg,verifyFilled:async()=>(await r(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-D5DVlaHp.js");return{verifyFilledSvg:t}},__vite__mapDeps([74,1,2,3]))).verifyFilledSvg,wallet:async()=>(await r(async()=>{const{walletSvg:t}=await import("./wallet-DLl4rL8G.js");return{walletSvg:t}},__vite__mapDeps([75,1,2,3]))).walletSvg,walletConnect:async()=>(await r(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-BqE43mx9.js");return{walletConnectSvg:t}},__vite__mapDeps([76,1,2,3]))).walletConnectSvg,walletConnectLightBrown:async()=>(await r(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-BqE43mx9.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([76,1,2,3]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-BqE43mx9.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([76,1,2,3]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-DQFZCHaY.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([77,1,2,3]))).walletPlaceholderSvg,warningCircle:async()=>(await r(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-B0JMOp-0.js");return{warningCircleSvg:t}},__vite__mapDeps([78,1,2,3]))).warningCircleSvg,x:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-CuMdD62M.js");return{xSvg:t}},__vite__mapDeps([71,1,2,3]))).xSvg,info:async()=>(await r(async()=>{const{infoSvg:t}=await import("./info-DxQiqAbi.js");return{infoSvg:t}},__vite__mapDeps([79,1,2,3]))).infoSvg,exclamationTriangle:async()=>(await r(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-DJkV14ha.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([80,1,2,3]))).exclamationTriangleSvg,reown:async()=>(await r(async()=>{const{reownSvg:t}=await import("./reown-logo-BJ-Ay_9e.js");return{reownSvg:t}},__vite__mapDeps([81,1,2,3]))).reownSvg,"x-mark":async()=>(await r(async()=>{const{xMarkSvg:t}=await import("./x-mark-CkrWohdz.js");return{xMarkSvg:t}},__vite__mapDeps([82,1,2,3]))).xMarkSvg};async function rt(t){if(A.has(t))return A.get(t);const i=(b[t]??b.copy)();return A.set(t,i),i}let d=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,S`${tt(rt(this.name),S`<div class="fallback"></div>`)}`}};d.styles=[R,M,it];m([l()],d.prototype,"size",void 0);m([l()],d.prototype,"name",void 0);m([l()],d.prototype,"color",void 0);m([l()],d.prototype,"aspectRatio",void 0);d=m([I("wui-icon")],d);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=C(class extends x{constructor(t){var e;if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!((n=this.nt)!=null&&n.has(a))&&this.st.add(a);return this.render(e)}const i=t.element.classList;for(const a of this.st)a in e||(i.remove(a),this.st.delete(a));for(const a in e){const s=!!e[a];s===this.st.has(a)||(o=this.nt)!=null&&o.has(a)||(s?(i.add(a),this.st.add(a)):(i.remove(a),this.st.delete(a)))}return T}}),nt=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends L{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,S`<slot class=${at(e)}></slot>`}};p.styles=[R,nt];y([l()],p.prototype,"variant",void 0);y([l()],p.prototype,"color",void 0);y([l()],p.prototype,"align",void 0);y([l()],p.prototype,"lineClamp",void 0);p=y([I("wui-text")],p);const ot=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var w=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let _=class extends L{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&v.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&v.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&v.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&v.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&v.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&v.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&v.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&v.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};_.styles=[R,ot];w([l()],_.prototype,"flexDirection",void 0);w([l()],_.prototype,"flexWrap",void 0);w([l()],_.prototype,"flexBasis",void 0);w([l()],_.prototype,"flexGrow",void 0);w([l()],_.prototype,"flexShrink",void 0);w([l()],_.prototype,"alignItems",void 0);w([l()],_.prototype,"justifyContent",void 0);w([l()],_.prototype,"columnGap",void 0);w([l()],_.prototype,"rowGap",void 0);w([l()],_.prototype,"gap",void 0);w([l()],_.prototype,"padding",void 0);w([l()],_.prototype,"margin",void 0);_=w([I("wui-flex")],_);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=t=>t??j;export{v as U,C as a,I as c,at as e,Y as f,l as n,vt as o,lt as r};
//# sourceMappingURL=if-defined-CvmaV3CL.js.map

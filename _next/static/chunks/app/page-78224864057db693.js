(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2525:(e,t,s)=>{Promise.resolve().then(s.bind(s,9809))},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var l=s(5155),a=s(2115);function n(){let[e,t]=(0,a.useState)([{text:"Привет! Чем могу помочь?",type:"bot"}]),[s,n]=(0,a.useState)(""),o=async()=>{let e=await fetch("https://v2.jokeapi.dev/joke/Any"),t=await e.json();return"single"===t.type?t.joke:"".concat(t.setup," ").concat(t.delivery)},r=async()=>{if(!s.trim())return;t([...e,{text:s,type:"user"}]),n("");let l=await o();t(e=>[...e,{text:l,type:"bot"}])};return(0,l.jsxs)("div",{className:"flex flex-col h-screen bg-violet-400 p-4",children:[(0,l.jsx)("div",{className:"flex-grow overflow-y-auto bg-violet-200 shadow-md rounded-lg p-4",children:(0,l.jsx)("div",{className:"flex flex-col space-y-2",children:e.map((e,t)=>(0,l.jsx)("div",{className:"p-2 rounded-lg max-w-xs ".concat("bot"===e.type?"self-start bg-violet-500":"self-end bg-blue-500 text-gray-800"),children:e.text},t))})}),(0,l.jsxs)("div",{className:"mt-4 flex items-center space-x-2",children:[(0,l.jsx)("input",{type:"text",placeholder:"Введите сообщение...",className:"flex-grow p-2 border bg-violet-100 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",value:s,onChange:e=>n(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),r())}}),(0,l.jsx)("button",{className:"bg-violet-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 ",onClick:r,children:"Отправить"})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(2525)),_N_E=e.O()}]);
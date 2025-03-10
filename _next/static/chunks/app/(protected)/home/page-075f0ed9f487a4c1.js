(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{1494:(e,a,t)=>{"use strict";t.d(a,{A:()=>d});var s=t(8943);let r=(0,s.Z0)({name:"app",initialState:{isSimDataFetching:!1},reducers:{SET_FETCHING:(e,a)=>{e.isSimDataFetching=a.payload}}}),{SET_FETCHING:n}=r.actions,i=r.reducer;var l=t(1658),o=t(8254);let d=(0,s.U1)({reducer:{app:i,auth:l.Ay,device:o.Ay}})},1567:(e,a,t)=>{"use strict";t.d(a,{cn:()=>n});var s=t(3463),r=t(9795);function n(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,r.QP)((0,s.$)(a))}},1658:(e,a,t)=>{"use strict";t.d(a,{Ay:()=>m,MO:()=>c,T_:()=>d,_v:()=>o,w$:()=>u});var s=t(8943),r=t(9208);let n=r.A.get("access_token"),i=r.A.get("refresh_token"),l=(0,s.Z0)({name:"auth",initialState:{username:"",fullname:"",accessToken:n||"",refreshToken:i||"",error:""},reducers:{SET_TOKENS:(e,a)=>{let{username:t,fullname:s,accessToken:n,refreshToken:i}=a.payload;e.username=t,e.fullname=s,e.accessToken=n,e.refreshToken=i,r.A.set("access_token",n,{expires:7}),r.A.set("refresh_token",i,{expires:7})},LOGOUT:e=>{e.username="",e.fullname="",e.accessToken="",e.refreshToken="",r.A.remove("access_token"),r.A.remove("refresh_token")},SET_ERROR:(e,a)=>{e.error=a.payload},REMOVE_ERROR:e=>{e.error=""}}}),{SET_TOKENS:o,LOGOUT:d,SET_ERROR:c,REMOVE_ERROR:u}=l.actions,m=l.reducer},3307:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var s=t(2651),r=t(1658),n=t(1494);let i="https://cmsiot.saigoniot.vn:444",l=n.A.getState().auth.accessToken,o=n.A.getState().auth.refreshToken,d=async(e,a,t)=>{let[c,u]=await (0,s.A)({method:e,url:"".concat(i,"/").concat(a),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)},withCredentials:!1,data:t}).then(e=>[e.status,e.data]).catch(e=>[e.response.status,e.response.error]);if(200===c||201===c)return[c,u];if(401===c){let[l,c]=await (0,s.A)({method:"POST",url:"".concat(i,"/api/User/auth-refresh"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o)},withCredentials:!0}).then(e=>[e.status,e.data]).catch(e=>(n.A.dispatch((0,r.T_)()),[e.response.status,e.response.error]));if(200===l||201===l){let{access_token:s,refresh_token:i}=c;return n.A.dispatch((0,r._v)({accessToken:s,refreshToken:i})),d(e,a,t)}}return[500,{error:"Internal server error"}]},c=d},3312:(e,a,t)=>{"use strict";t.d(a,{$:()=>o});var s=t(5155);t(2115);var r=t(2317),n=t(1027),i=t(1567);let l=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function o(e){let{className:a,variant:t,size:n,asChild:o=!1,...d}=e,c=o?r.DX:"button";return(0,s.jsx)(c,{"data-slot":"button",className:(0,i.cn)(l({variant:t,size:n,className:a})),...d})}},7710:(e,a,t)=>{Promise.resolve().then(t.bind(t,9628))},8254:(e,a,t)=>{"use strict";t.d(a,{AL:()=>n,Ay:()=>i,r_:()=>r});let s=(0,t(8943).Z0)({name:"device",initialState:{isDeviceFetching:!1,devices_list:[],count_all:0,count_offline:0,count_error:0,count_warning:0,count_online:0,count_alarm:0},reducers:{SET_DEVICES:(e,a)=>{e.devices_list=a.payload,e.count_all=a.payload.length,e.count_offline=a.payload.filter(e=>-2===e.deviceStatus).length,e.count_error=a.payload.filter(e=>-1===e.deviceStatus).length,e.count_warning=a.payload.filter(e=>0===e.deviceStatus).length,e.count_online=a.payload.filter(e=>1===e.deviceStatus).length,e.count_alarm=a.payload.filter(e=>2===e.deviceStatus).length},SET_DEVICES_FETCHING:(e,a)=>{e.isDeviceFetching=a.payload}}}),{SET_DEVICES:r,SET_DEVICES_FETCHING:n}=s.actions,i=s.reducer},9628:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>L});var s=t(5155),r=t(2115),n=t(3391),i=t(9789),l=t(9083),o=t(3307),d=t(2651);let c="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aHUubmd1eWVuQHNhaWdvbmxhYi52biIsImV4cCI6MTc0MzM4ODE3NywidXNlcl9pZCI6Mzc0Mywic2NvcGUiOlsiS2jDoWNoIGjDoG5nIiwic2VhcmNoVXNlciIsImNyZWF0ZVNpbUdyb3VwIiwiZGVsZXRlU2ltR3JvdXAiLCJnZXRBbGVydExvZyIsInNlYXJjaEFsZXJ0UmVjdkdycCIsIndhbGxldEhpc3RvcnkiLCJzZWFyY2hTaW1Hcm91cCIsInNlYXJjaEN1c3RvbWVyIiwiY3JlYXRlQWxlcnRDb25maWciLCJzZWFyY2hBbGVydExvZyIsImFja0FsZXJ0IiwiY3JlYXRlQWxlcnQiLCJhY2N1cmFjeVdhbGxldCIsImNyZWF0ZUFsZXJ0V2FsbGV0RXhwaXJ5IiwidXBkYXRlU2ltR3JvdXAiLCJnZXRTaW0iLCJ1cGRhdGVEZXZpY2UiLCJnZXRBbGVydENvbmZpZyIsInNlYXJjaEFsZXJ0IiwidXBkYXRlQWxlcnQiLCJkZWxldGVBbGVydCIsInNoYXJlV2FsbGV0IiwiZ2V0Q29udHJhY3QiLCJzZWFyY2hDb250cmFjdCIsImdldEFsZXJ0IiwidXBkYXRlQWxlcnRSZWN2R3JwIiwiZ2V0UGVyc29uYWxEYXRhUG9saWN5IiwiY3JlYXRlVXNlciIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVQcm9maWxlIiwiZ2V0U2ltR3JvdXAiLCJ1cGRhdGVBbGVydENvbmZpZyIsImNyZWF0ZUFsZXJ0UmVjdkdycCIsInNlYXJjaFNoYXJlSW5mbyIsImdldFJlcG9ydF85IiwiZ2V0UmVwb3J0XzExIiwiY3JlYXRlU2hhcmVJbmZvIiwic2VhcmNoQWxlcnRDb25maWciLCJnZXRBbGVydFJlY3ZHcnAiLCJkZWxldGVBbGVydFJlY3ZHcnAiLCJzZWFyY2hXYWxsZXQiLCJnZXRVc2VyIiwiZ2V0UHJvZmlsZVVzZXIiLCJzZWFyY2hTaW0iLCJnZXRDdXN0b21lciIsImNoYW5nZVN0YXR1c0FsZXJ0Iiwic2VhcmNoTG9nIiwiY3JlYXRlQWxlcnRXYWxsZXRUaHJlc2hvbGQiXX0.iZyppc2-faMbk0U_aJ8OcuiFNFKuM0lqtPszVWtXca8a5yQS9X5BK0BsW7jZc74-1APX7af-H-FfB-HFj_v02A",u=async()=>await (0,o.A)("POST","api/Device/list-devices",{paginator:{page:1,more:!0},filter:{deviceStatus:"-3"}}),m=e=>{try{return(0,d.A)({method:"GET",url:"https://api-m2m.vinaphone.com.vn/api/sim-mgmt/detail-plan/".concat(e),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},withCredentials:!0}).then(e=>200===e.status||201===e.status?e.data.dataUseInMonth:null).catch(e=>(console.error("Error fetching SIM data:",e),null))}catch(e){return console.error("Error fetching SIM data:",e),null}},x=e=>{let a="01/".concat(String(new Date().getMonth()+1).padStart(2,"0"),"/").concat(new Date().getFullYear()," 00:00:00"),t="".concat(new Date().getDate().toString().padStart(2,"0"),"/").concat(String(new Date().getMonth()+1).padStart(2,"0"),"/").concat(new Date().getFullYear()," 00:00:00");try{return(0,d.A)({method:"POST",url:"https://api-m2m.vinaphone.com.vn/api/report/preview",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},data:{id:11,customerCodes:null,paramsValue:[{prKey:"msisdn",value:e},{prKey:"customer_codes",value:null},{prKey:"contract_codes",value:null},{prKey:"created_start_date",value:a},{prKey:"created_end_date",value:t}]}}).then(e=>200===e.status||201===e.status?e.data.reportContents[0].data:null).catch(e=>(console.error("Error fetching SIM data:",e),null))}catch(e){return console.error("Error fetching SIM data:",e),null}};var h=t(8254),p=t(1536),g=t(3117),v=t(648),b=t(8100),f=t(1567),y=t(8422),j=t(9967),N=t(1889);let w=e=>{switch(e){case -1:return"red";case 0:return"gray";case 1:return"green";default:return"black"}},I=e=>{switch(e){case -1:return"red";case 0:return"green";case 3:return"orange";default:return"yellow"}},C=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex mt-4 md:justify-between space-x-2 md:space-x-0",children:[(0,s.jsx)("div",{className:"text-2xl ring-2 rounded-xs bg-white",children:(0,s.jsx)(j.aaf,{className:"p-0.5",color:w(e.androidStatus)})}),(0,s.jsx)("div",{className:"text-2xl ring-2 rounded-xs bg-white",children:(0,s.jsx)(N.aRH,{className:"p-0.5 ",color:w(e.modemStatus)})}),(0,s.jsx)("div",{className:"text-2xl ring-2 rounded-xs bg-white",children:(0,s.jsx)(b.wE,{className:"p-0.5",color:w(e.amplyStatus)})}),(0,s.jsx)("div",{className:"text-2xl ring-2 rounded-xs bg-white",children:(0,s.jsx)(y.nyV,{className:"p-0.5",color:w(e.speakerStatus)})}),(0,s.jsx)("div",{className:"text-2xl ring-2 rounded-xs bg-white",children:(0,s.jsx)(v.qg7,{className:"p-0.5",color:I(e.acquyStatus)})})]})}),S=e=>{let a=(0,n.d4)(e=>e.app.isSimDataFetching),[t,i]=(0,r.useState)("0.00 MB");return(0,r.useEffect)(()=>{let t=async()=>{var a;let t;let s=await m("841".concat(null===(a=e.data.phone)||void 0===a?void 0:a.slice(1)));i(s/1024/1024>1024?"".concat((s/1024/1024/1024).toFixed(2)," GB"):"".concat((s/1024/1024).toFixed(2)," MB"))};!a&&e.data.phone&&t()},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:(0,f.cn)("ring-2 md:shadow-[5px_5px_5px_2px] rounded-sm md:shadow-primary/60  overflow-hidden cursor-pointer",(e=>{switch(e){case -2:return"bg-slate-300/50";case -1:return"bg-red-100/50";case 0:return"bg-yellow-100/50";case 1:return"bg-green-100/50";case 2:return"bg-orange-100/50";default:return"bg-[#fdfdfd]"}})(e.data.deviceStatus)),title:e.data.deviceName,children:[(0,s.jsx)("p",{className:"bg-primary text-white text-xs font-semibold inline-block mt-2 px-2.5 py-0.5",children:(0,s.jsx)("span",{className:"font-semibold",children:e.data.deviceId})}),(0,s.jsxs)("div",{className:"p-4 pt-2",children:[(0,s.jsx)("h2",{className:"text-sm font-semibold text-gray-900 w-full overflow-hidden whitespace-nowrap text-ellipsis",children:e.data.deviceName}),(0,s.jsxs)("p",{className:"mt-2 text-sm font-semibold flex",children:[(0,s.jsx)(v.Vmr,{className:"my-auto mr-1"}),":\xa0",(0,s.jsx)("span",{className:"text-gray-600 font-normal",children:e.data.phone||"unknown"})]}),(0,s.jsxs)("p",{className:"mt-2 text-sm font-semibold flex",children:[(0,s.jsx)(p.zdR,{className:"my-auto mr-1"}),":\xa0",(0,s.jsx)("span",{className:"text-gray-600 font-normal",children:t})]}),(0,s.jsxs)("p",{className:"mt-2 text-sm font-semibold flex",children:[(0,s.jsx)(b.fOt,{className:"my-auto mr-1"}),(0,s.jsxs)("span",{className:(0,f.cn)("text-gray-600 font-normal",{"text-red-600":e.data.isOverTemperature}),children:[Number(e.data.temperature).toFixed(2),"\xb0C"]}),"\xa0/\xa0",(0,s.jsx)(g.ZDh,{className:"my-auto mr-1"}),(0,s.jsxs)("span",{className:(0,f.cn)("text-gray-600 font-normal",{"text-red-600":e.data.isOverHumidity}),children:[Number(e.data.humidity).toFixed(2),"%"]})]}),(0,s.jsx)(C,{acquyStatus:e.data.acquyStatus,amplyStatus:e.data.amplyStatus,androidStatus:e.data.androidStatus,speakerStatus:e.data.speakerStatus,modemStatus:e.data.modemStatus})]})]})})};var _=t(9310),Z=t(767);function k(e){let{...a}=e;return(0,s.jsx)(_.bL,{"data-slot":"dialog",...a})}function V(e){let{...a}=e;return(0,s.jsx)(_.ZL,{"data-slot":"dialog-portal",...a})}function X(e){let{className:a,...t}=e;return(0,s.jsx)(_.hJ,{"data-slot":"dialog-overlay",className:(0,f.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",a),...t})}function F(e){let{className:a,children:t,...r}=e;return(0,s.jsxs)(V,{"data-slot":"dialog-portal",children:[(0,s.jsx)(X,{}),(0,s.jsxs)(_.UC,{"data-slot":"dialog-content",className:(0,f.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",a),...r,children:[t,(0,s.jsxs)(_.bm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,s.jsx)(Z.A,{}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function J(e){let{className:a,...t}=e;return(0,s.jsx)("div",{"data-slot":"dialog-header",className:(0,f.cn)("flex flex-col gap-2 text-center sm:text-left",a),...t})}function E(e){let{className:a,...t}=e;return(0,s.jsx)(_.hE,{"data-slot":"dialog-title",className:(0,f.cn)("text-lg leading-none font-semibold",a),...t})}function R(e){let{className:a,...t}=e;return(0,s.jsx)(_.VY,{"data-slot":"dialog-description",className:(0,f.cn)("text-muted-foreground text-sm",a),...t})}function A(e){let{className:a,...t}=e;return(0,s.jsx)("div",{"data-slot":"skeleton",className:(0,f.cn)("bg-primary/10 animate-pulse rounded-md",a),...t})}let T=e=>{let[a,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{var a;let s=[];switch(null===(a=e.data)||void 0===a?void 0:a.simCarrier){case"Viettel":s=await x("841388254211");break;case"Vinaphone":case"Mobifone":s=await x("841234567890")}s&&t(s)})()},[]),(0,s.jsx)(s.Fragment,{children:e.data&&(0,s.jsx)(k,{open:e.isOpen,onOpenChange:()=>e.setIsOpen(!1),children:(0,s.jsxs)(F,{children:[(0,s.jsxs)(J,{children:[(0,s.jsxs)(E,{className:"flex items-center",children:[(0,s.jsx)("div",{className:"text-white bg-primary px-2 mr-2 rounded-md flex items-center min-h-8",children:e.data.deviceId}),e.data.deviceName]}),(0,s.jsx)(R,{})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-semibold",children:["Nh\xe0 mạng:\xa0",(0,s.jsx)("span",{className:"font-normal text-slate-600",children:e.data.simCarrier})]}),(0,s.jsxs)("p",{className:"font-semibold",children:["Sim Data:\xa0",(0,s.jsx)("span",{className:"font-normal text-slate-600",children:e.data.phone})]}),0===a.length?(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[(0,s.jsx)(A,{className:"h-[2rem]"}),(0,s.jsx)(A,{className:"h-[2rem]"}),(0,s.jsx)(A,{className:"h-[2rem]"}),(0,s.jsx)(A,{className:"h-[2rem]"}),(0,s.jsx)(A,{className:"h-[2rem]"}),(0,s.jsx)(A,{className:"h-[2rem]"})]}):(0,s.jsxs)("table",{className:"w-full border-collapse border border-black",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"text-sm",children:[(0,s.jsx)("th",{className:"text-left py-2 px-3 border border-black",children:"Time"}),(0,s.jsx)("th",{className:"text-left py-2 px-3 border border-black",children:"Data Used"})]})}),(0,s.jsx)("tbody",{children:a.map((e,a)=>(0,s.jsxs)("tr",{className:"text-sm",children:[(0,s.jsx)("td",{className:"py-1 px-3 border border-black",children:e.TIME}),(0,s.jsxs)("td",{className:"py-1 px-3 border border-black",children:[e.DATAUSED," MB"]})]},a))})]})]}),(0,s.jsx)("div",{className:"w-[50%]"})]})})})},G=e=>{let a=(0,n.d4)(e=>e.device.count_all),t=(0,n.d4)(e=>e.device.count_online),r=(0,n.d4)(e=>e.device.count_warning),i=(0,n.d4)(e=>e.device.count_error),l=(0,n.d4)(e=>e.device.count_offline),o=(0,n.d4)(e=>e.device.count_alarm),d=a=>{e.setPagination({pageIndex:0,pageSize:20}),e.setColumnFilters(null===a?[]:[{id:"deviceStatus",value:a}])};return(0,s.jsx)("div",{className:"grid lg:grid-cols-6 grid-cols-3 divide-x-2 divide-y-2 lg:divide-y-0 divide-primary absolute top-0 right-0 left-0 ring-2 ring-primary rounded-t-md cursor-pointer",children:[{label:"Tất cả",value:null,count:a,bgColor:"cyan",extraClass:"rounded-tl-md"},{label:"Online",value:1,count:t,bgColor:"green"},{label:"Warning",value:0,count:r,bgColor:"yellow",extraClass:"lg:border-r-2 border-r-0"},{label:"Error",value:-1,count:i,bgColor:"red",extraClass:"border-b-0"},{label:"Offline",value:-2,count:l,bgColor:"slate",extraClass:"border-b-0"},{label:"Alarm",value:2,count:o,bgColor:"orange",extraClass:"lg:rounded-tr-md"}].map(e=>{let{label:a,value:t,count:r,bgColor:n,extraClass:i}=e;return(0,s.jsxs)("div",{className:(0,f.cn)("h-8 lg:px-4 px-2 font-semibold flex items-center",{"bg-cyan-100/50 text-cyan-800":"cyan"===n,"bg-green-100/50 text-green-800":"green"===n,"bg-yellow-100/50 text-yellow-800":"yellow"===n,"bg-red-100/50 text-red-800":"red"===n,"bg-slate-300/50 text-slate-800":"slate"===n,"bg-orange-100/50 text-orange-800":"orange"===n},i),onClick:()=>d(t),children:[a,":\xa0",r]},a)})})};var Y=t(7661),W=t(3518),z=t(6967),D=t(7054),O=t(3312);let M=e=>(0,s.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,s.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["page ",e.pagination.pageIndex+1," / ",e.table.getPageCount()]}),(0,s.jsxs)(O.$,{variant:"outline",className:"h-8 w-8 p-0 cursor-pointer",onClick:()=>e.setPagination({pageSize:20,pageIndex:0}),disabled:!e.table.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,s.jsx)(Y.A,{})]}),(0,s.jsxs)(O.$,{variant:"outline",className:"h-8 w-8 p-0 cursor-pointer",onClick:()=>e.setPagination({pageSize:20,pageIndex:e.pagination.pageIndex-1}),disabled:!e.table.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,s.jsx)(W.A,{})]}),(0,s.jsxs)(O.$,{variant:"outline",className:"h-8 w-8 p-0 cursor-pointer",onClick:()=>e.setPagination({pageSize:20,pageIndex:e.pagination.pageIndex+1}),disabled:!e.table.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,s.jsx)(z.A,{})]}),(0,s.jsxs)(O.$,{variant:"outline",className:"h-8 w-8 p-0 cursor-pointer",onClick:()=>e.setPagination({pageSize:20,pageIndex:e.table.getPageCount()-1}),disabled:!e.table.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,s.jsx)(D.A,{})]})]}),U=[{header:"Device ID",accessorKey:"deviceId"},{header:"Device Status",accessorKey:"deviceStatus",filterFn:"weakEquals"},{header:"Số điện thoại",accessorKey:"phone"},{header:"Data",accessorKey:"simData"},{header:"Nhiệt độ",accessorKey:"temperature"},{header:"Qu\xe1 nhiệt?",accessorKey:"isOverTemperature"},{header:"Độ ẩm",accessorKey:"humidity"},{header:"Qu\xe1 ẩm?",accessorKey:"isOverHumidity"}],P=()=>{let e=(0,n.wA)(),a=(0,n.d4)(e=>e.device.devices_list),t=(0,n.d4)(e=>e.device.isDeviceFetching);(0,r.useEffect)(()=>{let a=async()=>{let[a,t]=await u();200===a&&e((0,h.r_)(t.items))};t||(a(),e((0,h.AL)(!0)))});let[o,d]=(0,r.useState)(!1),[c,m]=(0,r.useState)(null),[x,p]=(0,r.useState)([]),[g,v]=(0,r.useState)({pageIndex:0,pageSize:20}),b=(0,i.N4)({columns:U,data:a,state:{columnFilters:x,pagination:g},getCoreRowModel:(0,l.HT)(),getFilteredRowModel:(0,l.hM)(),onColumnFiltersChange:p,getPaginationRowModel:(0,l.kW)()});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 rounded-md ring-2 ring-primary p-4 relative",children:[(0,s.jsx)("div",{className:"col-span-full lg:h-[0.8rem] h-[2.4rem]",children:(0,s.jsx)(G,{setColumnFilters:p,setPagination:v})}),b.getRowModel().rows.map((e,a)=>(0,s.jsx)("div",{onClick:()=>{d(!0),m(e.original)},children:(0,s.jsx)(S,{data:e.original})},a))]}),(0,s.jsx)("div",{className:"flex md:justify-end justify-center mt-4 space-x-2",children:(0,s.jsx)(M,{table:b,pagination:g,setPagination:v})}),(0,s.jsx)(T,{isOpen:o,setIsOpen:d,data:c})]})},L=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("title",{children:"Home"}),(0,s.jsx)("div",{children:(0,s.jsx)(P,{})})]})}},e=>{var a=a=>e(e.s=a);e.O(0,[897,362,204,479,271,777,711,264,891,704,760,441,587,358],()=>a(7710)),_N_E=e.O()}]);
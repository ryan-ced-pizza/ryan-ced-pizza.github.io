var fe=Object.defineProperty,ge=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var ae=(e,a,c)=>a in e?fe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[a]=c,w=(e,a)=>{for(var c in a||(a={}))he.call(a,c)&&ae(e,c,a[c]);if(ne)for(var c of ne(a))_e.call(a,c)&&ae(e,c,a[c]);return e},V=(e,a)=>ge(e,ye(a));import{p as xe,m as E,n as pe,q as be,s as R,t as O,u as oe,v as N,w as Y,x as J,y,z as Z,A as Ce,B as K,h as b,T as Se,K as qe,C as we,E as ee,F as te,G as Pe,H as $e,I as Ae,J as ve,L as ke,M as Ie,O as me,P as U,R as Ve,S as Be,U as Le,V as Te,W as Me,X as De,Y as He,Z as Ne,_ as ze,o as F,$ as W,a0 as ie,a1 as le,a2 as X,c as re,a3 as Q,a4 as D,a5 as H,a6 as Ee,a7 as j,a8 as se,a9 as Fe}from"./vendor.9a46ac8d.js";import{g as ue,s as ce,u as Qe,a as Ue}from"./use-quasar.9572e702.js";import{c as Re}from"./selection.524b1c62.js";import{u as Ke,a as Oe,b as Ye}from"./use-fullscreen.16934a44.js";import{P as G}from"./LocalStorage.1833d7dc.js";function We(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((c,h)=>{const l=parseFloat(c);l&&(a[h]=l)}),a}var Xe=xe({name:"touch-swipe",beforeMount(e,{value:a,arg:c,modifiers:h}){if(h.mouse!==!0&&E.has.touch!==!0)return;const l=h.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:We(c),direction:ue(h),noop:pe,mouseStart(r){ce(r,t)&&be(r)&&(R(t,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(r,!0))},touchStart(r){if(ce(r,t)){const d=r.target;R(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),t.start(r)}},start(r,d){E.is.firefox===!0&&O(e,!0);const x=oe(r);t.event={x:x.left,y:x.top,time:Date.now(),mouse:d===!0,dir:!1}},move(r){if(t.event===void 0)return;if(t.event.dir!==!1){N(r);return}const d=Date.now()-t.event.time;if(d===0)return;const x=oe(r),S=x.left-t.event.x,u=Math.abs(S),v=x.top-t.event.y,n=Math.abs(v);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&n<t.sensitivity[1]){t.end(r);return}}else if(u<t.sensitivity[2]&&n<t.sensitivity[2])return;const f=u/d,p=n/d;t.direction.vertical===!0&&u<n&&u<100&&p>t.sensitivity[0]&&(t.event.dir=v<0?"up":"down"),t.direction.horizontal===!0&&u>n&&n<100&&f>t.sensitivity[0]&&(t.event.dir=S<0?"left":"right"),t.direction.up===!0&&u<n&&v<0&&u<100&&p>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<n&&v>0&&u<100&&p>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>n&&S<0&&n<100&&f>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>n&&S>0&&n<100&&f>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(N(r),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Re(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const $=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout($,50):$()}),t.handler({evt:r,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:d,distance:{x:u,y:n}})):t.end(r)},end(r){t.event!==void 0&&(Y(t,"temp"),E.is.firefox===!0&&O(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),r!==void 0&&t.event.dir!==!1&&N(r),t.event=void 0)}};e.__qtouchswipe=t,h.mouse===!0&&R(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]]),E.has.touch===!0&&R(t,"main",[[e,"touchstart","touchStart",`passive${h.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const c=e.__qtouchswipe;c!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&c.end(),c.handler=a.value),c.direction=ue(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(Y(a,"main"),Y(a,"temp"),E.is.firefox===!0&&O(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});const je={name:{required:!0},disable:Boolean},de={setup(e,{slots:a}){return()=>b("div",{class:"q-panel scroll",role:"tabpanel"},ee(a.default))}},Ge={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Je=["update:modelValue","before-transition","transition"];function Ze(){const{props:e,emit:a,proxy:c}=K(),{getCacheWithFn:h}=Qe();let l,t;const r=J(null),d=J(null);function x(o){const g=e.vertical===!0?"up":"left";i((c.$q.lang.rtl===!0?-1:1)*(o.direction===g?1:-1))}const S=y(()=>[[Xe,x,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=y(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),v=y(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),n=y(()=>`--q-transition-duration: ${e.transitionDuration}ms`),f=y(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),p=y(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=y(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Z(()=>e.modelValue,(o,g)=>{const A=m(o)===!0?s(o):-1;t!==!0&&P(A===-1?0:A<s(g)?-1:1),r.value!==A&&(r.value=A,a("before-transition",o,g),Ce(()=>{a("transition",o,g)}))});function $(){i(1)}function M(){i(-1)}Object.assign(c,{next:$,previous:M,goTo:L});function L(o){a("update:modelValue",o)}function m(o){return o!=null&&o!==""}function s(o){return l.findIndex(g=>g.props.name===o&&g.props.disable!==""&&g.props.disable!==!0)}function q(){return l.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function P(o){const g=o!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(o===-1?u.value:v.value):null;d.value!==g&&(d.value=g)}function i(o,g=r.value){let A=g+o;for(;A>-1&&A<l.length;){const T=l[A];if(T!==void 0&&T.props.disable!==""&&T.props.disable!==!0){P(o),t=!0,a("update:modelValue",T.props.name),setTimeout(()=>{t=!1});return}A+=o}e.infinite===!0&&l.length>0&&g!==-1&&g!==l.length&&i(o,o===-1?l.length:-1)}function C(){const o=s(e.modelValue);return r.value!==o&&(r.value=o),!0}function B(){const o=m(e.modelValue)===!0&&C()&&l[r.value];return e.keepAlive===!0?[b(qe,p.value,[b(k.value===!0?h(f.value,()=>V(w({},de),{name:f.value})):de,{key:f.value,style:n.value},()=>o)])]:[b("div",{class:"q-panel scroll",style:n.value,key:f.value,role:"tabpanel"},[o])]}function _(){if(l.length!==0)return e.animated===!0?[b(Se,{name:d.value},B)]:B()}function I(o){return l=we(ee(o.default,[])).filter(g=>g.props!==null&&g.props.slot===void 0&&m(g.props.name)===!0),l.length}function z(){return l}return{panelIndex:r,panelDirectives:S,updatePanelsList:I,updatePanelIndex:C,getPanelContent:_,getEnabledPanels:q,getPanels:z,isValidPanelName:m,keepAliveProps:p,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:i,goToPanel:L,nextPanel:$,previousPanel:M}}var et=te({name:"QCarouselSlide",props:V(w({},je),{imgSrc:String}),setup(e,{slots:a}){const c=y(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>b("div",{class:"q-carousel__slide",style:c.value},ee(a.default))}});const tt=["top","right","bottom","left"],nt=["regular","flat","outline","push","unelevated"];var at=te({name:"QCarousel",props:V(w(w(w({},Pe),Ge),Ke),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>nt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>tt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...Oe,...Je],setup(e,{slots:a}){const{proxy:{$q:c}}=K(),h=$e(e,c);let l,t;const{updatePanelsList:r,getPanelContent:d,panelDirectives:x,goToPanel:S,previousPanel:u,nextPanel:v,getEnabledPanels:n,panelIndex:f}=Ze(),{inFullscreen:p}=Ye(),k=y(()=>p.value!==!0&&e.height!==void 0?{height:e.height}:{}),$=y(()=>e.vertical===!0?"vertical":"horizontal"),M=y(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(p.value===!0?" fullscreen":"")+(h.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${$.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${q.value}`:"")),L=y(()=>{const _=[e.prevIcon||c.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||c.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&c.lang.rtl===!0?_.reverse():_}),m=y(()=>e.navigationIcon||c.iconSet.carousel.navigationIcon),s=y(()=>e.navigationActiveIcon||m.value),q=y(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),P=y(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Z(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(l),i())}),Z(()=>e.autoplay,_=>{_?i():clearInterval(l)});function i(){const _=Ae(e.autoplay)===!0?e.autoplay:5e3;l=setTimeout(_>=0?v:u,Math.abs(_))}ve(()=>{e.autoplay&&i()}),ke(()=>{clearInterval(l)});function C(_,I){return b("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${_} q-carousel__navigation--${q.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[b("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},n().map(I))])}function B(){const _=[];if(e.navigation===!0){const I=a["navigation-icon"]!==void 0?a["navigation-icon"]:o=>b(U,V(w({key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`},o.btnProps),{onClick:o.onClick})),z=t-1;_.push(C("buttons",(o,g)=>{const A=o.props.name,T=f.value===g;return I({index:g,maxIndex:z,name:A,active:T,btnProps:w({icon:T===!0?s.value:m.value,size:"sm"},P.value),onClick:()=>{S(A)}})}))}else if(e.thumbnails===!0){const I=e.controlColor!==void 0?` text-${e.controlColor}`:"";_.push(C("thumbnails",z=>{const o=z.props;return b("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+I,src:o.imgSrc||o["img-src"],onClick:()=>{S(o.name)}})}))}return e.arrows===!0&&f.value>=0&&((e.infinite===!0||f.value>0)&&_.push(b("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${$.value} absolute flex flex-center`},[b(U,V(w({icon:L.value[0]},P.value),{onClick:u}))])),(e.infinite===!0||f.value<t-1)&&_.push(b("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${$.value} absolute flex flex-center`},[b(U,V(w({icon:L.value[1]},P.value),{onClick:v}))]))),me(a.control,_)}return()=>(t=r(a),b("div",{class:M.value,style:k.value},[Ie("div",{class:"q-carousel__slides-container"},d(),"sl-cont",e.swipeable,()=>x.value)].concat(B())))}}),ot=te({name:"QRating",props:V(w(w({},Ve),Be),{modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean}),emits:["update:modelValue"],setup(e,{slots:a,emit:c}){const{proxy:{$q:h}}=K(),l=Le(e),t=Te(e),r=He(t),d=J(0);let x={};const S=y(()=>e.readonly!==!0&&e.disable!==!0),u=y(()=>`q-rating row inline items-center q-rating--${S.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),v=y(()=>{const m=Array.isArray(e.icon)===!0?e.icon.length:0,s=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,q=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,P=Array.isArray(e.color)===!0?e.color.length:0,i=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,C=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:m,icon:m>0?e.icon[m-1]:e.icon,selIconLen:s,selIcon:s>0?e.iconSelected[s-1]:e.iconSelected,halfIconLen:q,halfIcon:q>0?e.iconHalf[s-1]:e.iconHalf,colorLen:P,color:P>0?e.color[P-1]:e.color,selColorLen:i,selColor:i>0?e.colorSelected[i-1]:e.colorSelected,halfColorLen:C,halfColor:C>0?e.colorHalf[C-1]:e.colorHalf}}),n=y(()=>{const m=[],s=v.value,q=Math.ceil(e.modelValue),P=e.iconHalf===void 0||q===e.modelValue?-1:q;for(let i=1;i<=e.max;i++){const C=d.value===0&&e.modelValue>=i||d.value>0&&d.value>=i,B=P===i&&d.value<i,_=d.value>0&&(B===!0?q:e.modelValue)>=i&&d.value<i,I=B===!0?i<=s.halfColorLen?e.colorHalf[i-1]:s.halfColor:s.selColor!==void 0&&C===!0?i<=s.selColorLen?e.colorSelected[i-1]:s.selColor:i<=s.colorLen?e.color[i-1]:s.color;m.push({name:(B===!0?i<=s.halfIconLen?e.iconHalf[i-1]:s.halfIcon:s.selIcon!==void 0&&(C===!0||_===!0)?i<=s.selIconLen?e.iconSelected[i-1]:s.selIcon:i<=s.iconLen?e.icon[i-1]:s.icon)||h.iconSet.rating.icon,classes:"q-rating__icon"+(C===!0||B===!0?" q-rating__icon--active":"")+(_===!0?" q-rating__icon--exselected":"")+(d.value===i?" q-rating__icon--hovered":"")+(I!==void 0?` text-${I}`:"")})}return m}),f=y(()=>{if(e.disable===!0)return{"aria-disabled":"true"};if(e.readonly===!0)return{"aria-readonly":"true"}}),p=y(()=>S.value===!0?0:null);function k(m){if(S.value===!0){const s=Ne(parseInt(m,10),1,parseInt(e.max,10)),q=e.noReset!==!0&&e.modelValue===s?0:s;q!==e.modelValue&&c("update:modelValue",q),d.value=0}}function $(m){S.value===!0&&(d.value=m)}function M(m,s){switch(m.keyCode){case 13:case 32:return k(s),N(m);case 37:case 40:return x[`rt${s-1}`]&&x[`rt${s-1}`].$el.focus(),N(m);case 39:case 38:return x[`rt${s+1}`]&&x[`rt${s+1}`].$el.focus(),N(m)}}function L(){d.value=0}return Me(()=>{x={}}),()=>{const m=[];return n.value.forEach(({classes:s,name:q},P)=>{const i=P+1;m.push(b("div",{key:i,ref:C=>{x[`rt${i}`]=C},class:"q-rating__icon-container flex flex-center",tabindex:p.value,onClick(){k(i)},onMouseover(){$(i)},onMouseout:L,onFocus(){$(i)},onBlur:L,onKeyup(C){M(C,i)}},me(a[`tip-${i}`],[b(De,{class:s,name:q})])))}),e.name!==void 0&&e.disable!==!0&&r(m,"push"),b("div",w({class:u.value,style:l.value},f.value),m)}}});const it={class:"q-pa-md row justify-center q-gutter-md"},lt={class:"absolute-bottom custom-caption row"},rt={class:"text-h6 ellipsis"},st={class:"row no-wrap items-center"},ut={class:"col text-h6"},ct={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"},dt={class:"text-caption text-grey-8 ellipsis"},_t={setup(e){const a=Ue(),c=K(),{$api:h,$global:l,$qs:t,$chupipay:r}=c.appContext.config.globalProperties,d=ze();window.setUser=({user:u,jwt:v})=>{console.log("called",{user:u,jwt:v}),h.defaults.headers.common.Authorization="Bearer "+v,l.user=u,l.jwt=v,G.set("jwtt",v),G.set("userr",u)},ve(async()=>{console.log("mounted");const u={populate:["images"]};let v=null;try{const{data:{data:n}}=await h.get("/items?"+t.stringify(u));v=n}catch{delete h.defaults.headers.common.Authorization;const{data:{data:f}}=await h.get("/items?"+t.stringify(u));v=f}if(console.log(v),l.items=v.map(n=>V(w({},n.attributes),{id:n.id,imgModel:`${n.id}-${n.attributes.images.data[0].id}`,images:n.attributes.images.data.map(f=>w({id:f.id},f.attributes))})),console.log("items",l.items),d.query.id_token){console.log(d.query.id_token),delete h.defaults.headers.common.Authorization;const{data:n}=await h.get("/auth/google/callback?"+t.stringify(d.query));window.opener?(console.log("window.opener",n),window.opener.setUser(n),setTimeout(()=>{window.close()},5e3)):window.setUser(n)}});function x(u){const v=l.cart.findIndex(f=>f.id===u.id);let n="";return v<0?(l.cart.push(V(w({},u),{quantity:1})),a.notify({message:n=`${u.name} was added`,color:"purple"})):l.cart[v].quantity<l.cart[v].orderLimit?(l.cart[v].quantity++,a.notify({message:n=`${u.name} was added`,color:"purple"})):a.notify({message:n=`${u.name} quantity limit reached`,color:"negative"}),G.set("cartt",l.cart),n}const S=[{indexes:["add *","i want *","more *"],smart:!0,action:function(u,v){console.log("wildcard",v);const n=l.items.filter(f=>f.name.toLowerCase()===v.replaceAll(".",""))[0];n&&r.say(x(n))}}];return r.addCommands(S),(u,v)=>(F(),W("div",it,[(F(!0),W(ie,null,le(X(l).items,(n,f)=>(F(),re(Fe,{class:"my-card",key:"item"+n.id},{default:Q(()=>[D(at,{arrows:"",animated:"",infinite:"",swipeable:"",modelValue:n.imgModel,"onUpdate:modelValue":p=>n.imgModel=p,autoplay:6e3+f*1500,height:"180px"},{default:Q(()=>[(F(!0),W(ie,null,le(n.images,p=>(F(),re(et,{key:`${n.id}-${p.id}`,name:`${n.id}-${p.id}`,"img-src":X(h).defaults.baseURL.replace("/api","")+p.url,loading:"lazy"},{default:Q(()=>[H("div",lt,[H("div",rt,[D(U,{icon:"volume_up",flat:"",round:"",loading:n.loading,onClick:k=>{n.loading=!0,X(r).say(`${n.name}'. '${n.description}`,{onEnd(){n.loading=!1}})}},null,8,["loading","onClick"]),Ee(" "+j(n.name),1)])])]),_:2},1032,["name","img-src"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","autoplay"]),D(se,null,{default:Q(()=>[D(U,{fab:"",color:"deep-orange-9",icon:"add_shopping_cart",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"},onClick:p=>x(n)},null,8,["onClick"]),H("div",st,[H("div",ut,[D(ot,{modelValue:+n.rating,max:5,size:"26px"},null,8,["modelValue"])]),H("div",ct,j((+n.price).toLocaleString("en-PH",{style:"currency",currency:"PHP"})),1)])]),_:2},1024),D(se,{class:"q-pt-none"},{default:Q(()=>[H("div",dt,j(n.description),1)]),_:2},1024)]),_:2},1024))),128))]))}};export{_t as default};

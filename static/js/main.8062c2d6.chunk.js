(this["webpackJsonpredux-saga-todo-list"]=this["webpackJsonpredux-saga-todo-list"]||[]).push([[0],{36:function(n,e,t){n.exports=t(65)},65:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(14),c=t.n(o),i=t(13),u=t(4),l=t(5);function s(){var n=Object(u.a)(["\n :root{\n    --accent-color: #ff944d;\n    --accent-color-active: #ff751a;\n    --text-color: #ffffff;\n    --background-color: #333333;\n    --list-container-background: #232323;\n    --error-color: #ff4d4d;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    outline: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body, textarea, input, button {\n    color: var(--text-color);\n    font-size: 1.6rem;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: 'Poppins', sans-serif;\n  }\n\n  body {\n    background: var(--background-color);\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n"]);return s=function(){return n},n}var d=Object(l.a)(s()),b=t(18),f=t(16),m={taskList:[],showError:!1},v=t(8),p=t.n(v),g=t(9),h=function(n,e){var t=n.avatar_url,r=n.name,a=n.login;return{type:"@task/ADD_TASK",payload:{id:(new Date).getTime(),task:e,name:r,userName:a,avatar:t}}},x=t(34),k=t.n(x).a.create({baseURL:"https://api.github.com"}),E=p.a.mark(O),j=p.a.mark(w);function O(n){var e,t,r,a,o,c;return p.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,e=n.payload,t=e.userName,r=e.task,i.next=4,Object(g.b)(k.get,"users/".concat(t));case 4:return a=i.sent,o=a.data,c=h(o,r),i.next=9,Object(g.c)(c);case 9:i.next=15;break;case 11:return i.prev=11,i.t0=i.catch(0),i.next=15,Object(g.c)({type:"@task/USER_FETCH_FAILED"});case 15:case"end":return i.stop()}}),E,null,[[0,11]])}function w(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.d)("@task/USER_FETCH_REQUESTED",O);case 2:case"end":return n.stop()}}),j)}function y(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all .2s ease-in-out;\n  cursor: pointer;\n  font-weight: bold;\n  background: rgba(255,255,255,0.1);\n  border-bottom-left-radius: 5px;\n\n  &:hover{\n    color: var(--accent-color);\n  }\n"]);return y=function(){return n},n}function S(){var n=Object(u.a)([""]);return S=function(){return n},n}function T(){var n=Object(u.a)(["\n  font-weight: bold;\n  font-size: 1.8rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);return T=function(){return n},n}function _(){var n=Object(u.a)(["\n  flex: 1;\n  margin-left: 1.6rem;\n  margin-right: 2.4rem;\n  overflow: hidden;\n"]);return _=function(){return n},n}function R(){var n=Object(u.a)(["\n  width: 5rem;\n  height: 5rem;\n  border-radius: 100%;\n  border: none;\n  outline: none;\n"]);return R=function(){return n},n}function D(){var n=Object(u.a)(["\n  border-radius: 5px;\n  border: 1px solid rgba(255,255,255,0.1);\n  padding: 1.6rem;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  transition: all .2s ease-in-out;\n\n  &:hover{\n    border: 1px solid rgba(255,255,255,0.2);\n  }\n"]);return D=function(){return n},n}var N=l.b.div(D()),A=l.b.img(R()),C=l.b.div(_()),L=l.b.div(T()),U=l.b.div(S()),z=l.b.div(y()),F=function(n){var e=n.className,t=n.imageSrc,r=n.userName,o=n.task,c=n.onRemoveClick;return a.a.createElement(N,{className:e},a.a.createElement(z,{onClick:c},"x"),a.a.createElement(A,{src:t,alt:r}),a.a.createElement(C,null,a.a.createElement(L,null,r),a.a.createElement(U,null,o)))};function I(){var n=Object(u.a)(["\n  border-radius: 5px;\n  padding: 0.8rem 1.6rem;\n  font-weight: bold;\n  display: inline-block;\n  margin-right: auto;\n  color: var(--text-color);\n  background: var(--error-color);\n"]);return I=function(){return n},n}var H=l.b.div(I()),K=function(n){var e=n.className,t=n.text;return a.a.createElement(H,{className:e},t)};function B(){var n=Object(u.a)(["\n  margin-bottom: 1.6rem;\n"]);return B=function(){return n},n}function M(){var n=Object(u.a)(["\n  margin-bottom: 8px;\n"]);return M=function(){return n},n}function J(){var n=Object(u.a)(["\n  color: rgba(255, 255, 255, 0.4);\n  text-align: center;\n"]);return J=function(){return n},n}function Q(){var n=Object(u.a)(["\n  background: var(--list-container-background);\n  padding: 3.2rem;\n  border-radius: 5px;\n  width: 100%;\n"]);return Q=function(){return n},n}function V(){var n=Object(u.a)(["\n  padding: 1.6rem 2.4rem;\n  background: var(--accent-color);\n  transition: background .2s ease-in-out;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  margin: 0.8rem 0 3.2rem 0;\n  width: 100%;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1.8rem;\n\n  &:hover, &:active{\n    background: var(--accent-color-active);\n  }\n"]);return V=function(){return n},n}function Y(){var n=Object(u.a)(["\n  margin: 8px 0;\n  width: calc(50% - 8px);\n  padding: 1.6rem;\n  background: var(--background-color);\n  border: none;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  transition: all .2s ease-in-out;\n  outline: none;\n\n  &:focus {\n    background: rgba(0,0,0,0.1);\n    border: 2px solid rgba(255, 255, 255, 0.8);\n  }\n"]);return Y=function(){return n},n}function G(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n"]);return G=function(){return n},n}function P(){var n=Object(u.a)(["\n  color: var(--text-color);\n  margin-bottom: 3.2rem;\n  text-align: center;\n"]);return P=function(){return n},n}function q(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  max-width: 600px;\n  min-width: 360px;\n"]);return q=function(){return n},n}function W(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n  padding: 3.2rem 0;\n"]);return W=function(){return n},n}var X=l.b.div(W()),Z=l.b.form(q()),$=l.b.h1(P()),nn=l.b.div(G()),en=l.b.input(Y()),tn=l.b.button(V()),rn=l.b.div(Q()),an=l.b.div(J()),on=Object(l.b)(F)(M()),cn=Object(l.b)(K)(B()),un=function(){var n=Object(r.useRef)(null),e=Object(r.useState)(""),t=Object(b.a)(e,2),o=t[0],c=t[1],u=Object(r.useState)(""),l=Object(b.a)(u,2),s=l[0],d=l[1],f=Object(i.b)(),m=Object(i.c)((function(n){return n.Task})),v=m.taskList,p=m.showError;return a.a.createElement(X,null,a.a.createElement(Z,{onSubmit:function(e){if(e.preventDefault(),o.trim()&&s.trim()){var t=function(n,e){return{type:"@task/USER_FETCH_REQUESTED",payload:{userName:n,task:e}}}(o,s);f(t),c(""),d(""),n.current.focus()}}},a.a.createElement($,null,"Redux Saga Todo List"),a.a.createElement(nn,null,a.a.createElement(en,{ref:n,value:o,onChange:function(n){return c(n.target.value)},placeholder:"Github Username"}),a.a.createElement(en,{value:s,onChange:function(n){return d(n.target.value)},placeholder:"Task"})),a.a.createElement(tn,{type:"submit"},"Add Task +"),!!p&&a.a.createElement(cn,{text:"Uer not found!"}),a.a.createElement(rn,null,!v.length&&a.a.createElement(an,null,"No Task to Show"),v.map((function(n){var e=n.id,t=n.userName,r=n.task,o=n.name,c=n.avatar;return a.a.createElement(on,{key:e,task:r,imageSrc:c,onRemoveClick:function(){return function(n){var e={type:"@task/REMOVE_TASK_BY_ID",payload:n};f(e)}(e)},userName:o||t})})))))},ln=t(7),sn=t(35),dn=p.a.mark(bn);function bn(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.a)([w()]);case 2:case"end":return n.stop()}}),dn)}var fn=Object(ln.c)({Task:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case"@task/ADD_TASK":var a=Object(f.a)({},n,{showError:!1});return a.taskList.push(r),a;case"@task/REMOVE_TASK_BY_ID":var o=Object(f.a)({},n);return o.taskList=o.taskList.filter((function(n){return n.id!==r})),o;case"@task/USER_FETCH_FAILED":return Object(f.a)({},n,{showError:!0});default:return n}}}),mn=Object(sn.a)(),vn=Object(ln.e)(fn,Object(ln.a)(mn));mn.run(bn);var pn=vn;t(64);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null),a.a.createElement(i.a,{store:pn},a.a.createElement(un,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8062c2d6.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.acd54ad6.png"},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),o=a(7),n=a.n(o),l=(a(16),a(1)),i=a(2),c=a(4),m=a(3),d=a(5),g=(a(17),a(18),a(19),a(8)),h=a.n(g),p=function(){return s.a.createElement("header",{className:"py-5 text-center"},s.a.createElement("img",{className:"d-block mx-auto mb-3",src:h.a,alt:"project logo",width:"72",height:"72"}),s.a.createElement("h1",null,"Message encryption"))},u=a(9),w=function(e){var t="";return t=e.correct?"mb-1 marginFooter2":"mb-1 marginFooter",s.a.createElement("footer",{className:"mt-5 pt-3 text-muted text-center text-small"},s.a.createElement("p",{className:t},"\xa92019 The BestCode Corp."),s.a.createElement("nav",{id:"footer-navigation"},s.a.createElement("ul",{className:"list-inline"},s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("a",{href:"#"},"Privacy")),s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("a",{href:"#"},"Terms")),s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("a",{href:"#"},"Support")))))},E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={password:"",message:"",email:"",correct:!1,errors:{password:!1,passwordToShort:!1,message:!1,messageToShort:!1,email:!1}},a.messages={password_error:"The key is too short",password_error2:"The key is too long",message_error:"The text is too short",message_error2:"The text is too long",email_error:"Check if the mail is correct",message_send:"Success! Message was sent"},a.handleChange=function(e){var t=e.target.id,r=e.target.value;a.setState(Object(u.a)({},t,r))},a.handleResetAll=function(){a.setState({password:"",message:"",email:"",correct:!1,messageSend:"",errors:{password:!1,passwordToShort:!1,message:!1,messageToShort:!1,email:!1}})},a.messageToCode=function(){var e=a.state.password.length,t=a.state.message.toUpperCase().replace(/\u0104/g,"A").replace(/\u0106/g,"C").replace(/\u0118/g,"E").replace(/\u0141/g,"L").replace(/\u0143/g,"N").replace(/\xd3/g,"O").replace(/\u015a/g,"S").replace(/\u017b/g,"Z").replace(/\u0179/g,"Z").replace(/[A-Z]/g,function(t){return String.fromCharCode((t.charCodeAt(0)-65+e)%26+65)});a.setState({message:t})},a.handleCodeToMessage=function(){var e=a.state.password.length-2*a.state.password.length,t=function e(t,a){if(a<0)return e(t,a+26);for(var r="",s=0;s<t.length;s++){var o=t[s];if(o.match(/[A-Z]/)){var n=t.charCodeAt(s);n>=65&&n<=90?o=String.fromCharCode((n-65+a)%26+65):n>=97&&n<=122&&(o=String.fromCharCode((n-97+a)%26+97))}r+=o}return r}(a.state.message,e);a.setState({message:t})},a.CodeValidation=function(){var e=!1,t=!1,r=!1,s=!1,o=!1;return a.state.password.length>4&&(t=!0),a.state.password.length<=25&&(e=!0),a.state.message.length<51&&(r=!0),a.state.message.length>4&&(s=!0),e&&t&&r&&s&&(o=!0),{password:e,passwordToShort:t,message:r,messageToShort:s,correct:o}},a.handleCodeMessage=function(){var e=a.CodeValidation();e.correct?a.messageToCode():a.setState({errors:{password:!e.password,passwordToShort:!e.passwordToShort,message:!e.message,messageToShort:!e.messageToShort}})},a.SendValidation=function(){var e=!1,t=!1,r=!1,s=!1,o=!1,n=!1;return a.state.password.length>4&&(t=!0),a.state.password.length<=25&&(e=!0),a.state.message.length<51&&(r=!0),a.state.message.length>4&&(s=!0),a.state.email.length>6&&-1!==a.state.email.indexOf("@")&&(o=!0),e&&t&&r&&s&&o&&(n=!0),{password:e,passwordToShort:t,message:r,messageToShort:s,email:o,correct:n}},a.handleSendMessage=function(e){e.preventDefault();var t=a.SendValidation();t.correct?(a.setState({correct:!0}),setTimeout(a.handleResetAll,2e3)):a.setState({errors:{password:!t.password,passwordToShort:!t.passwordToShort,message:!t.message,messageToShort:!t.messageToShort,email:!t.email}})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;(this.state.errors.password||this.state.errors.passwordToShort)&&setTimeout(function(){e.setState({errors:{password:!1,passwordToShort:!1}})},2e3),(this.state.errors.message||this.state.errors.messageToShort)&&setTimeout(function(){e.setState({errors:{message:!1,messageToShort:!1}})},2e3),this.state.errors.email&&setTimeout(function(){e.setState({errors:{email:!1}})},2e3)}},{key:"render",value:function(){var e="form-control margin text-center",t="form-control margin text-center",a="form-control margin text-center",r="invalid-feedback margin2";return e=this.state.errors.passwordToShort||this.state.errors.password?"form-control margin3 text-center is-invalid":"form-control margin text-center",t=this.state.errors.messageToShort||this.state.errors.message?"form-control margin3 text-center is-invalid":"form-control margin text-center",a=this.state.errors.email?"form-control margin3 text-center is-invalid":"form-control margin text-center",r=this.state.correct?"margin4 sendMessage":"invalid-feedback margin2",s.a.createElement("form",{noValidate:!0},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"marginTop"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col-lg-2 text-right"},s.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"margin"},"Enter the key:")),s.a.createElement("div",{className:"col col-md-4"},s.a.createElement("input",{type:"password",className:e,id:"password","aria-describedby":"inputGroupPrepend3",required:!0,value:this.state.password,onChange:this.handleChange}),s.a.createElement("div",{className:"margin2"},this.state.errors.password&&s.a.createElement("center",null,this.messages.password_error2),this.state.errors.passwordToShort&&s.a.createElement("center",null,this.messages.password_error))),s.a.createElement("div",{className:"col col-lg-2"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col-lg-2 text-right"},s.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"margin"},"Message:")),s.a.createElement("div",{className:"col col-md-4"},s.a.createElement("textarea",{className:t,id:"message",rows:"5","aria-describedby":"inputGroupPrepend3",required:!0,value:this.state.message,onChange:this.handleChange}),s.a.createElement("div",{className:"margin2"},this.state.errors.message&&s.a.createElement("center",null,this.messages.message_error2),this.state.errors.messageToShort&&s.a.createElement("center",null,this.messages.message_error))),s.a.createElement("div",{className:"col col-lg-2 margin"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary btnBreak2",onClick:this.handleCodeMessage},"Encryption"),s.a.createElement("button",{type:"button",className:"btn btn-outline-primary btnBreak",onClick:this.handleCodeToMessage},"Decryption"),s.a.createElement("button",{type:"button",className:"btn btn-outline-primary btnBreak2",onClick:this.handleResetAll},"Reset"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col-lg-2 text-right"},s.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"margin"},"E-mail:")),s.a.createElement("div",{className:"col col-md-4"},s.a.createElement("input",{type:"email",className:a,id:"email","aria-describedby":"emailHelp",placeholder:"Send a message to your friend",value:this.state.email,onChange:this.handleChange}),s.a.createElement("div",{className:r},this.state.errors.email&&s.a.createElement("center",null,this.messages.email_error),this.state.correct&&s.a.createElement("center",null,this.messages.message_send))),s.a.createElement("div",{className:"col col-lg-2 margin mobile"},s.a.createElement("button",{className:"btn btn-outline-primary btnBreak3",type:"submit",onClick:this.handleSendMessage},"Send"))))),s.a.createElement(w,{correct:this.state.correct}))}}]),t}(r.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null),s.a.createElement(E,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.353f4f2c.chunk.js.map
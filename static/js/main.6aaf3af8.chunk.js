(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),u=a.n(n),o=a(14),c=a.n(o),l=(a(23),a(5)),r=a(6),p=a(8),i=a(7),s=a(9),m=(a(24),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"center"},u.a.createElement("div",{className:""},u.a.createElement("div",{className:""},u.a.createElement("button",{className:"pa3 ph4",value:"7",onClick:function(t){return e.props.addToInput(t)}},"7"),u.a.createElement("button",{className:"pa3 ph4",value:"8",onClick:function(t){return e.props.addToInput(t)}},"8"),u.a.createElement("button",{className:"pa3 ph4",value:"9",onClick:function(t){return e.props.addToInput(t)}},"9"),u.a.createElement("button",{className:"pa3 ph4 bg-light-blue",value:"+",onClick:function(t){return e.props.addToInput(t)}},"+")),u.a.createElement("div",{className:""},u.a.createElement("button",{className:"pa3 ph4",value:"4",onClick:function(t){return e.props.addToInput(t)}},"4"),u.a.createElement("button",{className:"pa3 ph4",value:"5",onClick:function(t){return e.props.addToInput(t)}},"5"),u.a.createElement("button",{className:"pa3 ph4",value:"6",onClick:function(t){return e.props.addToInput(t)}},"6"),u.a.createElement("button",{className:"pa3 ph4 bg-light-blue",value:"-",onClick:function(t){return e.props.addToInput(t)}},"-")),u.a.createElement("div",null,u.a.createElement("button",{className:" pa3 ph4",value:"3",onClick:function(t){return e.props.addToInput(t)}},"3"),u.a.createElement("button",{className:" pa3 ph4",value:"2",onClick:function(t){return e.props.addToInput(t)}},"2"),u.a.createElement("button",{className:" pa3 ph4",value:"1",onClick:function(t){return e.props.addToInput(t)}},"1"),u.a.createElement("button",{className:" pa3 ph4 bg-light-blue",value:"*",onClick:function(t){return e.props.addToInput(t)}},"x")),u.a.createElement("div",null,u.a.createElement("button",{className:" pa3 ph4",value:".",onClick:function(t){return e.props.addToInput(t)}},"."),u.a.createElement("button",{className:" pa3 ph4",value:"0",onClick:function(t){return e.props.addToInput(t)}},"0"),u.a.createElement("button",{className:" pa3 ph4",value:"=",onClick:this.props.handleEqual},"="),u.a.createElement("button",{className:" pa3 ph4 bg-light-blue",value:"/",onClick:function(t){return e.props.addToInput(t)}},"/"))))}}]),t}(u.a.Component)),d=(a(25),function(e){return u.a.createElement("div",{className:"input center"},e.input)}),h=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("button",{className:"pa3 ph6 bg-light-blue",onClick:this.props.handleClear},"Clear"))}}]),t}(u.a.Component),b=(a(26),a(27),a(30)),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(i.a)(t).call(this))).addToInput=function(t){console.log(t.target.value),e.setState({input:e.state.input+t.target.value})},e.handleEqual=function(){e.setState({input:b.a(e.state.input)})},e.state={input:""},e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"App"},u.a.createElement("h1",{className:"white"}," CALCULATOR "),u.a.createElement("div",{className:"br3 shadow-3"},u.a.createElement(d,{input:this.state.input}),u.a.createElement(m,{addToInput:this.addToInput,handleEqual:this.handleEqual}),u.a.createElement(h,{handleClear:function(){return e.setState({input:""})}})))}}]),t}(u.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(u.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.6aaf3af8.chunk.js.map
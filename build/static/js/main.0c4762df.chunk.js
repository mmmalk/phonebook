(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(43)},23:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(16),s=t.n(r),l=(t(23),t(3)),c=t(4),i=t(6),u=t(5),h=t(7),m=t(1),d=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(i.a)(this,Object(u.a)(n).call(this,e))).addPerson=function(e){console.log(t.props.newName),e.preventDefault();var n=t.props.state.persons.findIndex(function(e){return e.name===t.state.newName});if(console.log(n,-1!==n),-1===n){var a={name:t.props.state.newName,number:t.props.state.newNumber},o=t.props.state.persons.concat(a);console.log(o),t.props.onPersonChange(a),t.setState({persons:o,newName:"",newNumber:""})}else alert("You're trying to add existing name"),t.setState({newName:"",newNumber:""})},t.handleNewName=function(e){t.props.onNameChange(e.target.value)},t.handleNewNumber=function(e){t.props.onNumberChange(e.target.value)},t.state={persons:[],newName:"",newNumber:""},console.log(t.state),t.handleNewName=t.handleNewName.bind(Object(m.a)(Object(m.a)(t))),t.handleNewNumber=t.handleNewNumber.bind(Object(m.a)(Object(m.a)(t))),t}return Object(h.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.addPerson},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:this.props.state.newName,onChange:this.handleNewName}),o.a.createElement("br",null),"numero: ",o.a.createElement("input",{value:this.props.state.newNumber,onChange:this.handleNewNumber})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))}}],[{key:"force",value:function(){this.forceUpdate()}}]),n}(o.a.Component),p=t(8),b=t.n(p),N=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).onDelete=function(e){var n="/api/persons"+e;console.log(n),window.confirm("are you sure?"),b.a.delete(n).then(function(e){console.log(e.status),t.props.onPersonDelete()})},t}return Object(h.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("ul",null,this.props.persons.map(function(n){return o.a.createElement("li",{key:n.id}," ",n.name," ",n.number," ",o.a.createElement("button",{onClick:function(){return e.onDelete(n.id)}},"Delete"))})))}}]),n}(o.a.Component),g=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(i.a)(this,Object(u.a)(n).call(this,e))).state={persons:[],newName:"",newNumber:""},t.handleNameChange=t.handleNameChange.bind(Object(m.a)(Object(m.a)(t))),t.handleNumberChange=t.handleNumberChange.bind(Object(m.a)(Object(m.a)(t))),t.handlePersonChange=t.handlePersonChange.bind(Object(m.a)(Object(m.a)(t))),t.handleRefresh=t.handleRefresh.bind(Object(m.a)(Object(m.a)(t))),t}return Object(h.a)(n,e),Object(c.a)(n,[{key:"axiosGetter",value:function(){}},{key:"componentDidMount",value:function(){var e=this;console.log("fetching .json"),b.a.get("/api/persons").then(function(n){console.log("got data"),e.setState({persons:n.data}),console.log(e.state)})}},{key:"handleNameChange",value:function(e){this.setState({newName:e})}},{key:"handleNumberChange",value:function(e){this.setState({newNumber:e})}},{key:"handleRefresh",value:function(){var e=this;b.a.get("/api/persons").then(function(n){console.log("deleted something"),e.setState({persons:n.data}),console.log(e.state.persons),e.forceUpdate()})}},{key:"handlePersonChange",value:function(e){var n=this;b.a.post("/api/persons",e).then(function(e){console.log(e.data),n.setState({persons:n.state.persons.concat(e.data),newName:"",newNumber:""})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement(d,{state:this.state,onNameChange:this.handleNameChange,onNumberChange:this.handleNumberChange,onPersonChange:this.handlePersonChange}),o.a.createElement("h2",null,"Numerot"),o.a.createElement(N,{persons:this.state.persons,onPersonDelete:this.handleRefresh}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.0c4762df.chunk.js.map
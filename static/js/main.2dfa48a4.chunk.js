(this["webpackJsonp12bk-goit-react-hw-02-feedback"]=this["webpackJsonp12bk-goit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={data:"Statistics_data__2Li6x",total:"Statistics_total__lIDno",persentage:"Statistics_persentage__3EOT9"}},,,,,,function(e,t,a){e.exports={button:"FeedbackOptions_button__3Obi4"}},function(e,t,a){e.exports={section:"Section_section__6iHvr"}},,function(e,t,a){e.exports={message:"Notification_message__z2FN-"}},,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),o=a.n(s),r=(a(18),a(5)),i=a(6),d=a(7),l=a(13),u=a(12),b=(a(19),a(2)),j=a.n(b),p=a(0),h=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.persentage;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{className:j.a.data,children:["Good:",t]}),Object(p.jsxs)("p",{className:j.a.data,children:["Neutral:",a]}),Object(p.jsxs)("p",{className:j.a.data,children:["Bad: ",n]}),Object(p.jsxs)("p",{className:j.a.total,children:["Total: ",c]}),Object(p.jsxs)("p",{className:j.a.persentage,children:["Positive feedback: ",s,"%"]})]})},g=a(8),f=a.n(g),O=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(p.jsx)("div",{children:t.map((function(e){return Object(p.jsx)("button",{type:"button",className:f.a.button,onClick:function(t){return a(e)},children:e},e)}))})},v=a(9),x=a.n(v),m=function(e){var t=e.title,a=e.children;return Object(p.jsxs)("div",{className:x.a.section,children:[t&&Object(p.jsx)("h2",{children:t}),a]})},k=a(10),_=a.n(k),N=a(11),F=a.n(N),y=function(e){var t=e.message;return Object(p.jsx)("p",{className:F.a.message,children:t})},P=y;y.propType={message:_.a.string.isRequired};var S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.handleIncrement=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e}return Object(d.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good,t=this.countTotalFeedback();return t>0?Math.round(e/t*100):0}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{title:"Please leave the feedback",children:Object(p.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.handleIncrement})}),Object(p.jsx)(m,{title:"Statistics",children:c<1?Object(p.jsx)(P,{message:"No feedback given"}):Object(p.jsx)(h,{good:t,neutral:a,bad:n,total:c,persentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(n.Component);S.defaultProps={good:0,neutral:0,bad:0};var T=S;o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.2dfa48a4.chunk.js.map
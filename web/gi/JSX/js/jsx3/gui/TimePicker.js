/*
 * Copyright (c) 2001-2007, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block","jsx3.util.NumberFormat");jsx3.Class.defineClass("jsx3.gui.TimePicker",jsx3.gui.Block,[jsx3.gui.Form],function(f,m){var dc=jsx3.gui.Event;var M=jsx3.gui.Interactive;f.Ak=jsx3.resolveURI("jsx:///images/jsxtimepicker/spin_up.gif");f.Zr=jsx3.resolveURI("jsx:///images/jsxtimepicker/spin_down.gif");jsx3.html.loadImages(f.Ak,f.Zr);f.Lo=new jsx3.util.NumberFormat("00");f.Ck=new jsx3.util.NumberFormat("000");m.jsxshowsecs=jsx3.Boolean.FALSE;m.jsxshowmillis=jsx3.Boolean.FALSE;m.jsx24hour=null;m.init=function(s,p,l,c){this.jsxsuper(s,p,l,0,c);this.jsxhours=0;this.jsxminutes=0;this.jsxseconds=0;this.jsxmillis=0;};m.getShowSeconds=function(){return this.jsxshowsecs!=null?this.jsxshowsecs:m.jsxshowsecs;};m.getShowMillis=function(){return this.jsxshowmillis!=null?this.jsxshowmillis:m.jsxshowmillis;};m.is24Hour=function(){return this.jsx24hour!=null?this.jsx24hour:this.AQ("time.24hour");};m.setFontSize=function(p){this.jsxsuper(p);this.C5();return this;};m.setShowSeconds=function(h){this.jsxshowsecs=jsx3.Boolean.valueOf(h);this.C5();return this;};m.setShowMillis=function(l){this.jsxshowmillis=jsx3.Boolean.valueOf(l);this.C5();return this;};m.set24Hour=function(g){this.jsx24hour=g!=null?jsx3.Boolean.valueOf(g):null;this.C5();return this;};m.getHours=function(){return this.jsxhours||Number(0);};m.setHours=function(r){this.jsxhours=Math.max(0,Math.min(23,r));this.di();};m.getMinutes=function(){return this.jsxminutes||Number(0);};m.setMinutes=function(r){this.jsxminutes=Math.max(0,Math.min(59,r));this.di();};m.getSeconds=function(){return this.jsxseconds||Number(0);};m.setSeconds=function(n){this.jsxseconds=Math.max(0,Math.min(59,n));this.di();};m.getMilliseconds=function(){return this.jsxmillis||Number(0);};m.setMilliseconds=function(i){this.jsxmillis=Math.max(0,Math.min(999,i));this.di();};m.getDate=function(h){if(this.jsxhours==null&&this.jsxminutes==null)return null;if(h==null)h=new Date();h.setHours(this.jsxhours||Number(0));h.setMinutes(this.jsxminutes||Number(0));h.setSeconds(this.jsxseconds||Number(0));h.setMilliseconds(this.jsxmillis||Number(0));return h;};m.setDate=function(a){if(a==null){this.jsxhours=this.jsxminutes=this.jsxseconds=this.jsxmillis=null;}else{this.jsxhours=a.getHours();this.jsxminutes=a.getMinutes();this.jsxseconds=a.getSeconds();this.jsxmillis=a.getMilliseconds();}this.di();};m.di=function(){var vb=this.getRendered();if(vb!=null){var Mb=vb.childNodes[0].childNodes;for(var Yb=0;Yb<Mb.length;Yb++){var B=Mb[Yb];if(B.tagName&&B.tagName.toLowerCase()=="input"&&B.getAttribute("jsxfield")){var zc=f.gs[B.getAttribute("jsxfield")];var Bb=zc.sp(this);B.value=Bb!=null?zc.Nz(this,Bb):"";}}}};m.k7=function(d,a,n){var jc=this.RL(true,d);if(a){delete d.width;jc.recalculate(d,a,n);var Rb=jc.pQ(0);var O=a.childNodes[0];Rb.recalculate({height:jc.P5()},O,n);var db=Rb.pQ(0);db.recalculate({height:Rb.P5()},O.childNodes[0],n);var nb=Rb.pQ(1);nb.recalculate({height:Rb.P5()},O.childNodes[2],n);var Gc=2;if(this.jsxshowsecs){Gc=Gc+2;var Ub=Rb.pQ(2);Ub.recalculate({height:Rb.P5()},O.childNodes[Gc],n);if(this.jsxshowsecs&&this.jsxshowmillis){Gc=Gc+2;var Tb=Rb.pQ(3);Tb.recalculate({height:Rb.P5()},O.childNodes[Gc],n);}}if(!this.is24Hour()){Gc=Gc+2;var sc=Rb.pQ(4);sc.recalculate({height:Rb.P5()},O.childNodes[Gc],n);}var xc=Rb.pQ(5);Gc++;xc.recalculate({height:Rb.P5()},O.childNodes[Gc],n);}};m.T5=function(e){if(this.getParent()&&(e==null||isNaN(e.parentwidth)||isNaN(e.parentheight))){e=this.getParent().IO(this);}else{if(e==null){e={};}}var P=Math.round((this.getFontSize()||jsx3.gui.Block.DEFAULTFONTSIZE)*3/4);var ec=P;var V=P*2;var rb=Math.round(P*2.2);var S=P*3;var x=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==jsx3.gui.Block.RELATIVE);var wb=x?null:this.getLeft();var Kc=x?null:this.getTop();e.boxtype=x?"relativebox":"box";e.tagname="span";if(x&&this.getMargin())e.margin=this.getMargin();if(e.left==null&&wb!=null)e.left=wb;if(e.top==null&&Kc!=null)e.top=Kc;if(e.height==null&&this.getHeight())e.height=this.getHeight();var Y;if((Y=this.getBorder())!=null&&Y!=""){e.border=Y;}else{e.border="solid 1px #9898a5;solid 1px #d8d8e5;solid 1px #d8d8e5;solid 1px #9898a5";}var Fb;if((Fb=this.getPadding())!=null&&Fb!="")e.padding=Fb;var N=new jsx3.gui.Painted.Box(e);var Cc={};Cc.tagname="div";Cc.boxtype="inline";Cc.height=N.P5();var tb=new jsx3.gui.Painted.Box(Cc);N.W8(tb);var wb=0;Cc={tagname:"input[text]",empty:true,boxtype:"box",left:wb,top:0,padding:"1 1 0 0",width:V,height:tb.P5(),border:"solid 0px;solid 0px;solid 0px;solid 0px"};tb.W8(new jsx3.gui.Painted.Box(Cc));wb=wb+(V+ec);Cc={tagname:"input[text]",empty:true,boxtype:"box",left:wb,top:0,padding:"1 1 0 0",width:V,height:tb.P5(),border:"solid 0px;solid 0px;solid 0px;solid 0px"};tb.W8(new jsx3.gui.Painted.Box(Cc));wb=wb+(V+ec);Cc={tagname:"input[text]",empty:true,boxtype:"box",left:wb,top:0,padding:"1 1 0 0",width:V,height:tb.P5(),border:"solid 0px;solid 0px;solid 0px;solid 0px"};tb.W8(new jsx3.gui.Painted.Box(Cc));if(this.jsxshowsecs)wb=wb+(V+ec);Cc={tagname:"input[text]",empty:true,boxtype:"box",left:wb,top:0,padding:"1 1 0 0",width:S,height:tb.P5(),border:"solid 0px;solid 0px;solid 0px;solid 0px"};tb.W8(new jsx3.gui.Painted.Box(Cc));if(this.jsxshowsecs&&this.jsxshowmillis)wb=wb+(S+ec);Cc={tagname:"input[text]",empty:true,boxtype:"box",left:wb,top:0,padding:"1 1 0 0",width:rb,height:tb.P5(),border:"solid 0px;solid 0px;solid 0px;solid 0px"};tb.W8(new jsx3.gui.Painted.Box(Cc));if(!this.is24Hour())wb=wb+rb;Cc={tagname:"span",boxtype:"box",left:wb,top:0,padding:"0",width:12,height:tb.P5(),border:"solid 0px;solid 0px;solid 0px;solid 1px #d8d8e5"};tb.W8(new jsx3.gui.Painted.Box(Cc));wb=wb+12;tb.recalculate({width:wb});N.recalculate({width:wb+N.explicit.borderwidth});return N;};m.paint=function(){this.applyDynamicProperties();var fc=this.getEnabled()==jsx3.gui.Form.STATEENABLED?this.getBackgroundColor():this.getDisabledBackgroundColor();var Kb=this.getEnabled()==jsx3.gui.Form.STATEENABLED?this.RX(dc.KEYDOWN,"ug",2)+this.RX(dc.BLUR,"Zh",2)+this.RX(dc.FOCUS,"Jk",2)+this.RX(dc.MOUSEWHEEL,"Kp",2):"";Kb=Kb+(this.CI()+this.WP());var lc=this.RL(true);lc.setAttributes("id=\""+this.getId()+"\" class=\"jsx30timepicker\" "+"label=\""+this.getName()+"\" "+this.vH()+this.lM(null,0)+this.renderAttributes(null,true));lc.setStyles(this.d9()+this.T1()+this.MU()+this.iN()+(fc!=null?"background-color:"+fc+";":""));var Fc=Math.round((this.getFontSize()||jsx3.gui.Block.DEFAULTFONTSIZE)*3/4);var ob=this.QP()+this.D6()+this.oY()+this.g0();var wb=this.QP()+this.D6()+this.oY()+this.g0()+"text-align:right;width:"+Fc+"px;top:0px;height:"+lc.pQ(0).pQ(0).P5()+"px;position:absolute;";var Jc=this.jsxhours!=null?f.gs["hour"].Nz(this,this.jsxhours):"";var oc=this.jsxminutes!=null?f.gs["minute"].Nz(this,this.jsxminutes):"";var vb=lc.pQ(0);vb.setAttributes(" class=\"fields\"");var rb="";var D=0;var hc=vb.pQ(0);hc.setAttributes(Kb+" jsxfield=\"hour\" size=\"2\" maxlength=\"2\" value=\""+Jc+"\"");hc.setStyles(ob);rb=rb+hc.paint().join("");D=D+hc.KZ();var sc=vb.pQ(1);sc.setAttributes(Kb+" jsxfield=\"minute\" size=\"2\" maxlength=\"2\" value=\""+oc+"\"");sc.setStyles(ob);rb=rb+("<div style=\""+wb+"left:"+D+"px;\">"+this.AQ("time.sep.hour-min")+"</div>");rb=rb+sc.paint().join("");D=D+(sc.KZ()+Fc);if(this.jsxshowsecs){var fb=this.jsxseconds!=null?f.gs["second"].Nz(this,this.jsxseconds):"";var Jb=vb.pQ(2);Jb.setAttributes(Kb+" jsxfield=\"second\" size=\"2\" maxlength=\"2\" value=\""+fb+"\"");Jb.setStyles(ob);rb=rb+("<div style=\""+wb+"left:"+D+"px;\">"+this.AQ("time.sep.min-sec")+"</div>");rb=rb+Jb.paint().join("");D=D+(Jb.KZ()+Fc);if(this.jsxshowmillis){var Ib=this.jsxmillis!=null?f.gs["milli"].Nz(this,this.jsxmillis):"";var sb=vb.pQ(3);sb.setAttributes(Kb+" jsxfield=\"milli\" size=\"3\" maxlength=\"3\" value=\""+Ib+"\"");sb.setStyles(ob);rb=rb+("<div style=\""+wb+"left:"+D+"px;\">"+this.AQ("time.sep.sec-milli")+"</div>");rb=rb+sb.paint().join("");D=D+(sb.KZ()+Fc);}}if(!this.is24Hour()){var F=this.jsxhours!=null?this.AQ("time.ampm")[this.jsxhours<12?0:1]:"";var Ob=vb.pQ(4);Ob.setAttributes(Kb+" jsxfield=\"ampm\" size=\"2\" maxlength=\"2\" value=\""+F+"\"");Ob.setStyles(ob);rb=rb+("<div style=\""+wb+"position:absolute;left:"+D+"px;\">"+this.AQ("time.sep.ampm")+"</div>");rb=rb+Ob.paint().join("");}var pc=vb.pQ(5);var C=this.getEnabled()==jsx3.gui.Form.STATEENABLED?"cursor:pointer;":"";pc.setAttributes(" unselectable=\"on\" class=\"spinner\"");var jc="<img unselectable=\"on\" style=\"top:0px;left:0px;position:absolute;"+C+"\" width=\"11\" height=\"8\" src=\""+f.Ak+"\""+this.RX(dc.CLICK,"Ed",3)+this.RX(dc.MOUSEDOWN,"jl",3)+"/>"+"<img unselectable=\"on\" style=\"top:8px;left:0px;position:absolute;"+C+"\" width=\"11\" height=\"8\" src=\""+f.Zr+"\""+this.RX(dc.CLICK,"Un",3)+this.RX(dc.MOUSEDOWN,"jl",3)+"/>";return lc.paint().join(vb.paint().join(rb+pc.paint().join(jc)+"&#160;"));};f.gs={hour:{mv:function(g,r){if(isNaN(r))r=g.is24Hour()?-1:0;r++;r=g.is24Hour()?r%24:(r-1)%12+1;return r;},Wz:function(r,g){if(isNaN(g))g=r.is24Hour()?24:13;g--;g=r.is24Hour()?Math.modpos(g,24):Math.modpos(g-1,12)+1;return g;},Nz:function(q,l){if(l==null)return "";return q.is24Hour()?f.Lo.format(l):(Math.modpos(l-1,12)+1).toString();},Ks:function(a,s){if(s==null||s===""){a.jsxhours=null;}else{if(isNaN(s)){a.jsxhours=0;}else{if(a.is24Hour()||s==null){a.jsxhours=Number(s);}else{var Gc=a.AQ("time.ampm");var Ab=a.Fi("ampm");if(Ab!=null&&Ab.value!=null&&Ab.value.toLowerCase()==Gc[1].toLowerCase())a.jsxhours=Number(s)+12;else a.jsxhours=Number(s);}}}},sp:function(a){if(a.is24Hour()||a.jsxhours==null){return a.jsxhours;}else{return Math.modpos(a.jsxhours-1,12)+1;}},Zz:function(q){return q.Fi("minute");},ys:function(b){return null;},uu:function(r,s,n,i){if(!(n>=dc.KEY_0&&n<=dc.KEY_9)||i)return true;var ic=s.value;jsx3.sleep(function(){if(r.getParent()==null)return;var zb=s.value;if(ic==zb)s.value=zb=String.fromCharCode(n);var Vb=Number(s.value);if(!isNaN(Vb)){if(Vb>(r.is24Hour()?23:12)){s.value=String.fromCharCode(n);Vb=Number(s.value);}if(Vb>(r.is24Hour()?2:1)){this.Zz(r).focus();}}},null,this);}},minute:{mv:function(i,p){if(isNaN(p))p=0;p++;return p%60;},Wz:function(o,j){if(isNaN(j))j=60;j--;return Math.modpos(j,60);},Nz:function(b,d){if(d==null)return "";return f.Lo.format(d);},Ks:function(q,l){if(isNaN(l)){q.jsxminutes=0;}else{q.jsxminutes=Number(l);}},sp:function(e){return e.jsxminutes;},Zz:function(j){return j.Fi(j.jsxshowsecs?"second":"ampm");},ys:function(c){return c.Fi("hour");},uu:function(k,g,b,p){if(!(b>=dc.KEY_0&&b<=dc.KEY_9)||p)return true;var nc=g.value;jsx3.sleep(function(){if(k.getParent()==null)return;var xb=g.value;if(nc==xb)g.value=xb=String.fromCharCode(b);var lb=Number(g.value);if(!isNaN(lb)){if(lb>=60){g.value=String.fromCharCode(b);lb=Number(g.value);}if(lb>=6){var uc=this.Zz(k);if(uc)uc.focus();}}},null,this);}},second:{mv:function(r,g){if(isNaN(g))g=0;g++;return g%60;},Wz:function(k,n){if(isNaN(n))n=60;n--;return Math.modpos(n,60);},Nz:function(q,l){if(l==null)return "";return f.Lo.format(l);},Ks:function(a,s){if(isNaN(s)){a.jsxseconds=0;}else{a.jsxseconds=Number(s);}},sp:function(a){return a.jsxseconds;},Zz:function(c){return c.Fi(c.jsxshowmillis?"milli":"ampm");},ys:function(h){return h.Fi("minute");},uu:function(r,s,n,i){return f.gs["minute"].uu.call(this,r,s,n,i);}},milli:{mv:function(o,j){if(isNaN(j))j=0;j++;return j%1000;},Wz:function(b,d){if(isNaN(d))d=1000;d--;return Math.modpos(d,1000);},Nz:function(h,q){if(q==null)return "";return f.Ck.format(q);},Ks:function(i,p){if(isNaN(p)){i.jsxmillis=0;}else{i.jsxmillis=Number(p);}},sp:function(j){return j.jsxmillis;},Zz:function(l){return l.Fi("ampm");},ys:function(c){return c.Fi("second");},uu:function(k,g,b,p){if(!(b>=dc.KEY_0&&b<=dc.KEY_9)||p)return true;var v=g.value;jsx3.sleep(function(){if(k.getParent()==null)return;var Xb=g.value;if(v==Xb)g.value=Xb=String.fromCharCode(b);var kc=Number(g.value);if(!isNaN(kc)){if(Xb.length==3){this.Zz(k).focus();}}},null,this);}},ampm:{mv:function(c,k){var zc=c.AQ("time.ampm");return k!=null&&k.toLowerCase()==zc[0].toLowerCase()?zc[1]:zc[0];},Wz:function(a,e){var Ic=a.AQ("time.ampm");return e!=null&&e.toLowerCase()==Ic[1].toLowerCase()?Ic[0]:Ic[1];},Nz:function(o,j){return j;},Ks:function(c,k){var Wb=c.AQ("time.ampm");var wc=Number(c.Fi("hour").value);if(!isNaN(wc)){if(k!=null&&k.toLowerCase()==Wb[1].toLowerCase())c.jsxhours=wc+12;else c.jsxhours=wc;}},sp:function(i){return i.AQ("time.ampm")[i.jsxhours<12?0:1];},Zz:function(k){return null;},ys:function(s){return s.Fi(s.jsxshowsecs?s.jsxshowmillis?"milli":"second":"minute");},uu:function(c,o,j,e){var Cc=String.fromCharCode(j);var Zb=c.AQ("time.ampm");for(var V=0;V<Zb.length;V++){if(Cc==Zb[V].charAt(0).toUpperCase()){o.value=Zb[V];break;}}return true;}}};m.ug=function(h,e){if(h.hasModifier(true)||h.isModifierKey())return;var Ib=e.getAttribute("jsxfield");var zc=f.gs[Ib];var yb=h.keyCode();if(yb==dc.KEY_ARROW_UP||yb==dc.KEY_ARROW_DOWN){var Jc=yb==dc.KEY_ARROW_UP?"mv":"Wz";var rc=zc[Jc](this,e.value);if(this.doEvent(M.CHANGE,{objEVENT:h,strFIELD:Ib})!==false){e.value=zc.Nz(this,rc);zc.Ks(this,rc);}}else{if(yb==dc.KEY_TAB||yb==dc.KEY_ENTER){var Rb=h.shiftKey()?zc.ys(this):zc.Zz(this);if(Rb==null)return;Rb.focus();}else{if(yb>=dc.KEY_0&&yb<=dc.KEY_9||yb>=dc.KEY_A&&yb<=dc.KEY_Z){var Fc=zc.uu(this,e,yb,h.shiftKey());if(!Fc)return;}else{if(h.isArrowKey()||h.isFunctionKey()||h.escapeKey()||yb==dc.KEY_BACKSPACE||yb==dc.KEY_DELETE){return;}else{}}}}h.cancelAll();};m.Zh=function(j,c){var P=c.getAttribute("jsxfield");var fc=f.gs[P];var Db=fc.sp(this);var qc=jsx3.util.numIsNaN(c.value)?jsx3.util.strEmpty(c.value)?null:c.value:Number(c.value);if(Db!==qc){if(this.doEvent(M.CHANGE,{objEVENT:j,strFIELD:P})!==false){fc.Ks(this,qc);if(qc!=null)c.value=fc.Nz(this,fc.sp(this));}else{c.value=fc.Nz(this,Db);}}else{c.value=fc.Nz(this,Db);}var Dc=this;this._jsxtm=window.setTimeout(function(){delete Dc._jsxtm;delete Dc._jsxLf;},0);};m.Jk=function(n,r){if(this._jsxtm){window.clearTimeout(this._jsxtm);delete this._jsxtm;}this._jsxLf=r.getAttribute("jsxfield");};m.Kp=function(d,i){var U=d.getWheelDelta();if(U!=0){var Y=i.getAttribute("jsxfield");var ab=f.gs[Y];var gb=U>0?"mv":"Wz";var Hc=ab[gb](this,i.value);if(this.doEvent(M.CHANGE,{objEVENT:d,strFIELD:Y})!==false){i.value=ab.Nz(this,Hc);ab.Ks(this,Hc);}d.cancelBubble();}};m.jl=function(a,g){dc.publish(a);a.cancelAll();};m.Ed=function(s,j){this.Xt(s,j,"mv");};m.Un=function(b,k){this.Xt(b,k,"Wz");};m.Xt=function(l,a,j){if(this.getEnabled()!=jsx3.gui.Form.STATEENABLED)return;var ec=this._jsxLf||"hour";var mb=this.Fi(ec);var gb=f.gs[ec];var rb=gb[j](this,mb.value);if(this.doEvent(M.CHANGE,{objEVENT:l,strFIELD:ec})!==false){mb.value=gb.Nz(this,rb);gb.Ks(this,rb);if(this._jsxLf==null)mb.focus();}};m.Fi=function(i){var Eb=this.getRendered();if(Eb!=null){var db=Eb.childNodes[0].childNodes;for(var Rb=0;Rb<db.length;Rb++){if(db[Rb].getAttribute("jsxfield")==i)return db[Rb];}}return null;};m.emSetValue=function(c){var Gc=this.emGetSession();var fb=null;if(jsx3.util.strEmpty(c)){Gc.datetype="int";}else{if(!isNaN(c)&&!isNaN(parseInt(c))){fb=new Date();fb.setTime(parseInt(c));Gc.datetype="int";}else{fb=new Date(c);if(isNaN(fb)){fb=null;}else{Gc.datetype="native";}}}Gc.olddate=fb;this.setDate(fb);};m.emGetValue=function(){var G=this.emGetSession();var tc=this.getDate();var uc=this.emGetSession().datetype||"";if(tc==null)return null;switch(uc){case "native":return tc.toString();default:return tc.getTime().toString();}};m.emFocus=function(){var u=this.getRendered();if(u){u.childNodes[0].childNodes[0].focus();}};});

!function(){if("false"!=document.getElementById("canvas_nest").getAttribute("mobile")||!/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){var e,n,t,i,o,a=document.createElement("canvas"),c=(t=b("script"),i=t.length,o=t[i-1],{l:i,z:g(o,"zIndex",-1),o:g(o,"opacity",.5),c:g(o,"color","0,0,0"),n:g(o,"count",99)}),d="c_n"+c.l,u=a.getContext("2d"),l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},m=Math.random,r={x:null,y:null,max:2e4};a.id=d,a.style.cssText="position:fixed;top:0;left:0;z-index:"+c.z+";opacity:"+c.o,b("body")[0].appendChild(a),v(),window.onresize=v,window.onmousemove=function(e){e=e||window.event,r.x=e.clientX,r.y=e.clientY},window.onmouseout=function(){r.x=null,r.y=null};for(var x=[],s=0;c.n>s;s++){var w=m()*e,y=m()*n,f=2*m()-1,h=2*m()-1;x.push({x:w,y:y,xa:f,ya:h,max:6e3})}setTimeout(function(){p()},100)}function g(e,n,t){return e.getAttribute(n)||t}function b(e){return document.getElementsByTagName(e)}function v(){e=a.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=a.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function p(){u.clearRect(0,0,e,n);var t,i,o,a,d,m,s=[r].concat(x);x.forEach(function(l){for(l.x+=l.xa,l.y+=l.ya,l.xa*=l.x>e||l.x<0?-1:1,l.ya*=l.y>n||l.y<0?-1:1,u.fillRect(l.x-.5,l.y-.5,1,1),i=0;i<s.length;i++)l!==(t=s[i])&&null!==t.x&&null!==t.y&&(a=l.x-t.x,d=l.y-t.y,(m=a*a+d*d)<t.max&&(t===r&&m>=t.max/2&&(l.x-=.03*a,l.y-=.03*d),o=(t.max-m)/t.max,u.beginPath(),u.lineWidth=o/2,u.strokeStyle="rgba("+c.c+","+(o+.2)+")",u.moveTo(l.x,l.y),u.lineTo(t.x,t.y),u.stroke()));s.splice(s.indexOf(l),1)}),l(p)}}();
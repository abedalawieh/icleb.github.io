!function(s){s.fn.superfish=function(a){var i=s.fn.superfish,n=i.c,e=s(['<span class="',n.arrowClass,'"> &#187;</span>'].join("")),o=function(){var a=s(this),i=r(a);clearTimeout(i.sfTimer),a.showSuperfishUl().siblings().hideSuperfishUl()},t=function(){var a=s(this),n=r(a),e=i.op;clearTimeout(n.sfTimer),n.sfTimer=setTimeout((function(){e.retainPath=s.inArray(a[0],e.$path)>-1,a.hideSuperfishUl(),e.$path.length&&a.parents(["li.",e.hoverClass].join("")).length<1&&o.call(e.$path)}),e.delay)},r=function(s){var a=s.parents(["ul.",n.menuClass,":first"].join(""))[0];return i.op=i.o[a.serial],a};return this.each((function(){var r=this.serial=i.o.length,h=s.extend({},i.defaults,a);h.$path=s("li."+h.pathClass,this).slice(0,h.pathLevels).each((function(){s(this).addClass([h.hoverClass,n.bcClass].join(" ")).filter("li:has(ul)").removeClass(h.pathClass)})),i.o[r]=i.op=h,s("li:has(ul)",this)[s.fn.hoverIntent&&!h.disableHI?"hoverIntent":"hover"](o,t).each((function(){h.autoArrows&&function(s){s.addClass(n.anchorClass).append(e.clone())}(s(">a:first-child",this))})).not("."+n.bcClass).hideSuperfishUl();var l=s("a",this);l.each((function(s){l.eq(s).parents("li")})),h.onInit.call(this)})).each((function(){var a=[n.menuClass];!i.op.dropShadows||s.browser.msie&&s.browser.version<7||a.push(n.shadowClass),s(this).addClass(a.join(" "))}))};var a=s.fn.superfish;a.o=[],a.op={},a.IE7fix=function(){var i=a.op;s.browser.msie&&s.browser.version>6&&i.dropShadows&&null!=i.animation.opacity&&this.toggleClass(a.c.shadowClass+"-off")},a.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"},a.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:2,delay:800,animation:{height:"show"},speed:"normal",autoArrows:!1,dropShadows:!1,disableHI:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}},s.fn.extend({hideSuperfishUl:function(){var i=a.op,n=!0===i.retainPath?i.$path:"";i.retainPath=!1;var e=s(["li.",i.hoverClass].join(""),this).add(this).not(n).removeClass(i.hoverClass).find(">ul").hide();return i.onHide.call(e),this},showSuperfishUl:function(){var s=a.op,i=(a.c.shadowClass,this.not(".accorChild").addClass(s.hoverClass).find(">ul:hidden"));return a.IE7fix.call(i),s.onBeforeShow.call(i),i.animate(s.animation,s.speed,(function(){a.IE7fix.call(i),s.onShow.call(i)})),this}})}(jQuery),$((function(){$(".sf-menu").superfish()}));
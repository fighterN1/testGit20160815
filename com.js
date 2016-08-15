//如果不存在(ie7,8,9)console
//if(!window.console){window.console=function(){};console.log=function(){}						}
function GitAdd(){
	var a="asfasf";
	};
function initConsole(){
	window.console=function(){}
    console.log=function(){}
}
initConsole();
//tab
function fnGetEleById(id) {
	return document.getElementById(id);
}

function fnGetEleByClsName(clsName) {
	return document.getElementsByClassName(clsName);
}

function fnGetEleByTagName(objCtn, tagName) {
	return objCtn.getElementsByTagName(tagName);
}
//   获取url参数

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
//tab标签
var tabs = function(tabId, callBackFun) {
		var clds = fnGetEleById(tabId);
		var tags = fnGetEleByTagName(clds, "a");
		for (var i=0;i<tags.length;i++) {
			var tmpTag = tags[i];
			if (typeof tmpTag != 'object') continue;
			addEvent(tmpTag,"click", (function(i, callBackFun) {
				return function() {
					for (var j=0;j<tags.length;j++) {
						var tmpTagJ = tags[j];
						if (typeof tmpTagJ != 'object') continue;
						if (i == j) {
							tmpTagJ.className = "RgtB-Cur";
						} else {
							tmpTagJ.className = "";
						}
					}
					//回调函数
					if (typeof callBackFun == "function") {
						callBackFun(tags[i]);
					}
				}
			})(i, callBackFun));
		}
	}
	//tabs2
	//tab标签
var tabsB = function(tabId, callBackFun) {
	var _pre = "tabCtn";
	var clds = fnGetEleById(tabId);
	var tags = fnGetEleByTagName(clds, "a");
	//var tabCtns = fnGetEleById(tabCtnId);
	for (var i = 0; i < tags.length; i++) {
		var tmpTag = tags[i];
		if (typeof tmpTag != 'object') {
			continue;
		}
		addEvent(tmpTag,"click", (function(i, callBackFun) {
			return function() {
				var _tabCtn = null,
					_tabCtnId = "";
				for (var j = 0; j < tags.length; j++) {
					var tmpTagJ = tags[j];
					if (typeof tmpTagJ != 'object') continue;

					_tabCtnId = _pre + "-" + tmpTagJ.id;
					_tabCtn = document.getElementById(_tabCtnId);
					if (i == j) {
						tmpTagJ.className = "RgtB-Cur";
						_tabCtn.style.display = "block";
					} else {
						tmpTagJ.className = "";
						_tabCtn.style.display = "none";
					}
				}
				//回调函数
				if (typeof callBackFun == "function") {
					callBackFun(tags[i], _tabCtn);
				}
			}
		})(i, callBackFun));
	}
}

//2-1行情页面交易所基金列表 
function Dis8() {
	var o = document.getElementById("Lia8");
	var cld = document.getElementById("child8");
	if (cld.style.display == "block") {
		o.className = "CM1";
		cld.style.display = "none";
	} else {
		o.className = "CM";
		cld.style.display = "block";
	}
}
//初始化导航标签
function fnNavInit() {
	var a_index = GetQueryString("A_Index");
	if (!a_index) {
		//alert("url中没有导航参数A_Index");
		return;
	}
	var obj = fnGetEleById("LftA-Nav");
	var clds = obj.getElementsByTagName("a");
	clds[a_index].className = "LftA-CurOpt";
}
/*获取属性值*/
function fnGetAttr(obj, attrName) {
	var attrs = obj.attributes;
	for (var v in attrs) {
		if (typeof attrs[v] != 'object') {
			continue;
		}
		if (attrName.toLowerCase() == attrs[v].name.toLowerCase()) {
			return attrs[v].value;
		}
	}
	return null;
}

//
function addEvent(elm, evType, fn, useCapture) {
	if (elm.addEventListener) {
		elm.addEventListener(evType, fn, useCapture);//DOM2.0
		return true;
	}
	else if (elm.attachEvent) {
		var r = elm.attachEvent('on' + evType, fn);//IE5+
		return r;
	}
	else {
		elm['on' + evType] = fn;//DOM 0
	}
}

//日期转毫秒
function c1(d) {	
	var _dt;	
	_dt=tmCon(d);	
	return (new Date(_dt)).getTime();	
}
function c2(d) {	
	var b = new Date(d);
	var _day=b.getDate(),_m=b.getMonth()+1,_y=b.getFullYear();				
	return	{y:_y,m:_m,day:_day};
}
function tmCon(d){
	var _dts,_dt,_char='/';
	_dts=d.split('-');
	_dt=_dts[1]+_char+_dts[2]+_char+_dts[0];		
	return _dt;
}
 //如果addM有参数，添加的月数
 function GetTime(addM){
    	 var d=new Date();
    	 if(addM){    	 	
    	 	d.setMonth(d.getMonth()-addM);
    	 }	    	
         var day=d.getDate();
         var y=d.getFullYear();
         var m=d.getMonth()+1;
             m=m<10?"0"+m:m;    
         var hour=d.getHours();
         var min=d.getMinutes();
         var sec=d.getSeconds();
         
         day=day<10?"0"+day:day;
         return ""+y+m+day;//+" "+hour+":"+min+":"+sec;
    } 
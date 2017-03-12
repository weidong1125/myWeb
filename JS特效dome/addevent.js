/*function addEvent(elem,eventType,func){
	try{
		if(elem!=null && typeof elem=="object"){
			if(-[1,]){
				elem.addEventListener(eventType,func);
				}else{
				elem.attachEvent("on"+eventType,func);	
					}
			}else{
				alert("对象为空或不是对象");
				}
		}catch(e){
			alert(e.message);
			}
}*/



function addEvent(elem,eventType,func){
	try{
		if(elem!=null && typeof elem=="object"){
			if(-[1,]){
				elem.addEventListener(eventType,func);
			}else{
				elem.attachEvent("on"+eventType,func);
			}
		}else{
			alert("对象为空或不是对象");
		}
	}catch(e){
		alert(e.message);
	}
}

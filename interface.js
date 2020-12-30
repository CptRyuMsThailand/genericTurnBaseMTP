function server_post(url,arrOfMsg){
	return new Promise(
		function(res,rej){
			let xhttp = new XMLHttpRequest();
			xhttp.onload = function(){
				res(xhttp.response);
			}
			xhttp.onerror = function(){
				rej(xhttp.response);
			}
			xhttp.open('POST',url,true);
			xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			let str= "";
			for(let i=0,len=arrOfMsg.length;i<len;i++){
				if(i != 0)str+="&";
				str += arrOfMsg[i].param + "=" + encodeURIComponent(arrOfMsg[i].value);

			}
			xhttp.send(str);
		}

		);
}
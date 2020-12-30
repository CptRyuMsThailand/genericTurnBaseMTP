const baseURL= "./../";
const hostphpURL = "host.php";
const updateURL = "update.php";
const refreshURL = "refresh.php";
let isHosted = false;
let roomId;
let roomPass;
let roomUsername;
let currTime = 0;
async function host_room(callback){
	let pass = host_pass.value;
	let uname = host_username.value;
	let room_name = await server_post(baseURL+hostphpURL,[{param:"pass",value:pass}]);
	//console.log(room_name);
	if(room_name){
		roomId = room_name;
		roomPass = pass;
		roomUsername = uname;
		//await update_room(roomUsername+" is joined");
		text_info.value = "Name : "+roomId+" , Pass : "+roomPass;
		isHosted = true;
		callback();
	}
}
async function update_room(data){
	let datalist = await server_post(baseURL+updateURL,[
			{param:"pass",value:roomPass},
			{param:"room",value:roomId},
			{param:"data",value:encodeURIComponent(data)}
			]);
	//if(datalist){
	//	typing.value = "";
	//}

	return datalist;
}
async function refresh_room(){
	let datalist = await server_post(baseURL+refreshURL,[
		{param:"pass",value:roomPass},
			{param:"room",value:roomId},
			{param:"time",value:currTime}
		]);
	//console.log(datalist);
	if(datalist){
		//return datalist;
		datalist = JSON.parse(datalist);
		currTime = Number(datalist[1][0]);
		//console.log(decodeURIComponent(datalist[2][0]));
		return decodeURIComponent( datalist[2][0]);
	}else{
		return false;
	}
	
	//isHosted =false;
}
async function join_room(callback){
	roomPass = join_pass.value;
	roomId = join_roomname.value;
	roomUsername = join_username.value;
	//let room_name = await server_post(baseURL+hostphpURL,[{param:"pass",value:pass}]);
	let isSuccess = await refresh_room();//(roomUsername+" is joined");
	currTime = 0;
	//console.log(isSuccess);
	//console.log(room_name);
	if(isSuccess){
		isHosted = true;
		text_info.value = "Name : "+roomId+" , Pass : "+roomPass;
	}else{
		roomPass = "";
		roomId= "";
		roomUsername="";
		
		form_join.style.display = "block";
		isHosted = false;
	}
}
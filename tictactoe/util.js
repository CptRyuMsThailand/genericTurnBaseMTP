function map(x,y,z,u,v){
	let t = (x-y)/(z-y);
	return (1-t)*u+t*v;
}
function clamp(x,y,z){
	return Math.min(Math.max(x,y),z);
}
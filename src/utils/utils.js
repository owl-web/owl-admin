
export const setToken = function(token){
	if(token === null){
		localStorage.removeItem('_token')
	}else{
		localStorage.setItem("_token" , token )
	}
}

export const getToken = function(){
	return localStorage.getItem("_token")
}
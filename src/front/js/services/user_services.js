export const login= async (formData)=>{
    try {
		const response = await fetch("https://3001-andreslongu-loginregist-420zhask8id.ws-eu89b.gitpod.io" + "/api/login", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		localStorage.setItem("jwt-token", data.token);
		return data;
	} catch (e) {
		return e;
	}
}

export const signup = async (formData) =>{
    try {
		const response = await fetch("https://3001-andreslongu-loginregist-420zhask8id.ws-eu89b.gitpod.io" + "/api/signup", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		localStorage.setItem("jwt-token", data.token);
		return data;
	} catch (e) {
		return e;
	}
}

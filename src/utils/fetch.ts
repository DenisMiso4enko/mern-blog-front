export async function httpRequest(url: string, method: string, body?: any) {
	return fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json;charset=utf-8",
			// Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(body),
	});
}
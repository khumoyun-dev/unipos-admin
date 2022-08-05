const apiUrl = process.env.REACT_APP_API_URL;

function client(
    endpoint,
    { data, token, headers: customHeaders, ...customConfig } = {}
) {
    const config = {
        method: data ? "POST" : "GET",
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            authorization: token ? `${token}` : undefined,
            "Content-Type": data ? "application/json": undefined,
            ...customHeaders,
        },
        ...customConfig,
    }

    return window 
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
        if(response.status === 401) {
            // return Promise.reject({ message: "Invalid password or phone"});
        }   

        const data = await response.json();

        if(data.message === "Error: Session is not found!") {
            window.localStorage.removeItem("token");
            window.location.reload();
            window.location = "/";
        }

        if(response.ok) {
            return data
        } else {
            return Promise.reject(data);
        }
    })
}

export {client};
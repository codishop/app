class HttpService {
    static async get(request) {
        return await fetch(request.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async response => await response.json());
    }

    static async post(request) {
        return await fetch(request.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request.body || {}),
        }).then(async response => await response.json());
    }

    static async put(request) {
        return await fetch(request.url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request.body || {}),
        }).then(async response => await response.json());
    }
}

export default HttpService;

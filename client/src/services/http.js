export default function HTTP(url) {
    if (this instanceof HTTP) {
        this.url = url;
    } else {
        return new HTTP(url);
    }
}

HTTP.prototype.fetch = function (options) {
    return fetch(this.url, options).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
};

HTTP.prototype.get = function () {
    return this.fetch().then(res => res.json());
};

HTTP.prototype.post = function (data) {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return this.fetch(options);
};

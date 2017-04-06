import superagent from 'superagent';

const superagentNetworkAdapter = (url, method, { body, headers, credentials } = {}) => {
    const request = superagent(method, url);

    if (body) {
        request.send(body);
    }

    if (headers) {
        request.set(headers);
    }

    if (credentials === 'include') {
        request.withCredentials();
    }

    const execute = (cb) => request.end((err, response) => {
        const resStatus = (response && response.status) || 0;
        const resBody = (response && response.body) || undefined;
        const resText = (response && response.text) || undefined;
        const resHeaders = (response && response.header) || undefined;

        cb(err, resStatus, resBody, resText, resHeaders);
    });

    const abort = () => request.abort();

    return {
        abort,
        execute,
        instance: request,
    };
};

export default superagentNetworkAdapter;

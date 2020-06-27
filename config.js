var data = JSON.stringify({
    query: 'query {\n sortingHat\n}',
    variables: {}
});

const config = {
    method: 'post',
    url: '###',
    headers: {
        'x-api-key': '###',
        'Content-Type': 'application/json'
    },
    data: data
};

export default config;
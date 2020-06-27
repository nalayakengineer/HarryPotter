var data = JSON.stringify({
    query: 'query {\n sortingHat\n}',
    variables: {}
});

const config = {
    method: 'post',
    url: 'https://zdj8yvo6e6.execute-api.ap-south-1.amazonaws.com/dev/graphql',
    headers: {
        'x-api-key': 'TNEQfUCydy7owQKs5NAIe6aAQjgJaOzw5fFrutCe',
        'Content-Type': 'application/json'
    },
    data: data
};

export default config;
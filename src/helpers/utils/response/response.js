const messages = (code, data, message) => {
    let error = false;
    if (code > 201) error = true;
    return { code, error, data, message };
};

module.exports = {
    messages
}
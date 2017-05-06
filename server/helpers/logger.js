module.exports = (version, type) => {
    return (message) => console[type](`[server v${version}] ${message}`);
};

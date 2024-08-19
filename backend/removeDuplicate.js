const removeDuplicate = (e) => {
    return [... new Set(e)];
}

module.exports = removeDuplicate
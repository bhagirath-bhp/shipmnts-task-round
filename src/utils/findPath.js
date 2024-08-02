export const findPaths = (data, targetName, currentPath = '', resultPaths = []) => {
    const newPath = [...currentPath, data.name];

    if (data.name === targetName) {
        resultPaths.push(newPath);
    }
    if (data.isFolder && data.items) {
        for (const item of data.items) {
            findPaths(item, targetName, newPath, resultPaths);
        }
    }

    return resultPaths;
}
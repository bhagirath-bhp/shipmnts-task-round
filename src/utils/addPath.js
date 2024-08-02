function addItem(data, targetName, newItemName, isFolder) {
    const newItem = {
        id: (Math.random() * 1000).toFixed(0),
        name: newItemName,
        isFolder: isFolder,
        items: []
    };

    if (data.name === targetName) {
        data.items.push(newItem);
        return true; 
    }
    if (data.isFolder && data.items) {
        for (const item of data.items) {
            const added = addItem(item, targetName, newItemName, isFolder);
            if (added) return true;
        }
    }

    return false; 
}
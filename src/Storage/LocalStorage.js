const getStoredExpoApp = () => {
    const storedExpoApp = localStorage.getItem('data')
    if(storedExpoApp){
        return JSON.parse(storedExpoApp)
    }
    return [];
}

const saveExpoApp = id => {
    const storedExpoApp = getStoredExpoApp();
    const exists = storedExpoApp.find(jobId => jobId === id)
    if(!exists){
        storedExpoApp.push(id);
        localStorage.setItem('data', JSON.stringify(storedExpoApp))
    }
}

//single id delete
const deleteExpoApp = id => {
    const storedExpoApp = getStoredExpoApp();
    const index = storedExpoApp.findIndex(jobId => jobId === id);
    if(index !== -1) {
        storedExpoApp.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(storedExpoApp));
    }
};

//all id delete
const deleteAllExpoApps = () => {
    localStorage.removeItem('data');
};

export {getStoredExpoApp, saveExpoApp, deleteExpoApp, deleteAllExpoApps}
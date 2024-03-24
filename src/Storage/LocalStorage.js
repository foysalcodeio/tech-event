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
export {getStoredExpoApp, saveExpoApp}
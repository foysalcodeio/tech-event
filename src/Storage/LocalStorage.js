const getStoredJobApp = () => {
    const storedJobApp = localStorage.getItem('job-app')
    if(storedJobApp){
        return JSON.parse(storedJobApp)
    }
    return [];
}
const saveJobApp = id => {
    const storedJobApp = getStoredJobApp();
    const exists = storedJobApp.find(jobId => jobId === id)
    if(!exists){
        storedJobApp.push(id);
        localStorage.setItem('job-app', JSON.stringify(storedJobApp))
    }
}
export {getStoredJobApp, saveJobApp}
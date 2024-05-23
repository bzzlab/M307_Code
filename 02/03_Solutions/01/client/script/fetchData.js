/**
 * asynchronous function for fetching daten
 * @returns {Promise<any>}
 */
const SERVER = "http://localhost:4000";

/**
 * getStudents
 * @returns {Promise<any>}
 */
async function getStudents() {//??
    const response = await fetch(SERVER+'/api/v1/students/');//??
    // waits until the request completes...
    return await response.json();//??
}//??

/**
 * getProfessions
 * @returns {Promise<any>}
 */
async function getProfessions() {//??
    const response = await fetch(SERVER+'/api/v2/general/professions');//??
    // waits until the request completes...
    return await response.json();//??
}//??

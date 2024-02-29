/**
 * asynchronous function for fetching data
 * @returns {Promise<any>}
 */
async function fetchLernenderJSON() {//??
    const response = await fetch('./data/lernender.json');//??
    // waits until the request completes...
    const data = await response.json();//??
    return data;//??
}//??

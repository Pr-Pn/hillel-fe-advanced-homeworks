export async function getData(fullUrl) {
    let response = await  fetch(fullUrl, { method: 'GET'});
    try {
        if (response.status === 404) {
            throw new Error("Not found");
        }
        return {
            status: 'success',
            data: await response.json()
        }
    } catch (err) {
        console.error(err);
        return {
            status: 'error',
            data: err
        }
    }
}
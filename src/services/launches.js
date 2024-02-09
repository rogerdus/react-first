const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches() {
    try {
        const respons = await fetch(`${API_URL}/launches`);
        const data = await respons.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getLaunchByFlightNnumber(flightNumber) {
    try {
        const respons = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = await respons.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
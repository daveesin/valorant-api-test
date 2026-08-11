const BASE_URL = 'https://valorant-api.com/v1';

export async function getAgents() {

    const response = await fetch(`${BASE_URL}/agents?isPlayableCharacter=true&language=en-US`);
    if(!response.ok) {
        throw new Error('Fail searching Valorant-API agents.');
    }

    const data = await response.json();
    return data.data;
}

export async function getMaps() {

    const response = await fetch(`${BASE_URL}/maps`);
    if(!response.ok) {
        throw new Error('Fail loading Valorant-API maps.');
    }

    const data = await response.json();
    return data.data;
}
const BASE_URL = 'https://valorant-api.com/';

export async function getAgents() {

    const response = await fetch(`${BASE_URL}/agents?isPlayableCharacter=true&language=pt-BR`);

    if(!response.ok) {
        throw new Error('Fail searching Valorant-API agents.');
    }

    const data = await response.json();
    return data.data;
}
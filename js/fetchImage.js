let cachedIds = [];

async function loadIds() {

    if (cachedIds.length) return cachedIds;

    const response = await fetch("https://picsum.photos/v2/list?limit=100");
    if (!response.ok) throw new Error("Failed to fetch Picsum ID list");
    const data = await response.json();

    cachedIds = data.map(item => item.id);
    return cachedIds;

}

export async function fetchImage() {
    
    const ids = await loadIds();
    const id = ids[Math.floor(Math.random() * ids.length)];
    return `https://picsum.photos/id/${id}/300/300`;

}

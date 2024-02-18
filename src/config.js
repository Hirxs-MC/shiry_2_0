require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "933016957014388756", 
    prefix: process.env.PREFIX || "sh!", 
    ownerID: process.env.OWNER_ID ||
        ['471096897411743744'],
    SpotifyID: process.env.SPOTIFY_ID || "bebe9f84663549348f8efd5b14244221",
    SpotifySecret: process.env.SPOTIFY_SECRET || "d87022098a1b4d118b06c9e4774d7b53",
    mongourl: process.env.MONGO_URL || "mongodb+srv://CodeXDev:CodeXDev007@codex-public-02.b6wvq1f.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0x303236,
    logs: process.env.LOGS || " 1155159957164019815",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1155159957164019815",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://cdn.discordapp.com/avatars/914785889329233931/1b846472282be578a197531cbac2f0e2.png?size=2048', 
        support: process.env.SUPPORT || 'https://dsc.gg/delux-tunes',
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1078594260506513408&permissions=8&scope=bot%20applications.commands' 
    },
    nodes: [{host: process.env.NODE_HOST || "lavalink.lexnet.cc",port: parseInt(process.env.NODE_PORT || "443"),password: process.env.NODE_PASSWORD ||"lexn3tl@val!nk",secure: parseBoolean(process.env.NODE_SECURE || "true"),}],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}

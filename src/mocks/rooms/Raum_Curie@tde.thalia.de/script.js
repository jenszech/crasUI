const now = new Date();


module.exports = {
    "roomName": "Marie Curie",
    "appointments": [
        {
            "startTime": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15,0,0,0).toISOString(),
            "endTime": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21,0,0,0).toISOString(),
            "displayTime": "14:00 bis 21:00",
            "title": "Frei",
            "blocked": false,
            "isCurrent": true
        }
    ]
};
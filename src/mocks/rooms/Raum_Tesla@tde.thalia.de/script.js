const now = new Date();

module.exports = {
  roomName: 'Nicola Tesla',
  appointments: [
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 0, 0, 0).toISOString(),
      displayTime: '13:00 bis 22:00',
      user: 'Ernst, Franz',
      title: 'Scrum Blocker',
      blocked: true,
      isCurrent: false,
    },
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 0, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0).toISOString(),
      displayTime: '22:00 bis 23:00',
      title: 'Frei',
      blocked: false,
      isCurrent: true,
    },
  ],
};

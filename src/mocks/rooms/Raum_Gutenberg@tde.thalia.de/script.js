const now = new Date();

module.exports = {
  roomName: 'Johannes Gutenberg',
  appointments: [
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0).toISOString(),
      displayTime: '8:00 bis 9:00',
      title: 'Frei',
      blocked: false,
      isCurrent: false,
    },
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30, 0, 0).toISOString(),
      displayTime: '9:00 bis 10:30',
      user: 'Mustermann, Eva',
      title: 'Vorstellungsgespräch',
      blocked: true,
      isCurrent: true,
    },
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0).toISOString(),
      displayTime: '10:30 bis 11:00',
      user: 'Müller, Hans',
      title: 'Featrue Planung für CRAS UI',
      blocked: true,
      isCurrent: false,
    },
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0, 0, 0).toISOString(),
      displayTime: '10:00 bis 12:00',
      title: 'Frei',
      blocked: false,
      isCurrent: false,
    },
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0, 0).toISOString(),
      displayTime: '12:00 bis 12:30',
      user: 'Ernst, Franz',
      title: 'Feierabend Bier',
      blocked: true,
      isCurrent: false,
    },
    {
      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30, 0, 0).toISOString(),
      endTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0, 0).toISOString(),
      displayTime: '12:30 bis 19:00',
      title: 'Frei',
      blocked: false,
      isCurrent: false,
    },
  ],
};

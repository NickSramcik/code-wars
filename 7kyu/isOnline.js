// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

// Pass in an array of objects (users)
// Return an object w/ 3 status arrays (online, offline, away)

// Let online, offline, and away be empty arrays
// Let result be an empty object
// Loop througn input users array
//      Push each user's name to corresponding status array
//      away users are online but lastActivity > 10
// Return {online, offline, away} (only include properties with length) 

const whosOnlineOld = friends => {
    const [online, offline, away] = [[], [], []]
    const result = {};

    for (let friend of friends) {
        if (friend.status == 'online' && friend.lastActivity <= 10) online.push(friend.username);
        if (friend.status == 'online' && friend.lastActivity > 10) away.push(friend.username);
        if (friend.status == 'offline') offline.push(friend.username);
    }

    if (online.length) result.online = online;
    if (offline.length) result.offline = offline;
    if (away.length) result.away = away;

    return result;
}

// Refactored to be less hardcoded

const whosOnline = friends => {
    const result = {};

    for (let friend of friends) {
        const status = friend.status == 'online' && friend.lastActivity > 10 ? 'away' : friend.status;
        result[status] = result[status] || [];
        result[status].push(friend.username);
    }

    return result;
}

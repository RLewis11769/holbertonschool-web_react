import { normalize, schema } from 'normalizr';
import notifications from '../../../../notifications.json';

// Define schemas
const user = new schema.Entity('users');

// No message definition but set idAttribute in options (default id)
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

// Define notification entity with key notifications
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize notifications data by notification schema defined above
// Returns normalized data when passed data and schema list
const normalizedData = normalize(notifications, [notification]);

function getAllNotificationsByUser(userId) {
  // Return normalized context of notification
  const notifs = normalizedData.entities.notifications;
  const msgs = normalizedData.entities.messages;
  const results = [];
  // Convert to array
  Object.keys(notifs)
    // If id of notification at author is equal to userId
    .filter((id) => notifs[id].author === userId)
    // Push context of notification to results array - I hate this, it is not easier
    .map((id) => results.push(msgs[notifs[id].context]));
  return results;

  // // for-in loop syntax not liked by eslint
  // for (const id in notifs) {
  //   if (notifs[id].author === userId) {
  //     results.push(msgs[notifs[id].context]);
  //   }
  // }
  // return results;
}

const notificationsNormalizer = (data) => {
  // Return normalized data according to notification schema
  const normalized = normalize(data, [notification]);
  // Return normalized data at key "entities"
  return normalized.entities;
};

export { normalizedData, getAllNotificationsByUser, notificationsNormalizer };

import { normalize, schema } from 'normalizr';
import notifications from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  // Return context object of notifications when author id matches user id
  return notifications
    // Filters notifications by user id
    .filter((notification) => notification.author.id === userId)
    // Only returns context object
    .map((notification) => notification.context);
}

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
export const normalizedData = normalize(notifications, [notification]);

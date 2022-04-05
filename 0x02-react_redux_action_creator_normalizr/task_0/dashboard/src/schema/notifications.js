import notifications from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  // Return context object of notifications when author id matches user id
  return notifications
    // Filters notifications by user id
    .filter((notification) => notification.author.id === userId)
    // Only returns context object
    .map((notification) => notification.context);
}

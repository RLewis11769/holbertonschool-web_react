import { Map, getIn } from 'immutable';

// imo state.get('filter') would be better than state.filter but not a function?
const filterTypeSelected = (state) => state.filter;

const getNotifications = (state) => getIn(Map(state), ['notifications']);

const getUnreadNotifications = (state) => {
  const notifications = getNotifications(state);
  return notifications.filter((notif) => notif.isRead === false);
};

export { filterTypeSelected, getNotifications, getUnreadNotifications };

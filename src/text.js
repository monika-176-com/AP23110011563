import { getTopNotifications } from "./services/notifications";

(async () => {
  const result = await getTopNotifications();
  console.log("Top 10 Notifications:", result);
})();
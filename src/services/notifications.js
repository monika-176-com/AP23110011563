import { getToken } from "./auth";
import { Log } from "../utils/logger";

const BASE_URL = "http://20.207.122.201/evaluation-service/notifications";

export async function fetchNotifications(page = 1, limit = 10, type = "") {
  try {
    Log("frontend", "info", "api", "Fetching notifications with filters");

    const token = getToken();

    let url = `${BASE_URL}?page=${page}&limit=${limit}`;
    if (type) {
      url += `&notification_type=${type}`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Fetch failed");

    const data = await res.json();

    Log("frontend", "info", "api", "Notifications fetched");

    return data.notifications;

  } catch (err) {
    Log("frontend", "error", "api", "Error fetching notifications");
    console.error(err);
  }
}
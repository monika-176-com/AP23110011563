import { getToken } from "../services/auth";

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

export async function Log(stack, level, pkg, message) {
  try {
    const token = getToken();

    console.log("LOGGER TOKEN:", `Bearer ${token}`); 

    const res = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify({
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message: message,
      }),
    });

    console.log("LOG STATUS:", res.status);

    if (!res.ok) {
      const text = await res.text();
      console.error("Log failed response:", text);
      return;
    }

    const data = await res.json();
    console.log(" Log success:", data);

  } catch (err) {
    console.error("Log error:", err.message);
  }
}
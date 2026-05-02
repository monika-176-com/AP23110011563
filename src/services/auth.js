const AUTH_URL = "http://20.207.122.201/evaluation-service/auth";

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtb25pa2FfakBzcm1hcC5lZHUuaW4iLCJleHAiOjE3Nzc3MDQ3MzgsImlhdCI6MTc3NzcwMzgzOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjBjZjg3ZjdkLTk4YzItNDdjOC1iMjNhLTE5MDk3YTcyZmZhNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImphbGxhIG1vbmlrYSIsInN1YiI6IjAyYWQ3ZTg5LTRmMDUtNDI4Yi1iOGFiLTIyZmUyMWFiZTFkNyJ9LCJlbWFpbCI6Im1vbmlrYV9qQHNybWFwLmVkdS5pbiIsIm5hbWUiOiJqYWxsYSBtb25pa2EiLCJyb2xsTm8iOiJhcDIzMTEwMDExNTYzIiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiMDJhZDdlODktNGYwNS00MjhiLWI4YWItMjJmZTIxYWJlMWQ3IiwiY2xpZW50U2VjcmV0IjoiUnJ5RnBCREpGcVh0bmhudiJ9.t0S7bt4QQy4NI3FWAqM6xMqqwNUsKTYPuho6535ibVU";

export async function generateToken() {
  try {
    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: "02ad7e89-4f05-428b-b8ab-22fe21abe1d7",
        clientSecret: "RryFpBDJFqXtnhnv",
      }),
    });

    const data = await res.json();
    accessToken = data.access_token;

    return accessToken;
  } catch (err) {
    console.error("Auth error:", err);
  }
}

export function getToken() {
  return accessToken;
}
import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/notifications";
import NotificationList from "../components/NotificationList";
import FilterBar from "../components/FilterBar";
import { Button } from "@mui/material";

export default function Home() {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, [type, page]);

  async function loadData() {
    const res = await fetchNotifications(page, 10, type);
    setData(res || []);
  }

  return (
    <div>
      <h2>Notifications</h2>

      <FilterBar setType={setType} />

      <NotificationList data={data} />

      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </div>
  );
}
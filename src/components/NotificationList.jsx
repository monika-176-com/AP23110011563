import NotificationCard from "./NotificationCard";

export default function NotificationList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <NotificationCard key={item.ID} item={item} />
      ))}
    </div>
  );
}
import { Button } from "@mui/material";

export default function FilterBar({ setType }) {
  return (
    <div>
      <Button onClick={() => setType("")}>All</Button>
      <Button onClick={() => setType("Event")}>Event</Button>
      <Button onClick={() => setType("Result")}>Result</Button>
      <Button onClick={() => setType("Placement")}>Placement</Button>
    </div>
  );
}
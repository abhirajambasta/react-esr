import * as React from "react";
export default function Loader({ active = true }) {
  return (
    <div
      role="progressbar"
      aria-busy={active ? "true" : "false"}
    >
      Wait!! Keep calm & let it stream. It will some day load resolve to correct component
    </div>
  );
}

import type { Metadata } from "next";
import { DownloadRedirect } from "./redirect";

export const metadata: Metadata = {
  title: "Scarica l’app",
  description: "Scarica MeetPuglia per iPhone o Android.",
};

export default function DownloadPage() {
  return <DownloadRedirect />;
}

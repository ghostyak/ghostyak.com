import { permanentRedirect } from "next/navigation";

export default function LegacyBoxesPage() {
  permanentRedirect("/product/boxes");
}

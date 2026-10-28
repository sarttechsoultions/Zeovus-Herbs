import { PolicyPage } from "@/components/PolicyPage";
import policy from "@/content/legal-policy.json";

export const metadata = { title: "Terms of Use | Zeovus Herbs", description: "Terms of Use and accessibility information for the Zeovus Ventures Private Limited website." };
export default function TermsOfUsePage() { return <PolicyPage policy={policy} />; }

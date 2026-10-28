import { PolicyPage } from "@/components/PolicyPage";
import policy from "@/content/privacy-policy.json";

export const metadata = { title: "Privacy Policy | Zeovus Herbs", description: "Read how Zeovus Ventures Private Limited collects, uses and protects personal data." };
export default function PrivacyPolicyPage() { return <PolicyPage policy={policy} />; }

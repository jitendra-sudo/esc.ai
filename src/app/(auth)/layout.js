import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import Header from "@/components/organisms/header";

export default function HomeLayout({ children }) {
    return (
        <div>
            {/* <Header /> */}
            <PageShell>
                {children}
            </PageShell>
        </div>
    );
}

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Loading from "@/components/shared/Loading";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
      <ClerkLoaded>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </ClerkLoaded>
    </div>
  );
}

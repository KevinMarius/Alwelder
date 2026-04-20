import Contact from "@/components/Home/Contact";
import Counter from "@/components/Home/Counter";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Portfolio from "@/components/SharedComponent/portfollio";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <Layout>
        <Hero />
        <Services />
        <Counter isColorMode={true} />
        <Portfolio />
        <Contact />
        <ScrollToTop />
      </Layout>
    </ThemeProvider>
  );
}

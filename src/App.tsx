import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Temples from "./pages/Temples";
import Linghams from "./pages/Linghams";
import Girivalam from "./pages/Girivalam";
import Festivals from "./pages/Festivals";
import StayFood from "./pages/StayFood";
import SpiritualTourism from "./pages/SpiritualTourism";
import GettingThere from "./pages/GettingThere";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import View360 from "./pages/360View";
import HistoryCulture from "./pages/HistoryCulture";
import LanguageSelection from "./pages/LanguageSelection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<LanguageSelection />} />
      <Route path="/index" element={<Index />} />
      <Route path="/temples" element={<Temples />} />
      <Route path="/linghams" element={<Linghams />} />
      <Route path="/girivalam" element={<Girivalam />} />
      <Route path="/festivals" element={<Festivals />} />
      <Route path="/stay-food" element={<StayFood />} />
      <Route path="/spiritual-tourism" element={<SpiritualTourism />} />
      <Route path="/getting-there" element={<GettingThere />} />
      <Route path="/history-culture" element={<HistoryCulture />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/360View" element={<View360 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Toaster />
    <Sonner />
  </QueryClientProvider>
);

export default App;

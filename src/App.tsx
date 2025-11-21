
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ChatBot from "./components/ChatBot";
import Index from "./pages/Index";
import FOXMetoD from "./pages/FOXMetoD";
import Contact from "./pages/Contact";
import Services from "./pages/ServicesNew";
import Cases from "./pages/CasesNew";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import BlogEditor from "./pages/BlogEditor";
import ClientsAdmin from "./pages/ClientsAdmin";
import CertificatesAdmin from "./pages/CertificatesAdmin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/foxmetod" element={<FOXMetoD />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/new" element={<BlogEditor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/clients" element={<ClientsAdmin />} />
          <Route path="/admin/certificates" element={<CertificatesAdmin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
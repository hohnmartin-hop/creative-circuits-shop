import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Zaklady from "./pages/Zaklady";
import Soucastky from "./pages/zaklady/Soucastky";
import Principy from "./pages/zaklady/Principy";
import Schema from "./pages/zaklady/Schema";
import Projekty from "./pages/zaklady/Projekty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/creative-circuits-shop">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/zaklady" element={<Zaklady />} />
          <Route path="/zaklady/soucastky" element={<Soucastky />} />
          <Route path="/zaklady/principy" element={<Principy />} />
          <Route path="/zaklady/schema" element={<Schema />} />
          <Route path="/zaklady/projekty" element={<Projekty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Zaklady from "./pages/Zaklady.tsx";
import Soucastky from "./pages/zaklady/Soucastky.tsx";
import Principy from "./pages/zaklady/Principy.tsx";
import Schema from "./pages/zaklady/Schema.tsx";
import Projekty from "./pages/zaklady/Projekty.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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

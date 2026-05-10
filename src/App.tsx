import { Routes, Route } from "react-router";
import Landing from "@/pages/Landing";
import BlogArticlePage from "@/pages/BlogArticlePage";
import MentionsLegales from "@/pages/MentionsLegales";
import PolitiqueConfidentialite from "@/pages/PolitiqueConfidentialite";
import ContactPage from "@/pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog/:slug" element={<BlogArticlePage />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route
        path="/politique-confidentialite"
        element={<PolitiqueConfidentialite />}
      />
    </Routes>
  );
}

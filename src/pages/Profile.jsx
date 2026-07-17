import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { leadership } from "@/data/servicesData";

// Imported Modularized Sections
import  ProfileSidebar from "../components/pages/profile/ProfileSidebar";
import ProfileDetails from "../components/pages/profile/ProfileDetails";
import ProfileCta from "../components/pages/profile/ProfileCta";
import OtherMembers from "../components/pages/profile/OtherMembers";

function slugify(name) {
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
}

export default function Profile() { 
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the selected team member
  const person = location.state?.person || leadership.find((p) => slugify(p.name) === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!person) {
    return (
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-24 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <p className="text-muted-foreground">We couldn't find that profile.</p>
          <Button variant="outline" className="mt-6" onClick={() => navigate("/about")}>
            <ArrowLeft size={16} className="mr-1.5" /> Back to Team
          </Button>
        </motion.div>
      </section>
    );
  }

  const otherMembers = leadership.filter((p) => p.name !== person.name).slice(0, 3);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="relative overflow-hidden">
        {/* Background gradient graphics */}
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
          animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-12 py-16">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Button variant="outline" size="sm" onClick={() => navigate("/about")} className="mb-6 gap-1.5 font-semibold cursor-pointer">
              <ArrowLeft size={15} /> Back to Team
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 items-start">
            {/* Left Card: Sidebar */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <ProfileSidebar person={person} />
            </motion.div>

            {/* Right Card: Tabs & details */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
              <ProfileDetails person={person} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Banner Panel */}
      <ProfileCta person={person} />

      {/* Other Team Members Carousel / Grid */}
      <OtherMembers otherMembers={otherMembers} />
    </div>
  );
}
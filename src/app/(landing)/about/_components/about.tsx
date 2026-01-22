"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Linkedin, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link"; // 👈 Imported next/link

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen px-4 py-20 md:px-8">
      {/* --- HERO SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-20 max-w-4xl text-center"
      >
        <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Meet the <span className="text-primary">Leadership</span>
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed">
          United by the Erasmus Mundus{" "}
          <span className="text-primary font-semibold">SUSTAGRI</span> program,
          we bridge the gap between Indian agronomy and Philippine engineering
          to build the future of smart farming.
        </p>
      </motion.div>

      {/* --- PROFILES GRID --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
      >
        {/* --- PROFILE 1: DIKSHA MISHRA (CEO) --- */}
        <motion.div variants={itemVariants} className="h-full">
          <Card className="border-t-primary bg-card h-full border-t-4 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="flex flex-col items-center pb-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary/10 mb-4 rounded-full p-1"
              >
                <Avatar className="border-background h-40 w-40 border-4">
                  <AvatarImage
                    src="/images/about/diksha-profile.png"
                    alt="Diksha Mishra"
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    DM
                  </AvatarFallback>
                </Avatar>
              </motion.div>

              <div className="flex flex-col items-center gap-1">
                <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 mb-2 px-4 py-1 text-sm">
                  Chief Executive Officer
                </Badge>
                <CardTitle className="text-card-foreground text-2xl font-bold">
                  Diksha Mishra
                </CardTitle>
              </div>

              <CardDescription className="text-muted-foreground mt-2 flex flex-col items-center gap-1 text-center font-medium">
                <span className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" /> Agricultural Engineer
                </span>
                <span className="text-xs tracking-wider uppercase opacity-70">
                  University of Szeged, Hungary
                </span>
                <span className="text-xs tracking-wider uppercase italic opacity-70">
                  A SUSTAGRI Master&apos;s Student
                </span>
              </CardDescription>

              <div className="mt-4 flex gap-2">
                <Badge variant="secondary" className="hover:bg-primary/20">
                  Precision Ag
                </Badge>
                <Badge variant="secondary" className="hover:bg-primary/20">
                  Strategy
                </Badge>
              </div>
            </CardHeader>

            <Separator className="bg-border my-2" />

            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Diksha, from India, is a passionate innovator building
                <span className="text-primary font-semibold">
                  {" "}
                  data-driven precision agriculture systems{" "}
                </span>
                with IoT and remote sensing. Her mission: transform farming in
                India and globally into an advanced, profitable career by
                empowering farmers to match developed economies&apos;
                productivity.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="#"
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full p-2 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* --- PROFILE 2: HASHIM MONIR AMBIA (CTO) --- */}
        <motion.div variants={itemVariants} className="h-full">
          <Card className="border-t-primary bg-card h-full border-t-4 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="flex flex-col items-center pb-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary/10 mb-4 rounded-full p-1"
              >
                <Avatar className="border-background h-40 w-40 border-4">
                  <AvatarImage
                    src="/images/about/monir-profile.png"
                    alt="Hashim Monir Ambia"
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    HM
                  </AvatarFallback>
                </Avatar>
              </motion.div>

              <div className="flex flex-col items-center gap-1">
                <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 mb-2 px-4 py-1 text-sm">
                  Chief Technology Officer
                </Badge>
                <CardTitle className="text-card-foreground text-2xl font-bold">
                  Hashim Monir Ambia
                </CardTitle>
              </div>

              <CardDescription className="text-muted-foreground mt-2 flex flex-col items-center gap-1 text-center font-medium">
                <span className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" /> Electronics Engineer
                </span>
                <span className="text-xs tracking-wider uppercase opacity-70">
                  Mindanao State University, Philippines
                </span>
                <span className="text-xs tracking-wider uppercase italic opacity-70">
                  A SUSTAGRI Master&apos;s Student
                </span>
              </CardDescription>

              <div className="mt-4 flex gap-2">
                <Badge variant="secondary" className="hover:bg-primary/20">
                  IoT Systems
                </Badge>
                <Badge variant="secondary" className="hover:bg-primary/20">
                  Cloud Arch
                </Badge>
              </div>
            </CardHeader>

            <Separator className="bg-border my-2" />

            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Hailing from the Philippines, Monir is the systems architect of
                KrishiVeda. With a deep background in electronics, his passion
                lies in
                <span className="text-primary font-semibold">
                  {" "}
                  weaving together complex systems
                </span>
                . He integrates raw hardware sensors with sophisticated cloud
                logic, creating the seamless digital fabric that allows our
                technology to &quot;speak&quot; directly to the soil.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="#"
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full p-2 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* --- FOOTER / JOINT STATEMENT --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={itemVariants}
        className="mx-auto mt-20 max-w-3xl pb-20 text-center"
      >
        <div className="bg-muted/50 border-border rounded-2xl border p-6">
          <h3 className="text-foreground mb-2 text-lg font-semibold">
            The SUSTAGRI Synergy
          </h3>
          <p className="text-muted-foreground text-sm">
            Brought together by the prestigious{" "}
            <span className="text-foreground font-bold">Erasmus Mundus</span>{" "}
            program, Diksha and Hashim combine the precision of European
            research standards with the practical, rugged needs of Asian
            agriculture.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;

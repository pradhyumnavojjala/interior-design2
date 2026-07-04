"use client";

import { useRouter } from "next/navigation";
import { useConsultation } from "@/context/ConsultationContext";

import {
  projectTypes,
  services,
  propertyStatus,
  budgetOptions,
  propertySizes,
  timelineOptions,
} from "@/lib/consultation/data";

import ProgressBar from "@/components/consultation/ProgressBar";
import SectionTitle from "@/components/consultation/SectionTitle";
import ProjectCard from "@/components/consultation/ProjectCard";
import ServiceCard from "@/components/consultation/ServiceCard";
import RadioCard from "@/components/consultation/RadioCard";
import ContinueButton from "@/components/consultation/ContinueButton";

export default function ConsultationPage() {
  const router = useRouter();

  const { data, loading, updateSection } = useConsultation();

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center text-white text-xs uppercase tracking-widest font-light">
        Initializing Project Configuration Blueprint...
      </main>
    );
  }

  function toggleService(service: string) {
    const exists = data.project.services.includes(service);

    if (exists) {
      updateSection("project", {
        services: data.project.services.filter(
          (item) => item !== service
        ),
      });
    } else {
      updateSection("project", {
        services: [...data.project.services, service],
      });
    }
  }

  function handleContinue() {

    if (!data.customer.firstName) {
  alert("Please enter your first name.");
  return;
}

if (!data.customer.lastName) {
  alert("Please enter your last name.");
  return;
}

if (!data.customer.email) {
  alert("Please enter your email.");
  return;
}

if (!data.customer.phone) {
  alert("Please enter your phone number.");
  return;
}
    
    if (!data.project.projectType) {
      alert("Please select a project type.");
      return;
    }

    if (data.project.services.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    if (!data.project.propertyStatus) {
      alert("Please select property status.");
      return;
    }

    if (!data.project.budget) {
      alert("Please select budget.");
      return;
    }

    if (!data.project.propertySize) {
      alert("Please select property size.");
      return;
    }

    if (!data.project.timeline) {
      alert("Please select timeline.");
      return;
    }

    router.push("/consultation/property");
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-2 sm:px-6 lg:px-12 py-4 sm:py-12 lg:py-16 selection:bg-amber-400/20 selection:text-amber-300 relative overflow-hidden">
  
  {/* Atmospheric backgrounds scaled down for mobile */}
  <div className="absolute top-[5%] left-[-10%] z-0 h-48 w-48 sm:h-140 sm:w-140 bg-radial from-amber-500/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
  <div className="absolute bottom-[10%] right-[-10%] z-0 h-56 w-56 sm:h-160 sm:w-160 bg-radial from-amber-400/[0.01] via-transparent to-transparent blur-3xl pointer-events-none" />

  <div className="mx-auto max-w-5xl relative z-10 space-y-4 sm:space-y-12">

    {/* PROGRESS STEPPER CARD */}
    <div className="bg-zinc-900/10 rounded-xl sm:rounded-2xl border border-white/5 p-3 sm:p-6 backdrop-blur-md">
      <ProgressBar
        step={1}
        totalSteps={5}
        title="Project Details"
      />
    </div>

    {/* MAIN BOARD */}
    <div className="rounded-xl sm:rounded-[32px] border border-white/5 bg-linear-to-b from-zinc-900/40 to-zinc-900/5 p-3 sm:p-8 lg:p-12 backdrop-blur-2xl shadow-2xl space-y-6 sm:space-y-16 relative">
      
      <div className="absolute top-0 left-4 right-4 sm:left-12 sm:right-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="border-b border-white/5 pb-4 sm:pb-8">
        <SectionTitle
          title="Start Your Dream Space"
          subtitle="Tell us more about your project."
        />
      </div>

      <div className="space-y-6 sm:space-y-12 lg:space-y-16">

        {/* CUSTOMER INFORMATION SECTION */}
        <section className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-8 items-start group">
          <div className="md:col-span-4 md:sticky md:top-8">
            <SectionTitle title="Customer Information" />
          </div>

          <div className="w-full md:col-span-8 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
            {/* 2x2 Grid: Everything side-by-side */}
            <div className="grid gap-2 sm:gap-4 grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                value={data.customer.firstName}
                onChange={(e) => updateSection("customer", { firstName: e.target.value })}
                className="w-full rounded-lg sm:rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base text-white placeholder:text-zinc-500 outline-hidden focus:border-amber-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={data.customer.lastName}
                onChange={(e) => updateSection("customer", { lastName: e.target.value })}
                className="w-full rounded-lg sm:rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base text-white placeholder:text-zinc-500 outline-hidden focus:border-amber-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={data.customer.email}
                onChange={(e) => updateSection("customer", { email: e.target.value })}
                className="w-full rounded-lg sm:rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base text-white placeholder:text-zinc-500 outline-hidden focus:border-amber-400 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={data.customer.phone}
                onChange={(e) => updateSection("customer", { phone: e.target.value })}
                className="w-full rounded-lg sm:rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-base text-white placeholder:text-zinc-500 outline-hidden focus:border-amber-400 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* PROJECT TYPE SECTION */}
<section className="flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:gap-8 items-start group">
  <div className="lg:col-span-4 lg:sticky lg:top-8">
    <SectionTitle title="Project Type" />
  </div>

  {/* Removed restrictive horizontal padding on mobile so content can cleanly scroll to screen edge */}
  <div className="w-full lg:col-span-8 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
    {/* Mobile: Horizontal scroll container with native snap alignment | Desktop: Grid layout */}
    <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible gap-3 sm:grid-cols-2 snap-x snap-mandatory scrollbar-none pb-1 sm:pb-0">
      {projectTypes.map((item) => (
        <div key={item.title} className="w-[72%] min-w-[220px] sm:w-full snap-start shrink-0">
          <ProjectCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            selected={data.project.projectType === item.title}
            onClick={() => updateSection("project", { projectType: item.title })}
          />
        </div>
      ))}
    </div>
  </div>
</section>

{/* SERVICES REQUIRED SECTION */}
<section className="flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:gap-8 items-start group">
  <div className="lg:col-span-4 lg:sticky lg:top-8">
    <SectionTitle title="Services Required" />
  </div>

  <div className="w-full lg:col-span-8 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
    {/* Mobile: Horizontal scroll container with native snap alignment | Desktop: Grid layout */}
    <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible gap-3 sm:grid-cols-2 snap-x snap-mandatory scrollbar-none pb-1 sm:pb-0">
      {services.map((item) => (
        <div key={item.title} className="w-[72%] min-w-[220px] sm:w-full snap-start shrink-0">
          <ServiceCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            selected={data.project.services.includes(item.title)}
            onClick={() => toggleService(item.title)}
          />
        </div>
      ))}
    </div>
  </div>
</section>

        {/* PROPERTY STATUS SECTION */}
        <section className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-8 items-start group">
          <div className="md:col-span-4 md:sticky md:top-8">
            <SectionTitle title="Property Status" />
          </div>

          <div className="w-full md:col-span-8 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
              {propertyStatus.map((item) => (
                <RadioCard
                  key={item}
                  title={item}
                  selected={data.project.propertyStatus === item}
                  onClick={() => updateSection("project", { propertyStatus: item })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ESTIMATED BUDGET SECTION */}
        <section className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-8 items-start group">
          <div className="md:col-span-4 md:sticky md:top-8">
            <SectionTitle title="Estimated Budget" />
          </div>

          <div className="w-full md:col-span-8 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
            <div className="grid gap-2 grid-cols-3">
              {budgetOptions.map((item) => (
                <RadioCard
                  key={item}
                  title={item}
                  selected={data.project.budget === item}
                  onClick={() => updateSection("project", { budget: item })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTY SIZE SECTION */}
        <section className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-8 items-start group">
          <div className="md:col-span-4 md:sticky md:top-8">
            <SectionTitle title="Approximate Property Size" />
          </div>

          <div className="w-full md:col-span-8 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
            <div className="grid gap-2 grid-cols-3">
              {propertySizes.map((item) => (
                <RadioCard
                  key={item}
                  title={item}
                  selected={data.project.propertySize === item}
                  onClick={() => updateSection("project", { propertySize: item })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT TIMELINE SECTION */}
        <section className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-8 items-start group">
          <div className="md:col-span-4 md:sticky md:top-8">
            <SectionTitle title="Project Timeline" />
          </div>

          <div className="w-full md:col-span-8 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
            <div className="grid gap-2 grid-cols-3">
              {timelineOptions.map((item) => (
                <RadioCard
                  key={item}
                  title={item}
                  selected={data.project.timeline === item}
                  onClick={() => updateSection("project", { timeline: item })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LOWER DISPATCH PANEL */}
        <div className="pt-4 sm:pt-8 border-t border-white/5 flex justify-end">
          <div className="w-full md:max-w-xs">
            <ContinueButton onClick={handleContinue} />
          </div>
        </div>

      </div>
    </div>
  </div>
</main>
  );
}
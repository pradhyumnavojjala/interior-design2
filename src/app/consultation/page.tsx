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
    <main className="min-h-screen bg-zinc-950 px-4 sm:px-8 lg:px-16 py-16 selection:bg-amber-400/20 selection:text-amber-300 relative overflow-hidden">
      
      {/* Studio lighting atmospheric gradients matching downstream flow */}
      <div className="absolute top-[10%] left-[-10%] z-0 h-140 w-140 bg-radial from-amber-500/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] z-0 h-160 w-160 bg-radial from-amber-400/[0.01] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10 space-y-12">

        {/* PROGRESS STEPPER CARD */}
        <div className="bg-zinc-900/10 rounded-2xl border border-white/5 p-6 backdrop-blur-md">
          <ProgressBar
            step={1}
            totalSteps={5}
            title="Project Details"
          />
        </div>

        {/* WORKSPACE SELECTION BOARD */}
        <div className="rounded-[32px] border border-white/5 bg-linear-to-b from-zinc-900/40 to-zinc-900/5 p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-2xl space-y-16 relative">
          
          {/* Subtle micro-glow border alignment accent */}
          <div className="absolute top-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="border-b border-white/5 pb-8">
            <SectionTitle
              title="Start Your Dream Space"
              subtitle="Tell us more about your project."
            />
          </div>

          <div className="space-y-20">

            {/* CUSTOMER INFORMATION SECTION */}
<section className="grid gap-8 lg:grid-cols-12 items-start group">

  <div className="lg:col-span-4 lg:sticky lg:top-8">
    <SectionTitle title="Customer Information" />
    <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
      Tell us how we can reach you regarding your consultation.
    </p>
  </div>

  <div className="lg:col-span-8 bg-zinc-900/20 border border-white/5 p-6 sm:p-8 rounded-2xl space-y-6">

    <div className="grid gap-6 sm:grid-cols-2">

      <input
        type="text"
        placeholder="First Name"
        value={data.customer.firstName}
        onChange={(e) =>
          updateSection("customer", {
            firstName: e.target.value,
          })
        }
        className="rounded-xl bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-amber-400"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={data.customer.lastName}
        onChange={(e) =>
          updateSection("customer", {
            lastName: e.target.value,
          })
        }
        className="rounded-xl bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-amber-400"
      />

    </div>

    <input
      type="email"
      placeholder="Email Address"
      value={data.customer.email}
      onChange={(e) =>
        updateSection("customer", {
          email: e.target.value,
        })
      }
      className="w-full rounded-xl bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-amber-400"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      value={data.customer.phone}
      onChange={(e) =>
        updateSection("customer", {
          phone: e.target.value,
        })
      }
      className="w-full rounded-xl bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-amber-400"
    />

  </div>

</section>

            {/* PROJECT TYPE SECTION */}
            <section className="grid gap-8 lg:grid-cols-12 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Project Type" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Select the core property baseline to establish the design paradigm rules.
                </p>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/20 border border-white/5 p-6 sm:p-8 rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="grid gap-4 sm:grid-cols-2">
                  {projectTypes.map((item) => (
                    <ProjectCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      selected={
                        data.project.projectType === item.title
                      }
                      onClick={() =>
                        updateSection("project", {
                          projectType: item.title,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </section>


            {/* SERVICES REQUIRED SECTION */}
            <section className="grid gap-8 lg:grid-cols-12 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Services Required" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Choose multiple architectural modules you intend to initialize in your workspace portfolio.
                </p>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/20 border border-white/5 p-6 sm:p-8 rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((item) => (
                    <ServiceCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      selected={data.project.services.includes(
                        item.title
                      )}
                      onClick={() =>
                        toggleService(item.title)
                      }
                    />
                  ))}
                </div>
              </div>
            </section>


            {/* PROPERTY STATUS SECTION */}
            <section className="grid gap-8 lg:grid-cols-12 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Property Status" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Identify the phase status of your physical spatial structure.
                </p>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/20 border border-white/5 p-6 sm:p-8 rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {propertyStatus.map((item) => (
                    <RadioCard
                      key={item}
                      title={item}
                      selected={
                        data.project.propertyStatus === item
                      }
                      onClick={() =>
                        updateSection("project", {
                          propertyStatus: item,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </section>


            {/* ESTIMATED BUDGET SECTION */}
            <section className="grid gap-8 lg:grid-cols-12 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Estimated Budget" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Assign financial thresholds to balance design layouts against dynamic material procurement.
                </p>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/20 border border-white/5 p-6 sm:p-8 rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="grid gap-3 sm:grid-cols-3">
                  {budgetOptions.map((item) => (
                    <RadioCard
                      key={item}
                      title={item}
                      selected={
                        data.project.budget === item
                      }
                      onClick={() =>
                        updateSection("project", {
                          budget: item,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </section>


            {/* PROPERTY SIZE SECTION */}
            <section className="grid gap-8 lg:grid-cols-12 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Approximate Property Size" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Input scale benchmarks to compute spatial surface distributions.
                </p>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/20 border border-white/5 p-6 sm:p-8 rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="grid gap-3 sm:grid-cols-3">
                  {propertySizes.map((item) => (
                    <RadioCard
                      key={item}
                      title={item}
                      selected={
                        data.project.propertySize === item
                      }
                      onClick={() =>
                        updateSection("project", {
                          propertySize: item,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </section>


            {/* PROJECT TIMELINE SECTION */}
            <section className="grid gap-8 lg:grid-cols-12 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Project Timeline" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Establish standard scheduling milestones for blueprint execution tracking.
                </p>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/20 border border-white/5 p-6 sm:p-8 rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="grid gap-3 sm:grid-cols-3">
                  {timelineOptions.map((item) => (
                    <RadioCard
                      key={item}
                      title={item}
                      selected={
                        data.project.timeline === item
                      }
                      onClick={() =>
                        updateSection("project", {
                          timeline: item,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* LOWER DISPATCH PANEL */}
            <div className="pt-8 border-t border-white/5 flex justify-end">
              <div className="w-full sm:max-w-xs">
                <ContinueButton onClick={handleContinue} />
              </div>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
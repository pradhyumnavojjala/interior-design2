"use client";

import { useRouter } from "next/navigation";

import { useConsultation } from "@/context/ConsultationContext";

import {
  bhkOptions,
  consultationTypes,
  languages,
} from "@/lib/consultation/data";

import ProgressBar from "@/components/consultation/ProgressBar";
import SectionTitle from "@/components/consultation/SectionTitle";
import InputField from "@/components/consultation/InputField";
import RadioCard from "@/components/consultation/RadioCard";
import ContinueButton from "@/components/consultation/ContinueButton";

export default function PropertyPage() {
  const router = useRouter();

  const { data, loading, updateSection } = useConsultation();

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center text-white text-xs uppercase tracking-widest font-light">
        Initializing Workspace Framework...
      </main>
    );
  }

  function handleContinue() {
    if (!data.property.address) {
      alert("Property address is required.");
      return;
    }

    if (!data.property.city) {
      alert("City is required.");
      return;
    }

    if (!data.property.state) {
      alert("State is required.");
      return;
    }

    if (!data.property.pinCode) {
      alert("PIN Code is required.");
      return;
    }

    if (!data.property.bhk) {
      alert("Select BHK.");
      return;
    }

    if (!data.schedule.preferredDate) {
      alert("Choose preferred date.");
      return;
    }

    if (!data.schedule.preferredTime) {
      alert("Choose preferred time.");
      return;
    }

    if (!data.schedule.consultationType) {
      alert("Choose consultation type.");
      return;
    }

    if (!data.schedule.language) {
      alert("Choose language.");
      return;
    }

    router.push("/consultation/upload");
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-2 sm:px-6 lg:px-12 py-4 sm:py-12 lg:py-16 selection:bg-amber-400/20 selection:text-amber-300 relative overflow-hidden">
      
      {/* Structural studio ambient background light rays scaled down for mobile */}
      <div className="absolute top-[5%] left-[-10%] z-0 h-48 w-48 sm:h-140 sm:w-140 bg-radial from-amber-500/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] z-0 h-56 w-56 sm:h-160 sm:w-160 bg-radial from-amber-400/[0.01] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10 space-y-4 sm:space-y-12">

        {/* PROGRESS BLOCK ROW */}
        <div className="bg-zinc-900/10 rounded-xl sm:rounded-2xl border border-white/5 p-3 sm:p-6 backdrop-blur-md">
          <ProgressBar
            step={2}
            totalSteps={5}
            title="Property Information"
          />
        </div>

        {/* MASTER CONFIGURATION BOARD */}
        <div className="rounded-xl sm:rounded-[32px] border border-white/5 bg-linear-to-b from-zinc-900/40 to-zinc-900/5 p-3 sm:p-8 lg:p-12 backdrop-blur-2xl shadow-2xl space-y-6 sm:space-y-16 relative">
          
          {/* Accent border highlight running under the master plate */}
          <div className="absolute top-0 left-4 right-4 sm:left-12 sm:right-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="border-b border-white/5 pb-4 sm:pb-8">
            <SectionTitle
              title="Property Information"
              subtitle="Tell us where the project will take place."
            />
          </div>

          <div className="space-y-6 sm:space-y-12 lg:space-y-16">

            {/* ADDRESS SECTION */}
            <section className="flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:gap-8 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Property Address" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Specify site coordinates to initialize layout mapping configurations.
                </p>
              </div>

              <div className="w-full lg:col-span-8 space-y-4 sm:space-y-6 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <InputField
                  label="Property Address"
                  value={data.property.address}
                  onChange={(value) =>
                    updateSection("property", {
                      address: value,
                    })
                  }
                />

                <div className="grid gap-3 grid-cols-3 sm:gap-6">
                  <InputField
                    label="City"
                    value={data.property.city}
                    onChange={(value) =>
                      updateSection("property", {
                        city: value,
                      })
                    }
                  />

                  <InputField
                    label="State"
                    value={data.property.state}
                    onChange={(value) =>
                      updateSection("property", {
                        state: value,
                      })
                    }
                  />

                  <InputField
                    label="PIN Code"
                    value={data.property.pinCode}
                    onChange={(value) =>
                      updateSection("property", {
                        pinCode: value,
                      })
                    }
                  />
                </div>

                <InputField
                  label="Google Maps Link"
                  value={data.property.googleMap}
                  onChange={(value) =>
                    updateSection("property", {
                      googleMap: value,
                    })
                  }
                />
              </div>
            </section>


            {/* PROPERTY METRICS INTERFACE */}
            <section className="flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:gap-8 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle title="Property Details" />
                <p className="text-xs text-zinc-500 mt-1 font-light tracking-wide max-w-xs hidden lg:block">
                  Define the structural volume boundaries of your interior blueprint architecture.
                </p>
              </div>

              <div className="w-full lg:col-span-8 space-y-6 sm:space-y-10 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="w-full sm:max-w-xs">
                  <InputField
                    label="Number of Floors"
                    value={data.property.floors}
                    onChange={(value) =>
                      updateSection("property", {
                        floors: value,
                      })
                    }
                  />
                </div>

                <div className="border-t border-white/5 pt-4 sm:pt-8 space-y-3 sm:space-y-4">
                  <SectionTitle title="BHK Typology" />
                  <div className="grid gap-2 grid-cols-3">
                    {bhkOptions.map((item) => (
                      <RadioCard
                        key={item}
                        title={item}
                        selected={data.property.bhk === item}
                        onClick={() =>
                          updateSection("property", {
                            bhk: item,
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>


            {/* CONSULTATION PREFERENCES SECTION */}
            <section className="flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:gap-8 items-start group">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <SectionTitle
                  title="Consultation Preferences"
                  subtitle="Choose your preferred consultation schedule."
                />
              </div>

              <div className="w-full lg:col-span-8 space-y-6 sm:space-y-10 bg-zinc-900/20 border border-white/5 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/30">
                <div className="grid gap-3 grid-cols-2 sm:gap-6">
                  <InputField
                    label="Preferred Date"
                    type="date"
                    value={data.schedule.preferredDate}
                    onChange={(value) =>
                      updateSection("schedule", {
                        preferredDate: value,
                      })
                    }
                  />

                  <InputField
                    label="Preferred Time"
                    type="time"
                    value={data.schedule.preferredTime}
                    onChange={(value) =>
                      updateSection("schedule", {
                        preferredTime: value,
                      })
                    }
                  />
                </div>

                <div className="border-t border-white/5 pt-4 sm:pt-8 space-y-3 sm:space-y-4">
                  <SectionTitle title="Consultation Medium" />
                  <div className="grid gap-2 grid-cols-2">
                    {consultationTypes.map((item) => (
                      <RadioCard
                        key={item}
                        title={item}
                        selected={
                          data.schedule.consultationType === item
                        }
                        onClick={() =>
                          updateSection("schedule", {
                            consultationType: item,
                        })
                      }
                    />
                  ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 sm:pt-8 space-y-3 sm:space-y-4">
                  <SectionTitle title="Preferred Language Vector" />
                  <div className="grid gap-2 grid-cols-3">
                    {languages.map((item) => (
                      <RadioCard
                        key={item}
                        title={item}
                        selected={
                          data.schedule.language === item
                        }
                        onClick={() =>
                          updateSection("schedule", {
                            language: item,
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* BUTTON SUBMIT ZONE */}
            <div className="pt-4 sm:pt-8 border-t border-white/5 flex justify-end">
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
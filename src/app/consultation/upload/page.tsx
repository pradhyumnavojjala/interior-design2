"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useConsultation } from "@/context/ConsultationContext";

import ProgressBar from "@/components/consultation/ProgressBar";
import SectionTitle from "@/components/consultation/SectionTitle";
import ImageUploader from "@/components/consultation/ImageUploader";
import ContinueButton from "@/components/consultation/ContinueButton";

export default function UploadPage() {
  const router = useRouter();

  const {
  data,
  loading,
  uploadedFiles,
  setUploadedFiles,
  updateSection,
} = useConsultation();

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center text-white text-xs uppercase tracking-widest font-light">
        Initializing Document Blueprint Framework...
      </main>
    );
  }

  function saveFiles(key: keyof typeof data.uploads, files: FileList | null) {
  if (!files) return;

  const fileArray = Array.from(files);

  // Keep actual files in memory
  setUploadedFiles((prev) => ({
    ...prev,
    [key]: fileArray,
  }));

  // Keep only names in Firestore
  updateSection("uploads", {
    [key]: fileArray.map((file) => file.name),
  });
}

  function handleContinue() {
    router.push("/consultation/review");
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 sm:px-8 lg:px-16 py-16 selection:bg-amber-400/20 selection:text-amber-300 relative overflow-hidden">
      
      {/* Structural ambient lighting layers matching Step 2 */}
      <div className="absolute top-[15%] right-[-10%] z-0 h-140 w-140 bg-radial from-amber-500/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] z-0 h-160 w-160 bg-radial from-amber-400/[0.01] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10 space-y-12">

        {/* PROGRESS BAR HOUSING */}
        <div className="bg-zinc-900/10 rounded-2xl border border-white/5 p-6 backdrop-blur-md">
          <ProgressBar
            step={3}
            totalSteps={5}
            title="Upload Images"
          />
        </div>

        {/* MASTER PLATFORM WRAPPER */}
        <div className="rounded-[32px] border border-white/5 bg-linear-to-b from-zinc-900/40 to-zinc-900/5 p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-2xl space-y-12 relative">
          
          {/* Decorative glass alignment rule accent */}
          <div className="absolute top-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="border-b border-white/5 pb-8">
            <SectionTitle
              title="Upload Images"
              subtitle="Upload photos of your property to help our designers understand your vision."
            />
          </div>

          {/* DYNAMIC SPATIAL ARCHITECTURE GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            <ImageUploader
              title="Living Room"
              onChange={(files) => saveFiles("livingRoom", files)}
            />

            <ImageUploader
              title="Kitchen"
              onChange={(files) => saveFiles("kitchen", files)}
            />

            <ImageUploader
              title="Bedroom"
              onChange={(files) => saveFiles("bedroom", files)}
            />

            <ImageUploader
              title="Bathroom"
              onChange={(files) => saveFiles("bathroom", files)}
            />

            <ImageUploader
              title="Dining Room"
              onChange={(files) => saveFiles("diningRoom", files)}
            />

            <ImageUploader
              title="Balcony"
              onChange={(files) => saveFiles("balcony", files)}
            />

            {/* Accent Highlighted Blueprints Layer Card Blocks */}
            <div className="sm:col-span-2 lg:col-span-1">
              <ImageUploader
                title="Floor Plan"
                onChange={(files) => saveFiles("floorPlan", files)}
              />
            </div>

            <ImageUploader
              title="Reference Images"
              onChange={(files) => saveFiles("referenceImages", files)}
            />

            <ImageUploader
              title="Other Images"
              onChange={(files) => saveFiles("otherImages", files)}
            />

          </div>

          {/* BUTTON INTERFACE ALIGNMENT DECK */}
          <div className="pt-8 border-t border-white/5 flex justify-end">
            <div className="w-full sm:max-w-xs">
              <ContinueButton
                onClick={handleContinue}
              />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
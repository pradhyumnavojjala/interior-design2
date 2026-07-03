"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useConsultation } from "@/context/ConsultationContext";

import ProgressBar from "@/components/consultation/ProgressBar";
import SectionTitle from "@/components/consultation/SectionTitle";
import ReviewCard from "@/components/consultation/ReviewCard";
import ContinueButton from "@/components/consultation/ContinueButton";

export default function ReviewPage() {

  const router = useRouter();

const [submitting, setSubmitting] = useState(false);

  const {
    data,
    loading,
    uploadedFiles,
    setAcceptedTerms,
  } = useConsultation();

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  async function handleSubmit() {

  if (!data.acceptedTerms) {
    alert("Please accept the Terms & Conditions.");
    return;
  }

  try {

    setSubmitting(true);

    const formData = new FormData();

// Send ALL text data as JSON
formData.append("consultation", JSON.stringify(data));

Object.entries(uploadedFiles).forEach(([category, files]) => {
  files.forEach((file) => {
    formData.append(category, file);
  });
});

// We'll add images in the next step

const response = await fetch("/api/consultation", {
  method: "POST",
  body: formData,
});

    const result = await response.json();

    if (!result.success) {
      alert(result.message);
      return;
    }

    router.push(
      `/consultation/success?id=${result.id}`
    );

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  } finally {

    setSubmitting(false);

  }

}

  return (

    <main className="min-h-screen bg-zinc-950 px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <ProgressBar
          step={4}
          totalSteps={5}
          title="Review Consultation"
        />

        <div className="mt-10 space-y-8">

          <ReviewCard title="Customer Information">

            <div className="grid gap-4 md:grid-cols-2">

              <p>
                <strong>First Name:</strong>{" "}
                {data.customer.firstName}
              </p>

              <p>
                <strong>Last Name:</strong>{" "}
                {data.customer.lastName}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {data.customer.email}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {data.customer.phone}
              </p>

            </div>

          </ReviewCard>

          <ReviewCard title="Project Information">

            <div className="space-y-3">

              <p>

                <strong>Project Type:</strong>{" "}
                {data.project.projectType}

              </p>

              <p>

                <strong>Property Status:</strong>{" "}
                {data.project.propertyStatus}

              </p>

              <p>

                <strong>Budget:</strong>{" "}
                {data.project.budget}

              </p>

              <p>

                <strong>Property Size:</strong>{" "}
                {data.project.propertySize}

              </p>

              <p>

                <strong>Timeline:</strong>{" "}
                {data.project.timeline}

              </p>

              <div>

                <strong>Services:</strong>

                <ul className="mt-2 list-disc pl-6">

                  {data.project.services.map((service) => (

                    <li key={service}>
                      {service}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </ReviewCard>

                    <ReviewCard title="Property Information">

            <div className="grid gap-4 md:grid-cols-2">

              <p>
                <strong>Address:</strong>{" "}
                {data.property.address}
              </p>

              <p>
                <strong>City:</strong>{" "}
                {data.property.city}
              </p>

              <p>
                <strong>State:</strong>{" "}
                {data.property.state}
              </p>

              <p>
                <strong>PIN Code:</strong>{" "}
                {data.property.pinCode}
              </p>

              <p>
                <strong>Google Map:</strong>{" "}
                {data.property.googleMap || "-"}
              </p>

              <p>
                <strong>Floors:</strong>{" "}
                {data.property.floors}
              </p>

              <p>
                <strong>BHK:</strong>{" "}
                {data.property.bhk}
              </p>

            </div>

          </ReviewCard>

          <ReviewCard title="Consultation Schedule">

            <div className="grid gap-4 md:grid-cols-2">

              <p>
                <strong>Preferred Date:</strong>{" "}
                {data.schedule.preferredDate}
              </p>

              <p>
                <strong>Preferred Time:</strong>{" "}
                {data.schedule.preferredTime}
              </p>

              <p>
                <strong>Consultation Type:</strong>{" "}
                {data.schedule.consultationType}
              </p>

              <p>
                <strong>Language:</strong>{" "}
                {data.schedule.language}
              </p>

            </div>

          </ReviewCard>

          <ReviewCard title="Uploaded Images">

            <div className="space-y-4">

              {Object.entries(data.uploads).map(([key, files]) => (

                <div key={key}>

                  <h3 className="font-semibold capitalize text-white">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h3>

                  {files.length > 0 ? (

                    <ul className="mt-2 list-disc pl-6 text-zinc-300">

                      {files.map((file) => (

                        <li key={file}>
                          {file}
                        </li>

                      ))}

                    </ul>

                  ) : (

                    <p className="mt-2 text-zinc-500">
                      No files uploaded
                    </p>

                  )}

                </div>

              ))}

            </div>

          </ReviewCard>

                    <ReviewCard title="Additional Notes">

            <p className="text-zinc-300">
              {data.project.notes
                ? data.project.notes
                : "No additional notes provided."}
            </p>

          </ReviewCard>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-xl">

            <label className="flex items-start gap-4 cursor-pointer">

              <input
                type="checkbox"
                checked={data.acceptedTerms}
                onChange={(e) =>
                  setAcceptedTerms(e.target.checked)
                }
                className="mt-1 h-5 w-5 accent-amber-400"
              />

              <div>

                <p className="text-lg text-white">
                  I agree to the Terms & Conditions
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  I confirm that all the information provided is accurate.
                  I understand that Sreenidhi Interiors will use these
                  details only for preparing my consultation and project
                  quotation.
                </p>

              </div>

            </label>

          </div>

          <button
  onClick={handleSubmit}
  disabled={submitting}
  className="w-full rounded-full bg-amber-400 py-4 font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-300 disabled:opacity-50"
>
  {submitting
    ? "Submitting..."
    : "Submit Consultation"}
</button>

        </div>

      </div>

    </main>

  );
}


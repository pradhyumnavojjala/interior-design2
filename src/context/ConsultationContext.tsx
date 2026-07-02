"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ConsultationData } from "@/types/consultation";

const STORAGE_KEY = "consultationData";

type ConsultationContextType = {
  data: ConsultationData;
  loading: boolean;

  uploadedFiles: Record<string, File[]>;
  setUploadedFiles: React.Dispatch<
    React.SetStateAction<Record<string, File[]>>
  >;
  updateSection: (
    section: "customer" | "project" | "property" | "schedule" | "uploads",
    values: any
  ) => void;
  setAcceptedTerms: (value: boolean) => void;
  clearConsultation: () => void;
};

const ConsultationContext =
  createContext<ConsultationContextType | null>(null);

const initialData: ConsultationData = {
  customer: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },

  project: {
    projectType: "",
    services: [],
    propertyStatus: "",
    budget: "",
    propertySize: "",
    timeline: "",
    notes: "",
  },

  property: {
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    googleMap: "",
    floors: "",
    bhk: "",
    parking: "",
  },

  schedule: {
    preferredDate: "",
    preferredTime: "",
    consultationType: "",
    language: "",
  },

  uploads: {
    livingRoom: [],
    kitchen: [],
    bedroom: [],
    bathroom: [],
    diningRoom: [],
    balcony: [],
    floorPlan: [],
    referenceImages: [],
    otherImages: [],
  },

  acceptedTerms: false,
};

export function ConsultationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<ConsultationData>(initialData);

  const [uploadedFiles, setUploadedFiles] = useState<
  Record<string, File[]>
>({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    if (saved) {
      setData(JSON.parse(saved));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
      );
    }
  }, [data, loading]);

  function updateSection(
  section: "customer" | "project" | "property" | "schedule" | "uploads",
  values: any
) {
  setData((prev) => ({
    ...prev,
    [section]: {
      ...prev[section],
      ...values,
    },
  }));
}

function setAcceptedTerms(value: boolean) {
  setData((prev) => ({
    ...prev,
    acceptedTerms: value,
  }));
}

  function clearConsultation() {
    sessionStorage.removeItem(STORAGE_KEY);
    setData(initialData);
  }

  return (
  <ConsultationContext.Provider
    value={{
  data,
  loading,

  uploadedFiles,
  setUploadedFiles,

  updateSection,
  setAcceptedTerms,
  clearConsultation,
}}
  >
    {children}
  </ConsultationContext.Provider>
);
}

export function useConsultation() {
  const context = useContext(ConsultationContext);

  if (!context) {
    throw new Error(
      "useConsultation must be used inside ConsultationProvider"
    );
  }

  return context;
}
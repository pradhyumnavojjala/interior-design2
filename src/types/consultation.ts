export interface ConsultationData {
  // Customer Information
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };

  // Project Overview
  project: {
    projectType: string;
    services: string[];
    propertyStatus: string;
    budget: string;
    propertySize: string;
    timeline: string;
    notes: string;
  };

  // Property Details
  property: {
    ownerName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
    googleMap: string;
    floors: string;
    bhk: string;
    parking: string;
  };

  // Consultation Schedule
  schedule: {
    preferredDate: string;
    preferredTime: string;
    consultationType: string;
    language: string;
  };

  // Uploaded Images
  uploads: {
    floorPlan: string[];
  };

  acceptedTerms: boolean;

  createdAt?: string;
}
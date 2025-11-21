import { useState } from "react";
import {
  validateEgyptianPhone,
  validateEgyptianLocation,
  validateEmail,
  validateRequiredField,
  validateMedicalSpecialty,
} from "../../services/validationService";

interface FormData {
  name: string;
  email: string;
  clinicName: string;
  phone: string;
  country: string;
  currentSystem: string;
  medicalSpecialty: string;
}

interface FormErrors {
  general: string | null;
  phone: string | null;
  country: string | null;
  specialty: string | null;
}

export const useBetaSignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    clinicName: "",
    phone: "",
    country: "",
    currentSystem: "",
    medicalSpecialty: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    general: null,
    phone: null,
    country: null,
    specialty: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear related errors when user types
    if (field === "phone") setErrors((prev) => ({ ...prev, phone: null }));
    if (field === "country") setErrors((prev) => ({ ...prev, country: null }));
    if (field === "medicalSpecialty")
      setErrors((prev) => ({ ...prev, specialty: null }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      clinicName: "",
      phone: "",
      country: "",
      currentSystem: "",
      medicalSpecialty: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({
      general: null,
      phone: null,
      country: null,
      specialty: null,
    });

    // Validate name
    const nameValidation = validateRequiredField(formData.name, "Full name");
    if (!nameValidation.isValid) {
      setErrors((prev) => ({ ...prev, general: nameValidation.error ?? null }));
      setIsLoading(false);
      return;
    }

    // Validate email
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      setErrors((prev) => ({
        ...prev,
        general: emailValidation.error ?? null,
      }));
      setIsLoading(false);
      return;
    }

    // Validate phone number (Egyptian)
    const phoneValidation = await validateEgyptianPhone(formData.phone);
    if (!phoneValidation.isValid) {
      setErrors((prev) => ({ ...prev, phone: phoneValidation.error ?? null }));
      setIsLoading(false);
      return;
    }

    // Validate country/city (Egyptian)
    const locationValidation = validateEgyptianLocation(formData.country);
    if (!locationValidation.isValid) {
      setErrors((prev) => ({
        ...prev,
        country: locationValidation.error ?? null,
      }));
      setIsLoading(false);
      return;
    }

    // Validate medical specialty
    const specialtyValidation = validateMedicalSpecialty(
      formData.medicalSpecialty
    );
    if (!specialtyValidation.isValid) {
      setErrors((prev) => ({
        ...prev,
        specialty: specialtyValidation.error ?? null,
      }));
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-beta-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        resetForm();
      } else {
        throw new Error(data.error || "Failed to send request.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrors((prev) => ({ ...prev, general: err.message }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "An unknown error occurred.",
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    isSubmitted,
    updateField,
    handleSubmit,
  };
};

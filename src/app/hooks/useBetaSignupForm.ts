import { useState } from "react";
import {
  validateEgyptianPhone,
  validateRequiredField,
} from "@/services/validationService";

interface FormData {
  name: string;
  phone: string;
}

interface FormErrors {
  general: string | null;
  name: string | null;
  phone: string | null;
}

export const useBetaSignupForm = (locale: string) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    general: null,
    name: null,
    phone: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear specific error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({ general: null, name: null, phone: null });

    // 1. Validate Name
    const nameValidation = validateRequiredField(formData.name, "Name");
    if (!nameValidation.isValid) {
      setErrors((prev) => ({
        ...prev,
        name:
          locale === "ar"
            ? "الاسم مطلوب"
            : nameValidation.error || "Name is required",
      }));
      setIsLoading(false);
      return;
    }

    // 2. Validate Phone
    // First check empty
    if (!formData.phone || formData.phone.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        phone:
          locale === "ar" ? "رقم الهاتف مطلوب" : "Phone number is required",
      }));
      setIsLoading(false);
      return;
    }

    // Then check format via service
    const phoneValidation = await validateEgyptianPhone(formData.phone);
    if (!phoneValidation.isValid) {
      setErrors((prev) => ({
        ...prev,
        phone: phoneValidation.error || "Invalid phone number",
      }));
      setIsLoading(false);
      return;
    }

    try {
      // Endpoint matches what was in your Component
      const res = await fetch("/api/send-beta-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error(data.error || "Failed to send request.");
      }
    } catch (err) {
      console.error(err);
      setErrors((prev) => ({
        ...prev,
        general:
          locale === "ar"
            ? "حدث خطأ ما. يرجى المحاولة مرة أخرى."
            : "Something went wrong. Please try again.",
      }));
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

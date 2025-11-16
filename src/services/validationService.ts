/**
 * List of Egyptian governorates and major cities
 */
export const EGYPTIAN_LOCATIONS = [
  // Governorates
  { value: "cairo", label: "Cairo / القاهرة" },
  { value: "giza", label: "Giza / الجيزة" },
  { value: "alexandria", label: "Alexandria / الإسكندرية" },
  { value: "qalyubia", label: "Qalyubia / القليوبية" },
  { value: "port-said", label: "Port Said / بورسعيد" },
  { value: "suez", label: "Suez / السويس" },
  { value: "dakahlia", label: "Dakahlia / الدقهلية" },
  { value: "damietta", label: "Damietta / دمياط" },
  { value: "sharqia", label: "Sharqia / الشرقية" },
  { value: "gharbia", label: "Gharbia / الغربية" },
  { value: "monufia", label: "Monufia / المنوفية" },
  { value: "beheira", label: "Beheira / البحيرة" },
  { value: "ismailia", label: "Ismailia / الإسماعيلية" },
  { value: "kafr-el-sheikh", label: "Kafr El Sheikh / كفر الشيخ" },
  { value: "luxor", label: "Luxor / الأقصر" },
  { value: "aswan", label: "Aswan / أسوان" },
  { value: "red-sea", label: "Red Sea / البحر الأحمر" },
  { value: "new-valley", label: "New Valley / الوادي الجديد" },
  { value: "matruh", label: "Matruh / مطروح" },
  { value: "north-sinai", label: "North Sinai / شمال سيناء" },
  { value: "south-sinai", label: "South Sinai / جنوب سيناء" },
  { value: "faiyum", label: "Faiyum / الفيوم" },
  { value: "beni-suef", label: "Beni Suef / بني سويف" },
  { value: "minya", label: "Minya / المنيا" },
  { value: "asyut", label: "Asyut / أسيوط" },
  { value: "sohag", label: "Sohag / سوهاج" },
  { value: "qena", label: "Qena / قنا" },
].sort((a, b) => a.label.localeCompare(b.label));

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates Egyptian phone numbers using an API
 * Checks if the phone number is a valid Egyptian format
 */
export async function validateEgyptianPhone(
  phone: string
): Promise<ValidationResult> {
  if (!phone || phone.trim() === "") {
    return { isValid: true }; // Optional field
  }

  try {
    // Remove all spaces, dashes, and parentheses
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");

    // Check if it starts with +20 or 20 or 0 (Egyptian country code)
    const egyptianPhoneRegex = /^(\+20|20|0)?1[0-2,5]{1}[0-9]{8}$/;

    if (!egyptianPhoneRegex.test(cleanPhone)) {
      return {
        isValid: false,
        error:
          "Please enter a valid Egyptian phone number (e.g., +20 109 252 3277 or 01092523277)",
      };
    }

    return { isValid: true };
  } catch (error) {
    console.error("Phone validation error:", error);
    return { isValid: true }; // Don't block submission on API errors
  }
}

/**
 * Validates Egyptian cities/governorates
 * Checks against a list of Egyptian cities and governorates
 */
export function validateEgyptianLocation(location: string): ValidationResult {
  if (!location || location.trim() === "") {
    return { isValid: true }; // Optional field
  }

  const validValues = EGYPTIAN_LOCATIONS.map((loc) => loc.value);

  if (!validValues.includes(location)) {
    return {
      isValid: false,
      error: "Please select a valid Egyptian governorate",
    };
  }

  return { isValid: true };
}

/**
 * Validates email format
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || email.trim() === "") {
    return { isValid: false, error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: "Please enter a valid email address",
    };
  }

  return { isValid: true };
}

/**
 * Validates required text fields
 */
export function validateRequiredField(
  value: string,
  fieldName: string
): ValidationResult {
  if (!value || value.trim() === "") {
    return {
      isValid: false,
      error: `${fieldName} is required`,
    };
  }

  if (value.trim().length < 2) {
    return {
      isValid: false,
      error: `${fieldName} must be at least 2 characters`,
    };
  }

  return { isValid: true };
}

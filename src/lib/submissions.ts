import fs from "fs/promises";
import path from "path";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
  status: "new" | "contacted" | "resolved";
}

export interface EnquirySubmission {
  id: string;
  name: string;
  email?: string;
  phone: string;
  service: string;
  message: string;
  imagePreview?: string | null;
  createdAt: string;
  status: "new" | "in_review" | "quoted" | "completed";
}

const DATA_DIR = path.join(process.cwd(), "src", "data", "submissions");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");

// Ensure directory and JSON files exist
async function ensureDataFiles() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // directory exists or cannot be created
  }

  try {
    await fs.access(CONTACTS_FILE);
  } catch {
    await fs.writeFile(CONTACTS_FILE, JSON.stringify([], null, 2), "utf8");
  }

  try {
    await fs.access(ENQUIRIES_FILE);
  } catch {
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify([], null, 2), "utf8");
  }
}

export async function saveContactSubmission(
  data: Omit<ContactSubmission, "id" | "createdAt" | "status">
): Promise<ContactSubmission> {
  const newSubmission: ContactSubmission = {
    id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...data,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  try {
    await ensureDataFiles();

    const fileContent = await fs.readFile(CONTACTS_FILE, "utf8");
    let contacts: ContactSubmission[] = [];
    try {
      contacts = JSON.parse(fileContent);
    } catch {
      contacts = [];
    }

    contacts.unshift(newSubmission);
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), "utf8");
  } catch (writeError) {
    console.warn(
      "Could not persist contact submission to disk (filesystem may be read-only, e.g. Vercel). Continuing with email-only notification.",
      writeError
    );
  }

  return newSubmission;
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  await ensureDataFiles();
  try {
    const fileContent = await fs.readFile(CONTACTS_FILE, "utf8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}

export async function saveEnquirySubmission(
  data: Omit<EnquirySubmission, "id" | "createdAt" | "status">
): Promise<EnquirySubmission> {
  const newSubmission: EnquirySubmission = {
    id: `enquiry_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...data,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  try {
    await ensureDataFiles();

    const fileContent = await fs.readFile(ENQUIRIES_FILE, "utf8");
    let enquiries: EnquirySubmission[] = [];
    try {
      enquiries = JSON.parse(fileContent);
    } catch {
      enquiries = [];
    }

    enquiries.unshift(newSubmission);
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf8");
  } catch (writeError) {
    console.warn(
      "Could not persist enquiry submission to disk (filesystem may be read-only, e.g. Vercel). Continuing with email-only notification.",
      writeError
    );
  }

  return newSubmission;
}

export async function getEnquirySubmissions(): Promise<EnquirySubmission[]> {
  await ensureDataFiles();
  try {
    const fileContent = await fs.readFile(ENQUIRIES_FILE, "utf8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}

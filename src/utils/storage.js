import { generateRegistrationId } from "./id.js";

const KEY_PENDING = "pendingRegistration";
const KEY_TXN = "esewaTxn";
const KEY_VERIFIED = "verifiedPayment";
const KEY_STORED = "registrationStored";
const KEY_SAVED_SUMMARY = "savedSummary";

/**
 * We intentionally use sessionStorage (not localStorage) so data disappears when the tab closes.
 * Requirement: student data must NOT be stored permanently before payment success.
 */

export function setPendingRegistration(data) {
  const existing = getPendingRegistration();
  const registrationId = data.registrationId || existing?.registrationId || generateRegistrationId();
  const payload = { ...existing, ...data, registrationId, createdAt: Date.now() };
  sessionStorage.setItem(KEY_PENDING, JSON.stringify(payload));
  return payload;
}

export function getPendingRegistration() {
  const raw = sessionStorage.getItem(KEY_PENDING);
  return raw ? JSON.parse(raw) : null;
}

export function clearPendingRegistration() {
  sessionStorage.removeItem(KEY_PENDING);
}

export function setTransactionInfo(info) {
  sessionStorage.setItem(KEY_TXN, JSON.stringify(info));
}

export function getTransactionInfo() {
  const raw = sessionStorage.getItem(KEY_TXN);
  return raw ? JSON.parse(raw) : null;
}

export function clearTransactionInfo() {
  sessionStorage.removeItem(KEY_TXN);
}

export function setVerifiedPayment(payload) {
  sessionStorage.setItem(KEY_VERIFIED, JSON.stringify(payload));
}

export function getVerifiedPayment() {
  const raw = sessionStorage.getItem(KEY_VERIFIED);
  return raw ? JSON.parse(raw) : null;
}

export function clearVerifiedPayment() {
  sessionStorage.removeItem(KEY_VERIFIED);
}

export function setSavedSummary(summary) {
  if (!summary?.registrationId) return;
  sessionStorage.setItem(KEY_SAVED_SUMMARY, JSON.stringify(summary));
  sessionStorage.setItem(KEY_STORED, summary.registrationId);
}

export function getSavedSummary() {
  const raw = sessionStorage.getItem(KEY_SAVED_SUMMARY);
  return raw ? JSON.parse(raw) : null;
}

export function isRegistrationStored(registrationId) {
  if (!registrationId) return false;
  return sessionStorage.getItem(KEY_STORED) === registrationId;
}

export function clearSavedSummary() {
  sessionStorage.removeItem(KEY_SAVED_SUMMARY);
  sessionStorage.removeItem(KEY_STORED);
}

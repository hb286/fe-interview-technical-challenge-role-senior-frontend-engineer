import axios from "axios";
import { TPolicyholder } from "../types";

// NOTE: in a production setting, this constant would likely be located elsewhere
const API_URL_BASE = 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api';
export const POLICYHOLDERS_API_URL = `${API_URL_BASE}/policyholders`;

export async function getPolicyholders() {
  const { data } = await axios.get(POLICYHOLDERS_API_URL);
  return data.policyHolders;
}

export async function createPolicyholder(policyholder: TPolicyholder) {
  const { data } = await axios.post(POLICYHOLDERS_API_URL, policyholder);
  return data.policyHolders;
}

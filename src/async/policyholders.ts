import axios from "axios";
import { TPolicyholder } from "../types";

const API_URL_BASE = 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api';

export async function getPolicyholders() {
  const { data } = await axios.get(`${API_URL_BASE}/policyholders`);
  return data.policyHolders;
}

export async function createPolicyholder(policyholder: TPolicyholder) {
  const { data } = await axios.post(`${API_URL_BASE}/policyholders`, policyholder);
  return data.policyHolders;
}

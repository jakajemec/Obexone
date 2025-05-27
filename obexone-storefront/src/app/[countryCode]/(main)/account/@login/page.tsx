import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Prijava",
  description: "Prijavite se v vaš Obexone račun.",
}

export default function Login() {
  return <LoginTemplate />
}

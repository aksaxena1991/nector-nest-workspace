import { Routes } from "@angular/router";
import { Signup } from "./signup/signup";

export const routes: Routes = [
  {
    path: "signup",
    component: Signup,
    title: "Sign Up | Identity Management",
  },
  {
    path: "",
    redirectTo: "signup",
    pathMatch: "full",
  },
];

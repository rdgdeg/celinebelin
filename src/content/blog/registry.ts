import type { FC } from "react";
import StressBody from "@/content/blog/stressBody";
import EmdrBody from "@/content/blog/emdrBody";
import SleepBody from "@/content/blog/sleepBody";
import HypnoseBody from "@/content/blog/hypnoseBody";
import CoachingBody from "@/content/blog/coachingBody";
import BachAnimauxBody from "@/content/blog/bachAnimauxBody";

export const articleBodies: Record<string, FC> = {
  "stress-quotidien-reprendre-controle": StressBody,
  "emdr-attentes-seance": EmdrBody,
  "sommeil-anxiete-premiers-reflexes": SleepBody,
  "hypnose-ericksonienne-cadre": HypnoseBody,
  "coaching-de-vie-objectifs-limites": CoachingBody,
  "fleurs-de-bach-et-accompagnements-naturels": BachAnimauxBody,
};

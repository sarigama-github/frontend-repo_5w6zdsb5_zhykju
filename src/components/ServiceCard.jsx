import { ArrowRight, Shield, Cloud, Rocket, Code2, Sparkles } from "lucide-react";

const icons = {
  security: Shield,
  cloud: Cloud,
  launch: Rocket,
  code: Code2,
  ai: Sparkles,
};

export default function ServiceCard({ title, description, icon = "code" }) {
  const Icon = icons[icon] || Code2;
  return (
    <div className="group relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 hover:border-blue-500/50 transition overflow-hidden">
      <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-blue-200/80 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 inline-flex items-center text-blue-300/80 group-hover:text-blue-300">
          <span className="text-sm">Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

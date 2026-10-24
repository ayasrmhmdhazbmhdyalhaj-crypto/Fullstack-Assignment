// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"
// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-slate-900 text-white shadow hover:bg-slate-800 px-4 py-2",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// export default function App() {
//   return (
//     <div className="flex h-screen items-center justify-center bg-slate-100">
//       <Button onClick={() => alert("تم النقر على الزر بنجاح يا دكتور! 🚀")}>
//         هذا زر shadcn الخاص بالتكليف يا دكتور
//       </Button>
//     </div>
//   )
// }
import { useState } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  badge: string;
  description: string;
  icon: string;
}

function MetricCard({ title, value, badge, description, icon }: MetricCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl p-2.5 bg-slate-50 border border-slate-100 rounded-xl">{icon}</span>
        <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
          {badge}
        </span>
      </div>
      <h3 className="text-sm font-medium text-slate-500 mb-1">{title}</h3>
      <div className="text-2xl font-bold text-slate-900 tracking-tight mb-2">{value}</div>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default function App() {
  const [serverStatus, setServerStatus] = useState<string>("Ready to test");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkConnection = async () => {
    setIsLoading(true);
    setServerStatus("Connecting to Laravel...");
    try {
      const res = await fetch("http://127.0.0.1:8000/api/health");
      if (res.ok) {
        const data = await res.json();
        setServerStatus(`Online (${data.status || "OK"})`);
      } else {
        setServerStatus("Backend Offline (Port 8000)");
      }
    } catch {
      setServerStatus("Server Not Responding (Check php artisan serve)");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/60 to-slate-200/50 text-slate-900 antialiased font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20">
              FS
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight">Fullstack Project Hub</h1>
              <p className="text-[11px] text-slate-500">React 19 + Laravel 13</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Client Running
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-8 md:p-12 shadow-xl shadow-indigo-950/10">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-xs font-semibold text-indigo-200 tracking-wide uppercase">
              Web Application Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              نظام إدارة المنصة المتكاملة
            </h2>
            <p className="text-indigo-200/90 text-sm md:text-base leading-relaxed">
              واجهة تفاعلية حديثة مبنية بأحدث معايير الويب (Vite, TypeScript, Tailwind) ومتصلة بخدمات API سريعة وآمنة عبر إطار عمل Laravel.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={checkConnection}
                disabled={isLoading}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs md:text-sm font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>⚡ فحص اتصال السيرفر</span>
              </button>
              <span className="text-xs font-mono text-indigo-300 bg-indigo-950/50 px-3 py-2 rounded-lg border border-indigo-700/50">
                الحالة: {serverStatus}
              </span>
            </div>
          </div>
          
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Tech Stack Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon="⚛️"
            title="Frontend Environment"
            value="React 19.3"
            badge="TypeScript"
            description="واجهة تفاعلية عالية الأداء مبنية باستخدام Vite و Tailwind CSS v4."
          />
          <MetricCard
            icon="🚀"
            title="Backend Service"
            value="Laravel 13"
            badge="PHP 8.3"
            description="خادم REST API مدعوم بنظام المصادقة Sanctum ومسار فحص الصحة /api/health."
          />
          <MetricCard
            icon="🗄️"
            title="Database Layer"
            value="MySQL / MariaDB"
            badge="XAMPP Local"
            description="قواعد بيانات علائقية مهيكلة عبر مخططات Migrations مدمجة."
          />
        </section>

        {/* Details & Submission Info Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">حالة تسليم التكليف البرمجي</h3>
              <p className="text-xs text-slate-500 mt-0.5">تفاصيل البيئة والمستودع البرمجي</p>
            </div>
            <span className="text-xs font-medium px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg">
              جاهز للتسليم
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100">
              <span className="text-slate-400 block mb-1">اسم الطالب</span>
              <span className="font-semibold text-slate-800">ياسر محمد حازب مهدي الحاج</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100">
              <span className="text-slate-400 block mb-1">الجامعة</span>
              <span className="font-semibold text-slate-800">جامعة الرازي</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100">
              <span className="text-slate-400 block mb-1">المستودع</span>
              <span className="font-semibold text-indigo-600 truncate block">GitHub / Fullstack-Assignment</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100">
              <span className="text-slate-400 block mb-1">المنفذ المحلي</span>
              <span className="font-mono font-semibold text-slate-800">localhost:5173</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
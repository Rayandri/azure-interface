import type { LucideIcon } from "lucide-react"

interface PageHeaderProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

export function PageHeader({ icon: Icon, title, description, gradient }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mr-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h1 className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{title}</h1>
      </div>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto">{description}</p>
    </div>
  )
}

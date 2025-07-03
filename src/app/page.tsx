import { Logo } from "./logo";
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "lucide-react";
import GithubIcon from "./github-icon";
import BenefitsCarousel from "./benefits-carousel";
import ContactForm from "./contact-form";

const githubUrl = "https://github.com/coffee70/part_manager";

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "50+", label: "Features" }
];

const features = [
  {
    title: "Model Creation",
    description: "Create detailed digital models representing your physical manufacturing items with customizable fields and specifications.",
    icon: "📐"
  },
  {
    title: "Process Management",
    description: "Define and manage manufacturing processes with routers that track each step of production across locations.",
    icon: "⚙️"
  },
  {
    title: "Document Attachments",
    description: "Attach PDFs, specifications, and important documentation to both models and processes for comprehensive record-keeping.",
    icon: "📎"
  },
  {
    title: "Distributed Collaboration",
    description: "Enable team collaboration across multiple locations with real-time comments and updates on manufacturing progress.",
    icon: "🤝"
  },
  {
    title: "Priority Management",
    description: "Organize and prioritize manufacturing tasks to optimize production flow and meet deadlines efficiently.",
    icon: "🎯"
  },
  {
    title: "Custom Fields",
    description: "Administrators can add custom fields to models and routers, tailoring the system to your specific needs.",
    icon: "✏️"
  }
];

export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* App Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg text-gray-900 z-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <div className="w-full flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-4">
            {/* Section Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hosting" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Hosting</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Benefits</a>
            </div>

            {/* GitHub Icon - Always visible */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              aria-label="View source code on GitHub"
            >
              <GithubIcon />
            </a>

            {/* Contact Button - Always visible */}
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-8">
            <SparklesIcon className="w-4 h-4 mr-2 text-blue-600" />
            Modern Manufacturing Technology
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Manufacturing Pipeline
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Streamline your manufacturing processes with our comprehensive pipeline management platform.
            Create models, manage workflows, and collaborate across locations seamlessly.
          </p>

          <div className="flex justify-center items-center mb-16">
            <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center">
              Contact Us
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Options Section */}
      <section id="hosting" className="py-20 sm:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Deployment Options
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose how you want to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                deploy AENTX
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you prefer complete control or hassle-free management, we have the perfect solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Self-Hosted Option */}
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Self-Hosted
                </span>
              </div>

              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Control</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deploy AENTX on your own infrastructure with full access to the source code.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Open source code</strong> - Full transparency and customization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Complete data control</strong> - Your data never leaves your infrastructure
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">No vendor lock-in</strong> - Own your deployment forever
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Enhanced compliance</strong> - Meet any security requirement
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Custom integrations</strong> - Modify to fit your exact needs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">One-time setup cost</strong> - No recurring hosting fees
                  </span>
                </li>
              </ul>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                <GithubIcon />
                View on GitHub
              </a>
            </div>

            {/* Hosted Option */}
            <div className="relative bg-white rounded-2xl border-2 border-blue-500 p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Hosted Solution
                </span>
              </div>

              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hassle-Free Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Let us handle the infrastructure while you focus on your manufacturing operations.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Managed infrastructure</strong> - We handle all server management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Automatic updates</strong> - Always get the latest features and security
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">24/7 monitoring</strong> - Proactive issue detection and resolution
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Instant scalability</strong> - Grow your usage without infrastructure changes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Professional support</strong> - Direct access to our engineering team
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Quick deployment</strong> - Go live in minutes, not weeks
                  </span>
                </li>
              </ul>

              <a
                href="#contact"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                modern manufacturing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our pipeline management tool is designed to address the unique challenges of modern manufacturing companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <BenefitsCarousel />

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">AENTX</h3>
            <p className="text-lg text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
              Revolutionizing manufacturing pipeline management with cutting-edge technology that connects teams and streamlines processes.
            </p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-400">© 2024 AENTX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

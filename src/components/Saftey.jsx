import { Shield, Eye, Ban, Lightbulb, CheckCircle } from "lucide-react";
import { useState } from "react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Only real people—each profile is verified for authenticity.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Eye,
    title: "Your Privacy",
    description: "You control what to share, when, and with whom.",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: Ban,
    title: "Report & Block",
    description: "One tap to silence or report anyone crossing the line.",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Lightbulb,
    title: "Smart Dating Tips",
    description: "Quick insights to help you stay aware and confident.",
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

const categories = ["Awareness & Community", "Safety Practices", "Support & Reporting"];

const articles = [
  { title: "Community Guidelines", category: "Awareness & Community" },
  { title: "Respectful Behavior", category: "Awareness & Community" },
  { title: "Building Trust Online", category: "Awareness & Community" },
];

const Safety = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              We Protect What Matters,<br />
              <span className="text-rose-500">You</span>!
            </h1>
          </div>
          <div className="absolute inset-0 z-0 opacity-30"></div>
        </section>

        {/* Commitment Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Commitment<br />to Your Safety
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                  Trust begins with transparency. Our mission is to make Zlovr the safest place to meet someone special.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-16 h-16 text-rose-500" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20 bg-rose-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-12 leading-tight">
              Feel Safe While You Connect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay Informed Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Stay Informed, Date<br />Smarter
            </h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-rose-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div key={article.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-rose-100 rounded-2xl h-40 mb-4 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-rose-500 opacity-50" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {article.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-20 bg-rose-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Need <span className="text-rose-500">Help</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              If you ever feel uncomfortable or want to talk to our team, you can{" "}
              <a href="#" className="text-rose-500 hover:underline font-medium">report a concern</a>,{" "}
              <a href="#" className="text-rose-500 hover:underline font-medium">contact support</a>, or{" "}
              <a href="#" className="text-rose-500 hover:underline font-medium">browse safety resources</a> anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Safety;

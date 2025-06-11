import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { SocialMediaLinks } from "./SocialMediaLinks";

const Contact = () => {
  const instantMethods = [
    {
      name: "WhatsApp",
      icon: faWhatsapp,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      action: () =>
        window.open(
          "https://wa.me/201118415230?text=Hello%20Ahmed!%20I'd%20like%20to%20discuss%20a%20project%20with%20you.",
          "_blank"
        ),
      description: "Quick chat on WhatsApp",
      available: true,
    },
    {
      name: "Telegram",
      icon: faTelegram,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      action: () => window.open("https://t.me/ahmedKhaledp_0", "_blank"),
      description: "Message me on Telegram",
      available: true,
    },
    {
      name: "Email",
      icon: faEnvelope,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      action: () =>
        window.open(
          "mailto:ahmedkhaled8415230@gmail.com?subject=Project%20Inquiry&body=Hello%20Ahmed,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.",
          "_blank"
        ),
      description: "Send me an email",
      available: true,
    },
    {
      name: "Discord",
      icon: faDiscord,
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
      action: () =>
        window.open(
          " https://discordapp.com/channels/@me/978394183670841424/",
          "_blank"
        ),
      description: "Connect on Discord",
      available: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80  rounded-full px-4 py-2 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Let's Connect
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent">
              Get In
            </span>{" "}
            <span className="text-zinc-700 dark:text-zinc-300">Touch</span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate? Let's discuss your project and bring your
            ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/60 dark:bg-zinc-800/60  rounded-3xl p-8 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50">
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-5 w-5 text-white"
                  />
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="h-5 w-5 text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                      Email
                    </p>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">
                      3kuriboh3@gmail.com
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="h-5 w-5 text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                      Phone
                    </p>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">
                      +201118415230
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="h-5 w-5 text-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                      Location
                    </p>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">
                      Egypt, Minya, Matay
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/60 dark:bg-zinc-800/60  rounded-3xl p-8 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50">
              <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 text-center">
                Connect on Social Media
              </h4>
              <SocialMediaLinks />
            </div>
          </div>

          <div className="bg-white/60 dark:bg-zinc-800/60  rounded-3xl p-8 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 grid md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fadeIn">
            {instantMethods.map((method, index) => (
              <div
                key={index}
                onClick={method.action}
                className={`group relative bg-white/70 dark:bg-zinc-800/70  rounded-3xl p-8 shadow-md border border-zinc-200/50 dark:border-zinc-700/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 ${method.hoverColor}`}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <FontAwesomeIcon
                      icon={method.icon}
                      className="h-7 w-7 text-white"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2 group-hover:text-blue-600 transition-colors">
                    {method.name}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {method.description}
                  </p>

                  {method.available && (
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 dark:text-green-400 text-xs font-medium">
                        Online
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-600"></div>
            <span className="text-sm font-medium">
              Let's build something amazing together
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-zinc-300 dark:to-zinc-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

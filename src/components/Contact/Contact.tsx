import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCalendar,
  faComments,
  faVideo,
  faClock,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faTelegram,
  faDiscord,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaLinks } from "./SocialMediaLinks";
import InputField from "./InputField";

const Contact = () => {
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<"instant" | "form" | "schedule">("instant");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Communication methods data
  const instantMethods = [
    {
      name: "WhatsApp",
      icon: faWhatsapp,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      action: () => window.open("https://wa.me/201118415230?text=Hello%20Ahmed!%20I'd%20like%20to%20discuss%20a%20project%20with%20you.", "_blank"),
      description: "Quick chat on WhatsApp",
      available: true,
      badge: "Usually replies instantly"
    },
    {
      name: "Telegram",
      icon: faTelegram,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      action: () => window.open("https://t.me/AhmedKhaled_0", "_blank"),
      description: "Message me on Telegram",
      available: true,
      badge: "Secure messaging"
    },
    {
      name: "Email",
      icon: faEnvelope,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      action: () => window.open("mailto:ahmedkhaled8415230@gmail.com?subject=Project%20Inquiry&body=Hello%20Ahmed,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.", "_blank"),
      description: "Send me an email",
      available: true,
      badge: "Professional inquiries"
    },
    {
      name: "Discord",
      icon: faDiscord,
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
      action: () => window.open("https://discord.com/users/ahmedkhaled_0", "_blank"),
      description: "Connect on Discord",
      available: true,
      badge: "Developer community"
    }
  ];

  const scheduleMethods = [
    {
      name: "Video Call",
      icon: faVideo,
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
      action: () => window.open("https://calendly.com/ahmedkhaled8415230", "_blank"),
      description: "Schedule a video call",
      duration: "30-60 minutes",
      badge: "Free consultation"
    },
    {
      name: "Phone Call",
      icon: faPhone,
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
      action: () => window.open("tel:+201118415230", "_blank"),
      description: "Direct phone call",
      duration: "Quick chat",
      badge: "Available 9 AM - 9 PM"
    },
    {
      name: "Meeting",
      icon: faCalendar,
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
      action: () => window.open("https://meet.google.com/new", "_blank"),
      description: "Schedule a meeting",
      duration: "30-90 minutes",
      badge: "Project discussion"
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
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
            Ready to collaborate? Let's discuss your project and bring your ideas to life
          </p>
        </div>

        {/* Enhanced Notification */}
        {notification && (
          <div
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 mt-4 p-6 rounded-2xl shadow-2xl text-center z-50 w-11/12 max-w-md backdrop-blur-lg border ${
              notification.type === "success"
                ? "bg-emerald-100/90 dark:bg-emerald-900/90 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-700"
                : "bg-red-100/90 dark:bg-red-900/90 text-red-800 dark:text-red-200 border-red-200 dark:border-red-700"
            } animate-bounce`}
          >
            <div className="flex items-center gap-3 justify-center">
              <div className={`w-2 h-2 rounded-full ${
                notification.type === "success" ? "bg-emerald-500" : "bg-red-500"
              } animate-pulse`}></div>
              <span className="font-medium">{notification.message}</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50">
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-white" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Email</p>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">ahmedkhaled8415230@gmail.com</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Phone</p>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">+201118415230</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50/50 dark:hover:bg-zinc-700/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Location</p>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">Egypt, Minya, Matay</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50">
              <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 text-center">
                Connect on Social Media
              </h4>
              <SocialMediaLinks />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50">
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              Send a Message
            </h3>
            
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  const response = await fetch(
                    "https://formspree.io/f/xanyalpq",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(values),
                    }
                  );
                  if (response.ok) {
                    handleNotification("success", "Message sent successfully!");
                    resetForm();
                  } else {
                    handleNotification(
                      "error",
                      "Failed to send message. Please try again."
                    );
                  }
                } catch (error) {
                  console.error("Error:", error);
                  handleNotification(
                    "error",
                    "An error occurred. Please try again."
                  );
                }
              }}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <Form className="space-y-6">
                  <InputField
                    label="Name"
                    name="name"
                    placeholder="Enter your name"
                    isRequired={true}
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    isRequired={true}
                  />
                  <InputField
                    label="Message"
                    name="message"
                    placeholder="Tell me about your project..."
                    isRequired={true}
                    isTextarea={true}
                  />
                  <button
                    type="submit"
                    disabled={!dirty || !isValid || isSubmitting}
                    className={`group relative w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                      dirty && isValid
                        ? "bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 dark:hover:from-zinc-200 dark:hover:to-zinc-400 text-white dark:text-zinc-900 shadow-lg hover:shadow-xl hover:scale-105"
                        : "bg-zinc-300 dark:bg-zinc-600 text-zinc-500 dark:text-zinc-400 cursor-not-allowed"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </>
                      )}
                    </span>
                    {dirty && isValid && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-600"></div>
            <span className="text-sm font-medium">Let's build something amazing together</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-zinc-300 dark:to-zinc-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

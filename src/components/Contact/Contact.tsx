import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaLinks } from "./SocialMediaLinks";
import InputField from "./InputField";

const Contact = () => {
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

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

  return (
    <section id="contact" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

        {notification && (
          <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 rounded-md shadow-md text-center z-50 w-11/12 max-w-md ${
              notification.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {notification.message}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-5 w-5 text-primary"
                />
                <span>ahmedkhaled8415230@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-5 w-5 text-primary"
                />
                <span>+201118415230</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="h-5 w-5 text-primary"
                />
                <span>Egypt, Minya, Matay</span>
              </div>
            </div>
          </div>

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
              <Form className="space-y-4">
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
                  placeholder="Enter your message"
                  isRequired={true}
                />
                <button
                  type="submit"
                  disabled={!dirty || !isValid || isSubmitting}
                  className={`px-6 py-2 rounded-md w-full transition-colors ${
                    dirty && isValid
                      ? "bg-secondary text-primary font-bold hover:bg-primary hover:text-secondary"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <SocialMediaLinks />
      </div>
    </section>
  );
};

export default Contact;

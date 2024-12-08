import React from "react";
import PHONE from "../assets/phone.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 w-full bg-transparent min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-center text-4xl mb-12 text-white ">Get in Touch</h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="mb-8">
              <img
                src={PHONE}
                alt="Profile or Portfolio"
                className="mx-auto rounded-full w-48 h-48 object-cover text-white"
              />
            </div>

            <h3 className="text-2xl font-semibold text-center md:text-left text-white mb-6">
              Let’s Connect!
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I’m always open to exciting job opportunities, discussing
              projects, or collaborating on new ventures. If you’re looking for
              a Full Stack Developer to build or improve your application, feel
              free to reach out!
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div>
                <p className="font-semibold text-gray-300">Email:</p>
                <a
                  href="mailto:abineshwarv01@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  abineshwarv01@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="font-semibold text-gray-300">Phone:</p>
                <a
                  href="tel:+917904009858"
                  className="text-blue-400 hover:underline"
                >
                  +91 7904009858
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 rounded-xl shadow-lg backdrop-blur-md bg-black/40 bg-opacity-40 border border-stone-800">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">
              Send Me a Message
            </h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 bg-black/20 text-white border border-stone-50/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 bg-black/20 text-white border border-stone-50/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-4 bg-black/20 text-white border border-stone-50/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tell me about the job opportunity or project..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-black/20 text-white font-semibold border border-stone-50/30 rounded-md hover:bg-black/30 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abineshwarv" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AbineshwarV" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-200 hover:text-gray-400 transition duration-300"
            >
              <FaGithub />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/your-username" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-pink-500 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

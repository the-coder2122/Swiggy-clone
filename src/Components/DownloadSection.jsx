import React from 'react';
import { motion } from "framer-motion";
import { FaAndroid, FaApple } from "react-icons/fa";
import { Download } from "lucide-react";


export default function DownloadSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gray-800/70 border border-white/10 shadow-2xl"
        >
          {/* Accent ring */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Copy */}
            <div>
              <p className="uppercase tracking-widest text-emerald-300/90 text-xs mb-3 flex items-center gap-2">
                <Download className="h-4 w-4" />
                For better experience, download the Swiggy app now
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Get food, groceries & dineout deals
                <span className="block text-emerald-300 font-medium">faster on the app</span>
              </h2>
              <p className="mt-3 text-gray-300 text-sm md:text-base">
                Order in seconds, track in real-time, and unlock app‑only offers.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#android"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg"
                >
                  <FaAndroid className="h-5 w-5" />
                  <span>Download Android App</span>
                </a>
                <a
                  href="#ios"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gray-200 text-black rounded-lg"
                >
                  <FaApple className="h-5 w-5" />
                  <span>Download iOS App</span>
                </a>
              </div>

              {/* Tiny legal */}
              <p className="mt-3 text-xs text-gray-400">
                By downloading, you agree to our Terms & Privacy Policy.
              </p>
            </div>

            {/* Right: Mock phone frames */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-64 w-40 md:h-80 md:w-48">
                {/* Phone 1 */}
                <div className="absolute inset-0 translate-x-6 -translate-y-4 rotate-6">
                  <div className="h-full w-full rounded-[2.2rem] bg-gray-900 border border-white/10 shadow-xl p-3">
                    <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-sm text-gray-300">
                      Swiggy Android
                    </div>
                  </div>
                </div>
                {/* Phone 2 */}
                <div className="absolute inset-0 -translate-x-6 translate-y-6 -rotate-6">
                  <div className="h-full w-full rounded-[2.2rem] bg-gray-900 border border-white/10 shadow-xl p-3">
                    <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-sm text-gray-300">
                      Swiggy iOS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer text strip (optional) */}
        <div className="text-center mt-6 text-xs text-gray-400">
          Tip: Replace #android and #ios with your actual Play Store & App Store links.
        </div>
      </div>
    </section>
  )
}

"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-[#b3c0d8] max-w-xl mx-auto">Get a free consultation on which platforms and strategies fit your brand.</p>
      </section>
      <div className="max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">
        {submitted ? (
          <div className="md:col-span-2 text-center py-16">
            <div className="text-4xl mb-4">?</div>
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p className="text-[#b3c0d8]">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-[#8899b5]">Name</label>
                <input required className="w-full bg-[#111827] border border-[#1e2d45] rounded px-4 py-2 text-sm mt-1 text-white" />
              </div>
              <div>
                <label className="text-xs text-[#8899b5]">Email</label>
                <input type="email" required className="w-full bg-[#111827] border border-[#1e2d45] rounded px-4 py-2 text-sm mt-1 text-white" />
              </div>
              <div>
                <label className="text-xs text-[#8899b5]">Company</label>
                <input className="w-full bg-[#111827] border border-[#1e2d45] rounded px-4 py-2 text-sm mt-1 text-white" />
              </div>
              <div>
                <label className="text-xs text-[#8899b5]">Platforms of Interest</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["WeChat", "Douyin", "Baidu", "Xiaohongshu", "Bilibili", "Bing China"].map((p) => (
                    <label key={p} className="flex items-center gap-1.5 text-sm text-[#b3c0d8]">
                      <input type="checkbox" className="accent-[#c9a84c]" /> {p}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8899b5]">Message</label>
                <textarea rows={4} className="w-full bg-[#111827] border border-[#1e2d45] rounded px-4 py-2 text-sm mt-1 text-white" />
              </div>
              <button type="submit" className="bg-[#c9a84c] text-[#080c14] px-6 py-2 rounded-lg font-semibold hover:bg-[#e8c87a] transition">
                Send Message
              </button>
            </form>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Get in Touch</h3>
                <p className="text-sm text-[#b3c0d8]">?? tmg@tuyuesouxin.cn</p>
                <p className="text-sm text-[#b3c0d8]">?? Shanghai, China</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                <p className="text-sm text-[#b3c0d8]">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                <p className="text-sm text-[#b3c0d8]">Response within 24 hours</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

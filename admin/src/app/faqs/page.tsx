"use client";
import { useState } from "react";

const faqs = [
  { q: "What advertising platforms do you support?", a: "We support all major Chinese digital advertising platforms: WeChat, Douyin (TikTok China), Baidu, Xiaohongshu (RED), Bilibili, and Bing China. We are a one-stop partner for China market entry." },
  { q: "What is the minimum advertising budget?", a: "Minimum budgets vary by platform. WeChat Moments ads typically start at —50,000/campaign, Baidu SEM at —5,000/month, and Douyin feed ads at —10,000/campaign. We work with you to find the right starting point." },
  { q: "How long does it take to see results?", a: "Paid search (Baidu/Bing) can deliver leads within days. Social platforms (WeChat/Douyin/Xiaohongshu) typically need 2-4 weeks for optimization. We provide weekly reports from day one." },
  { q: "Do I need an ICP license to advertise in China?", a: "For most paid advertising, you do NOT need your own ICP license. Platforms like WeChat and Douyin allow overseas advertisers through agency accounts. We handle all compliance requirements." },
  { q: "What languages do you support?", a: "Our team operates in English, Chinese (Mandarin), Japanese, and Korean. All campaign management, reporting, and creative can be delivered in your preferred language." },
  { q: "How is pricing structured?", a: "We charge a management fee (typically 10-15% of ad spend) plus platform ad costs directly. No hidden fees. Custom packages available for larger accounts." },
  { q: "What kind of reporting do you provide?", a: "Weekly performance reports with KPIs, monthly strategic reviews, and real-time dashboard access. Reports include spend, impressions, clicks, conversions, and ROI analysis." },
  { q: "How do I get started?", a: "Contact us for a free 30-minute consultation. We'll analyze your market opportunity, recommend platforms, and provide a customized proposal within 48 hours." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-[#b3c0d8] max-w-xl mx-auto">Everything you need to know about advertising in China.</p>
      </section>
      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#111827] border border-[#1e2d45] rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-[#1a2332] transition">
              <span className="font-medium text-sm pr-4">{faq.q}</span>
              <span className="text-[#8899b5] text-lg flex-shrink-0">{open === i ? "?" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-sm text-[#b3c0d8] border-t border-[#1e2d45] pt-3">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "9092009518"; // Replace with your number

const projects = [
  {
    number: "01",
    category: "ARTICLE EDITING",
    title: "From Rough Draft to Professional Article",
    description:
      "A demonstration of how editing improves grammar, clarity, structure and readability.",
    type: "Editorial",
    color: "from-blue-600/30 to-indigo-950",
    original:
      "Our company provide best services and we are helping business to grow with our solution.",
    improved:
      "Our company provides professional services that help businesses grow through practical, effective solutions.",
    result: "Improved grammar, clarity and professional tone",
  },
  {
    number: "02",
    category: "SEO CONTENT",
    title: "A Better Blog Reading Experience",
    description:
      "A sample SEO-focused blog article with clear headings, useful information and a reader-friendly structure.",
    type: "Blog",
    color: "from-violet-600/30 to-slate-950",
    original: "Why businesses need a professional website",
    improved:
      "How a Professional Website Helps Small Businesses Build Trust and Reach More Customers",
    result: "Improved headline and content structure",
  },
  {
    number: "03",
    category: "BUSINESS COPYWRITING",
    title: "Product Copy That Communicates Value",
    description:
      "A sample product description rewritten to communicate benefits in a simple, engaging way.",
    type: "Copywriting",
    color: "from-cyan-600/30 to-slate-950",
    original: "This bottle is good and keeps water cold.",
    improved:
      "Enjoy refreshing drinks wherever you go with a reusable insulated bottle designed to keep your beverages cold for longer.",
    result: "Clearer product benefits and messaging",
  },
  {
    number: "04",
    category: "WEBSITE CONTENT",
    title: "A More Effective Business Homepage",
    description:
      "A demonstration of professional website messaging for a fictional digital business.",
    type: "Website",
    color: "from-emerald-600/30 to-slate-950",
    original: "We are a company doing many digital services.",
    improved:
      "Smart Digital Solutions for Businesses Ready to Grow.",
    result: "Stronger headline and positioning",
  },
];

const services = [
  {
    number: "01",
    title: "Article Editing",
    description:
      "Improve grammar, sentence structure, readability and tone while preserving your original meaning.",
    tags: ["Grammar", "Proofreading", "Clarity"],
  },
  {
    number: "02",
    title: "Blog & SEO Content",
    description:
      "Well-structured blog content designed for your audience and search intent.",
    tags: ["Blog writing", "SEO", "Research"],
  },
  {
    number: "03",
    title: "Business Copywriting",
    description:
      "Clear and engaging copy for products, services, websites and marketing campaigns.",
    tags: ["Product copy", "Website copy", "Emails"],
  },
  {
    number: "04",
    title: "Document Refinement",
    description:
      "Professional editing and formatting for business documents, reports and proposals.",
    tags: ["Reports", "Documents", "Formatting"],
  },
];

const steps = [
  ["01", "Share your content", "Send your document and explain what you need."],
  ["02", "Get a clear quotation", "We confirm scope, pricing and delivery time."],
  ["03", "Editing & quality review", "We refine your content and manually review the result."],
  ["04", "Receive your final work", "Get your polished document in your preferred format."],
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Article Editing");
  const [message, setMessage] = useState("");

  function submitEnquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = [
      "Hello Nexora Studio!",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Project details: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#" className="text-xl font-black tracking-[0.15em]">
            NEXORA<span className="text-blue-500">.</span>
            <span className="ml-2 text-xs font-medium tracking-[0.3em] text-slate-400">
              STUDIO
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
            <a href="#process" className="hover:text-blue-400">Process</a>
            <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
          >
            Let's Talk ↗
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative px-5 pb-24 pt-28 lg:px-8 lg:pb-36 lg:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              AI-POWERED. HUMAN-REVIEWED.
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Your ideas
              <br />
              deserve
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                better content.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              We transform rough drafts into clear, polished and professional
              content. Better writing, thoughtful editing and digital
              solutions for growing businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-blue-600 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Get a Free Sample Edit ↗
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/15 px-7 py-4 font-semibold text-slate-200 transition hover:bg-white/5"
              >
                Explore Our Work
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-7 text-sm text-slate-400">
              <span>✓ Clear communication</span>
              <span>✓ Human quality review</span>
              <span>✓ Agreed delivery timelines</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-3xl bg-blue-600/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#111B2D] p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-sm font-semibold">CONTENT STUDIO</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
                  Quality review
                </span>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500">
                    ORIGINAL DRAFT
                  </p>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-5 text-sm leading-7 text-slate-400">
                    Our company provide professional services and help
                    business to improve their growth.
                  </div>
                </div>

                <div className="flex justify-center text-blue-400">↓</div>

                <div>
                  <p className="mb-3 text-xs font-semibold tracking-widest text-blue-400">
                    REFINED CONTENT
                  </p>
                  <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-5 text-sm leading-7 text-white">
                    Our company provides professional services that help
                    businesses strengthen their operations and achieve
                    sustainable growth.
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-slate-400">
                  Editing demonstration
                </span>
                <span className="text-sm font-semibold text-emerald-400">
                  Refined ✓
                </span>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-4 rounded-xl border border-white/10 bg-[#17243B] px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-400">Our approach</p>
              <p className="mt-1 font-semibold">AI + Human Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-white/10 bg-[#0D1422] px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">Content first</p>
            <p className="mt-2 text-sm text-slate-400">Clear and purposeful writing</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Quality focused</p>
            <p className="mt-2 text-sm text-slate-400">Careful human review</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Client focused</p>
            <p className="mt-2 text-sm text-slate-400">Solutions built around your needs</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
              WHAT WE DO
            </p>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Content solutions
              <br />
              built around you.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              From a single article to your complete business content,
              we help make every word work harder.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-[#101827] p-8 transition hover:-translate-y-1 hover:border-blue-400/40"
              >
                <span className="text-sm text-blue-400">{item.number}</span>
                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-24 bg-[#0D1422] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
                SELECTED WORK
              </p>
              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Our creative portfolio.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                A look at how thoughtful editing and content strategy can
                improve the way businesses communicate.
              </p>
            </div>
            <span className="text-sm text-slate-500">
              Demonstration projects · 2026
            </span>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#111B2D]"
              >
                <div className={`bg-gradient-to-br ${project.color} p-7 sm:p-10`}>
                  <div className="flex justify-between text-xs font-semibold tracking-widest text-blue-200">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>

                  <div className="my-9 rounded-xl border border-white/10 bg-[#080D18]/80 p-6 backdrop-blur">
                    <p className="text-xs tracking-widest text-slate-500">
                      CONTENT PREVIEW
                    </p>
                    <p className="mt-5 text-2xl font-bold leading-snug">
                      {project.improved}
                    </p>
                    <div className="mt-6 h-1 w-16 rounded bg-blue-400" />
                    <p className="mt-4 text-xs text-slate-400">
                      {project.type} · Nexora Studio
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 rounded-xl bg-emerald-400/5 p-4">
                    <p className="text-xs text-emerald-400">
                      IMPROVEMENT DEMONSTRATED
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      {project.result}
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-slate-500">
                    Self-created demonstration sample, not client work.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
            HOW WE WORK
          </p>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Simple. Transparent. Effective.
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <div key={number} className="border-t border-white/15 pt-6">
                <span className="text-3xl font-bold text-blue-400">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 bg-[#0D1422] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
              SIMPLE PRICING
            </p>
            <h2 className="mt-5 text-4xl font-bold">
              Start with what you need.
            </h2>
            <p className="mt-4 text-slate-400">
              Clear starting prices. Final quotations depend on word count,
              complexity and project requirements.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                name: "Proofreading",
                price: "₹499",
                detail: "Starting price",
                features: ["Grammar correction", "Spelling review", "Basic proofreading"],
              },
              {
                name: "Article Editing",
                price: "₹799",
                detail: "Up to 1,000 words",
                features: ["Grammar and clarity", "Sentence improvement", "Tone refinement", "One revision"],
                featured: true,
              },
              {
                name: "SEO Blog Content",
                price: "₹1,499",
                detail: "Starting price",
                features: ["Content structure", "SEO-focused writing", "Heading optimization", "Quality review"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-white/10 bg-[#111B2D]"
                }`}
              >
                {plan.featured && (
                  <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold">
                    POPULAR
                  </span>
                )}
                <h3 className="mt-5 text-xl font-bold">{plan.name}</h3>
                <p className="mt-5 text-4xl font-bold">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-400">{plan.detail}</p>
                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ &nbsp; {feature}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-9 block rounded-full bg-white px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-blue-100"
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
            QUESTIONS
          </p>
          <h2 className="mt-5 text-4xl font-bold">
            Frequently asked questions.
          </h2>

          <div className="mt-10 space-y-6">
            {[
              ["Do you use AI for editing?", "We use AI-assisted tools where appropriate, combined with human review to check meaning, accuracy, readability and quality."],
              ["How do I get a quotation?", "Send your content, word count and requirements through our enquiry form. We will review the scope and provide a quotation."],
              ["How long does editing take?", "Delivery depends on document length and complexity. We confirm a realistic timeline before accepting the project."],
              ["Can I request revisions?", "Yes. Revision scope and the number of included rounds are agreed before the project starts."],
            ].map(([question, answer]) => (
              <details key={question} className="group border-b border-white/10 pb-6">
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {question}
                  <span className="float-right text-blue-400">+</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 bg-[#0D1422] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400">
              LET'S WORK TOGETHER
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Have a project
              <br />
              in mind?
            </h2>
            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Tell us what you are working on. Share your requirements and
              get a quotation for your project.
            </p>
            <div className="mt-10 space-y-5 text-sm text-slate-300">
              <p>✉ &nbsp; Professional project enquiries</p>
              <p>◷ &nbsp; Response within one business day (target)</p>
              <p>↗ &nbsp; Remote projects welcome</p>
            </div>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="space-y-5 rounded-2xl border border-white/10 bg-[#111B2D] p-7 sm:p-9"
          >
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Your name
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-[#080D18] px-4 py-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Email address
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#080D18] px-4 py-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                What service do you need?
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#080D18] px-4 py-4 text-white outline-none focus:border-blue-500"
              >
                <option>Article Editing</option>
                <option>Proofreading</option>
                <option>Blog & SEO Content</option>
                <option>Business Copywriting</option>
                <option>Website Content</option>
                <option>Other Digital Projects</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Project details
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#080D18] px-4 py-4 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
            >
              Send Enquiry via WhatsApp ↗
            </button>
            <p className="text-center text-xs text-slate-500">
              Your enquiry details will be opened in WhatsApp for you to send.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-black tracking-[0.15em]">
              NEXORA<span className="text-blue-500">.</span> STUDIO
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Ideas. Refined. Delivered.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Nexora Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

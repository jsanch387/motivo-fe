// app/(landing)/(legal)/privacy/page.tsx
"use client";

export default function Privacy() {
  return (
    <div className="mx-auto px-4 sm:px-6 py-12 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 17, 2025</p>

      {/* 1. Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="text-gray-300">
          Motivo (“we”, “us”, or “our”) is a Texas‑based sole proprietorship
          providing a one‑time purchase SaaS to help you launch your
          side‑hustle. This Privacy Policy explains how we collect, use, and
          protect your information when you use our services in the United
          States.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Account Information:</strong> Your email address and
            password when you sign up via Supabase.
          </li>
          <li>
            <strong>Onboarding Details:</strong> Service type and location (ZIP
            code or city) to tailor business name, pricing, and tool
            suggestions.
          </li>
          <li>
            <strong>Generated Assets:</strong> Your selected logo URL, business
            name, colors, services, tools, and flyer data.
          </li>
          <li>
            <strong>Cookies & Session Data:</strong> Authentication cookies and
            session tokens to keep you logged in securely.
          </li>
          <li>
            <strong>Analytics & Usage Metrics:</strong> Basic, anonymous usage
            statistics and performance data.
          </li>
        </ul>
      </section>

      {/* 3. How We Use Your Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            To provide and improve our onboarding flows and AI suggestions.
          </li>
          <li>
            To process payments securely via Stripe (we only send your user ID).
          </li>
          <li>To maintain your account and keep you logged in via Supabase.</li>
          <li>
            To analyze usage patterns and monitor application performance.
          </li>
        </ul>
      </section>

      {/* 4. Data Sharing and Disclosure */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          4. Data Sharing & Disclosure
        </h2>
        <p className="text-gray-300 mb-4">
          We do not sell your personal information. We share only as needed:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Stripe:</strong> For payment processing—only your user ID.
          </li>
          <li>
            <strong>OpenAI:</strong> To generate brand assets (we send your
            onboarding prompts, not PII).
          </li>
          <li>
            <strong>Supabase:</strong> To store and retrieve your account &
            onboarding data.
          </li>
        </ul>
      </section>

      {/* 5. Cookies & Tracking */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Cookies & Tracking</h2>
        <p className="text-gray-300">
          We use essential cookies for authentication (Supabase) and optional
          analytics cookies to understand usage. You can disable non‑essential
          cookies, but some features may not work.
        </p>
      </section>

      {/* 6. Data Retention & Your Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          6. Data Retention & Your Rights
        </h2>
        <p className="text-gray-300 mb-4">
          We retain your data as long as your account is active. You may
          request:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Access:</strong> Export your data in a machine‑readable
            format.
          </li>
          <li>
            <strong>Correction:</strong> Update or rectify any inaccuracies.
          </li>
          <li>
            <strong>Deletion:</strong> Permanently remove your data from our
            systems.
          </li>
        </ul>
      </section>

      {/* 7. Security Measures */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Security Measures</h2>
        <p className="text-gray-300">
          We protect your information with industry‑standard safeguards,
          including HTTPS/TLS in transit, secure endpoints, and access controls.
        </p>
      </section>

      {/* 8. Children’s Privacy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Children’s Privacy</h2>
        <p className="text-gray-300">
          Motivo is intended for users 13 years or older (ideally 18+ for
          business use). We do not knowingly collect data from anyone under 13.
        </p>
      </section>

      {/* 9. International Visitors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          9. International Visitors
        </h2>
        <p className="text-gray-300">
          Our service is currently available only in the United States and
          governed by Texas law.
        </p>
      </section>

      {/* 10. Changes to This Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          10. Changes to This Policy
        </h2>
        <p className="text-gray-300">
          We may update this Privacy Policy when needed. We’ll post the new date
          at the top—please review it periodically.
        </p>
      </section>

      {/* 11. Contact Us */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
        <p className="text-gray-300">
          If you have any questions or requests, email us at{" "}
          <a
            href="mailto:hello@motivo.app"
            className="text-blue-400 hover:underline"
          >
            hello@motivo.app
          </a>
          .
        </p>
      </section>
    </div>
  );
}

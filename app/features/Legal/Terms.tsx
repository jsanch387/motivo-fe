// app/components/legal/Terms.tsx
"use client";

export default function Terms() {
  return (
    <div className="mx-auto px-4 sm:px-6 py-12 max-w-4xl">
      <article className="space-y-8 text-gray-900 dark:text-gray-100">
        {/* Title */}
        <header>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: April 14, 2025
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Overview</h2>
          <p>
            Motivo is a one‑time purchase tool designed to help users generate a
            brand kit that includes business names, logos, color palettes,
            service recommendations, tool suggestions, and a shareable flyer.
            All content is AI‑generated and is delivered digitally.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use Motivo. By using our
            platform, you confirm that you meet this requirement and agree to
            abide by these Terms.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p>
            To use Motivo, you must create an account with a valid email and
            password. You are responsible for maintaining the confidentiality of
            your account credentials.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. What You Get</h2>
          <p>
            Upon completing payment, you&apos;ll receive full access to your
            personalized brand kit. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Business name suggestions</li>
            <li>Logo</li>
            <li>Brand colors</li>
            <li>Service & pricing ideas</li>
            <li>Tool recommendations</li>
            <li>A launch flyer</li>
          </ul>
          <p>
            Parts of the kit are previewable before payment. Once purchased,
            your kit is unlocked in full.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Ownership & Usage</h2>
          <p>
            The assets generated for you are yours to use for personal or
            commercial purposes. All content is generated via OpenAI and is not
            exclusive or trademarked.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Payments</h2>
          <p>
            Motivo operates on a one‑time payment model. Payments are securely
            processed using Stripe. Due to the nature of digital delivery and
            upfront visibility,
            <strong> all sales are final and no refunds</strong> are provided.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            7. No User‑Generated Content
          </h2>
          <p>
            You may not upload your own files, logos, or content to Motivo. All
            generated materials are produced solely through AI and your
            onboarding input.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Changes to the Service</h2>
          <p>
            We may update or change features without notice. While we aim for
            reliability and clarity, we do not guarantee uptime or error‑free
            performance.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p>
            We are not liable for any damages or losses resulting from your use
            of Motivo. Our tools are designed to assist, not replace
            professional services such as legal or business advice.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Texas, United
            States.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:hello@motivo.app"
              className="text-blue-600 hover:underline"
            >
              hello@motivo.app
            </a>
            .
          </p>
        </section>
      </article>
    </div>
  );
}

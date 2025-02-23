export default function FAQs() {
  return (
    <section className="w-full max-w-xl my-6 flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-center">FAQs</h2>
      <div className="space-y-4">
        <FAQ
          question="What is Reel or Read?"
          answer="A platform that helps users compare books and their movie adaptations."
        />
        <FAQ
          question="Who is this platform for?"
          answer="Reel or Read is designed for book club organizers, teachers, content creators, and anyone who wants to analyze book-to-movie adaptations efficiently."
        />
        <FAQ
          question="Is there a premium version?"
          answer="Yes! Our premium version includes discussion guides, deeper analytics, and data export features."
        />
      </div>
    </section>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">{question}</h2>

        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <p className="mt-4 px-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
  );
}

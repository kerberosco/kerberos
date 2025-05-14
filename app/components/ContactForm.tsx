import { useState } from "react";

interface FormData {
  name: string;
  position: string;
  phone: string;
  company: string;
  industry: string;
  inquiry: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    position: "",
    phone: "",
    company: "",
    industry: "",
    inquiry: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formUrl = "https://docs.google.com/forms/d/e/form_id/formResponse";

      const formBody = new URLSearchParams({
        "entry.?": formData.name, // 담당자 이름
        "entry.?": formData.position, // 직책
        "entry.?": formData.phone, // 연락처
        "entry.?": formData.company, // 회사명
        "entry.?": formData.industry, // 산업군
        "entry.?": formData.inquiry, // 문의내용
      });
      // 각각의 input의 entry.id를 찾아서 추가

      // CORS 우회를 위한 임시 iframe 생성 및 제출
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const form = document.createElement("form");
      form.method = "POST";
      form.action = formUrl;
      form.target = "hidden_iframe";

      // 폼 데이터를 hidden input으로 추가
      Object.entries(Object.fromEntries(formBody)).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      });

      iframe.name = "hidden_iframe";
      document.body.appendChild(form);
      form.submit();

      // cleanup
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      setSubmitStatus("success");
      setFormData({
        name: "",
        position: "",
        phone: "",
        company: "",
        industry: "",
        inquiry: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-white text-24 sm:text-28 font-bold mb-8 text-center">
        문의하기
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            담당자 이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
          />
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            직책
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          연락처
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          회사명
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
        />
      </div>

      <div>
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          산업군
        </label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
        />
      </div>

      <div>
        <label
          htmlFor="inquiry"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          문의내용
        </label>
        <textarea
          id="inquiry"
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "제출 중..." : "문의하기"}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-black/80 fixed inset-0" />
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 relative animate-slide-up">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-success-circle">
                <svg
                  className="w-8 h-8 text-primary animate-success-check"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                문의가 성공적으로 전송되었습니다
              </h3>
              <p className="text-gray-400 mb-6">
                빠른 시일 내에 답변 드리도록 하겠습니다
              </p>
              <button
                onClick={() => {
                  setSubmitStatus("idle");
                  if (typeof window !== "undefined") {
                    const event = new Event("closeContactModal");
                    window.dispatchEvent(event);
                  }
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="text-red-500 text-center p-4 bg-red-500/10 rounded-lg animate-shake">
          문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.
        </div>
      )}
    </form>
  );
}

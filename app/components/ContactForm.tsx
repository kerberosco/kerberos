import { useState } from "react";

interface FormData {
  name: string;
  position: string;
  phone: string;
  company: string;
  industry: string;
  inquiry: string;
}

interface FormErrors {
  name?: string;
  position?: string;
  phone?: string;
  company?: string;
  industry?: string;
  inquiry?: string;
}

interface ContactFormProps {
  onClose?: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    position: "",
    phone: "",
    company: "",
    industry: "",
    inquiry: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // 이름 검증 (1-5글자)
    if (formData.name.length < 1 || formData.name.length > 5) {
      errors.name = "이름은 1-5글자 사이로 입력해주세요";
    }

    // 직책 검증 (최소 1글자)
    if (formData.position.length < 1) {
      errors.position = "직책을 입력해주세요";
    }

    // 회사명 검증 (최소 1글자)
    if (formData.company.length < 1) {
      errors.company = "회사명을 입력해주세요";
    }

    // 산업군 검증 (최소 1글자)
    if (formData.industry.length < 1) {
      errors.industry = "산업군을 입력해주세요";
    }

    // 문의내용 검증 (1-40글자)
    if (formData.inquiry.length < 1 || formData.inquiry.length > 40) {
      errors.inquiry = "문의내용은 1-40글자 사이로 입력해주세요";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 입력 시 해당 필드의 에러 메시지 제거
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
      if (!formUrl) {
        throw new Error("Google Form URL이 설정되지 않았습니다.");
      }

      // iframe 생성
      const iframe = document.createElement("iframe");
      iframe.setAttribute("name", "hidden_iframe");
      iframe.setAttribute("id", "hidden_iframe");
      iframe.setAttribute("style", "display: none;");
      document.body.appendChild(iframe);

      // 폼 생성
      const form = document.createElement("form");
      form.setAttribute("action", formUrl);
      form.setAttribute("method", "post");
      form.setAttribute("target", "hidden_iframe");

      // 폼 데이터 추가
      const entries = [
        [process.env.NEXT_PUBLIC_ENTRY_NAME, formData.name],
        [process.env.NEXT_PUBLIC_ENTRY_POSITION, formData.position],
        [process.env.NEXT_PUBLIC_ENTRY_PHONE, formData.phone],
        [process.env.NEXT_PUBLIC_ENTRY_COMPANY, formData.company],
        [process.env.NEXT_PUBLIC_ENTRY_INDUSTRY, formData.industry],
        [process.env.NEXT_PUBLIC_ENTRY_INQUIRY, formData.inquiry],
      ] as [string | undefined, string][];

      // 환경 변수가 모두 설정되어 있는지 확인
      for (const [key, value] of entries) {
        if (!key) {
          throw new Error("필수 환경 변수가 설정되지 않았습니다.");
        }
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", key);
        input.setAttribute("value", value);
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();

      // cleanup
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 500);

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
            담당자 이름 <span className="text-red-500 text-24">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white ${
              formErrors.name ? "border-red-500" : "border-white/10"
            }`}
          />
          {formErrors.name && (
            <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            직책 <span className="text-red-500 text-24">*</span>
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white ${
              formErrors.position ? "border-red-500" : "border-white/10"
            }`}
          />
          {formErrors.position && (
            <p className="mt-1 text-sm text-red-500">{formErrors.position}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          연락처 <span className="text-red-500 text-24">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white ${
            formErrors.phone ? "border-red-500" : "border-white/10"
          }`}
        />
        {formErrors.phone && (
          <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          회사명 <span className="text-red-500 text-24">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white ${
            formErrors.company ? "border-red-500" : "border-white/10"
          }`}
        />
        {formErrors.company && (
          <p className="mt-1 text-sm text-red-500">{formErrors.company}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          산업군 <span className="text-red-500 text-24">*</span>
        </label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white ${
            formErrors.industry ? "border-red-500" : "border-white/10"
          }`}
        />
        {formErrors.industry && (
          <p className="mt-1 text-sm text-red-500">{formErrors.industry}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="inquiry"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          문의내용 <span className="text-red-500 text-24">*</span>
          <span className="text-gray-400 text-sm ml-2">(40자 내외)</span>
        </label>
        <textarea
          id="inquiry"
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          required
          rows={4}
          className={`w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none ${
            formErrors.inquiry ? "border-red-500" : "border-white/10"
          }`}
        />
        {formErrors.inquiry && (
          <p className="mt-1 text-sm text-red-500">{formErrors.inquiry}</p>
        )}
      </div>

      <div className="flex justify-center flex-col items-center space-y-2">
        <p className="text-gray-400 text-sm mb-2">
          <span className="text-red-500">*</span> 표시는 필수 입력 항목입니다
        </p>
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
                  onClose?.();
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

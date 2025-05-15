export default function PrivacyPolicy() {
  return (
    <div className="text-white space-y-6 max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
        개인정보처리방침
      </h1>

      <div className="space-y-4 sm:space-y-6">
        <p className="text-sm sm:text-base md:text-lg text-gray-300">
          (주)켈베로스(이하 &quot;회사&quot;)는 개인정보보호법에 따라 정보주체의
          동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며, 관계 법령 및
          개인정보 보호 규정을 준수하고 있습니다.
        </p>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-6">
            1. 개인정보 수집
          </h2>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg md:text-xl font-medium">
              수집하는 개인정보 항목
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base md:text-lg text-gray-300">
              <li>담당자 성함</li>
              <li>직책</li>
              <li>연락처</li>
              <li>회사명</li>
              <li>산업군</li>
              <li>문의내용</li>
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg md:text-xl font-medium">
              개인정보 수집 목적
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base md:text-lg text-gray-300">
              <li>문의사항 응대 및 상담</li>
              <li>서비스 제공을 위한 연락 및 의사소통</li>
              <li>고객 맞춤 서비스 제공</li>
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg md:text-xl font-medium">
              개인정보의 보유 및 이용기간
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              수집된 개인정보는 문의 처리 완료 후 3년간 보관되며, 이후 즉시
              파기됩니다. 다만, 관계 법령에 따라 보존할 필요가 있는 경우 해당
              법령에서 정한 기간 동안 보관됩니다.
            </p>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-6">
            2. 개인정보의 파기
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            회사는 개인정보 보유기간(3년)의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-6">
            3. 정보주체의 권리·의무 및 행사방법
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지
            요구 등의 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base md:text-lg text-gray-300">
            <li>
              개인정보 처리담당자에게 서면, 전화 또는 이메일로 연락하여 요청
            </li>
            <li>회사는 정보주체의 요청에 대해 지체 없이 조치하겠습니다.</li>
          </ul>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-6">
            4. 개인정보의 안전성 확보조치
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base md:text-lg text-gray-300">
            <li>관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육</li>
            <li>
              기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템
              설치, 고유식별정보 등의 암호화
            </li>
            <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

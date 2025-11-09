import Link from "next/link";

export default function BackendInterviewGuidePost() {
  return (
    <>
      {/* 인트로 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🏗️ 백엔드 면접 완전 정복 가이드
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          백엔드 면접은 서버 아키텍처 설계, 데이터베이스, 네트워크, 보안, DevOps까지 폭넓게 질문합니다.
          이 포스트는 <strong className="text-blue-600 dark:text-blue-400">핵심 개념 정리 → 도메인별 질문 → 사례 기반 답변</strong>으로 구성하여
          실무 경험이 많지 않아도 자신 있게 설명할 수 있도록 도와줍니다.
        </p>
        <div className="rounded-lg bg-emerald-50 p-6 dark:bg-emerald-900/20">
          <p className="text-lg font-semibold text-emerald-900 dark:text-emerald-200">
            ✅ 목표: 확장 가능한 서버를 설계하고, 트래픽 폭주 상황에 대비하며, 안전한 API를 제공하는 방법을 말할 수 있도록!
          </p>
        </div>
      </section>

      {/* 로드맵 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🧭 4주 집중 로드맵
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              week: "1주차",
              focus: "핵심 이론",
              items: [
                "HTTP, REST, RPC 비교",
                "데이터베이스 트랜잭션 & 인덱스",
                "운영체제: 프로세스, 스레드, 스케줄링",
              ],
            },
            {
              week: "2주차",
              focus: "아키텍처",
              items: [
                "모놀리식 vs 마이크로서비스",
                "계층형 아키텍처 설계",
                "메시지 큐, 캐시 도입 이유",
              ],
            },
            {
              week: "3주차",
              focus: "확장성과 안정성",
              items: [
                "로드 밸런싱 전략",
                "데이터베이스 샤딩/리플리케이션",
                "장애 대응 시나리오 연습",
              ],
            },
            {
              week: "4주차",
              focus: "실전 대비",
              items: [
                "시스템 디자인 문제 풀이",
                "실무 사례 기반 질문 정리",
                "모의 면접 & 화이트보드 연습",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.week}
              className="rounded-lg border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-800/40 dark:bg-emerald-900/20"
            >
              <h3 className="mb-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                {plan.week}
              </h3>
              <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {plan.focus}
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-emerald-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 핵심 영역 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🧱 백엔드 핵심 영역 6가지
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "네트워크",
              emoji: "🌐",
              points: [
                "HTTP/HTTPS, TCP/UDP",
                "3-way handshake, keep-alive",
                "API 보안 (CORS, 인증)"
              ],
            },
            {
              title: "데이터베이스",
              emoji: "💾",
              points: [
                "정규화/반정규화",
                "인덱스 동작 원리",
                "트랜잭션 ACID, 격리 수준",
              ],
            },
            {
              title: "서버 아키텍처",
              emoji: "🏛️",
              points: [
                "MVC, 헥사고날 아키텍처",
                "모놀리식 vs MSA",
                "API 게이트웨이 역할",
              ],
            },
            {
              title: "캐시 & 메시징",
              emoji: "⚡",
              points: [
                "Redis, Memcached 비교",
                "Kafka, RabbitMQ 용도",
                "캐시 무효화 전략",
              ],
            },
            {
              title: "테스트 & 품질",
              emoji: "🧪",
              points: [
                "단위/통합/시스템 테스트",
                "테스트 자동화 파이프라인",
                "로깅 & 모니터링",
              ],
            },
            {
              title: "DevOps",
              emoji: "🚀",
              points: [
                "CI/CD 구성",
                "컨테이너 & 오케스트레이션",
                "블루-그린/카나리 배포",
              ],
            },
          ].map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-3 text-3xl">{area.emoji}</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {area.title}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {area.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 text-gray-400">▪</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 면접 질문 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🗂️ 도메인별 예상 질문
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "API & 네트워크",
              questions: [
                "RESTful API를 설계할 때 고려해야 할 사항은?",
                "비동기 요청 수가 많아지면 서버는 어떻게 대응해야 하나요?",
                "HTTPS가 동작하는 과정을 설명해보세요.",
              ],
            },
            {
              title: "데이터베이스",
              questions: [
                "인덱스가 어떻게 작동하는지 B-Tree를 기준으로 설명해보세요.",
                "트랜잭션 격리 수준(Read Uncommitted ~ Serializable)을 비교해주세요.",
                "샤딩과 리플리케이션의 차이점은 무엇인가요?",
              ],
            },
            {
              title: "확장성 & 성능",
              questions: [
                "트래픽이 10배 증가하면 어떤 방향으로 시스템을 확장할 건가요?",
                "캐시 도입 시 주의해야 할 점은?",
                "CQRS 패턴을 언제 적용하면 좋나요?",
              ],
            },
            {
              title: "보안",
              questions: [
                "JWT와 세션 기반 인증의 차이는?",
                "SQL Injection 방지 방법은?",
                "TLS/SSL 핸드셰이크를 간단히 설명해보세요.",
              ],
            },
            {
              title: "DevOps & 운영",
              questions: [
                "CI/CD 파이프라인을 구축해본 경험이 있나요?",
                "장애 대응 프로세스를 어떻게 설계했나요?",
                "로그 수집과 모니터링은 어떤 도구를 사용했나요?",
              ],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {category.questions.map((question) => (
                  <li key={question}>❓ {question}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 답변 전략 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🧠 답변을 설계하는 3단계
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "원리 설명",
              points: [
                "기본 동작 원리를 아이에게 설명하듯 쉽게 풀어보기",
                "도식이나 비유 사용 (예: 메시지 큐 = 우체국 택배함)",
              ],
            },
            {
              title: "실무 경험 연결",
              points: [
                "프로젝트에서 겪은 상황 → 목표 → 해결 과정 → 결과",
                "어떤 지표가 개선되었는지 수치로 말하기",
              ],
            },
            {
              title: "한계 & 대안 제시",
              points: [
                "선택한 기술의 제약과 해결책",
                "다른 접근 방법과 비교, 트레이드오프 설명",
              ],
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40"
            >
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {step.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 시스템 디자인 예시 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🏢 시스템 디자인 예시 주제
        </h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          면접에서 자주 나오는 시나리오를 연습해보세요. 각 단계마다 요구 사항 → 설계 → 트레이드오프를 정리합니다.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "URL 단축 서비스 설계",
              steps: [
                "고유 키 생성 전략 (해시, Base62)",
                "읽기/쓰기 비율에 따른 저장 구조",
                "캐시 & 만료 정책",
              ],
            },
            {
              title: "실시간 채팅 시스템",
              steps: [
                "WebSocket 서버 구성",
                "메시지 저장 & 재전송 전략",
                "Scale out (샤딩, 파티셔닝)",
              ],
            },
            {
              title: "뉴스 피드 서비스",
              steps: [
                "쓰기-많음 vs 읽기-많음 고려",
                "타임라인 정렬 방식",
                "추천 알고리즘 간단 소개",
              ],
            },
            {
              title: "전자상거래 결제 시스템",
              steps: [
                "주문 상태 흐름 설계",
                "재고 관리 & 동시성 제어",
                "결제 실패 시 롤백 전략",
              ],
            },
          ].map((topic) => (
            <div
              key={topic.title}
              className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                {topic.title}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {topic.steps.map((step) => (
                  <li key={step}>• {step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 장애 대응 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🚨 장애 대응 및 운영 능력 어필하기
        </h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          면접관은 안정적인 운영을 얼마나 고려하는지 확인합니다. 아래 질문에 답할 수 있도록 사례를 준비해보세요.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              장애 대응 체크리스트
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 알람 → 담당자 호출 → 임시 조치 → 근본 원인 분석</li>
              <li>• SLA, SLO, SLI 개념 이해</li>
              <li>• 포스트모텀 작성 경험</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/40">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              로그 & 모니터링 도구
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Prometheus + Grafana: 지표 시각화</li>
              <li>• ELK Stack, Loki: 로그 수집</li>
              <li>• Sentry, Datadog: 에러 추적</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 자료 추천 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          📚 추천 학습 자료
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              필독서 & 문서
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 가상 면접 사례로 배우는 대규모 시스템 설계</li>
              <li>• Designing Data-Intensive Applications</li>
              <li>• AWS Architecture Center, Google SRE Handbook</li>
              <li>• 카카오 기술 블로그, 우아한형제들 기술 블로그</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              실습 & 문제
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• LeetCode System Design, Grokking System Design</li>
              <li>• 백준: 네트워크 플로우, 그리디 심화</li>
              <li>• 해커랭크 SQL/데이터베이스 문제</li>
              <li>• Kubernetes Hands-on Labs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          🙋 자주 묻는 질문
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "클라우드 경험이 꼭 필요할까요?",
              answer:
                "필수는 아니지만, 최소한 AWS EC2, S3, RDS 정도는 개념을 알고 있으면 좋습니다. 비용, 확장성 이야기까지 준비하세요.",
            },
            {
              question: "면접에서 실무 경험이 부족하면 어떻게 하나요?",
              answer:
                "사이드 프로젝트나 토이 프로젝트를 아키텍처 관점에서 깊이 있게 설명하세요. 로그/모니터링, 배포 전략 등 운영 요소를 추가하면 좋습니다.",
            },
            {
              question: "어떤 언어로 답변해야 하나요?",
              answer:
                "주 언어(Java, Spring / Node.js / Go 등)에 따라 답변하세요. 다만 언어에 관계없이 기본 원리를 강조하세요.",
            },
            {
              question: "시스템 디자인 시간이 부족하면?",
              answer:
                "요구사항 정리 → 개략적 설계 → 핵심 컴포넌트 설명 → 병목 & 대안 제시 순으로 빠르게 구조화하세요.",
            },
          ].map((item) => (
            <details
              key={item.question}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/40"
            >
              <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-white">
                {item.question}
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 마무리 CTA */}
      <section className="rounded-lg bg-linear-to-r from-emerald-500 to-teal-600 p-8 text-white shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">🔥 면접은 기술 + 커뮤니케이션입니다!</h2>
        <p className="mb-4 text-lg opacity-90">
          구조적인 사고와 명확한 설명을 반복해서 연습해보세요. 여러분이 설계한 시스템과 경험을 논리적으로 전달하면 면접관에게 깊은 인상을 남길 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/posts/coding-test-roadmap"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-emerald-600 transition-transform hover:scale-105"
          >
            코딩 테스트 준비하기 →
          </Link>
          <Link
            href="/posts/frontend-interview-guide"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-emerald-600 transition-transform hover:scale-105"
          >
            프론트엔드 면접 가이드 →
          </Link>
        </div>
      </section>
    </>
  );
}

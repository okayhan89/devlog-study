export default function HttpVsHttpsPost() {
  return (
    <>
      {/* HTTP vs HTTPS 쉬운 설명 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔒 HTTP와 HTTPS, 무슨 차이일까요?
        </h2>

        <div className="mb-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
          <p className="text-xl font-semibold text-blue-900 dark:text-blue-300">
            HTTP = 엽서 ✉️ | HTTPS = 봉투에 넣은 편지 📨🔐
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          여러분이 친구에게 편지를 보낸다고 생각해볼까요?
          <strong className="text-blue-600 dark:text-blue-400"> 엽서</strong>로
          보내면 배달하는 사람이나 다른 사람들이 내용을 볼 수 있어요. 하지만
          <strong className="text-green-600 dark:text-green-400">
            {" "}
            봉투에 넣어서
          </strong>{" "}
          보내면 받는 사람만 볼 수 있죠!
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          웹사이트도 마찬가지예요. <strong>HTTP</strong>는 엽서처럼 내용이
          그대로 보이고,
          <strong> HTTPS</strong>는 봉투처럼 암호화되어 안전하게 전달돼요! 🔐
        </p>
      </section>

      {/* HTTP란? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          📮 HTTP: 인터넷의 엽서
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20">
          <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📭</span>
            HTTP (Hyper Text Transfer Protocol)
          </h3>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            HTTP는 "웹 페이지 전송 규칙"이에요. 인터넷에서 정보를 주고받는
            기본적인 방법이죠!
          </p>
          <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              💭 예시: http://example.com 처럼 주소 맨 앞에 http://가 붙어요.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            HTTP의 문제점:
          </h4>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">⚠️</span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>모든 내용이 그대로 보여요!</strong> 비밀번호를 입력해도
                다른 사람이 볼 수 있어요.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">😱</span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>해커가 정보를 훔칠 수 있어요!</strong> 은행 정보,
                개인정보가 위험해요.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">🤔</span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>중간에 바뀔 수 있어요!</strong> 누군가 내용을 슬쩍
                바꿔도 알 수 없어요.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* HTTPS란? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔐 HTTPS: 인터넷의 안전한 봉투
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
          <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">🔒</span>
            HTTPS (HTTP Secure)
          </h3>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            HTTPS는 HTTP에 "S(Secure, 안전한)"를 붙인 거예요. 모든 정보를
            암호화해서 안전하게 보내요!
          </p>
          <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              💭 예시: https://example.com 처럼 주소 맨 앞에 https://가 붙고,
              브라우저에 자물쇠 🔒 아이콘이 보여요!
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            HTTPS의 장점:
          </h4>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">🔐</span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>암호화로 안전해요!</strong> 정보가 암호로 바뀌어서 다른
                사람이 못 봐요.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>진짜 사이트인지 확인해요!</strong> 가짜 사이트에 속지
                않아요.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">🛡️</span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>중간에 못 바꿔요!</strong> 정보가 안전하게 전달돼요.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">⚡</span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>구글이 좋아해요!</strong> HTTPS 사이트가 검색 결과
                상위에 나와요.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 암호화는 어떻게? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔑 암호화는 어떻게 작동할까요?
        </h2>

        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          HTTPS는{" "}
          <strong className="text-purple-600 dark:text-purple-400">
            SSL/TLS
          </strong>
          라는 기술을 사용해요. 복잡해 보이지만 쉽게 설명할게요!
        </p>

        <div className="mb-6 rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            🗝️ 비밀 암호 만들기 (3단계)
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  인사하기
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  브라우저: "안녕하세요, HTTPS로 연결하고 싶어요!"
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  인증서 받기
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  서버: "여기 제 신분증(인증서)이에요. 저 진짜예요!"
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  비밀 암호 만들기
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  브라우저 + 서버: "우리만 아는 비밀 암호를 만들어요!" →
                  이제부터 이 암호로 대화해요! 🔐
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💭 비유: 두 친구가 만나서 둘만 아는 비밀 암호를 정하는 것과 같아요.
            다른 사람은 그 암호를 모르니까 대화를 엿들어도 무슨 말인지 모르죠!
          </p>
        </div>
      </section>

      {/* 실생활 예시 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🌍 실생활에서는 언제 사용할까요?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* HTTPS 꼭 필요 */}
          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
            <h3 className="mb-4 flex items-center text-xl font-bold text-green-900 dark:text-green-300">
              <span className="mr-2 text-2xl">✅</span>
              HTTPS 꼭 필요!
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">🏦</span>
                <span>
                  <strong>인터넷 뱅킹:</strong> 돈 관련 정보
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🛒</span>
                <span>
                  <strong>쇼핑몰:</strong> 카드 번호, 주소
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>
                  <strong>이메일:</strong> 개인 정보, 비밀
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔐</span>
                <span>
                  <strong>로그인:</strong> 아이디, 비밀번호
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">💬</span>
                <span>
                  <strong>채팅:</strong> 개인적인 대화
                </span>
              </li>
            </ul>
          </div>

          {/* HTTP도 괜찮 */}
          <div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 flex items-center text-xl font-bold text-gray-900 dark:text-white">
              <span className="mr-2 text-2xl">📰</span>
              HTTP도 괜찮음 (하지만 HTTPS가 더 좋아요!)
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📰</span>
                <span>
                  <strong>뉴스 읽기:</strong> 공개된 정보
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🎬</span>
                <span>
                  <strong>동영상 보기:</strong> 개인정보 없음
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📖</span>
                <span>
                  <strong>블로그 읽기:</strong> 그냥 읽기만
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-500">
              💡 요즘은 대부분의 사이트가 HTTPS를 사용해요!
            </p>
          </div>
        </div>
      </section>

      {/* 자물쇠 확인하는 법 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔍 HTTPS인지 확인하는 방법
        </h2>

        <div className="space-y-6">
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              1️⃣ 주소창 확인하기
            </h3>
            <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
              웹사이트 주소 맨 앞을 보세요:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rounded bg-white p-3 dark:bg-gray-800">
                <span className="text-2xl">🔒</span>
                <code className="text-green-600 dark:text-green-400">
                  https://
                </code>
                <span className="text-gray-700 dark:text-gray-300">
                  ← 안전해요!
                </span>
              </div>
              <div className="flex items-center space-x-2 rounded bg-white p-3 dark:bg-gray-800">
                <span className="text-2xl">⚠️</span>
                <code className="text-red-600 dark:text-red-400">http://</code>
                <span className="text-gray-700 dark:text-gray-300">
                  ← 조심하세요!
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              2️⃣ 자물쇠 아이콘 찾기
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              주소창 왼쪽에 <strong>자물쇠 🔒 아이콘</strong>이 있으면 안전한
              사이트예요! 클릭하면 인증서 정보를 볼 수 있어요.
            </p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              3️⃣ 경고 메시지 주의!
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              브라우저가 <strong>"안전하지 않음"</strong> 또는{" "}
              <strong>"주의 필요"</strong>라고 경고하면, 개인정보를 입력하지
              마세요! ⚠️
            </p>
          </div>
        </div>
      </section>

      {/* 쉬운 비유로 정리 */}
      <section className="mb-12 rounded-lg bg-gradient-to-r from-blue-100 to-green-100 p-8 dark:from-blue-900/30 dark:to-green-900/30">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          📝 한 문장으로 정리하면?
        </h2>

        <div className="space-y-4 text-lg">
          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <p className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">
              HTTP = 엽서 (누구나 볼 수 있어요) ✉️
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              정보가 그대로 보여요. 간단하지만 안전하지 않아요!
            </p>
          </div>

          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <p className="mb-4 text-xl font-bold text-green-600 dark:text-green-400">
              HTTPS = 봉투에 넣은 편지 (받는 사람만 볼 수 있어요) 📨🔐
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              정보가 암호화되어 안전해요. 요즘은 대부분 HTTPS를 사용해요!
            </p>
          </div>

          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
              기억하세요! 🔒
            </p>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 자물쇠 🔒 아이콘 확인하기</li>
              <li>✅ https:// 로 시작하는지 보기</li>
              <li>✅ 개인정보 입력할 때는 꼭 HTTPS!</li>
              <li>✅ 경고 메시지 나오면 조심!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 재미있는 사실 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          💡 재미있는 사실!
        </h2>

        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="mr-3 text-2xl">🌐</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>구글은 HTTPS를 좋아해요!</strong> HTTPS 사이트는 검색
              결과에서 더 높은 순위를 받아요. 그래서 요즘은 거의 모든 사이트가
              HTTPS를 사용해요!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">⚡</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>HTTPS가 더 빨라요!</strong> 예전에는 암호화 때문에
              느렸지만, 요즘은 오히려 HTTP/2 같은 신기술 덕분에 HTTPS가 더
              빨라요!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">🔓</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>무료로 HTTPS를 쓸 수 있어요!</strong> Let's Encrypt라는
              곳에서 무료로 인증서를 제공해서, 누구나 쉽게 HTTPS를 사용할 수
              있어요!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">📱</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>모바일에서도 중요해요!</strong> 공공 와이파이에서 인터넷을
              쓸 때, HTTPS가 아니면 다른 사람이 내 정보를 훔칠 수 있어요!
            </p>
          </li>
        </ul>
      </section>

      {/* 마무리 */}
      <section className="rounded-lg bg-gradient-to-r from-green-500 to-blue-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">
          🎉 이제 HTTP와 HTTPS를 이해했어요!
        </h2>
        <p className="mb-4 text-lg opacity-90">
          웹사이트를 방문할 때마다 주소창을 확인하는 습관을 만들어보세요! 자물쇠
          🔒가 있으면 안전한 사이트예요.
        </p>
        <p className="text-lg opacity-90">
          다음 시간에는 더 재미있는 IT 이야기로 찾아올게요! 👋
        </p>
      </section>
    </>
  );
}

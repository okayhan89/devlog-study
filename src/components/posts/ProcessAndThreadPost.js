export default function ProcessAndThreadPost() {
  return (
    <>
      {/* 프로세스와 스레드 쉬운 설명 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🏢 프로세스와 스레드가 뭐예요?
        </h2>

        <div className="mb-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
          <p className="text-xl font-semibold text-blue-900 dark:text-blue-300">
            프로세스 = 회사 🏢 | 스레드 = 직원 👨‍💼
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          여러분이 회사를 운영한다고 생각해볼까요? 🏢
          <strong className="text-blue-600 dark:text-blue-400"> 회사</strong>는
          건물과 사무실이 있고, 그 안에서{" "}
          <strong className="text-green-600 dark:text-green-400">직원들</strong>
          이 일을 해요.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          컴퓨터도 마찬가지예요! <strong>프로세스</strong>는 회사처럼 프로그램이
          실행되는 공간이고,
          <strong> 스레드</strong>는 직원처럼 실제로 일을 하는 작은 단위예요! 🎯
        </p>
      </section>

      {/* 프로세스란? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🏢 프로세스: 실행 중인 프로그램
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
          <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📱</span>
            프로세스 (Process)
          </h3>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            프로세스는 <strong>"실행 중인 프로그램"</strong>이에요. 프로그램을
            더블클릭하면 프로세스가 만들어져요!
          </p>
          <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              💭 예시: 크롬 브라우저를 실행하면 "크롬 프로세스"가 만들어져요.
              워드를 실행하면 "워드 프로세스"가 만들어지죠!
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            프로세스가 가지고 있는 것들:
          </h4>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
              <h5 className="mb-3 flex items-center text-lg font-bold text-gray-900 dark:text-white">
                <span className="mr-2 text-2xl">💾</span>
                자기만의 메모리
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                각 프로세스는 자기만의 메모리 공간이 있어요. 다른 프로세스의
                메모리는 볼 수 없어요! (마치 각 회사가 자기 건물을 갖는 것처럼)
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <h5 className="mb-3 flex items-center text-lg font-bold text-gray-900 dark:text-white">
                <span className="mr-2 text-2xl">🔢</span>
                고유 번호 (PID)
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                각 프로세스는 고유한 번호가 있어요. 운영체제가 이 번호로
                프로세스를 구분해요! (사업자 등록번호 같은 거예요)
              </p>
            </div>

            <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
              <h5 className="mb-3 flex items-center text-lg font-bold text-gray-900 dark:text-white">
                <span className="mr-2 text-2xl">📊</span>
                실행 상태 정보
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                지금 어디까지 실행됐는지, 어떤 파일을 열었는지 등의 정보를
                가지고 있어요.
              </p>
            </div>

            <div className="rounded-lg bg-pink-50 p-6 dark:bg-pink-900/20">
              <h5 className="mb-3 flex items-center text-lg font-bold text-gray-900 dark:text-white">
                <span className="mr-2 text-2xl">🛠️</span>
                사용 중인 자원
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                열어놓은 파일, 네트워크 연결 등을 관리해요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 스레드란? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          👨‍💼 스레드: 실제로 일하는 직원
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
          <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">⚡</span>
            스레드 (Thread)
          </h3>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            스레드는 프로세스 안에서{" "}
            <strong>"실제로 일을 하는 작은 단위"</strong>예요. 한 프로세스 안에
            여러 스레드가 있을 수 있어요!
          </p>
          <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              💭 예시: 워드 프로세스 안에 "글자 입력하는 스레드", "자동 저장하는
              스레드", "맞춤법 검사하는 스레드"가 동시에 일해요!
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            스레드의 특징:
          </h4>

          <ul className="space-y-4">
            <li className="flex items-start rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <span className="mr-3 text-2xl">🤝</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  같은 프로세스 안의 스레드들은 메모리를 공유해요
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  같은 회사 직원들이 사무실을 같이 쓰는 것처럼, 스레드들은
                  메모리를 공유해요!
                </p>
              </div>
            </li>

            <li className="flex items-start rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <span className="mr-3 text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  빠르게 만들고 전환할 수 있어요
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  프로세스보다 훨씬 가볍고 빠르게 만들 수 있어요. 마치 신입
                  직원을 뽑는 게 새 회사 만드는 것보다 쉬운 것처럼!
                </p>
              </div>
            </li>

            <li className="flex items-start rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <span className="mr-3 text-2xl">🔄</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  동시에 여러 일을 할 수 있어요
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  여러 스레드가 동시에 일하면, 프로그램이 훨씬 빨라져요! (여러
                  직원이 일하면 빨리 끝나는 것처럼)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 프로세스 vs 스레드 비교 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          ⚖️ 프로세스 vs 스레드 - 뭐가 다를까요?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <th className="border border-gray-300 p-4">비교 항목</th>
                <th className="border border-gray-300 p-4">🏢 프로세스</th>
                <th className="border border-gray-300 p-4">👨‍💼 스레드</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 p-4 font-semibold">
                  의미
                </td>
                <td className="border border-gray-300 p-4">
                  실행 중인 프로그램 (회사)
                </td>
                <td className="border border-gray-300 p-4">
                  프로세스 안의 실행 단위 (직원)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  메모리
                </td>
                <td className="border border-gray-300 p-4">
                  독립적인 메모리 공간
                </td>
                <td className="border border-gray-300 p-4">
                  같은 프로세스 내 공유
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 p-4 font-semibold">
                  생성 속도
                </td>
                <td className="border border-gray-300 p-4">
                  느림 🐢 (회사 설립)
                </td>
                <td className="border border-gray-300 p-4">
                  빠름 🚀 (직원 채용)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  통신
                </td>
                <td className="border border-gray-300 p-4">
                  어려움 (IPC 필요)
                </td>
                <td className="border border-gray-300 p-4">
                  쉬움 (메모리 공유)
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 p-4 font-semibold">
                  안정성
                </td>
                <td className="border border-gray-300 p-4">높음 (독립적)</td>
                <td className="border border-gray-300 p-4">
                  낮음 (하나 오류→전체 영향)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-semibold">
                  자원 사용
                </td>
                <td className="border border-gray-300 p-4">많음 💪</td>
                <td className="border border-gray-300 p-4">적음 ✨</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 실생활 예시 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🎮 실생활 예시로 이해하기
        </h2>

        <div className="space-y-6">
          {/* 크롬 브라우저 */}
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-3 flex items-center text-xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 text-3xl">🌐</span>
              크롬 브라우저
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>프로세스:</strong> 탭마다 별도의 프로세스가 있어요!
              </p>
              <p>
                🎯 <strong>장점:</strong> 한 탭이 죽어도 다른 탭은 괜찮아요.
              </p>
              <p>
                <strong>스레드:</strong> 각 탭 안에서 여러 스레드가 일해요.
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>화면 그리는 스레드</li>
                <li>JavaScript 실행하는 스레드</li>
                <li>네트워크 통신하는 스레드</li>
              </ul>
            </div>
          </div>

          {/* 워드 프로그램 */}
          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
            <h3 className="mb-3 flex items-center text-xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 text-3xl">📝</span>
              워드 프로그램
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>프로세스:</strong> 워드 프로그램 전체
              </p>
              <p>
                <strong>스레드들:</strong>
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>👨‍💼 글자 입력 받는 스레드 (여러분이 타이핑하는 걸 감지)</li>
                <li>💾 자동 저장하는 스레드 (5분마다 자동 저장)</li>
                <li>📖 맞춤법 검사하는 스레드 (빨간 밑줄 그어주기)</li>
                <li>🎨 화면 업데이트하는 스레드 (글자를 화면에 보여주기)</li>
              </ul>
              <p className="mt-3">
                ✨ 이 모든 일이 <strong>동시에</strong> 일어나요!
              </p>
            </div>
          </div>

          {/* 게임 */}
          <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
            <h3 className="mb-3 flex items-center text-xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 text-3xl">🎮</span>
              게임
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>프로세스:</strong> 게임 전체
              </p>
              <p>
                <strong>스레드들:</strong>
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>🎬 그래픽 렌더링 스레드 (화면에 그림 그리기)</li>
                <li>🎵 사운드 재생 스레드 (배경음악, 효과음)</li>
                <li>🧠 AI 계산 스레드 (적 캐릭터 움직임)</li>
                <li>🌐 네트워크 스레드 (온라인 멀티플레이)</li>
                <li>🎮 입력 처리 스레드 (키보드, 마우스 입력)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 멀티태스킹과 멀티스레딩 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔄 멀티태스킹 vs 멀티스레딩
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              🏢 멀티태스킹 (Multi-tasking)
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>여러 프로세스를 동시에 실행</strong>하는 것
            </p>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                💭 비유: 여러 회사가 동시에 일하는 것<br />
                📱 예시: 크롬 + 워드 + 음악 재생 동시에 실행
              </p>
            </div>
            <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <p>✅ 안정성 높음</p>
              <p>✅ 독립적으로 작동</p>
              <p>⚠️ 자원 많이 사용</p>
            </div>
          </div>

          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              👥 멀티스레딩 (Multi-threading)
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>한 프로세스 안에서 여러 스레드를 동시에 실행</strong>하는
              것
            </p>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                💭 비유: 한 회사에서 여러 직원이 일하는 것<br />
                📱 예시: 워드에서 타이핑 + 자동저장 + 맞춤법검사 동시에
              </p>
            </div>
            <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <p>✅ 효율적</p>
              <p>✅ 빠른 통신</p>
              <p>⚠️ 조심해서 프로그래밍 필요</p>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 중요할까? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🎯 왜 프로세스와 스레드가 중요할까요?
        </h2>

        <div className="space-y-6">
          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              1️⃣ 컴퓨터를 효율적으로 사용
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              여러 프로세스와 스레드가 동시에 일하면, CPU를 쉬지 않고 계속
              사용할 수 있어요. 마치 여러 직원이 교대로 일하면 회사가 24시간
              돌아가는 것처럼!
            </p>
          </div>

          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              2️⃣ 프로그램이 빨라져요
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              멀티스레딩을 사용하면 여러 일을 동시에 처리해서 프로그램이 훨씬
              빨라져요. 혼자 일하는 것보다 여러 명이 일하면 빠르잖아요!
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              3️⃣ 안정성 향상
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              프로세스를 여러 개 쓰면, 하나가 죽어도 다른 프로세스는 계속
              일해요. 크롬에서 한 탭이 죽어도 다른 탭은 괜찮은 이유예요!
            </p>
          </div>
        </div>
      </section>

      {/* 쉬운 비유로 정리 */}
      <section className="mb-12 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 p-8 dark:from-blue-900/30 dark:to-purple-900/30">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          📝 한 문장으로 정리하면?
        </h2>

        <div className="space-y-4 text-lg">
          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <p className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">
              프로세스 = 회사 🏢
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 독립적인 메모리 공간 (자기 건물)</li>
              <li>✅ 안정적이지만 무거움</li>
              <li>✅ 실행 중인 프로그램 전체</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <p className="mb-3 text-xl font-bold text-green-600 dark:text-green-400">
              스레드 = 직원 👨‍💼
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 프로세스 안에서 실제로 일함</li>
              <li>✅ 가볍고 빠름</li>
              <li>✅ 메모리 공유 (같은 사무실)</li>
              <li>✅ 여러 개가 동시에 일할 수 있음</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <p className="mb-3 text-xl font-bold text-purple-600 dark:text-purple-400">
              기억하세요! 🎯
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>
                한 회사(프로세스) 안에 여러 직원(스레드)이 있어요!
              </strong>
              <br />
              직원들이 협력해서 일하면 회사가 효율적으로 돌아가죠! 💪
            </p>
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
            <span className="mr-3 text-2xl">🎮</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>현대 게임은 수십 개의 스레드를 사용해요!</strong>
              그래픽, 사운드, AI, 물리엔진 등이 모두 별도 스레드에서 돌아요.
              그래서 요즘 게임이 부드럽고 멋져요!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">🌐</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>크롬은 탭마다 프로세스를 만들어요!</strong>
              그래서 메모리를 많이 먹지만, 한 탭이 죽어도 다른 탭은 안전해요.
              안정성을 위해 메모리를 희생한 거죠!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">⚡</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>멀티코어 CPU에서 진짜 힘을 발휘해요!</strong>
              코어가 4개면 4개의 스레드가 정말로 동시에 일할 수 있어요. 마치
              4명의 직원이 동시에 일하는 것처럼!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">🐛</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>멀티스레딩은 버그가 생기기 쉬워요!</strong>
              여러 스레드가 동시에 같은 데이터를 건드리면 문제가 생길 수 있어요.
              그래서 프로그래머들이 조심해서 만들어야 해요!
            </p>
          </li>
        </ul>
      </section>

      {/* 마무리 */}
      <section className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">
          🎉 이제 프로세스와 스레드를 이해했어요!
        </h2>
        <p className="mb-4 text-lg opacity-90">
          프로세스는 회사, 스레드는 직원이라는 걸 기억하세요! 🏢👨‍💼
        </p>
        <p className="mb-4 text-lg opacity-90">
          작업 관리자(Windows) 또는 활성 상태 보기(Mac)를 열어서 지금 실행 중인
          프로세스들을 구경해보세요!
        </p>
        <p className="text-lg opacity-90">
          다음 시간에는 더 재미있는 IT 이야기로 찾아올게요! 👋
        </p>
      </section>
    </>
  );
}

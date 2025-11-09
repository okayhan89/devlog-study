export default function RestApiPost() {
  return (
    <>
      {/* REST API 쉬운 설명 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🍔 REST API가 뭐예요?
        </h2>
        
        <div className="mb-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
          <p className="text-xl font-semibold text-blue-900 dark:text-blue-300">
            REST API = 레스토랑 주문서 📝🍽️
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          여러분이 레스토랑에 가면 어떻게 음식을 주문하나요? 🍔 
          <strong className="text-blue-600 dark:text-blue-400"> 메뉴판</strong>을 보고, 
          <strong className="text-green-600 dark:text-green-400"> 주문서</strong>에 적어서 
          <strong className="text-purple-600 dark:text-purple-400"> 웨이터</strong>에게 전달하죠!
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>REST API</strong>도 똑같아요! 프로그램들이 서로 대화할 때 사용하는 
          <strong> "약속된 규칙"</strong>이에요. 마치 레스토랑의 주문 시스템처럼요! 🎯
        </p>
      </section>

      {/* API란? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔌 먼저, API가 뭘까요?
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
          <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📱</span>
            API (Application Programming Interface)
          </h3>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            API는 <strong>"프로그램과 프로그램이 대화하는 방법"</strong>이에요!
          </p>
          <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              💭 비유: 레스토랑 주문 시스템<br/>
              - 손님(프로그램) → 주문서(API) → 주방(서버) → 음식(데이터)
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <h4 className="mb-3 flex items-center text-lg font-bold text-gray-900 dark:text-white">
              <span className="mr-2 text-2xl">👍</span>
              왜 필요할까요?
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 복잡한 내부 구조를 몰라도 돼요</li>
              <li>✅ 정해진 방식으로 요청하면 돼요</li>
              <li>✅ 안전하게 데이터를 주고받아요</li>
            </ul>
          </div>

          <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
            <h4 className="mb-3 flex items-center text-lg font-bold text-gray-900 dark:text-white">
              <span className="mr-2 text-2xl">🎯</span>
              실생활 예시
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>🗺️ 카카오맵 API: 지도 데이터</li>
              <li>☁️ 날씨 API: 날씨 정보</li>
              <li>💳 결제 API: 결제 처리</li>
            </ul>
          </div>
        </div>
      </section>

      {/* REST란? */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🌐 REST는 뭐예요?
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
          <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📋</span>
            REST (Representational State Transfer)
          </h3>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            REST는 <strong>"API를 만드는 규칙"</strong>이에요. 이 규칙을 따르면 RESTful API가 돼요!
          </p>
          <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              💭 비유: 레스토랑 주문 규칙<br/>
              1. 메뉴판에서 고르기 (URL로 자원 찾기)<br/>
              2. 주문서에 적기 (HTTP 메서드 사용)<br/>
              3. 웨이터에게 전달 (요청 보내기)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">REST의 핵심 원칙:</h4>
          
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">1️⃣ 자원(Resource) = 메뉴</h5>
              <p className="text-gray-700 dark:text-gray-300">
                모든 것을 자원으로 표현해요. 자원은 URL로 구분해요!
              </p>
              <div className="mt-2 rounded bg-white p-2 font-mono text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                예: /users, /posts, /products
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">2️⃣ 행동(Method) = 주문 방식</h5>
              <p className="text-gray-700 dark:text-gray-300">
                HTTP 메서드로 무엇을 할지 정해요!
              </p>
              <div className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>📥 GET: 가져오기 (읽기)</p>
                <p>📤 POST: 만들기 (생성)</p>
                <p>✏️ PUT: 전체 수정 (업데이트)</p>
                <p>🗑️ DELETE: 삭제</p>
              </div>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">3️⃣ 표현(Representation) = 음식 형태</h5>
              <p className="text-gray-700 dark:text-gray-300">
                데이터는 JSON, XML 등의 형태로 주고받아요!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HTTP 메서드 상세 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🎯 HTTP 메서드 - 주문 방식 4가지
        </h2>

        <div className="space-y-6">
          {/* GET */}
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 text-3xl">📥</span>
              GET - 가져오기 (Read)
            </h3>
            <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
              정보를 달라고 요청하는 거예요. "메뉴판 좀 보여주세요!"
            </p>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-gray-900 dark:text-white">예시:</p>
              <code className="block text-sm text-gray-600 dark:text-gray-400">
                GET /users → 모든 사용자 목록 가져오기<br/>
                GET /users/1 → 1번 사용자 정보 가져오기<br/>
                GET /posts/5 → 5번 게시글 가져오기
              </code>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              💡 <strong>특징:</strong> 아무것도 변경하지 않아요. 그냥 보기만!
            </p>
          </div>

          {/* POST */}
          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
            <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 text-3xl">📤</span>
              POST - 만들기 (Create)
            </h3>
            <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
              새로운 것을 만들어달라고 요청하는 거예요. "햄버거 하나 주문합니다!"
            </p>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-gray-900 dark:text-white">예시:</p>
              <code className="block text-sm text-gray-600 dark:text-gray-400">
                POST /users → 새 사용자 만들기<br/>
                POST /posts → 새 게시글 작성하기<br/>
                POST /comments → 새 댓글 달기
              </code>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              💡 <strong>특징:</strong> 새로운 데이터가 추가돼요!
            </p>
          </div>

          {/* PUT */}
          <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20">
            <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 text-3xl">✏️</span>
              PUT - 수정하기 (Update)
            </h3>
            <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
              기존 것을 수정해달라고 요청하는 거예요. "피클 빼주세요!"
            </p>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-gray-900 dark:text-white">예시:</p>
              <code className="block text-sm text-gray-600 dark:text-gray-400">
                PUT /users/1 → 1번 사용자 정보 전체 수정<br/>
                PUT /posts/5 → 5번 게시글 전체 수정<br/>
                PATCH /users/1 → 1번 사용자 정보 일부만 수정
              </code>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              💡 <strong>특징:</strong> 기존 데이터를 바꿔요!
            </p>
          </div>

          {/* DELETE */}
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
            <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <span className="mr-3 text-3xl">🗑️</span>
              DELETE - 삭제하기 (Delete)
            </h3>
            <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
              삭제해달라고 요청하는 거예요. "주문 취소요!"
            </p>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-gray-900 dark:text-white">예시:</p>
              <code className="block text-sm text-gray-600 dark:text-gray-400">
                DELETE /users/1 → 1번 사용자 삭제<br/>
                DELETE /posts/5 → 5번 게시글 삭제<br/>
                DELETE /comments/10 → 10번 댓글 삭제
              </code>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              💡 <strong>특징:</strong> 데이터가 사라져요!
            </p>
          </div>
        </div>
      </section>

      {/* 실제 예시 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🎮 실제로 어떻게 사용할까요?
        </h2>

        <div className="mb-6 rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            📱 인스타그램 같은 SNS를 만든다면?
          </h3>
          
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-blue-600 dark:text-blue-400">게시글 보기</p>
              <code className="text-sm text-gray-600 dark:text-gray-400">
                GET /posts → 모든 게시글 가져오기<br/>
                GET /posts/123 → 123번 게시글 상세 보기
              </code>
            </div>

            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-green-600 dark:text-green-400">사진 올리기</p>
              <code className="text-sm text-gray-600 dark:text-gray-400">
                POST /posts → 새 게시글 작성<br/>
                데이터: &#123; 사진, 내용, 해시태그 &#125;
              </code>
            </div>

            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-orange-600 dark:text-orange-400">내용 수정하기</p>
              <code className="text-sm text-gray-600 dark:text-gray-400">
                PUT /posts/123 → 123번 게시글 수정<br/>
                데이터: &#123; 새로운 내용, 새로운 해시태그 &#125;
              </code>
            </div>

            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <p className="mb-2 font-semibold text-red-600 dark:text-red-400">게시글 삭제하기</p>
              <code className="text-sm text-gray-600 dark:text-gray-400">
                DELETE /posts/123 → 123번 게시글 삭제
              </code>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            🛒 쇼핑몰을 만든다면?
          </h3>
          
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <code className="text-sm text-gray-600 dark:text-gray-400">
                GET /products → 상품 목록 보기<br/>
                GET /products/456 → 456번 상품 상세보기<br/>
                POST /cart → 장바구니에 추가<br/>
                POST /orders → 주문하기<br/>
                DELETE /cart/789 → 장바구니에서 삭제
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* JSON 형식 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          📦 데이터는 어떻게 생겼을까요? (JSON)
        </h2>

        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          REST API는 보통 <strong className="text-blue-600 dark:text-blue-400">JSON</strong> 형식으로 
          데이터를 주고받아요. JSON은 데이터를 정리하는 방법이에요!
        </p>

        <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
          <p className="mb-3 font-semibold text-gray-900 dark:text-white">
            예시: 사용자 정보를 가져오면?
          </p>
          <pre className="overflow-x-auto rounded bg-white p-4 text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-300">
{`{
  "id": 1,
  "name": "홍길동",
  "email": "hong@example.com",
  "age": 25,
  "hobbies": ["독서", "게임", "코딩"]
}`}
          </pre>
        </div>

        <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-gray-700 dark:text-gray-300">
            💡 <strong>이해하기 쉽죠?</strong> 중괄호 &#123; &#125;로 묶고, 
            "이름": 값 형태로 적어요. 사람이 읽기도 쉽고, 컴퓨터가 처리하기도 쉬워요!
          </p>
        </div>
      </section>

      {/* URL 구조 */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🔗 URL은 어떻게 만들까요?
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              좋은 URL 만들기 규칙
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ <strong>명사를 사용</strong>: /users, /posts (동사 X)</li>
              <li>✅ <strong>복수형 사용</strong>: /users (O) vs /user (X)</li>
              <li>✅ <strong>계층 구조</strong>: /users/1/posts (1번 사용자의 게시글)</li>
              <li>✅ <strong>소문자 사용</strong>: /users (O) vs /Users (X)</li>
              <li>✅ <strong>하이픈 사용</strong>: /my-posts (O) vs /my_posts (선택)</li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <p className="mb-3 font-semibold text-green-800 dark:text-green-300">✅ 좋은 예시</p>
              <code className="block space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>/users</p>
                <p>/users/123</p>
                <p>/users/123/posts</p>
                <p>/products/456/reviews</p>
              </code>
            </div>

            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <p className="mb-3 font-semibold text-red-800 dark:text-red-300">❌ 나쁜 예시</p>
              <code className="block space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>/getUsers (동사 사용)</p>
                <p>/User (단수형, 대문자)</p>
                <p>/users?action=get (복잡)</p>
                <p>/deleteUser123 (동사+ID)</p>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* 레스토랑 비유 총정리 */}
      <section className="mb-12 rounded-lg bg-gradient-to-r from-orange-100 to-yellow-100 p-8 dark:from-orange-900/30 dark:to-yellow-900/30">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          🍔 레스토랑 비유로 완벽 정리!
        </h2>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="p-3 text-gray-900 dark:text-white">레스토랑 🍽️</th>
                  <th className="p-3 text-gray-900 dark:text-white">REST API 💻</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">손님</td>
                  <td className="p-3">클라이언트 (앱, 웹)</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">메뉴판</td>
                  <td className="p-3">API 문서</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">주문서</td>
                  <td className="p-3">HTTP 요청</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">주문 방식</td>
                  <td className="p-3">HTTP 메서드 (GET, POST, etc.)</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">주방</td>
                  <td className="p-3">서버</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">음식</td>
                  <td className="p-3">응답 데이터 (JSON)</td>
                </tr>
                <tr>
                  <td className="p-3">웨이터</td>
                  <td className="p-3">API</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-white/80 p-6 dark:bg-gray-800/80">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>주문 과정:</strong><br/>
              1. 손님이 메뉴판을 보고 (API 문서 확인)<br/>
              2. 주문서에 적어서 (HTTP 요청 작성)<br/>
              3. 웨이터에게 전달하면 (API 호출)<br/>
              4. 주방에서 요리하고 (서버 처리)<br/>
              5. 웨이터가 음식을 가져다줘요! (응답 전달) 🍔✨
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
            <span className="mr-3 text-2xl">🌍</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>거의 모든 웹사이트가 REST API를 사용해요!</strong> 
              인스타그램, 유튜브, 넷플릭스 등 여러분이 쓰는 모든 앱이 
              뒤에서는 REST API로 대화하고 있어요!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">📱</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>웹과 앱이 같은 API를 사용해요!</strong> 
              인스타그램 웹사이트와 앱이 다르게 생겼지만, 
              같은 REST API를 사용해서 데이터를 가져와요. 한 번 만들면 두 번 쓸 수 있죠!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">🔌</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>무료 API가 많아요!</strong> 
              날씨 정보, 환율, 주식 가격 등 다양한 무료 API가 있어요. 
              여러분도 재미있는 앱을 만들 수 있어요!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">⚡</span>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>REST 말고도 GraphQL이라는 게 있어요!</strong> 
              요즘 인기 있는 다른 방식이에요. 하지만 REST가 여전히 가장 많이 쓰여요!
            </p>
          </li>
        </ul>
      </section>

      {/* 마무리 */}
      <section className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold">🎉 이제 REST API를 이해했어요!</h2>
        <p className="mb-4 text-lg opacity-90">
          REST API는 레스토랑 주문하는 것처럼 간단해요! 🍔
        </p>
        <p className="mb-4 text-lg opacity-90">
          <strong>기억하세요:</strong><br/>
          - URL로 메뉴(자원) 정하기 📋<br/>
          - HTTP 메서드로 주문 방식 정하기 📥📤<br/>
          - JSON으로 데이터 주고받기 📦
        </p>
        <p className="text-lg opacity-90">
          다음 시간에는 더 재미있는 IT 이야기로 찾아올게요! 👋
        </p>
      </section>
    </>
  );
}


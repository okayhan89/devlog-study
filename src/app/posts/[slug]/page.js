import { notFound } from 'next/navigation';
import Link from 'next/link';
import HttpVsHttpsPost from '@/components/posts/HttpVsHttpsPost';
import ProcessAndThreadPost from '@/components/posts/ProcessAndThreadPost';
import RestApiPost from '@/components/posts/RestApiPost';
import CodingTestRoadmapPost from '@/components/posts/CodingTestRoadmapPost';
import FrontendInterviewGuidePost from '@/components/posts/FrontendInterviewGuidePost';
import BackendInterviewGuidePost from '@/components/posts/BackendInterviewGuidePost';

// 포스트 데이터 (나중에 데이터베이스나 CMS로 교체 가능)
const posts = {
  'operating-system-for-kids': {
    title: '🎮 운영체제(OS)란? 초등학생도 이해하는 쉬운 설명!',
    date: '2024. 11. 9',
    category: '운영체제',
    readTime: '5분',
    tags: ['운영체제', 'OS', '기초개념', '초보자'],
    author: '개발자 이름',
    content: `운영체제란 무엇일까요?`,
  },
  'http-vs-https': {
    title: '🔒 HTTP vs HTTPS - 왜 자물쇠가 중요할까?',
    date: '2024. 11. 10',
    category: '네트워크',
    readTime: '6분',
    tags: ['HTTP', 'HTTPS', '보안', 'SSL', '네트워크'],
    author: '개발자 이름',
    content: `HTTP와 HTTPS의 차이`,
  },
  'process-and-thread': {
    title: '🏢 프로세스와 스레드 - 회사와 직원 이야기',
    date: '2024. 11. 10',
    category: '운영체제',
    readTime: '7분',
    tags: ['프로세스', '스레드', '운영체제', '멀티태스킹'],
    author: '개발자 이름',
    content: `프로세스와 스레드의 차이`,
  },
  'what-is-rest-api': {
    title: '🍔 REST API란? - 레스토랑 주문하기',
    date: '2024. 11. 10',
    category: '백엔드',
    readTime: '6분',
    tags: ['REST', 'API', 'RESTful', '웹 개발', '백엔드'],
    author: '개발자 이름',
    content: `REST API 이해하기`,
  },
  'coding-test-roadmap': {
    title: '🚀 코딩 테스트 로드맵 - 8주 만에 합격 전략 세우기',
    date: '2024. 11. 11',
    category: '코딩테스트',
    readTime: '15분',
    tags: ['알고리즘', '코딩테스트', '취업준비', '면접'],
    author: 'DevLog 팀',
    content:
      '코딩 테스트를 처음 준비해도 8주 만에 합격할 수 있도록 로드맵, 학습 전략, 추천 문제, 실전 팁까지 모두 정리했습니다.',
  },
  'frontend-interview-guide': {
    title: '🎯 프론트엔드 면접 가이드 - 핵심 질문과 답변 전략',
    date: '2024. 11. 11',
    category: '프론트엔드',
    readTime: '18분',
    tags: ['프론트엔드', '면접', 'JavaScript', 'React', '웹'],
    author: 'DevLog 팀',
    content:
      '프론트엔드 면접에서 자주 물어보는 HTML/CSS, JavaScript, React, 성능, 접근성 질문에 답변하는 방법과 실전 전략을 정리했습니다.',
  },
  'backend-interview-guide': {
    title: '🏗️ 백엔드 면접 가이드 - 아키텍처부터 시스템 디자인까지',
    date: '2024. 11. 11',
    category: '백엔드',
    readTime: '20분',
    tags: ['백엔드', '시스템디자인', '데이터베이스', 'DevOps', '면접'],
    author: 'DevLog 팀',
    content:
      '백엔드 면접에서 다루는 네트워크, 데이터베이스, 확장성, 보안, DevOps 질문에 대비할 수 있도록 로드맵과 사례 기반 답변을 제공합니다.',
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 150),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <article className="container mx-auto max-w-4xl px-4 py-12">
        {/* 뒤로 가기 버튼 */}
        <Link 
          href="/"
          className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          홈으로 돌아가기
        </Link>

        {/* 포스트 헤더 */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              {post.category}
            </span>
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readTime} 읽기</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-gray-500 dark:text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* 포스트 본문 */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* slug에 따라 다른 포스트 렌더링 */}
          {slug === 'http-vs-https' && <HttpVsHttpsPost />}
          {slug === 'process-and-thread' && <ProcessAndThreadPost />}
          {slug === 'what-is-rest-api' && <RestApiPost />}
          {slug === 'coding-test-roadmap' && <CodingTestRoadmapPost />}
          {slug === 'frontend-interview-guide' && <FrontendInterviewGuidePost />}
          {slug === 'backend-interview-guide' && <BackendInterviewGuidePost />}
          
          {/* 운영체제 포스트 (기존) */}
          {slug === 'operating-system-for-kids' && (
          <>
          <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              🎮 운영체제가 뭐예요?
            </h2>
            
            <div className="mb-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <p className="text-xl font-semibold text-blue-900 dark:text-blue-300">
                운영체제(OS)는 컴퓨터의 "선생님" 같은 존재예요! 🧑‍🏫
              </p>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              여러분이 학교에서 공부할 때를 생각해볼까요? 선생님이 없다면 교실이 어떻게 될까요?
              학생들이 마구 떠들고, 누가 칠판을 쓸지도 정하지 못하고, 교과서도 찾을 수 없겠죠? 😵
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <strong className="text-blue-600 dark:text-blue-400">운영체제</strong>는 바로 
              컴퓨터 안의 "선생님"입니다! 컴퓨터 안에 있는 모든 것들을 정리정돈하고, 
              프로그램들이 싸우지 않고 차례차례 일할 수 있도록 도와줘요.
            </p>
          </section>

          {/* 운영체제가 하는 일 */}
          <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              🎯 운영체제는 무슨 일을 할까요?
            </h2>

            <div className="space-y-8">
              {/* 1. 프로그램 관리 */}
              <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
                <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="mr-3 text-3xl">📱</span>
                  1. 프로그램들을 관리해요
                </h3>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  여러분이 게임도 하고, 유튜브도 보고, 숙제도 하고 싶을 때, 
                  운영체제가 "지금은 게임 차례, 다음은 유튜브 차례"라고 정리해줘요.
                </p>
                <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                    💭 예시: 크롬(Chrome)도 켜고, 카카오톡도 켜고, 게임도 켜놨어요. 
                    운영체제가 세 개를 번갈아가면서 조금씩 일하게 해줘요. 너무 빨라서 
                    우리 눈에는 동시에 하는 것처럼 보이죠!
                  </p>
                </div>
              </div>

              {/* 2. 메모리 관리 */}
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
                <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="mr-3 text-3xl">🧠</span>
                  2. 메모리(기억력)를 관리해요
                </h3>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  컴퓨터의 메모리는 책상 같아요. 책상이 작으면 책을 많이 펼칠 수 없죠? 
                  운영체제는 책상 위에 무엇을 올려놓을지 정해줘요.
                </p>
                <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                    💭 예시: 게임을 실행하면 "이 게임은 책상(메모리)의 이 부분을 써!"라고 
                    자리를 정해줘요. 게임을 끄면 "이제 그 자리는 비었으니까 다른 프로그램이 써!"
                    라고 정리해줘요.
                  </p>
                </div>
              </div>

              {/* 3. 파일 관리 */}
              <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20">
                <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="mr-3 text-3xl">📁</span>
                  3. 파일(자료)을 정리해요
                </h3>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  여러분의 사진, 동영상, 게임 저장 파일들을 어디에 저장했는지 기억하고, 
                  찾아주는 역할을 해요. 마치 도서관 사서 선생님처럼요!
                </p>
                <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                    💭 예시: "내 문서"라는 폴더에 사진을 저장하면, 나중에 찾고 싶을 때 
                    운영체제가 "여기 있어요!"라고 보여줘요.
                  </p>
                </div>
              </div>

              {/* 4. 하드웨어 관리 */}
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
                <h3 className="mb-3 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="mr-3 text-3xl">⚙️</span>
                  4. 컴퓨터 부품들을 관리해요
                </h3>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  키보드로 글자를 치면, 마우스를 움직이면, 스피커에서 소리가 나게 하는 것도 
                  모두 운영체제가 해줘요!
                </p>
                <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                    💭 예시: 키보드를 누르면 → 운영체제가 받아서 → 프로그램에 전달해요. 
                    프린터로 인쇄하고 싶으면 → 운영체제가 프린터에게 "인쇄해!"라고 명령해줘요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 유명한 운영체제들 */}
          <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              🌟 우리가 사용하는 운영체제들
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6 dark:from-blue-900/30 dark:to-blue-800/30">
                <div className="mb-3 text-4xl">🪟</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Windows (윈도우)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  대부분의 학교 컴퓨터와 PC방에서 사용해요. 게임하기 좋아요!
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-gray-50 to-gray-200 p-6 dark:from-gray-800 dark:to-gray-700">
                <div className="mb-3 text-4xl">🍎</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  macOS (맥OS)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  애플 컴퓨터(맥북, 아이맥)에서 사용해요. 디자인이 예뻐요!
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-6 dark:from-green-900/30 dark:to-green-800/30">
                <div className="mb-3 text-4xl">🤖</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Android / iOS
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  스마트폰에서 사용하는 운영체제예요. 안드로이드와 아이폰!
                </p>
              </div>
            </div>
          </section>

          {/* 쉬운 비유로 정리 */}
          <section className="mb-12 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 p-8 dark:from-purple-900/30 dark:to-pink-900/30">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              🎭 한 문장으로 정리하면?
            </h2>
            
            <div className="space-y-4 text-lg">
              <p className="rounded-lg bg-white/80 p-4 dark:bg-gray-800/80">
                <strong className="text-purple-600 dark:text-purple-400">운영체제</strong>는 
                <strong className="text-pink-600 dark:text-pink-400"> 컴퓨터의 선생님</strong>이에요! 👨‍🏫
              </p>
              
              <p className="rounded-lg bg-white/80 p-4 dark:bg-gray-800/80">
                프로그램들이 차례차례 일하도록 정리하고,<br />
                메모리(기억력)를 나눠주고,<br />
                파일(자료)을 정리하고,<br />
                키보드, 마우스, 스피커 같은 부품들을 관리해요!
              </p>

              <p className="rounded-lg bg-white/80 p-4 dark:bg-gray-800/80">
                운영체제가 없으면 컴퓨터는 아무것도 할 수 없어요! 😱<br />
                마치 선생님 없는 교실처럼 혼란스러울 거예요.
              </p>
            </div>
          </section>

          {/* 재미있는 사실 */}
          <section className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-900">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              💡 재미있는 사실!
            </h2>
            
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="mr-3 text-2xl">🚀</span>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>운영체제는 정말 바빠요!</strong> 1초에 수천 번씩 일을 처리해요. 
                  우리가 느끼지 못할 정도로 빠르답니다!
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">🎮</span>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>게임기에도 운영체제가 있어요!</strong> 닌텐도 스위치, 플레이스테이션, 
                  Xbox 모두 자기만의 운영체제가 있어요.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">🌍</span>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>세계에서 가장 많이 쓰는 운영체제는?</strong> 스마트폰의 Android예요! 
                  전 세계 사람들이 사용하고 있답니다.
                </p>
              </li>
            </ul>
          </section>

          {/* 마무리 */}
          <section className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <h2 className="mb-4 text-3xl font-bold">🎉 이제 운영체제를 이해했어요!</h2>
            <p className="mb-4 text-lg opacity-90">
              운영체제는 컴퓨터가 잘 작동하도록 도와주는 "선생님" 같은 존재라는 것을 기억하세요!
            </p>
            <p className="text-lg opacity-90">
              다음에는 더 재미있는 컴퓨터 이야기로 찾아올게요! 👋
            </p>
          </section>
          </>
          )}
        </div>

        {/* 공유 버튼 */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
              공유하기
            </button>
          </div>
          <Link 
            href="/"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            목록으로 →
          </Link>
        </div>
      </article>
    </div>
  );
}


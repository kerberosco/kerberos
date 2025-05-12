# Kerberos Project

Next.js와 Tailwind CSS를 사용한 웹 애플리케이션 프로젝트입니다.

## 기술 스택

### 메인 패키지

- Next.js ^15.0.3
- React ^18.3.1
- React DOM ^18.3.1
- Tailwind CSS ^3.4.1
- Framer Motion ^12.9.2
- Autoprefixer ^10.4.21

### 개발 도구

- TypeScript ^5
- ESLint ^8
- @types/react ^19
- @types/react-dom ^19
- @types/node ^20

## 시작하기

개발 서버 실행:

```bash
npm run dev
# or
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 결과를 확인하세요.

## 스크립트

```bash
npm run dev    # 개발 서버 실행
npm run build  # 프로덕션용 빌드
npm run start  # 프로덕션 서버 실행
npm run lint   # 린트 검사 실행
```

## 커밋 메시지 규칙

커밋 메시지는 다음 형식을 따릅니다:

```
type: subject
```

### 커밋 타입 (Type)

- `chore`: 빌드 프로세스, 라이브러리 설치, 개발 환경 설정 등 프로젝트 유지보수 작업
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가
- `perf`: 성능 개선

### 예시

```bash
feat: add login page
fix: resolve navigation bar display issue
docs: update README.md
```

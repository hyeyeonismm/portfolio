import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>페이지가 준비되지 않았어요</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}

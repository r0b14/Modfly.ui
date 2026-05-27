import Link from "next/link";

interface PagerLink {
  href: string;
  label: string;
  title: string;
}

interface PagerProps {
  prev?: PagerLink;
  next?: PagerLink;
}

export function Pager({ prev, next }: PagerProps) {
  return (
    <div className="pager">
      {prev ? (
        <Link href={prev.href} className="pager-card">
          <div className="pager-label">
            <span className="arrow">←</span>
            {prev.label}
          </div>
          <div className="pager-title">{prev.title}</div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={next.href} className="pager-card next">
          <div className="pager-label">
            {next.label}
            <span className="arrow">→</span>
          </div>
          <div className="pager-title">{next.title}</div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

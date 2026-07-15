import Link from 'next/link';

type EditorialNoteProps = {
  checked?: string;
  note?: string;
};

export default function EditorialNote({
  checked = 'July 15, 2026',
  note = 'Facts are checked against first-party sources and clearly separated from trailer interpretation.',
}: EditorialNoteProps) {
  return (
    <aside className="editorial-note" aria-label="Editorial verification note">
      <div>
        <span>EDITORIAL DESK</span>
        <strong>DearPassengers.net Editorial Team</strong>
      </div>
      <p>{note}</p>
      <div className="editorial-note-links">
        <small>Last verified {checked}</small>
        <Link href="/editorial-policy">How we verify information →</Link>
      </div>
    </aside>
  );
}

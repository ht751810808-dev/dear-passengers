'use client';

import { useState } from 'react';

export type FaqItem = { question: string; answer: string };

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <article className={`faq-item ${open ? 'is-open' : ''}`} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{open ? '−' : '+'}</span>
              </button>
            </h3>
            <div className="faq-answer" hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

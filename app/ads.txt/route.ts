export const dynamic = 'force-static';

export function GET() {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || 'ca-pub-4159784234426326';
  const validId = adsenseId?.match(/^ca-(pub-\d+)$/)?.[1];
  const content = validId
    ? `google.com, ${validId}, DIRECT, f08c47fec0942fa0\n`
    : '# Google AdSense publisher ID has not been configured yet.\n';

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

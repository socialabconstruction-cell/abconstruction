/**
 * Renders JSON-LD structured data as a native <script> tag.
 * Follows the Next.js recommendation: stringify and escape `<` to avoid XSS.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

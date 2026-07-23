import { defaultLocale, getDictionary, localizedPath } from "@/lib/i18n";
import { Button } from "@/components/common/Button";

// A locale can't be resolved from the URL for a true 404, so this falls
// back to the default locale's copy rather than guessing.
export default function LocaleNotFound() {
  const messages = getDictionary(defaultLocale);
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-20 text-center">
      <h1 className="text-2xl font-semibold text-ink">{messages.notFound.title}</h1>
      <p className="mt-3 max-w-md text-ink-soft">{messages.notFound.body}</p>
      <Button href={localizedPath(defaultLocale, "/")} variant="main" className="mt-6">
        {messages.notFound.backHome}
      </Button>
    </div>
  );
}

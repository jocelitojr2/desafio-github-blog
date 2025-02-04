export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffInMs = date.getTime() - now.getTime();
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24)); // Converte milissegundos para dias

  const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
  return rtf.format(diffInDays, "day");
}

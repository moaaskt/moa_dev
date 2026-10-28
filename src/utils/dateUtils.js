/**
 * Formata um timestamp / ISO date string para formato relativo determinístico (PT/EN)
 * Ex: "há 2 horas", "há 3 dias" | "2 hours ago", "3 days ago"
 *
 * @param {string|number|Date} dateInput
 * @param {string} lang 'pt' | 'en'
 * @returns {string}
 */
export function formatRelativeTime(dateInput, lang = 'pt') {
  if (!dateInput) return '';

  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return '';

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const isEn = lang.startsWith('en');

  // Menos de 1 minuto
  if (diffInSeconds < 60) {
    return isEn ? 'just now' : 'agora mesmo';
  }

  // Minutos
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    if (isEn) {
      return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
    }
    return diffInMinutes === 1 ? 'há 1 minuto' : `há ${diffInMinutes} minutos`;
  }

  // Horas
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    if (isEn) {
      return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
    }
    return diffInHours === 1 ? 'há 1 hora' : `há ${diffInHours} horas`;
  }

  // Dias
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    if (isEn) {
      return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
    }
    return diffInDays === 1 ? 'há 1 dia' : `há ${diffInDays} dias`;
  }

  // Meses
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    if (isEn) {
      return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
    }
    return diffInMonths === 1 ? 'há 1 mês' : `há ${diffInMonths} meses`;
  }

  // Anos
  const diffInYears = Math.floor(diffInDays / 365);
  if (isEn) {
    return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
  }
  return diffInYears === 1 ? 'há 1 ano' : `há ${diffInYears} anos`;
}


/**
 * Deadline Calculation Utilities with Asia/Kolkata timezone awareness
 */

export function getNowInIST() {
  const now = new Date();
  // Return Date object converted or represented in IST context
  return now;
}

/**
 * Calculates remaining time and urgency category for a deadline ISO string.
 * @param {string} dueDateStr - ISO date string e.g. "2026-10-10T23:59:59+05:30"
 */
export function calculateDeadlineStatus(dueDateStr) {
  const now = getNowInIST();
  const targetDate = new Date(dueDateStr);
  const diffMs = targetDate.getTime() - now.getTime();

  if (diffMs <= 0) {
    return {
      isPast: true,
      urgency: 'EXPIRED',
      badgeClass: 'badge-expired',
      remainingText: 'Expired',
      diffDays: -1
    };
  }

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remHours = hours % 24;
  const remMinutes = minutes % 60;

  // Determine calendar day difference in IST
  const nowISTString = now.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" });
  const targetISTString = targetDate.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" });

  const nowDateOnly = new Date(nowISTString);
  const targetDateOnly = new Date(targetISTString);
  const dayDiffCalendar = Math.round((targetDateOnly - nowDateOnly) / (1000 * 60 * 60 * 24));

  let urgency = 'NORMAL';
  let badgeClass = 'badge-normal';
  let bannerPrefix = '🔵 UPDATE';

  if (dayDiffCalendar === 0) {
    urgency = 'URGENT';
    badgeClass = 'badge-urgent';
    bannerPrefix = '🔴 URGENT';
  } else if (dayDiffCalendar === 1) {
    urgency = 'WARNING';
    badgeClass = 'badge-warning';
    bannerPrefix = '🟠 WARNING';
  } else if (dayDiffCalendar >= 2 && dayDiffCalendar <= 3) {
    urgency = 'UPCOMING';
    badgeClass = 'badge-upcoming';
    bannerPrefix = '🟡 UPCOMING';
  }

  let remainingText = '';
  if (days > 0) {
    remainingText = `${days}d ${remHours}h remaining`;
  } else if (hours > 0) {
    remainingText = `${hours}h ${remMinutes}m remaining`;
  } else {
    remainingText = `${remMinutes} mins remaining`;
  }

  return {
    isPast: false,
    urgency,
    badgeClass,
    bannerPrefix,
    remainingText,
    diffDays: dayDiffCalendar,
    days,
    hours: remHours,
    minutes: remMinutes
  };
}

export function formatDateIST(dateStr) {
  if (!dateStr) return 'N/A';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

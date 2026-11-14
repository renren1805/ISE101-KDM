import type { Announcement } from '../types/announcements';

export function formatGreeting(name: string): string {
  return `Welcome to Campus Connect, ${name}!`;
}

export const countUnread = (items: Announcement[]): number => {
  return items.filter((item) => !item.read).length;
};

export function getUnreadAnnouncements(items: Announcement[]): Announcement[] {
  return items.filter((item) => !item.read);
}

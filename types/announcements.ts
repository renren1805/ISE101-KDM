export type Announcement = {
  id: string;
  title: string;
  category: 'Academic' | 'Events' | 'Notice';
  read: boolean;
};

const announcements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
];

const titles = announcements.map(item => item.title);
const unread = announcements.filter(item => !item.read);
const firstEvent = announcements.find(item => item.category === 'Events');

const newAnnouncement: Announcement = {
  id: 'a3',
  title: 'Library schedule',
  category: 'Notice',
  read: false,
};

const { title, category } = announcements[0];
const updated = { ...announcements[0], read: true };
const allItems = [...announcements, newAnnouncement];
const message = `New ${category.toLowerCase()}: ${title}`;

type ApiAnnouncement = {
  id: string;
  title: string;
};

async function loadAnnouncements(): Promise<ApiAnnouncement[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data: unknown = await response.json();
    // In production, validate unknown API data before treating it as ApiAnnouncement[].
    return data as ApiAnnouncement[];
  } catch (error) {
    console.error('Unable to load announcements:', error);
    throw error;
  }
}

import { StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcements';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text>One campus. Connected students.</Text>
      <Text>Welcome to the Week 1 project foundation.</Text>
      <Text style={styles.unread}>Unread announcements: {unread.length}</Text>
      {sampleAnnouncements.map((item) => (
        <Text key={item.id} style={styles.item}>{item.title}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#adecc0',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  unread: {
    marginTop: 12,
    marginBottom: 8,
  },
  item: {
    marginTop: 4,
  },
});

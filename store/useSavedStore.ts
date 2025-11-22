import { create } from 'zustand';
import { NewsItem } from '../data/newsData';

interface SavedNewsState {
  savedNews: NewsItem[];
  addToSaved: (news: NewsItem) => void;
  removeFromSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}

export const useSavedStore = create<SavedNewsState>((set, get) => ({
  savedNews: [],
  addToSaved: (news) => 
    set((state) => ({
      savedNews: [...state.savedNews, news].filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      ),
    })),
  removeFromSaved: (id) =>
    set((state) => ({
      savedNews: state.savedNews.filter((news) => news.id !== id),
    })),
  isSaved: (id) => get().savedNews.some((news) => news.id === id),
}));

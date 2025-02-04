/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  user: { login: string };
  id: number;
  node_id: string;
  number: number;
  title: string;
  state: string;
  locked: boolean;
  milestone: any;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
  author_association: string;
  active_lock_reason: any;
  draft?: boolean;
  body?: string;
  timeline_url: string;
  performed_via_github_app: any;
  state_reason?: string;
  score: number;
}

interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
  name: string
  company: any
  blog: string
  location: string
  email: any
  hireable: any
  bio: any
  twitter_username: any
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface IssuesContextType {
  issues: Issue[];
  user: User | undefined;
  fetchIssues: (query?: string) => Promise<void>;
  fetchIssue: (query: string) => Promise<void>;
  selectedIssue: Issue | null;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [user, setUser] = useState<User>();
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  async function fetchIssues(query?: string) {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query ? query + ' ' : ''}repo:jocelitojr2/desafio-github-blog`,
      }
    })

    setIssues(response.data.items);
  }

  async function fetchIssue(query: string) {
    if (selectedIssue && selectedIssue.id.toString() === query) return; // Evita buscar a mesma issue
    const response = await api.get(`https://api.github.com/repos/jocelitojr2/desafio-github-blog/issues/${query}`)

    const item = await response.data;

    if (!selectedIssue || selectedIssue.id !== item.id) {
      setSelectedIssue(item); // Só atualiza o estado se a issue for diferente
    }
  }

  async function fetchUser() {
    const response = await api.get('/users/jocelitojr2');

    setUser(response.data);
  }

  useEffect(() => {
    fetchIssues();
    fetchUser();
  }, [])

  return (
    <IssuesContext.Provider value={{
      issues,
      user,
      fetchIssues,
      fetchIssue,
      selectedIssue,
    }}>
      {children}
    </IssuesContext.Provider>
  )
}
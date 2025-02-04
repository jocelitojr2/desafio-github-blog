import { ArrowSquareOut, Calendar, CaretLeft, GithubLogo, ChatCircle } from "phosphor-react";
import { PostSummaryContainer, PostSummaryInfo, PostSummarySocialList } from "./styles";
import { formatRelativeDate } from "../../utils/formatter";

interface PostSummaryProps {
  issue: {
    title: string;
    html_url: string;
    user: { login: string };
    created_at: string;
    comments: number;
  };
}

export function PostSummary({ issue }: PostSummaryProps) {
  return (
    <PostSummaryContainer>
      <PostSummaryInfo>
        <header>
          <a href="/">
            <CaretLeft size={16} />
            VOLTAR
          </a>
          <a href={issue.html_url} target="_blank">
            VER NO GITHUB
            <ArrowSquareOut size={16} />
          </a>
        </header>
        <strong>{issue.title}</strong>
        <PostSummarySocialList>
          <li>
            <GithubLogo size={22} />
            <span>{issue.user.login}</span>
          </li>
          <li>
            <Calendar size={22} />
            <span>{formatRelativeDate(new Date(issue.created_at))}</span>
          </li>
          <li>
            <ChatCircle size={22} />
            <span>{issue.comments} comentários</span>
          </li>
        </PostSummarySocialList>
      </PostSummaryInfo>
    </PostSummaryContainer>
  )
}
import { useContext } from "react";
import { Header } from "../../components/Header";
import { ProfileSummary } from "../../components/ProfileSummary";
import { SearchForm } from "./components/SearchForm";
import { IssueItem, IssuesContainer, IssuesList } from "./styles";
import { IssuesContext } from "../../contexts/IssuesContext";
import { formatRelativeDate } from "../../utils/formatter";

export function Blog() {
  const { issues } = useContext(IssuesContext)

  return (
    <div>
      <Header />
      <ProfileSummary />

      <IssuesContainer>
        <SearchForm />

        <IssuesList>
          {issues.map(issue => {
            return (
              <IssueItem key={issue.id}>
                <a href={`post/${issue.number}`}>
                  <header>
                    <strong>{issue.title}</strong>
                    <span>{formatRelativeDate(new Date(issue.created_at))}</span>
                  </header>

                  <p>{issue.body}</p>
                </a>
              </IssueItem>

            )
          })}
        </IssuesList>
      </IssuesContainer>
    </div>
  )
}
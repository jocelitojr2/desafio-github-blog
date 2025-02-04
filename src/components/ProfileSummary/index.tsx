import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileSummaryContainer, ProfileSummaryInfo, ProfileSummarySocialList } from "./styles";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";

export function ProfileSummary() {
  const { user } = useContext(IssuesContext)

  if (!user) {
    return <div>Carregando perfil...</div>;
  }

  return (
    <ProfileSummaryContainer>
      <img src={user.avatar_url} alt="" />
      <ProfileSummaryInfo>
        <header>
          <span>{user.name}</span>
          <a href={user.html_url} target="_blank">
            GITHUB
            <ArrowSquareOut size={16} />
          </a>
        </header>
        <p>{user.bio}</p>
        <ProfileSummarySocialList>
          <li>
            <GithubLogo size={22} />
            <span>{user.login}</span>
          </li>
          <li>
            <Buildings size={22} />
            <span>{user.company}</span>
          </li>
          <li>
            <Users size={22} />
            <span>{user.followers} seguidores</span>
          </li>
        </ProfileSummarySocialList>
      </ProfileSummaryInfo>
    </ProfileSummaryContainer>
  )
}
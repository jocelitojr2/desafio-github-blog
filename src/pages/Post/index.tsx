import { Navigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostSummary } from "../../components/PostSummary";
import { useContext, useEffect } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";
import { PostContainer } from "./styles";
import Markdown from 'react-markdown'


export function Post() {
  const { selectedIssue, fetchIssue } = useContext(IssuesContext)
  const { id: postId } = useParams();

  useEffect(() => {
    if (postId && (!selectedIssue || selectedIssue.id.toString() !== postId)) {
      fetchIssue(postId);
    }
  }, [postId, selectedIssue, fetchIssue]);

  if (!postId) {
    return <Navigate to="/" />;
  }

  if (!selectedIssue) {
    return <div>Carregando...</div>; // Adiciona um loading enquanto a issue carrega
  }

  return (
    <div>
      <Header />
      <PostSummary issue={selectedIssue} />
      {/* Conteúdo do post */}

      <PostContainer>
        <Markdown>{selectedIssue.body}</Markdown>
      </PostContainer>

    </div>
  )
}


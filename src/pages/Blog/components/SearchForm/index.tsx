import { useContext } from "react";
import { SearchFormContainer, SearchFormTitle } from "./styles";
import { IssuesContext } from "../../../../contexts/IssuesContext";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { issues, fetchIssues } = useContext(IssuesContext)

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <SearchFormTitle>
        <h2>Publicações</h2>
        <span>{issues.length} publicações</span>
      </SearchFormTitle>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
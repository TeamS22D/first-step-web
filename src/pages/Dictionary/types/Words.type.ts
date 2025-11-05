export interface ISearchResultProps {
    word: string;
    desc: string[];
    example: string;
}

export interface IRelatedKeywordsProps {
    keyword: string[];
    handleRelatedWord: (value: string) => void
}

export interface IWord {
  word: string;
  desc: string[];
  example: string;
}
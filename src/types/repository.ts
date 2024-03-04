export interface IGitRepositoryResponse {
  name: string;
  description: string;
  language: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface IRepository {
  name: string;
  description: string;
  language: string;
  updatedAt: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  isFavorite: boolean;
}

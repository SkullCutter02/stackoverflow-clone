export type PostType = {
  uuid: string;
};

export type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  posts: PostType[];
};

export type CommunitiesType = {
  communities: CommunityType[];
  hasMore: boolean;
};

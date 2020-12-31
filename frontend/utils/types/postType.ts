export type UserType = {
  uuid: string;
  username: string;
  reputation: number;
};

export type CommentType = {
  uuid: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

export type CommunitiesType = {
  name: string;
};

export type PostType = {
  uuid: string;
  title: string;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
  user: UserType;
  comments: CommentType[];
  communities: CommunitiesType[];
  CommunityPost: object;
};

export type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CommunityPostsType = {
  community: CommunityType;
  posts: PostType[];
  hasMore: boolean;
};

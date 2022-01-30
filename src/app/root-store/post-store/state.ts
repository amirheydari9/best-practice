import {Post} from "../../models/Post";

export interface State {
  posts: Post[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  posts: [],
  loading: false,
  error: null
};

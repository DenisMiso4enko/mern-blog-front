import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchGetPosts } from '../../store/PostsSlice';
import { TABS } from '../../constance';
import Favorites from '../../components/Favorites/Favorites';
import Popular from '../../components/Popular/Popular';

const Home = () => {
  const { page } = useSelector((state: RootState) => state.posts);
  const { activeTab } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch<AppDispatch>();

  const getResultComponent = (activeTab: string) => {
    switch (activeTab) {
      case TABS.favorites: {
        return Favorites;
      }
      case TABS.popular: {
        return Popular;
      }
      default:
        return 'postlost';
    }
  };
  const ResultComponent = getResultComponent(activeTab);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [page]);
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;

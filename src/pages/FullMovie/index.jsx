import React from 'react';
import { Typography } from '@mui/material';

import styles from './FullPost.module.scss';
import axios from 'axios';

import { Movie } from '../Home';
import { Skeleton } from '@mui/material';

export const FullMovie = () => {
  const id = '1';
  const [data, setData] = React.useState();
  const ytId = data?.youtube_url.split('watch?v=')[1];

  React.useEffect(() => {
    axios
      .get(`https://61db06d64593510017aff7a8.mockapi.io/movies/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        setData(null);
        console.warn('FullMovie', err);
      });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.topBlock}>
        <div className={styles.poster}>
          {!data ? (
            <Skeleton animation="wave" width={230} height={300} variant="rectangular" />
          ) : (
            <img src={data.imageUrl} alt="test" />
          )}
        </div>
        <div className={styles.details}>
          <Typography
            gutterBottom
            variant="h3"
            component="h3"
            classes={{ root: styles.title }}
            sx={{
              color: 'text.primary',
            }}>
            {data?.title || <Skeleton animation="wave" width={350} variant="text" />}
          </Typography>
          <div className={styles.tags}>
            {!data ? (
              <>
                <Skeleton animation="wave" width={30} height={50} variant="text" />
                <Skeleton animation="wave" width={30} height={50} variant="text" />
                <Skeleton animation="wave" width={30} height={50} variant="text" />
              </>
            ) : (
              data.tags.map((tag) => <span key={tag}>{tag}</span>)
            )}
          </div>
          <p className={styles.description}>
            {!data?.description ? (
              <>
                <Skeleton animation="wave" width={600} height={20} variant="text" />
                <Skeleton animation="wave" width={560} height={20} variant="text" />
                <Skeleton animation="wave" width={590} height={20} variant="text" />
                <Skeleton animation="wave" width={190} height={20} variant="text" />
              </>
            ) : (
              <Typography
                gutterBottom
                variant="body1"
                sx={{
                  color: 'text.primary',
                }}>
                {data.description}
              </Typography>
            )}
          </p>
        </div>
      </div>

      <div className={styles.actors}>
        <Typography
          gutterBottom
          variant="h3"
          sx={{
            color: 'text.primary',
          }}>
          Актёры
        </Typography>
        <div className={styles.actorsList}>
          {!data ? (
            <div className={styles.actor}>
              <Skeleton
                animation="wave"
                width={138}
                height={175}
                style={{ marginBottom: 10 }}
                variant="rectangular"
              />
              <Skeleton animation="wave" variant="text" width={100} />
            </div>
          ) : (
            data.actors.map((obj) => (
              <div key={obj.name} className={styles.actor}>
                {!data ? (
                  <>
                    <Skeleton
                      animation="wave"
                      width={138}
                      height={175}
                      style={{ marginBottom: 10 }}
                      variant="rectangular"
                    />
                    <Skeleton animation="wave" variant="text" width={100} />
                  </>
                ) : (
                  <div>
                    <img src={obj.imageUrl} alt="Актер" />
                    <Typography
                      gutterBottom
                      variant="h4"
                      sx={{
                        color: 'text.primary',
                      }}>
                      {obj.name}
                    </Typography>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="trailer">
        <Typography
          gutterBottom
          variant="h3"
          sx={{
            color: 'text.primary',
          }}>
          Трейлер
        </Typography>
        {!data ? (
          <Skeleton animation="wave" width={900} height={450} className={styles.iframeSkeleton} />
        ) : (
          <iframe
            width="900"
            height="450"
            src={`https://www.youtube.com/embed/${ytId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

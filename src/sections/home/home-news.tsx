import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'src/styles.css';
import { Container } from '@mui/joy';
import { m } from 'framer-motion';
import { useGetAllNewsQuery } from 'src/app/features/news/newsApiSlice';


export const HomeNews = () => {

  const { data: news, isLoading, isSuccess } = useGetAllNewsQuery('')

  const newsDefault = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      content: 'Deleniti ab magni quae, delectus beatae repudiandae, praesentium cum minima, dolor neque nobis. Praesentium ad asperiores neque voluptatem. Natus doloribus quisquam harum.'
    },
    {
      id: 2,
      title: 'Corporis, harum nesciunt vero excepturi obcaecati sed suscipit voluptatum numquam praesentium dignissimos natus quibusdam.',
      content: 'Porro ad nulla, nisi eius quisquam aliquam vitae hic tempora nostrum, omnis, quae voluptas expedita. Magnam.',
    },
  ]

  const [newsList, setNewsList] = useState(newsDefault)

  useEffect(() => {
    if (isSuccess) {
      const newNews = news.map((item: any) => {
        return ({
          id: item.id,
          title: item.title,
          content: item.content
        })
      })

      setNewsList(newNews)
    }
  }, [news])

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    /* @ts-ignore */
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    /* @ts-ignore */
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        style={{ borderWidth: 2, borderRadius: 15, borderColor: '#0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 10px #0f0', color: '#fff', flexDirection: 'column', backgroundColor: '#cccccc11', position: 'relative', gap: 10, paddingLeft: 10, paddingRight: 10, minWidth: 250, height: 250 }}
      >
        {newsList.map(item => (
          <SwiperSlide style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 40 }}>
            <m.div style={{ fontSize: 16 }}>
              {item.title}
            </m.div>
            <m.div style={{ fontSize: 14 }}>
              {item.content}
            </m.div>

          </SwiperSlide>
        )
        )}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Container>
  );
}

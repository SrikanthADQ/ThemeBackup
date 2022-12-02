import component from './index';
import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    OverPack: {
      className: 'home-page-wrapper content11-wrapper',
      playScale: 0.3,
    },
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'image',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
          className: 'title-image',
        },
        {
          name: 'title',
          children: 'A wealth of featured booths',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: '特色展台包括 Ant Design 、AntV、AntG、Egg When the stars appear, there are various products at home',
          className: 'title-content',
        },
        {
          name: 'content2',
          children: 'Now ask someone in the examination room, and I will answer your questions for you',
          className: 'title-content',
        },
      ],
    },
    button: {
      className: '',
      children: {
        a: {
          className: 'button',
          href: '#',
          children: 'Report your name immediately',
        },
      },
    },
  },
};

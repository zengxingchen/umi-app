import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const publisherInfo = '中南大学交通科技大赛作品';
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${publisherInfo}`}
      links={[
        {
          key: 'System name',
          title: '基于交通大数据的低风险驾驶诱导平台',
          href: 'https://www.csu.edu.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;

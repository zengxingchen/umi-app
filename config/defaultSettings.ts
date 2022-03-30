import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '基于交通大数据的低风险驾驶诱导平台',
  pwa: false,

  logo: 'https://raw.githubusercontent.com/zengxingchen/PublicFile/master/ImageHost/20220329192533.svg',
  iconfontUrl:
    'https://raw.githubusercontent.com/zengxingchen/PublicFile/master/ImageHost/20220329192533.svg',
};

export default Settings;

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

  logo: 'https://picture-bedd.oss-cn-beijing.aliyuncs.com/img/20220329234308.svg',
  iconfontUrl: 'https://picture-bedd.oss-cn-beijing.aliyuncs.com/img/20220329234308.svg',
};

export default Settings;

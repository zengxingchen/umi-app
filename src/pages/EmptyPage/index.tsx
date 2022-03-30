import { PageContainer } from '@ant-design/pro-layout';
import { useState, useEffect } from 'react';

import styles from './index.less';
import UploadDrag from './UploadDrag';
import { Result, Card } from 'antd';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageContainer
      content="您可以在此补充历史数据或是上传最新的交通数据，系统接收数据后，将传入后台模型进行迭代。"
      className={styles.main}
    >
      <UploadDrag />
      <Result status="success" title="数据上传成功" style={{ marginBottom: 16 }}></Result>
    </PageContainer>
  );
};

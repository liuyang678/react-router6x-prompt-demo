import { useContext, useEffect } from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';
import { Modal } from 'antd';

export function useBlocker(when?: () => boolean): void {
  const { navigator } = useContext(UNSAFE_NavigationContext);

  useEffect(() => {
    const unblock = navigator.block(({ retry }) => {
      if (when?.()) {
        Modal.confirm({
          title: 'Leave the page?',
          content:
            'It looks you have unsaved changes, if you leave the page, those changes will be lost.',
          okText: 'Leave anyway',
          cancelText: 'Stay',
          onOk() {
            unblock();
            retry();
          },
        });
      } else {
        unblock();
        retry();
      }
    });
  }, []);
}

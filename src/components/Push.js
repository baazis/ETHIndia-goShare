import { EmbedSDK } from "@pushprotocol/uiembed";
import { useEffect } from 'react';
const account = "0x35f20e288E8bA84C22BfD60D5Cd21224E1e0Fc92";

const Push = () => {
    useEffect(() => {
      if (account) { // 'your connected wallet address'
        EmbedSDK.init({
          headerText: 'Memories', // optional
          targetID: 'sdk-trigger-id', // mandatory
          appName: 'memoriesApp', // mandatory
          user: account, // mandatory
          chainId: 1, // mandatory
          viewOptions: {
              type: 'sidebar', // optional [default: 'sidebar', 'modal']
              showUnreadIndicator: true, // optional
              unreadIndicatorColor: '#cc1919',
              unreadIndicatorPosition: 'bottom-right',
          },
          theme: 'light',
          onOpen: () => {
            console.log('-> client dApp onOpen callback');
          },
          onClose: () => {
            console.log('-> client dApp onClose callback');
          }
        });
      }
  
      return () => {
        EmbedSDK.cleanup();
      };
    }, []);
}
export default Push;
import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.postBackground,
    borderColor: colors.postBackground,
  },
  postHeader: {
    backgroundColor: colors.postBackground,
    borderColor: colors.postBackground,
  },
  postHeaderTitle: {
    color: 'white',
  },
  postHeaderMeta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postHeaderMetaText: {
    color: '#BBB',
    fontSize: 12,
  },
});

export default styles;

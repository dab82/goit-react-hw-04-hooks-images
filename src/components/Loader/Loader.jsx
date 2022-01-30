import { ThreeDots } from 'react-loader-spinner';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
};

export const Loader = () => {
  return (
    <div style={styles.spinner}>
      <ThreeDots color={'#3f51b5'} width="100" ariaLabel="loading" />
    </div>
  );
};

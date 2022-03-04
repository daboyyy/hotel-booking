// hooks
import { MenuProvider } from '../hooks/useMenu';

const Providers = ({ children }) => <MenuProvider>{children}</MenuProvider>;

export default Providers;

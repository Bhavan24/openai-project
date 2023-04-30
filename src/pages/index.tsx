import AdvancedPage from './advanced';
import BasicPage from './basic';

export default function Dashboard() {
    const displayBasic = false;

    return displayBasic ? <BasicPage /> : <AdvancedPage />;
}

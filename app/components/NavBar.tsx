import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

function NavBar() {
  return (
    <Tabs>
        <TabList>
        <Tab value={1}>Tab A</Tab>
        <Tab value={2}>Tab B</Tab>
        <Tab value={3}>Tab C</Tab>
        </TabList>
    </Tabs>
  )
}

export default NavBar
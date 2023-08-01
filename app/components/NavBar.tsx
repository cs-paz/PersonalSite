import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

function NavBar() {
  return (
    <Tabs style={{marginBottom: "20px"}}>
        <TabList>
            <Tab value={1}>Home</Tab>
            <Tab value={2}>About Me</Tab>
            <Tab value={3}>Portfolio</Tab>
            <Tab value={4}>Social Media</Tab>
        </TabList>
    </Tabs>
  )
}

export default NavBar
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';

const SignInOutContainer=()=>{
    const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
    </Tabs>
    
      
  );
}
export default SignInOutContainer;

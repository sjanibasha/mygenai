// import React from 'react';
// import { Box, Button, Typography, IconButton, Paper } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import SettingsIcon from '@mui/icons-material/Settings';
// import UpgradeIcon from '@mui/icons-material/Upgrade';
// import UpcomingIcon from '@mui/icons-material/Email';


// const GenAi = () => {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 3 }}>
//         <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//           Gen.Ai
//         </Typography>
//         <Box>
//           <Button variant="contained" startIcon={<AddIcon />} sx={{ backgroundColor: '#1a73e8', mr: 2 }}>
//             Create a new interview
//           </Button>
//           <IconButton sx={{ color: '#1a73e8' }}>
//             <SettingsIcon />
//           </IconButton>
//         </Box>
//       </Box>

//       <Paper sx={{ width: '100%', textAlign: 'center', p: 5 }}>
//         {/* <img src="/path-to-your-image.svg" alt="No reports" style={{ width: '100px', marginBottom: '20px' }} /> */}
//         <Typography variant="h6" gutterBottom>
//           No reports found!
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Start by inviting Candidates to the AI interview. You will then see the reports here.
//         </Typography>
//         <Button variant="contained" startIcon={<UpcomingIcon />} sx={{ backgroundColor: '#1a73e8', mt: 2 }}>
//           Invite a Candidate
//         </Button>
//       </Paper>

//       <Button variant="outlined" startIcon={<UpgradeIcon />} sx={{ color: '#1a73e8', borderColor: '#1a73e8', mt: 2 }}>
//         Upgrade your plan
//       </Button>
//     </Box>
//   );
// };

// export default GenAi;

//mULTISTEP FORM COMPONENT TRAIL 1
// import React, { useState } from 'react';
// import { Box, Button, Typography, IconButton, Paper } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import SettingsIcon from '@mui/icons-material/Settings';
// import UpgradeIcon from '@mui/icons-material/Upgrade';
// import UpcomingIcon from '@mui/icons-material/Upcoming';
// import MultiStepForm from './MultiStepForm'; // Import the multi-step form component

// const GenAi = () => {
//   const [showMultiStepForm, setShowMultiStepForm] = useState(false);

//   const handleInviteCandidate = () => {
//     setShowMultiStepForm(true);
//   };

//   const handleCloseMultiStepForm = () => {
//     setShowMultiStepForm(false);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 3 }}>
//         <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//           Gen.Ai
//         </Typography>
//         <Box>
//           <Button variant="contained" startIcon={<AddIcon />} sx={{ backgroundColor: '#1a73e8', mr: 2 }}>
//             Create a new interview
//           </Button>
//           <IconButton sx={{ color: '#1a73e8' }}>
//             <SettingsIcon />
//           </IconButton>
//         </Box>
//       </Box>

//       <Paper sx={{ width: '100%', textAlign: 'center', p: 5 }}>
//         {/* <img src="/path-to-your-image.svg" alt="No reports" style={{ width: '100px', marginBottom: '20px' }} /> */}
//         <Typography variant="h6" gutterBottom>
//           No reports found!
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Start by inviting Candidates to the AI interview. You will then see the reports here.
//         </Typography>
//         <Button variant="contained" startIcon={<UpcomingIcon />} sx={{ backgroundColor: '#1a73e8', mt: 2 }} onClick={handleInviteCandidate}>
//           Invite a Candidate
//         </Button>
//       </Paper>

//       {showMultiStepForm && <MultiStepForm onClose={handleCloseMultiStepForm} />}
//       <Button variant="outlined" startIcon={<UpgradeIcon />} sx={{ color: '#1a73e8', borderColor: '#1a73e8', mt: 2 }}>
//         Upgrade your plan
//    </Button>
//     </Box>
//   );
// };

// export default GenAi;

//MULTISTEP FORM COMPONENT TRAIL 2

// GenAi.jsx
// GenAi.jsx
// import React, { useState } from 'react';
// import { Box, Button, Typography, IconButton, Paper, Drawer } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import SettingsIcon from '@mui/icons-material/Settings';
// import UpgradeIcon from '@mui/icons-material/Upgrade';
// import UpcomingIcon from '@mui/icons-material/Upcoming';
// import MultiStepForm from './MultiStepForm'; // Import the multi-step form component

// const GenAi = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleInviteCandidate = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }} >
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 3 }}>
//         <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//           {/* Gen.Ai */}
//         </Typography>
//         <Box>
//           <Button variant="contained" startIcon={<AddIcon />} sx={{ backgroundColor: '#1a73e8', mr: 2 }}>
//             Create a new interview
//           </Button>
//           <IconButton sx={{ color: '#1a73e8' }}>
//             <SettingsIcon />
//           </IconButton>
//         </Box>
//       </Box>

//       <Paper sx={{ width: '100%', textAlign: 'center', p: 5 }}>
//         <Typography variant="h6" gutterBottom>
//           No reports found!
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Start by inviting Candidates to the AI interview. You will then see the reports here.
//         </Typography>
//         <Button variant="contained" startIcon={<UpcomingIcon />} sx={{ backgroundColor: '#1a73e8', mt: 2 }} onClick={handleInviteCandidate}>
//           Invite a Candidate
//         </Button>
//       </Paper>

//       <Button variant="outlined" startIcon={<UpgradeIcon />} sx={{ color: '#1a73e8', borderColor: '#1a73e8', mt: 2 }}>
//         Upgrade your plan
//       </Button>

//       <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer} >
//         <Box sx={{ width: 400, p: 5 ,backgroundPositionX: 1 }} style={{marginTop:"64px"}}>
//           <MultiStepForm onClose={handleCloseDrawer} />
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

// export default GenAi;

import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Paper, Drawer } from '@mui/material';
import { Add as AddIcon, Settings as SettingsIcon, Upgrade as UpgradeIcon, Upcoming as UpcomingIcon } from '@mui/icons-material';
import MultiStepForm from './MultiStepForm'; // Import the multi-step form component

const GenAi = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleInviteCandidate = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const commonStyles = {
    backgroundColor: '#1a73e8',
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 3 }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          {/* Gen.Ai */}
        </Typography>
        <Box>
          <Button variant="contained" startIcon={<AddIcon />} sx={{ ...commonStyles, mr: 2 }}>
            Create a new interview
          </Button>
          <IconButton sx={{ color: '#1a73e8' }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      <Paper sx={{ width: '100%', textAlign: 'center', p: 5 }}>
        <Typography variant="h6" gutterBottom>
          No reports found!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Start by inviting Candidates to the AI interview. You will then see the reports here.
        </Typography>
        <Button variant="contained" startIcon={<UpcomingIcon />} sx={{ ...commonStyles, mt: 2 }} onClick={handleInviteCandidate}>
          Invite a Candidate
        </Button>
      </Paper>

      <Button variant="outlined" startIcon={<UpgradeIcon />} sx={{ color: '#1a73e8', borderColor: '#1a73e8', mt: 2 }}>
        Upgrade your plan
      </Button>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
        <Box sx={{ width: 400, p: 5, mt: 8 }}>
          <MultiStepForm onClose={handleCloseDrawer} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default GenAi;

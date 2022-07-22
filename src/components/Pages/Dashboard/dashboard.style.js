import { styled } from '@mui/material/styles';
import {Paper} from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'1px 0 10px 1px #f2f2f280',
  }));
  
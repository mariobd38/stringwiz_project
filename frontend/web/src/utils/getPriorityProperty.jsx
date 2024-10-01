import { rem } from '@mantine/core';
import { IconFlag3Filled } from '@tabler/icons-react'; // Adjust imports as necessary

const getPriorityProperty = (priorityName) => {
    switch (priorityName) {
        case 'Critical':
            // return {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#ffcfcf' }} />, color: '#bf1212'};
            return {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#df1212' }} />, color: '#610808'};
        case 'High':
            return {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#26a9dc' }} />, color: '#16499c'};
        case 'Medium':
            return {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'yellow' }} />, color: '#8D8000'};
        case 'Low':
            return {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'gray' }} />, color: '#242629'};
        default:
            return null;
    }
};

export default getPriorityProperty;
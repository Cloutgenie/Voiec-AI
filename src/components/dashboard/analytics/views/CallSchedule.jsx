import React from 'react';
import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

const mockSchedule = [
  {
    id: '1',
    time: '15:00',
    type: 'Customer Follow-up',
    assistant: 'Sales AI',
    status: 'Scheduled'
  },
  {
    id: '2',
    time: '16:30',
    type: 'Product Demo',
    assistant: 'Technical AI',
    status: 'Scheduled'
  },
  {
    id: '3',
    time: '17:15',
    type: 'Support Call',
    assistant: 'Support AI',
    status: 'Scheduled'
  }
];

const CallSchedule = () => {
  return (
    <Card>
      <Title>Upcoming Calls</Title>
      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Time</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Assistant</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockSchedule.map((call) => (
            <TableRow key={call.id}>
              <TableCell>{call.time}</TableCell>
              <TableCell>{call.type}</TableCell>
              <TableCell>{call.assistant}</TableCell>
              <TableCell>{call.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CallSchedule;
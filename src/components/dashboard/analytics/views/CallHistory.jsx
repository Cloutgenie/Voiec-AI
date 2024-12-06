import React from 'react';
import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge } from '@tremor/react';

const mockCallHistory = [
  {
    id: '1',
    timestamp: '2024-01-05 14:30',
    duration: '4m 32s',
    type: 'Customer Support',
    status: 'Completed',
    sentiment: 'Positive'
  },
  {
    id: '2',
    timestamp: '2024-01-05 13:15',
    duration: '2m 45s',
    type: 'Sales',
    status: 'Completed',
    sentiment: 'Neutral'
  },
  {
    id: '3',
    timestamp: '2024-01-05 12:00',
    duration: '5m 18s',
    type: 'Technical Support',
    status: 'Completed',
    sentiment: 'Negative'
  }
];

const CallHistory = () => {
  return (
    <Card>
      <Title>Call History</Title>
      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Time</TableHeaderCell>
            <TableHeaderCell>Duration</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Sentiment</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockCallHistory.map((call) => (
            <TableRow key={call.id}>
              <TableCell>{call.timestamp}</TableCell>
              <TableCell>{call.duration}</TableCell>
              <TableCell>{call.type}</TableCell>
              <TableCell>
                <Badge color="green">{call.status}</Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  color={
                    call.sentiment === 'Positive' ? 'green' : 
                    call.sentiment === 'Negative' ? 'red' : 
                    'yellow'
                  }
                >
                  {call.sentiment}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CallHistory;
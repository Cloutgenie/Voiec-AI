import React from 'react';
import { Card, Title, List, ListItem, Text } from '@tremor/react';
import { format } from 'date-fns';

const RecentActivity = ({ activities }) => {
  return (
    <Card>
      <Title>Recent Activity</Title>
      <List className="mt-4">
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <div>
              <Text className="font-medium">{activity.title}</Text>
              <Text className="text-gray-500">{activity.description}</Text>
            </div>
            <Text className="text-gray-500">
              {format(new Date(activity.timestamp), 'MMM d, h:mm a')}
            </Text>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default RecentActivity;
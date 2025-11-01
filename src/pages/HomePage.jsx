import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

/**
 * Home Page component displaying the Task Manager
 */
const HomePage = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your tasks efficiently with our intuitive task manager
        </p>
      </div>

      <Card>
        <TaskManager />
      </Card>
    </div>
  );
};

export default HomePage;


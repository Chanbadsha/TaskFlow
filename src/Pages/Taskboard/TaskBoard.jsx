import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    'To-Do': [
      { _id: '1', title: 'Task 1', description: 'Description for Task 1', category: 'To-Do' },
      { _id: '2', title: 'Task 2', description: 'Description for Task 2', category: 'To-Do' }
    ],
    'In Progress': [
      { _id: '3', title: 'Task 3', description: 'Description for Task 3', category: 'In Progress' }
    ],
    'Done': [
      { _id: '4', title: 'Task 4', description: 'Description for Task 4', category: 'Done' }
    ]
  });

  // Handle drag and drop event
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return; // Dropped outside the list

    // Reordering tasks within the same category
    if (source.droppableId === destination.droppableId) {
      const reorderedTasks = Array.from(tasks[source.droppableId]);
      const [removed] = reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: reorderedTasks,
      });
    } else {
      // Moving tasks between categories
      const sourceCategory = Array.from(tasks[source.droppableId]);
      const [removed] = sourceCategory.splice(source.index, 1);

      const destinationCategory = Array.from(tasks[destination.droppableId]);
      destinationCategory.splice(destination.index, 0, removed);

      setTasks({
        ...tasks,
        [source.droppableId]: sourceCategory,
        [destination.droppableId]: destinationCategory,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-board">
        {['To-Do', 'In Progress', 'Done'].map((category) => (
          <Droppable key={category} droppableId={category}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="category-column"
              >
                <h2>{category}</h2>
                {tasks[category].map((task, index) => (
                  <Draggable key={task._id} draggableId={task._id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task-card"
                      >
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;

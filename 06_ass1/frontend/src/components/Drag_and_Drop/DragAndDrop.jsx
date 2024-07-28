// components/Drag_and_Drop/DragAndDrop.jsx
import  { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialItems = [
  { id: 1, title: "Interview preparation with JavaScript 2.0", price: "Rs. 9000/-", type: "Course", imageUrl: "path/to/image1.jpg" },
  { id: 2, title: "Aptitude - Averages, Mixtures & Allegation", price: "Free", type: "Mock Test", imageUrl: "path/to/image2.jpg" },
  { id: 3, title: "Aptitude - Simple & Compound Interest", price: "Free", type: "Mock Test", imageUrl: "path/to/image3.jpg" },
  { id: 4, title: "Aptitude - Partnership", price: "Free", type: "Mock Test", imageUrl: "path/to/image4.jpg" },
  { id: 5, title: "Aptitude - Time & Work", price: "Free", type: "Mock Test", imageUrl: "path/to/image5.jpg" }
];

const DraggableCard = ({ id, title, price, type, imageUrl }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="flex items-center p-4 my-2 bg-white border border-gray-200 rounded shadow-sm">
      <img src={imageUrl} alt={title} className="w-16 h-16 rounded-full mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{price}</p>
        <span className="inline-block px-2 py-1 mt-2 text-xs font-medium text-white bg-green-500 rounded">{type}</span>
      </div>
    </div>
  );
};

const DragAndDrop = () => {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <DraggableCard key={item.id} {...item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DragAndDrop;



// function DragAndDrop() {
//   return (
//     <div>DragAndDrop</div>
//   )
// }

// export default DragAndDrop
